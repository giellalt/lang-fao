# Free and Open source Faroese analyser giella-fao

* **Authors**:  Divvun and Giellatekno teams, community members
* **Software version**:  2013
* **Documentation license**:  GNU GFDL
* **SVN Revision: $Revision**:  68217 $
* **SVN Date: $Date: 2013-01-16 11:31**: 33 +0200 (Wed, 16 Jan 2013) $

# giella-fao

This is free and open source Faroese morphology.
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
 * +Cmp +Superl						     : Comparison	
 * +Prs +Prt							     : Tense		
 * +1Sg +2Sg +3Sg						     : Person-Number
 * +Inf +PrfPrc +PrsPrc +Sup +Imp +Sbj	     : Verb forms	
 * +Cmpnd								     : Compound		
 * +Abbr +ACR							     : Abbreviations, acronyms ,
 * +CLB +PUNCT +LEFT +RIGHT			     : Punctuation, parentheses
 * +Symbol  : independent symbols in the text stream, like £, €, ©
 * +Err/Guess								 : Tag for Name Guesser component

 * +Der/heit   Derivation with -heit

 * +Ind +Pass +Interr +Ord  

## Semantic tags
 * +Sem/Sur   
 * +Sem/Mal   
 * +Sem/Fem   
 * +Sem/Plc   
 * +Sem/Org   
 * +Sem/Veh   
 * +Sem/Fem   

 * +Sem/Year         - year (i.e. 1000 - 2999), used only for numerals 

## Non-changing letters
 *  a2  This is for a special a Umlaut case
 *  g2 i2 j2 t2 v2   

 * +v1 +v2     : different paradigms   ,

## Triggers for Morphophonology
 * %^UUML %^IUML %^eIUML				 : Umlaut types ,
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

 * +Use/Disamb = Use only in disambiguator/tokeniser analyser
 * +Use/Circ = for compound restrictions

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

 *  %^UUML:0 %^IUML:0 %^eIUML:0    : Umlaut types ,
 *  %^W:0 %^JI:0                   : Cns changes ,
 *  %^EPH:0                        : Epenthesis,  ,
 *  %^OEA:0                        : 

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

**Deleting v in gv sequences** 

Verschärfung tests

* **bógv^IUML>i**
* **bøg000i**

* **flúgv^IUML^VDEL**
* **flýg000**

* **flúgv^VSH^VDEL>u**
* **flug0000u**

* **búgv^GVDEL>s**
* **bú0000s**

* **bógv^VDEL>s**
* **bóg000s**

* **skógv^GVDEL>m**
* **skó0000m**

* **skýggj^GGDEL>s**
* **ský00000s**

* **kríggj^GDEL>s**
* **kríg0000s**

* **sjógv^GDEL>ar**
* **sjó0v00ar**

**Deleting r in Genitive of ur stems** 

* **brúður^EPH^RDEL>ar**
* **brúð00000ar**

**Deleting m in um%>num** 

* **ris>um>num**
* **ris00u000num**

* **skógv>m>num**
* **skó0000000num**

**Deleting Double Consonant in Front of Consonant** 

The preceeding rule is fishy - the test cases below don't fit the context
requirements, and the >s# in the right context seems to indicate passive.
The rule conflicts with the "Cns Deletion in front of Pass" rule at the
end of the file - but only when using the Xerox tools! XXX - please have a look!

* **all>t**
* **al00t**

* **hjall>s**
* **hjal00s**

* **rygg>s**
* **ryg00s**

* **hjall>ar**
* **hjall0ar**

## Verbal Sandhi rules

**Geminate Assimilation in Past Tense d** 

**Geminate Assimilation in Past Tense t** 

* **send>di**
* **sen00di**

* **hirð>di**
* **hir00di**

* **sett>ti**
* **set00ti**

**ð Assimilation in Front of Dental Past Suffix -d(i)** 

* **leið>di**
* **leid0di**

**Deleting Double Consonant in Front of Epenthesis mark** 

* **summar^EPH>i**
* **sum00r00i**

* **himmal^EPH^UUML>um#**
* **him00l000um0**

**Deleting stem-final s in s genitive** 

* **primus>s**
* **primus00**

* **primus>s**
* **primus00**

* **grís>s**
* **grís00**

**Double ð Deletion** 

**ð Assimilation in Front of Supine Suffix -t** 

* **leið>t**
* **leit0t**

**Adjusting Dental Past Suffix -d(i)** 

* **keyp>di**
* **keyp0ti**

## Adjectival sandhi rules

**Adjective neuter after nlr 1** 

**Adjective neuter after nlr 2** 

* **mikil^EPH>t**
* **miki000ð**

* **gamal^EPH>t**
* **gamal00t**

**t Deletion in Neuter** 

**ng to kk Part 1** 

**ng to kk Part 2** 

j rules

**Deleting j** 

* **kríggj^GDEL>num**
* **kríg0000num**

* **beiggj^JI>i**
* **beigg000i**

* **verkj^JDEL>ur**
* **verk000ur**

* **heyggj>i**
* **heygg00i**

**Realising j in front of vowels** 

* **hylj2>ar**
* **hylj0ar**

Vowel rules  

**Realising i2 as i** 

###  Epenthetic vowel rules

**Epenthetic deletion** 

* **økur^EPH^UUML>um**
* **øk0r000um**

* **lykil^EPH>an**
* **lyk0l00an**

* **aftan^EPH>**
* **aftan00**

* **vakin^EPH>ir**
* **vak0n00ir**

**U-umlaut of Epenthetic vowel** 

* **gamal^EPH^UUML**
* **gomul00**

* **gamal^EPH^UUML>u**
* **goml000u**

### Umlaut rules

**U-umlaut in Front of Nasal** 

* **tank^UUML**
* **tonk0**

* **band^UUML**
* **bond00**

* **hamar^EPH^UUML>um**
* **hom0r000um**

**General U-umlaut** 

* **dag^UUML>um**
* **døg00um**

* **sag^UUML>a**
* **søg00a**

* **all^UUML>**
* **øll00**

**U-umlaut for akur** 

* **akur^EPH^UUML>um**
* **øk0r000um**

**I-umlaut** 

* **dag^IUML>i**
* **deg00i**

* **son^IUML>i**
* **syn00i**

* **bógv^IUML>i**
* **bøg000i**

* **ung^IUMLr>i**
* **yng0r0i**

* **fjørð^IUML>i**
* **f0irð00i**

**eI-umlaut** for o:e, á:e, i:e

**I-umlaut for bróðir** 

**Inverted U-umlaut from ø** 

* **fløtt^ØAa**
* **flatt0a**

**Inverted U-umlaut from o** 

* **fonn^OA>ar**
* **fann00ar**

**o/ei-Umlaut I** 

**o/ei-Umlaut II** 

* **dreing^EIO>i**
* **dro0ng00i**

### Vowel deletion rules

**Vowel deletion in front of na** 

**u Deletion in unum after Stressed Vowel** 

* **bý>unum**
* **by00num**

### Verbal vowel alternation rules

**Stem vowel change in Weak Verbs** 

* **flek^WVV>t**
* **flak00t**

* **flek^WVV>t**
* **flak00t**

* **vel^WVV>di**
* **val00di**

**Stem Vowel Shortening in Supine and Participle** 

**Past tense singular diphthongs I** 

**Past tense singular diphthongs II** 

**Past tense singular monophthongs** 

* **gev^AB3**
* **gav0**

**Past tense plural monophthongs** 

**Past tense plural monophthongs to a** 

**Supine u** 

**Supine o** 

**Supine i** 

**Present tense ý** 

### Adjectival Sandhi rule

**Vowel shortening in Neuter** 

* **góð>t**
* **got0t**

* **skjót>t**
* **skjót0t**

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

* @NO CODE@ felagi
__k1_3stem__ for 3-syllabic stams, mixed dative forms + UUML

**k2** beiggi

**k3** for  hagi

