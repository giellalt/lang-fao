

# Faroese disambiguator 

Usage, in `lang-fao`:
`cat text.txt|hfst-tokenize -cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst |vislcg3 -g src/cg3/disambiguator.cg3`

This file documents the [Faroese disambiguator file](http://github.com/giellalt/lang-fao/blob/main/src/cg3/disambiguator.cg3) .

## Delimiters, tags and sets

* LIST NAGD = Nom Acc Gen Dat ; 
* LIST AGD = Acc Gen Dat ; 
* LIST GENDER = Msc Fem Neu ; 
* LIST NUMBER = Sg Pl ; 

Test: Go for minimal weight. This rules gives priority to lexicalised forms.

* **NumRom** in beginning of sentence

# MAPPING OF CC AND CS

Mostly we map both @CNP and @CVP, then we select @CNP, after that we remove them so @CVP remains

* **CCasCNPCVP** Map (@CNP @CVP) to CC

* **killAllahtenotCS** All occurrences of "at" are CSs.

* Kill Sem/ID

* **killAllCNP** removes all remaining @CNP

* **XCC-CS** removes CC and CS with no synttag

* **ErrOrth** goes for correct forms

* **X** removes readings with no syntax

* * *
<small>This (part of) documentation was generated from [tools/grammarcheckers/grc-disambiguator.cg3](https://github.com/giellalt/lang-fao/blob/main/tools/grammarcheckers/grc-disambiguator.cg3)</small>