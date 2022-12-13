## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

##################################################################
#### BEGIN: Add local processing instructions BELOW this line ####
##################################################################

# List any local additions here:
GT_LOCAL_TOKENISERS_FILTER_SRCS=

# Source files copied from src/filters/ OR from $(GIELLA_CORE)/fst-filters/:
GT_LOCAL_COPY_FILTER_SRCS=

# Only build these things if speller fst's are enabled:
if WANT_TOKENISERS

# List generated regexes here:
GENERATED_REGEXES=

endif # WANT_TOKENISERS

# Add the build code of local additions here:

##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

####### Other targets: ###########
clean-local:
	-rm -f *fst *.txt *.regex $(GT_LOCAL_COPY_FILTER_SRCS)

include $(top_srcdir)/../giella-core/am-shared/tools-grammarcheckers-filters-dir-include.am
