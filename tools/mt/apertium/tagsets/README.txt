README
======

This directory may contain additional reordering and relabeling files to be
used by language pair specific analysers in Apertium.

The recognised filename patterns are:

apertium.TARGETLANG.relabel
reorder-rags.TARGETLANG.regex

Replace TARGETLANG with the language code of the actual target language you
are building your __UNDEFINED__ apertium analyser for.

If no such file is found for a specific target language, then no such
processing is applied.

If only a relabel file is found, it will be applied.

If BOTH a relabel and a regex file is found, the regex file is applied _first_,
then the relabel file. This is important to remember, since it could affect the
actual tags you want to reorder. Rule of thumb:

Reorder tags in the form created by the default GTD-to-Apertium tag converter.

NB! Remember to escape Xerox regex special characters with %, e.g. the < and >
characters conventionally used to delimit tags in Apertium.
