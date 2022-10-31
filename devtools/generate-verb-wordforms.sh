#!/bin/bash

# A short shell script to test word form generation for all continuation
# lexicons except the ones listed in the exception list.

######### USER Variables - change these to your liking: #########
# Codes for the word forms to be generated - list as many or few as needed:
morf_codes="+V+Inf \
            +V+Ind+Prs+Sg3 \
            +V+Ind+Prt+Pl1 \
            +V+ConNeg \
            +V+PrfPrc"

# Lexicon source file for lexicons and lemmas:
source_file=src/morphology/stems/verbs.lexc

# Lexicons that should NOT be used to extract lemmas (egrep expression):
exception_lexicons="(flagK)"

# FST used for generation, MINUS suffix:
generator_file=src/generator-gt-norm

# How many lemmas maximally for each lexicon:
lemmacount=10

################## DO NOT CHANGE BELOW HERE!!! ##################
# Specify path to $GTCORE - we don't use Autotools for these scripts:
giella_core=$GTCORE

source $giella_core/scripts/generate-wordforms-for-cont_lexes.sh \
        "$giella_core" \
        "$morf_codes" \
        "$source_file" \
        "$generator_file" \
        "$lemmacount" \
        "$exception_lexicons"
