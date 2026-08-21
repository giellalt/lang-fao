This directory should contain tools used by the linguists and developers of each
language. The idea is that it should contain tools useful during the development
of the linguistic resources, while at the same time not being automatisable as
per the Autotools requirements.

Initially it contains shell scripts to generate selected word forms for lemmas
for each continuation lexicon in the given source file. To generate other word
forms, just edit the files. To cover other source files, just copy one of the
existing files, and change it as needed.

generate-err-testdata.sh generates spellchecker test data from lexicalised
+Err/-tagged entries in the open word classes (nouns, adjectives, verbs,
adverbs). It must be run manually, and the resulting file should be reviewed
and committed to tools/spellcheckers/test/ under a suitable name. Edit the
USER Variables section of the script to point to your language's stem files,
paradigms, generator and disambiguating analyser. The language-independent
logic lives in giella-core/devtools/generate-err-testdata.py.
