#!/bin/bash

# This is a shell script that will call the actual test runner with the
# specified transducer. This determines also the set of yaml test files looped
# over by the test runner.

###### Variables: #######
transducer=gt-norm
Fail=0

# source ./run-yaml-testcases.sh $transducer

for file in ${srcdir}/../../../src/morphology/*.lexc \
			${srcdir}/../../../src/morphology/*/*.lexc; do
	fsts=$(grep '^\!\!€[^ :]' $file | sed 's/.*€\([a-z-]*\)\:.*/\1/' | sort -u)
	tests=$(grep '^\!\!€ ' $file)
	if test "$fsts" == "" -a "$tests" == ""; then
		echo
		echo "* WARNING: the LexC file $file"
		echo "doesn't contain any tests - SKIPPED"
		echo
	elif test "$fsts" == "" -a ! "$tests" == ""; then
#		echo "$file has tests, but no fst specified - defaulting to gt-norm."
#		source ./run-yaml-testcases.sh $transducer $file
		echo
		echo "$file has tests, but no fst specified - SKIPPED"
		echo
	else
		for fst in $fsts; do
		    (( i += 1 ))
		    echo
		    echo "LexC subtest $i: Testing $file using fst: $fst"
		    echo
			source ./run-morph-tester.sh $fst $file
		done
	fi
done

source error-handling-stubs.sh
