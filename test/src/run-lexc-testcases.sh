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
concat_lexc_file="lexicon.lexc"

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

# Get list of source files:
source_files="$(find ${srcdir}/$relpath/../src/fst/morphology -name '*.lexc' \
				-not -name '$concat_lexc_file')"

# One empty line in the beginning:
echo ""

# Loop over all lexc source files:
for file in ${source_files}; do
	fileshort=$(echo "$(basename \
		$(dirname $file))/$(basename $file)")

	# For each lexc file, extract all fst's specified in it:
	fsts=$(grep '^\!\!€[^ :]' $file | cut -d':' -f1 \
		| sed 's/\(.*\)€\(.*\)/\2/g' | sort -u)

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
#		echo "TESTING: found tests in $fileshort" # debug

		Tests_found=yes
		Skipped=no

		for fst in $fsts; do
		    (( i += 1 ))
		    echo "Running $fst tests:"
			# Empty line before each new fst:
			echo
		    leadtext=$(echo "LEXC test $i: ")
		    
		    # Check for possible one-sided tests (default is two-sided/full):
		    if [[ "$fst" == *.gen ]]; then
		      testtype="gen"
		      fst=$(basename $fst .gen)
		    elif [[ "$fst" == *.ana ]] ; then
		      testtype="ana"
		      fst=$(basename $fst .ana)
		    fi
		    
		    # Run the actual tests for the given fst:
			source $relpath/run-morph-tester.sh \
				$fst $file $relpath $testtype all $leadtext
#		    echo "The $fst testing is done using $testtype testing."    # debug

		    # Reset testtype to default:
		    testtype=full
		done
	fi
done

source $srcdir/$relpath/error-handling-stubs.sh
