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

# Edit distanse for the Levenshtein error model:
EDIT_DISTANCE=2

# Define whether we allow changes to the initial letter(s) in the error model,
# possible values are:
# * no    - no longer string edits = only the default, letter-based error model
# * txt   - use only the txt file as source
# * regex - use only the regex file as source
# * both  - use both the txt and regex files as sources
# NB!!! Setting this to anything but 'no' will greatly increase the size and
# search space of the error model, and thus make it much, much slower. Make sure
# you TEST the resulting error model properly and thoroughly, both for speed
# and suggestion quality.
INITIAL_EDITS=no

# Variable to define whether to enable edits of longer strings (as opposed to
# single letters). Possible values are:
# * no    - no longer string edits = only the default, letter-based error model
# * txt   - use only the txt file as source
# * regex - use only the regex file as source
# * both  - use both the txt and regex files as sources
STRING_EDITS=txt
# Variable to specify the edit distance for the regex
# version of the strings file. The total edit distance for those operations is
# this value multiplied with the value of the EDIT_DISTANCE variable.
STRING_REGEX_EDIT_DISTANCE=2

# Variable to define whether to enable edits of word-final strings (as opposed
# to single letters). Possible values are:
# * no    - no longer string edits = only the default, letter-based error model
# * txt   - use only the txt file as source
# * regex - use only the regex file as source
# * both  - use both the txt and regex files as sources
FINAL_STRING_EDITS=txt

# Variable to define whether to enable whole-word replacements. Possible values:
# - yes
# - no
WORD_REPLACEMENTS=yes

include $(top_srcdir)/am-shared/tools-spellcheckers-fstbased-desktop-hfst-dir-include.am

# vim: set ft=automake:
