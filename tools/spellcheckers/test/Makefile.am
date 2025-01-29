## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

SUBDIRS = fstbased

# Uncomment and list here (space separated) all test scripts that should be run:
TESTS=

# Add local yaml test runners here:
YAML_TEST_RUNNERS=
# Specify other shell scripts here to make sure they are included in the distro
# even though spellers are disabled:
OTHER_TEST_RUNNERS=

# Only test spellers if we build spellers:
if WANT_SPELLERS
TESTS+=
# Only run yaml tests if we are able to:
if CAN_YAML_TEST
TESTS+=
endif # CAN_YAML_TEST
endif # WANT_SPELLERS

# List tests that are presently (expected) failures here (in addition to above),
# ie things that should be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=run-spellers-gt-norm-yaml-testcases.sh suggestion-quality.sh


include $(top_srcdir)/../giella-core/am-shared/tools-spellcheckers-test-include.am
include $(top_srcdir)/../giella-core/am-shared/devtest-include.am

