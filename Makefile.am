## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

ACLOCAL_AMFLAGS = -I m4
SUBDIRS = . src doc test

EXTRA_DIST = und.timestamp

configure: und.timestamp

und.timestamp: ${GTCORE}/templates/und/und.timestamp
	@echo
	@echo "	The build templates are newer than this language directory"
	@echo "	To get new build rules and conventions, run: "
	@echo
	@echo "${GTCORE}/merge-templates.sh"
	@echo
	@echo "	The build will die now, but if you do not want to update your"
	@echo "	templates, touch $@ and run make again."
	@exit 1
