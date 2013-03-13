#!/bin/bash

# This is a shell script that will call the morph-tester test runner with the
# specified transducer for each lexc file and for each transducer specified in
# the test cases.

###### Variables: #######
transducer=gt-norm
Fail=0

# Loop over all lexc source files:
for file in ${srcdir}/../../../src/morphology/*.lexc \
			${srcdir}/../../../src/morphology/*/*.lexc; do
	# For each lexc file, extract all fst's specified in it:
	fsts=$(grep '^\!\!€[^ :]' $file | sed 's/.*€\([a-z-]*\)\:.*/\1/' | sort -u)
	# Check whether there are test cases in the file:
	tests=$(grep '^\!\!€ ' $file)
	# If no tests or fst's are found, skip the file:
	if test "$fsts" == "" -a "$tests" == ""; then
		echo "* SKIPPED: no tests in file $file"
	# If there are tests, but no specified fst, skip (future: run default fst)
	elif test "$fsts" == "" -a ! "$tests" == ""; then
#		echo "$file has tests, but no fst specified - defaulting to $transducer"
#		source ./run-yaml-testcases.sh $transducer $file
		echo "* WARNING: $file has tests, but no fst specified - SKIPPED"
	# For each specified fst in the lexc file, run those tests:
	else
		for fst in $fsts; do
		    (( i += 1 ))
		    printf "LEXC subtest $i: "
			source ./run-morph-tester.sh $fst $file
		done
	fi
done

source error-handling-stubs.sh
