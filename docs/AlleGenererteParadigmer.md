# Testing av den færøyske analysatoren



## Ulike testslider

-   Generering av morfologiske paradigme:
    [Mask.](word_form_nouns_generator-gt-norm_table_k.html),
    [Fem.](word_form_nouns_generator-gt-norm_table_kv.html),
    [Neu.](word_form_nouns_generator-gt-norm_table_h.html),
    [Adj.](word_form_nouns_generator-gt-norm_table_l.html),
    [Verb](word_form_nouns_generator-gt-norm_table_s.html)
-   [Testresult frå dei morfologiske testfilene](YamlResults.md)
-   [Gammal testdagbok](fao-testdiary.md)


## Genererte bøyngsformer

Her følgjer alle genererte former av alle orda i analysatoren, deretter kjem det kommentarar. Poenget er å lese gjennom paradigmene og sjekke om det er feil der. Scriptet som genererer desse filene er i `src/scripts`-katalogen.


###  Substantiv 
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

###  Adjektiv
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

###  Verb

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


## Making new types of tests

-   [Making new tests: Adding morphological test data](/infra/infraremake/AddingMorphologicalTestData.html)
-   [Technical documentation for test scripts](/infra/infraremake/TestScriptsInTheNewInfra.html)


