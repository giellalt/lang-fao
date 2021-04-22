# Faroese morphological analyser

 # Definitions for Multichar_Symbols




## Tags for POS	
 * +N +V +A +Adv +Prop +Num : Open POS's	
 * +CC +CS +Interj +Pr +Pron +IM		 : Closed POS's	
 * +Pers +Det +Refl +Recipr +Poss +Dem		 : Pron types	
 * +Nom +Acc +Gen +Dat					 : Case			
 * +Msc +Fem +Neu						 : Gender		
 * +Sg +Pl								 : Number		
 * +Def +Indef 						 : Definiteness	
 * +Comp +Superl						 : Comparison	
 * +Prs +Prt							 : Tense		
 * +1Sg 					 : Person-Number
 * +2Sg 					 : Person-Number
 * +3Sg							 : Person-Number
 * +Inf +PrfPtc +PrsPrc +Sup +Imp +Sbj	+Subj : Verb forms	
 * +Cmp								 : Compound		
 * +Abbr +ABBR +ACR							 : Abbreviations, acronyms ,
 * +CLB +PUNCT +LEFT +RIGHT			 : Punctuation, parentheses
 * +Symbol : independent symbols in the text stream, like £, €, ©
 * **+CLBfinal**  Sentence final abbreviated expression ending in full stop, so that the full stop is ambiguous


 * +Sg3 : This is inherited from common files, should be changed to +3Sg.

 * +ABBR sub-pos
 * +Arab sub-pos

 * +Attr sub-pos
 * +Coll sub-pos

 * +Com samiske kasus, skal bort
 * +Dyn samiske kasus, skal bort
 * +Ela samiske kasus, skal bort
 * +Ess samiske kasus, skal bort
 * +Ill samiske kasus, skal bort
 * +Ine samiske kasus, skal bort

 * +MWE multiword expression

 * +Pos sjekk desse XXX
 * +Rom sjekk desse XXX



 * +Der/heit Derivation with -heit

 * +Der/A derivation to Adjective
 * +Der/Adv derivation to Adverb

 * +Ind
 * +Pass
 * +Interr
 * +Ord

## Semantic tags
 * +Sem/Sur
 * +Sem/Mal
 * +Sem/Fem
 * +Sem/Plc
 * +Sem/Org
 * +Sem/Veh
 * +Sem/Fem

 * +Sem/Year - year (i.e. 1000 - 2999), used only for numerals 


 * +Sem/Amount		
 * +Sem/Build		
 * +Sem/Build-room	
 * +Sem/Cat		
 * +Sem/Curr		
 * +Sem/Date		
 * +Sem/Domain		
 * +Sem/Domain_Hum	
 * +Sem/Dummytag	
 * +Sem/Edu_Hum	
 * +Sem/Event		
 * +Sem/Food-med	
 * +Sem/Group_Hum	
 * +Sem/Hum		
 * +Sem/ID			
 * +Sem/Lang		
 * +Sem/Mat		
 * +Sem/Measr		
 * +Sem/Money		
 * +Sem/Obj		
 * +Sem/Obj-el		
 * +Sem/Obj-ling	
 * +Sem/Org_Prod-audio
 * +Sem/Org_Prod-vis
 * +Sem/Part		
 * +Sem/Prod-vis	
 * +Sem/Route		
 * +Sem/Rule		
 * +Sem/Sign		
 * +Sem/State		
 * +Sem/State-sick	
 * +Sem/Substnc	
 * +Sem/Time		
 * +Sem/Time-clock	
 * +Sem/Tool-it	
 * +Sem/Txt		



 * **+Gram/TAbbr**:  Transitive abbreviation (it needs an argument)
 * **+Gram/NoAbbr**:  Intransitive abbreviations that are homonymous
   with more frequent words. They should only be considered
   abbreviations in the middle of a sentence.
 * **+Gram/TNumAbbr**:  Transitive abbreviation if the following
            constituent is numeric
 * **+Gram/NumNoAbbr**:  Transitive abbreviations for which numerals
are complements and normal words. The abbreviation usage
is less common and thus only the occurences in the middle of
the sentence can be considered as true cases.
 * **+Gram/TIAbbr**:  Both transitive and intransitive abbreviation
 * **+Gram/IAbbr**:  Intransitive abbreviation (it takes no argument)





## Non-changing letters
 * a2 This is for a special a Umlaut case
 * g2 i2 j2 t2 v2 

 * +v1 +v2 : different paradigms   ,

## Triggers for Morphophonology
 * %^UUML %^IUML %^eIUML %^ØUML				 : Umlaut types ,
 * %^W %^JI 					 : Cns changes ,
 * %^EPH %^OEA 					 : Epenthesis,  ,
 * %^GDEL %^GGDEL %^GVDEL %^VDEL %^JDEL %^RDEL	 : Cns deletion triggers,
 * %^EIO %^OA %^WVV %^EDH %^VSH			 : TODO ,
 * %^AB1 %^AB2 %^AB3 %^AB4 %^AB5 %^AB6 %^AB7	 : Ablaut series ,
 * %^aAB %^uAB 					 : More Ablaut ,
 * %^NGKK						 : NG to KK	,
 * %^PASS						 : todo ,

 * %>						 : Suffix boundary ,

 * **+v1** - Paradigm identifier (e.g. gera+v1 = ger)
 * **+v2** - Paradigm identifier (e.g. gera+v2 = gerar)



Language tags

 * +OLang/ENG
 * +OLang/FIN
 * +OLang/NNO
 * +OLang/NOB
 * +OLang/RUS
 * +OLang/SMA
 * +OLang/SME
 * +OLang/SWE
 * +OLang/UND


## Non-ascii letters, perhaps needed as multichar symbols
 * æ ø å 				
 * á é í ó ú ý Á É Í Ó Ý
 * ä ö ü Ä Ö Ö			

## Compounding tags

The tags are of the following form:
* **+CmpNP/xxx** - Normative (N), Position (P), ie the tag describes what
                   position the tagged word can be in in a compound
* **+CmpN/xxx**  - Normative (N) **form** ie the tag describes what
                   form the tagged word should use when making compounds
* **+Cmp/xxx**   - Descriptive compounding tags, ie tags that *describes*
                   what form a word actually is using in a compound

This entry / word should be in the following position(s):

 * **+CmpNP/All** - ... in all positions, **default**, this tag does not have to be written
 * **+CmpNP/First** - ... only be first part in a compound or alone
 * **+CmpNP/Pref** - ... only **first** part in a compound, NEVER alone
 * **+CmpNP/Last** - ... only be last part in a compound or alone
 * **+CmpNP/Suff** - ... only **last** part in a compound, NEVER alone
 * **+CmpNP/None** - ... does not take part in compounds
 * **+CmpNP/Only** - ... only be part of a compound, i.e. can never
                    be used alone, but can appear in any position


## Usage tags

 * +Use/Disamb = Use only in disambiguator/tokeniser analyser
 * +Use/Circ = for compound restrictions

 * **+Use/PMatch** means that the following is only used in the analyser feeding the disambiguator. This is missing.

 * +Use/-PMatch	
 * +Use/-Spell		
 * +Use/NG			
 * +Use/NGA		
 * +Use/SpellNoSugg
 * **+Use/GC** only retained in the HFST Grammar Checker disambiguation analyser

 * +Err/Guess								 : Tag for Name Guesser component
 * +Err/Orth								 : Marking forms that are orthographical errors
 * +Err/Hyph		 	
 * +Err/Lex		 	
 * +Err/SpaceCmp	 	
 * +Err/MissingSpace 	

## Symbols that need to be escaped on the lower side (towards twolc):
Todo: Check whether these can be removed. They are probably obsolete.

 * »7 : Literal » 
 * «7 : Literal «
```
 %[%>%] - Literal >
 %[%<%] - Literal <
```


## Flag diacritics

We have manually optimised the structure of our lexicon using following
flag diacritics to restrict morhpological combinatorics - only allow compounds
with verbs if the verb is further derived into a noun again:

 |  @P.NeedNoun.ON@ | (Dis)allow compounds with verbs unless nominalised
 |  @D.NeedNoun.ON@ | (Dis)allow compounds with verbs unless nominalised
 |  @C.NeedNoun@ | (Dis)allow compounds with verbs unless nominalised

### Flags for speller suggestions

 |  @D.ErrOrth.ON@ 
 |  @C.ErrOrth@	 
 |  @P.ErrOrth.ON@ 
 |  @R.ErrOrth.ON@ 

### Flag for case harmony in compounds

Set flag for compounds

