## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

# List here (space separated) all test scripts that should be run
# unconditionally:
TESTS=

# Add your shell scripts for running tests requiring only a generator:
GENERATION_TESTS_IN=generate-noun-lemmas.sh.in

GENERATION_TESTS=$(basename $(GENERATION_TESTS_IN))

if WANT_GENERATION
TESTS+=$(GENERATION_TESTS)
endif # WANT_GENERATION

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=

# Make sure all tests scripts are included in the distributed tarballs:
EXTRA_DIST=$(TESTS) $(GENERATION_TESTS_IN)

####### Other targets: ###########
clean-local:
	-rm -f *.txt
