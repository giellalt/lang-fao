## Process this file with autoconf to produce configure script

## Copyright (C) 2011 Samediggi/Divvun/UiT

## This program is free software: you can redistribute it and/or modify
## it under the terms of the GNU General Public License as published by
## the Free Software Foundation, either version 3 of the License, or
## (at your option) any later version.

## This program is distributed in the hope that it will be useful,
## but WITHOUT ANY WARRANTY; without even the implied warranty of
## MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
## GNU General Public License for more details.

## You should have received a copy of the GNU General Public License
## along with this program.  If not, see <http://www.gnu.org/licenses/>.

# Following things just need to be at top of all configure.ac files:

# AC_INIT sets up project metadata:
# first field the name of the "software"
# second field is version identifie iso 8901 date is good if you have no other
#   versioining schemes in mind
# third is email address for bug reports
# fourth is name of packages made by make dist, excluding .tar.gz
# fifth is the project web address
AC_INIT([giella-fao], [20110617], [feedback@divvun.no], [giella-fao],
        [http://divvun.no])
# AC_REVISION is used to get SVN revision into bug reports
AC_REVISION([$Revision$])
# These configuration dirs hide some extra cruft
AC_CONFIG_AUX_DIR([build-aux])
AC_CONFIG_MACRO_DIR([m4])
# AM_INIT_AUTOMAKE sets up make conventions
AM_INIT_AUTOMAKE(
  1.11.6 -Wall -Werror
  foreign -Wno-portability
  dnl Automake versions before 1.13 (when the serial-tests option was
  dnl still the default) still defined the badly obsolete macro
  dnl 'AM_PROG_CC_STDC'. By checking for the non-existence of this macro,
  dnl we can now force serial testing for newer automakes (with prettier
  dnl output) and at the same time work reasonably with older automakes.
  dnl Code based on:
  dnl https://lists.gnu.org/archive/html/automake/2013-01/msg00060.html
  m4_ifndef([AM_PROG_CC_STDC], [serial-tests])
)
m4_ifdef([AM_SILENT_RULES], [AM_SILENT_RULES([yes])])

### This is the version of the GTD core that we require. Update as needed.
### It is possible to specify also subversion revision: 0.1.2-12345
_gtd_core_min_version=0.2.33

### Required version of the Hfst tools:
_required_hfst_version=3.8.2

# Alternate writing system(s) should be listed here using the ISO 15924 code.
# Multiple alternate WS's should be space separated. For a list of such codes
# see http://en.wikipedia.org/wiki/ISO_15924 and
# http://www.unicode.org/iso15924/codelists.html
# It is assumed that conversion from the default WS to the alternate WS(s)
# can be done programmatically with a regex or xfscript. If not, resources
# for multiple WS's must be developed and maintained as separate languages.
AC_SUBST([DEFAULT_WS], ["Latn"])
AC_SUBST([ALT_WSS], [""])
AM_CONDITIONAL([HAVE_ALT_WSS], [test "x$ALT_WSS" != "x"])

# Specify the ISO 3166-1 alpha-2 codes for countries as pr BCP-47. A list of
# codes can be found at http://en.wikipedia.org/wiki/ISO_3166-1.
# Only specify country codes if there is a real difference between and real need
# for country-specific normative tools. E.g. in SMJ, people write æ or ä
# depending on whether they are in Norway or Sweden, and restricting a speller
# to only the relevant variant will improve the overall quality of the speller.
AC_SUBST([COUNTRIES], [""])
AM_CONDITIONAL([HAVE_COUNTRIES], [test "x$COUNTRIES" != "x"])

# Names for default and alternate orthographies. The names must follow the BCP
# 47 rules for private use subtags, which requires that the names must be at
# most eight - 8 - characters long, and only contain ascii letters and digits.
# If only one orthography is used, leave both variables empty. If there are
# alternate orthographies, also the default must have a name.
# It is assumed that conversion from the default orthography to the alternate
# orthographies can be done programmatically with a regex or xfscript.
AC_SUBST([DEFAULT_ORTH], [""])
AC_SUBST([ALT_ORTHS], [""])
AM_CONDITIONAL([HAVE_ALT_ORTHS], [test "x$ALT_ORTHS" != "x" \
                                    -a "x$DEFAULT_ORTH" != "x"])

# Specify the tags for all dialects in this variable, leave it empty if you do
# NOT support dialectal variant fst's. Use upper case, separate with space.
# Dialects are presently only used in Oahpa fst's, and only support dialectal
# variation within the -norm- fst's.
AC_SUBST([DIALECTS], [""])
AM_CONDITIONAL([HAVE_DIALECTS], [test "x$DIALECTS" != "x"])

# GTLANG is the language code used to identify this project; it should be same
# as the directory name in gtsvn and same as ISO 639 three-letter code for the
# language if possible
AC_SUBST([GTLANG], [fao])
# GTLANG2 is the shortest unambiguous language code for this project; it
# should be the ISO 639-1 two-letter code if possible, otherwise usually same
# as above
AC_SUBST([GTLANG2], [fo])
# GTLANGUAGE is the full language name as given by the ISO 639-3 file
AC_SUBST([GTLANGUAGE], ["Faroese"])

# We need special treatment of Java paths in Cygwin:
AC_CANONICAL_HOST
case "${host}" in
  *-cygwin* | *-mingw*)
    CYGWINJAVAPATH='cygpath -m'
    ;;
  *)
    # Assume Unix.
    CYGWINJAVAPATH=echo
    ;;
