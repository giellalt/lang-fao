Test results for the morphology and lexicon files
=================================================

This document documents the testing of the parser and disambiguator.

Test results for morphology and lexicon
---------------------------------------

### Vocabualry testing

The following table records recall for word forms in various texts. Here
we measure coverage of the vocabulary, by recording all word forms that
are not recognised.

    ---------------------------------------------------
    fao/dev/ftt-utf8.txt
    Test 1   Wftot   Wf-tkn %-recall  Tytot  Wf-typ %-recall
    080202 2300493  1965452   85.4 %  97475   49561   50.8 %
    080203 2300493  1984809   86.2 %  97475   49643   50.9 %
    090301 2304632  2154827   93.5 %  97282   61074   62.8 %

    fao/corp/1Mos.txt
    Test 1   Wftot   Wf-tkn %-recall  Tytot  Wf-typ %-recall
    090301   18911   18221    96.3 %   2690    2240   83.3 %

#### Explaining the table

Lower token than type percentage indicates that the parser misses common
words more often than seldom ones.

Lower type than token percentage (which is the case) indicates that the
parser is good at the core vocabulary, but has lacunas in the overall
vocabulary.

Each text is given a separate section in the table, ordered
chronologically, with the oldest test case (Test 1) at the bottom. The
first line of each section gives the name of the file (note: the files
of the test cases 2 and 3 are so changed that these two test cases are
closed). Each line represents a test run. The first colum gives the test
date (in the format ddmmyy), the second (WFtot) the total number of
words in the file question, the third (Wf-tkn) the number of recognised
word form tokens, and the percentage compared to the total. The next
columns does the same for wordform types (cf. below for the commands
used to calculate the numbers).

    -------------------------------------------------------------------------
    Wftot:
    cat filename | preprocess --abbr=bin/abbr.txt | wc -l

    Non_recognised_wf:
    cat filename | preprocess --abbr=bin/abbr.txt | lookup -flags mbTT -utf8 bin/fao.fst
     | grep '\?' | grep -v CLB | wc -l

    Wf-tkn = Wftot - Non_recognised_wf

    %-recall = Wf-tkn * 100 / Wftot
    -------------------------------------------------------------------------
    Tytot (Total number of wordform types):
    cat filename | preprocess --abbr=bin/abbr.txt | sort | uniq | wc -l

    Non_recognised_wt (Number of non-analysed wordform types:
    cat filename | preprocess --abbr=bin/abbr.txt | sort | uniq |
    lookup -flags mbTT -utf8 bin/fao.fst | grep '\?' | grep -v CLB | wc -l

    Wf-typ (Number of recognised wordform types)
    Wf-typ = Tytot - Non_recognised_wt

    %-recall = Wf-typ * 100 / Tytot

    If the text is taken from our new /usr/local/share/fao/gt corpus, then
    the "cat filename" part should be replaced with
    catxml --title --input /usr/local/share/fao/gt/
    and thereafter catalogue name and file name.
    -------------------------------------------------------------------------

Grammatical testing
-------------------

### Part of speech testing

There has not been a systematic testing of the morphology. A first step
for that would be to scan in the paradigms in the dictionary, pair them
with grammatical information, and then run the paradigm procedure in the
testing/ catalogue.

#### Adjectives

Adjectives are not completed

#### Nouns

The noun classes are included but should be tested, by setting up a
testbed, scanned in from the dictionary.

#### Verbs

There are classes not yet implemented omong the strong verbs.

Testing the disambiguator
=========================

Forthcoming...
