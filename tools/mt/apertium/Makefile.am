## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# Process subdirs first:
SUBDIRS = filters tagsets .

##################################################################
#### Specify target languages and corresponding file names:   ####
##################################################################

# Specify the list of target languages and their corresponding
# Apertium directory names in these two variables (replace und):
APERTIUM_TARGET_LANGS=und
APERTIUM_TARGET_LANG_NAME=apertium-und

##################################################################
#### Specify CG3 source files, main and included ones:        ####
##################################################################
APERTIUM_CG_SRC=

APERTIUM_CG_INCLUDE_SRC=

##################################################################
#### BEGIN: Add local processing instructions BELOW this line ####
##################################################################



##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

####### Other targets: ###########

# cleaning
clean-local:
	-rm -f *.hfst *.gz *.cg3 *.bin *.hfstol

include $(top_srcdir)/am-shared/tools-mt-apertium-dir-include.am
