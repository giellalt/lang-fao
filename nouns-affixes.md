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

These are lexica with number 0, they have no inflectional morphology.

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

__k1_3stem__ for 3-syllabic stams like *felagi*, mixed dative forms + UUML

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

__k12_bui__ 

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

__k38e_2__ for  súgvur

**k38** for  bógvur

*k38e* for sg

*k_flt38* for pl

**k39** for  sjógvur

*k39e* for sg

*k_flt39* for pl

__k40e_2__ for  hógvur2

__k40_3__ for  skúgvur

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

###  Neuter forms

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

__DF_NA_PLf__ for *nar

__DF_NA_PLf_inar__ for *inar

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
