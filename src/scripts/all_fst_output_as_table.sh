
echo "No genererer vi paradigmer for alle orda og legg dei i lang-fao/doc/testir\n"
echo "\n"
echo "Først maskuline substantiv\n"
 
 # Msc
 cat src/fst/stems/nouns.lexc |grep " k[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Msc+Sg+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestMscSgNom.xml
 
 cat src/fst/stems/nouns.lexc |grep " k[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Msc+Pl+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestMscPlNom.xml
 
  cat src/fst/stems/nouns.lexc |grep " k[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Msc+Sg+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestMscSgAcc.xml
 
 cat src/fst/stems/nouns.lexc |grep " k[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Msc+Pl+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestMscPlAcc.xml
 
 cat src/fst/stems/nouns.lexc |grep " k[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Msc+Sg+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestMscSgGen.xml
 
 cat src/fst/stems/nouns.lexc |grep " k[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Msc+Pl+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestMscPlGen.xml
 
 cat src/fst/stems/nouns.lexc |grep " k[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Msc+Sg+Dat+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestMscSgDat.xml
 
 cat src/fst/stems/nouns.lexc |grep " k[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Msc+Pl+Dat+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestMscPlDat.xml
 
echo "så feminine substantiv\n"
 
 # Fem
 cat src/fst/stems/nouns.lexc |grep " kv[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Fem+Sg+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestFemSgNom.xml
 
 cat src/fst/stems/nouns.lexc |grep " kv[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Fem+Pl+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestFemPlNom.xml
 
  cat src/fst/stems/nouns.lexc |grep " kv[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Fem+Sg+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestFemSgAcc.xml
 
 cat src/fst/stems/nouns.lexc |grep " kv[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Fem+Pl+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestFemPlAcc.xml
 
 cat src/fst/stems/nouns.lexc |grep " kv[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Fem+Sg+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestFemSgGen.xml
 
 cat src/fst/stems/nouns.lexc |grep " kv[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Fem+Pl+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestFemPlGen.xml
 
 cat src/fst/stems/nouns.lexc |grep " kv[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Fem+Sg+Dat+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestFemSgDat.xml
 
 cat src/fst/stems/nouns.lexc |grep " kv[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Fem+Pl+Dat+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestFemPlDat.xml
 
echo "så nøytrums substantiv\n"

 # Neu
 cat src/fst/stems/nouns.lexc |grep " h[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Neu+Sg+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestNeuSgNom.xml
 
 cat src/fst/stems/nouns.lexc |grep " h[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Neu+Pl+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestNeuPlNom.xml
 
 cat src/fst/stems/nouns.lexc |grep " h[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Neu+Sg+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestNeuSgAcc.xml
 
 cat src/fst/stems/nouns.lexc |grep " h[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Neu+Pl+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestNeuPlAcc.xml
 
 cat src/fst/stems/nouns.lexc |grep " h[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Neu+Sg+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestNeuSgGen.xml
 
 cat src/fst/stems/nouns.lexc |grep " h[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Neu+Pl+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestNeuPlGen.xml
 
 cat src/fst/stems/nouns.lexc |grep " h[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Neu+Sg+Dat+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestNeuSgDat.xml
 
 cat src/fst/stems/nouns.lexc |grep " h[0-9].*;"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Neu+Pl+Dat+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/TestNeuPlDat.xml
 

 
 echo "Så finitte verb\n"
 
 # verbs

 cat src/fst/stems/verbs.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+V+Ind+Prs+1Sg/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/VerbTestIndPrs1Sg.xml
 
 cat src/fst/stems/verbs.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+V+Ind+Prs+3Sg/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/VerbTestIndPrs3Sg.xml
 
 cat src/fst/stems/verbs.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+V+Ind+Prs+Pl1/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/VerbTestIndPrsPl1.xml
 
 cat src/fst/stems/verbs.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+V+Ind+Prs+Pl3/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/VerbTestIndPrsPl3.xml
 
 cat src/fst/stems/verbs.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+V+Ind+Prt+1Sg/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/VerbTestIndPrt1Sg.xml
 
 cat src/fst/stems/verbs.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+V+Ind+Prt+3Sg/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/VerbTestIndPrt3Sg.xml
 
 cat src/fst/stems/verbs.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+V+Ind+Prt+Pl1/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/VerbTestIndPrtPl1.xml
 
 cat src/fst/stems/verbs.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+V+Ind+Prt+Pl3/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/VerbTestIndPrtPl3.xml
 
 echo "Så infinitte verb\n"
 
 cat src/fst/stems/verbs.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+V+PrfPtc+Msc+Sg+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/VerbTestActPrfPtc.xml
 
 cat src/fst/stems/verbs.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+V+PrsPtc+Msc+Sg+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/VerbTestActPrsPtc.xml
 
 

 echo "så adjektiv i maskulin\n"
 # Adjectives
 
 ## AdjMsc
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestMscSgAcc.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Pl+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestMscPlAcc.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Pl+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestMscPlGen.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestMscSgGen.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestMscSgGen.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Pl+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestMscPlGen.xml

 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Superl+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestMscSuperlSgNom.xml

 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Compar+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestMscCompSgNom.xml

 echo "så adjektiv i feminin\n"

 ## AdjFem
  cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestFemSgAcc.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Pl+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestFemPlAcc.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Pl+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestFemPlGen.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestFemSgGen.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestFemSgGen.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Pl+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestFemPlGen.xml

 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Superl+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestFemSuperlSgNom.xml

 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Compar+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestFemCompSgNom.xml

 echo "så adjektiv i nøytrum\n"

 ##AdjNeu
  cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestNeuSgAcc.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Pl+Acc+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestNeuPlAcc.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Pl+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestNeuPlGen.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestNeuSgGen.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestNeuSgGen.xml
 
 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Pl+Gen+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestNeuPlGen.xml

 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Superl+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestNeuSuperlSgNom.xml

 cat src/fst/stems/adjectives.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+A+Msc+Sg+Compar+Nom+Indef/'|hfst-lookup -q src/generator-gt-norm.hfstol| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testir/AdjTestNeuCompSgNom.xml


echo "... og så var vi ferdig\n" 
