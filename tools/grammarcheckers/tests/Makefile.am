## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

if WANT_GRAMCHECK

# List here (space separated) all yaml files to be run as part of make check:
TESTS=\
	msyn-inf-sup.yaml \
	msyn-prfptc-sg1.yaml \
	msyn-sup-inf.yaml \
	msyn-sup-prspl.yaml \
	msyn-sup-sg1.yaml \
	neg-inf-sup.yaml \
	neg-sup-inf.yaml \
	neg-supsup-supinf.yaml

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=

endif # WANT_GRAMCHECK

#### Do NOT edit below here: ####
include $(top_srcdir)/../giella-core/am-shared/tools-grammarcheckers-tests-dir-include.am
