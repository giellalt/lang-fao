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

JSP_PAGES=root-morphology.jspwiki  \
		  fao-phon-phonology.jspwiki \
		  nouns-affixes.jspwiki  \
		  nouns-stems.jspwiki \
		  verbs-affixes.jspwiki \
          adjectives-affixes.jspwiki \
          acronyms-affixes.jspwiki \
          symbols-affixes.jspwiki
# clitics-morphology.jspwiki       \
# compounding-morphology.jspwiki   \
# abbreviations-stems.jspwiki      \
# acronyms-stems.jspwiki           \
# adjectives-stems.jspwiki         \
# adpositions-stems.jspwiki        \
# adverbs-stems.jspwiki            \
# conjunctions-stems.jspwiki       \
# interjections-stems.jspwiki      \
# numerals-stems.jspwiki           \
# particles-stems.jspwiki          \
# pronouns-stems.jspwiki           \
# propernouns-stems.jspwiki        \
# punctuation-stems.jspwiki        \
# smi-propernouns-stems.jspwiki    \
# subjunctions-stems.jspwiki       \
# verbs-stems.jspwiki              \
# adjectives-affixes.jspwiki       \
# propernouns-affixes.jspwiki      \
ALLINONE_JSP_PAGE=$(srcdir)/$(GTLANG).jspwiki

LINKS=$(srcdir)/Links.jspwiki

endif # CAN_DOCC

include $(top_srcdir)/am-shared/doc-dir-include.am
