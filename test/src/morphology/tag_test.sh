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

# Get giella-core from the test environment:
giella_core=$GIELLA_CORE

# If verbose:
if [[ $1 == "-v" ]]; then
    echo "$0: Are there tags not declared in root.lexc or misspelled?"
fi

# Extract USED tags:
sed -e '1,/LEXICON Root/d' < \
    ../../../src/fst/lexicon.tmp.lexc | # Extract all lines after LEXICON Root
    ${giella_core}/scripts/extract-used-tags.sh | # Extract tags, local mods after this line:
    LC_ALL=no_NO.UTF8 sort -u         \
    > "${lexctags}"

# Extract DEFINED tags:
sed -n '/LEXICON Root/q;p' \
    ../../../src/fst/lexicon.tmp.lexc | # Extract all lines before LEXICON Root
    ${giella_core}/scripts/extract-defined-tags.sh | # Extract tags, local mods after this line:
    LC_ALL=no_NO.UTF8 sort -u         \
    > "${roottags}"

# Compare the two sets of tags, report and fail if there is a diff:
check=$(LC_ALL=no_NO.UTF8 comm -23 "${lexctags}" "${roottags}")
if [[ -n "${check}" ]]; then
    echo "$0: Have a look at these:"
    echo "${check}"
    exit 1
elif [[ $1 == "-v" ]]; then
    echo "$0: No errors found."
fi
