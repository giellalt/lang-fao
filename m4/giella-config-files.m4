################################################################################
# Define function to print the configure footer
################################################################################
AC_DEFUN([gt_CONFIG_FILES],
[
# List all non-script files processed by Autoconf.
AC_CONFIG_FILES([Makefile \
                 giella-fao.pc \
                 manifest.toml \
                 src/Makefile \
                 src/filters/Makefile \
                 src/hyphenation/Makefile \
                 src/fst/Makefile \
                 src/orthography/Makefile \
                 src/phonetics/Makefile \
                 src/cg3/Makefile \
                 src/tagsets/Makefile \
                 src/transcriptions/Makefile \
                 docs/Makefile \
                 test/Makefile \
                 test/tools/Makefile \
                 test/tools/hyphenators/Makefile \
                 test/tools/hyphenators/fstbased/Makefile \
                 test/tools/hyphenators/patternbased/Makefile \
                 test/tools/mt/Makefile \
                 test/tools/mt/apertium/Makefile \
                 test/tools/spellcheckers/Makefile \
                 test/tools/spellcheckers/fstbased/Makefile \
                 test/tools/spellcheckers/fstbased/desktop/Makefile \
                 test/tools/spellcheckers/fstbased/desktop/hfst/Makefile \
                 test/tools/spellcheckers/fstbased/mobile/Makefile \
                 test/src/Makefile \
                 test/src/morphology/Makefile \
                 test/src/orthography/Makefile \
                 test/src/phonology/Makefile \
                 test/src/syntax/Makefile \
                 tools/Makefile \
                 tools/analysers/Makefile \
                 tools/analysers/pipespec.xml \
                 tools/grammarcheckers/Makefile \
                 tools/grammarcheckers/pipespec.xml \
                 tools/grammarcheckers/filters/Makefile \
                 tools/grammarcheckers/tests/Makefile \
                 tools/hyphenators/Makefile \
                 tools/hyphenators/filters/Makefile \
                 tools/mt/Makefile \
                 tools/mt/filters/Makefile \
                 tools/mt/apertium/Makefile \
                 tools/mt/apertium/filters/Makefile \
                 tools/mt/apertium/tagsets/Makefile \
                 tools/mt/cgbased/Makefile \
                 tools/tokenisers/Makefile \
                 tools/tokenisers/filters/Makefile \
                 tools/shellscripts/Makefile \
                 tools/spellcheckers/Makefile \
                 tools/spellcheckers/filters/Makefile \
                 tools/spellcheckers/weights/Makefile])
# Add one AC_CONFIG_FILES for each script file that needs processing. This gives
# the most pleasant user experience and most readable autoconf code to maintain.
# Spell checker tests, all languages:
AC_CONFIG_FILES([test/tools/spellcheckers/test-zhfst-file.sh], \
      [chmod a+x test/tools/spellcheckers/test-zhfst-file.sh])
AC_CONFIG_FILES([test/tools/spellcheckers/fstbased/desktop/hfst/test-zhfst-basic-sugg-speed.sh], \
      [chmod a+x test/tools/spellcheckers/fstbased/desktop/hfst/test-zhfst-basic-sugg-speed.sh])
AC_CONFIG_FILES([test/run-yaml-testcases.sh], \
      [chmod a+x test/run-yaml-testcases.sh])
AC_CONFIG_FILES([test/run-morph-tester.sh], \
      [chmod a+x test/run-morph-tester.sh])
# Phonology tests, all languages:
AC_CONFIG_FILES([test/src/phonology/pair-test-positive.sh], \
      [chmod a+x test/src/phonology/pair-test-positive.sh])
AC_CONFIG_FILES([test/src/phonology/pair-test-negative.sh], \
      [chmod a+x test/src/phonology/pair-test-negative.sh])
AC_CONFIG_FILES([test/src/phonology/pair-test-hfst.sh], \
      [chmod a+x test/src/phonology/pair-test-hfst.sh])
# Lemma generation tests, all languages:
AC_CONFIG_FILES([test/src/morphology/generate-adjective-lemmas.sh], \
      [chmod a+x test/src/morphology/generate-adjective-lemmas.sh])
AC_CONFIG_FILES([test/src/morphology/generate-noun-lemmas.sh], \
      [chmod a+x test/src/morphology/generate-noun-lemmas.sh])
AC_CONFIG_FILES([test/src/morphology/generate-propernoun-lemmas.sh], \
      [chmod a+x test/src/morphology/generate-propernoun-lemmas.sh])
AC_CONFIG_FILES([test/src/morphology/generate-verb-lemmas.sh], \
      [chmod a+x test/src/morphology/generate-verb-lemmas.sh])
# Lemma acceptance test for spellers, all languages:
AC_CONFIG_FILES([test/tools/spellcheckers/fstbased/desktop/hfst/accept-all-lemmas.sh], \
      [chmod a+x test/tools/spellcheckers/fstbased/desktop/hfst/accept-all-lemmas.sh])
# Shorthand shell scripts instead of the old-type aliases - all languages:
AC_CONFIG_FILES([tools/shellscripts/ufao-gt.sh], \
      [chmod a+x tools/shellscripts/ufao-gt.sh])
# Devtools shell scripts should also be handled by autotools:
AC_CONFIG_FILES([devtools/check_analysis_regressions.sh], \
      [chmod a+x devtools/check_analysis_regressions.sh])
AC_CONFIG_FILES([devtools/test_ospell-office_suggestions.sh], \
      [chmod a+x devtools/test_ospell-office_suggestions.sh])
AC_CONFIG_FILES([devtools/test_voikkospell_suggestions.sh], \
      [chmod a+x devtools/test_voikkospell_suggestions.sh])
AC_CONFIG_FILES([devtools/test_grammar_checker.sh], \
      [chmod a+x devtools/test_grammar_checker.sh])

]) # gt_CONFIG_FILES
