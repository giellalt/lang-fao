DEtte dokumnetet inneheld alle genererte former, deretter kommentarar.

* Scriptet er i src/scripts-katalogen.

# Genererte böyngsformer

##  Substantiv 
* Msc
 [Sg Nom](testir/TestMscSgNom.html)  //  
 [Sg Acc](testir/TestMscSgAcc.html)  //  
 [Sg Dat](testir/TestMscSgDat.html)  //  
 [Sg Gen](testir/TestMscSgGen.html)  //  
 [Pl Nom](testir/TestMscPlNom.html)  //  
 [Pl Acc](testir/TestMscPlAcc.html)  //  
 [Pl Dat](testir/TestMscPlDat.html)  //  
 [Pl Gen](testir/TestMscPlGen.html)

* Fem
 [Sg Nom](testir/TestFemSgNom.html)  //  
 [Sg Acc](testir/TestFemSgAcc.html)  //  
 [Sg Dat](testir/TestFemSgDat.html)  //  
 [Sg Gen](testir/TestFemSgGen.html)  //  
 [Pl Nom](testir/TestFemPlNom.html)  //  
 [Pl Acc](testir/TestFemPlAcc.html)  //  
 [Pl Dat](testir/TestFemPlDat.html)  //  
 [Pl Gen](testir/TestFemPlGen.html)

* Neu
 [Sg Nom](testir/TestNeuSgNom.html)  //  
 [Sg Acc](testir/TestNeuSgAcc.html)  //  
 [Sg Dat](testir/TestNeuSgDat.html)  //  
 [Sg Gen](testir/TestNeuSgGen.html)  //  
 [Pl Nom](testir/TestNeuPlNom.html)  //  
 [Pl Acc](testir/TestNeuPlAcc.html)  //  
 [Pl Dat](testir/TestNeuPlDat.html)  //  
 [Pl Gen](testir/TestNeuPlGen.html)

##  Adjektiv
* Msc
     [Adj Msc SgAcc](testir/AdjTestMscSgAcc.html)
 //  [Adj Msc SgGen](testir/AdjTestMscSgGen.html)
 //  [Adj Msc PlAcc](testir/AdjTestMscPlAcc.html)
 //  [Adj Msc PlGen](testir/AdjTestMscPlGen.html)
 //  [Adj Msc CompSgNom](testir/AdjTestMscCompSgNom.html)
 //  [Adj Msc SuperlSgNom](testir/AdjTestMscSuperlSgNom.html)

* Fem
 [Adj Fem SgAcc](testir/AdjTestFemSgAcc.html)  //  
 [Adj Fem SgGen](testir/AdjTestFemSgGen.html)  //  
 [Adj Fem PlAcc](testir/AdjTestFemPlAcc.html)  //  
 [Adj Fem PlGen](testir/AdjTestFemPlGen.html)  //  
 [Adj Fem CompSgNom](testir/AdjTestFemCompSgNom.html)  //  
 [Adj Fem SuperlSgNom](testir/AdjTestFemSuperlSgNom.html)

* Neu
 [Adj Neu CompSgNom](testir/AdjTestNeuCompSgNom.html)
 //  [Adj Neu PlAcc](testir/AdjTestNeuPlAcc.html)
 //  [Adj Neu PlGen](testir/AdjTestNeuPlGen.html)
 //  [Adj Neu SgAcc](testir/AdjTestNeuSgAcc.html)
 //  [Adj Neu SgGen](testir/AdjTestNeuSgGen.html)
 //  [Adj Neu SuperlSgNom](testir/AdjTestNeuSuperlSgNom.html)

#  Verb

* Finitte [Ind Prs1Sg](testir/VerbTestIndPrs1Sg.html)
 //  [Ind Prs3Sg](testir/VerbTestIndPrs3Sg.html)
 //  [Ind PrsPl1](testir/VerbTestIndPrsPl1.html)
 //  [Ind PrsPl3](testir/VerbTestIndPrsPl3.html)
 //  [Ind Prt1Sg](testir/VerbTestIndPrt1Sg.html)
 //  [Ind Prt3Sg](testir/VerbTestIndPrt3Sg.html)
 //  [Ind PrtPl1](testir/VerbTestIndPrtPl1.html)
 //  [Ind PrtPl3](testir/VerbTestIndPrtPl3.html)

* Infinitte [Act PrfPtc](testir/VerbTestActPrfPtc.html)
 //  [Act PrsPtc](testir/VerbTestActPrsPtc.html)

# Korleis handsame feil

Analysatoren består av
* ei liste av lemma, stamme og suffiks
* eit sett av reglar for morfofonologiske vekslingar

Feil kan oppstå t.d. ved at
* det kan vere skrivefeil i alle delane av koden
* orda kan vere klassifisert feil
* orda kan peike til feil kontinuasjonsleksikon (bøyingsmønster)
* bøyingsleksikonet kan innehalde feil suffiks
* det kan vere feil i dei morfofonologiske reglane
* det kan hende at styringssymbol (^EDH, ..) ikkje er deklarert i root.lexc

Ver serleg merksam på
* komparativ og superlativ
* verbas partisippformer
* ord med uregelrett böying
* eit godt råd er å lese nedover i god fart og sjå etter rare bokstavkombinasjonar
