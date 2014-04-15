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

# List any local additions here:
GT_FILTER_SRCS=

# DIALECT_TARGETS_HFST is constructed dynamically based on the dialects
# specified in configure.ac.

# The common filter targets (don't change locally):
GT_FILTER_TARGETS=
if CAN_HFST
GT_FILTER_TARGETS+=remove-derivation-strings.hfst
endif

if CAN_XFST
GT_FILTER_TARGETS+=remove-derivation-strings.xfst
endif

GENERATED_REGEXES=remove-derivation-strings.regex

# Add the target of local additions here:
# HFST targets here:
if CAN_HFST
GT_FILTER_TARGETS+=
endif

# And Xerox targets here:
if CAN_XFST
GT_FILTER_TARGETS+=
endif

include $(top_srcdir)/am-shared/src-filters-dir-include.am

# vim: set ft=automake:
