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
# second field is version identifier
# third is email address for bug reports
# fourth is name of packages made by make dist, excluding .tar.gz
# fifth is the project web address
AC_INIT([Giella fao], [0.1], [feedback@divvun.no], [giella-fao],
        [http://divvun.no])
# AC_REVISION is used to get SVN revision into bug reports
AC_REVISION([$Revision$])
# These configuration dirs hide some extra cruft
AC_CONFIG_AUX_DIR([build-aux])
AC_CONFIG_MACRO_DIR([m4])
# AM_INIT_AUTOMAKE sets up make conventions
AM_INIT_AUTOMAKE(
  1.11.6 tar-pax -Wall -Werror
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

### Speller release version (usually different from the package version,
### typically spellers are released more often than the language package):
AC_SUBST([SPELLERVERSION], [0.1])

### This is the version of the Giella Core that we require. Update as needed.
### It is possible to specify also subversion revision: 0.1.2-12345
_giella_core_min_version=0.2.43

### This is the version of the Giella Shared that we require. Update as needed.
### It is possible to specify also subversion revision: 0.1.2-12345
_giella_shared_min_version=0.1.2

### Required version of the Hfst tools:
_required_hfst_version=3.12.2

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
AC_SUBST([AREAS], [""])
AM_CONDITIONAL([HAVE_AREAS], [test "x$AREAS" != "x"])

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

# Tests and sets up giella-core directories and scripts
gt_PROG_SCRIPTS_PATHS

# Tests and sets up XFST
gt_PROG_XFST

# Tests and sets up FOMA
gt_PROG_FOMA

# Tests and sets up HFST
gt_PROG_HFST

# Tests and sets up Voikko
gt_PROG_VFST

# Tests and sets up vislcg3
gt_PROG_VISLCG3

# Tests and sets up XML to lexc conversion
gt_PROG_SAXON

# Adds --enable/disable-morphology, -speller, -hyphenation, etc.
# This should be the last step so that all program variables are available
# to the enable checks
gt_ENABLE_TARGETS

# Call a function that lists all files that should be processed by autoconf:
gt_CONFIG_FILES

##########################################################
##### BEGIN: Add language-specific list of files to ######
########## be processed by autoconf below here: ##########

############ END: Language-specific scripts. #############

# This must be near the end of all configure.ac files:
AC_OUTPUT

# Prints the informative blurb at the end of ./configure command
gt_PRINT_FOOTER
