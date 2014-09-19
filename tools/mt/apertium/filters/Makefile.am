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

##################################################################
#### BEGIN: Add local processing instructions BELOW this line ####
##################################################################

# List any local additions here:
GT_FILTER_SRCS=

# Only build these things if apertium fst's are enabled:
if WANT_APERTIUM

# List generated regexes here:
GENERATED_REGEXES=
# E.g.: remove-derivation-strings.nob.regex

endif # WANT_APERTIUM

# Add the build code of local additions and generated regexes here, e.g.:
# remove-%-strings.nob.regex: $(top_builddir)/src/filters/%-tags.txt \
# 						remove-%-strings-modifications.nob.regex
# 	$(AM_V_GEN)$(GTCORE)/scripts/taglist2remove_$*_strings_regex.sh \
# 		$@ $^

##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

include $(top_srcdir)/am-shared/tools-mt-apertium-filters-dir-include.am

# vim: set ft=automake:
