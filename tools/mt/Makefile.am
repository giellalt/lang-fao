## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

SUBDIRS = filters . apertium

##################################################################
#### BEGIN: Add local processing instructions BELOW this line ####
##################################################################


##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

####### Other targets: ###########

# cleaning
clean-local:
	-rm -f *.hfst *.hfstol *.xfst *.foma

##########################################
# General build rules included from here:#

include $(top_srcdir)/am-shared/tools-mt-dir-include.am
