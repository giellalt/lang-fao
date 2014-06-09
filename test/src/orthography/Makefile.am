## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

# List here (space separated) all test scripts that should be run
# _unconditionally_:
TESTS=

if CAN_YAML_TEST
# Add your shell scripts for running python-based tests below here, so that
# they are only run if the preconditions for yaml tests are met.

TESTS+=run-initcaps-genyaml-testcases.sh

endif # CAN_YAML_TEST

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=

####### Other targets: ###########
clean-local:
	-rm -f *.txt
