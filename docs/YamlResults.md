Her kjem eit oversyn over testresultat

#  Utvikling 
* 4.3. 2017: SUMMARY for the gt-norm fst(s): PASSES: 30428 / FAILS: 1104 / TOTAL: 31532
* 11.3. 2017: SUMMARY for the gt-norm fst(s): PASSES: 10695 / FAILS: 211 / TOTAL: 10906

Testmaterialet i verbfilene er frå Heðin Jákupsson. 
Grunnen til at talet på testar er redusert frå 30000 til 10000 er at 
verb som berre hadde infinitiv, og verb som representerte bøyingspardigme
som allereie hadde ein representativ test, vart fjerna frå testmaterialet.
Filnamna viser til bøyingskoder i Føroysk orðabók.

#  Oversyn over feil, 11.3.

Kvar fil __V-s2x1_gt-norm.yaml__ osb. viser til ei fil i katalogen
`fao/test/src/gt-norm-yamls/` (for dei som har sjekka ut filene), evt.
[https://gtsvn.uit.no/langtech/trunk/langs/fao/test/src/gt-norm-yamls/]
(på nett). Den siste fila skil seg frå dei andre ved at ho inneheld 
verb frå alle moglege bøyingsklasser, ho er med andre ord ikkje
delt opp og ordna etter bøyingsklasse. Grunnen til at dei andre er delt
opp er at det er lettare å ha oversyn over 10000 testar når dei
er ordna etter bøyingsklasse, så i prinsippet burde også denne fila ha vore
delt opp, men i det minste er no testparadigmene der.

Feila er av to typar, genereringsfeil og analysefeil, genereringsfeila
har grammatiske taggar til vesntre for pilsymbolet. Det kan vere fleire
grunnar til at testen gjev FAIL:

1. Testfila kan innehalde feil paradigme. **Slike feil må rettast**
1. Ei ordform kan mangle (eller vere for mykje) i `src/fst/affixes/verbs.lexc`
1. Det kan vere ein feil i ein fonologisk regel i `src/phonology/fao-phon.twolc`

Første steg i arbeidsprosessen er å sikre seg at det målet vi arbeider
mot er det målet vi vil ha, dvs. at testfilene er korrekte.

## V-s2x1_gt-norm.yaml

### Genereringsfeil

```
[3/6][PASS] mæla+V+Ind+Prt+Sg => mældi
[3/6][FAIL] mæla+V+Ind+Prt+Sg => Unexpected results: mælti
```

## V-s2x30_gt-norm.yaml

### Genereringsfeil
```
[6/6][PASS] skjóla+V+PrfPrc => skjólaður
[6/6][FAIL] skjóla+V+PrfPrc => Missing results: skjóltur
[6/6][FAIL] skjóla+V+PrfPrc => Unexpected results: skjóldur
```

### Analysefeil
```
[10/11][FAIL] skjóltur => Missing results: skjóla+V+PrfPrc
```

## V-s30x6_gt-norm.yaml

### Genereringsfeil
```
[1/6][PASS] varða+V+Inf => varða
[2/6][FAIL] varða+V+Ind+Prs+Sg => Missing results: varðar, varðir
[2/6][FAIL] varða+V+Ind+Prs+Sg => Unexpected results: varða+V+Ind+Prs+Sg+?
[3/6][PASS] varða+V+Ind+Prt+Sg => vardi
[3/6][FAIL] varða+V+Ind+Prt+Sg => Missing results: vardaði
[3/6][FAIL] varða+V+Ind+Prt+Sg => Unexpected results: varðaði
[4/6][PASS] varða+V+Ind+Prt+Pl => vardu
[4/6][FAIL] varða+V+Ind+Prt+Pl => Missing results: vardaðu
[4/6][FAIL] varða+V+Ind+Prt+Pl => Unexpected results: varðaðu
[5/6][PASS] varða+V+Sup => vart
[5/6][FAIL] varða+V+Sup => Missing results: vardað
[5/6][FAIL] varða+V+Sup => Unexpected results: varðað
[6/6][PASS] varða+V+PrfPrc => vardur
[6/6][FAIL] varða+V+PrfPrc => Missing results: vardaður
[6/6][FAIL] varða+V+PrfPrc => Unexpected results: varðaður
```

### Analysefeil
```
[ 1/11][PASS] varða => varða+V+Inf
[ 2/11][FAIL] varðar => Missing results: varða+V+Ind+Prs+Sg
[ 3/11][FAIL] varðir => Missing results: varða+V+Ind+Prs+Sg
[ 4/11][FAIL] vardaði => Missing results: varða+V+Ind+Prt+Sg
[ 5/11][PASS] vardi => varða+V+Ind+Prt+Sg
[ 6/11][FAIL] vardaðu => Missing results: varða+V+Ind+Prt+Pl
[ 7/11][PASS] vardu => varða+V+Ind+Prt+Pl
[ 8/11][FAIL] vardað => Missing results: varða+V+Sup
[ 9/11][PASS] vart => varða+V+Sup
[10/11][FAIL] vardaður => Missing results: varða+V+PrfPrc
[11/11][PASS] vardur => varða+V+PrfPrc
```

## V-s30x9_gt-norm.yaml

Sjå på denne: Det finst to verb kippa: s30/9 og s9.

### Genereringsfeil
```
[6/6][FAIL] kippa+V+PrsPrf => Missing results: kiptur, kippaður
[6/6][FAIL] kippa+V+PrsPrf => Unexpected results: kippa+V+PrsPrf+?
```

### Analysefeil
```
[10/11][FAIL] kippaður => Missing results: kippa+V+PrsPrf
[11/11][FAIL] kiptur => Missing results: kippa+V+PrsPrf
```

## V-s35_gt-norm.yaml

```
[3/5][PASS] bíta+V+Ind+Prt+3Sg => beit
[3/5][FAIL] bíta+V+Ind+Prt+3Sg => Unexpected results: bít
```

## V-s36x2_gt-norm.yaml

```
[1/5][PASS] svíkja+V+Inf => svíkja
[1/5][FAIL] svíkja+V+Inf => Unexpected results: svíkjja
[2/5][PASS] svíkja+V+Ind+Prs+3Sg => svíkur
[2/5][FAIL] svíkja+V+Ind+Prs+3Sg => Unexpected results: svíkjir, svíkjur
[3/5][PASS] svíkja+V+Ind+Prt+3Sg => sveik
[3/5][FAIL] svíkja+V+Ind+Prt+3Sg => Unexpected results: sveikj, svík, svíkj
[4/5][PASS] svíkja+V+Ind+Prt+Pl => sviku
[4/5][FAIL] svíkja+V+Ind+Prt+Pl => Unexpected results: svikju, svíkjtu
[5/5][PASS] svíkja+V+Sup => svikið
[5/5][FAIL] svíkja+V+Sup => Unexpected results: svíkjt, svikjið
```

## V-s37_gt-norm.yaml

```
[3/4][PASS] bróta+V+Ind+Prt+3Sg => breyt
[3/4][FAIL] bróta+V+Ind+Prt+3Sg => Unexpected results: brót
```

## V-s40_gt-norm.yaml

```
[3/5][PASS] fúka+V+Ind+Prt+3Sg => feyk
[3/5][FAIL] fúka+V+Ind+Prt+3Sg => Unexpected results: fúk
```

## V-s41_gt-norm.yaml

```
[3/5][PASS] flúga+V+Ind+Prt+3Sg => fleyg
[3/5][FAIL] flúga+V+Ind+Prt+3Sg => Unexpected results: flúg

[3/5][PASS] flúgva+V+Ind+Prt+3Sg => fleyg
[3/5][FAIL] flúgva+V+Ind+Prt+3Sg => Unexpected results: flúg
```

## V-s47x19_gt-norm.yaml

```
[1/4][PASS] svimja+V+Inf => svimja
[1/4][FAIL] svimja+V+Inf => Unexpected results: svimjja, svimjimja
[2/4][PASS] svimja+V+Ind+Prs+3Sg => svimur
[2/4][FAIL] svimja+V+Ind+Prs+3Sg => Unexpected results: svimjur, svimjimur
[3/4][PASS] svimja+V+Ind+Prt+3Sg => svam
[3/4][FAIL] svimja+V+Ind+Prt+3Sg => Unexpected results: svimjam
[4/4][PASS] svimja+V+Ind+Prt+Pl => svumu
[4/4][FAIL] svimja+V+Ind+Prt+Pl => Unexpected results: svimjdu, svimjumu
```

## V-s52x30_gt-norm.yaml

```
[2/5][PASS] veva+V+Ind+Prs+3Sg => vevur
[2/5][FAIL] veva+V+Ind+Prs+3Sg => Unexpected results: vevar
[4/5][PASS] veva+V+Ind+Prt+Pl => vóvu
[4/5][FAIL] veva+V+Ind+Prt+Pl => Unexpected results: vevaðu
[5/5][PASS] veva+V+Sup => vovið
[5/5][FAIL] veva+V+Sup => Unexpected results: vevað
```

## V-s58_gt-norm.yaml

```
[2/5][PASS] mala+V+Ind+Prs+3Sg => melur
[2/5][FAIL] mala+V+Ind+Prs+3Sg => Unexpected results: malir
[4/5][PASS] mala+V+Ind+Prt+Pl => mólu
[4/5][FAIL] mala+V+Ind+Prt+Pl => Unexpected results: maldu
[5/5][PASS] mala+V+Sup => malið
[5/5][FAIL] mala+V+Sup => Unexpected results: malt
```

## V-s66_gt-norm.yaml

### Genereringsfeil
```
[2/4][PASS] biðja+V+Ind+Prs+3Sg => biður
[2/4][FAIL] biðja+V+Ind+Prs+3Sg => Missing results: bað
```

### Analysefeil
```
[3/5][FAIL] bað => Missing results: biðja+V+Ind+Prs+3Sg
```

## V-s68_gt-norm.yaml

### Genereringsfeil
```
[2/5][PASS] hvørva+V+Ind+Prs+3Sg => hvørvir
[2/5][FAIL] hvørva+V+Ind+Prs+3Sg => Unexpected results: hvørvur
[3/5][PASS] hvørva+V+Ind+Prt+Sg => hvørvdi
[3/5][FAIL] hvørva+V+Ind+Prt+Sg => Missing results: hvørvdu
[4/5][PASS] hvørva+V+Sup => hvørvt
[4/5][FAIL] hvørva+V+Sup => Unexpected results: horvið, hvorvið
```

### Analysefeil
```
[4/6][FAIL] hvørvdu => Missing results: hvørva+V+Ind+Prt+Sg
```

## V-s6x30_gt-norm.yaml; popd

```
[3/6][PASS] vanyrða+V+Ind+Prt+Sg => vanyrdi
[3/6][FAIL] vanyrða+V+Ind+Prt+Sg => Unexpected results: vanyrðaði
[4/6][PASS] vanyrða+V+Ind+Prt+Pl => vanyrdu
[4/6][FAIL] vanyrða+V+Ind+Prt+Pl => Unexpected results: vanyrðaðu
[5/6][PASS] vanyrða+V+Sup => vanyrt
[5/6][FAIL] vanyrða+V+Sup => Unexpected results: vanyrðað
[6/6][PASS] vanyrða+V+PrfPrc => vanyrdur
[6/6][FAIL] vanyrða+V+PrfPrc => Unexpected results: vanyrðaður
```

## V-s70_gt-norm.yaml

```
[4/6][PASS] siga+V+Ind+Prt+Pl => søgdu
[4/6][FAIL] siga+V+Ind+Prt+Pl => Unexpected results: søgðu
```

## V-s70_gt-norm.yaml; popd

```
[4/6][PASS] siga+V+Ind+Prt+Pl => søgdu
[4/6][FAIL] siga+V+Ind+Prt+Pl => Unexpected results: søgðu
```

## V-s73_gt-norm.yaml; popd

```
[1/6][PASS] læa+V+Inf => læa
[1/6][FAIL] læa+V+Inf => Unexpected results: lælæa
[2/6][PASS] læa+V+Ind+Prs+3Sg => læar
[2/6][FAIL] læa+V+Ind+Prs+3Sg => Unexpected results: lælærur
[3/6][PASS] læa+V+Ind+Prt+Sg => læaði
[3/6][FAIL] læa+V+Ind+Prt+Sg => Unexpected results: lælædi
[4/6][PASS] læa+V+Ind+Prt+Pl => læaðu
[4/6][FAIL] læa+V+Ind+Prt+Pl => Unexpected results: lælædu
[5/6][PASS] læa+V+Sup => læað
[5/6][FAIL] læa+V+Sup => Unexpected results: lælæðað, lælæiðað
[6/6][PASS] læa+V+PrfPrc => læaður
[6/6][FAIL] læa+V+PrfPrc => Unexpected results: lælæðaður, lælæiðaður
```

## V-s7_gt-norm.yaml

```
[2/3][PASS] rista+V+Ind+Prs+3Sg => ristir
[2/3][FAIL] rista+V+Ind+Prs+3Sg => Unexpected results: ristar
[3/3][PASS] rista+V+Sup => rist
[3/3][FAIL] rista+V+Sup => Unexpected results: ristað
```

## V-s8x30_gt-norm.yaml

```
[1/4][PASS] glimma+V+Ind+Prt+Sg => glimdi
[1/4][FAIL] glimma+V+Ind+Prt+Sg => Unexpected results: glimmaði
[2/4][PASS] glimma+V+Ind+Prt+Pl => glimdu
[2/4][FAIL] glimma+V+Ind+Prt+Pl => Unexpected results: glimmaðu
[3/4][PASS] glimma+V+Sup => glimt
[3/4][FAIL] glimma+V+Sup => Unexpected results: glimmað
[4/4][PASS] glimma+V+PrfPrc => glimdur
[4/4][FAIL] glimma+V+PrfPrc => Unexpected results: glimmaður
```

## V-s9_gt-norm.yaml

```
[6/6][FAIL] klippa+v1+V+PrfPrc => Missing results: kliptur
[6/6][FAIL] klippa+v1+V+PrfPrc => Unexpected results: klipdur
```

## V-s9x30_gt-norm.yaml

### Genereringsfeil
```
[6/6][PASS] stilla+V+PrfPrc => stillaður
[6/6][FAIL] stilla+V+PrfPrc => Missing results: stiltur
[6/6][FAIL] stilla+V+PrfPrc => Unexpected results: stildur
```

### Analysefeil
```
[10/11][FAIL] stiltur => Missing results: stilla+V+PrfPrc
```

## V-verbs_gt-norm.yaml

### Genereringsfeil:

```
[ 219/4484][PASS] bjóða+V+Ind+Prt+3Sg => beyð
[ 219/4484][FAIL] bjóða+V+Ind+Prt+3Sg => Missing results: bjóðaði
[ 219/4484][FAIL] bjóða+V+Ind+Prt+3Sg => Unexpected results: búði
--
[ 221/4484][PASS] bjóða+V+PrfPrc => bjóðaður
[ 221/4484][FAIL] bjóða+V+PrfPrc => Missing results: boðin
--
[ 222/4484][PASS] bjóða+V+Sup => bjóðað
[ 222/4484][FAIL] bjóða+V+Sup => Missing results: boðið
[ 222/4484][FAIL] bjóða+V+Sup => Unexpected results: bóðið
--
[ 333/4484][PASS] bróta+V+Ind+Prt+3Sg => breyt
[ 333/4484][FAIL] bróta+V+Ind+Prt+3Sg => Unexpected results: brót
--
[ 366/4484][PASS] bíta+V+Ind+Prt+3Sg => beit
[ 366/4484][FAIL] bíta+V+Ind+Prt+3Sg => Unexpected results: bít
--
[ 465/4484][PASS] doyða+V+Ind+Prt+Pl => doyddu
[ 465/4484][FAIL] doyða+V+Ind+Prt+Pl => Unexpected results: doyðu
--
[ 476/4484][PASS] drifta+V+Ind+Prt+Pl => driftaðu
[ 476/4484][FAIL] drifta+V+Ind+Prt+Pl => Unexpected results: drifttu
--
[ 477/4484][PASS] drifta+V+Ind+Prt+Sg => driftaði
[ 477/4484][FAIL] drifta+V+Ind+Prt+Sg => Unexpected results: driftti
--
[ 479/4484][PASS] drifta+V+PrfPrc => driftaður
[ 479/4484][FAIL] drifta+V+PrfPrc => Unexpected results: driftdur
--
[ 584/4484][PASS] elda+V+Ind+Prt+Pl => eldaðu
[ 584/4484][FAIL] elda+V+Ind+Prt+Pl => Unexpected results: elddu
--
[ 585/4484][PASS] elda+V+Ind+Prt+Sg => eldaði
[ 585/4484][FAIL] elda+V+Ind+Prt+Sg => Unexpected results: elddi
--
[ 587/4484][PASS] elda+V+PrfPrc => eldaður
[ 587/4484][FAIL] elda+V+PrfPrc => Unexpected results: elddur
--
[ 588/4484][PASS] elda+V+Sup => eldað
[ 588/4484][FAIL] elda+V+Sup => Unexpected results: eldt
--
[ 595/4484][PASS] elta+V+Ind+Prs+3Sg => eltir
[ 596/4484][FAIL] elta+V+Ind+Prt+Sg => Missing results: eldi
[ 596/4484][FAIL] elta+V+Ind+Prt+Sg => Unexpected results: eltti
--
[ 837/4484][PASS] flúga+V+Ind+Prt+3Sg => fleyg
[ 837/4484][FAIL] flúga+V+Ind+Prt+3Sg => Unexpected results: flúg
--
[ 842/4484][PASS] flúgva+V+Ind+Prt+3Sg => fleyg
[ 842/4484][FAIL] flúgva+V+Ind+Prt+3Sg => Unexpected results: flúg
--
[1063/4484][PASS] fúka+V+Ind+Prt+3Sg => feyk
[1063/4484][FAIL] fúka+V+Ind+Prt+3Sg => Unexpected results: fúk
--
[1177/4484][PASS] glotta+V+Ind+Prt+Sg => glottaði
[1177/4484][FAIL] glotta+V+Ind+Prt+Sg => Unexpected results: glotti
--
[1179/4484][PASS] glotta+V+PrfPrc => glottaður
[1179/4484][FAIL] glotta+V+PrfPrc => Unexpected results: glotdur
--
[1527/4484][PASS] hvørva+V+Ind+Prs+3Sg => hvørvur
[1527/4484][FAIL] hvørva+V+Ind+Prs+3Sg => Missing results: hvarv
[1527/4484][FAIL] hvørva+V+Ind+Prs+3Sg => Unexpected results: hvørvir
--
[1528/4484][PASS] hvørva+V+Ind+Prt+Pl => hvurvu
[1528/4484][FAIL] hvørva+V+Ind+Prt+Pl => Unexpected results: hvørvdu
--
[1530/4484][PASS] hvørva+V+Sup => hvorvið
[1530/4484][FAIL] hvørva+V+Sup => Unexpected results: hvørvt
--
[1577/4484][PASS] hætta+V+Ind+Prt+Sg => hættaði
[1577/4484][FAIL] hætta+V+Ind+Prt+Sg => Unexpected results: hætti
--
[1579/4484][PASS] hætta+V+PrfPrc => hættaður
[1579/4484][FAIL] hætta+V+PrfPrc => Unexpected results: hætdur
--
[1595/4484][PASS] hótta+V+Ind+Prt+Sg => hóttaði
[1595/4484][FAIL] hótta+V+Ind+Prt+Sg => Unexpected results: hótti
--
[1597/4484][PASS] hótta+V+PrfPrc => hóttaður
[1597/4484][FAIL] hótta+V+PrfPrc => Unexpected results: hótdur
--
[1711/4484][PASS] kapptelva+V+PrfPrc => kapptelvaður
[1712/4484][FAIL] kapptelva+V+Sup => Missing results: kapptelvað‚ kapptelvt
[1712/4484][FAIL] kapptelva+V+Sup => Unexpected results: kapptelvað, kapptelvt
--
[1756/4484][PASS] kippa+V+Ind+Prt+Sg => kippaði
[1756/4484][FAIL] kippa+V+Ind+Prt+Sg => Unexpected results: kipti
--
[1758/4484][PASS] kippa+V+PrfPrc => kippaður
[1758/4484][FAIL] kippa+V+PrfPrc => Unexpected results: kipdur
--
[1780/4484][PASS] kleppa+V+Ind+Prt+Sg => kleppaði
[1780/4484][FAIL] kleppa+V+Ind+Prt+Sg => Unexpected results: klepti
--
[1782/4484][PASS] kleppa+V+PrfPrc => kleppaður
[1782/4484][FAIL] kleppa+V+PrfPrc => Unexpected results: klepdur
--
[1816/4484][PASS] kneppa+V+Ind+Prt+Sg => kneppaði
[1816/4484][FAIL] kneppa+V+Ind+Prt+Sg => Unexpected results: knepti
--
[1818/4484][PASS] kneppa+V+PrfPrc => kneppaður
[1818/4484][FAIL] kneppa+V+PrfPrc => Unexpected results: knepdur
--
[1929/4484][PASS] kvetta+V+Ind+Prt+Pl => kvuttu
[1929/4484][FAIL] kvetta+V+Ind+Prt+Pl => Unexpected results: kvetdu
--
[1934/4484][PASS] kvinka+V+Ind+Prt+Sg => kvinkaði
[1934/4484][FAIL] kvinka+V+Ind+Prt+Sg => Unexpected results: kvinkti
--
[1936/4484][PASS] kvinka+V+PrfPrc => kvinkaður
[1936/4484][FAIL] kvinka+V+PrfPrc => Unexpected results: kvinkdur
--
[1963/4484][PASS] kylla+V+Ind+Prt+Pl => kyltu
[1964/4484][FAIL] kylla+V+Ind+Prt+Sg => Missing results: kyldi
[1964/4484][FAIL] kylla+V+Ind+Prt+Sg => Unexpected results: kylti
--
[2082/4484][PASS] lissa+V+Ind+Prt+Sg => lissaði
[2082/4484][FAIL] lissa+V+Ind+Prt+Sg => Unexpected results: listi
--
[2084/4484][PASS] lissa+V+PrfPrc => lissaður
[2084/4484][FAIL] lissa+V+PrfPrc => Unexpected results: lisdur
--
[2085/4484][PASS] lissa+V+Sup => lissað
[2085/4484][FAIL] lissa+V+Sup => Unexpected results: list
--
[2209/4484][PASS] løna+V+Ind+Prt+Sg => lønaði
[2209/4484][FAIL] løna+V+Ind+Prt+Sg => Unexpected results: lønti
--
[2211/4484][PASS] løna+V+PrfPrc => lønaður
[2211/4484][FAIL] løna+V+PrfPrc => Unexpected results: løndur
--
[2244/4484][PASS] mala+V+Ind+Prs+3Sg => malir
[2244/4484][FAIL] mala+V+Ind+Prs+3Sg => Unexpected results: melur
--
[2245/4484][PASS] mala+V+Ind+Prt+Pl => maldu
[2245/4484][FAIL] mala+V+Ind+Prt+Pl => Unexpected results: mólu
--
[2249/4484][PASS] mala+V+Sup => malt
[2249/4484][FAIL] mala+V+Sup => Unexpected results: malið
--
[2351/4484][PASS] misunna+V+Ind+Prt+Sg => misunnaði
[2351/4484][FAIL] misunna+V+Ind+Prt+Sg => Unexpected results: misunti
--
[2353/4484][PASS] misunna+V+PrfPrc => misunnaður
[2353/4484][FAIL] misunna+V+PrfPrc => Unexpected results: misundur
--
[2391/4484][PASS] mæla+V+Ind+Prt+Sg => mældi
[2391/4484][FAIL] mæla+V+Ind+Prt+Sg => Unexpected results: mælti
--
[2397/4484][PASS] mótmæla+V+Ind+Prt+Sg => mótmældi
[2397/4484][FAIL] mótmæla+V+Ind+Prt+Sg => Unexpected results: mótmælti
--
[2439/4484][PASS] nenna+V+Ind+Prt+Sg => nennaði
[2439/4484][FAIL] nenna+V+Ind+Prt+Sg => Unexpected results: nenti
--
[2441/4484][PASS] nenna+V+PrfPrc => nennaður
[2441/4484][FAIL] nenna+V+PrfPrc => Unexpected results: nendur
--
[2737/4484][PASS] ringa+V+Ind+Prt+Pl => ringaðu
[2737/4484][FAIL] ringa+V+Ind+Prt+Pl => Missing results: ringaði
[2737/4484][FAIL] ringa+V+Ind+Prt+Pl => Unexpected results: ringdu
--
[2739/4484][PASS] ringa+V+PrfPrc => ringaður
[2739/4484][FAIL] ringa+V+PrfPrc => Unexpected results: ringdur
--
[2747/4484][PASS] rippa+V+Ind+Prt+Sg => rippaði
[2747/4484][FAIL] rippa+V+Ind+Prt+Sg => Unexpected results: ripti
--
[2749/4484][PASS] rippa+V+PrfPrc => rippaður
[2749/4484][FAIL] rippa+V+PrfPrc => Unexpected results: ripdur
--
[2751/4484][PASS] rista+V+Ind+Prs+3Sg => ristar
[2751/4484][FAIL] rista+V+Ind+Prs+3Sg => Unexpected results: ristir
--
[2752/4484][PASS] rista+V+Ind+Prt+Pl => ristaðu
[2752/4484][FAIL] rista+V+Ind+Prt+Pl => Unexpected results: ristu
--
[2753/4484][PASS] rista+V+Ind+Prt+Sg => ristaði
[2753/4484][FAIL] rista+V+Ind+Prt+Sg => Unexpected results: risti
--
[2755/4484][PASS] rista+V+PrfPrc => ristaður
[2755/4484][FAIL] rista+V+PrfPrc => Unexpected results: ristdur
--
[2756/4484][PASS] rista+V+Sup => ristað
[2756/4484][FAIL] rista+V+Sup => Unexpected results: rist
--
[2813/4484][PASS] rána+V+Ind+Prt+Sg => ránaði
[2813/4484][FAIL] rána+V+Ind+Prt+Sg => Unexpected results: ránti
--
[2815/4484][PASS] rána+V+PrfPrc => ránaður
[2815/4484][FAIL] rána+V+PrfPrc => Unexpected results: rándur
--
[2855/4484][PASS] rætta+V+Ind+Prt+Sg => rættaði
[2855/4484][FAIL] rætta+V+Ind+Prt+Sg => Unexpected results: rætti
--
[2857/4484][PASS] rætta+V+PrfPrc => rættaður
[2857/4484][FAIL] rætta+V+PrfPrc => Unexpected results: rætdur
--
[2871/4484][PASS] rógva+V+Ind+Prs+3Sg => rógvar
[2871/4484][FAIL] rógva+V+Ind+Prs+3Sg => Unexpected results: rørur
--
[2872/4484][PASS] rógva+V+Ind+Prt+Pl => rógvaðu
[2872/4484][FAIL] rógva+V+Ind+Prt+Pl => Unexpected results: róaðu
--
[2873/4484][PASS] rógva+V+Ind+Prt+Sg => rógvaði
[2873/4484][FAIL] rógva+V+Ind+Prt+Sg => Unexpected results: róaði
--
[3016/4484][PASS] siga+V+Ind+Prt+Pl => søgdu
[3016/4484][FAIL] siga+V+Ind+Prt+Pl => Unexpected results: søgðu
--
[3039/4484][PASS] skaða+V+Ind+Prt+Pl => skaddu
[3039/4484][FAIL] skaða+V+Ind+Prt+Pl => Unexpected results: skaðaðu
--
[3040/4484][PASS] skaða+V+Ind+Prt+Sg => skaddi
[3040/4484][FAIL] skaða+V+Ind+Prt+Sg => Unexpected results: skaðaði
--
[3042/4484][PASS] skaða+V+PrfPrc => skaddur
[3042/4484][FAIL] skaða+V+PrfPrc => Unexpected results: skaðaður
--
[3043/4484][PASS] skaða+V+Sup => skatt
[3043/4484][FAIL] skaða+V+Sup => Unexpected results: skaðað
--
[3071/4484][PASS] skerda+V+Ind+Prt+Pl => skerdaðu
[3071/4484][FAIL] skerda+V+Ind+Prt+Pl => Missing results: skerdaði
[3071/4484][FAIL] skerda+V+Ind+Prt+Pl => Unexpected results: skerddu
--
[3073/4484][PASS] skerda+V+PrfPrc => skerdaður
[3073/4484][FAIL] skerda+V+PrfPrc => Unexpected results: skerddur
--
[3074/4484][PASS] skerda+V+Sup => skerdað
[3074/4484][FAIL] skerda+V+Sup => Unexpected results: skerdt
--
[3101/4484][PASS] skjóla+V+Ind+Prt+Sg => skjólaði
[3101/4484][FAIL] skjóla+V+Ind+Prt+Sg => Unexpected results: skjólti
--
[3103/4484][PASS] skjóla+V+PrfPrc => skjólaður
[3103/4484][FAIL] skjóla+V+PrfPrc => Unexpected results: skjóldur

[3140/4484][PASS] skreppa+V+Ind+Prt+Sg => skreppaði
[3140/4484][FAIL] skreppa+V+Ind+Prt+Sg => Unexpected results: skrepti

[3142/4484][PASS] skreppa+V+PrfPrc => skreppaður
[3142/4484][FAIL] skreppa+V+PrfPrc => Unexpected results: skrepdur

[3317/4484][PASS] smíla+V+Ind+Prt+Sg => smílaði
[3317/4484][FAIL] smíla+V+Ind+Prt+Sg => Unexpected results: smílti

[3319/4484][PASS] smíla+V+PrfPrc => smílaður
[3319/4484][FAIL] smíla+V+PrfPrc => Unexpected results: smíldur

[3504/4484][PASS] stilla+V+Ind+Prt+Sg => stillaði
[3504/4484][FAIL] stilla+V+Ind+Prt+Sg => Unexpected results: stilti

[3506/4484][PASS] stilla+V+PrfPrc => stillaður
[3506/4484][FAIL] stilla+V+PrfPrc => Unexpected results: stildur

[3576/4484][FAIL] støða+V+Ind+Prs+3Sg => Missing results: støðar.støðir
[3576/4484][FAIL] støða+V+Ind+Prs+3Sg => Unexpected results: støðar, støðir

[3606/4484][PASS] svimja+V+Ind+Prs+3Sg => svimur
[3606/4484][FAIL] svimja+V+Ind+Prs+3Sg => Unexpected results: svimjimur, svimjur

[3607/4484][PASS] svimja+V+Ind+Prt+3Sg => svam
[3607/4484][FAIL] svimja+V+Ind+Prt+3Sg => Unexpected results: svimjam

[3608/4484][PASS] svimja+V+Ind+Prt+Pl => svumu
[3608/4484][FAIL] svimja+V+Ind+Prt+Pl => Unexpected results: svimjumu, svimjdu

[3609/4484][PASS] svimja+V+Inf => svimja
[3609/4484][FAIL] svimja+V+Inf => Unexpected results: svimjja, svimjimja

[3610/4484][PASS] svimja+V+Sup => svomið
[3610/4484][FAIL] svimja+V+Sup => Unexpected results: svimjt, svimjomið

[3617/4484][PASS] svíkja+V+Ind+Prs+3Sg => svíkur
[3617/4484][FAIL] svíkja+V+Ind+Prs+3Sg => Unexpected results: svíkjir, svíkjur

[3618/4484][PASS] svíkja+V+Ind+Prt+3Sg => sveik
[3618/4484][FAIL] svíkja+V+Ind+Prt+3Sg => Unexpected results: svík, svíkj, sveikj

[3619/4484][PASS] svíkja+V+Ind+Prt+Pl => sviku
[3619/4484][FAIL] svíkja+V+Ind+Prt+Pl => Unexpected results: svíkjtu, svikju

[3620/4484][PASS] svíkja+V+Inf => svíkja
[3620/4484][FAIL] svíkja+V+Inf => Unexpected results: svíkjja

[3621/4484][PASS] svíkja+V+Sup => svikið
[3621/4484][FAIL] svíkja+V+Sup => Unexpected results: svikjið, svíkjt

[3622/4484][PASS] svølta+V+Ind+Prs+3Sg => svøltar
[3622/4484][PASS] svølta+V+Ind+Prs+3Sg => svøltir

[3623/4484][PASS] svølta+V+Ind+Prt+Pl => svøltaðu
[3623/4484][FAIL] svølta+V+Ind+Prt+Pl => Unexpected results: svølttu

[3624/4484][PASS] svølta+V+Ind+Prt+Sg => svøltaði
[3624/4484][FAIL] svølta+V+Ind+Prt+Sg => Unexpected results: svøltti

[3626/4484][PASS] svølta+V+PrfPrc => svøltaður
[3626/4484][FAIL] svølta+V+PrfPrc => Unexpected results: svøldur

[3660/4484][PASS] sætta+V+Ind+Prt+Sg => sættaði
[3660/4484][FAIL] sætta+V+Ind+Prt+Sg => Unexpected results: sætti

[3662/4484][PASS] sætta+V+PrfPrc => sættaður
[3662/4484][FAIL] sætta+V+PrfPrc => Unexpected results: sætdur

[3762/4484][PASS] tilmæla+V+Ind+Prt+Sg => tilmældi
[3762/4484][FAIL] tilmæla+V+Ind+Prt+Sg => Unexpected results: tilmælti

[3818/4484][PASS] trámæla+V+Ind+Prt+Sg => trámældi
[3818/4484][FAIL] trámæla+V+Ind+Prt+Sg => Unexpected results: trámælti

[4015/4484][PASS] ummæla+V+Ind+Prt+Sg => ummældi
[4015/4484][FAIL] ummæla+V+Ind+Prt+Sg => Unexpected results: ummælti

[4051/4484][PASS] unna+V+Ind+Prt+Sg => unnaði
[4051/4484][FAIL] unna+V+Ind+Prt+Sg => Unexpected results: unti

[4053/4484][PASS] unna+V+PrfPrc => unnaður
[4053/4484][FAIL] unna+V+PrfPrc => Unexpected results: undur

[4126/4484][PASS] vanyrða+V+Ind+Prt+Pl => vanyrdu
[4126/4484][FAIL] vanyrða+V+Ind+Prt+Pl => Unexpected results: vanyrðaðu

[4127/4484][PASS] vanyrða+V+Ind+Prt+Sg => vanyrdi
[4127/4484][FAIL] vanyrða+V+Ind+Prt+Sg => Unexpected results: vanyrðaði

[4129/4484][PASS] vanyrða+V+PrfPrc => vanyrdur
[4129/4484][FAIL] vanyrða+V+PrfPrc => Unexpected results: vanyrðaður

[4130/4484][PASS] vanyrða+V+Sup => vanyrt
[4130/4484][FAIL] vanyrða+V+Sup => Unexpected results: vanyrðað

[4143/4484][PASS] varða+V+Ind+Prt+Pl => vardu
[4143/4484][FAIL] varða+V+Ind+Prt+Pl => Unexpected results: varðaðu

[4144/4484][PASS] varða+V+Ind+Prt+Sg => vardi
[4144/4484][FAIL] varða+V+Ind+Prt+Sg => Unexpected results: varðaði

[4146/4484][PASS] varða+V+PrfPrc => vardur
[4146/4484][FAIL] varða+V+PrfPrc => Unexpected results: varðaður

[4147/4484][PASS] varða+V+Sup => vart
[4147/4484][FAIL] varða+V+Sup => Unexpected results: varðað

[4196/4484][FAIL] velta+V+Ind+Prt+Sg => Missing results: veldi
[4196/4484][FAIL] velta+V+Ind+Prt+Sg => Unexpected results: veltti

[4226/4484][PASS] villa+V+Ind+Prt+Sg => villaði
[4226/4484][FAIL] villa+V+Ind+Prt+Sg => Unexpected results: vilti

[4228/4484][PASS] villa+V+PrfPrc => villaður
[4228/4484][FAIL] villa+V+PrfPrc => Unexpected results: vildur

[4244/4484][PASS] virðisløna+V+Ind+Prt+Sg => virðislønaði
[4244/4484][FAIL] virðisløna+V+Ind+Prt+Sg => Unexpected results: virðislønti

[4246/4484][PASS] virðisløna+V+PrfPrc => virðislønaður
[4246/4484][FAIL] virðisløna+V+PrfPrc => Unexpected results: virðisløndur

[4262/4484][PASS] viðmæla+V+Ind+Prt+Sg => viðmældi
[4262/4484][FAIL] viðmæla+V+Ind+Prt+Sg => Unexpected results: viðmælti

[4310/4484][PASS] ynna+V+Ind+Prt+Sg => ynnaði
[4310/4484][FAIL] ynna+V+Ind+Prt+Sg => Unexpected results: ynti

[4312/4484][PASS] ynna+V+PrfPrc => ynnaður
[4312/4484][FAIL] ynna+V+PrfPrc => Unexpected results: yndur

[4316/4484][PASS] yppa+V+Ind+Prt+Sg => yppaði
[4316/4484][FAIL] yppa+V+Ind+Prt+Sg => Unexpected results: ypti

[4318/4484][PASS] yppa+V+PrfPrc => yppaður
[4318/4484][FAIL] yppa+V+PrfPrc => Unexpected results: ypdur

[4344/4484][PASS] ámæla+V+Ind+Prt+Sg => ámældi
[4344/4484][FAIL] ámæla+V+Ind+Prt+Sg => Unexpected results: ámælti

[4405/4484][PASS] øna+V+Ind+Prt+Sg => ønaði
[4405/4484][FAIL] øna+V+Ind+Prt+Sg => Unexpected results: ønti

[4407/4484][PASS] øna+V+PrfPrc => ønaður
[4407/4484][FAIL] øna+V+PrfPrc => Unexpected results: øndur
```

### Analysefeil:
```
[ 245/4824][FAIL] bjóðaði => Missing results: bjóða+V+Ind+Prt+3Sg

[ 248/4824][FAIL] boðin => Missing results: bjóða+V+PrfPrc

[ 250/4824][FAIL] boðið => Missing results: bjóða+V+Sup

[ 634/4824][FAIL] eldi => Missing results: elta+V+Ind+Prt+Sg

[1615/4824][FAIL] hvarv => Missing results: hvørva+V+Ind+Prs+3Sg

[1820/4824][FAIL] kapptelvað‚ kapptelvt => Missing results: kapptelva+V+Sup

[2078/4824][FAIL] kyldi => Missing results: kylla+V+Ind+Prt+Sg

[2902/4824][FAIL] ringaði => Missing results: ringa+V+Ind+Prt+Pl

[3260/4824][FAIL] skerdaði => Missing results: skerda+V+Ind+Prt+Pl

[3812/4824][FAIL] støðar.støðir => Missing results: støða+V+Ind+Prs+3Sg

[4491/4824][PASS] veldi => vella+V+Ind+Prt+Sg
[4491/4824][FAIL] veldi => Missing results: velta+V+Ind+Prt+Sg
```
