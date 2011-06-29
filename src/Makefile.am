## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# order is always . last here
SUBDIRS = morphology phonology orthography syntax .

MAYBE_MORPHOLOGY=
MAYBE_DICTIONARY=
MAYBE_GENERATION=
if WANT_HFST
if WANT_MORPHOLOGY
MAYBE_MORPHOLOGY+=morphology.gt.hfst
endif
if WANT_GENERATION
MAYBE_GENERATION+=generation.gt.hfst
endif
if WANT_DICTIONARY
MAYBE_DICTIONARY+=dictionary.default.hfst
endif
endif # WANT_HFST
if WANT_XFST
if WANT_MORPHOLOGY
MAYBE_MORPHOLOGY+=morphology.gt.xfst
endif
if WANT_GENERATION
MAYBE_GENERATION+=generation.gt.xfst
endif
if WANT_DICTIONARY
MAYBE_DICTIONARY+=dictionary.default.xfst
endif
endif # WANT_XFST
hfstdir=$(sharedir)/hfst/$(GTLANG)
hfst_DATA=$(MAYBE_MORPHOLOGY) $(MAYBE_GENERATION) $(MAYBE_DICTIONARY)

morphology.gt.hfst: morphology/$(GTLANG).hfst phonology/$(GTLANG).hfst
	$(HFST_COMPOSE_INTERSECT) $(HFST_FLAGS) -1 morphology/$(GTLANG).hfst -2 phonology/$(GTLANG).hfst |\
		$(HFST_INVERT) $(HFST_FLAGS) |\
		$(HFST_MINIMIZE) $(HFST_FLAGS) -o $@

generation.gt.hfst: morphology.gt.hfst
	$(HFST_INVERT) $(HFST_FLAGS) -i $< |\
		$(HFST_MINIMIZE) $(HFST_FLAGS) -o $@

dictionary.default.hfst: morphology.gt.hfst
	$(HFST_PROJECT) --project=upper -i $< -o $@

%.hfstol: %.hfst
	$(HFST_FST2FST) -f olw -i $< -o $@

morphology.gt.xfst: morphology/$(GTLANG).xfst phonology/$(GTLANG).xfst
	$(PRINTF) "read-source morphology/$(GTLANG).xfst\nread-rules phonology/$(GTLANG).xfst\ncompose-result\nsave-result $@\nquit\n" | $(LEXC)

generation.gt.xfst: morphology.gt.xfst
	$(PRINTF) "load stack $<\ninvert net\nsave stack $@\nquit\n" | $(XFST)

dictionary.default.xfst: morphology.gt.xfst
	$(PRINTF) "load stack $<\nlower net\nsave stack $@\nquit\n" | $(XFST)

clean-local:
	-rm -f $(MAYBE_MORPHOLOGY) $(MAYBE_GENERATION) $(MAYBE_DICTIONARY)
