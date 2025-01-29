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
                 src/fst/filters/Makefile \
                 src/fst/syllabification/Makefile \
                 src/fst/Makefile \
                 src/fst/morphology/Makefile \
                 src/fst/morphology/test/Makefile \
                 src/fst/morphology/test/phonology/Makefile \
                 src/fst/orthography/Makefile \
                 src/fst/orthography/test/Makefile \
                 src/fst/phonetics/Makefile \
                 src/fst/phonetics/tests/Makefile \
                 src/fst/test/Makefile \
                 src/cg3/Makefile \
                 src/cg3/test/Makefile \
                 src/fst/tagsets/Makefile \
                 src/fst/transcriptions/Makefile \
                 docs/Makefile \
                 test/Makefile \
                 tools/Makefile \
                 tools/analysers/Makefile \
                 tools/analysers/pipespec.xml \
                 tools/grammarcheckers/Makefile \
                 tools/grammarcheckers/pipespec.xml \
                 tools/grammarcheckers/filters/Makefile \
                 tools/grammarcheckers/tests/Makefile \
                 tools/hyphenators/Makefile \
                 tools/hyphenators/filters/Makefile \
                 tools/hyphenators/test/Makefile \
                 tools/hyphenators/test/fstbased/Makefile \
                 tools/hyphenators/test/patternbased/Makefile \
                 tools/mt/Makefile \
                 tools/mt/filters/Makefile \
                 tools/mt/apertium/Makefile \
                 tools/mt/apertium/filters/Makefile \
                 tools/mt/apertium/tagsets/Makefile \
                 tools/mt/apertium/test/Makefile \
                 tools/mt/cgbased/Makefile \
                 tools/tokenisers/Makefile \
                 tools/tokenisers/filters/Makefile \
                 tools/tokenisers/tests/Makefile \
                 tools/shellscripts/Makefile \
                 tools/spellcheckers/Makefile \
                 tools/spellcheckers/index.xml \
                 tools/spellcheckers/index.mobile.xml \
                 tools/spellcheckers/filters/Makefile \
                 tools/spellcheckers/neural/Makefile \
                 tools/spellcheckers/test/Makefile \
                 tools/spellcheckers/test/fstbased/Makefile \
                 tools/spellcheckers/test/fstbased/desktop/Makefile \
                 tools/spellcheckers/test/fstbased/desktop/hfst/Makefile \
                 tools/spellcheckers/test/fstbased/mobile/Makefile \
                 tools/spellcheckers/weights/Makefile \
                 tools/tts/Makefile \
                 tools/tts/pipespec.xml \
                 tools/tts/test/Makefile])
# Add one AC_CONFIG_FILES for each script file that needs processing. This gives
# the most pleasant user experience and most readable autoconf code to maintain.
# Spell checker tests, all languages:
AC_CONFIG_FILES([src/fst/phonetics/tests/run_tests.sh],
      [chmod a+x src/fst/phonetics/tests/run_tests.sh])
AC_CONFIG_FILES([tools/spellcheckers/test/test-zhfst-file.sh], \
      [chmod a+x tools/spellcheckers/test/test-zhfst-file.sh])
AC_CONFIG_FILES([tools/spellcheckers/test/suggestion-quality.sh], \
      [chmod a+x tools/spellcheckers/test/suggestion-quality.sh])
AC_CONFIG_FILES([tools/spellcheckers/test/fstbased/desktop/hfst/test-zhfst-basic-sugg-speed.sh], \
      [chmod a+x tools/spellcheckers/test/fstbased/desktop/hfst/test-zhfst-basic-sugg-speed.sh])
AC_CONFIG_FILES([test/run-yaml-testcases.sh], \
      [chmod a+x test/run-yaml-testcases.sh])
AC_CONFIG_FILES([test/run-morph-tester.sh], \
      [chmod a+x test/run-morph-tester.sh])
# Phonology tests, all languages:
AC_CONFIG_FILES([src/fst/morphology/test/phonology/pair-test-positive.sh], \
      [chmod a+x src/fst/morphology/test/phonology/pair-test-positive.sh])
AC_CONFIG_FILES([src/fst/morphology/test/phonology/pair-test-negative.sh], \
      [chmod a+x src/fst/morphology/test/phonology/pair-test-negative.sh])
AC_CONFIG_FILES([src/fst/morphology/test/phonology/pair-test-hfst.sh], \
      [chmod a+x src/fst/morphology/test/phonology/pair-test-hfst.sh])
# Lemma generation tests, all languages:
AC_CONFIG_FILES([src/fst/morphology/test/generate-adjective-lemmas.sh], \
      [chmod a+x src/fst/morphology/test/generate-adjective-lemmas.sh])
AC_CONFIG_FILES([src/fst/morphology/test/generate-noun-lemmas.sh], \
      [chmod a+x src/fst/morphology/test/generate-noun-lemmas.sh])
AC_CONFIG_FILES([src/fst/morphology/test/generate-propernoun-lemmas.sh], \
      [chmod a+x src/fst/morphology/test/generate-propernoun-lemmas.sh])
AC_CONFIG_FILES([src/fst/morphology/test/generate-verb-lemmas.sh], \
      [chmod a+x src/fst/morphology/test/generate-verb-lemmas.sh])
# Lemma acceptance test for spellers, all languages:
AC_CONFIG_FILES([tools/spellcheckers/test/fstbased/desktop/hfst/accept-all-lemmas.sh], \
      [chmod a+x tools/spellcheckers/test/fstbased/desktop/hfst/accept-all-lemmas.sh])
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
