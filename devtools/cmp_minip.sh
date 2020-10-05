#!/bin/bash

# script to generate paradigms for generating word forms
# command:
# sh cmp_minip.sh PATTERN
# example, when you are in fao:
# sh devtools/cmp_minip.sh '^nieidâ:' 
# sh devtools/noun_minip.sh LAAVU | less


HLOOKUP=$(echo $HLOOKUP)
GTLANGS=$(echo $GTLANGS)


PATTERN=$1
L_FILE="in.txt"
cut -d '!' -f1 src/fst/stems/nouns.lexc | egrep $PATTERN | cut -d ':' -f1>$L_FILE

P_FILE="test/data/cmp_paradigm.txt"

for lemma in $(cat $L_FILE);
do
 for form in $(cat $P_FILE);
 do
   echo "${lemma}${form}" | $HLOOKUP $GTLANGS/lang-fao/src/generator-gt-norm.hfstol
 done
done

