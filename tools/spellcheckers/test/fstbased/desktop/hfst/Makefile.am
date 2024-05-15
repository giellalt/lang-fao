## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# Uncomment and list here (space separated) all test scripts that should be run:
TESTS=

# Yaml tests are run from shell scripts - specify them here:
YAML_TEST_RUNNERS_IN=
#run-acceptor-yaml-testcases.sh.in
YAML_TEST_RUNNERS=$(basename $(YAML_TEST_RUNNERS_IN))
# Specify other shell scripts here to make sure they are included in the distro
# even though spellers are disabled:
OTHER_TEST_RUNNERS_IN=test-zhfst-basic-sugg-speed.sh.in \
                      accept-all-lemmas.sh.in
OTHER_TEST_RUNNERS=$(basename $(OTHER_TEST_RUNNERS_IN))

# Only test spellers if we build spellers:
if WANT_SPELLERS
TESTS+=$(OTHER_TEST_RUNNERS)

# Only run yaml tests if we are able to:
if CAN_YAML_TEST
TESTS+=$(YAML_TEST_RUNNERS)
endif # CAN_YAML_TEST
endif # WANT_SPELLERS

# List tests that are presently (expected) failures here (in addition to above),
# ie things that should be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=run-acceptor-yaml-testcases.sh

# Make sure all required files are included in the distribution:
YAML_FILES=$(wildcard *.yaml)
YAML_DIRS=

EXTRA_DIST=$(OTHER_TEST_RUNNERS_IN) \
           $(YAML_TEST_RUNNERS_IN) \
           $(YAML_FILES) \
           $(YAML_DIRS)

####### Other targets: ###########
clean-local:
	-rm -f *.txt
