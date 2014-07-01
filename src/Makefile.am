## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# always build . last here, and tagsets have to be built after morphology
SUBDIRS = phonology morphology filters phonetics hyphenation orthography syntax transcriptions tagsets .

####### Automake targets: ########

# Define target variables first, with obligatory raw fst's included:
GT_ANALYSERS_HFST=
GT_GENERATORS_HFST=
GT_TRANSFORMERS_HFST=
GT_ANALYSERS_XFST=
GT_GENERATORS_XFST=
GT_TRANSFORMERS_XFST=

##### BEGIN Hfst target list #####
if CAN_HFST

# Always build the raw generator if hfst is enabled:
GT_GENERATORS_HFST+=generator-raw-gt-desc.hfst

if WANT_MORPHOLOGY
GT_ANALYSERS_HFST+=analyser-gt-desc.hfst \
				   analyser-gt-norm.hfst \
				   analyser-disamb-gt-desc.hfst
endif # WANT_MORPHOLOGY

if WANT_GENERATION
GT_GENERATORS_HFST+=generator-gt-desc.hfst \
					generator-gt-norm.hfst 
endif # WANT_GENERATION

if WANT_TRANSCRIPTORS
GT_TRANSFORMERS_HFST+=transcriptor-clock2text-desc.hfst \
					  transcriptor-date2text-desc.hfst \
					  transcriptor-numbers2text-desc.hfst \
					  transcriptor-text2clock-desc.hfst \
					  transcriptor-text2date-desc.hfst \
					  transcriptor-text2numbers-desc.hfst
endif # WANT_TRANSCRIPTORS

if WANT_DICTIONARIES
GT_ANALYSERS_HFST+=analyser-dict-gt-desc.hfst \
				   analyser-dict-gt-desc-mobile.hfst
GT_GENERATORS_HFST+=generator-dict-gt-norm.hfst

endif # WANT_DICTIONARIES

if WANT_OAHPA
GT_ANALYSERS_HFST+=analyser-oahpa-gt-desc.hfst
GT_GENERATORS_HFST+=generator-oahpa-gt-norm.hfst \
					$(DIALECT_TARGETS_HFST)
endif # WANT_OAHPA

endif # CAN_HFST
##### END Hfst target list #####

##### BEGIN Xerox target list #####
if CAN_XFST

# Always build the raw analsyer if Xerox is enabled:
GT_ANALYSERS_XFST+=analyser-raw-gt-desc.xfst

if WANT_MORPHOLOGY
GT_ANALYSERS_XFST+=analyser-gt-desc.xfst \
				   analyser-gt-norm.xfst \
				   analyser-disamb-gt-desc.xfst
endif # WANT_MORPHOLOGY

if WANT_GENERATION
GT_GENERATORS_XFST+=generator-gt-desc.xfst \
					generator-gt-norm.xfst
endif # WANT_GENERATION

if WANT_TRANSCRIPTORS
GT_TRANSFORMERS_XFST+=transcriptor-clock2text-desc.xfst \
					  transcriptor-date2text-desc.xfst \
					  transcriptor-numbers2text-desc.xfst \
					  transcriptor-text2clock-desc.xfst \
					  transcriptor-text2date-desc.xfst \
					  transcriptor-text2numbers-desc.xfst
endif # WANT_TRANSCRIPTORS

if WANT_DICTIONARIES
GT_ANALYSERS_XFST+=analyser-dict-gt-desc.xfst \
				   analyser-dict-gt-desc-mobile.xfst
GT_GENERATORS_XFST+=generator-dict-gt-norm.xfst

endif # WANT_DICTIONARIES

if WANT_OAHPA
GT_ANALYSERS_XFST+=analyser-oahpa-gt-desc.xfst
GT_GENERATORS_XFST+=generator-oahpa-gt-norm.xfst \
					$(DIALECT_TARGETS_XFST)
endif # WANT_OAHPA

endif # CAN_XFST
##### END Xerox target list #####