|                        Flag | Example word
|                        ---- | ----
 |  @P.Case.MscNom@ | fyrstiflokkur
 |  @P.Case.MscObl@ | fyrstaflokk
 |  @P.Case.FemNom@ | lítlasystir
 |  @P.Case.FemObl@ | lítluusystur
 |  @P.Case.Neu@ | breiðaskarð
 |  @P.Case.Pl@ | fyrstuflokkar, lítlusystrar, breiðuskørð

Control flag values for compounds

|                        Flag | Example word
|                        ---- | ----
 |  @R.Case.MscNom@ | fyrstiflokkur
 |  @R.Case.MscObl@ | fyrstaflokk
 |  @R.Case.FemNom@ | lítlasystir
 |  @R.Case.FemObl@ | lítluusystur
 |  @R.Case.Neu@ | breiðaskarð
 |  @R.Case.Pl@ | fyrstuflokkar, lítlusystrar, breiðuskørð

Control flag values for compounds

|                        Flag | Example word
|                        ---- | ----
 |  @U.Case.MscNom@ | fyrstiflokkur
 |  @U.Case.MscObl@ | fyrstaflokk
 |  @U.Case.FemNom@ | lítlasystir
 |  @U.Case.FemObl@ | lítluusystur
 |  @U.Case.Neu@ | breiðaskarð
 |  @U.Case.Pl@ | fyrstuflokkar, lítlusystrar, breiðuskørð

Flag diacritic look-alikes for grammar checker & tokenisation purposes

|                        Flag | Explanation
|                        ---- | ----
 |  @P.Pmatch.Loc@ | Location in string used or parsed by hfst-pmatch
 |  @P.Pmatch.Backtrack@ | Also for hfst-pmatch 


### Flags for compound restriction

For languages that allow compounding, the following flag diacritics are needed
to control position-based compounding restrictions for nominals. Their use is
handled automatically if combined with +CmpN/xxx tags. If not used, they will
do no harm.

|                        Flag | Explanation
|                        ---- | ----
 |  @P.CmpFrst.FALSE@ | Require that words tagged as such only appear first
 |  @D.CmpPref.TRUE@ | Block such words from entering ENDLEX
 |  @P.CmpPref.FALSE@ | Block these words from making further compounds
 |  @D.CmpLast.TRUE@ | Block such words from entering R
 |  @D.CmpNone.TRUE@ | Combines with the next tag to prohibit compounding
 |  @U.CmpNone.FALSE@ | Combines with the prev tag to prohibit compounding
 |  @P.CmpOnly.TRUE@ | Sets a flag to indicate that the word has passed R
 |  @D.CmpOnly.FALSE@ | Disallow words coming directly from root.

Use the following flag diacritics to control downcasing of derived proper
nouns (e.g. Finnish Pariisi -> pariisilainen). See e.g. North Sámi for how to use
these flags. There exists a ready-made regex that will do the actual down-casing
given the proper use of these flags.
 |  @U.Cap.Obl@ | Allowing downcasing of derived names: deatnulasj.
 |  @U.Cap.Opt@ | Allowing downcasing of derived names: deatnulasj.




# Lexicon Root
This is the beginning of everything. The **Root** lexicon is reserved in the
LexC language, and must be the first lexicon defined.


 * Nouns ; 
 * Shortnouns ;  1- and 2-letter nouns excluded from compounding
 * Propernouns ; 
 * Adjectives ; 
 * Shortadjectives ; 
 * Verbs ;		 
 * Adverb ;	 
 * Conjunction ; 
 * Subjunction ; 
 * Interjection ; 
 * Numeral ;	 
 * Determiner ; 
 * Pronoun ;	 
 * Preposition ; 
 * Punctuation ; 
 * Symbols ; 
 * Abbreviation ; 
 * Acronyms ; 

Lexicon Acronyms is split in two:
 * Acronym-fao ; for fao acronyms
 * Acronym-smi ; for language independent acronums


# Lexicon ENDLEX
And this is the ENDLEX of everything:
```
 @D.CmpOnly.FALSE@@D.CmpPref.TRUE@@D.NeedNoun.ON@ ENDLEX2 ;
```
The `@D.CmpOnly.FALSE@` flag diacritic is ued to disallow words tagged
with +CmpNP/Only to end here.
The `@D.NeedNoun.ON@` flag diacritic is used to block illegal compounds.





