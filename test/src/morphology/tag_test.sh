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

sed -e '1,/LEXICON Root/ d' < ../../../src/fst/lexicon.tmp.lexc \
    | cut -d '!' -f1   \
    | grep ' ;'        \
    | cut -d ':' -f1   \
    | tr -s ' '        \
    | sed 's/^ //'     \
    | cut -d ' ' -f1   \
    | sed 's/+/¢+/g'   \
    | sed 's/@/¢@/g'   \
    | tr '¢' '\n'      \
    | tr '#"%' '\n'    \
    | grep -E '(\+|@)' \
    | sort -u          \
    | grep -E -v '^(\+|\+%|\+\/\-|\+Cmp\-|\+Cmp%\-|\@0|\@%)$' \
    > "${lexctags}"

cut -d '!' -f1 $srcdir/../../../src/fst/root.lexc \
    | cut -d ':' -f1                    \
    | sed 's/+/¢+/g'                    \
    | sed 's/@/¢@/g'                    \
    | tr '¢' '\n'                       \
    | grep -E '(\+|@)'                  \
    | tr -d ' '                         \
    | tr -d '\t'                        \
    | sort -u > "${roottags}"

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
