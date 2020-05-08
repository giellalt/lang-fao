## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

### Variable definitions:
GIELLA_LOCAL_SPELLER_FILTER_SRCS=
GIELLA_LOCAL_COPY_FILTER_SRCS=
GENERATED_REGEXES=

##################################################################
#### BEGIN: Add local processing instructions BELOW this line ####
##################################################################

# List any local additions here:
GIELLA_LOCAL_SPELLER_FILTER_SRCS+=

# Only build these things if speller fst's are enabled:
if WANT_SPELLERS

# List generated regexes here:
GENERATED_REGEXES+=

endif # WANT_SPELLERS

# Add the build code of local additions here:

##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

####### Other targets: ###########
clean-local:
	-rm -f *.hfst *.xfst *.foma

include $(srcdir)/Makefile.mod-desktop-filters.am
include $(srcdir)/Makefile.mod-fstbased-filters.am
include $(srcdir)/Makefile.mod-mobile-filters.am
include $(top_srcdir)/am-shared/tools-spellcheckers-filters-dir-include.am
