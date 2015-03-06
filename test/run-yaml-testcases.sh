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
testtotalsfile=testtotals.tmp.txt

# Remove summary file before we start:
rm -f $testtotalsfile

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
if test "$halftest" == "" \
     -o "$halftest" == "full" \
     -o "$halftest" == "both"; then
    suffix="yaml"
    halftest="full"
    summaryhalftext=""
elif test "$halftest" == "speller" ; then
    suffix="$halftest.yaml"
    summaryhalftext=""
else
    suffix="$halftest.yaml"
    if test "$halftest" == "ana"; then
        summaryhalftext="analysing "
    else
        summaryhalftext="generating "
    fi
fi

testfiles=$(find $srcdir/$yaml_file_subdir -name "*_$transducer.$suffix")
if test "$testfiles" == ""; then
    echo
    echo \
    "** No YAML files matching: $srcdir/$yaml_file_subdir/*_$transducer.$suffix"
    exit 77
fi

i=0
# Loop over the available yaml files, and run the tests:
for file in ${srcdir}/$yaml_file_subdir/*_$transducer.$suffix; do
    (( i += 1 ))
    leadtext=$(echo "YAML test $i: ")
    source ./$relpath/run-morph-tester.sh \
        $transducer $file $relpath $halftest $leadtext
done

totalpasses=$(cat $testtotalsfile | tr ' ' '\n' | cut -d'/' -f1 | tr '\n' ' ' \
			 | sed 's/ / + /g' | sed 's/ + $//' | bc )
totalfails=$( cat $testtotalsfile | tr ' ' '\n' | cut -d'/' -f2 | tr '\n' ' ' \
			 | sed 's/ / + /g' | sed 's/ + $//' | bc )
totaltotals=$(cat $testtotalsfile | tr ' ' '\n' | cut -d'/' -f3 | tr '\n' ' ' \
			 | sed 's/ / + /g' | sed 's/ + $//' | bc )
rm -f $testtotalsfile

# red=\033[1;31m
# green=\033[0;32m
# orange=\033[0;33m
# yellow=\033[1;33m
# blue=\033[0;34m
# light_blue=\033[0;36m
# reset=\033[m
printf "SUMMARY for the \033[0;33m$summaryhalftext$transducer\033[m fst(s): "
printf "\033[0;32mPASSES: $totalpasses\033[m / "
printf "\033[1;31mFAILS: $totalfails\033[m / "
printf "\033[0;34mTOTAL: $totaltotals\033[m\n\n"

source $srcdir/$relpath/error-handling-stubs.sh
