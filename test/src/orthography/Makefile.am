## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

# List here (space separated) all test scripts that should be run
# _unconditionally_:
TESTS=

# Yaml tests are run from shell scripts - specify them here:
YAMLTESTRUNNERS=run-initcaps-genyaml-testcases.sh

if CAN_YAML_TEST
# Add your shell scripts for running python-based tests below here, so that
# they are only run if the preconditions for yaml tests are met.
TESTS+=$(YAMLTESTRUNNERS)
endif # CAN_YAML_TEST

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=

# Make sure all required files are included in the distribution:
YAMLFILES=$(wildcard *.yaml)

EXTRA_DIST=$(YAMLTESTRUNNERS) $(YAMLFILES)

####### Other targets: ###########
clean-local:
	-rm -f *.txt
