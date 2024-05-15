## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

# List here (space separated) all test scripts that should be run
# _unconditionally_:
TESTS=

# Yaml tests are run from shell scripts - specify them here:
YAML_TEST_RUNNERS=run-initcaps-genyaml-testcases.sh
# Specify other shell scripts here to make sure they are included in the distro
# even though spellers are disabled:
OTHER_TEST_RUNNERS=

if CAN_YAML_TEST
# Add your shell scripts for running python-based tests below here, so that
# they are only run if the preconditions for yaml tests are met.
TESTS+=$(YAML_TEST_RUNNERS)
endif # CAN_YAML_TEST

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=

# Make sure all required files are included in the distribution:
YAML_FILES=$(wildcard *.yaml)
YAML_DIRS=

EXTRA_DIST=$(OTHER_TEST_RUNNERS) \
           $(YAML_TEST_RUNNERS) \
           $(YAML_FILES) \
           $(YAML_DIRS)

####### Other targets: ###########
clean-local:
	-rm -f *.txt
