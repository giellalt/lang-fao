## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# order is always . last here
SUBDIRS = phonology morphology filters phonetics hyphenation orthography syntax .

#### Local modifications in *fst processing: ####
####
#### Copy the pattern targest to a specific target. Then:
#### Replace the 'cp' command with whatever you need to complete
#### the processing to get the final target transducer (but leave the 'rm').
#### Remember to add the dependencies as well.
#### Also make sure that HFST and Xerox processing are the same.

#### HFST transducer targets:
%.hfst: %.hfst.tmp
	cp -f $< $@
	rm -f $<

#### Xerox transducer targets:
%.xfst: %.xfst.tmp
	cp -f $< $@
	rm -f $<

include $(top_srcdir)/am-shared/topdir-include.am

