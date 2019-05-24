## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# The current dir must be built after weighting, but before the rest.
SUBDIRS = filters weighting . hfst vfst

# Name of speller corpus sans suffix:
CORPUSNAME=spellercorpus

# Specify whether to use corpus weights for frequency ranking of suggestions.
# Make sure you test the suggestion quality both before and after changing this
# setting.
ENABLE_CORPUS_WEIGHTS=no

# Use this as the source lexical fst for unit weighting, it contains correct
# surface forms except for the word boundary #, which is still present, and
# used in the weighting:
UW_SPELLER_SRC=generator-mobilespeller-gt-norm-base.hfst

# Number of lines (= word forms) in the sort-uniqued corpus. If empty the whole
# corpus will be used. Too large a corpus can make the acceptor fst unneccessary
# big without improving the suggestion quality in a noticable way. A starting
# point could be to only include word forms occurring at least twice. Try
# different values to find the best compromise between fst size and suggestion
# quality.
CORPUS_SIZE=

### BEGIN: Local build rules: *.hfst: *.tmp.hfst ###

#### END: Local build rules: *.hfst: *.tmp.hfst ####

include $(top_srcdir)/am-shared/tools-spellcheckers-fstbased-mobile-dir-include.am
