#!/bin/bash
# preview.sh — view a locally generated speller accuracy report in a browser,
# without committing it or waiting for the GitHub Pages build.
#
# The accuracy viewer (a WebAssembly app) is no longer committed to this repo:
# it lives in giellalt/jekyll-theme-giellalt and is pulled in only when the docs
# site is built. This script fetches that same viewer, drops your local
# docs/typosreport/report.json next to it as speller-accuracy.json (the name the
# viewer expects), and serves the pair with Python's built-in web server — so the
# old "just look at it on localhost" workflow keeps working.
#
# Usage, from anywhere inside the repo:
#   docs/typosreport/preview.sh [--port N] [--refresh] [--no-open]
#
#   --port N     serve on port N (default: 8000)
#   --refresh    re-download the viewer even if a cached copy exists
#   --no-open    don't try to open a browser
#
# Generate the report first with:
#   configure --enable-spellers && make -j && make check -j
# which writes docs/typosreport/report.json (and report-<variant>.json).

set -euo pipefail

port=8000
refresh=0
open_browser=1

while [ $# -gt 0 ]; do
	case "$1" in
		--port)      port="$2"; shift 2 ;;
		--port=*)    port="${1#*=}"; shift ;;
		--refresh)   refresh=1; shift ;;
		--no-open)   open_browser=0; shift ;;
		-h|--help)   sed -n '2,${/^#/!q;s/^# \{0,1\}//p;}' "$0"; exit 0 ;;
		*)           echo "preview.sh: unknown option: $1" >&2; exit 2 ;;
	esac
done

# --- Locations -----------------------------------------------------------------
script_dir=$(cd "$(dirname "$0")" && pwd)   # .../docs/typosreport
docs_dir=$(dirname "$script_dir")           # .../docs
repo_root=$(dirname "$docs_dir")            # repo root
viewer_cache="$script_dir/.viewer"          # cached theme assets (gitignored)
preview_dir="$script_dir/.preview"          # assembled site served below (gitignored)

report="$script_dir/report.json"
if [ ! -f "$report" ]; then
	cat >&2 <<-EOF
	preview.sh: no report found at docs/typosreport/report.json

	Generate one first (spellers must be enabled):
	    configure --enable-spellers && make -j && make check -j
	EOF
	exit 1
fi

# --- Which theme + ref does this site use? ------------------------------------
theme_spec=$(sed -n 's/^remote_theme:[[:space:]]*//p' "$docs_dir/_config.yml" | head -n1)
theme_spec=${theme_spec:-giellalt/jekyll-theme-giellalt@main}
theme_repo=${theme_spec%@*}
theme_ref=${theme_spec##*@}
[ "$theme_ref" = "$theme_spec" ] && theme_ref=main

# --- Fetch the viewer bundle from the theme ----------------------------------
if [ "$refresh" = 1 ] || [ ! -f "$viewer_cache/accuracy-viewer.js" ]; then
	echo "preview.sh: fetching accuracy viewer from ${theme_repo}@${theme_ref} ..."
	tmp=$(mktemp -d)
	trap 'rm -rf "$tmp"' EXIT
	url_head="https://codeload.github.com/${theme_repo}/tar.gz/refs/heads/${theme_ref}"
	url_tag="https://codeload.github.com/${theme_repo}/tar.gz/refs/tags/${theme_ref}"
	if ! curl -fsSL "$url_head" -o "$tmp/t.tgz" && ! curl -fsSL "$url_tag" -o "$tmp/t.tgz"; then
		echo "preview.sh: could not download ${theme_repo}@${theme_ref}" >&2
		exit 1
	fi
	tar -xzf "$tmp/t.tgz" -C "$tmp"
	src=$(echo "$tmp"/*/assets/typosreport)
	if [ ! -d "$src" ]; then
		echo "preview.sh: ${theme_repo}@${theme_ref} has no assets/typosreport/" >&2
		exit 1
	fi
	rm -rf "$viewer_cache"
	mkdir -p "$viewer_cache"
	cp -R "$src/." "$viewer_cache/"
	rm -rf "$tmp"
	trap - EXIT
fi

# --- Assemble the preview site ----------------------------------------------
rm -rf "$preview_dir"
mkdir -p "$preview_dir"
cp -R "$viewer_cache/." "$preview_dir/"

# Minimal page skeleton — the Liquid-free equivalent of the theme's
# _layouts/typosreport.html. __DOCS_DATA_BASE__ is left unset, so the viewer
# fetches speller-accuracy.json relative to this page.
cat > "$preview_dir/index.html" <<'HTML'
<!doctype html>
<html>
<head>
	<meta charset="utf8">
	<meta name="viewport" content="width=device-width">
	<title>Accuracy test (local preview)</title>
	<link rel="stylesheet" href="./global.css">
	<link rel="stylesheet" href="./styles.css">
</head>
<body>
	<div id="main"></div>
	<script type="module">
		import init from "./accuracy-viewer.js";
		await init({ module_or_path: "./accuracy-viewer_bg.wasm" });
	</script>
</body>
</html>
HTML

cp "$report" "$preview_dir/speller-accuracy.json"
for v in "$script_dir"/report-*.json; do
	[ -e "$v" ] || continue
	tag=$(basename "$v" .json); tag=${tag#report-}
	cp "$v" "$preview_dir/speller-accuracy-${tag}.json"
done
# Variant list for the dropdown, if the docs build produced it.
[ -f "$docs_dir/badgedata/fst-variants.json" ] && cp "$docs_dir/badgedata/fst-variants.json" "$preview_dir/"

# --- Serve ------------------------------------------------------------------
py=$(command -v python3 || command -v python || true)
if [ -z "$py" ]; then
	echo "preview.sh: need python3 (or python) on PATH to serve the report" >&2
	exit 1
fi

url="http://localhost:${port}/"
echo "preview.sh: serving $(basename "$report") at ${url}  (Ctrl-C to stop)"
if [ "$open_browser" = 1 ]; then
	( sleep 1
	  if command -v open >/dev/null; then open "$url"
	  elif command -v xdg-open >/dev/null; then xdg-open "$url"
	  fi ) >/dev/null 2>&1 &
fi
cd "$preview_dir"
exec "$py" -m http.server "$port"
