## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

SUBDIRS = phonology orthography morphology syntax

######## Test targets: ###########

# List here (space separated) all test scripts that should be run
# _unconditionally_:
TESTS=

if CAN_YAML_TEST
# Add your shell scripts for running python-based tests below here, so that
# they are only run if the preconditions for yaml tests are met.

# This is for yaml tests requiring ONLY an analyser
if WANT_MORPHOLOGY
TESTS+=run-gt-norm-anayaml-testcases.sh \
       run-gt-desc-anayaml-testcases.sh

# This is for yaml tests requiring BOTH an analyser AND a generator:
if WANT_GENERATION
TESTS+=run-gt-norm-yaml-testcases.sh \
       run-gt-desc-yaml-testcases.sh \
       run-lexc-testcases.sh
endif # WANT_GENERATION
endif # WANT_MORPHOLOGY

# This is for yaml tests requiring ONLY a generator
if WANT_GENERATION
TESTS+=run-gt-norm-genyaml-testcases.sh \
       run-gt-desc-genyaml-testcases.sh
endif # WANT_GENERATION

# This is for yaml tests to be run when building fst's tailored to the needs of
# electronic dictionaries:
if WANT_DICTIONARIES
TESTS+=run-dict-gt-desc-anayaml-testcases.sh \
       run-dict-gt-norm-genyaml-testcases.sh
endif # WANT_DICTIONARIES

endif # CAN_YAML_TEST

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=run-dict-gt-desc-anayaml-testcases.sh \
            run-dict-gt-norm-genyaml-testcases.sh \
            run-gt-norm-yaml-testcases.sh \
            run-gt-desc-yaml-testcases.sh \
            run-gt-norm-anayaml-testcases.sh \
            run-gt-norm-genyaml-testcases.sh \
            run-lexc-testcases.sh

####### Other targets: ###########
clean-local:
	-rm -f *.txt
