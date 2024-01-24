#!/bin/bash

# A short shell script to test word form generation for all continuation
# lexicons except the ones listed in the exception list.

# Path to $GIELLA_CORE - we don't use Autotools for these scripts:
if test "x$GIELLA_CORE" != "x" -a -d "$GIELLA_CORE" ; then
    giella_core=$GIELLA_CORE
elif test "x$GTCORE" != "x" -a -d "$GTCORE" ; then
    giella_core=$GTCORE
elif test "x$GTHOME" != "x" -a -d "$GTHOME/giella-core" ; then
    giella_core=$GTHOME/giella-core
else
    echo "ERROR: Neither of $$GIELLA_CORE, $$GTCORE or $$GTHOME defined."
    exit 1
fi

######### USER Variables - change these to your liking: #########
# Codes for the word forms to be generated - list as many or few as needed:
morf_codes="+N+Neu+Sg+Nom+Indef \
            +N+Neu+Sg+Acc+Indef \
            +N+Neu+Sg+Gen+Indef \
            +N+Neu+Sg+Dat+Indef \
            +N+Neu+Pl+Nom+Indef \
            +N+Neu+Pl+Acc+Indef \
            +N+Neu+Pl+Gen+Indef \
            +N+Neu+Pl+Dat+Indef \
            +N+Neu+Sg+Nom+Def \
            +N+Neu+Sg+Acc+Def \
            +N+Neu+Sg+Gen+Def \
            +N+Neu+Sg+Dat+Def \
            +N+Neu+Pl+Nom+Def \
            +N+Neu+Pl+Acc+Def \
            +N+Neu+Pl+Gen+Def \
            +N+Neu+Pl+Dat+Def"

# Lexicon source file for lexicons and lemmas:
source_file=src/fst/morphology/stems/nouns.lexc

# Lexicons that should NOT be used to extract lemmas (egrep expression):
exception_lexicons="(kv[_0-9]|kv[0-9[0-9]|k[_0-9])"

# FST used for generation, MINUS suffix:
generator_file=src/fst/generator-gt-norm

# How many lemmas maximally for each lexicon:
lemmacount=2

# Specify path to the dir containing the script used for generation:
script_dir=$giella_core/scripts

################## DO NOT CHANGE BELOW HERE!!! ##################
"$script_dir/generate-wordforms-for-cont_lexes.sh" \
        "$giella_core" \
        "$morf_codes" \
        "$source_file" \
        "$generator_file" \
        "$lemmacount" \
        "$exception_lexicons"
