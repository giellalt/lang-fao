#!/bin/bash

# script to generate paradigms for generating word forms
# command:
# sh generate_contlex_para.sh PATTERN
# example, when you are in fao:
# sh devtools/prop_minip.sh VUONA | dfaoNorm | less
# sh devtools/prop_minip.sh Hirškikkâ | dfaoNorm 


PATTERN=$1
L_FILE="in.txt"
cut -d '!' -f1 src/fst/stems/propernouns.lexc | grep $PATTERN | cut -d ':' -f1 | tr -d '%'>$L_FILE

P_FILE="test/data/testpropparadigm.txt"

for lemma in $(cat $L_FILE);
do
 for form in $(cat $P_FILE);
 do
   echo "${lemma}${form}" | $LOOKUP $GTLANGS/lang-fao/src/generator-gt-norm.xfst
 done
done

