## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

##################################################################
#### BEGIN: Add local processing instructions BELOW this line ####
##################################################################

#############################################
#### Add language-specific sources here: ####
GT_CG_LOCAL_SRCS=

#############################################################
#### Add language-specific targets to be installed here: ####
if WANT_SYNTAX
GT_CG_LOCAL_INST_TARGETS=
endif # WANT_SYNTAX

#################################################################
#### Add language-specific targets NOT to be installed here: ####
if WANT_SYNTAX
GT_CG_LOCAL_NOINST_TARGETS=
endif # WANT_SYNTAX

#################################################
#### Add language-specific build rules here: ####
if HAVE_SHARED_SMI
dependency.cg3: $(gt_SHARED_smi)/src/cg3/dependency.cg3
	$(AM_V_CP)cp -f $< $@
else
%.cg3:
	$(AM_V_GEN)echo "# missing dependency $@" > $@
endif

##################################################################
#### END: Add local processing instructions ABOVE this line ######
##################################################################

####### Other targets: ###########
clean-local:
	-rm -f *.bin dependency.cg3

####### Build rules via include: ########

include $(top_srcdir)/../giella-core/am-shared/src-syntax-dir-include.am
