
   S Y N T A C T I C   F U N C T I O N S   F O R   S Á M I

 Sámi language technology project 2003-2018, University of Tromsø #

This file adds syntactic functions. It is common for all the Saami













LEFT RIGHT because of apertium



* Sets for POS sub-categories





* Sets for Semantic tags













* Sets for Morphosyntactic properties

































## Syntactic tags

* @+FAUXV : finite auxiliary verb 
    - ferte: Son ferte oaidnit ollislaš gova. - She must see the whole picture.
* @+FMAINV : finite main verb
    - oaidná: Son oaidná ollislaš gova. - She sees the whole picture	
* @-FAUXV : infinite auxiliary verb
    - sáhte: In sáhte gáhku borrat. - I cannot eat cake.	
* @-FMAINV : infinite main verb
    - oaidnit: Son ferte oaidnit ollislaš gova. - She must see the whole picture.
* @-FSUBJ> : Subject of infinite verb outside the verbal.
    - mu: Diet dáhpáhuvai mu dieđikeahttá. - It happened without me knowing about it.
* @-F<OBJ : Subject of infinite verb outside the verbal.
    - nuppi: Ulbmil lea oažžut nuppi boagustit. - The goal is to get the other one to laugh.
* @-FOBJ> : Object of infinite verb outside the verbal.
    - váldovuoittuid: Sii vurde váldovuoittuid fasket. - They waited to grab the main prizes.
* @SPRED<OBJ : Object of an subsject predicative. (some adjectives are transitive)
    - guliid: Mánát leat oažžulat guliid.
* @-FADVL : Adverbial complement of infinite verb outside the verbal.
    - várrogasat: Dihkkadeaddji rávve skohtervuddjiid várrogasat mátkkoštit. - The roadman warns snowscooter drivers to drive carefully.
* @-F<PRED : Predicative complement of infinite verb outside the verbal.
    - ággan: Jáhkken kulturmáhtu leat oktan ággan.
* @>ADVL : Modifier of an adverbial to the right.
    - vaikko: doppe leat vaikko man ollu studeanttat.
* @ADVL< : Komplement for adverbial.
    - vahkus: Son málesta guktii vahkus.
* @<ADVL : Adverbial after the main verb.
    - dás: Eanet dieđuid gávnnat dás.
* @ADVL> : Adverbial to the left of the main verb
    - viimmat: Dál de viimmat asttan lohkat reivve.
* @ADVL>CS : Adverbial modifying subjunction.
    - 'beare' pointing at 'danin go': Muhto dus ii leat riekti dearpat su beare danin go sáhtát.
* <hab> : Habitive, specifying an adverbial, e.g. @ADVL> <hab>
    - Máhtes: Máhtes lea beana.
* <ext> : Extencial, specifying an subject, e.g. @<SUBJ <ext>
    - beana: Máhtes lea beana.
* <logo> : logoforic pronouns, e.g. @>N <logo> (for MT)
* <cs> : 
* @>N : Modifier of a noun to the right.
    - geavatlaš: Ráđđehussii lea geavatlaš politihkka deaŧalaš. - For the government, practical politics is important.
* @N< : Complement of noun to the left.
    - vihtta: Mun boađán diibmu vihtta.
* @>A : Modifier of an adjective to the right.
    - juohke: Seminára lágiduvvo juohke nuppi jagi.
* @P< : Complement of preposition.
    - soađi: Dat dáhpáhuvai maŋŋel soađi.
* @>P : Complement of postposition.
    - riegádeami: Seta riegádeami maŋŋel Áttán elii vel 800 jagi.
* @HNOUN : Stray noun in sentence fragment.
    - muittut: Fidnokurssa muittut.
* @INTERJ : Interjection.
    - Hei: Hei, boađe!
* @>Num : Attribute of numeral to the right.
    - dušše: Mun ledjen dušše guokte mánu doppe.
* @Pron< : Complement of pronoun to the left.
    - Birehiin: Moai Birehiin leimme doppe.
* @>Pron : Modifyer of pronoun to the right.
    - vaikko: Olmmoš sáhttá bargat vaikko maid.
* @Num< : Complement of numeral to the left.
    - girjjiin: Dat lea okta min buoremus girjjiin.
* @OBJ : Object, the verb is not in the sentence (ellipse)
* @<OBJ : Object, the verb is to the left.
    - gávtti: Son goarru gávtti.
* @OBJ> : Object, the verb is to the right.
    - filmma: Dán filmma leat Kárášjoga nuorat oaidnán.
* @OPRED : Object predicative, the verb is not in the sentence (ellipse).
* @<OPRED : Object predicative, the verb is to the left.
    - buriid: Son ráhkada gáhkuid hui buriid.
* @OPRED> : Object predicative, the verb is to the right.
    - dohkkemeahttumin: Son oinnii dohkkemeahttumin bargat ášši nu.
* @PCLE : Particle.
    - Amma: Amma mii eat leat máksán? - We have not paid, have we?
* @COMP-CS< : Complement of subjunction.
    - vejolaš: Dat šaddá nu buorre go vejolaš.
* @SPRED : Subject predicative, the verb is not in the sentence (ellipse).
* @<SPRED : Subject predicative, the verb is to the left.
    - árgabivttas: Ovdal lei gákti árgabivttas.
* @SPRED> : Subject predicative, the verb is to the left.
    - álbmogin: Sápmelaččaid historjá álbmogin lea duháhiid jagiid boaris.
* @SUBJ : Subject, the finite verb is not in the sentence (ellipse).
* @<SUBJ : Subject, the finite verb is to the left.
    - gákti: Ovdal lei gákti árgabivttas.
* @SUBJ> : Subject, the finite verb is to the right.
    - Son: Son lea mu oabbá. - Sheis my sister.
* @PPRED : Predicative for predicative.
* @APP : Apposition
* @APP-N< : Apposition to noun to the left.
    - oahpaheaddji: Oidnen Ánne, min oahpaheaddji.
* @APP-Pron< : Apposition to pronoun to the left.
    - boazodoalloáirasat: Ja moai boazodoalloáirasat áigguime vaikko guovttá joatkit barggu.
* @APP>Pron : Apposition to noun to the right.
* @APP-Num< : Apposition to numeral to the left.
* @APP-ADVL< : Apposition to adverbial to the left.
    - bearjadaga: Mun vuolggán ihttin, bearjadaga.
* @VOC : Vocative
    - Miss Turner : Bures boahtin deike, Miss Turner! - Welcome her, Miss Turner!
* @CVP : Conjunction or subjunction that conjoins finite verb phrases.
    - go : Leago guhkes áigi dassá go Máreha oidnet? - Is it a long time since you saw Máret?
* @CNP : Local conjunction or subjunction.
    - vai : Leago nieida vai bárdni? - Is it a girl or a boy?
* @CMPND
* @X : The function is unknown, e.g. because of that the word is unknown











## Tag sets


































































































* Sets for verbs


    - V is all readings with a V tag in them, REAL-V should
be the ones without an N tag following the V.
The REAL-V set thus awaits a fix to the preprocess V ... N bug.



* The set COPULAS is for predicative constructions







* NP sets defined according to their morphosyntactic features







* The PRE-NP-HEAD family of sets

These sets model noun phrases (NPs). The idea is to first define whatever can
occur in front of the head of the NP, and thereafter negate that with the
expression **WORD - premodifiers**.












The set **NOT-NPMOD** is used to find barriers between NPs.
Typical usage: ... (*1 N BARRIER NPT-NPMOD) ...
meaning: Scan to the first noun, ignoring anything that can be
part of the noun phrase of that noun (i.e., "scan to the next NP head")






* Miscellaneous sets























* Border sets and their complements











ADLVCASE




* Syntactic sets





These were the set types.





## Numeral outside the sentence




## HABITIVE MAPPING






* **hab1** hab aux leat

* __hab_numo1__ hab copula comma comma N+Nom

* __hab_numo2__ copula nu mo/go hab


* **leahab** copula nu mo/go hab

* **hab2** hab auxv adv leat

* **hab3** (<hab> @ADVL>) for asdf hab-actor and hab-case; if leat to the right, and Nom to the right of leat. Lots of restrictions.

* **hab3** (<hab> @ADVL>) for asdf hab-actor and hab-case; if leat to the right, and Nom to the right of leat. Lots of restrictions.

* **hab3** (<hab> @ADVL>) for asdf hab-actor and hab-case; if leat to the right, and Nom to the right of leat. Lots of restrictions.

* **hab3** (<hab> @ADVL>) for hab-actor and hab-case; if leat to the right, and Nom to the right of leat. Lots of restrictions.





* __hab_main__ (<hab> @ADVL>) for hab-actor and hab-case; if leat to the right, and Nom to the right of leat. Lots of restrictions.


* **habInf** hab lea inf

