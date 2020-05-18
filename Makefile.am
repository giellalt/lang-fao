## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

ACLOCAL_AMFLAGS = -I m4
SUBDIRS = . src tools doc test

EXTRA_DIST = und.timestamp

pkgconfigdir = $(prefix)/share/pkgconfig
pkgconfig_DATA = giella-$(GTLANG).pc


configure: banner und.timestamp

.PHONY: banner test
banner:
	@echo
	@echo "*** Compiling the $(GTLANG) language. ***"
	@echo

# On some systems it will try to run 'make test', and claim
# 'nothing to be done for test'. By forwarding test to check we work around it.
test: check

# Remove html tables created by some of the developer tools:
clean-local:
	rm -f *.html
