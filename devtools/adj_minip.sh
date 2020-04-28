#!/bin/bash

# script to generate paradigms for generating word forms
# command:
# sh generate_contlex_para.sh PATTERN
# example, when you are in fao:
# sh devtools/adj_minip.sh HUMO  | less
# sh devtools/adj_minip.sh hyeni 
# Only get the lemma you ask for:
# sh devtools/adj_minip.sh '^hyeni[:+]' 

LOOKUP=$(echo $LOOKUP)
GTHOME=$(echo $GTHOME)

PATTERN=$1
L_FILE="in.txt"
cut -d '!' -f1 src/fst/stems/adjectives.lexc | egrep $PATTERN | cut -d ':' -f1>$L_FILE

P_FILE="test/data/testadjparadigm.txt"

for lemma in $(cat $L_FILE);
do
 for form in $(cat $P_FILE);
 do
   echo "${lemma}${form}" | $LOOKUP $GTHOME/langs/fao/src/generator-gt-norm.xfst
 done
done

