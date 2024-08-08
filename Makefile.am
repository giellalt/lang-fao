## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

ACLOCAL_AMFLAGS = -I m4
SUBDIRS = . src tools docs test

pkgconfigdir = $(prefix)/share/pkgconfig
pkgconfig_DATA = giella-$(GTLANG).pc

configure: banner

.PHONY: banner test
banner:
	@echo
	@echo "*** Compiling $(GLANG) - $(GLANGUAGE). ***"
	@echo

# On some systems it will try to run 'make test', and claim
# 'nothing to be done for test'. By forwarding test to check we work around it.
test: check

# recurse all make devs just
dev:
	-$(MAKE) dev -C tools/analysers
	-$(MAKE) dev -C tools/tokenisers
	-$(MAKE) dev -C tools/grammarcheckers
	-$(MAKE) dev -C tools/tts

# Remove html tables created by some of the developer tools:
clean-local:
	rm -f *.html
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
