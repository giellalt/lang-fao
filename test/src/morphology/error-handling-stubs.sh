#!/bin/bash

# This is a shell script that only contains a few tests for the
# morph-tester.py test runners. It is not intended to be used on its
# own, but to be sourced (included) in the main shell scripts:
#
# source error-handling-stubs.sh

# At least one of the Xerox or HFST tests failed:
if test $Fail -ge 1; then
    exit 1
fi

# Fail if no transducer were found:
if test $transducer_found -eq 0; then
    echo No transducer found
    exit 1
fi
