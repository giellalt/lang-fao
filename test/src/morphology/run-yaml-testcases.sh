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
if ! test $# -ge 1 ; then
    echo
    echo "Usage: $0 TRANSDUCERTYPE"
    echo
    echo "were TRANSDUCERTYPE is the type of transducer targeted"
    echo "for testing: gt-norm, gt-desc, etc. It will loop"
    echo "over all yaml tests for the specified TRANSDUCERTYPE."
    echo
    exit 77
fi

###### Variables: #######
transducer=$1
Fail=0

testfiles=$(find ${srcdir} -name "*_$transducer.yaml")
if test "$testfiles" == ""; then
    echo
    echo "*** Warning: No YAML data files found. Skipping test."
    echo "*** Filenames covered by this test needs to end in:"
    echo "***"
    echo "*** _$transducer.yaml"
    echo
    exit 77
fi

i=0
# Loop over the available yaml files, and run the tests:
for file in ${srcdir}/*_$transducer.yaml; do
    (( i += 1 ))
    printf "YAML test $i: "
	source ./run-morph-tester.sh $transducer $file
done

source error-handling-stubs.sh
