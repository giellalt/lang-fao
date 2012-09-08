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

# The common filter targets (don't change locally):
GT_FILTER_TARGETS=
if WANT_HFST
GT_FILTER_TARGETS+=\
				   make-optional-semantic-tags.hfst     \
				   make-optional-transitivity-tags.hfst \
				   remove-derivation-position-tags.hfst \
				   remove-dialect-tags.hfst             \
				   remove-dictionary-tags.hfst          \
				   remove-morph-borders.hfst            \
				   remove-norm-comp-tags.hfst           \
				   remove-number-string-tags.hfst       \
				   remove-sub-forms.hfst                \
				   remove-usage-tags.hfst
endif

if WANT_XFST
GT_FILTER_TARGETS+=\
				   make-optional-semantic-tags.xfst     \
				   make-optional-transitivity-tags.xfst \
				   remove-derivation-position-tags.xfst \
				   remove-dialect-tags.xfst             \
				   remove-dictionary-tags.xfst          \
				   remove-morph-borders.xfst            \
				   remove-norm-comp-tags.xfst           \
				   remove-number-string-tags.xfst       \
				   remove-sub-forms.xfst                \
				   remove-usage-tags.xfst
endif

# Add the target of local additions here:
# HFST targets here:
if WANT_HFST
GT_FILTER_TARGETS+=

endif

# And Xerox targets here:
if WANT_XFST
GT_FILTER_TARGETS+=

endif

include $(top_srcdir)/am-shared/filters-include.am

# vim: set ft=automake:
