#!/bin/bash

# A short shell script to test word form generation for all continuation
# lexicons except the ones listed in the exception list.

# Path to $GIELLA_CORE - we don't use Autotools for these scripts:
if test -d "../giella-core" ; then
    giella_core="$(pwd)/../giella-core"
elif test "x$GTLANGS" != "x" -a -d "$GTLANGS/giella-core" ; then
    giella_core=$GTLANGS/giella-core
elif test "x$GIELLA_CORE" != "x" -a -d "$GIELLA_CORE" ; then
    giella_core=$GIELLA_CORE
elif test "x$GTCORE" != "x" -a -d "$GTCORE" ; then
    giella_core=$GTCORE
else	
    echo "ERROR: Neither of $$GIELLA_CORE, $$GTCORE or $$GTLANGS defined, and nothing found within the parent folder."
    exit 1
fi

######### USER Variables - change these to your liking: #########
# Codes for the word forms to be generated - list as many or few as needed:
morf_codes="+N+Prop+Sg+Nom \
            +N+Prop+Sg+Gen \
            +N+Prop+Sg+Ill \
            +N+Prop+Sg+Com \
            +N+Prop+Pl+Nom \
            +N+Prop+Pl+Com \
            +N+Prop+Ess"

# Lexicon source file for lexicons and lemmas:
source_file=src/fst/generated_files/smi-sma-propernouns.lexc

# Lexicons that should NOT be used to extract lemmas (egrep expression):
exception_lexicons="(flagK)"

# FST used for generation, MINUS suffix:
generator_file=src/generator-gt-norm

# How many lemmas maximally for each lexicon:
lemmacount=10

# Specify path to the dir containing the script used for generation:
script_dir=$giella_core/scripts

################## DO NOT CHANGE BELOW HERE!!! ##################
source $script_dir/generate-wordforms-for-cont_lexes.sh \
        "$giella_core" \
        "$morf_codes" \
        "$source_file" \
        "$generator_file" \
        "$lemmacount" \
        "$exception_lexicons"
