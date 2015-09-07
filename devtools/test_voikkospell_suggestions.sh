#!/bin/bash

# Take tab-separated input in 2+ colums (like a typos file), extract the first
# column, send it through a spell checker, and convert the result to xml.
# Finally open the xml in the default browser.

# Language being tested, ISO 639-1 code if available:
GTLANG2=__UND2__

# Directory variables:
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
top_srcdir="$SCRIPT_DIR/.."
builddir="."
top_builddir="$top_srcdir/$builddir"
spellerdir=tools/spellcheckers/fstbased/hfst

# File variables:
typos_file="$top_srcdir/test/data/typos.txt"
file_spesifier="$(basename ${typos_file} .txt)"
speller_results="$SCRIPT_DIR/speller_result_${file_spesifier}.xml"

# Other variables:
DATE=$(date +%Y%m%d)
TESTTIME=$(date +%H%M)

# Extract the typos:
grep -v '^[!#]' "$typos_file" | grep -v '^$' | cut -f1 \
	> $SCRIPT_DIR/speller_input.txt

# Run the speller;
$GTCORE/scripts/run_voikko_speller.sh $SCRIPT_DIR/speller_input.txt \
                                      $SCRIPT_DIR/speller_output.txt \
                                      $SCRIPT_DIR/spellertimeusage.txt \
                                      $GTLANG2 \
                                      "$top_builddir/$spellerdir"

rm -f "$speller_results"

# Convert to xml:
$GTCORE/scripts/speller-testres.pl \
		--engine=vk \
		--lang=$GTLANG2 \
		--input="$typos_file" \
		--output="$SCRIPT_DIR/speller_output.txt" \
		--document=$(basename "$typos_file") \
		--date=$DATE-$TESTTIME \
		--version="n/a" \
		--toolversion="n/a" \
		--corpusversion="n/a" \
		--memoryuse="n/a" \
		--timeuse="$SCRIPT_DIR/spellertimeusage.txt" \
		--xml="$speller_results" \
		--corrsugg

# Add xml header + css style sheet reference:
fgrep -v '<?xml version' "$speller_results" > "$speller_results.tmp"
echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>" > "$speller_results"
echo "<?xml-stylesheet \
href=\"https://gtsvn.uit.no/langtech/trunk/gtcore/scripts/style/speller_xml.css\" \
type=\"text/css\"?>"   >> "$speller_results"
cat "$speller_results.tmp" >> "$speller_results"
rm -f "$speller_results.tmp"

# Open the xml file in the default browser
open "$speller_results"
