#!/bin/bash

# This is a shell script that will call the actual test runner with the
# specified transducer. This determines also the set of yaml test files looped
# over by the test runner.

# ensure that we are ran from make or setup properly
if test -z "$srcdir" ; then
    echo "srcdir= not set, this must be run from make or set srcdir=."
    exit 2
fi
if test -z "$GIELLA_CORE" ; then
    echo "GIELLA_CORE= must point to giella-core"
    exit 2
fi
if test -z "$TESTKITS" ; then
    TESTKITS=hfst
fi
relpath="$GIELLA_CORE/scripts/"
testrunner="$relpath/run-yaml-testcases.sh"
if ! test -x "$testrunner" ; then
    echo "missing test runner in $testrunner"
    exit 77
fi

###### User variables - adjust as needed: #######
# Specify the invariable part of the transducer name:
transducer=dict-gt-norm

# Specify whether the test runner should test only generation, analysis or both:
# gen = generation test
# ana = analysis test
# full / both / "" (ie nothing) = test both directions
halftest=gen

# Specify the name of the subdir where the yaml files are, use '.' if it is the
# same dir as this script:
yaml_file_subdir=dict-gt-yamls

####### Run the helper script from giella core - DO NOT CHANGE: ########
for tk in $TESTKITS ; do
    "$testrunner" $transducer "$yaml_file_subdir" "$tk" "$relpath" "$srcdir" "$halftest"
    rv=$?
    if test $rv == 77 ; then
        exit 77
    elif test $rv -gt 0 ; then
        exit 1
    fi
done
