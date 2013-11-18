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
if CAN_HFST
GT_FILTER_TARGETS+=\
				   make-optional-homonymy-tags.hfst       \
				   make-optional-semantic-tags.hfst       \
				   make-optional-transitivity-tags.hfst   \
				   make-optional-variant-tags.hfst        \
				   remove-derivation-position-tags.hfst   \
				   remove-dialect-tags.hfst               \
				   remove-homonymy-tags.hfst              \
				   remove-norm-comp-tags.hfst             \
				   remove-number-string-tags.hfst         \
				   remove-orig_lang-tags.hfst             \
				   remove-orthography-tags.hfst           \
				   remove-semantic-tags-except-prop.hfst  \
				   remove-usage-tags.hfst                 \
				   remove-variant-tags.hfst               \
				   remove-hyphenation-marks.hfst          \
				   remove-infl_deriv-borders.hfst         \
				   remove-word-boundary.hfst              \
				   remove-sub-forms.hfst                  \
				   remove-ABBR-strings.hfst               \
				   remove-ACR-strings.hfst                \
				   remove-CLB-strings.hfst                \
				   remove-derivation-strings.hfst         \
				   remove-lexsub-strings.hfst             \
				   remove-MinusSpell-strings.hfst         \
				   remove-NA-strings.hfst                 \
				   remove-NG-strings.hfst                 \
				   remove-NGminip-strings.hfst            \
				   remove-Orth_IPA-strings.hfst           \
				   remove-Orth_Strd-strings.hfst          \
				   remove-PUNCT-strings.hfst              \
				   remove-UseCirc-strings.hfst            \
				   remove-variant-strings.hfst
endif

if CAN_XFST
GT_FILTER_TARGETS+=\
				   make-optional-homonymy-tags.xfst       \
				   make-optional-semantic-tags.xfst       \
				   make-optional-transitivity-tags.xfst   \
				   make-optional-variant-tags.xfst        \
				   remove-derivation-position-tags.xfst   \
				   remove-dialect-tags.xfst               \
				   remove-homonymy-tags.xfst              \
				   remove-norm-comp-tags.xfst             \
				   remove-number-string-tags.xfst         \
				   remove-orig_lang-tags.xfst             \
				   remove-orthography-tags.xfst           \
				   remove-semantic-tags-except-prop.xfst  \
				   remove-usage-tags.xfst                 \
				   remove-variant-tags.xfst               \
				   remove-hyphenation-marks.xfst          \
				   remove-infl_deriv-borders.xfst         \
				   remove-word-boundary.xfst              \
				   remove-sub-forms.xfst                  \
				   remove-ABBR-strings.xfst               \
				   remove-ACR-strings.xfst                \
				   remove-CLB-strings.xfst                \
				   remove-derivation-strings.xfst         \
				   remove-lexsub-strings.xfst             \
				   remove-MinusSpell-strings.xfst         \
				   remove-NA-strings.xfst                 \
				   remove-NG-strings.xfst                 \
				   remove-NGminip-strings.xfst            \
				   remove-Orth_IPA-strings.xfst           \
				   remove-Orth_Strd-strings.xfst          \
				   remove-PUNCT-strings.xfst              \
				   remove-UseCirc-strings.xfst            \
				   remove-variant-strings.xfst
endif

# Add the target of local additions here:
# HFST targets here:
if CAN_HFST
GT_FILTER_TARGETS+=

endif

# And Xerox targets here:
if CAN_XFST
GT_FILTER_TARGETS+=

endif

include $(top_srcdir)/am-shared/filters-include.am

# vim: set ft=automake:
