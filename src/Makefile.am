## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# always build . last here, and tagsets have to be built after morphology
SUBDIRS = phonology morphology filters phonetics hyphenation orthography syntax transcriptions tagsets .

####### Automake targets: ########

# Define target variables first, before assigning to them:
GT_ANALYSERS_HFST=
GT_GENERATORS_HFST=
GT_ANALYSERS_XFST=
GT_GENERATORS_XFST=

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

##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

#### HFST transducer fallback target:
#### - inversion is needed FOR THE ANALYSER because the hfst model is upside
#### down compared to Xerox AT APPLICATION TIME.
analyser%.hfst: analyser%.tmp.hfst
	$(AM_V_INVERT)$(HFST_INVERT) -i $< -o $@

generator%.hfst: generator%.tmp.hfst
	$(AM_V_CP)cp -f $< $@

#### Xerox transducer fallback target:
#### - inversion is needed in the final step for the GENERATOR.
analyser%.xfst: analyser%.tmp.xfst
	$(AM_V_CP)cp -f $< $@

generator%.xfst: generator%.tmp.xfst
	$(AM_V_XFST)$(PRINTF) "\
		 load stack $<\n\
		 invert net\n\
		 save stack $@\n\
		 quit\n" | $(XFST) $(VERBOSITY)

include $(top_srcdir)/am-shared/src-dir-include.am
