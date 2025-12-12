## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

SUBDIRS = . test

####### Source file names: ########
# NB! If any of the filenames below are changed, then remember to also update
# the corresponding filename in `pipespec.xml.in`

GIELLA_TTS_PHONEMISER_SRC=text2phontext.regex
GIELLA_TTS_ACRO_PHONEMISER_SRC=acro2text.regex
GIELLA_TTS_IPA_FST_FILE=
GIELLA_TTS_VALENCY_SRC=
GIELLA_TTS_WHSPACE_ANAL_SRC=analyser-gt-whitespace.regex
GIELLA_TTS_MWEDIS_SRC=mwe-dis.cg3
GIELLA_TTS_DISAMBIGUATOR_SRC=disambiguator.cg3
GIELLA_TTS_FUNCTIONS_SRC=functions.cg3
GIELLA_TTS_DEPENDENCY_SRC=dependency.cg3
GIELLA_TTS_SEMSETS_SRC=

# Tokeniser:
GIELLA_TTS_TOKENISER=tokeniser-tts-cggt-desc.pmhfst

# List transcriptor source files from src/transcriptions/ (without extension)
# that should NOT be included in the tts text processing (by default everything
# is included):
GIELLA_TTS_REMOVE_TRANSCRIPTORS=

# If there are additional, language specific files used in the GC archive,
# specify here:
LOCAL_TTS_ZIP_FILES=

#### BEGIN: Local build targets: ####

#### END: Local build targets:   ####

#### Do NOT edit below here: ####
include $(top_srcdir)/../giella-core/am-shared/tools-tts-dir-include.am
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
