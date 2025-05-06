## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

SUBDIRS=phonology

######## Local test targets: ###########

# List here (space separated) all test scripts that should be run
# unconditionally:
TESTS=

GENERATION_TESTS=


# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=generate-propernoun-lemmas.sh \
			missing-multichars.sh


include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
include $(top_srcdir)/../giella-core/am-shared/src-fst-morphology-test-include.am
