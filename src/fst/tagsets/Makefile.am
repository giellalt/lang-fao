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

####### Source file defs: ########

#! @param GT_TAGSET_RGX_SRCS     - manually written regex tagset source files
#! @param GT_TAGSET_RELABEL_SRCS - manually written hfst-relabel tagset sources

GT_TAGSET_RGX_SRCS=
GT_TAGSET_RELABEL_SRCS=

####### Other targets: ###########
# The "clean" target:
clean-local:
	-rm -f *.hfst *.xfst *.foma

####### Includes: ########

include $(top_srcdir)/../giella-core/am-shared/src-tagsets-dir-include.am

# vim: set ft=automake:
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