#### Local modifications in *fst processing: ####
####
#### Copy the fallback targets, and rename them to the desired targets. Then:
#### Replace the 'cp' command (Xerox) / Prepend the hfst-invert command (Hfst -
#### remember to move the $<) with whatever you need to complete
#### the processing to get the final target transducer.
#### Remember to add the dependencies as well.
#### Also make sure that HFST and Xerox processing are the same.
####
#### If you add new transducers to be built, you need to add them to the
#### relevant variable, e.g.:
####
#### if CAN_HFST
#### GT_GENERATORS_HFST+=generator-oahpa-gt-norm.hfst
#### endif
####
#### NB!!!! The HFST targets should get a hyphen after 'analyser'/'generator'
#### respectively, to make the local targets minimally different from and
#### slightly more specific than the fallback targets. This is to avoid warnings
#### about duplicate targets. That is, the local targets should looke like:
####
#### analyser-%.hfst: analyser-%.tmp.hfst
#### generator-%.hfst: generator-%.tmp.hfst

##################################################################
#### BEGIN: Add local processing instructions BELOW this line ####
##################################################################

########################################################
#### Add language-specific transducer targets here: ####

#### Xerox transducers:
if CAN_XFST
GT_ANALYSERS_XFST+=
GT_GENERATORS_XFST+=
endif # CAN_XFST

#### HFST transducers
if CAN_HFST
GT_ANALYSERS_HFST+=
GT_GENERATORS_HFST+=
endif # CAN_HFST


#################################################
#### Add language-specific build rules here: ####

analyser-raw-gt-desc.hfst: analyser-raw-gt-desc.tmp.hfst \
					filters/reorder-semantic-tags.hfst
	$(AM_V_RGX2FST)$(PRINTF) "\
				@\"filters/reorder-semantic-tags.hfst\"            \
			.o. @\"$<\" \
			;" \
		| $(HFST_REGEXP2FST) $(HFST_FLAGS) -S --harmonize-flags \
		> $@

analyser-raw-gt-desc.xfst: analyser-raw-gt-desc.tmp.xfst \
					filters/reorder-semantic-tags.xfst
	$(AM_V_XFST)$(PRINTF) "read regex \
				@\"filters/reorder-semantic-tags.xfst\"            \
			.o. @\"$<\" \
			;\n\
		 save stack $@\n\
		 quit\n" | $(XFST) $(VERBOSITY)

# Standard generators
# HFST:
generator-gt-%.hfst: generator-gt-%.tmp.hfst \
					filters/make-optional-semantic-tags.hfst
	$(AM_V_GEN)$(PRINTF) \
			   "@bin\"filters/make-optional-semantic-tags.hfst\" \
			.o. @bin\"$<\" \
			;" \
		| $(HFST_REGEXP2FST) $(HFST_FLAGS) -S --harmonize-flags \
		> $@

# Xerox:
generator-gt-%.xfst: generator-gt-%.tmp.xfst \
					filters/make-optional-semantic-tags.xfst
	$(AM_V_GEN)$(PRINTF) "read regex                          \
				@\"filters/make-optional-semantic-tags.xfst\" \
			.o. @\"$<\".i                                     \
			;\n\
		 invert net\n\
		 save stack $@\n\
		 quit\n" | $(XFST) $(VERBOSITY)

##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

#### HFST transducer fallback target:
#### - inversion is needed FOR THE ANALYSER because the hfst model is upside
#### down compared to Xerox AT APPLICATION TIME. The other command makes the
#### final transducer ready for use.
analyser%.hfst: analyser%.tmp.hfst
	$(AM_V_GEN)$(HFST_INVERT) $< \
		| $(HFST_FST2FST) $(HFST_FLAGS) -f olw -o $@

generator%.hfst: generator%.tmp.hfst
	$(AM_V_GEN)$(HFST_FST2FST) $(HFST_FLAGS) -t -i $< -o $@

#### Xerox transducer fallback target:
%.xfst: %.tmp.xfst
	$(AM_V_CP)cp -f $< $@

include $(top_srcdir)/am-shared/src-dir-include.am