* **habNomLeft** Nom or Num + gen hab lea

* **habAdvl** Ii han ovttasge du sogas leat dat namma.

* **hab4** hab cc hab leat



* **hab6** lea go hab -- leago hab

* **hab7** lea go hab

* **hab8** This is not HAB Ellii šattai hoahppu.
* **hab5**  This is not HAB Mánás gollot gieđat.

* **hab9** prop ord-hab leat

* **hab10** prop ord-hab leat

* **habDain** (<hab> @ADVL>) for (Pron Dem Pl Loc) if leat followed by Nom to the right
* **habDain2** 


* **habRel** # before relative clause

* **habEllipse** Buot gánddain lea dreassa, nieiddain fas gákti.

* **habGen** (<hab> @<ADVL) hab for Gen; if Gen is located in the end of the sentence and Nom is sentence initial

* **habGenQst** (<hab> @<ADVL) hab for Gen; in a question sentence. Gen is located sentence initially and SUBJ is found to the right. To the right of SUBJ is copulas

















* **n<titel1** (@N<) for ("jr") or ("sr"); if first one to the left is Prop



* **n<titel2** (@N<) for INITIAL; if first one to the left is a noun, or if to the left of you is a single letter which is part of a noun conjunction *bustávas e ja f gáibiduvvo*


* **n<:com** (@N<) for (Sg Com); if first one to the left is Coll










* **>nAttr** (@>N) for Attr; if there is a noun to your right

* **n>Indef** (Pron Indef Attr); if eará is to the right

* **n>Indef** (Pron Indef Com); if eará is to the right


* **>nNum** (@>N) for numerals if; there is a noun to your right. You are not allowed to be (Sg Nom), (Sg Acc) or (Sem/Date)




* **noun>n** (@>N) for Gen; if there is a noun to your right. Restrictions: Not if you are: a time related word. Not if you are OKTA with Pl Loc to your right. Not if CC is to your right followed by another Gen and then Po. Not if you are HUMAN and to your right is Actio Nom folloed by a noun.










* **>nTime** (@>N) for Gen TIME-N; if timenoun to your right. Restrictions: Not if you are a OKTA Nom with Pl Loc to your right. Not if CC followed by Gen, followed by Po to your right. Not if COMMA to your right




* **>ntittel** (@>N) for (Sg Nom TIME-N) or (Nom Der/NomAg); if to your right is Sem/Mal, Sem/Fem, Sem/Sur

* **>nplc** (@>N) for (Sg Nom Prop Sem/Plc), if to your right is Sem/Plc


* **>nALU** (@>N) for Sg Acc numerals; when a measure-noun to the right



* **>NTime** (@>N) for Gen; if you are TIME-N with BOC to your left, and PREGEN to your right



* **n<:Refl** (@N<) for (Refl Nom); if to the left is (N Nom), or if first one to the left is a finite mainverb with a (N Nom) to the left


* **>pron1** (@>Pron) for GRADE-ADV, DUSSE, BUOT if; first one to the right is Pron

* **>pron2** (@>Pron) for (Refl Nom) if; first one to the right is Refl

* **>pron3** (@>Pron) for (Pron Recipr) if; first one to the right is (Pron Recipr)

* **vaikko** (@>Pron) for vaikko if; first one to the right is Indef

* **vaikkoman** (@>ADVL) for vaikko if; first one to the right is man

* **dasmaŋŋel** (@>ADVL) for vaikko if; first one to the right is man

* **adv>advl** (@>ADVL) 

* **adv>advl** (@>ADVL) 






* **BOSvoc** (@VOC) for HUMAN Nom; if sentence initial. To the right is comma. No nom-cased HUMAN followed by comma or CC is allowed to the right. There should not be a relative clause to the right, because then you are likely to be SUBJ



















* **voc** (@VOC) for Nom HUMAN; if comma to the left and an second person verb or pronoun to the left. To the right is the end of the sentence
































* **Particle<subj** (@PCLE)


* **spred<obj** (@SPRED<OBJ) for Acc; the object of an SPRPED. Not to be mistaken with OPRED. If SPRED is to the left, and copulas is to the left of it. Nom or Hab are found sentence initially.






* **Hab<subj** (<ext> @<SUBJ) for Nom; if copulas, goallut or jápmit is FMAINV and habitive or human Loc is found to the left. OR: if Ill or @Pron< followed by HAB are found to the left.



* **Hab<subj** (<ext> @<SUBJ) with relative clause in between


