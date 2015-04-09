## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# The current dir must be built after the filters, but before the rest.
SUBDIRS = weighting filters . hfst foma

# Name of speller corpus sans suffix:
CORPUSNAME=spellercorpus

# Local modifications of the speller transducer:
#   - use this until a bug in hfst-reweight has been fixed.

generator-fstspeller-gt-norm.tmp.hfst: \
		generator-fstspeller-gt-norm-weighted.hfst
	$(AM_V_GEN)cat $< \
		| $(HFST_REWEIGHT) -a 1.0 -S +Cmp   \
		| $(HFST_REWEIGHT) -a 2.0 -S +PxSg1 \
		| $(HFST_REWEIGHT) -a 2.0 -S +PxSg2 \
		| $(HFST_REWEIGHT) -a 2.0 -S +PxSg3 \
		| $(HFST_REWEIGHT) -a 2.0 -S +PxPl1 \
		| $(HFST_REWEIGHT) -a 2.0 -S +PxPl2 \
		| $(HFST_REWEIGHT) -a 2.0 -S +PxPl3 \
		| $(HFST_REMOVE_EPSILONS)     $(HFST_FLAGS) \
		| $(HFST_PUSH_WEIGHTS) -p end $(HFST_FLAGS) \
		| $(HFST_DETERMINIZE)  -E     $(HFST_FLAGS) \
		| $(HFST_MINIMIZE)     -E     $(HFST_FLAGS) \
		-o $@

include $(top_srcdir)/am-shared/tools-spellcheckers-fstbased-dir-include.am
