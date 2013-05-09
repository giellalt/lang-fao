## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

# List here (space separated) all test scripts that should be run:
TESTS=generate-noun-lemmas.sh

if CAN_YAML_TEST
# Add your shell scripts for running python-based tests here:
TESTS+=run-gt-norm-yaml-testcases.sh \
	   run-gt-desc-yaml-testcases.sh \
	   run-gt-norm-anayaml-testcases.sh \
	   run-gt-norm-genyaml-testcases.sh \
	   run-lexc-testcases.sh
endif # CAN_YAML_TEST

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=

####### Other targets: ###########
clean-local:
	-rm -f *.txt

include $(top_srcdir)/am-shared/test-src-morph-include.am
