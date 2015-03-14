## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

ACLOCAL_AMFLAGS = -I m4
SUBDIRS = . src tools doc test

EXTRA_DIST = und.timestamp

pkgconfigdir = $(libdir)/pkgconfig
pkgconfig_DATA = giella-$(GTLANG).pc


configure: banner und.timestamp

.PHONY: banner
banner:
	@echo
	@echo "*** Compiling the $(GTLANG) language. ***"
	@echo

if WANT_MAINTAIN
und.timestamp: ${GTCORE}/langs-templates/und/und.timestamp
	@echo
	@echo "	The build templates are newer than this language directory"
	@echo "	To get new build rules and conventions, run: "
	@echo
	@echo "${GTCORE}/merge-templates.sh"
	@echo
	@echo "	The build will die now, but if you do not want to update your"
	@echo "	templates, touch $@ and run make again."
	@exit 1
endif

# Remove html tables created by some of the developer tools:
clean-local:
	rm -f *.html
