
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







* * *
<small>This (part of) documentation was generated from [../src/cg3/functions.cg3](http://github.com/giellalt/lang-fao/blob/main/../src/cg3/functions.cg3)</small>

# Faroese disambiguator 

Usage, in `lang-fao`:
`cat text.txt|hfst-tokenize -cg tools/tokenisers/tokeniser-disamb-gt-desc.pmhfst |vislcg3 -g src/cg3/disambiguator.cg3`

This file documents the [Faroese disambiguator file](http://github.com/giellalt/lang-fao/blob/main/src/cg3/disambiguator.cg3) .

## Delimiters, tags and sets



















 * LIST NAGD = Nom Acc Gen Dat ; # 
 * LIST AGD = Acc Gen Dat ; # 
 * LIST GENDER = Msc Fem Neu ; # 
 * LIST NUMBER = Sg Pl ; # 




























































































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
<small>This (part of) documentation was generated from [../src/cg3/disambiguator.cg3](http://github.com/giellalt/lang-fao/blob/main/../src/cg3/disambiguator.cg3)</small># Faroese morphological analyser

 # Definitions for Multichar_Symbols




## Tags for POS	
 * +N +V +A +Adv +Prop +Num : Open POS's	
 * +CC +CS +Interj +Pr +Pron +IM : Closed POS's	
 * +Pers +Det +Refl +Recipr +Poss +Dem : Pron types	
 * +Nom +Acc +Gen +Dat : Case			
 * +Msc +Fem +Neu : Gender		
 * +Sg +Pl : Number		
 * +Def +Indef : Definiteness	
 * +Comp +Superl : Comparison	
 * +Prs +Prt : Tense		
 * +1Sg : Person-Number
 * +2Sg : Person-Number
 * +3Sg : Person-Number
 * +Inf +PrfPtc +PrsPrc +Sup +Imp +Sbj +Subj : Verb forms	
 * +Cmp : Compound		
 * +Abbr +ABBR +ACR : Abbreviations, acronyms ,
 * +CLB +PUNCT +LEFT +RIGHT : Punctuation, parentheses
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
 * %^UUML %^IUML %^eIUML %^ØUML : Umlaut types ,
 * %^W %^JI : Cns changes ,
 * %^EPH %^OEA : Epenthesis,  ,
 * %^GDEL %^GGDEL %^GVDEL %^VDEL %^JDEL %^RDEL : Cns deletion triggers,
 * %^EIO %^OA %^WVV %^EDH %^VSH : TODO ,
 * %^AB1 %^AB2 %^AB3 %^AB4 %^AB5 %^AB6 %^AB7 : Ablaut series ,
 * %^aAB %^uAB : More Ablaut ,
 * %^NGKK : NG to KK	,
 * %^PASS : todo ,

 * %> : Suffix boundary ,

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

 * +Err/Guess : Tag for Name Guesser component
 * +Err/Orth : Marking forms that are orthographical errors
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





* * *
<small>This (part of) documentation was generated from [../src/fst/root.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/root.lexc)</small># Proper nouns 

## Table of content
* _ The guessed ones
* _ The morphological tags
- _ _ Male first names
- _ _ Female first names
- _ _ Surnames
- _ _ Place names and other names






## The morphological tags

For each group, the maltag etc. lexicon functions as a default
lexicon. The other lexica are there for specific subgroups of the names.

### Indeclineables







###  Male first names














### Female first names





###  Surnames



###  Place names and other names








































































































* * *
<small>This (part of) documentation was generated from [../src/fst/affixes/propernouns.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/affixes/propernouns.lexc)</small># Faroese Noun morphology 

This file contains the inflection suffixes for the Faroese nowns
The infection classes are identical to the ones in *Føroysk orðabók*.

The morphology is ordered in three layers.

# Layer 1: Basic noun lexica 

The nominal morphology is added in three layers.
In this **first layer** we add gender tags and morphophonological
diacritics.
The next two layers are for indefinite and definite
suffixes, respectively.


## Lexicons still to be allocated

We first list 4 lexica for words waiting to be checked.!
* **LEXICON xi** . TOOD: classify words in **xi**. They are all m
* **LEXICON xkv2** . TOOD: classify xkv1. They are all f and end in a
* **LEXICON xh3**. TOOD: classify xkv2. They are all f and end in a consonant
* **LEXICON xh25**. TOOD: classify xkv2. They are all f and end in a consonant

## Irregular nouns

These are lexica with number 0, they have no inflectional morphology.!
* **@LEXICON LEXNAME@** for januar etc.
* **@LEXICON LEXNAME@** for ommudidd
* **@LEXICON LEXNAME@** for indeclinable neuters
* **@LEXICON LEXNAME@** just gives the tags for the indeclinables


## Lexica for words belonging to two paradigms.
These are simply split (h11/12 to h11 and h12, etc).!
* **LEXICON h11/12** 
* **LEXICON h11/41** 
* **LEXICON h3/h41** 
* **LEXICON h4/41** 
* **LEXICON h7/h3** 
* **LEXICON k11/kv6** 
* **LEXICON k19/12** 
* **LEXICON k25/17f** 
* **LEXICON k9/10** 
* **LEXICON k9/16** 
* **LEXICON k1/3e** 
* **LEXICON k1/3** 
* **LEXICON k1/4** 
* **LEXICON k1e/48f** 
* **LEXICON k1e/h24e** 
* **LEXICON k1/11** 
* **LEXICON k6/7** 
* **LEXICON k6/8** 
* **LEXICON k6e/19e** 
* **LEXICON k7/6** 
* **LEXICON k8/17** 
* **LEXICON k8/6** 



## The ordinary lexica

These lexica split into sg and pl lexica, and add +N and gender tags.
Thereafter it points to Layer 2, the case suffixes


### Lexica for weak masculines.
* **LEXICON k1** , risi, is the basic Msc lexicon, split in sg and pl
* **LEXICON k1e** for sg
* **LEXICON k_flt1** for pl
* **LEXICON k1_3stem** for 3-syllabic stams like *felagi*, mixed dative forms + UUML
* **LEXICON k2** beiggi
* **LEXICON k3** for  hagi
* **LEXICON k3e** for sg
* **LEXICON k_flt3** for pl
* **LEXICON k4** for  tanki, just pointing to k3 (identical). Same u_umlaut, but nasal cns
* **LEXICON k5** for bóndi


### Lexica for strong masculines

* **LEXICON k6_null** for  antikrist
* **LEXICON k6e_null** for sg
* **LEXICON k6** for  úlvur
* **LEXICON k6e** for sg
* **LEXICON k_flt6** for pl
* **LEXICON k7** for  sandur
* **LEXICON k7e** for sg
* **LEXICON k_flt7** for pl
* **LEXICON k_flt8** for pl, pointing to k_flt7
* **LEXICON k8e** for sg, pointing to k7e
* **LEXICON k8** for  garður, pointing to k7, but has a different u-umlaut
* **LEXICON k_flt9** for pl
* **LEXICON k9e** for sg, pointing to k6e
* **LEXICON k9** with double consonant deletion in front of s, but pointing to k6
* **LEXICON k9e_2** for sg, pointing to k6e, and pointing to l24 *iskur
* **LEXICON k9_2** with double consonant deletion in front of s, but pointing to k6, and pointing to l24 *iskur
* **LEXICON k10/11** 
* **LEXICON k10** splitting in sg/pl
* **LEXICON k10e** for sg
* **LEXICON k_flt10** for pl
* **LEXICON k11/18** 
* **LEXICON k11** for ísur
* **LEXICON k11e** for sg
* **LEXICON k_flt11** for pl
* **LEXICON k12/6f** 
* **LEXICON k12** for  vinur
* **LEXICON k12_bui** 
* **LEXICON k12_boe** 
* **LEXICON k12e** for sg
* **LEXICON k_flt12** for pl
* **LEXICON k13e** for sg, giving extra NULL dative then pointing to k12e
* **LEXICON k13** for  vegur. As k12, plus a zero dative
* **LEXICON k14** for  staður
* **LEXICON k14e** for sg
* **LEXICON k_flt14** for pl
* **LEXICON k15/6** 
* **LEXICON k15** for  gestur
* **LEXICON k15e** for sg
* **LEXICON k_flt15** for pl
* **LEXICON k16/9** 
* **LEXICON k16e** 
* **LEXICON k16** having double Cns but pointing to k15
* **LEXICON k_flt17** giving UUML PLDAT and pointing to k_flt15
* **LEXICON k17/8/6** 
* **LEXICON k17** giving UUML Dat and pointing to k15
* **LEXICON k18/11** 
* **LEXICON k18** for  dansur
* **LEXICON k18e** for sg
* **LEXICON k_flt18** for pl
* **LEXICON k19** for  meldur
* **LEXICON k19e/15e** 
* **LEXICON k19e/15** 
* **LEXICON k19e** for sg
* **LEXICON k_flt19** for pl
* **LEXICON k20** for  akur
* **LEXICON k20e** for sg
* **LEXICON k_flt20** for pl
* **LEXICON k_flt21** pointing to k_flt19
* **LEXICON k21/20** 
* **LEXICON k21e** 
* **LEXICON k21** for  stuðul
* **LEXICON k22e** 
* **LEXICON k22** for  himmal
* **LEXICON k23/19** 
* **LEXICON k23e/19e** 
* **LEXICON k23** for  róður
* **LEXICON k23e** for sg
* **LEXICON k_flt23** for pl
* **LEXICON k24/25** 
* **LEXICON k25/24** 
* **LEXICON k26/12** 
* **LEXICON k26/6f** 
* **LEXICON k27/25** 
* **LEXICON k28/12** 
* **LEXICON k28/23** 
* **LEXICON k28e/12e** 
* **LEXICON k3/1** 
* **LEXICON k4/1** 
* **LEXICON k45/6f** 
* **LEXICON k6/12e** 
* **LEXICON k6/15** 
* **LEXICON k3e/14f** 
* **LEXICON k24** for  fløttur
* **LEXICON k25** for  vøllur
* **LEXICON k25e** for sg
* **LEXICON k_flt25** for pl
* **LEXICON k26** for  táttur
* **LEXICON k26e** for sg
* **LEXICON k_flt26** for pl
* **LEXICON k27** for  vøkstur
* **LEXICON k28** for  dráttur
* **LEXICON k28e** for sg
* **LEXICON k_flt28** for pl
* **LEXICON k29** for  tráður
* **LEXICON k30** for  fótur
* **LEXICON k30e** for sg
* **LEXICON k_flt30** for pl
* **LEXICON k31** for  veggur
* **LEXICON k31e** for sg
* **LEXICON k_flt31** for pl
* **LEXICON k32** for  ryggur, using k31e
* **LEXICON k33** for  hylur
* **LEXICON k34** for  drongur
* **LEXICON k34e** for sg
* **LEXICON k_flt34** for pl
* **LEXICON k34_2** for  bonkur  - formar skulu gerast fyri benk* og veng* í flt.
* **LEXICON k34_3** for  vongur  - formar skulu gerast fyri benk* og veng* í flt.
* **LEXICON k36** for  heyggjur
* **LEXICON k37** for  skógvur
* **LEXICON k37e** for sg
* **LEXICON k_flt37** for pl
* **LEXICON k38e_2** for  súgvur
* **LEXICON k38** for  bógvur
* **LEXICON k38e** for sg
* **LEXICON k_flt38** for pl
* **LEXICON k39** for  sjógvur
* **LEXICON k39e** for sg
* **LEXICON k_flt39** for pl
* **LEXICON k40e_2** for  hógvur2
* **LEXICON k40_3** for  skúgvur
* **LEXICON k40** for  hógvur
* **LEXICON k40e** for sg
* **LEXICON k_flt40** for pl
* **LEXICON k41** for  maður
* **LEXICON k41e** for sg
* **LEXICON k41_obl** for oblique, hmm, needed?
* **LEXICON k_flt41** for pl
* **LEXICON k42** for  dagur
* **LEXICON k42e** for sg
* **LEXICON k_flt42** for pl
* **LEXICON k43** for  faðir
* **LEXICON k43e** for sg
* **LEXICON k_flt43** for pl
* **LEXICON k44** for  bróðir, stem is ZERO
* **LEXICON k_flt44** for pl
* **LEXICON k45** for  spónur
* **LEXICON k45e** for sg
* **LEXICON k_flt45** for pl
* **LEXICON k46** for  fjørðu
* **LEXICON k46e** for sg
* **LEXICON k_flt46** for pl
* **LEXICON k47** for  sonur
* **LEXICON k47e** for sg
* **LEXICON k_flt47** for pl
* **LEXICON k48** for  hamar
* **LEXICON k48e** for sg
* **LEXICON k_flt48** for pl
* **LEXICON k49** for  verkur
* **LEXICON k49e** for sg
* **LEXICON k_flt49** for pl
* **LEXICON k50** for  skjøldur (non_poetic)
* **LEXICON k51** for  luður
* **LEXICON k52** for  primus
* **LEXICON k52e** for sg
* **LEXICON k_flt52** for pl
* **LEXICON k53** for  aðal






### Lexica for feminines

* **LEXICON kv1/2** 
* **LEXICON kv1**  genta
* **LEXICON kv1e** 
* **LEXICON kv_flt1** 
* **LEXICON kv2/6** 
* **LEXICON kv2/27** 
* **LEXICON kv2/3** 
* **LEXICON kv2e/h3e** 
* **LEXICON kv2e/17e** 
* **LEXICON kv1/2_1** 
* **LEXICON kv2_1/h5e**  sodavatn -> sodavatnir
* **LEXICON kv2_1** aktión
* **LEXICON kv2_1e** 
* **LEXICON kv2** 
* **LEXICON kv_bd2e** 
* **LEXICON kv2e** 
* **LEXICON kv_flt2** 
* **LEXICON kv3/2** 
* **LEXICON kv3/5** 
* **LEXICON kv3/7** 
* **LEXICON kv3** søgn
* **LEXICON kv3e** 
* **LEXICON kv_flt3** 
* **LEXICON kv4** 
* **LEXICON kv4e** 
* **LEXICON kv_flt4** 
* **LEXICON kv5** 
* **LEXICON kv5e** 
* **LEXICON kv_flt5** 
* **LEXICON kv6/2** 
* **LEXICON kv6/h16** 
* **LEXICON kv6/h16e** 
* **LEXICON kv6** 
* **LEXICON kv6_1** 
* **LEXICON kv6e** 
* **LEXICON kv_flt6** 
* **LEXICON kv6_1e** 
* **LEXICON kv_OY** oy, oyggin
* **LEXICON kv_OYGGJ** oyggj, oyggin
* **LEXICON kv7/3** 
* **LEXICON kv7** vørr
* **LEXICON kv7e** 
* **LEXICON kv_flt7** 
* **LEXICON kv8** 
* **LEXICON kv8e** 
* **LEXICON kv_flt8** 
* **LEXICON kv9/2** 
* **LEXICON kv9** 
* **LEXICON kv9_1** 
* **LEXICON kv9e** 
* **LEXICON kv_flt9** 
* **LEXICON kv_flt9_1** 
* **LEXICON kv10** dorg
* **LEXICON kv11** song
* **LEXICON kv11e** 
* **LEXICON kv_flt11** 
* **LEXICON kv12** glóð
* **LEXICON kv12_1** bók
* **LEXICON kv12e** 
* **LEXICON kv_flt12** 
* **LEXICON kv_flt12_1** 
* **LEXICON kv13** mørk
* **LEXICON kv13e** 
* **LEXICON kv_flt13** Alternative way
* **LEXICON kv14** nátt
* **LEXICON kv14e** 
* **LEXICON kv_flt14** 
* **LEXICON kv15** tonn
* **LEXICON kv15e** 
* **LEXICON kv_flt15** 
* **LEXICON kv16** mús, lús
* **LEXICON kv17** mastur
* **LEXICON kv17e** 
* **LEXICON kv_flt17** 
* **LEXICON kv18/17** 
* **LEXICON kv18** 
* **LEXICON kv19** fjøður
* **LEXICON kv19e** 
* **LEXICON kv_flt19f** 
* **LEXICON kv_flt19** 
* **LEXICON kv20** ær (only)
* **LEXICON kv21** gjógv
* **LEXICON kv21e** 
* **LEXICON kv_flt21** 
* **LEXICON kv21_b** 
* **LEXICON kv22** klógv, rógv  stem: kl-, r-
* **LEXICON kv22e** 
* **LEXICON kv_flt22** 
* **LEXICON kv23** 
* **LEXICON kv23e** 
* **LEXICON kv_flt23** 
* **LEXICON kv24/2** 
* **LEXICON kv24/6** 
* **LEXICON kv24** 
* **LEXICON kv24e** 
* **LEXICON kv_flt24** 
* **LEXICON kv25** 
* **LEXICON kv26** 
* **LEXICON kv27** rás
* **LEXICON kv_flt28** 
* **LEXICON kv29** móðir
* **LEXICON kv29e** 
* **LEXICON kv_flt29** 
* **LEXICON kv30** 
* **LEXICON kv30e** 
* **LEXICON kv_flt30** 
* **LEXICON kv31** 
* **LEXICON kv32_1** byrða
* **LEXICON kv32** mýri
* **LEXICON kv32e** 
* **LEXICON kv_flt32** 
* **LEXICON kv33e/h24e** 
* **LEXICON h24e/kv33e** 
* **LEXICON kv33** 
* **LEXICON kv33e** 
* **LEXICON kv_flt33** 
* **LEXICON kv34** kraft
* **LEXICON kv34e** 
* **LEXICON kv_flt34** 
* **LEXICON kv35** 
* **LEXICON kv36/2** 
* **LEXICON kv36** 
* **LEXICON kv36e** 
* **LEXICON kv37/2** 
* **LEXICON kv37** 
* **LEXICON kv37e** 
* **LEXICON kv_flt37** 
* **LEXICON kv38** 
* **LEXICON kv39/22** 
* **LEXICON kv39** 
* **LEXICON kv39e** 
* **LEXICON kv_flt39** 
* **LEXICON kv40** 
* **LEXICON kv40e** 
* **LEXICON kv_flt40** 


###  Lexica for Neuter nouns

* **LEXICON h1** eyga
* **LEXICON h1e** 
* **LEXICON h_flt1** 
* **LEXICON h1_2** 
* **LEXICON h1_2e** 
* **LEXICON h_flt1_2** 
* **LEXICON h1_2/1_3** 
* **LEXICON h1_3** drama
* **LEXICON h1_3e** 
* **LEXICON h_flt1_3** 
* **LEXICON h2** hjarta
* **LEXICON h2e** 
* **LEXICON h3/41** 
* **LEXICON h3/5** 
* **LEXICON h3/22** 
* **LEXICON h3_s** universitet
* **LEXICON h3** orð
* **LEXICON h3e** 
* **LEXICON h_flt3f** 
* **LEXICON h_flt3** 
* **LEXICON h3_2** 
* **LEXICON h3_2e** politinum
* **LEXICON h_flt3_2** 
* **LEXICON h4** 
* **LEXICON h4e** 
* **LEXICON h_flt4** 
* **LEXICON h4_2** guv
* **LEXICON h4_2e** 
* **LEXICON h_flt4_2** 
* **LEXICON h4_3/41** 
* **LEXICON h4_3** 
* **LEXICON h4_3e** bað sg
* **LEXICON h_flt4_3** 
* **LEXICON h4_4** læ
* **LEXICON h4_4e** 
* **LEXICON h_flt4_4** 
* **LEXICON h5/3** 
* **LEXICON h5/6** 
* **LEXICON h5** 
* **LEXICON h5e** 
* **LEXICON h_flt5** 
* **LEXICON h6/4** 
* **LEXICON h6** 
* **LEXICON h6e** 
* **LEXICON h_flt6** 
* **LEXICON h7/3** 
* **LEXICON h7/3e** 
* **LEXICON h7/4** 
* **LEXICON h7** bræv
* **LEXICON h8** land
* **LEXICON h8e** land sg
* **LEXICON h_flt8** land
* **LEXICON h9/10** 
* **LEXICON h9/kv2** 
* **LEXICON h9/41** 
* **LEXICON h9** 
* **LEXICON h9e** 
* **LEXICON h_flt9** 
* **LEXICON h10** fall
* **LEXICON h10e** 
* **LEXICON h_flt10** 
* **LEXICON h11e/22f** 
* **LEXICON h_flt22/11e** 
* **LEXICON h11** hús
* **LEXICON h11e** 
* **LEXICON h_flt11** 
* **LEXICON h12** glas
* **LEXICON h12e** 
* **LEXICON h_flt12** 
* **LEXICON h13** setur
* **LEXICON h13e** 
* **LEXICON h_flt13** 
* **LEXICON h13_2** ásin
* **LEXICON h13_2e** 
* **LEXICON h_flt13_2** 
* **LEXICON h14** pistr
* **LEXICON h14e** 
* **LEXICON h_flt14** 
* **LEXICON h15** tjaldur
* **LEXICON h15e** 
* **LEXICON h_flt15** 
* **LEXICON h16** skýggj
* **LEXICON h16e** 
* **LEXICON h_flt16** 
* **LEXICON h16_2** hoyggj
* **LEXICON h16_2e** 
* **LEXICON h_flt16_2** 
* **LEXICON h16_3** fríggj
* **LEXICON h16_3e** 
* **LEXICON h_flt16_3** 
* **LEXICON h17** 
* **LEXICON h17e** 
* **LEXICON h_flt17** 
* **LEXICON h17_2** 
* **LEXICON h17_2e** 
* **LEXICON h18** týggi
* **LEXICON h18e** 
* **LEXICON h_flt18** 
* **LEXICON h19** prógv
* **LEXICON h19e** 
* **LEXICON h_flt19** 
* **LEXICON h20** búgv
* **LEXICON h20e** 
* **LEXICON h_flt20** 
* **LEXICON h21** plógv
* **LEXICON h21e** 
* **LEXICON h_flt21** 
* **LEXICON h22** ber
* **LEXICON h22e** 
* **LEXICON h_flt22** 
* **LEXICON h23** egg
* **LEXICON h23e** 
* **LEXICON h_flt23** 
* **LEXICON h24** 
* **LEXICON h24e** 
* **LEXICON h_flt24** 
* **LEXICON h25** merki
* **LEXICON h25e** 
* **LEXICON h_flt25** 
* **LEXICON h_flt26** tiðindi
* **LEXICON h_flt27** systkin
* **LEXICON h28** bakarí
* **LEXICON h28e** 
* **LEXICON h_flt28** 
* **LEXICON h29** kamar
* **LEXICON h29e** 
* **LEXICON h_flt29** 
* **LEXICON h30** summar
* **LEXICON h31** nummar
* **LEXICON h32** høvd
* **LEXICON h33** høvur
* **LEXICON h34** fæ
* **LEXICON h34e** 
* **LEXICON h_flt34** 
* **LEXICON h3e/kv2** 
* **LEXICON h36** 
* **LEXICON h36e** 
* **LEXICON h_flt36** 
* **LEXICON h37** 
* **LEXICON h37e** 
* **LEXICON h_flt37** 
* **LEXICON h38** 
* **LEXICON h40** 
* **LEXICON h40_2** 
* **LEXICON h41/9** 
* **LEXICON h41** 
* **LEXICON h41e** 
* **LEXICON h_flt41** 





# Layer 2: Case inflection 

This is the second layer. Here we do indefinite
forms and compounds.

## Lexica for masculine nouns

### Lexica for weak case suffixes.

#### Singular
* **LEXICON W_M_SGNOM** for weak masculines, pointing to definites
* **LEXICON W_M_SGACC** etc for risan
* **LEXICON W_M_SGDAT** for 
* **LEXICON W_M_SGDAT_mixed** for felagnum
* **LEXICON W_M_SGGEN** for 



#### Plural
* **LEXICON W_M_PLNOM** for -ar-
* **LEXICON W_M_PLNOM_UR** for -ur-
* **LEXICON W_M_PLACC** for -ar-
* **LEXICON W_M_PLACC_UR** for -ur-
* **LEXICON W_M_PLDAT** for -u-
* **LEXICON W_M_PLGEN** for -a-




### Strong case suffixes


#### Nominative Sg
* **LEXICON S_M_SGNOM** 
* **LEXICON S_M_SGNOM_NULL** 


#### Accusative Sg
* **LEXICON S_M_SGACC** 

#### Dative Sg
* **LEXICON S_M_SGDAT** 
* **LEXICON S_M_SGDAT_2** 
* **LEXICON S_M_SGDAT_NULL** 

#### Genitive Sg
* **LEXICON S_M_SGGEN** 
* **LEXICON S_M_SGGEN_NULL** 
* **LEXICON S_M_SGGEN_AR** 

### Plural forms

#### Nominative
* **LEXICON S_M_PLNOM** 
* **LEXICON S_M_PLNOM_IR** 
* **LEXICON S_M_PLNOM_UR** 
* **LEXICON S_M_PLNOM_NULL** 
* **LEXICON S_M_PLNOM_NULL_NULL** 


#### Accusative
* **LEXICON S_M_PLACC** 
* **LEXICON S_M_PLACC_IR** 
* **LEXICON S_M_PLACC_UR** 
* **LEXICON S_M_PLACC_NULL** 
* **LEXICON S_M_PLACC_NULL_NULL** 


#### Dative
* **LEXICON S_M_PLDAT** 
* **LEXICON S_M_PLDATm** skóm

#### Genitive
* **LEXICON S_M_PLGEN** 


## Feminine forms

### Singular case suffixes.

#### Nominative
* **LEXICON W_F_SGNOM** 
* **LEXICON S_F_SGNAD** 

#### Oblique
* **LEXICON W_F_SGOBL** 
* **LEXICON S_F_SGGEN** 
* **LEXICON S_F_SGGEN_NULL** 




### Plural case suffixes
* **LEXICON F_PLNA_UR** 
* **LEXICON F_PLNA_IR** 
* **LEXICON F_PLNA_AR** 
* **LEXICON F_PLNA_NULL** 
* **LEXICON F_PLDAT** 
* **LEXICON F_PLGEN** 


## Neuter forms
### Singular
* **LEXICON S_N_SGNA** 
* **LEXICON S_N_SGDG** 
* **LEXICON S_N_SGD** 
* **LEXICON S_N_SGG** 
* **LEXICON S_N_SGDG_is** 
* **LEXICON S_N_SGD_i** 
* **LEXICON S_N_SGG_s** 
* **LEXICON S_N_SGG_is** 
* **LEXICON 0_N_SGNA** 
* **LEXICON i_N_SGNA** 
### Plural
* **LEXICON N_PLNA_u_ur** 
* **LEXICON N_PLNA_i_ir** 
* **LEXICON N_PLNA** 
* **LEXICON N_PLD** 
* **LEXICON N_PLG** 
* **LEXICON N_PLG_na** 
## Common cases
* **LEXICON DF_D_PL** 
* **LEXICON DF_G_PL** 







# Layer 3: Definite inflection 

This is the **third layer**. Here we do the indefinite and definite forms.
These are common to (almost) all different paradigms, hence they are 
gathered here.

## Masculine forms

### Masc def sg
* **LEXICON DF_N_SGm** for 
* **LEXICON DF_N_SGm_indef** for 
* **LEXICON DF_N_SGm_def** for 
* **LEXICON DF_A_SGm** for 
* **LEXICON DF_A_SGm_indef** for 
* **LEXICON DF_A_SGm_def** for 
* **LEXICON DF_D_SGm** for 
* **LEXICON DF_G_SGm** for 


### Masc def pl
* **LEXICON DF_N_PLm** for 
* **LEXICON DF_N_PLm_indef** for 
* **LEXICON DF_N_PLm_def** for 
* **LEXICON DF_A_PLm** for 
* **LEXICON DF_A_PLm_indef** for 
* **LEXICON DF_A_PLm_def** for 



## Feminine forms

###  Fem Sg
* **LEXICON DF_N_SGf_W** for 
* **LEXICON DF_N_SGf_S** for 
* **LEXICON DF_A_SGf_W** for 
* **LEXICON DF_A_SGf_S** for 
* **LEXICON DF_D_SGf_W** for 
* **LEXICON DF_D_SGf_S** for 
* **LEXICON DF_G_SGf_W** for 
* **LEXICON DF_G_SGf_S** for 

### Feminine plural forms
* **LEXICON DF_NA_PLf** for *nar
* **LEXICON DF_NA_PLf_inar** for *inar


## Neuter forms

### Neuter sg
* **LEXICON DF_NA_SGn** 
* **LEXICON DF_NA_SGn_indef** 
* **LEXICON DF_NA_SGn_def** 
* **LEXICON DF_D_SGn** 
* **LEXICON DF_G_SGn** 
* **LEXICON g_indef_r** 
* **LEXICON DF_G_SGn_a** 
* **LEXICON DF_NA_PLn** 
* **LEXICON DF_NA_PLn_W** 


This concludes the nominal morphology.


# Compound flags
The rest of the file contains **flags**, that govern
the ways stems may be combined.
* **LEXICON MscNom_Flag** for 
* **LEXICON MscObl_Flag** for 
* **LEXICON FemNom_Flag** for 
* **LEXICON FemObl_Flag** for 
* **LEXICON Neu_Flag** for 
* **LEXICON Pl_Flag** for 
* **LEXICON p24** 
* * *
<small>This (part of) documentation was generated from [../src/fst/affixes/nouns.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/affixes/nouns.lexc)</small>
# Symbol affixes





* * *
<small>This (part of) documentation was generated from [../src/fst/affixes/symbols.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/affixes/symbols.lexc)</small>

# North Saami acronyms - affix part

## The lexica giving tags and suffixes to the acronyms




 * **LEXICON ACRONOUN   ** is the lexicon for **nouns** (not +Prop) like ATV

 * **LEXICON UNIT   **  As acro, but without paradigm









 * **LEXICON acroconnector   ** Here comes a set of possible symbols to
put between the abbreviation and its suffix

 * **LEXICON acronull   **  for suffixless forms, redirecting to K_only for clitic forms


* * *
<small>This (part of) documentation was generated from [../src/fst/affixes/acronyms.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/affixes/acronyms.lexc)</small># Abbreviation affixes

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







* * *
<small>This (part of) documentation was generated from [../src/fst/affixes/abbreviations.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/affixes/abbreviations.lexc)</small># Adjective morphology !

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














* * *
<small>This (part of) documentation was generated from [../src/fst/affixes/adjectives.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/affixes/adjectives.lexc)</small>



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





* * *
<small>This (part of) documentation was generated from [../src/fst/affixes/verbs.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/affixes/verbs.lexc)</small># Numeral affixess

This lexicon just goes to #, this in order to coexist with number files in giella-shared.
They are relevant for Sámi, not for faroese.

Lexica: 

 * LEXICON DIGITCASE 				 # ;		 
 * LEXICON ARABICCASE 				 # ;		 
 * LEXICON ARABICCASE0 				 # ;	 
 * LEXICON ARABICCASECOLL 				 # ;	 
 * LEXICON ARABICCASEORD 				 # ;	 
 * LEXICON ARABICCASEORD-ERR 				 # ; 
 * LEXICON ARABICCASES 				 # ;	 
 * LEXICON ARABICCOMPOUNDS 			 # ;	 
 * LEXICON ROMNUMTAGOBL 				 # ;	 
 * LEXICON dateyearcase 				 # ;	 
 * LEXICON dateyearcase_fullsuff 		 # ;	 
 * LEXICON dateyearcase_nullsuff_w_dot  # ;	 






* * *
<small>This (part of) documentation was generated from [../src/fst/affixes/numerals.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/affixes/numerals.lexc)</small># Proper nouns 

Table of content
* The name lexica
-   - mal
-   - fem
-   - plc
-   - sur       

## Splitting into name types


   **Propernouns** splitting in 3 lexica: **multipartnames, names, guess**


   **multipartnames** contains only 3 names for now

   **names** gives the list of names.








* * *
<small>This (part of) documentation was generated from [../src/fst/stems/propernouns.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/propernouns.lexc)</small># Faroese pronouns


   **Pronoun** splitting into 3 sublexica:
 1. Personal ;        
 1. Reflexive ;        
 1. Interrogative ;    
 1. Indefinite ;       

   **Personal** for the personal pronouns





   **egtu-obl** 

   **okkumtykkum** 

   **S_okkumtykkum** 


   **3obl** 

   **Reflexive** 



   **Interrogative** 


   **EIN** 

   **ANNAR_P** 

   **EINHVOR** 

   **ANNARHVOR** 

   **HANNSJALVUR** 


   **Indefinite** 






   **ONKUR** 

   **NAKAR** 

   **BADIR** 

   **HVORGIN** 

   **EINGIN** 






* * *
<small>This (part of) documentation was generated from [../src/fst/stems/pronouns.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/pronouns.lexc)</small># Faroese noun stem file

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

















* * *
<small>This (part of) documentation was generated from [../src/fst/stems/nouns.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/nouns.lexc)</small>
# Interjections

The tag +Interj

   **Interj** 

The words

   **Interjection** okey, ááá, aj, huff, ...

* * *
<small>This (part of) documentation was generated from [../src/fst/stems/interjections.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/interjections.lexc)</small># The Faroese conjunctions

The file `stems/conjunctions.lexc` contains two lexica:

**LEXICON CCtag** for assigning the +CC tag to all the conjunctions below. It has one entry:
 * +CC: # ;

**LEXICON Conjunction** for the list of 10 or so conjunctions that are found in the file. Here are the first entries:
 * antin CCtag ;
 * annaðhvørt CCtag ;
 * bæði CCtag ;
 * og CCtag ;
* * *
<small>This (part of) documentation was generated from [../src/fst/stems/conjunctions.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/conjunctions.lexc)</small># File containing Faroese abbreviations 

Lexica for adding tags and periods

The idea is (or may be) to use both common and language-speicfic abbreviations.

Splitting in 3 groups, because of the preprocessor

**Abbreviation**














dot% noStb.db
Abbreviations that never induce sentence boundaries
The file is too large and should be shrinked



* * *
<small>This (part of) documentation was generated from [../src/fst/stems/abbreviations.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/abbreviations.lexc)</small># Faroese adjectives 


The adjectives and their inflectional codes 
are taken from "Føroysk orðabók".

## The list of ajectives





**Adjectives** for the list of adjectives

### Irregular comparatives and superlatives



### Prefixed present participles


### Regular adjectives, systematic list

















* * *
<small>This (part of) documentation was generated from [../src/fst/stems/adjectives.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/adjectives.lexc)</small># Faroese prepositions

We should eventually have syntactic tags here...

## Tags
**p** for the tag +Pr

## The list of prepositions

**Preposition** for the list of prepositions, ordered according to case they select for.



### Several cases


### Accusative or dative
| --- 

### Accusative or genitive


### Accusative

###  Dative


* * *
<small>This (part of) documentation was generated from [../src/fst/stems/adpositions.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/adpositions.lexc)</small># Faroese subjunctions

The file `stems/subjunctions.lexc` contains three lexica:

**LEXICON CStag** assigns the **+CS** TAG. It has one entry:
 +CS: # ;

**LEXICON IMtag** assigns the  **+IM** tag for the infinitive marker. The entry is:
 +IM: # ;

**LEXICON Subjunction** contains the list of some 10-20 CSs. Here are the first 4:
 * at IMtag ;  
 * at CStag ;  
 * tí CStag ;  
 * tá% ið CStag ;  
...
* * *
<small>This (part of) documentation was generated from [../src/fst/stems/subjunctions.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/subjunctions.lexc)</small># Akronymer 

This documents the `stems/fao-acronyms.lexc` file.
Most acronyms are taken from a common generated file, this file is for the Faroese-specific acronyms.


   **LEXICON Acronym-fao** pointing to the lexica 
 * Akronymnumeralier ; (Nogle tal først, måskje?)
 * Acronym-fao-list ; 

   **LEXICON Acronym-fao-list** for selve listen, i øjeblikket 2:
 * StÍF ACRO ; 
 * T5PC ACRO ; 





   **Akronymnumeralier**  for 0-9

   **anl**  send numvers too letterloops -- this might be too liberal.



* * *
<small>This (part of) documentation was generated from [../src/fst/stems/fao-acronyms.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/fao-acronyms.lexc)</small>
# Faroese verb stems 

This file documents the file [stems/verbs.lexc](https://github.com/giellalt/lang-fao/blob/main/src/fst/stems/verbs.lexc)

The file contains one lexicon:

**LEXICON Verbs** = the lexicon containing all verb stems

## Some irregular verbs
*mega, eiga, eita, gráta, liggja, ...* and 15 more



## some irregular passive verbs

 * høggast:høgg FYRIB ; 
 * munnhøggast:munn#høgg FYRIB ; 
 * bilgjast:bilgj FYRIB ; 
 * bylgjast:bylgj sxrefl ; 
* ... etc. 15 more








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

* * *
<small>This (part of) documentation was generated from [../src/fst/stems/verbs.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/verbs.lexc)</small># Faroese adverbs


   **adv** for the tag +Adv

   **advcomp** for the tag +Adv+Cmp

   **advsuperl** for the tag +Adv+Superl

   **Adverb** for the list of appr 1000 adverbs


 * í% gjár adv ; 
 * í% fjør adv ; 
 * ókynjað adv ; 
 * suðuri adv ; 
 * eystarlaga adv ; 
 * útúr adv ; 
 * hvaðani adv ; 
 * síðla adv ; 
 * allastaðnar adv ; 
 * forskelligastaðnar adv ; 
 * nógvastaðnar adv ; 
 * onkrastaðnar adv ; 
 * ymsastaðnis adv ; 
 * líkafram adv ; 
 * aftanáaftur adv ; 
...

* * *
<small>This (part of) documentation was generated from [../src/fst/stems/adverbs.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/adverbs.lexc)</small># Faroese Numerals



**Numeral** splitting in types
 * Textual ;  
 * ARABICS ;  
 * ARABICORD ;  
 * ROMAN ;  
 * ISOLATED-NUMEXP ;  
 * NUM-PREFIXES ;  




   **1-9** 



   **TRÝsplit** 

   **nsplit** 

   **TEXTTENS** 


   **TEXTTEENS** 

   **basic** 



   **EITT** 

   **TVEY** 

   **TRÝ** 

   **PAIRNUM** 

   **n** 


## Ordinals

   **ordinals** 

   **ord_decl** 

   **ANNAR** 

   **ANNARMORPH** 



* * *
<small>This (part of) documentation was generated from [../src/fst/stems/numerals.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/numerals.lexc)</small># Faroese deternminers







































* * *
<small>This (part of) documentation was generated from [../src/fst/stems/determiners.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/stems/determiners.lexc)</small># Compounding morphology



# Lexicon R gets flags and sends compounds over to RReal
 @P.CmpFrst.FALSE@@P.CmpPref.FALSE@@D.CmpLast.TRUE@@D.CmpNone.TRUE@@U.CmpNone.FALSE@@P.CmpOnly.TRUE@ RReal ;  are Flags to control compounding

# Lexicon RReal is the lexicon for the Cmp tag and resending to N, A
 *  +Cmp#: Nouns ;          
 *  +Cmp#: Adjectives ;    
           R-    ;        

# Lexicon R- for compounds with hyphen
  +Cmp#:%- Nouns ;    
  +Cmp#:%- Adjectives ;    

# Lexicon RNum for compounds numeral + noun
       +Use/SpellNoSugg+Cmp/Hyph+Cmp#:-# Nouns ;    For Num Cmp Noun, vi vil ikke ha Num Cmp Num
* * *
<small>This (part of) documentation was generated from [../src/fst/compounding.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/compounding.lexc)</small># The Faroese morphophonological file 

This file documents the [phonology.twolc file](http://github.com/giellalt/lang-fao/blob/main/src/fst/phonology.twolc) 


## Alphabet
Here we declare all symbols.

 * **a b c d e f g h i j k l m n o p q r s t u v w x y z æ ø å** 
 * **á é ó ú í à è ò ù ì ä ë ö ü ï â ê ô û î ã ý þ ñ ð ß ç** 

 * **A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Æ Ø Å** 
 * **Á É Ó Ú Í À È Ò Ù Ì Ä Ë Ö Ü Ï Â Ê Ô Û Î Ã Ý þ Ñ Ð** 


 * **a2:a**  for da2n -> dønum
 * **g2:g** for invariant g
 * **i2:i** for invariant i
 * **j2:j** for invariant j
 * **t2:t** for invariant, non-deleted t, dráttri pro *drátri
 * **v2:v** for invariant v

 * **%^UUML:0 %^IUML:0 %^eIUML:0 %^ØUML:0** : Umlaut types ,
 * **%^W:0 %^JI:0** : Cns changes ,
 * **%^EPH:0** : Epenthesis,  ,
 * **%^OEA:0** : ø to a

 * **%^GDEL:0 %^GGDEL:0 %^GVDEL:0 %^VDEL:0 %^JDEL:0 %^RDEL:0** : Cns deletion triggers,
 * **%^AB1:0 %^AB2:0 %^AB3:0 %^AB4:0 %^AB5:0 %^AB6:0 %^AB7:0** : Ablaut series ,
 * **%^aAB:0 %^uAB:0** : Ablaut series subcases
 * **%>:0** : Suffix border

 * **« »** : hmm, in use?

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


* *sting^NGKK^aAB>st*
* *stak0000st*



Rule: **ng to kk Part 1** changes n to k in ng:kk before ^NGKK trigger

Rule: **ng to kk Part 2** changes g to k in ng:kk before ^NGKK trigger



Rule: **Deleting v in gv sequences** Verschärverung II gives v:0 for gv:00 before ^GVDEL and in some other contexts

**Verschärfung tests:***

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

Rule: **Deleting r in Genitive of ur stems** 

* *brúður^EPH^RDEL>ar*
* *brúð00000ar*


Rule: **Deleting m in um%>num ** 

**Tests:**

* *ris>um>num*
* *ris0u00num*
* *skógv^GVDEL>m>num*
* *skó000000num*



Rule: **Deleting Double Consonant in Front of Consonant** 

The preceeding rule is fishy - the test cases below don't fit the context
requirements, and the >s# in the right context seems to indicate passive.
The rule conflicts with the "Cns Deletion in front of Pass" rule at the
end of the file - but only when using the Xerox tools! XXX - please have a look!

**Tests:**

* *hjall>s*
* *hjal00s*
* *rygg>s*
* *ryg00s*
* *hjall>ar*
* *hjall0ar*




* *all>t*
* *al00t*





## Verbal Sandhi rules

Rule: **Geminate Assimilation in Past Tense d** 

Rule: **Geminate Assimilation in Past Tense t** 

**Tests:**
* *send>di*
* *sen00di*
* *hirð>di*
* *hir00di*
* *sett>ti*
* *set00ti*



Rule: **ð Assimilation in Front of Dental Past Suffix -d(i)** 

* *leið>di*
* *leid0di*


**Tests:**

* *leið>di*
* *leid0di*
* *greið>di*
* *greid0di*
* *ryð^WVV>di*
* *rud00di*


Rule: **Deleting Double Consonant in Front of Epenthesis mark** 



**Tests:**

* *summar^EPH>i*
* *sum00r00i*
* *himmal^EPH^UUML>um*
* *him00l000um*


Rule: **Deleting stem-final s in s genitive** 

**Tests:**

* *primus>s*
* *primus00*
* *primus>s*
* *primus00*
* *grís>s*
* *grís00*


Rule: **Double ð Deletion** 


Rule: **ð Assimilation in Front of Supine Suffix -t** 

**Tests:**

* *leið>t*
* *leit0t*

Rule: **Adjusting Dental Past Suffix -d(i)** 

**Tests:**

* *keyp>di*
* *keyp0ti*
* *merk>di*
* *merk0ti*

## Adjectival sandhi rules

Rule: **Adjective neuter after nlr 1** 

Rule: **Adjective neuter after nlr 2** 

**Tests:**

* *mikil^EPH>t*
* *miki000ð*
* *gamal^EPH>t*
* *gamal00t*

Rule: **t Deletion in Neuter** 



j rules

Rule: **Deleting j** 

**Tests:**

* *kríggj^GDEL>num*
* *kríg0000num*
* *beiggj^JI>i*
* *beigg000i*
* *verkj^JDEL>ur*
* *verk000ur*
* *heyggj>i*
* *heygg00i*


Rule: **Realising j in front of vowels** 

**Tests:**

* *hylj2>ar*
* *hylj0ar*




Vowel rules  


Rule: **Realising i2 as i** 

**Tests:**


###  Epenthetic vowel rules

Rule: **Epenthetic deletion** 

**Tests:**

* *økur^EPH^UUML>um*
* *øk0r000um*
* *lykil^EPH>an*
* *lyk0l00an*
* *aftan^EPH>*
* *aftan00*
* *vakin^EPH>ir*
* *vak0n00ir*



Rule: **U-umlaut of Epenthetic vowel** 

**Tests:**

* *gamal^EPH^UUML*
* *gomul00*
* *gamal^EPH^UUML>u*
* *goml000u*


### Umlaut rules

Rule: **U-umlaut in Front of Nasal** 

* *tank^UUML*
* *tonk0*

**Tests:**

* *band^UUML*
* *bond00*
* *hamar^EPH^UUML>um*
* *hom0r000um*

Rule: **General U-umlaut** 

**Tests:**

* *dag^UUML>um*
* *døg00um*
* *sag^UUML>a*
* *søg00a*
* *all^UUML>*
* *øll00*


Rule: **U-umlaut for akur** 

**Tests:**

* *akur^EPH^UUML>um*
* *øk0r000um*

Rule: **I-umlaut** 

**Tests:**

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



Rule: **eI-umlaut** for o:e, á:e, i:e

Rule: **I-umlaut for bróðir ** 


Rule: **Inverted U-umlaut from ø** 

**Tests:**

* *fløtt^OEAa*
* *flatt0a*

Rule: **Inverted U-umlaut from o** 

**Tests:**

* *fonn^OA>ar*
* *fann00ar*


Rule: **o/ei-Umlaut I** 

Rule: **o/ei-Umlaut II** 

**Tests:**

* *dreing^EIO>i*
* *dro0ng00i*







### Vowel deletion rules

Rule: **Vowel deletion in front of na** 








### Verbal vowel alternation rules

Rule: **Stem vowel change in Weak Verbs** 

**Tests:**

* *flek^WVV>t*
* *flak00t*
* *flek^WVV>t*
* *flak00t*
* *vel^WVV>di*
* *val00di*


Rule: **Stem Vowel Shortening in Supine and Participle** 

**Tests:**

* *bít^VSHin>a*
* *bit00n>a*




Rule: **Past tense singular diphthongs I** 

Rule: **Past tense singular diphthongs II** 

**Tests:**

* *b0ít^AB1*
* *beit0*


Rule: **Past tense singular monophthongs** 

**Tests:**

* *gev^AB3*
* *gav0*

Rule: **Past tense plural monophthongs** 


Rule: **Past tense plural monophthongs to a** 



Rule: **Supine u** 


Rule: **Supine o** 


Rule: **Supine i** 


Rule: **Present tense ý** 




### Adjectival Sandhi rule

Rule: **Vowel shortening in Neuter** 

**Tests:**

* *góð>t*
* *got0t*
* *skjót>t*
* *skjót0t*


## Other rules

### Morphological passive rules

Rule: **u in ur Deletion in front of Pass** 

Rule: **r Deletion in front of Pass** 

Rule: **ð Deletion in front of Pass** 



* * *
<small>This (part of) documentation was generated from [../src/fst/phonology.twolc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/phonology.twolc)</small>















































% komma% :,      Root ;
% tjuohkkis% :%. Root ;
% kolon% :%:     Root ;
% sárggis% :%-   Root ; 
% násti% :%*     Root ; 

* * *
<small>This (part of) documentation was generated from [../src/transcriptions/transcriptor-numbers-digit2text.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/transcriptions/transcriptor-numbers-digit2text.lexc)</small>


We describe here how abbreviations are in Faroese are read out, e.g.
for text-to-speech systems.

For example:

 * s.:syntynyt # ;  
 * os.:omaa% sukua # ;  
 * v.:vuosi # ;  
 * v.:vuonna # ;  
 * esim.:esimerkki # ; 
 * esim.:esimerkiksi # ; 


* * *
<small>This (part of) documentation was generated from [../src/transcriptions/transcriptor-abbrevs2text.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/transcriptions/transcriptor-abbrevs2text.lexc)</small>































































































Declaring all the error tags


# Rule section




## Verbs


### Sg1 target forms

Sup should be 1Sg


Sup  should be 1Sg


Sup  should be Inf


Neu should be 1Sg

Imp Pl should be 1Sg


### Plural forms
Sup should be Pl





### Supine forms

Inf should be Sup


## Specific verbs

Past tens of láta is læt not lat

## Nouns


### Definiteness

Neu Indef should be Neu Def



### Quantor phrases

Num + N Sg should be Num + N Pl

Num + N Sg should be Num + N Pl (We need arabic tag here)


## Subjunctives


ta should be tað



## Adjectives

líti should be lítið




* * *
<small>This (part of) documentation was generated from [../tools/grammarcheckers/grammarchecker.cg3](http://github.com/giellalt/lang-fao/blob/main/../tools/grammarcheckers/grammarchecker.cg3)</small>