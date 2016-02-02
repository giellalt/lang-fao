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

# This is the default weight for all editing operations in the error model:
DEFAULT_WEIGHT=10

# Default edit distanse for the generated, alphabet-based error model:
DEFAULT_EDIT_DIST=2

# Define whether we allow changes to the initial letter(s) in the error model,
# possible values are 'yes' or 'no'.
# NB!!! Setting this to 'yes' will greatly increase the size and search space of
# the error model, and thus make it much, much slower. Makre sure you TEST the
# resulting error model properly and thoroughly, both for speeds and suggestion
# quality.
####### NB! This variable has no effect for the time being!!! First letters are
####### modified as part of the regular error model until we are able to formu-
####### late a better way of handling edits to the initial letter(s).
ALLOW_INITIAL_EDITS=no

include $(top_srcdir)/am-shared/tools-spellcheckers-fstbased-desktop-hfst-dir-include.am

# vim: set ft=automake:
