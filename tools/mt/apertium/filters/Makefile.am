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

# The common filter targets (don't change locally):
GT_FILTER_TARGETS=

# Only build these things if apertium fst's are enabled:
if WANT_APERTIUM
if CAN_HFST
GT_FILTER_TARGETS+=remove-derivation-strings.hfst
endif

if CAN_XFST
GT_FILTER_TARGETS+=remove-derivation-strings.xfst
endif

GENERATED_REGEXES=remove-derivation-strings.regex
endif # WANT_APERTIUM

##################################################################
#### BEGIN: Add local processing instructions BELOW this line ####
##################################################################

# List any local additions here:
GT_FILTER_SRCS=

# Only build these things if apertium fst's are enabled:
if WANT_APERTIUM
# List generated regexes here:
GENERATED_REGEXES+=

# Add the target of local additions here:
# HFST targets here:
if CAN_HFST
GT_FILTER_TARGETS+=
endif

# And Xerox targets here:
if CAN_XFST
GT_FILTER_TARGETS+=
endif

endif # WANT_APERTIUM

# Add the build code of local additions here:

##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

include $(top_srcdir)/am-shared/src-filters-dir-include.am

# vim: set ft=automake:
