## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

# List here (space separated) all test scripts that should be run
# unconditionally:
TESTS=

if WANT_GENERATION
# Add your shell scripts for running tests requiring only a generator:
TESTS+=generate-noun-lemmas.sh

endif # WANT_GENERATION

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=generate-noun-lemmas.sh

####### Other targets: ###########
clean-local:
	-rm -f *.txt
