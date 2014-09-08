## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# Make sure this dir is processed first, before the subdirs. Even though this is
# the default, it is good to be explicit. This order is required because we
# first build the transducers here, then further utilise them in the subdirs.
SUBDIRS = filters .

#########################################
# Language specific processing of fst's for list-based spellers:
# BEGIN: Local processing
#
# Target template:
#
# generator-speller-gt-norm_nonrec.hfst: generator-speller-gt-norm_nonrec.tmp.hfst
#	build rules
#
# analyser-speller-gt-norm_nonrec.xfst: analyser-speller-gt-norm_nonrec.tmp.xfst
#	build rules


# END: Local processing
#########################################

include $(top_srcdir)/am-shared/tools-spellcheckers-listbased-dir-include.am