* **Hab>Advlcase<subj** (<ext> @<SUBJ) for Nom; it allows adverbials with Ill/Loc/Com/Ess to be found inbetween HAB and <ext>.

* **Nom>Advlcase<subj** (<ext> @<SUBJ) for Nom; it allows adverbials with Ill/Loc/Com/Ess to be found inbetween Nom and <ext> @<SUBJ.

* **<extSubj** (<ext> @<SUBJ) for Nom; if copulas to the left, and some kind of adverb, N Loc, time related word or Po to the left of it. OR: if Ill or @Pron< to the left, followed by copulas and the before mentioned to the left of copulas.

* **<extSubj** (<ext> @<SUBJ) for sma Nom; if some kind of adverb to the left, N Loc, time related word or Po to the left of it. 


* **<extSubjA** (<ext> @<SUBJ) for A - TEST WITHOUT THIS ONE

* **<extSubj** (<ext> @<SUBJ) for Nom; if leat to the left and sentenceboundary



* **<extSubj** (<ext> @<SUBJ) for Nom, but not for Pers. To the left boahtit or heaŋgát as MAINV, and futher to the left is some kind of place related word, or time related word

* **loc<extSubj** (<ext> @<SUBJ) for Nom

* **<spred** (@<SPRED) for Nom; if Nom to the left, copulas to the left of Nom, and a time related word to the left of it.


* **<extQst1** (<ext> @<SUBJ) for Nom; in an existential sentence. To your left is hab, some kind of place or time-word or Po. This is a Qst-sentence so the qst-pcle is attached to leat or following leat

* **<extQst2** (<ext> @<SUBJ) for Nom; in an existential sentence. To your left is leat and it is sentence initial. No attributes or other words are allowed inbetween (because then you are SPRED), except the attribute muhtun, muhtin

* **extQst3>** (<ext> @SUBJ>) for Nom; if habitive first one to the left, followed by copulas.

* **extQst3>** (<ext> @SUBJ>) for Nom; if habitive first one to the left, followed by copulas.


* **<extsubjcoor** (<ext> @<SUBJ) for Nom. Coordination

* Sem/Year








* **<spredQst** (@<SPRED) for Nom; in a typically question sentence; You are not allowed to be Pers or human. The special part is that Nom is not allowed to your right

* **<spredQst2** (@<SPRED) for (A Nom); in a typically question sentence; You are SPRED if (N Nom) is to your left and leat + qst is to the left

* **<spredQst3** (@<SPRED) for (A Nom); you are SPRED when you are (A Nom) and to your right is (N Nom). This is a Qst-sentence, so copulas is found to your left

* **<spredQst4** (@<SPRED) for Nom; but only in a qst-sentence where there is no chance of you beeing the subj

* **<NomBeforeSpred** (@<SPRED) for (A Nom) if; Nom to the left, and copulas is to the left of Nom. There is no Nom allowed to the right of copulas! To avoid messing with coordination: ja, dahje and comma are not allowed to your left. Comma is not allowed to your right; if so then you are likely to be coordinated

* **<spred** (@<SPRED) for A Nom or N Nom if; the subject Nom is on the same side of copulas as you: on the right side of copulas

* **<spredVeara** (@<SPRED) for veara + Nom; if genitive immediately to the right, and intransitive mainverb to the right of genitive

* **leftCop<spred** (@<SPRED) for Nom; if copulas is the main verb to the left, and there is no Ess found to the left of cop (note that Loc is allowed between target and cop). OR: if you are Coll or Sem/Group with copulas to your left.

* **<spredLocEXPERIMENT** (@<SPRED) for material Loc; if you are to the right of copulas, and the Nom to the left of copulas is not a hab-actor

* **NumTime** (@<SPRED) for A Nom

* **<spredSg** (@<SPRED) for Sg Nom

* **<spredPg** (@<SPRED) for Pl Nom

* **<spred** (@<SPRED) for Nom; if copulas to the left, and Nom or sentence boundary to the left of copulas. First one to the right is EOS.

* **COP<spredEss** (@<SPRED) for N Ess

* **spredEss>** (@SPRED>) for N Ess; if copulas to the right of you, and if an NP with nom-case first one to your left.

* **GalleSpred>** (@SPRED>) for Num Nom; if sentence initial

* **spredSgMII>** (@SPRED>)

* **spredšaddat>** (@SPRED>)


* **r492>** (@SPRED>) for Interr Gen; consisting only of negations. You are not allowed to be MII. You are not allowed to have an adjective or noun to yor right. You are not allowed to have a verb to your right; the exception beeing an aux.



* **AdjSpredSg>** (@SPRED>) for A Sg Nom; if copulas to the right, but not if A or @<SPRED are found to the right of copulas





* **Spred>SubjInf** (@SPRED>) for Nom; if copulas to the right, and the subject of copulas is an Inf to the right

* **spredCoord** (@<SPRED) coordination for Nom; only if there already is a SPRED to the left of CNP. Not if there is some kind of comparison involved.














* **subj>Sgnr1** (@SUBJ>) for Nom Sg, including Indef Nom if; VFIN + Sg3 or Pl3 to the right (VFIN not allowed to the left)




* **subj>Du** (@SUBJ>) for dual nominatives, including Coll Nom. VFIN + Du3 to the right.
* **subj>Pl** (@SUBJ>) for plural nominatives, including Coll and Sem/Group. VFIN + Pl3 to the right.

* **subj>Pl** (@SUBJ>) for plural nominatives


* **subj>Sg** (@SUBJ>) for Nom Sg; if VFIN + Sg3 to the right.

* **Sg<subj** (@<SUBJ) for Nom Sg; if VFIN Sg3 or Du2 to the left (no HAB allowed to the left).

* **Du<subj** (@<SUBJ) for Nom Coll if; a dual third person verb is found to the left

* **PlDu<subj** (@<SUBJ) for (N Nom Pl), (Sem/Group Nom), (Coll Nom), (Pron Nom Pl) if; a verb is Pl3 or Du3 to your left. The verb is not allowed to be copulas with a place, Loc or time noun to its left

* **copPl3<subj** (@<SUBJ) for Nom Pl; you don't to be a noun, only Nom Pl. To the left is copulas and first one to the right is @<SPRED





















* **-fsubj>** (@-FSUBJ>) for HUMAN Gen; in a NP-clause. To your right is Actio Nom followed by a noun

















* **f<advl** (@-F<ADVL) for infinite adverbials





* **f<advl** (@-F<ADVL) for infinite adverbials









* **s-boundary=advl>** (@ADVL>) for ADVL that resemble s-boundaries. Mainverb to the right.





* **diibmuadvl>** (@ADVL>) for (diibmu Nom) if first one to the right is Num


* **-fsubj** (@-FSUBJ>) for HUMAN Acc after DADJAT verbs



* **-fobj>** (@-FOBJ>) for Acc if front of abessive, gerundium, actio locative, perfectum participle or infinitive. First one to the right not allowed to be Acc though

* **-fobj>** (@-FOBJ>) for Acc if human with ADVL-case to the left and transitive infinitive OBJ to the right. First one to the right not allowed to be Acc though












* **advl>mainV** (@ADVL>) if; finite mainverb not found to the left, but the finite mainverb is found to the right.
























* **V<advl** (@<ADVL) if; finite mainverb found to the left. Not if a comma is found immediately to the left and a finite mainverb is located somewhere to the right of this comma.





* **advl>v** (@ADVL>) if; you are ADVL, time-noun or Sem/Route and there is a finite verb to the right in the clause, or if to your right is: de followed by a finite verb. OR: if you are a time-nound and to your right is: go or sentenceboundary followed by a finite verb



* **<advlPoPr** (@<ADVL) for Po or Pr; if mainverb to the left.
* **advlPoPr>** (@<ADVL) for Po or Pr; if mainverb to the right.

* **BOSPo>** (@ADVL>) for Po; if trapped between BOS to the right and S-BOUNDARY OR COMMA to the left, because the main verb will then automatically be on your right side.

* **<advlComIll** (@<ADVL) only if; you are Com OR Ill. To your left is a mainverb, and to your right a sentenceboundary, because we don't want there to be another mainverb you potentially could belong to

* **<advlEOS** (@<ADVL) for Po or Pr or Loc; if you are found at the very end of a sentence. A mainverb is needed to the left though.


* **<advlGen** (@<ADVL) for (N Gen) if mainverb to the left and no noun to the right


* **<opredgohcodit** (@<OPRED) for Ess


* **advlEss>** (@<ADVL) for weather and time Ess, if FMAINV to the left.




* **comma<advlEOS** (@<ADVL) for Adv if; mainverb is to the left. Comma to the left and mainverb to the right in the same clause is not allowed


* **advl>inbetween** (@ADVL>) for Adv; if inbetween two sentenceboundaries where no mainverb is present.

* **comma<advlEOS** (@<ADVL) for Adv if; comma found to the left and the finite mainverb to the left of comma. To the right is the end of the sentence.



* **BOSadvl>** (@ADVL>) if; you are N Loc or N Ill and found sentence initially and there is a main verb somewhere to the right. No barrier for the mainverb; based on the thought that first one to your right is probably a sentenceboundary.

* **cleanupILL<advl** (@<ADVL) for N Ill if; there are no boundarysymbols to your left, if you arent already @N< OR @APP-N<, and no mainverb is to yor left.



* **cleanupPo** (@ADVL) for Po: This rule tags all Po:s as ADVL if they haven't gotten a tag somewhere along the way.

* **cleanupPr** (@ADVL) for Po: This rule tags all Pr:s as ADVL if they haven't gotten a tag somewhere along the way.




* **-fsubj>asAcc** (@-FSUBJ>) for HUMAN Acc; if there is a verb @-F<OBJ to your left

* **-f<obj** (@-F<OBJ) for Acc if there is a transitive verb + SYN-V to your left

* **-fsubj>IV** (@-FSUBJ>) for Acc; if there is an IV-verb acting as a @-F<OBJ to your right

* **-fsubj>IV** (@-FSUBJ>) for Acc; if there is an TV-verb acting as a @-F<OBJ to your right followed by an Acc

* **-fsubj>asGen** (@-FSUBJ>) for Gen;

* **f<subj** (@-F<SUBJ) for Nom if; (V @-F<OBJ) to the left.







* **<opredAAcc** (@<OPRED) for A Acc; if an other accusative to the left, and a transtive verb to the left of it. OR: if a transitive verb to the left, and an accusative to the left of it.

* **TV<obj** (@<OBJ) for Acc; if there is a transitive mainverb to the left in the clause. Not for Rel. Not if you are a numeral followed by a measure-noun



### sma object


* **<advlMeasr** (@<ADVL) for (Num Acc); if finite IV-mainverb to the left, measure-noun to the right

* **<objMeasr** (@<OBJ) for Num Acc; if finite TV-mainverb to the left, measure-noun to the right

* **<advlMeasr2** (@<ADVL) for MEASR-N + Acc; if (Num Pl) to the left and mainverb to the left of it

* **advlMeasr>** (@ADVL>) for Num Acc;


* **Obj>** (@OBJ>) for Acc; if there is a finite mainverb to the right in the clause. A really simple rule with no other restrictions..

* **s-boun<obj** (@<OBJ) for Acc; if sentenceboundary to your left and a transitive mainverb to the left futher to the left

* **<objIV** (@<OBJ) for Acc; if there is an intransitive mainverb in the clause. Not for Rel or Num. Not if you are a numeral followed by a measure-noun







* **<advlEss** (@<ADVL) for ESS-ADVL if; FMAINV to the left

* **IV<spredEss** (@<SPRED) for N Ess if; FMAINV to the left is intransitive or bargat

* **<opredEss** (@<OPRED) for (N Ess), (A Ess) if; transitive mainverb to the left in the clause. If accusative to the left or to the right, or if Inf or ahte to the right, or if there is a noun to the right followed by an Inf

* **Acc<opredEss** (@<OPRED) for (N Ess), (A Ess) if; transitive mainverb to the left in the clause, and an accusative cased Rel left to the verb

* **onlyV<opred** (@<OPRED) for (N Ess) if; there is a transitive mainverb to the left. Usually there needs to be an Acc to the left, but here it is not needed

* **onlyV<opred2** (@<OPRED) for (N Ess) if;











## SUBJ MAPPING - leftovers

* **subj>ifV** (@SUBJ>) for NP-HEAD-NOM, DUPRON or (Num Nom) if; a finite mainverb is found to the right. This is a cleanup rule for subjects

* **hnoun>ifV** (@SUBJ>) for NP-HEAD-NOM, DUPRON if. The counterpart of subj>ifV. You are HNOUN if there is a finite verb to your right, but NOT if there is a finite verb after a relative clause


## OBJ MAPPING - leftovers

## <logo> MAPPING for MT - experimental


## HNOUN MAPPING









* **@<ADVLcoor** (@<ADVL) for ADVLCASEAdv if @CNP to the left and ADVL to the left of it




###  **missingX** adds @X to all missings





###  **therestX** adds @X to all what is left, often errouneus disambiguated forms






## For Apertium:
The analysis give double analysis because of optional semtags. We go for the one with semtag.







