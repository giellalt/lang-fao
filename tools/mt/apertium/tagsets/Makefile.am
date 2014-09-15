## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# List relabel source files here:
TAGSET_SRCS=

# List reorder regex source files here:
REGEX_SRCS=modify-tags.smn.regex \
           modify-tags.nob.regex

# These will be included in the distribution:
GT_REGEX_SRCS=$(TAGSET_SRCS) $(REGEX_SRCS) README.txt

# Automatically detect the targets to be built:
GT_REGEX_TARGETS=

if WANT_APERTIUM
if CAN_HFST
GT_REGEX_TARGETS+=$(patsubst %.regex,%.hfst,$(REGEX_SRCS))
endif # CAN_HFST

if CAN_XFST
GT_REGEX_TARGETS+=$(patsubst %.regex,%.xfst,$(REGEX_SRCS))
endif # CAN_XFST
endif # WANT_APERTIUM

####### Other targets: ###########

include $(top_srcdir)/am-shared/regex-include.am