esac
AC_SUBST(CYGWINJAVAPATH)

# Tests and sets up giellatekno directories and scripts
gt_PROG_SCRIPTS_PATHS

# Tests and sets up XFST
gt_PROG_XFST

# Tests and sets up FOMA
gt_PROG_FOMA

# Tests and sets up HFST
gt_PROG_HFST

# Tests and sets up vislcg3
gt_PROG_VISLCG3

# Tests and sets up XML to lexc conversion
gt_PROG_SAXON

# Check for SubEthaEdit/see
AC_PATH_PROG([SEE], [see], [], [$PATH$PATH_SEPARATOR$with_see])

# Adds --enable/disable-morphology, -speller, -hyphenation, etc.
# This should be the last step so that all program variables are available
# to the enable checks
gt_ENABLE_TARGETS

# List all non-script files processed by Autoconf.
AC_CONFIG_FILES([Makefile \
                 giella-fao.pc \
                 src/Makefile \
                 src/filters/Makefile \
                 src/hyphenation/Makefile \
                 src/morphology/Makefile \
                 src/orthography/Makefile \
                 src/orthography/downcase-derived_proper-strings.xfscript \
                 src/phonetics/Makefile \
                 src/phonology/Makefile \
                 src/syntax/Makefile \
                 src/tagsets/Makefile \
                 src/transcriptions/Makefile \
                 doc/Makefile \
                 test/Makefile \
                 test/tools/Makefile \
                 test/tools/mt/Makefile \
                 test/tools/mt/apertium/Makefile \
                 test/tools/spellcheckers/Makefile \
                 test/tools/spellcheckers/fstbased/Makefile \
                 test/tools/spellcheckers/fstbased/hfst/Makefile \
                 test/src/Makefile \
                 test/src/morphology/Makefile \
                 test/src/orthography/Makefile \
                 test/src/phonology/Makefile \
                 test/src/syntax/Makefile \
                 tools/Makefile \
                 tools/grammarcheckers/Makefile \
                 tools/mt/Makefile \
                 tools/mt/apertium/Makefile \
                 tools/mt/apertium/filters/Makefile \
                 tools/mt/apertium/tagsets/Makefile \
                 tools/preprocess/Makefile \
                 tools/shellscripts/Makefile \
                 tools/spellcheckers/Makefile \
                 tools/spellcheckers/fstbased/Makefile \
                 tools/spellcheckers/fstbased/filters/Makefile \
                 tools/spellcheckers/fstbased/foma/Makefile \
                 tools/spellcheckers/fstbased/hfst/Makefile \
                 tools/spellcheckers/fstbased/weighting/Makefile \
                 tools/spellcheckers/listbased/Makefile \
                 tools/spellcheckers/listbased/filters/Makefile])
