#!/bin/bash

# This is a shell script that will loop over the *.yaml files of the specified
# transducer type found in this dir
# and run them through the Apertium Quality morph-test.py tool.
#
# It takes one argument: the transducer type.
#
# The script is typically called by a simple shell script listed in the TESTS
# variable in the Makefile.am file, and will then be automatically called when
# issuing 'make check'
#
# This script only contains the loop, and will for each found yaml file call
# the actual test runner.

# Wrong usage - short instruction:
if ! test $# -ge 2 ; then
    echo
    echo "Usage: $0 TRANSDUCERTYPE RELPATH YAMLSUBDIR [HALFTEST]"
    echo
    echo "were TRANSDUCERTYPE is the type of transducer targeted"
    echo "for testing: gt-norm, gt-desc, etc. It will loop"
    echo "over all yaml tests for the specified TRANSDUCERTYPE."
    echo "The  argument YAMLSUBDIR specifies the subdir containing"
    echo "yaml test files - the default is ./ (ie the current dir)."
    echo "This makes it possible to move all yaml files out of the"
    echo "test dir, making for a much cleaner directory."
    echo "The optional argument HALFTEST is one of the strings"
    echo "'ana' or 'gen', indicating that the test runs should"
    echo "only run the analyser or generator tests respectively."
    echo
    exit 77
fi

###### Variables: #######
transducer=$1
yaml_file_subdir=$2
halftest=$3
Fail=0

if test "x$yaml_file_subdir" = "x" ; then
    yaml_file_subdir=.
fi

relpath=.
testrunner=run-morph-tester.sh

while test ! -x $relpath/$testrunner ; do
    relpath="$relpath/.."
#    echo relpath: $relpath     # debug
    if test "$(cd $relpath && pwd)" = "/" ; then
        echo "run-yaml-testcases.sh: No test runner found!"
        exit 77
    fi
done

# Build filename suffix dependent on the content of $halftest
if test "$halftest" == ""; then
    suffix="yaml"
    halftest="full"
else
    suffix="$halftest.yaml"
fi

testfiles=$(find $srcdir/$yaml_file_subdir -name "*_$transducer.$suffix")
if test "$testfiles" == ""; then
    echo
    echo "** No YAML files matching: $srcdir/$yaml_file_subdir/*_$transducer.$suffix"
    exit 77
fi

i=0
# Loop over the available yaml files, and run the tests:
for file in ${srcdir}/$yaml_file_subdir/*_$transducer.$suffix; do
    (( i += 1 ))
    leadtext=$(echo "YAML test $i: ")
	source ./$relpath/run-morph-tester.sh $transducer $file $relpath $halftest $leadtext
done

source $srcdir/$relpath/error-handling-stubs.sh
