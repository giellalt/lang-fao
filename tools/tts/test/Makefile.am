## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

# List here (space separated) all test scripts that should be run
# unconditionally:
TESTS=

if WANT_TTS
TESTS+=
endif # WANT_TTS

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=

####### Other targets: ###########
clean-local:
	-rm -f *.txt
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
