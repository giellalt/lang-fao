## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

# List here (space separated) all test scripts that should be run:
TESTS=generate-noun-lemmas.sh

# Add your shell scripts for running python-based tests here:
if CAN_YAML_TEST
TESTS+=test-yaml-testcases.sh
endif

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
# XFAIL_TESTS=

####### Other targets: ###########
clean-local:
	-rm -f *.txt
