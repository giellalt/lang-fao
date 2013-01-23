## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

# Old doc:
# e.g. install as-is
#doc_DATA=fao-testdiary.xml index.xml site-frag.xml tabs-frag.xml

# List all jspwiki files that should be created from source files in the
# JSP_PAGES variable. The filename pattern is as follows:
#
# dir/filename.lexc => filename-dir.jspwiki

if CAN_DOCC

JSP_PAGES=root-morphology.jspwiki
# clitics-morphology.jspwiki       \
# compounding-morphology.jspwiki   \
# abbreviations-stems.jspwiki      \
# acronyms-stems.jspwiki           \
# adjectives-oahpa-stems.jspwiki   \
# adjectives-stems.jspwiki         \
# adpositions-stems.jspwiki        \
# adverbs-stems.jspwiki            \
# conjunctions-stems.jspwiki       \
# interjections-stems.jspwiki      \
# nouns-oahpa-stems.jspwiki        \
# nouns-stems.jspwiki              \
# numerals-stems.jspwiki           \
# particles-stems.jspwiki          \
# pronouns-stems.jspwiki           \
# propernouns-stems.jspwiki        \
# punctuation-stems.jspwiki        \
# smi-propernouns-stems.jspwiki    \
# subjunctions-stems.jspwiki       \
# verbs-stems.jspwiki              \
# adjectives-oahpa-affixes.jspwiki \
# adjectives-affixes.jspwiki       \
# nouns-affixes.jspwiki            \
# propernouns-affixes.jspwiki      \
# verbs-affixes.jspwiki

ALLINONE_JSP_PAGE=$(GTLANG).jspwiki

LINKS=Links.jspwiki

endif # CAN_DOCC

include $(top_srcdir)/am-shared/doc-include.am
