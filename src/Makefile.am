## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

SUBDIRS = fst cg3

#################################################
#### Add language-specific build rules here: ####


# Hfst - add weights to compounds if using tropical-semiring fst format:
if WITH_OFST_TROPICAL
generator-raw-gt-desc.hfst: generator-raw-gt-desc.tmp.hfst
	$(AM_V_REWEIGHT)$(HFST_REWEIGHT) $(MORE_VERBOSITY) $(HFST_FLAGS) \
			-S '+Cmp' -a 10 --arcs-only -i $< \
		> $@
endif




analyser-gt-norm.%: analyser-gt-norm.tmp.% \
					filters/convert_to_flags-CmpNP-tags.% 
	$(AM_V_XFST_TOOL)$(PRINTF) "read regex \
			    @\"filters/convert_to_flags-CmpNP-tags.$*\"            \
			.o. @\"filters/split-CmpNP-tags.hfst\"                     \
			.o. @\"$<\"                                                \
			;\n\
		 twosided flag-diacritics\n\
		 $(INVERT_HFST)\
		 save stack $@\n\
		 quit\n" | $(XFST_TOOL)

# The operation 'twosided flag-diacritics" crashes Xerox badly, so we do with
# a simpler, less restrictive normative fst when building with Xerox:
analyser-gt-norm.xfst: analyser-gt-norm.tmp.xfst \
					filters/remove-norm-comp-tags.xfst             
	$(AM_V_XFST)$(PRINTF) "read regex \
				@\"filters/remove-norm-comp-tags.xfst\"             \
			.o. @\"$<\"                                         \
			;\n\
		 save stack $@\n\
		 quit\n" | $(XFST) $(VERBOSITY)

# ... and also in the Oahpa analyser:
analyser-oahpa-gt-norm.%: analyser-oahpa-gt-norm.tmp.% \
					filters/remove-norm-comp-tags.%             
	$(AM_V_XFST_TOOL)$(PRINTF) "read regex \
			    @\"filters/remove-norm-comp-tags.$*\"             \
			.o. @\"$<\"                                       \
			;\n\
		 $(INVERT_HFST)\
		 save stack $@\n\
		 quit\n" | $(XFST_TOOL)

# ... and also in the general descriptive analysers:
analyser-gt-desc.%: analyser-gt-desc.tmp.% \
					filters/remove-norm-comp-tags.%             
	$(AM_V_XFST_TOOL)$(PRINTF) "read regex \
			    @\"filters/remove-norm-comp-tags.$*\"             \
			.o. @\"$<\"                                       \
			;\n\
		 $(INVERT_HFST)\
		 save stack $@\n\
		 quit\n" | $(XFST_TOOL)

# ... as well as in the HFST disambiguation analyser:
analyser-disamb-gt-desc.hfst: analyser-disamb-gt-desc.tmp.hfst \
				filters/remove-norm-comp-tags.hfst             
	$(AM_V_HXFST)$(PRINTF) "read regex \
		    @\"filters/remove-norm-comp-tags.hfst\"           \
		.o. @\"$<\"                                           \
		;\n\
	invert net\n\
	save stack $@\n\
	quit\n" | $(HFST_XFST) -p $(MORE_VERBOSITY)

# ... as well as in the HFST Grammar Checker analyser:
# (keep the Err/SpaceCmp strings here)
analyser-gramcheck-gt-desc.hfst: analyser-gramcheck-gt-desc.tmp.hfst \
				filters/remove-norm-comp-tags.hfst           \
				orthography/comprelax-with-flagtags.compose.hfst
	$(AM_V_HXFST)$(PRINTF) "\
	set encode-weights ON\n\
	read regex \
		    @\"filters/remove-norm-comp-tags.hfst\"           \
		.o. @\"$<\"                                           \
		;\n\
	twosided flag-diacritics\n\
	invert net\n\
	save stack $@\n\
	quit\n" | $(HFST_XFST) -p $(MORE_VERBOSITY)

# ... as well as in the XEROX/FOMA disambiguation analyser
# (remove the Err/SpaceCmp thing here):
analyser-disamb-gt-desc.%: analyser-disamb-gt-desc.tmp.% \
					filters/remove-norm-comp-tags.%             
	$(AM_V_XFST_TOOL)$(PRINTF) "read regex \
			    @\"filters/remove-norm-comp-tags.$*\"             \
			.o. @\"$<\"                                     \
			;\n\
		 $(INVERT_HFST)\
		 save stack $@\n\
		 quit\n" | $(XFST_TOOL)

# We need to add processing of language-specific tags in the generator:
define giella_generators
generator-gt-%.$(1): generator-gt-%.tmp.$(1) \
					 filters/remove-norm-comp-tags.$(1)             
	$$(AM_V_XFST_TOOL)$$(PRINTF) "read regex \
			    @\"filters/remove-norm-comp-tags.$(1)\"           \
			.o. @\"$$<\"                                        \
			;\n\
		 $$(INVERT_XFST)$$(INVERT_FOMA)\
		 save stack $$@\n\
		 quit\n" | $$(XFST_TOOL)
endef
$(foreach fst,hfst xfst foma,$(eval $(call giella_generators,$(fst))))

# We need to add processing of language-specific tags for the Oahpa generators:
generator-oahpa-gt-norm.%: generator-oahpa-gt-norm.tmp.% \
					filters/remove-norm-comp-tags.%             
	$(AM_V_XFST_TOOL)$(PRINTF) "read regex \
			    @\"filters/remove-norm-comp-tags.$*\"             \
			.o. @\"$<\"                                       \
			;\n\
		 $(INVERT_XFST)$(INVERT_FOMA)\
		 save stack $@\n\
		 quit\n" | $(XFST_TOOL)

# morpher is a morph segmenting variant: taloautoissani -> talo#auto>i>ssa>ni
morpher-gt-desc.%: morpher-gt-desc.tmp.% \
					filters/remove-dynamic_compound-char.% \
					filters/simplify-triple-der-borders.%
	$(AM_V_XFST_TOOL)$(PRINTF) "read regex \
			    @\"filters/remove-dynamic_compound-char.$*\".i  \
			.o. @\"filters/simplify-triple-der-borders.$*\".i  \
			.o. @\"$<\" \
			;\n\
		 $(INVERT_HFST)\
		 save stack $@\n\
		 quit\n" | $(XFST_TOOL)

##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

include $(top_srcdir)/../giella-core/am-shared/src-dir-include.am
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
