#!/bin/bash

# This is a shell script that will call the morph-tester test runner with the
# specified transducer for each lexc file and for each transducer specified in
# the test cases.

# ensure that we are ran from make or setup properly
if test -z "${srcdir}" ; then
    echo "srcdir= not set, this must be run from make check or with srcdir=."
    exit 2
fi
if test -z "$TESTKITS" ; then
    TESTKITS=hfst
fi
if test -z "$GIELLA_CORE" ; then
    echo "GIELLA_CORE= must point to giella-core"
    exit 2
fi

###### Variables: #######
transducer=gt-norm

relpath=$GIELLA_CORE/scripts/
testrunner=run-lexc-testcases.sh

if ! test -x "$relpath/$testrunner" ; then
    echo "$0: No test runner found in $relpath/$testrunner!"
    exit 77
fi

for tk in $TESTKITS ; do
    GIELLA_CORE=$GIELLA_CORE "$relpath/$testrunner" "$srcdir" "$tk"
    rv=$?
    if test $rv = 77 ; then
        exit 77
    elif test $rv -ge 1 ; then
        exit 1
    fi
done

