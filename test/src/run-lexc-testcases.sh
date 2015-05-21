#!/bin/bash

# This is a shell script that will call the morph-tester test runner with the
# specified transducer for each lexc file and for each transducer specified in
# the test cases.

###### Variables: #######
transducer=gt-norm
Fail=0
Tests_found=no
Skipped=no
testtype=full

relpath=.
testrunner=run-morph-tester.sh

while test ! -x $relpath/$testrunner ; do
    relpath="$relpath/.."
#    echo relpath: $relpath     # debug
    if test "$(cd $relpath && pwd)" = "/" ; then
        echo "$0: No test runner found!"
        exit 77
    fi
done

# One empty line in the beginning:
echo ""
# Loop over all lexc source files:
for file in ${srcdir}/$relpath/../src/morphology/*.lexc \
			${srcdir}/$relpath/../src/morphology/*/*.lexc; do
	fileshort=$(echo "$(basename \
		$(dirname $file))/$(basename $file)")
	# Skip the GTLANG-all.lexc file - it will cause the tests to be run twice:
	allfile=$(echo "$( echo $fileshort | grep 'all.lexc' )")
	[ ! -z "$allfile" ] && continue

	# For each lexc file, extract all fst's specified in it:
	fsts=$(grep '^\!\!€[^ :]' $file | sed 's/.*€\([a-z-]*\)\:.*/\1/' | sort -u)

	# Check whether there are test cases in the file:
	tests=$(grep '^\!\!€ ' $file)

	# If no tests or fst's are found, skip the file:
	if test "$fsts" == "" -a "$tests" == ""; then
		if test "$Tests_found" == "no" ; then
		  Skipped=yes
		fi
		echo "SKIPPED: no tests in $fileshort"

	# If there are tests, but no specified fst, skip (future: run default fst)
	elif test "$fsts" == "" -a ! "$tests" == ""; then
#		    (( i += 1 ))
#		echo "$file has tests, but no fst specified - defaulting to $transducer"
#		source ./run-yaml-testcases.sh $transducer $file
		echo "* WARNING: $fileshort has tests, but no fst specified - SKIPPED"

	# For each specified fst in the lexc file, run those tests:
	else
		Tests_found=yes
		Skipped=no
		for fst in $fsts; do
		    (( i += 1 ))
#		    echo $fst    # debug
		    leadtext=$(echo "LEXC test $i: ")
			source $relpath/run-morph-tester.sh \
				$fst $file $relpath $testtype $leadtext
		done
	fi
done

source $srcdir/$relpath/error-handling-stubs.sh
