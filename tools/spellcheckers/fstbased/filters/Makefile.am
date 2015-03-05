## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

##################################################################
#### BEGIN: Add local processing instructions BELOW this line ####
##################################################################

# List any local additions here:
GT_LOCAL_FSTSPELLER_FILTER_SRCS=

# Only build these things if speller fst's are enabled:
if WANT_SPELLERS

# List generated regexes here:
GENERATED_REGEXES=

endif # WANT_SPELLERS

# Add the build code of local additions here:

##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

####### Other targets: ###########
clean-local:
	-rm -f *.hfst *.xfst

include $(top_srcdir)/am-shared/tools-spellcheckers-fstbased-filters-dir-include.am
