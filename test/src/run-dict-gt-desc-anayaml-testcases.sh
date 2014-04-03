#!/bin/bash

# This is a shell script that will call the actual test runner with the
# specified transducer. This determines also the set of yaml test files looped
# over by the test runner.

###### Variables: #######
transducer=dict-gt-desc
halftest=ana # analysis test
yaml_file_subdir=dict-gt-yamls

# Find relative path from test script to test runner:
relpath=.
maintestrunner=run-morph-tester.sh
helpertestrunner=run-yaml-testcases.sh

# We use the maintestrunner to find the relative path, because it will be in
# the path of the build tree - the helpertestrunner will only be in the path
# of the source tree, and will not be found if using VPATH building.
while test ! -x $relpath/$maintestrunner ; do
    relpath="$relpath/.."                        # if not found, go one level up
#   echo relpath: $relpath                       # debug
    if test "$(cd $relpath && pwd)" = "/" ; then # have we reached the root?
        echo "$0: No test runner found!"
        exit 77
    fi
done

testrunner="$srcdir/$relpath/$helpertestrunner"

source $testrunner $transducer $yaml_file_subdir $halftest
