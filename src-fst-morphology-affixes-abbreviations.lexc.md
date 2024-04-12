# Abbreviation affixes

Now splitting according to POS, and according to dot or not

First collecting POS info, *-noun, *-adv, etc.
Also splitting when in doubt: -noun-adj => -noun and -adj
Then pointing to two contlexes, a dot-one and a non-dot-one.

### Lexicons without final period

### Lexicons with final period

* **LEXICON ab-dot-noun   **  This is the lexicon for abbrs that must have a period.

* **LEXICON ab-dot-adj   **  This is the lexicon for abbrs that must have a period.

* **LEXICON nodot-infl   **

* **LEXICON dot-infl   **

* **LEXICON DOT   ** - Adds the dot to dotted abbreviations.
we also allow different variations of dotted abbreviations at
the end of the sentence (especially for tokenisers)
* "kvæð." gets analysed as `"kvæð" ABBR Gram/IAbbr N Abbr`
in tokeniser mode also:
* "kvæð." -> `"ABBR Gram/IAbbr N Abbr` + `"." CLB` to account for sentence
final kvæð with no extra full stop.
* also `"kvæða" V Imp Sg` + `"." CLB` due to
homonymy.
Same treatment is done with two and three full stops after abbreviation in
the end of the sentence:
* "kvæð.." -> `"su" Adv Abbr` + `"." CLB Err/Orth`
* "kvæð..." -> `"su" Adv Abbr` + `"..." CLB`

* * *

<small>This (part of) documentation was generated from [src/fst/morphology/affixes/abbreviations.lexc](https://github.com/giellalt/lang-fao/blob/main/src/fst/morphology/affixes/abbreviations.lexc)</small>
