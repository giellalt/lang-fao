#!/bin/bash

# A short shell script to test word form generation for all continuation
# lexicons except the ones listed in the exception list.

######### USER Variables - change these to your liking: #########
# Codes for the word forms to be generated - list as many or few as needed:
morf_codes="+A+Sg+Nom \
            +A+Sg+Gen \
            +A+Sg+Ill \
            +A+Pl+Nom \
            +A+Pl+Com \
            +A+Attr"

# Lexicon source file for lexicons and lemmas:
source_file=src/morphology/stems/adjectives.lexc

# Lexicons that should NOT be used to extract lemmas (egrep expression):
exception_lexicons="(flagK)"

# FST used for generation, MINUS suffix:
generator_file=src/generator-gt-norm

# How many lemmas maximally for each lexicon:
lemmacount=10

# Specify path to the dir containing the script used for generation:
script_dir=$GTCORE/scripts

################## DO NOT CHANGE BELOW HERE!!! ##################
source $script_dir/generate-wordforms-for-cont_lexes.sh \
        "$giella_core" \
        "$morf_codes" \
        "$source_file" \
        "$generator_file" \
        "$lemmacount" \
        "$exception_lexicons"
