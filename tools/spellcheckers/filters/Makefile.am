## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# Variable definitions for variables assigned to multiple times:
OFST_REGEX_TARGETS=
SELECTED_FORMAT_REGEX_TARGETS=
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

##########################################
# Included Makefile fragments - DO NOT EDIT:
include $(srcdir)/Makefile.mod-desktop-filters.am
include $(srcdir)/Makefile.mod-fstbased-filters.am
include $(srcdir)/Makefile.mod-mobile-filters.am
include $(top_srcdir)/../giella-core/am-shared/tools-spellcheckers-filters-dir-include.am
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
