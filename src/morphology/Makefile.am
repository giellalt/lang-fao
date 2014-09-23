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

GT_LEXC_ROOT=root.lexc

# Set this to the names of all regular lexc source files:
GT_LEXC_SRCS_L1_L2=\
			 affixes/adjectives.lexc  \
			 affixes/nouns.lexc       \
			 affixes/propernouns.lexc \
			 affixes/verbs.lexc       \
			 stems/abbreviations.lexc \
			 stems/acronyms.lexc      \
			 stems/adjectives.lexc    \
			 stems/adpositions.lexc   \
			 stems/adverbs.lexc       \
			 stems/conjunctions.lexc  \
			 stems/determiners.lexc   \
			 stems/interjections.lexc \
			 stems/nouns.lexc         \
			 stems/numerals.lexc      \
			 stems/pronouns.lexc      \
			 stems/propernouns.lexc   \
			 stems/punctuation.lexc   \
			 stems/subjunctions.lexc  \
			 stems/verbs.lexc

# If you are building an error-detecting L2 analyser, specify the lexc files
# that differ between the regular L1 and the L2 analysers below, in L1 and
# L2 respectively. L2 files must end in "*-L2.lexc". See SME for an example.
L1=\

L2=\

GT_LEXC_SRCS=\
			$(GT_LEXC_SRCS_L1_L2) \
			$(L1)

GT_LEXC_L2_SRCS=\
			$(GT_LEXC_SRCS_L1_L2) \
			$(L2)

# Set this to the names of all generated lexc files, if any
GENERATED_LEXC_SRCS=

# Set this to the names of all source xml files, if any
GT_XML_SRCS=

include $(top_srcdir)/am-shared/src-morphology-dir-include.am

# vim: set ft=automake:
