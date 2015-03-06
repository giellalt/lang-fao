## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# Uncomment and list here (space separated) all test scripts that should be run:
TESTS=

# Only test spellers if we build spellers:
if WANT_SPELLERS
TESTS+=run-hfstspeller-acceptor-yaml-testcases.sh
endif # WANT_SPELLERS

# List tests that are presently (expected) failures here (in addition to above),
# ie things that should be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=run-hfstspeller-acceptor-yaml-testcases.sh
