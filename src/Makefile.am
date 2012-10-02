## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# order is always . last here
SUBDIRS = phonology morphology filters phonetics hyphenation orthography syntax transcriptions .

#### Local modifications in *fst processing: ####
####
#### Copy the pattern target to a specific target. Then:
#### Replace the 'cp' command (Xerox) / Prepend the hfst-invert command (Hfst -
#### remember to move the $<)
#### with whatever you need to complete
#### the processing to get the final target transducer.
#### Remember to add the dependencies as well.
#### Also make sure that HFST and Xerox processing are the same.

#### HFST transducer targets:
#### - inversion is needed because the hfst model is upside-down compared to
#### Xerox, and the other commands makes the final transducer ready for use.
%.hfst: %.tmp.hfst
	$(HFST_INVERT) $< \
		| $(HFST_PREPROCESS_FOR_OPTIMIZED_LOOKUP_FORMAT) $(HFST_FLAGS) \
		| $(HFST_FST2FST) $(HFST_FLAGS) -f olw -o $@

#### Xerox transducer targets:
%.xfst: %.tmp.xfst
	cp -f $< $@

#### Add local processing instructions below this line:

include $(top_srcdir)/am-shared/topdir-include.am
