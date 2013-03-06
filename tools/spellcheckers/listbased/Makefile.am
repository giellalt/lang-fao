## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# Make sure this dir is processed first, before the subdirs. Even though this is
# the default, it is good to be explicit. This order is required because we
# first build the transducers here, then further utilise them in the subdirs.
SUBDIRS = .

include $(top_srcdir)/am-shared/listbased-spellchecker-include.am
