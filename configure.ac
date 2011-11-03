## Process this file with autoconf to produce configure script

## Copyright (C) 2011 Samediggi

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

# These need to be always written:
AC_INIT([gtlangs-fao], [20110617], [bugs@divvun.no], [gtlangs-fao],
        [http://divvun.no])
AC_REVISION([$Revision$])
AC_CONFIG_AUX_DIR([build-aux])
AM_INIT_AUTOMAKE([-Wall -Werror foreign])
# set all language codes usable
AC_SUBST([GTLANG], [fao])
AC_SUBST([GTLANG2], [fo])
AC_SUBST([GT_639_1], [fo])
AC_SUBST([GT_639_2], [fao])

# will be GT_PROG_SCRIPTS_PATHS:
AC_ARG_VAR([GTHOME], [root directory of giellatekno scripts])
AC_ARG_VAR([GTCORE], [directory for giellatekno core data])
AC_PATH_PROG([GTSCRIPT], [gt-version.sh], [false],
             [$GTCORE/scripts/$PATH_SEPARATOR$GTHOME/newinfra/gtcore/scripts/$PATH_SEPARATOR../../gtcore/scripts/])
AS_IF([test "x$GTSCRIPT" = xfalse], 
      [AC_MSG_ERROR([could not find a giellatekno installation in: \
       $GTHOME/scripts \
       $GTHOME/newinfra/scripts \
       ../scripts \
       $PATH \
       please do at least first step of the following: \
       a. cd .. && svn co https://victorio.uit.no/langtech/trunk/newinfra/scripts \
       b. cd scripts && autoreconf && ./configure && make install \
       c. gtsetup.sh \
       ])])


# will be HFST_PROG_HFST_TOOLS:
AC_ARG_WITH([hfst],
            [AS_HELP_STRING([--with-hfst=DIRECTORY],
                            [search hfst tools from DIRECTORY @<:@default=PATH@:>@])],
            [],
            [with_hfst=check])
AC_PATH_PROG([HFST_LEXC], [hfst-lexc], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_TWOLC], [hfst-twolc], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_COMPOSE_INTERSECT], [hfst-compose-intersect], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_INVERT], [hfst-invert], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_PROJECT], [hfst-project], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_REGEXP2FST], [hfst-regexp2fst], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_SUBSTITUTE], [hfst-substitute], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_INVERT], [hfst-invert], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_MINIMIZE], [hfst-minimize], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_OLPREP], [hfst-preprocess-for-optimized-lookup-format], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_FST2FST], [hfst-fst2fst], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_COMPOSE], [hfst-compose], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_REPEAT], [hfst-repeat], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_CONCATENATE], [hfst-concatenate], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_SUBTRACT], [hfst-subtract], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_PATH_PROG([HFST_TXT2FST], [hfst-txt2fst], [false], 
             [$PATH$PATH_SEPARATOR$with_hfst])
AC_MSG_CHECKING([whether we can enable hfst building])
AM_CONDITIONAL([CAN_HFST], [test "x$HFST_LEXC" != xfalse])
AS_IF([test "x$HFST_LEXC" != xfalse], [AC_MSG_RESULT([yes])], 
      [AC_MSG_RESULT([no])])

# would be GT_CHECK_FOMA:
# will be GT_CHECK_XFST:
AC_ARG_WITH([xfst],
            [AS_HELP_STRING([--with-xfst=DIRECTORY],
                            [search xfst in DIRECTORY @<:@default=PATH@:>@])],
            [with_xfst=$withval],
            [with_xfst=check])
AC_PATH_PROG([PRINTF], [printf], [echo -n])
AC_PATH_PROG([XFST], [xfst], [false], [$PATH$PATH_SEPARATOR$with_xfst])
AC_PATH_PROG([TWOLC], [twolc], [false], [$PATH$PATH_SEPARATOR$with_xfst])
AC_PATH_PROG([LEXC], [lexc], [false], [$PATH$PATH_SEPARATOR$with_xfst])
AC_MSG_CHECKING([whether we can enable xfst building])
AM_CONDITIONAL([CAN_XFST], [test "x$XFST" != xfalse])
AS_IF([test "x$XFST" != xfalse], [AC_MSG_RESULT([yes])],
      [AC_MSG_RESULT([no])])

# will be GT_ENABLE_TOOLKITS([hfst foma xfst]:
AC_ARG_ENABLE([hfst],
              [AS_HELP_STRING([--enable-hfst],
                              [build with hfst tools @<:@default=no@:>@])],
              [enable_hfst=$enableval],
              [enable_hfst=no])
AM_CONDITIONAL([WANT_HFST], [test "x$enable_hfst" != xno])
AC_ARG_ENABLE([xfst],
              [AS_HELP_STRING([--enable-xfst],
                              [build with xfst tools @<:@default=yes@:>@])],
              [enable_xfst=$enableval],
              [enable_xfst=yes])
AM_CONDITIONAL([WANT_XFST], [test "x$enable_xfst" != xno])

#will be GT_ENABLE_MODULES([morphology generation dictionary]):
AC_ARG_ENABLE([morphology],
              [AS_HELP_STRING([--enable-morphology],
                              [build morphological analyser @<:@default=yes@:>@])],
              [enable_morphology=$enableval],
              [enable_morphology=yes])
AM_CONDITIONAL([WANT_MORPHOLOGY], [test "x$enable_morphology" != xno])
AC_ARG_ENABLE([generation],
              [AS_HELP_STRING([--enable-generation],
                              [build morphological analyser @<:@default=yes@:>@])],
              [enable_generation=$enableval],
              [enable_generation=yes])
AM_CONDITIONAL([WANT_GENERATION], [test "x$enable_generation" != xno])
AC_ARG_ENABLE([dictionary],
              [AS_HELP_STRING([--enable-dictionary],
                              [build morphological analyser @<:@default=yes@:>@])],
              [enable_dictionary=$enableval],
              [enable_dictionary=yes])
AM_CONDITIONAL([WANT_DICTIONARY], [test "x$enable_dictionary" != xno])
AC_ARG_ENABLE([voikko],
              [AS_HELP_STRING([--enable-voikko],
                              [build voikko support @<:@default=yes@:>@])],
              [enable_voikko=$enableval],
              [enable_voikko=yes])
AM_CONDITIONAL([WANT_VOIKKO], [test "x$enable_dictionary" != xno])

AS_IF([test "x$enable_voikko" = "xyes"], 
      [AC_PATH_PROG([ZIP], [zip], [false])
       AS_IF([test "x$ZIP" = "xfalse"],
             [AC_MSG_ERROR([zip is required for voikko speller packages])])])

# will be GT_CONFIG_FILES =:
AC_CONFIG_FILES([Makefile src/Makefile src/morphology/Makefile src/orthography/Makefile src/phonology/Makefile src/spellchecker/Makefile src/syntax/Makefile doc/Makefile])

# must retain as-is
AC_OUTPUT

#will be GT_PRINT_FOOTER =:
cat<<EOF
-- Building $PACKAGE_STRING:
    * build with Xerox: $enable_xfst
    * build with HFST: $enable_hfst
    * morphological analyser: $enable_morphology
    * morphological generator: $enable_generation
    * dictionary: $enable_dictionary
    * voikko support: $enable_voikko
to build, test and install:
    make
    make check
    make install
EOF
