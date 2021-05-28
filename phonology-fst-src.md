# The Faroese morphophonological file 

## Alphabet
Here we declare all symbols.

 * ** a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å   ** 
 * ** á é ó ú í à è ò ù ì ä ë ö ü ï â ê ô û î ã ý þ ñ ð ß ç       ** 

 * ** A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å   ** 
 * ** Á É Ó Ú Í À È Ò Ù Ì Ä Ë Ö Ü Ï Â Ê Ô Û Î Ã Ý þ Ñ Ð           ** 


 * ** a2:a  **  for da2n -> dønum
 * ** g2:g  ** for invariant g
 * ** i2:i  ** for invariant i
 * ** j2:j  ** for invariant j
 * ** t2:t  ** for invariant, non-deleted t, dráttri pro *drátri
 * ** v2:v  ** for invariant v

 * ** %^UUML:0 %^IUML:0 %^eIUML:0 %^ØUML:0   ** : Umlaut types ,
 * ** %^W:0 %^JI:0                  ** : Cns changes ,
 * ** %^EPH:0                       ** : Epenthesis,  ,
 * ** %^OEA:0                       ** : ø to a

 * ** %^GDEL:0 %^GGDEL:0 %^GVDEL:0 %^VDEL:0 %^JDEL:0 %^RDEL:0 	** : Cns deletion triggers,
 * ** %^AB1:0 %^AB2:0 %^AB3:0 %^AB4:0 %^AB5:0 %^AB6:0 %^AB7:0	** : Ablaut series ,
 * ** %^aAB:0 %^uAB:0	** : Ablaut series subcases
 * ** %>:0 	** : Suffix border

 * ** « » 	** : hmm, in use?

## Sets
Here we define some convenient sets.


 * ** Vow = a e i o u y æ ø å                                ** 
  **       á é ó ú í à è ò ù ì ä ë ö ü ï â ê ô û î ã ý ;    ** 
 * ** Cns = b c d f g h j k l m n p q r s t v w x z ð þ ;    ** 
 * ** Nas = m n ;                                            ** 
 * ** NonNas = b c d f g h j k l p q r s t v w x z ð þ ;     ** 
 * ** Dummy = %^UUML %^IUML %^eIUML %^W %^EPH %^JI %^OEA     ** 
 * ** %^EDH %^VSH %^GDEL %^GGDEL %^GVDEL %^VDEL %^JDEL       ** 
  ** %^RDEL %^EIO %^OA %^WVV %^NGKK %^AB1 %^AB2 %^AB3       ** 
  ** %^AB4 %^AB5 %^AB6 %^AB7 %^aAB %^uAB %^PASS %> ;        ** 

 * ** Special =  %^UUML %^IUML %^W %^EPH %^JI %^OEA %^GDEL %^GGDEL    ** 
  **            %^GVDEL %^VDEL  %^JDEL %^RDEL ;                      ** 
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



