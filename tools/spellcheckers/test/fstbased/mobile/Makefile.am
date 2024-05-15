## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

SUBDIRS = 

# Uncomment and list here (space separated) all test scripts that should be run:
TESTS=

# Only test spellers if we build spellers:
if WANT_SPELLERS
# Only run yaml tests if we are able to:
if CAN_YAML_TEST
TESTS+=
endif # CAN_YAML_TEST
endif # WANT_SPELLERS

# List tests that are presently (expected) failures here (in addition to above),
# ie things that should be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=run-fstspeller-gt-norm-yaml-testcases.sh
