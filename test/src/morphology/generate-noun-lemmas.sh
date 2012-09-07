#!/bin/bash

# Automake interprets the exit status as follows:
# - an exit status of 0 will denote a success
# - an exit status of 77 a skipped test
# - an exit status of 99 a hard error
# - any other exit status will denote a failure.


# Test that all noun lemmas do generate as themselves:


###### Variables: #######
sourcefile=${srcdir}/../../../src/morphology/stems/nouns.lexc
generatorfile=${srcdir}/../../../src/generator.gt

###### Extraction: #######
$GTCORE/scripts/extract-lemmas.sh \
	$sourcefile "(CmpN/Last)" > nouns.txt

###### Start testing: #######
# The script tests both Xerox and Hfst transducers if available:
transducer_found=0
for f in  .xfst .hfst; do
	if [ $f == ".xfst" ]; then
		lookuptool="lookup -q -flags mbTT"
		echo "Xerox test"
	else
		lookuptool="hfst-lookup -q"
		echo "Hfst test"
	fi
	if [ -f "${srcdir}/../../src/generator.gt$f" ]; then
		let "transducer_found += 1"
		sed 's/$/+N+Sg+Nom/' nouns.txt | \
				$lookuptool $generatorfile$f > gen-nouns$f.txt
		if [ `grep '\?' gen-nouns$f.txt | wc -l` -gt 0 ]; then
			see gen-nouns$f.txt
			exit 1
		fi
	fi
done

if [ $transducer_found -eq 0 ]; then
    echo No transducer found
    exit 1
fi
