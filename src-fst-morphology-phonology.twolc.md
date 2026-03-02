# The Faroese morphophonological file 

This file documents the [phonology.twolc file](http://github.com/giellalt/lang-fao/blob/main/src/fst/phonology.twolc) 

## Alphabet
Here we declare all symbols.

* **a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å** 
* **á é ó ú í à è ò ù ì ä ë ö ü ï â ê ô û î ã ý þ ñ ð ß ç** 

* **A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å** 
* **Á É Ó Ú Í À È Ò Ù Ì Ä Ë Ö Ü Ï Â Ê Ô Û Î Ã Ý þ Ñ Ð** 

* **a2:a** for invariant a, d.g. vulka2nskur -> vulkanskum
* **g2:g** for invariant g
* **i2:i** for invariant i
* **j2:j** for invariant j
* **t2:t** for invariant, non-deleted t, dráttri pro *drátri
* **v2:v** for invariant v

* **a3:a** a:ø for da3n -> dønum, where normal a:o.

* **%^UUML:0 %^IUML:0 %^eIUML:0 %^ØUML:0** : Umlaut types ,
* **%^W:0 %^JI:0** : Cns changes ,
* **%^EPH:0** : Epenthesis,  ,
* **%^OEA:0** : ø to a

* **%^GDEL:0 %^GGDEL:0 %^GVDEL:0 %^VDEL:0 %^JDEL:0 %^RDEL:0** : Cns deletion triggers,
* **%^AB1:0 %^AB2:0 %^AB3:0 %^AB4:0 %^AB5:0 %^AB6:0 %^AB7:0** : Ablaut series ,
* **%^aAB:0 %^uAB:0** : Ablaut series subcases
* **%>** : Suffix border

* **%[<%]** : Real less than
* **%[>%]** : Real greater than
* **«7** : Real quote mark
* **»7** : Real quote mark
* **« »** : Derivational morpheme borders
* **%-** : hyphen at word boundaries

## Sets
Here we define some convenient sets.

* **Vow = a e i o u y æ ø å** 
 **á é ó ú í à è ò ù ì ä ë ö ü ï â ê ô û î ã ý ;** 
* **Cns = b c d f g h j k l m n p q r s t v w x z ð þ ;** 
* **Nas = m n ;** 
* **NonNas = b c d f g h j k l p q r s t v w x z ð þ ;** 
* **Dummy = %^UUML %^IUML %^eIUML %^W %^EPH %^JI %^OEA** 
  **%^EDH %^VSH %^GDEL %^GGDEL %^GVDEL %^VDEL %^JDEL** 
 **%^RDEL %^EIO %^OA %^WVV %^NGKK %^AB1 %^AB2 %^AB3** 
 **%^AB4 %^AB5 %^AB6 %^AB7 %^aAB %^uAB %^PASS %> ;** 
* **Special = %^UUML %^IUML %^W %^EPH %^JI %^OEA %^GDEL %^GGDEL** 
 **%^GVDEL %^VDEL %^JDEL %^RDEL ;** 
Forgot why these are special...

# Rules
These are the rules. After each rule (or rather: after many of the rules) there are test cases that are there to test whether the rules work.

## Verschärfung

Rule: **Deleting g** 
* Deleting g in gv Verschärfung I
* Deleting first g in ggj Genitive I
* Deleting second g in ggj Genitive II
* Deleting g in sting:stakst

Rule: **ng to kk Part 1** changes n to k in ng:kk before ^NGKK trigger

Rule: **ng to kk Part 2** changes g to k in ng:kk before ^NGKK trigger

Rule: **Deleting v in gv sequences** Verschärverung II gives v:0 for gv:00 before ^GVDEL and in some other contexts

**Verschärfung tests:***

Rule: **Deleting r in Genitive of ur stems** 

Rule: **Deleting m in um%>num ** 

**Tests:**

Rule: **Deleting Double Consonant in Front of Consonant** 

The preceeding rule is fishy - the test cases below don't fit the context
requirements, and the >s# in the right context seems to indicate passive.
The rule conflicts with the "Cns Deletion in front of Pass" rule at the
end of the file - but only when using the Xerox tools! XXX - please have a look!

**Tests:**

## Verbal Sandhi rules

Rule: **Geminate Assimilation in Past Tense d** 

Rule: **Geminate Assimilation in Past Tense t** 

**Tests:**

Rule: **ð Assimilation in Front of Dental Past Suffix -d(i)** 

* *leið>di*
* *leid0di*

**Tests:**

Rule: **Deleting Double Consonant in Front of Epenthesis mark** 

**Tests:**

Rule: **Deleting stem-final s in s genitive** 

**Tests:**

Rule: **Double ð Deletion** 

Rule: **ð Assimilation in Front of Supine Suffix -t** 

**Tests:**

Rule: **Adjusting Dental Past Suffix -d(i)** 

**Tests:**

## Adjectival sandhi rules

Rule: **Adjective neuter after nlr 1** 

Rule: **Adjective neuter after nlr 2** 

**Tests:**

Rule: **t Deletion in Neuter** 

j rules

Rule: **Deleting j** 

**Tests:**

Rule: **Realising j in front of vowels** 

**Tests:**

Vowel rules  

Rule: **Realising i2 as i** 

**Tests:**

###  Epenthetic vowel rules

Rule: **Epenthetic deletion** 

**Tests:**

Rule: **U-umlaut of Epenthetic vowel** 

**Tests:**

### Umlaut rules

Rule: **U-umlaut in Front of Nasal** 

**Tests:**

Rule: **General U-umlaut** 

**Tests:**

Rule: **U-umlaut for akur** 

**Tests:**

Rule: **I-umlaut** 

**Tests:**

* *syn00i*

Rule: **eI-umlaut** for o:e, á:e, i:e

Rule: **I-umlaut for bróðir ** 

Rule: **Inverted U-umlaut from ø** 

**Tests:**

Rule: **Inverted U-umlaut from o** 

**Tests:**

Rule: **o/ei-Umlaut I** 

Rule: **o/ei-Umlaut II** 

**Tests:**

### Vowel deletion rules

Rule: **Vowel deletion in front of na** 

### Verbal vowel alternation rules

Rule: **Stem vowel change in Weak Verbs** 

**Tests:**

Rule: **Stem Vowel Shortening in Supine and Participle** 

**Tests:**

Rule: **Past tense singular diphthongs I** 

Rule: **Past tense singular diphthongs II** 

**Tests:**

Rule: **Past tense singular monophthongs** 

**Tests:**

Rule: **Past tense plural monophthongs** 

Rule: **Past tense plural monophthongs to a** 

Rule: **Supine u** 

Rule: **Supine o** 

Rule: **Supine i** 

Rule: **Present tense ý** 

### Adjectival Sandhi rule

Rule: **Vowel shortening in Neuter** 

**Tests:**

## Other rules

### Morphological passive rules

Rule: **u in ur Deletion in front of Pass** 

Rule: **r Deletion in front of Pass** 

Rule: **ð Deletion in front of Pass** 

* * *

<small>This (part of) documentation was generated from [src/fst/morphology/phonology.twolc](https://github.com/giellalt/lang-fao/blob/main/src/fst/morphology/phonology.twolc)</small>
