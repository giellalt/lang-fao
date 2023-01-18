#!/bin/bash

# Check if there are tags which are not declared in root.lexc or if
# tags are misspelled.
#
# Exit with 0 if and only if all tests pass.
#
# Run with -v to be a bit more verbose.

lexctags=$(mktemp -t giella-tag_test.XXXXXXXXXXX)
roottags=$(mktemp -t giella-tag_test.XXXXXXXXXXX)
trap 'rm -f "${lexctags}" "${roottags}"' EXIT

# Ensure we're in langs/sme:
# cd "$(dirname "$0")"/../../.. || exit 1

if [[ $1 == "-v" ]]; then
    echo "$0: Are there tags not declared in root.lexc or misspelled?"
fi

sed -e '1,/LEXICON Root/d' < \
    ../../../src/fst/lexicon.tmp.lexc | # Extract all lines after LEXICON Root
    cut -d'!' -f1                     | # get rid of comments
    grep ';'                          | # Get only lines with 
    cut -d';' -f1                     | # get everything in front of ;
    tr ' ' '\n'                       | # turn all whitespace into newlines
    grep -E '[\+|@]'                  | # grep relevant stuff only
    cut -d':' -f1                     | # get rid of surface side
    sed 's/+/¢+/g'                    | # prepare for tag isolation
    sed 's/@@/@¢@/g'                  | # prepare for flag diacritic splitting
    tr '¢"#' '\n'                     | # replace some symbols with newlines = split tags
    grep -E '^(\+|@)[A-Za-z]'         | # grep only relevant lines / symbols
    perl -pe "s#^(\+[^@]+)@#\1\n@#g"  | # do a final split of +Tag@C.FLAG@
    perl -pe "s#^(@[^@]+@)#\1\n#g"    | # do a final cleanup of @C.FLAG@abc
    grep -E '^(\+|@)[A-Za-z]'         | # grep only relevant lines / symbols
    sed 's/\-$//'                     | # Get rid of final hyphens, they are bogus
    sort -u                           \
    > "${lexctags}"

sed -n '/LEXICON Root/q;p' \
    ../../../src/fst/lexicon.tmp.lexc | # Extract all lines before LEXICON Root
    cut -d'!' -f1                     | # Remove comments
    sed 's/Multichar_Symbols//'       | # Remove the string Multichar_Symbols
    tr ' ' '\n'                       | # Change all spaces to newlines
    grep -E '^(\+|@)'                 | # Extract tags and flag diacritics
    sort -u > "${roottags}"

check=$(comm -23 "${lexctags}" "${roottags}")
if [[ -n "${check}" ]]; then
    echo "$0: Have a look at these:"
    echo "${check}"
    exit 1
elif [[ $1 == "-v" ]]; then
    echo "$0: No errors found."
fi

#cat src/fst/clitics.lexc src/fst/compounding.lexc src/fst/affixes/*lexc |cut -d '!' -f1 | grep ';' |tr -s ' ' | sed 's/^ //' |grep ':' |cut -d ':' -f1 | sed 's/\+/¢+/g' | tr '¢' '\n' |sort | uniq -c |sort -n |less
# visuell test: cat src/fst/clitics.lexc src/fst/compounding.lexc src/fst/affixes/*lexc |cut -d '!' -f1 | grep ';' |tr -s ' ' | sed 's/^ //' |grep ':' |cut -d ':' -f1 | tr -d '0' | sed 's/\+/¢+/g' | tr '¢' '\n' |egrep -v '^(\+|\@|<)' |grep -v '^$' |less
