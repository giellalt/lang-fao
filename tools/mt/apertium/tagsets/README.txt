README
======

This directory may contain additional reordering and relabeling files to be
used by language pair specific analysers in Apertium.

The recognised filename patterns are:

apertium.TARGETLANG.relabel
reorder-rags.TARGETLANG.regex

Replace TARGETLANG with the language code of the actual target language you
are building your Faroese apertium analyser for.

If no such file is found for a specific target language, then no such
processing is applied.

If only a relabel file is found, it will be applied.

If BOTH a relabel and a regex file is found, the regex file is applied _first_,
then the relabel file. This is important to remember, since it could affect the
actual tags you want to reorder. Rule of thumb:

Reorder tags in the form created by the default GTD-to-Apertium tag converter.

NB! Remember to escape Xerox regex special characters with %, e.g. the < and >
characters conventionally used to delimit tags in Apertium.

The file apertium.postproc.relabel is a manually edited relabelling file that
is applied after the automatic relabelling. Use this file to add or modify any
relabelling that is not covered by the automatic relabelling. Remember that
the relabeling tool only can replace single symbols (multichar or otherwise) -
if you need to do more advanced changes (reordering, multiple symbols at once)
please use the target language specific regexes in addition (see above).
