README
======

This directory contains reordering and relabeling files to be
used by analysers and generators in Apertium. One file is generated, and the
manually written files can either be general or language-pair specific.

The recognised filenames and filename patterns, and their use in the order they
are applied, are:

apertium.relabel             - automatically generated, Giella -> Apertium
modify-tags.regex            - general tagset changes for FST, man. added/maintained
apertium.postproc.relabel    - general relabelling, manually added/maintained
modify-rags.TARGETLANG.regex - pair-specific changes using regex, manually m.
apertium.TARGETLANG.relabel  - pair-specific relabelling, manually add/maint.

Replace TARGETLANG with the language code of the actual target language you
are building your Faroese apertium analyser for.


The file apertium.postproc.relabel is added to all languages and contain some
default tag changes between the Giella and Apertium tag sets.

gt2apertium.cg3relabel      - general tagset changes for CONSTRAINT GRAMMAR, manually added

The remaining files can be added as needed, and will be automatically picked up
by the build process if found.

NB! Regex files are applied BEFORE relabel files if both files are used. See
order of application above!
