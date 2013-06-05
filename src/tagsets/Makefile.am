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

#! @param GT_TAGSET_SRCS - manually written tagset source files
#! @param GT_GENERATED_TAGSET_SRCS - automatically generated tagset source files

GT_TAGSET_SRCS=
GT_GENERATED_TAGSET_SRCS=
#apertium.regex

BUILT_SOURCES=$(GT_GENERATED_TAGSET_SRCS)

####### Automake targets: ########

# The transducers we build and don't distribute depend on the configuration:
GT_TAGSETS=
if CAN_HFST
#GT_TAGSETS+=apertium.hfst
endif

GT_REGEX_TARGETS=$(GT_TAGSETS)

####### HFST build rules: ########

# Generate relabel source file for Apertium tags:
apertium.regex: ../morphology/$(GTLANG).lexc.hfst
	$(AM_V_GEN)$(GTCORE)/scripts/gttags2apertium.sh $< $@

include $(top_srcdir)/am-shared/regex-include.am

# vim: set ft=automake:
