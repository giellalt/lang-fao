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

GT_LEXC_ROOT=definitions.lexc
GT_LEXC_SRCS=\
			 lexical-data/abbr.lexc \
			 lexical-data/acro.lexc \
			 lexical-data/adj.lexc \
			 lexical-data/adv.lexc \
			 lexical-data/cc.lexc \
			 lexical-data/cs.lexc \
			 lexical-data/det.lexc \
			 lexical-data/interj.lexc \
			 lexical-data/noun.lexc \
			 lexical-data/numeral.lexc \
			 lexical-data/pp.lexc \
			 lexical-data/pron.lexc \
			 lexical-data/propernoun.lexc \
			 lexical-data/punct.lexc \
			 lexical-data/verb.lexc \
			 inflection/adj.lexc \
			 inflection/noun.lexc \
			 inflection/propernoun.lexc \
			 inflection/verb.lexc

#include $(GT_COMMON_AM)/lexc-include.am =:
GT_LEXICAL=
if WANT_HFST
GT_LEXICAL+=$(GTLANG).hfst
endif
if WANT_XFST
GT_LEXICAL+=$(GTLANG).xfst
endif
noinst_DATA=$(GT_LEXICAL)

EXTRA_DIST=$(GT_LEXC_ROOT) $(GT_LEXC_SRCS)

$(GTLANG).hfst: $(GT_LEXC_ROOT) $(GT_LEXC_SRCS)
	$(HFST_LEXC) -o $@ $^

$(GTLANG).xfst: $(GT_LEXC_ROOT) $(GT_LEXC_SRCS)
	$(PRINTF) "compile-source $^\nsource-to-result\nsave-source $@\nquit\n" |\
		$(LEXC)

# vim: set ft=automake:
