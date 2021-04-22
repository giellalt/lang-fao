# Faroese morphological analyser

 # Definitions for Multichar_Symbols




## Tags for POS	
 * +N +V +A +Adv +Prop +Num                 : Open POS's	
 * +CC +CS +Interj +Pr +Pron +IM		     : Closed POS's	
 * +Pers +Det +Refl +Recipr +Poss +Dem		 : Pron types	
 * +Nom +Acc +Gen +Dat					     : Case			
 * +Msc +Fem +Neu						     : Gender		
 * +Sg +Pl								     : Number		
 * +Def +Indef 						     : Definiteness	
 * +Comp +Superl						     : Comparison	
 * +Prs +Prt							     : Tense		
 * +1Sg 					     : Person-Number
 * +2Sg 					     : Person-Number
 * +3Sg							 : Person-Number
 * +Inf +PrfPtc +PrsPrc +Sup +Imp +Sbj	+Subj     : Verb forms	
 * +Cmp								     : Compound		
 * +Abbr +ABBR +ACR							     : Abbreviations, acronyms ,
 * +CLB +PUNCT +LEFT +RIGHT			     : Punctuation, parentheses
 * +Symbol  : independent symbols in the text stream, like £, €, ©
 * **+CLBfinal**  Sentence final abbreviated expression ending in full stop, so that the full stop is ambiguous


 * +Sg3 					     : This is inherited from common files, should be changed to +3Sg.

 * +ABBR    sub-pos
 * +Arab    sub-pos

 * +Attr    sub-pos
 * +Coll    sub-pos

 * +Com     samiske kasus, skal bort
 * +Dyn     samiske kasus, skal bort
 * +Ela     samiske kasus, skal bort
 * +Ess     samiske kasus, skal bort
 * +Ill     samiske kasus, skal bort
 * +Ine     samiske kasus, skal bort

 * +MWE     multiword expression

 * +Pos     sjekk desse XXX
 * +Rom     sjekk desse XXX



 * +Der/heit   Derivation with -heit

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

 * +Sem/Year         - year (i.e. 1000 - 2999), used only for numerals 


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
 *  a2  This is for a special a Umlaut case
 *  g2 i2 j2 t2 v2   

 * +v1 +v2     : different paradigms   ,

## Triggers for Morphophonology
 * %^UUML %^IUML %^eIUML %^ØUML				 : Umlaut types ,
 * %^W %^JI 					                  : Cns changes ,
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

 *  »7      : Literal » 
 *  «7      : Literal «
```
  %[%>%]  - Literal >
  %[%<%]  - Literal <
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
 |  @P.Case.MscNom@ | fyrstiflokkur
 |  @P.Case.MscObl@ | fyrstaflokk
 |  @P.Case.FemNom@ | lítlasystir
 |  @P.Case.FemObl@ | lítluusystur
 |  @P.Case.Neu@ | breiðaskarð
 |  @P.Case.Pl@ | fyrstuflokkar, lítlusystrar, breiðuskørð

Control flag values for compounds
 |  @R.Case.MscNom@ | fyrstiflokkur
 |  @R.Case.MscObl@ | fyrstaflokk
 |  @R.Case.FemNom@ | lítlasystir
 |  @R.Case.FemObl@ | lítluusystur
 |  @R.Case.Neu@ | breiðaskarð
 |  @R.Case.Pl@ | fyrstuflokkar, lítlusystrar, breiðuskørð

Control flag values for compounds
 |  @U.Case.MscNom@ | fyrstiflokkur
 |  @U.Case.MscObl@ | fyrstaflokk
 |  @U.Case.FemNom@ | lítlasystir
 |  @U.Case.FemObl@ | lítluusystur
 |  @U.Case.Neu@ | breiðaskarð


 |  @P.Pmatch.Loc@ | Location in string used or parsed by hfst-pmatch
 |  @P.Pmatch.Backtrack@ | Also for hfst-pmatch 


### Flags for compound restriction

For languages that allow compounding, the following flag diacritics are needed
to control position-based compounding restrictions for nominals. Their use is
handled automatically if combined with +CmpN/xxx tags. If not used, they will
do no harm.

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
 * Shortnouns ;      1- and 2-letter nouns excluded from compounding
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
 * Symbols     ;    
 * Abbreviation ;   
 * Acronyms ;       

Lexicon Acronyms is split in two:
 * Acronym-fao ;  for fao acronyms
 * Acronym-smi ;  for language independent acronums


# Lexicon ENDLEX
And this is the ENDLEX of everything:
```
 @D.CmpOnly.FALSE@@D.CmpPref.TRUE@@D.NeedNoun.ON@ ENDLEX2 ;
```
The `@D.CmpOnly.FALSE@` flag diacritic is ued to disallow words tagged
with +CmpNP/Only to end here.
The `@D.NeedNoun.ON@` flag diacritic is used to block illegal compounds.





# The Faroese morphophonological file 

## Alphabet
Here we declare all symbols.

 *  a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å    
 *  á é ó ú í à è ò ù ì ä ë ö ü ï â ê ô û î ã ý þ ñ ð ß ç        

 *  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å    
 *  Á É Ó Ú Í À È Ò Ù Ì Ä Ë Ö Ü Ï Â Ê Ô Û Î Ã Ý þ Ñ Ð            


 *  a2:a    for da2n -> dønum
 *  g2:g   for invariant g
 *  i2:i   for invariant i
 *  j2:j   for invariant j
 *  t2:t   for invariant, non-deleted t, dráttri pro *drátri
 *  v2:v   for invariant v

 *  %^UUML:0 %^IUML:0 %^eIUML:0 %^ØUML:0    : Umlaut types ,
 *  %^W:0 %^JI:0                   : Cns changes ,
 *  %^EPH:0                        : Epenthesis,  ,
 *  %^OEA:0                        : ø to a

 *  %^GDEL:0 %^GGDEL:0 %^GVDEL:0 %^VDEL:0 %^JDEL:0 %^RDEL:0 	 : Cns deletion triggers,
 *  %^AB1:0 %^AB2:0 %^AB3:0 %^AB4:0 %^AB5:0 %^AB6:0 %^AB7:0	 : Ablaut series ,
 *  %^aAB:0 %^uAB:0	 : Ablaut series subcases
 *  %>:0 	 : Suffix border

 *  « » 	 : hmm, in use?

## Sets
Here we define some convenient sets.


 *  Vow = a e i o u y æ ø å                                 
         á é ó ú í à è ò ù ì ä ë ö ü ï â ê ô û î ã ý ;     
 *  Cns = b c d f g h j k l m n p q r s t v w x z ð þ ;     
 *  Nas = m n ;                                             
 *  NonNas = b c d f g h j k l p q r s t v w x z ð þ ;      
 *  Dummy = %^UUML %^IUML %^eIUML %^W %^EPH %^JI %^OEA      
 *  %^EDH %^VSH %^GDEL %^GGDEL %^GVDEL %^VDEL %^JDEL        
   %^RDEL %^EIO %^OA %^WVV %^NGKK %^AB1 %^AB2 %^AB3        
   %^AB4 %^AB5 %^AB6 %^AB7 %^aAB %^uAB %^PASS %> ;         

 *  Special =  %^UUML %^IUML %^W %^EPH %^JI %^OEA %^GDEL %^GGDEL     
              %^GVDEL %^VDEL  %^JDEL %^RDEL ;                       
Forgot why these are special...


# Rules
These are the rules. After each rule (or rather: after many of the rules) there are test cases that are there to test whether the rules work.



## Verschärfung

**Deleting g** 
* Deleting the gv Verschärfung 1
* Deleting gg in ggj Genitive I
* Deleting gg in ggj Genitive II


* *sting^NGKK^aAB>st*
* *stak0000st*



**ng to kk Part 1** 

**ng to kk Part 2** 



**Deleting v in gv sequences** 

Verschärfung tests

* *bógv^IUML>i*
* *bøg000i*

* *flúgv^IUML^VDEL*
* *flýg000*

* *flúgv^VSH^VDEL>u*
* *flug0000u*

* *búgv^GVDEL>s*
* *bú0000s*

* *bógv^VDEL>s*
* *bóg000s*

* *skógv^GVDEL>m*
* *skó0000m*

* *skýggj^GGDEL>s*
* *ský00000s*

* *kríggj^GDEL>s*
* *kríg0000s*

* *sjógv^GDEL>ar*
* *sjó0v00ar*

**Deleting r in Genitive of ur stems** 

* *brúður^EPH^RDEL>ar*
* *brúð00000ar*


**Deleting m in um%>num ** 

* *ris>um>num*
* *ris0u00num*

* *skógv^GVDEL>m>num*
* *skó000000num*



**Deleting Double Consonant in Front of Consonant** 

The preceeding rule is fishy - the test cases below don't fit the context
requirements, and the >s# in the right context seems to indicate passive.
The rule conflicts with the "Cns Deletion in front of Pass" rule at the
end of the file - but only when using the Xerox tools! XXX - please have a look!

* *hjall>s*
* *hjal00s*

* *rygg>s*
* *ryg00s*

* *hjall>ar*
* *hjall0ar*




* *all>t*
* *al00t*





## Verbal Sandhi rules

**Geminate Assimilation in Past Tense d** 

**Geminate Assimilation in Past Tense t** 

* *send>di*
* *sen00di*

* *hirð>di*
* *hir00di*


* *sett>ti*
* *set00ti*


**ð Assimilation in Front of Dental Past Suffix -d(i)** 

* *leið>di*
* *leid0di*


* *leið>di*
* *leid0di*

* *greið>di*
* *greid0di*


* *ryð^WVV>di*
* *rud00di*


**Deleting Double Consonant in Front of Epenthesis mark** 

* *summar^EPH>i*
* *sum00r00i*

* *himmal^EPH^UUML>um*
* *him00l000um*



**Deleting stem-final s in s genitive** 

* *primus>s*
* *primus00*

* *primus>s*
* *primus00*

* *grís>s*
* *grís00*


**Double ð Deletion** 


**ð Assimilation in Front of Supine Suffix -t** 

* *leið>t*
* *leit0t*

**Adjusting Dental Past Suffix -d(i)** 

* *keyp>di*
* *keyp0ti*

* *merk>di*
* *merk0ti*

## Adjectival sandhi rules

**Adjective neuter after nlr 1** 

**Adjective neuter after nlr 2** 

* *mikil^EPH>t*
* *miki000ð*

* *gamal^EPH>t*
* *gamal00t*

**t Deletion in Neuter** 



j rules

**Deleting j** 

* *kríggj^GDEL>num*
* *kríg0000num*

* *beiggj^JI>i*
* *beigg000i*

* *verkj^JDEL>ur*
* *verk000ur*

* *heyggj>i*
* *heygg00i*


**Realising j in front of vowels** 

* *hylj2>ar*
* *hylj0ar*




Vowel rules  


**Realising i2 as i** 


###  Epenthetic vowel rules

**Epenthetic deletion** 


* *økur^EPH^UUML>um*
* *øk0r000um*

* *lykil^EPH>an*
* *lyk0l00an*

* *aftan^EPH>*
* *aftan00*

* *vakin^EPH>ir*
* *vak0n00ir*



**U-umlaut of Epenthetic vowel** 

* *gamal^EPH^UUML*
* *gomul00*

* *gamal^EPH^UUML>u*
* *goml000u*


### Umlaut rules

**U-umlaut in Front of Nasal** 

* *tank^UUML*
* *tonk0*

* *band^UUML*
* *bond00*

* *hamar^EPH^UUML>um*
* *hom0r000um*

**General U-umlaut** 

* *dag^UUML>um*
* *døg00um*

* *sag^UUML>a*
* *søg00a*

* *all^UUML>*
* *øll00*


**U-umlaut for akur** 

* *akur^EPH^UUML>um*
* *øk0r000um*

**I-umlaut** 

* *dag^IUML>i*
* *deg00i*

* *son^IUML>i*
* *syn00i*

* *bógv^IUML>i*
* *bøg000i*

* *ung^IUMLr>i*
* *yng0r0i*

* *fjørð^IUML>i*
* *f0irð00i*



**eI-umlaut** for o:e, á:e, i:e

**I-umlaut for bróðir ** 


**Inverted U-umlaut from ø** 

* *fløtt^OEAa*
* *flatt0a*

**Inverted U-umlaut from o** 

* *fonn^OA>ar*
* *fann00ar*


**o/ei-Umlaut I** 

**o/ei-Umlaut II** 

* *dreing^EIO>i*
* *dro0ng00i*







### Vowel deletion rules

**Vowel deletion in front of na** 








### Verbal vowel alternation rules

**Stem vowel change in Weak Verbs** 

* *flek^WVV>t*
* *flak00t*

* *flek^WVV>t*
* *flak00t*

* *vel^WVV>di*
* *val00di*


**Stem Vowel Shortening in Supine and Participle** 

* *bít^VSHin>a*
* *bit00n>a*




**Past tense singular diphthongs I** 

**Past tense singular diphthongs II** 

* *b0ít^AB1*
* *beit0*


**Past tense singular monophthongs** 

* *gev^AB3*
* *gav0*

**Past tense plural monophthongs** 


**Past tense plural monophthongs to a** 



**Supine u** 


**Supine o** 


**Supine i** 


**Present tense ý** 




### Adjectival Sandhi rule

**Vowel shortening in Neuter** 

* *góð>t*
* *got0t*

* *skjót>t*
* *skjót0t*


## Other rules

### Morphological passive rules

**u in ur Deletion in front of Pass** 

**r Deletion in front of Pass** 

**ð Deletion in front of Pass** 



# Faroese Noun morphology 


# Basic noun lexica 

Taken from the dictionary

The nominal morphology is added in three layers.
In this **first layer** we add gender tags and morphophonological
diacritics.
The next two layers are for indefinite and definite
suffixes, respectively.


## Lexicons still to be allocated






## Irregular nouns

These are lexica with number 0, they have no inflectional morphology.

k0 for januar etc.

kv0 for ommudidd

h0 for indeclinable neuters

irregular_nouns just gives the tags for the indeclinables


## Lexica for words belonging to two paradigms.
These are simply split (h11/12 to h11 and h12, etc).












## The ordinary lexica
These lexica split into sg and pl lexica, and add +N and gender tags.
Thereafter it points to Layer 2, the case suffixes


### Weak masculines.


**k1** , risi, is the basic Msc lexicon, split in sg and pl

*k1e* for sg

*k_flt1* for pl


**k1_3stem** for 3-syllabic stams like *felagi*, mixed dative forms + UUML


**k2** beiggi

**k3** for  hagi

*k3e* for sg

*k_flt3* for pl

**k4** for  tanki, just pointing to k3 (identical)

**k5** for bóndi


### Strong masculines

**k6_null** for  antikrist

*k6e_null* for sg

**k6** for  úlvur

*k6e* for sg

*k_flt6* for pl


**k7** for  sandur

*k7e* for sg


*k_flt7* for pl

*k_flt8* for pl, pointing to k_flt7

*k8e* for sg, pointing to k7e

**k8** for  garður, pointing to k7, but has a different u-umlaut

*k_flt9* for pl

*k9e* for sg, pointing to k6e

**k9** with double consonant deletion in front of s, but pointing to k6

*k9e_2* for sg, pointing to k6e, and pointing to l24 *iskur

**k9_2** with double consonant deletion in front of s, but pointing to k6, and pointing to l24 *iskur



**k10** splitting in sg/pl

*k10e* for sg

*k_flt10* for pl


**k11** for ísur


*k11e* for sg

*k_flt11* for pl




**k12** for  vinur

**k12_bui** 

**k12_boe** 

*k12e* for sg

*k_flt12* for pl

*k13e* for sg, giving extra NULL dative then pointing to k12e

**k13** for  vegur
As k12, plus a zero dative

**k14** for  staður

*k14e* for sg

*k_flt14* for pl


**k15** for  gestur

*k15e* for sg

*k_flt15* for pl



**k16** having double Cns but pointing to k15

**k_flt17** giving UUML PLDAT and pointing to k_flt15


**k17** giving UUML Dat and pointing to k15


**k18** for  dansur

*k18e* for sg


*k_flt18* for pl

**k19** for  meldur



*k19e* for sg

*k_flt19* for pl


**k20** for  akur

*k20e* for sg

*k_flt20* for pl

**k_flt21** pointing to k_flt19



**k21** for  stuðul


**k22** for  himmal



**k23** for  róður

*k23e* for sg

*k_flt23* for pl















**k24** for  fløttur

**k25** for  vøllur

*k25e* for sg

*k_flt25* for pl

**k26** for  táttur

*k26e* for sg

*k_flt26* for pl

**k27** for  vøkstur

**k28** for  dráttur

*k28e* for sg

*k_flt28* for pl

**k29** for  tráður

**k30** for  fótur

*k30e* for sg

*k_flt30* for pl

**k31** for  veggur

*k31e* for sg

*k_flt31* for pl

**k32** for  ryggur, using k31e


**k33** for  hylur

**k34** for  drongur

*k34e* for sg

*k_flt34* for pl

**k34_2** for  bonkur  - formar skulu gerast fyri benk* og veng* í flt.

**k34_3** for  vongur  - formar skulu gerast fyri benk* og veng* í flt.


**k36** for  heyggjur

**k37** for  skógvur

*k37e* for sg


*k_flt37* for pl

**k38e_2** for  súgvur


**k38** for  bógvur

*k38e* for sg

*k_flt38* for pl

**k39** for  sjógvur

*k39e* for sg

*k_flt39* for pl

**k40e_2** for  hógvur2

**k40_3** for  skúgvur

**k40** for  hógvur

*k40e* for sg

*k_flt40* for pl

**k41** for  maður

*k41e* for sg

**k41_obl** for oblique, hmm, needed?

*k_flt41* for pl

**k42** for  dagur

*k42e* for sg

*k_flt42* for pl

**k43** for  faðir

*k43e* for sg

*k_flt43* for pl


**k44** for  bróðir, stem is ZERO

*k_flt44* for pl

**k45** for  spónur

*k45e* for sg

*k_flt45* for pl

**k46** for  fjørðu

*k46e* for sg

*k_flt46* for pl

**k47** for  sonur

*k47e* for sg

*k_flt47* for pl

**k48** for  hamar

*k48e* for sg

*k_flt48* for pl

**k49** for  verkur

*k49e* for sg

*k_flt49* for pl

**k50** for  skjøldur (non_poetic)

**k51** for  luður


**k52** for  primus

*k52e* for sg

*k_flt52* for pl

**k53** for  aðal



### Feminines











































































































































































###  Neuter forms




























































































































































































# Case inflection 

This is the second layer. Here we do indefinite
forms and compounds.

## Masculine forms

### Weak case suffixes.

Singular

**W_M_SGNOM** for weak masculines, pointing to definites

**W_M_SGACC** etc for risan

**W_M_SGDAT** for 

**W_M_SGDAT_mixed** for felagnum

**W_M_SGGEN** for 



Plural

**W_M_PLNOM** for -ar-

**W_M_PLNOM_UR** for -ur-

**W_M_PLACC** for -ar-

**W_M_PLACC_UR** for -ur-

**W_M_PLDAT** for -u-

**W_M_PLGEN** for -a-




### Strong case suffixes


Nominative Sg




Accusative Sg


Dative Sg








Plural forms

Nominative







Accusative







Dative






Feminine forms

Singular case suffixes.

Nominative



Oblique







Plural case suffixes








Neuter forms
singular













plural




















Definite inflection 

This is the **third layer**. Here we do the indefinite and definite forms.
These are common to (almost) all different paradigms, hence they are 
gathered here.

## Masculine forms

### Masc def sg

**DF_N_SGm** for 

**DF_N_SGm_indef** for 

**DF_N_SGm_def** for 

**DF_A_SGm** for 

**DF_A_SGm_indef** for 

**DF_A_SGm_def** for 

**DF_D_SGm** for 

**DF_G_SGm** for 


### Masc def pl

**DF_N_PLm** for 


**DF_N_PLm_indef** for 

**DF_N_PLm_def** for 

**DF_A_PLm** for 

**DF_A_PLm_indef** for 

**DF_A_PLm_def** for 



## Feminine forms

###  Fem Sg
**DF_N_SGf_W** for 

**DF_N_SGf_S** for 


**DF_A_SGf_W** for 

**DF_A_SGf_S** for 


**DF_D_SGf_W** for 

**DF_D_SGf_S** for 


**DF_G_SGf_W** for 

**DF_G_SGf_S** for 

### Feminine plural forms

**DF_NA_PLf** for *nar

**DF_NA_PLf_inar** for *inar


## Neuter forms

### Neuter sg











This concludes the nominal morphology.

The rest of the file contains **flags**, that govern
the ways stems may be combined.

# Compound flags


**MscNom_Flag** for 

**MscObl_Flag** for 

**FemNom_Flag** for 

**FemObl_Flag** for 

**Neu_Flag** for 

**Pl_Flag** for 


# Faroese noun stem file

The lexicon names are taken from
Føroysk orðabók I-II (FO). Reference is
made to Thráinsson & al ("fg").

Note that in some cases, the lexicon names and stems here
deviate from FO. In that case the lexica have names ending
in wordforms, written in capital lettes.

## Short lexica

**Shortnouns** for  1, 2 and 3 letter nouns excluded from compounding

These are now always excluded from lastpart compound
and in norm from first-part compounding as well









## The main list of nouns

Her kjem alle substantiva. Dei er baklengssortert.
leksikon som byrjar med x er ikkje manuelt sjekka.

**Nouns**

Fila inneheld i underkant av 50000 lemma.





















# Verb morphology !


**s1** nevna = riggar!


**s2** keypa = riggar!

**SETA** seta = riggar!



**s3** leiða = riggar!

**s4** frøa = riggar!

**s5** senda = riggar!

**s6** hirða = riggar!

**s7** gista = riggar!


**s8** kenna = riggar!

**s9** klippa = riggar!


**s10** fylgja = riggar!

**s11**  roykja = riggar!


**s12** boyggja = riggar!


**s13** søkkja = riggar!


**s14** heingja = riggar!


**s15** skeinkja = riggar!

**s15_2** steikja = riggar!

**s16** flekja = riggar!

**s17** berja = riggar!

**s18** krevja = riggar!

**s19** dylja = riggar!

**s20** leggja = riggar!

**s21** selja = riggar!

**s22** ryðja = riggar ikki í sup og prfptc!

**s22_1** ýðja = riggar!

**s23** smyrja = riggar!

**s24** flysa = riggar ikki í pass!

**s25** liva = riggar!


**s26** plaga = riggar (formurin plagdur manglar)!



**s26_1** mála->máldi

**s27** spáa = riggar!

**s28** skaða = riggar ikki í prfptc!

**s29** brúka = riggar!

**s30** kalla = riggar!

**s31** only gera and *gera = riggar!

**s32/30** útbúgva = riggar!

**s32** búgva = riggar!

**s33** rógva


**s34** goyggja = riggar!




## Strong verbs starting here

**s35** bíta riggar!

**s36** svíkja riggar!


**s37** bróta riggar!

**s38** skjóta riggar!


**s39d**

**s39s**

**s39** 

**s40** fúka

**s41** flúgva

**s42** klúgva

**s44** finna

**s45** binda = riggar!

**s46** stinga = riggar!

**s47** svimja = riggar ... men kanska skal tað ikki hava passiv


**s48** drekka = riggar ikki í adj pga dpkons

**s48_2** renna = riggar ikki í adj pga dpkons

**s49** detta = riggar ikki í adj pga dpkons

**s49_2** treffa = riggar ikki í adj pga dpkons

**s49_3** sleppa = riggar ikki í adj pga dpkons

**s49_4** verpa = riggar!

**s50** røkka = riggar ikki í adj pga dpkons

**s51** ganga = riggar!


**s52** veva = riggar!

**s53** leypa = riggar!

**s54** bera = riggar!

**s55** fara = riggar!

**s56** geva = riggar!

**s57** sita = riggar ikki + skal nokk ikki hava passiv

**s58** mala

**s59** stjala

**s60** taka, aka

**s61** halda

**s62** sova

**s63** koma

**s64** lata

**s64_1** láta

**s65** standa

**s66** biðja

**s67** draga

**s68** hvørva

**s69** sláa


**s70** siga

**s71** skerja

**s72** eta

**s73** læa


## Ad hoc, irregular

**BLÍVA**

**EIGA**

**EITA**

**GRÁTA**

**HAVA**

**KUNNA**

**MEGA**

**MUNNA**

**SKULA**

**TYKJA**

**VERA**

**VERÐA**


**VILJA**

**VITA**


**SÍGGJA**

**FÁA**

**NÁA** XXX check

**LIGGJA**


**RADA**

**BURDA**

**GJALDA**

**VALDA**

**FALLA**

**GJALLA**

**BREGDA**

**SYNGJA** XXX check



**HOGGA** høgga

**KVODA**



**FLYGGJA**


**VAKSA**

**VEKSA**


**s30/26_1** dáma

**HYGGJA**

**TYGGJA**

**MYLA**

**BLASA**

**TYSJA**

**GROA**

**KVOTTA**

**GALDA**






**TAKAST** 

**LOYPAST** loypast

**sxrefl** This is an ad hoc lexicon

**s74** grindast

**s75** balast

**s76** ræðast

**s77** skiftast

**s78** farast

**s79** skjótast

**s80** trivast

**s81** kíkjast

**s82** fýlast

**s83** samsinnast

**FYRIB** kopi, s83



## Split lexica












**s8/48_2**
**s9/30**





## Intermediate lexicon groups

**standard_ir**

**standard_ir_t**






**ir_verb**

**ir_verb_t**

## Suffix lexica

### Infinitive

**jinf**

**inf**

**reflinf**


### Present

**pres_ir**

**pres_ir_j2**

**pres_jir**

**pres_ir_sg**

**pres_ar**

**pres_ur**

**pres_iur**

**pres_ur_j**

**pres_ur_j2**


**pres_strong_s1**

**pres_strong_s23**

**pres_strong_s23_t**

**pres_strong_s23_t0**

**pres_strong_s23_t1**

**pres_pl**






**pres_ast**

**pres_ist**

**pres_1ist**

**pres_23st**

**pres_plast**




**pret_adist**

**pret_dist**

**pret_tist**

**pret_ist**

**pret_st**

**pret_plust**

**pret_pltust**

### Preterite

**prt_d**

**prt_ð**

**prt_t**


**prt_ði**

**prt_ti**

**prt_du**

**prt_tu**

**prt_ðu**

**prt_dd**

**prt_a**

**prt_null**

**prt_null_s**

**prt_null_s2**

**prt_null_s2_t**

**prt_u_p**


## Passive lexica















### Imperative and present participle

**imp_prsptc**

**imp_prsptc_j**

**imp**

**imp_j**

**impsg**

**imppl**

**imppl_j**

**prsptc**

### Supine and preterite participle

**sup**

**sup_t**

**sup_tt**

**sup_a** kalla

**sup_null**  stungið

**sup_in** kalla

**sup_ið_in**  stungið





### Middle lexicon

**VANDI**



## Perfect Participles !



**p18**

**p26**

**p26_2**


**p34_6**

**p34_7**


**p32**

**p39**

**p5pos**

**p5**

**p6**

**p7**

**p8**






# Faroese verbs 

**Verbs**

## Some irregular verbs
*mega, eiga, eita, gráta, ...* and 15 more


some irregular passive verbs: høggast, loypast









## The long verb list

The lexica listed here represent the declension patterns
presented in Føroysk orðabók. The lexicon names correspond to the
declension codes in the dictionary.


 * fakturera:fakturer s30 ;   
 * formturka:form#turk s30 ;   
 * svørja:svør s10 ;   
 * almannakunngera:al#manna#kunng s31 ;    
 * gjøgnumføra:gjøgnum#før s1 ;   
 * innføra:inn#før s1 ;   
 * útføra:út#før s1 ;   
 * innvíga:inn#víg s1 ;   
 * annleggja:ann#l s20 ;   ... and more than 6000 more.










Simple declension class verbs








Still to be classified




Double declension class verbs





Finally some candidates to be considered for verb compounding.

# Adjective morphology !

## Ad hoc lexica



## The lexicons



















































































































## Irregular adjectives








###  Irregular comparatives









# Intermediate adjectival lexica














Adjectival case lexica


































Msc

























Neu











###  Definite declension



Positiv, def, u-umlj
Msc

Fem



Neu


Positiv, def, ø-umlj
Msc

Fem
Neu



Gender tags





Case tags








Compound flags












# Comparative





















# Superlative
















# North Saami acronyms - affix part

## The lexica giving tags and suffixes to the acronyms




 * **LEXICON ACRONOUN   ** is the lexicon for **nouns** (not +Prop) like ATV

 * **LEXICON UNIT   **  As acro, but without paradigm









 * **LEXICON acroconnector   ** Here comes a set of possible symbols to
put between the abbreviation and its suffix

 * **LEXICON acronull   **  for suffixless forms, redirecting to K_only for clitic forms



# Symbol affixes





