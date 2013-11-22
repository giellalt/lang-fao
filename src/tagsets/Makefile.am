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

####### Automake targets: ########

# The transducers we build and don't distribute depend on the configuration:
GT_TAGSETS=

if CAN_HFST
GT_TAGSETS+=

if WANT_APERTIUM
GT_GENERATED_TAGSET_SRCS+=apertium.relabel
endif WANT_APERTIUM
endif # CAN_HFST

if CAN_XFST
GT_TAGSETS+=
endif # CAN_XFST

GT_REGEX_TARGETS=$(GT_TAGSETS) $(GT_GENERATED_TAGSET_SRCS)
GT_REGEX_SRCS=$(GT_TAGSET_SRCS)

####### HFST build rules: ########

# Convert GT-tags to Apertium-tags:
apertiumtags.hfst.txt: ../filters/gttags.hfst.txt
	$(AM_V_GEN)tr -d '+' < $< \
		| tr '#' '+' \
		| tr '/[:upper:]' '_[:lower:]' \
		| awk '{print "%<"$$0"%>"}' > $@

# Generate relabel file for replacing GT with Apertium tags:
apertium.relabel: gttags.hfst.txt apertiumtags.hfst.txt
	$(AM_V_GEN)paste $^ | tr -d '%' > $@
	$(AM_V_GEN)printf "#\t+\n" >> $@

# The regex generating rule isn't used for hfst, but the target below can be
# a useful reference for future Xerox relabeling targets.
## Generate regex for replacing GT with Apertium tags:
#apertium.regex: gttags.hfst.txt apertiumtags.hfst.txt
#	$(AM_V_GEN)paste $^ \
#		| awk '{print $$0","}' \
#		| sed 's/_/%_/g' \
#		| sed 's/-/%-/g' \
#		| sed 's/\//%\//g' \
#		| sed '$$ s/,/;/' \
#		| sed 's/^/%/' \
#		| sed 's/	/ -> /g' \
#		> $@

include $(top_srcdir)/am-shared/regex-include.am

# vim: set ft=automake:
