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
AC_INIT([gtlangs-fao], [20110617], [bugs@divvun.no], [gtlangs-fao],
        [http://divvun.no])
# AC_REVISION is used to get SVN revision into bug reports
AC_REVISION([$Revision$])
# These configuration dirs hide some extra cruft
AC_CONFIG_AUX_DIR([build-aux])
AC_CONFIG_MACRO_DIR([m4])
# AM_INIT_AUTOMAKE sets up make conventions
AM_INIT_AUTOMAKE([1.12 -Wall -Werror foreign -Wno-portability serial-tests])
m4_ifdef([AM_SILENT_RULES], [AM_SILENT_RULES([yes])])

# Some software that we either depend on or we need for certain functionality:

AC_ARG_ENABLE([yamltests],
              [AS_HELP_STRING([--enable-yamltests],
                              [enable yaml tests @<:@default=check@:>@])],
              [enable_yamltests=$enableval],
              [enable_yamltests=check])

AS_IF([test "x$enable_yamltests" = "xcheck"], 
     [AM_PATH_PYTHON([3.1],, [:])
     AX_PYTHON_MODULE(yaml)
     AC_MSG_CHECKING([Whether to enable yaml-based test])
     AS_IF([test "$PYTHON" = ":"],
           [enable_yamltests=no
            AC_MSG_RESULT([no, python is missing or old])
            ],
           [AS_IF([test "x$HAVE_PYMOD_YAML" != "xyes"],
                  [enable_yamltests=no
                   AC_MSG_RESULT([no, yaml is missing])
                   ],
                  [enable_yamltests=yes
                   AC_MSG_RESULT([yes])])])])

AM_CONDITIONAL([CAN_YAML_TEST], [test "x$enable_yamltests" != xno])

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

# Following Giellatekno specific variables are used to make external software
# work; HFST analysers, spell-checkers and so on. These also control
# some temporary file names etc.

# GTLANG is the language code used to identify this project; it should be same
# as the directory name in gtsvn and same as ISO 639 three-letter code for the
# language if possible
AC_SUBST([GTLANG], [fao])
# GTLANG2 is the shortest unambiguous language code for this project; it
# should be the ISO 639-1 two-letter code if possible, otherwise usually same
# as above
AC_SUBST([GTLANG2], [fo])

# Adds --enable/disable-morphology, -speller, -hyphenation, etc.
gt_ENABLE_TARGETS

# Tests and sets up giellatekno directories and scripts
gt_PROG_SCRIPTS_PATHS

# Tests and sets up HFST
gt_PROG_HFST

# Tests and sets up XFST
gt_PROG_XFST

# Tests and sets up vislcg3
gt_PROG_VISLCG3

# Tests and sets up XML to lexc conversion
gt_PROG_SAXON

AC_PATH_PROG([AWK],     [gawk],    [], [$PATH$PATH_SEPARATOR$with_awk])
AC_PATH_PROG([FORREST], [forrest], [], [$PATH$PATH_SEPARATOR$with_forrest])
AC_MSG_CHECKING([whether we can enable in-source documentation building])
AS_IF([test "x$AWK" != x], [
    AS_IF([test "x$JV" != xfalse], [
    	AS_IF([test "x$FORREST" != x], [gt_prog_docc=yes], [gt_prog_docc=no])
    ],[gt_prog_docc=no])
],[gt_prog_docc=no])
AC_MSG_RESULT([$gt_prog_docc])
AM_CONDITIONAL([CAN_DOCC], [test "x$gt_prog_docc" != xno])

# List all non-script files processed by Autoconf.
AC_CONFIG_FILES([Makefile \
                 src/Makefile \
                 src/filters/Makefile \
                 src/hyphenation/Makefile \
                 src/morphology/Makefile \
                 src/orthography/Makefile \
                 src/phonetics/Makefile \
                 src/phonology/Makefile \
                 src/syntax/Makefile \
                 src/transcriptions/Makefile \
                 doc/Makefile \
                 test/Makefile \
                 test/src/Makefile \
                 test/src/morphology/Makefile \
                 test/src/phonology/Makefile \
                 test/src/syntax/Makefile \
                 test/tools/Makefile \
                 test/tools/spellcheckers/Makefile \
                 tools/Makefile \
                 tools/spellcheckers/Makefile \
                 tools/spellcheckers/fstbased/Makefile \
                 tools/spellcheckers/fstbased/hfst/Makefile \
                 tools/spellcheckers/listbased/Makefile])
# Add one AC_CONFIG_FILES for each script file that needs processing. This gives
# the most pleasant user experience and most readable autoconf code to maintain.
AC_CONFIG_FILES([test/src/morphology/run-morph-tester.sh], \
      [chmod a+x test/src/morphology/run-morph-tester.sh])
AC_CONFIG_FILES([test/src/morphology/generate-noun-lemmas.sh], \
      [chmod a+x test/src/morphology/generate-noun-lemmas.sh])

# This must be near the end of all configure.ac files:
AC_OUTPUT

# Prints the informative blurb at the end of ./configure command
gt_PRINT_FOOTER

dnl stick important warnings to bottom
dnl YAML test warning:
AS_IF([test "x$enable_yamltests" == "xno"],
      [AC_MSG_WARN([YAML testing could not be automatically enabled. To enable it, on MacOSX please do:

sudo port install python32
sudo port install py-yaml subport=py32-yaml

On other systems, install python 3.1+ and the corresponding py-yaml using suitable tools for those systems.])])
