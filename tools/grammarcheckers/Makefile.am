## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

SUBDIRS = filters .

####### Source file names: ########
# NB! If any of the filenames below are changed, then remember to also update
# the corresponding filename in `pipespec.xml.in`

GIELLA_GC_MWEDIS_SRC=mwe-dis.cg3
GIELLA_GC_SPELLER_CG_SRC=spellchecker.cg3
GIELLA_GC_GRAMCHECKER_SRC=grammarchecker.cg3
GIELLA_GC_WHSPACE_ANAL_SRC=analyser-gt-whitespace.regex

# Will by default use the one in src/syntax/disambiguator.cg3. To use a
# different file, specify anther filename here:
GIELLA_GC_DISAMBIGUATOR_SRC=disambiguator.cg3

# If a valency file is used, specify its name here:
GIELLA_GC_VALENCY=

# If there are additional, language specific files used in the GC archive,
# specify here:
LOCAL_GC_ZIP_FILES=

#### BEGIN: Local build targets: ####

#### END: Local build targets:   ####

#### Do NOT edit below here: ####
include $(top_srcdir)/am-shared/tools-grammarcheckers-dir-include.am
