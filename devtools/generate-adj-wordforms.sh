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
morf_codes="+A+Msc+Sg+Nom+Indef		   \
            +A+Msc+Sg+Acc+Indef		   \
            +A+Msc+Sg+Dat+Indef		   \
            +A+Msc+Sg+Gen+Indef		   \
            +A+Msc+Pl+Nom+Indef		   \
            +A+Msc+Pl+Acc+Indef		   \
            +A+Msc+Pl+Dat+Indef		   \
            +A+Msc+Pl+Gen+Indef		   \
            +A+Msc+Sg+Nom+Def		   \
            +A+Msc+Sg+Acc+Def		   \
            +A+Msc+Pl+Nom+Def		   \
            +A+Msc+Pl+Acc+Def		   \
            +A+Fem+Sg+Nom+Indef		   \
            +A+Fem+Sg+Acc+Indef		   \
            +A+Fem+Sg+Dat+Indef		   \
            +A+Fem+Sg+Gen+Indef		   \
            +A+Fem+Pl+Nom+Indef		   \
            +A+Fem+Pl+Acc+Indef		   \
            +A+Fem+Pl+Dat+Indef		   \
            +A+Fem+Pl+Gen+Indef		   \
            +A+Fem+Sg+Nom+Def		   \
            +A+Fem+Sg+Acc+Def		   \
            +A+Fem+Pl+Nom+Def		   \
            +A+Fem+Pl+Acc+Def		   \
            +A+Neu+Sg+Nom+Indef		   \
            +A+Neu+Sg+Acc+Indef		   \
            +A+Neu+Sg+Dat+Indef		   \
            +A+Neu+Sg+Gen+Indef		   \
            +A+Neu+Pl+Nom+Indef		   \
            +A+Neu+Pl+Acc+Indef		   \
            +A+Neu+Pl+Dat+Indef		   \
            +A+Neu+Pl+Gen+Indef		   \
            +A+Neu+Sg+Nom+Def		   \
            +A+Neu+Sg+Acc+Def		   \
            +A+Neu+Pl+Nom+Def		   \
            +A+Neu+Pl+Acc+Def		   \
            +A+Comp+Msc+Sg+Nom+Indef	   \
            +A+Comp+Msc+Pl+Nom+Indef	   \
            +A+Comp+Msc+Sg+Nom+Def	   \
            +A+Comp+Msc+Pl+Nom+Def	   \
            +A+Comp+Fem+Sg+Nom+Indef	   \
            +A+Comp+Fem+Pl+Nom+Indef	   \
            +A+Comp+Fem+Sg+Nom+Def	   \
            +A+Comp+Fem+Pl+Nom+Def	   \
            +A+Comp+Neu+Sg+Nom+Indef	   \
            +A+Comp+Neu+Sg+Acc+Indef	   \
            +A+Comp+Neu+Pl+Nom+Indef	   \
            +A+Comp+Neu+Pl+Acc+Indef	   \
            +A+Comp+Neu+Sg+Nom+Def	   \
            +A+Comp+Neu+Sg+Acc+Def	   \
            +A+Comp+Neu+Pl+Nom+Def	   \
            +A+Comp+Neu+Pl+Acc+Def	   \
            +A+Superl+Msc+Sg+Nom+Indef \
            +A+Superl+Msc+Pl+Nom+Indef \
            +A+Superl+Msc+Sg+Nom+Def   \
            +A+Superl+Msc+Pl+Nom+Def   \
            +A+Superl+Fem+Sg+Nom+Indef \
            +A+Superl+Fem+Sg+Acc+Indef \
            +A+Superl+Fem+Pl+Nom+Indef \
            +A+Superl+Fem+Sg+Nom+Def   \
            +A+Superl+Fem+Pl+Nom+Def   \
            +A+Superl+Neu+Sg+Nom+Indef \
            +A+Superl+Neu+Sg+Acc+Indef \
            +A+Superl+Neu+Pl+Nom+Indef \
            +A+Superl+Neu+Pl+Acc+Indef \
            +A+Superl+Neu+Sg+Nom+Def   \
            +A+Superl+Neu+Pl+Nom+Def"

# Lexicon source file for lexicons and lemmas:
source_file=src/fst/morphology/stems/adjectives.lexc

# Lexicons that should NOT be used to extract lemmas (egrep expression):
exception_lexicons="(flagK)"

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
