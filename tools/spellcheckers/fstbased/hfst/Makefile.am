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

# Local modifications of the speller transducer:
#   - replace the copy command with a sequence of whatever is desired
# Regular processing of the speller transducer will procede after the
# local processing.
#
# Commented out for now because adding weights trips off minimisation in
# openfst, and thus hfst-minimize.
#
#$(GT_SPELLER_HFST): ../$(GT_SPELLER_HFST)
#	$(AM_V_GEN)cat $< \
#		| $(HFST_REWEIGHT) -a 0.1 -S +Cmp   \
#		| $(HFST_REWEIGHT) -a 0.1 -S +Der   \
#		| $(HFST_REWEIGHT) -a 0.1 -S +Der1  \
#		| $(HFST_REWEIGHT) -a 0.1 -S +Der2  \
#		| $(HFST_REWEIGHT) -a 0.1 -S +Der3  \
#		| $(HFST_REWEIGHT) -a 0.1 -S +Der4  \
#		| $(HFST_REWEIGHT) -a 0.2 -S +PxSg1 \
#		| $(HFST_REWEIGHT) -a 0.2 -S +PxSg2 \
#		| $(HFST_REWEIGHT) -a 0.2 -S +PxSg3 \
#		| $(HFST_REWEIGHT) -a 0.2 -S +PxPl1 \
#		| $(HFST_REWEIGHT) -a 0.2 -S +PxPl2 \
#		| $(HFST_REWEIGHT) -a 0.2 -S +PxPl3 \
#		| $(HFST_PUSH_WEIGHTS) -p begin \
#		| $(HFST_MINIMIZE) $(HFST_FLAGS) \
#		-o $@

$(GT_SPELLER_HFST): ../$(GT_SPELLER_HFST)
	$(AM_V_GEN)cp -f $< $@

include $(top_srcdir)/am-shared/tools-spellcheckers-fstbased-hfst-include.am

# vim: set ft=automake:
