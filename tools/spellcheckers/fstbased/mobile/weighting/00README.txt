This directory contains data for building a weighted fst for spell checking purposes. There are three editable source files:

* Makefile.am
* spellercorpus.raw.txt
* tags.reweight

Makefile.am
-----------

Contains two variables that can be changed if wanted:

GT_RAW_SPELLER_CORPUS   - name of file containing the raw corpus data (see next)
GT_CLEAN_SPELLER_CORPUS - name of file containing cleaned corpus data (generated)

The default value should be fine for most purposes. The template corpus file has
the default name.

spellercorpus.raw.txt
---------------------

This file contains the raw corpus text used as basis for the frequency weighting
of the speller fst. Replace the dummy content with real text in your language.

TODO: add a build option to use corpus text stored elsewhere, to avoid filling
up svn with replicas of corpus material.

tags.reweight
-------------

This file contains a list of tags for which we want to give specific weights.
This can be used both for morphology-based weighting (ie give a certain weight
to morphosyntactic tags) and to weight tags for other purposes, like to give a
very high weight to tags designating words that should never be suggested.

The weights are used when ranking suggestions for misspellings. The total weight
for a given suggested word form is the sum of:

* frequency weight (frequent words have less weight than less frequent words)
* tags-based weights
* the total weights coming from the error model to generate the suggestion

Other files
-----------

There are other files in that dir:

* Makefile.am
* word-boundary.att
* word-boundary.relabel
* word-boundary.txt

