#!/bin/bash
if test -z "$GIELLA_CORE" ; then
    echo "environment variable GIELLA_CORE needs to be set up"
    exit 1
elif ! test -d "$GIELLA_CORE" ; then
    echo "GIELLA_CORE directory: $GIELLA_CORE may not be correct..."
    exit 1
elif ! test -x src/fst/morphology/test/generate-propernoun-lemmas.sh ; then
    echo "test src/fst/morphology/test/generate-propernoun-lemmas.sh not found"
    echo "(you should run this from lang-XXX directory)"
    exit 1
fi
if which see ; then
    logger="see"
elif test -n "$EDITOR" ; then
    logger=$EDITOR
else
    logger="cat"
fi
tmplog=$(mktemp -t giella-generate-test.XXXXXXXXXXX)

srcdir=. src/fst/morphology/test/generate-propernoun-lemmas.sh > "$tmplog"
if grep -F FAIL < "$tmplog" ; then
    logfile=$(grep -E '^see ' < "$tmplog" | cut -d ' ' -f 2)
    echo "running $logger $logfile"
    if test "$logger" == "see" ; then
        "$logger" "$logfile" &
    else
        "$logger" "$logfile"
    fi
fi
