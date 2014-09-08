## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# List any local additions here:
GT_FILTER_SRCS=

# The common filter targets (don't change locally):
GT_FILTER_TARGETS=

if CAN_HFST
GT_FILTER_TARGETS+=extract-RCmpnd-strings.hfst
endif

if CAN_XFST
GT_FILTER_TARGETS+=extract-RCmpnd-strings.xfst
endif

GENERATED_REGEXES=

# Add the target of local additions here:
# HFST targets here:
if CAN_HFST
GT_FILTER_TARGETS+=
endif

# And Xerox targets here:
if CAN_XFST
GT_FILTER_TARGETS+=

endif

include $(top_srcdir)/am-shared/tools-spellcheckers-listbased-filters-dir-include.am