# Add one AC_CONFIG_FILES for each script file that needs processing. This gives
# the most pleasant user experience and most readable autoconf code to maintain.
# Spell checker tests, all languages:
AC_CONFIG_FILES([test/tools/spellcheckers/test-zhfst-file.sh], \
      [chmod a+x test/tools/spellcheckers/test-zhfst-file.sh])
AC_CONFIG_FILES([test/tools/spellcheckers/fstbased/hfst/test-zhfst-basic-sugg-speed.sh], \
      [chmod a+x test/tools/spellcheckers/fstbased/hfst/test-zhfst-basic-sugg-speed.sh])
AC_CONFIG_FILES([test/tools/spellcheckers/run-spellers-gt-norm-yaml-testcases.sh], \
      [chmod a+x test/tools/spellcheckers/run-spellers-gt-norm-yaml-testcases.sh])
AC_CONFIG_FILES([test/tools/spellcheckers/fstbased/hfst/run-hfstspeller-acceptor-yaml-testcases.sh], \
      [chmod a+x test/tools/spellcheckers/fstbased/hfst/run-hfstspeller-acceptor-yaml-testcases.sh])
AC_CONFIG_FILES([test/src/run-gt-desc-genyaml-testcases.sh], \
      [chmod a+x test/src/run-gt-desc-genyaml-testcases.sh])
AC_CONFIG_FILES([test/src/run-gt-desc-anayaml-testcases.sh], \
      [chmod a+x test/src/run-gt-desc-anayaml-testcases.sh])
AC_CONFIG_FILES([test/run-morph-tester.sh], \
      [chmod a+x test/run-morph-tester.sh])
# Phonology tests, all languages:
AC_CONFIG_FILES([test/src/phonology/pair-test-positive.sh], \
      [chmod a+x test/src/phonology/pair-test-positive.sh])
AC_CONFIG_FILES([test/src/phonology/pair-test-negative.sh], \
      [chmod a+x test/src/phonology/pair-test-negative.sh])
AC_CONFIG_FILES([test/src/phonology/pair-test-hfst.sh], \
      [chmod a+x test/src/phonology/pair-test-hfst.sh])
# Lemma generation tests, all languages:
AC_CONFIG_FILES([test/src/morphology/generate-adjective-lemmas.sh], \
      [chmod a+x test/src/morphology/generate-adjective-lemmas.sh])
AC_CONFIG_FILES([test/src/morphology/generate-noun-lemmas.sh], \
      [chmod a+x test/src/morphology/generate-noun-lemmas.sh])
AC_CONFIG_FILES([test/src/morphology/generate-propernoun-lemmas.sh], \
      [chmod a+x test/src/morphology/generate-propernoun-lemmas.sh])
AC_CONFIG_FILES([test/src/morphology/generate-verb-lemmas.sh], \
      [chmod a+x test/src/morphology/generate-verb-lemmas.sh])
# Shorthand shell scripts instead of the old-type aliases - all languages:
AC_CONFIG_FILES([tools/shellscripts/ufao-gt.sh], \
      [chmod a+x tools/shellscripts/ufao-gt.sh])

#### BEGIN: Add language-specific scripts below here: ####

############ END: Language-specific scripts. #############

# This must be near the end of all configure.ac files:
AC_OUTPUT

# Prints the informative blurb at the end of ./configure command
gt_PRINT_FOOTER
