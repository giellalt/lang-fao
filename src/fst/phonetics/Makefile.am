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

SUBDIRS = . tests

####### Source file defs: ########

#! @param GT_PHONETICS_MAIN required, the source of phonetic transcription
#! @param GT_PHONETICS_SUPPLEMENTS optional, other sources to distribute and
#! 		  compile for other things
GT_PHONETICS_MAIN=txt2ipa.xfscript
GT_PHONETICS_SUPPLEMENTS=

##########################################
# General build rules included from here:#
include $(top_srcdir)/../giella-core/am-shared/src-phonetics-dir-include.am

# vim: set ft=automake:
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
