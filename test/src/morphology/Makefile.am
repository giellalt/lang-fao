## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

# List here (space separated) all test scripts that should be run:
TESTS=generate-noun-lemmas.sh

if CAN_DOCC
# Add test files that should be generated from source code to the
# SOURCE_CODE_YAML_TESTS variable. The filename pattern is as follows:
#
# dir/filename.lexc => filename-dir_fst-name.yaml
#
# The fst-name is specified in the test data in the source file.

SOURCE_CODE_YAML_TESTS=nouns-affixes_gt-norm.yaml
#					   adjectives-affixes_gt-norm.yaml \
#					   root-morphology_gt-norm.yaml    \
#					   noun-stems_gt-norm.yaml         \
#					   adj-stems_gt-norm.yaml
endif # CAN_DOCC

if CAN_YAML_TEST
# Add your shell scripts for running python-based tests here:
TESTS+=run-gt-norm-yaml-testcases.sh \
	   run-gt-desc-yaml-testcases.sh
endif

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=

####### Other targets: ###########
clean-local:
	-rm -f *.txt

include $(top_srcdir)/am-shared/test-src-morph-include.am
