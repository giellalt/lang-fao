## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

if WANT_GRAMCHECK

# List here (space separated) all yaml files to be run as part of make check:
TESTS=\
	msyn-inf-sup-FAIL.yaml \
	msyn-inf-sup-PASS.yaml \
	msyn-prfptc-sg1-PASS.yaml \
	msyn-sup-inf-PASS.yaml \
	msyn-sup-prspl-FAIL.yaml \
	msyn-sup-prspl-PASS.yaml \
	msyn-sup-sg1-FAIL.yaml \
	msyn-sup-sg1-PASS.yaml \
	neg-inf-sup-FAIL.yaml \
	neg-inf-sup-PASS.yaml \
	neg-sup-inf-FAIL.yaml \
	neg-sup-inf-PASS.yaml 

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=\
	msyn-inf-sup-FAIL.yaml \
	msyn-sup-prspl-FAIL.yaml \
	msyn-sup-sg1-FAIL.yaml \
	neg-inf-sup-FAIL.yaml \
	neg-sup-inf-FAIL.yaml \
	neg-supsup-supinf-FAIL.yaml


endif # WANT_GRAMCHECK

#### Do NOT edit below here: ####
include $(top_srcdir)/../giella-core/am-shared/tools-grammarcheckers-tests-dir-include.am
