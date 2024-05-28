## Process this file with automake to produce Makefile.in

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

####### Source file defs: ########

#! @param GT_TRANSCRIPTIONS_SRCS required, the source files for orthographic
#!        transcriptions.
#GT_TRANSCRIPTIONS_SRCS=clock.lexc date.lexc numbers.lexc
GT_TRANSCRIPTIONS_SRCS=\
		transcriptor-clock-digit2text.lexc \
		transcriptor-date-digit2text.lexc \
		transcriptor-numbers-digit2text.lexc
#! @param GT_ABBREV_SRCS required, for abbreviation expansions
GT_ABBREV_SRCS=transcriptor-abbrevs2text.lexc

GT_TRANSCRIPTIONS_REGEX_SRCS=

GT_CUSTOM_TARGETS=

### BEGIN: Custom build rules: ###


### END: Custom build rules: ###

include $(top_srcdir)/../giella-core/am-shared/src-transcriptions-dir-include.am

# vim: set ft=automake:
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
