## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

####### Source file defs: ########

# set this to names of available orthographic rules in regex and xfst format
GT_ORTHOGRAPHIC_SRCS=inituppercase.regex \
					 allcaps.xfscript    \
					 spellrelax.regex    \
					 spellrelax-mobile-keyboard.regex \
					 downcase-derived_proper-strings.xfscript

####### Automake targets: ########

GT_ORTHOGRAPHIC_FSTS=
if CAN_HFST
GT_ORTHOGRAPHIC_FSTS+=allcaps.hfst \
					  inituppercase.hfst \
					  spellrelax.hfst \
					  spellrelax-mobile-keyboard.hfst \
					  downcase-derived_proper-strings.hfst
endif
if CAN_XFST

# Variable assignment is split in two, to allow the making of inverted fst's.
# This is required because of the inverted behavior of Xerox' lookup tool.

# 1. list the target fst's:
GT_ORTHOGRAPHIC_XFSTS=allcaps.xfst \
					  inituppercase.xfst \
					  spellrelax.xfst \
					  spellrelax-mobile-keyboard.xfst \
					  downcase-derived_proper-strings.xfst

# 2. assign this list to the general list of fst's to build:
GT_ORTHOGRAPHIC_FSTS+=$(GT_ORTHOGRAPHIC_XFSTS)

# 3. also assign a modified variant of it to a variable used to build fst's only
#    used when testing. These fst's are the inversion of the original, thus they
#    work as expected when used with Xerox' lookup tool. The modification is a
#    new suffix to distinguish them from the real targets.
GT_TEST_ORTH_XFSTS=$(GT_ORTHOGRAPHIC_XFSTS:.xfst=.inv.xfst)

endif

# This pattern rule is required to block inversion of the xfscript fst's.
# We do want inversion in the general case, but not for the orthographic fst's.
%s.hfst: %s.tmp.hfst
	$(AM_V_GEN)cp -f $< $@

%s.xfst: %s.tmp.xfst
	$(AM_V_GEN)cp -f $< $@

include $(top_srcdir)/am-shared/src-orthography-dir-include.am
