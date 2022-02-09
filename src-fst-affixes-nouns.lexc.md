# Faroese Noun morphology 

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

<small>This (part of) documentation was generated from [src/fst/affixes/nouns.lexc](https://github.com/giellalt/lang-fao/blob/main/src/fst/affixes/nouns.lexc)</small>

---

