#!/bin/bash

# script to generate paradigms for generating word forms with poss suff
# command:
# sh poss_minip.sh PATTERN
# example, when you are in fao:
# sh devtools/poss_minip.sh LAAVU | less
# sh devtools/poss_minip.sh smiergâs 
# Only get the lemma you ask for:
# sh devtools/poss_minip.sh '^smiergâs[:+]' 


HLOOKUP=$(echo $HLOOKUP)
GTLANGS=$(echo $GTLANGS)


PATTERN=$1
L_FILE="in.txt"
cut -d '!' -f1 src/fst/stems/nouns.lexc | egrep $PATTERN | cut -d ':' -f1>$L_FILE

P_FILE="test/data/testposs.txt"

for lemma in $(cat $L_FILE);
do
 for form in $(cat $P_FILE);
 do
   echo "${lemma}${form}" | $HLOOKUP $GTLANGS/lang-fao/src/generator-gt-norm.hfstol
 done
 rm -f $L_FILE
done

