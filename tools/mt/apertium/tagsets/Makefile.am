## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# List relabel source files here:
TAGSET_SRCS=

# List reorder regex source files here:
REGEX_SRCS=modify-tags.regex 

####### Other targets: ###########

# cleaning
clean-local:
	-rm -f *.hfst *tags.txt

##########################################
# General build rules included from here:#

include $(top_srcdir)/../giella-core/am-shared/tools-mt-apertium-tagsets-dir-include.am
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