*k3e* for sg

*k_flt3* for pl

**k4** for  tanki, just pointing to k3 (identical)

**k5** for bóndi

### Strong masculines

__k6_null__ for  antikrist

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

**k10** splitting in sg/pl

*k10e* for sg

*k_flt10* for pl

**k11** for ísur

*k11e* for sg

*k_flt11* for pl

**k12** for  vinur

__k12_boe__ 

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

__k_flt17__ giving UUML PLDAT and pointing to k_flt15

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

__k_flt21__ pointing to k_flt19

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

**k36** for  heyggjur

**k37** for  skógvur

*k37e* for sg

*k_flt37* for pl

**k38** for  bógvur

*k38e* for sg

*k_flt38* for pl

**k39** for  sjógvur

*k39e* for sg

*k_flt39* for pl

**k40** for  hógvur

*k40e* for sg

*k_flt40* for pl

**k41** for  maður

*k41e* for sg

__k41_obl__ for oblique, hmm, needed?

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

# Case inflection 

This is the second layer. Here we do indefinite
forms and compounds.

## Masculine forms

### Weak case suffixes.

Singular

__W_M_SGNOM__ for weak masculines, pointing to definites

__W_M_SGACC__ etc for risan

__W_M_SGDAT__ for 

__W_M_SGDAT_mixed__ for felagnum

__W_M_SGGEN__ for 

Plural

__W_M_PLNOM__ for -ar-

__W_M_PLNOM_UR__ for -ur-

__W_M_PLACC__ for -ar-

__W_M_PLACC_UR__ for -ur-

__W_M_PLDAT__ for -u-

__W_M_PLGEN__ for -a-

### Strong case suffixes

Nominative Sg

Accusative Sg

Dative Sg

Plural forms

Nominative

Definite inflection 

This is the **third layer**. Here we do the indefinite and definite forms.
These are common to (almost) all different paradigms, hence they are 
gathered here.

## Masculine forms

### Masc def sg

__DF_N_SGm__ for 

__DF_N_SGm_indef__ for 

__DF_N_SGm_def__ for 

__DF_A_SGm__ for 

__DF_A_SGm_indef__ for 

__DF_A_SGm_def__ for 

__DF_D_SGm__ for 

__DF_G_SGm__ for 

### Masc def pl

__DF_N_PLm__ for 

__DF_N_PLm_indef__ for 

__DF_N_PLm_def__ for 

__DF_A_PLm__ for 

__DF_A_PLm_indef__ for 

__DF_A_PLm_def__ for 

## Feminine forms

###  Fem Sg
__DF_N_SGf_W__ for 

__DF_N_SGf_S__ for 

__DF_A_SGf_W__ for 

__DF_A_SGf_S__ for 

__DF_D_SGf_W__ for 

__DF_D_SGf_S__ for 

__DF_G_SGf_W__ for 

__DF_G_SGf_S__ for 

### Feminine plural forms

__DF_NA_PLf__ for 

## Neuter forms

### Neuter sg

This concludes the nominal morphology.

The rest of the file contains **flags**, that govern
the ways stems may be combined.

# Compound flags

__MscNom_Flag__ for 

__MscObl_Flag__ for 

__FemNom_Flag__ for 

__FemObl_Flag__ for 

__Neu_Flag__ for 

__Pl_Flag__ for 

# Faroese noun stem file 

The lexicon names are taken from
Føroysk orðabók I-II (FO). Reference is
made to Thráinsson & al ("fg"). 

Note that in some cases, the lexicon names and stems here
deviate from FO. In that case the lexica have names ending
in wordforms, written in capital lettes.

## Short lexica

**Shortnouns** for  1- and 2-letter nouns excluded from compounding

These are now always excluded from lastpart compound 
and in norm from first-part compounding as well

## The main list of nouns

Her kjem alle substantiva. Dei er baklengssortert.
leksikon som byrjar med x er ikkje manuelt sjekka.

**Nouns** 

Fila inneheld i underkant av 50000 lemma.
