## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

SUBDIRS = filters . apertium cgbased

##################################################################
#### BEGIN: Add local processing instructions BELOW this line ####
##################################################################

# We want to rename the POS tags in front of derivations:
analyser-mt-gt-desc.hfst: analyser-mt-gt-desc.tmp.hfst \
		filters/remove-derivation-strings.hfst
	$(AM_V_RGX2FST)$(PRINTF) "\
		@\"filters/remove-derivation-strings.hfst\" .o. @\"$<\" ;" \
		| $(HFST_REGEXP2FST) $(HFST_FLAGS) $(HFST_FORMAT) \
			-S --xerox-composition=ON \
		| $(HFST_INVERT) $(HFSTFLAGS) \
		-o $@

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
