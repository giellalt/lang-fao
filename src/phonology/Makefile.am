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

GT_TWOLC=fao.twolc

#include $(GT_COMMON_AM)/twolc-include.am =:
GT_PHONOLOGY=
if WANT_HFST
GT_PHONOLOGY+=$(GTLANG).hfst
endif
if WANT_XFST
GT_PHONOLOGY+=$(GTLANG).xfst
endif

noinst_DATA=$(GT_PHONOLOGY)

%.hfst: %.twolc
	$(HFST_TWOLC) $(HFST_FLAGS) --resolve -i $< -o $@

%.xfst: %.twolc
	$(PRINTF) "read-grammar $<\ncompile\nsave-binary $@\nquit\n" |\
		$(TWOLC)

# vim: set ft=automake:
