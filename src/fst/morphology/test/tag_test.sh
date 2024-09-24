#!/bin/bash

# FIXME: exclude +konto

# ensure that we are ran from make or setup properly
if test -z "$srcdir" ; then
    echo "srcdir= not set, this must be run from make or set srcdir=."
    exit 2
fi
if test -z "$GIELLA_CORE" ; then
    echo "GIELLA_CORE= must point to giella-core"
    exit 2
fi
relpath="$GIELLA_CORE/scripts/"
testrunner="$relpath/tag_test.sh"
if ! test -x "$testrunner" ; then
    echo "missing test runner in $testrunner"
    exit 77
fi
lexc=../lexicon.lexc
if ! test -f $lexc ; then
    echo combined $lexc missing or disappeared
    exit 1
fi
$testrunner $lexc
