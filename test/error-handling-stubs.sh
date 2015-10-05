#!/bin/bash

# This is a shell script that only contains a few tests for the
# morph-tester.py test runners. It is not intended to be used on its
# own, but to be sourced (included) in the main shell scripts:
#
# source error-handling-stubs.sh

# If Skipped=yes (used in lexc tests), no tests were found, and we return 77:
if test "$Skipped" == "yes" ; then
    exit 77
fi

# At least one of the Xerox or HFST tests failed:
if test "$Fail" -ge 1; then
    exit 1
fi

# Skip if no transducer were found - failing is problematic for lexc tests:
if test "$transducer_found" = 0 ; then
    echo "No transducer found"
    exit 77
fi
