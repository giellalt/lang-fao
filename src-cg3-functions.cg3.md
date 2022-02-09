
S Y N T A C T I C   F U N C T I O N S   F O R   F A R O E S E

Sámi language technology project 2003-2014, University of Tromsø # 

This file adds syntactic functions. It was copied from sme.

Syntactic sets

* <cs> : 
* @+FAUXV : finite auxiliary verb 
* @+FMAINV : finite main verb
* @-F<OBJ : Subject of infinite verb outside the verbal.
* @-F<PRED : Predicative complement of infinite verb outside the verbal.
* @-FADVL : Adverbial complement of infinite verb outside the verbal.
* @-FAUXV : infinite auxiliary verb
* @-FMAINV : infinite main verb
* @-FOBJ> : Object of infinite verb outside the verbal.
* @-FSUBJ> : Subject of infinite verb outside the verbal.
* @<ADVL : Adverbial after the main verb.
* @<OBJ : Object, the verb is to the left.
* @<OPRED : Object predicative, the verb is to the left.
* @<SPRED : Subject predicative, the verb is to the left.
* @<SUBJ : Subject, the finite verb is to the left.
* @>A : Modifier of an adjective to the right.
* @>ADVL : Modifier of an adverbial to the right.
* @>N : Modifier of a noun to the right.
* @>Num : Attribute of numeral to the right.
* @>Pron : Modifyer of pronoun to the right.
* @ADVL< : Komplement for adverbial.
* @ADVL> : Adverbial to the left of the main verb
* @ADVL>CS : Adverbial modifying subjunction.
* @APP : Apposition
* @APP-ADVL< : Apposition to adverbial to the left.
* @APP-N< : Apposition to noun to the left.
* @APP-Num< : Apposition to numeral to the left.
* @APP-Pron< : Apposition to pronoun to the left.
* @APP>Pron : Apposition to noun to the right.
* @CMPND
* @CNP : Local conjunction or subjunction.
* @COMP-CS< : Complement of subjunction.
* @CVP : Conjunction or subjunction that conjoins finite verb phrases.
* @HNOUN : Stray noun in sentence fragment.
* @INTERJ : Interjection.
* @N< : Complement of noun to the left.
* @Num< : Complement of numeral to the left.
* @OBJ : Object, the verb is not in the sentence (ellipse)
* @OBJ> : Object, the verb is to the right.
* @OPRED : Object predicative, the verb is not in the sentence (ellipse).
* @OPRED> : Object predicative, the verb is to the right.
* @P< : Complement of preposition.
* @PCLE : Particle.
* @PPRED : Predicative for predicative.
* @Pron< : Complement of pronoun to the left.
* @SPRED : Subject predicative, the verb is not in the sentence (ellipse).
* @SPRED<OBJ : Object of an subsject predicative. (some adjectives are transitive)
* @SPRED> : Subject predicative, the verb is to the left.
* @SUBJ : Subject, the finite verb is not in the sentence (ellipse).
* @SUBJ> : Subject, the finite verb is to the right.
* @VOC : Vocative
* @X : The function is unknown, e.g. because of that the word is unknown

* NP sets defined according to their morphosyntactic features

* The PRE-NP-HEAD family of sets

These sets model noun phrases (NPs). The idea is to first define whatever can
occur in front of the head of the NP, and thereafter negate that with the
expression __WORD - premodifiers__.

The set __NOT-NPMOD__ is used to find barriers between NPs.
Typical usage: ... (*1 N BARRIER NPT-NPMOD) ...
meaning: Scan to the first noun, ignoring anything that can be
part of the noun phrase of that noun (i.e., "scan to the next NP head")

HNOUN MAPPING

The leftovers are tagged @X

! __missingX__ adds @X to all missings

! __therestX__ adds @X to all what is left, often errouneus disambiguated forms

* * *

<small>This (part of) documentation was generated from [src/cg3/functions.cg3](https://github.com/giellalt/lang-fao/blob/main/src/cg3/functions.cg3)</small>

---

