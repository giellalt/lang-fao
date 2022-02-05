## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

######## Test targets: ###########

if WANT_GRAMCHECK

# List here (space separated) all yaml files to be run as part of make check:
TESTS=\
	msyn-inf-sup.yaml \
	msyn-nomindef-nomdef.yaml \
	msyn-prfptc-sg1.yaml \
	msyn-sup-inf.yaml \
	msyn-sup-prspl.yaml \
	msyn-sup-sg1.yaml

# List tests that are presently (expected) failures here, ie things that should
# be fixed *later*, but is not critical at the moment:
XFAIL_TESTS=\
	msyn-prfptc-sg1.yaml \
	msyn-sup-prspl.yaml \
	msyn-sup-sg1.yaml

endif # WANT_GRAMCHECK

# XPASS:	msyn-inf-sup.yaml \
# XPASS: msyn-nomindef-nomdef.yaml
# XPASS: msyn-sup-inf.yaml

#### Do NOT edit below here: ####
include $(top_srcdir)/../giella-core/am-shared/tools-grammarcheckers-tests-dir-include.am
