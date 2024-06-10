## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Local test targets: ###########

# List here (space separated) all test scripts that should be run
# _unconditionally_:
TESTS=

# Add local yaml tests here
YAML_TEST_RUNNERS=
# Specify other shell scripts here to make sure they are included in the distro
# even though spellers are disabled:
OTHER_TEST_RUNNERS=

if CAN_YAML_TEST
# Add your shell scripts for running python-based tests below here, so that
# they are only run if the preconditions for yaml tests are met.
TESTS+=
endif # CAN_YAML_TEST

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=


include $(top_srcdir)/../giella-core/am-shared/src-fst-orthography-test-include.am
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am
