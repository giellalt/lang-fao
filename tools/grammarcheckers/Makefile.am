## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

SUBDIRS = filters . tests

####### Source file names: ########
# NB! If any of the filenames below are changed, then remember to also update
# the corresponding filename in `pipespec.xml.in`

GIELLA_GC_MWEDIS_SRC=mwe-dis.cg3
GIELLA_GC_SPELLER_CG_SRC=spellchecker.cg3
GIELLA_GC_GRAMCHECKER_SRC=grammarchecker.cg3
GIELLA_GC_WHSPACE_ANAL_SRC=analyser-gt-whitespace.regex

# Will by default use the one in src/cg3/disambiguator.cg3. To use a
# different file, specify anther filename here:
GIELLA_GC_DISAMBIGUATOR_SRC=grc-disambiguator.cg3

# If a valency file is used, specify its name here:
GIELLA_GC_VALENCY_SRC=

# If there are additional, language specific files used in the GC archive,
# specify here:
LOCAL_GC_ZIP_FILES=after-speller-disambiguator.bin

#### BEGIN: Local build targets: ####

# Copy the standard disambiguator file as the grc version, but without
# protecting the speller suggestions. This one is applied after the regular
# disambiguation, and will disambiguate the suggestions _after_ the rest of
# the sentence is disambiguated.
after-speller-disambiguator.cg3: grc-disambiguator.cg3
	$(AM_V_GEN)grep -v 'PROTECT' $< > $@


#### END: Local build targets:   ####

#### Do NOT edit below here: ####
include $(top_srcdir)/../giella-core/am-shared/tools-grammarcheckers-dir-include.am
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
