# Prioriteringar for arbeid med stavekontroll

## Status
Stavekontrollen har god dekningsgrad (98.5%). Den største svakheita er handsaminga av namn.

## Arbeidsoppgåver

* Test- og grunnlagsmateriale
    - Skaffe lister over færøyske namn (stadnamn, personnamn, namn på firma, organisasjonar...)
    - Skaffe så stort tekstkorpus som mogleg (sjå separat dokument om korpus)
    - Skaffe korpus over ordpar *autentisk skrivefeil : korrigert form*
    - Komplettere bøyingsparadigmene i `fao/test/src/gt-norm-yamls/`
* Analysatoren:
    - Teste analysatoren for leksikalsk dekning mot korpus, og legge til manglande ord.
    - Legge til manglande færøyske namn frå namnelister
	- Gjennomgå og forbetre morfologien for namn
    - Vurdere og gjennomføre ein strategi for danske lånord
    - Kontrollere og forbetre mekanismane for dynamisk samansetjing
    - Teste analysatoren for morfologi, morfofonologi og forbetre han.
* Stavekontrollen:
    - Teste presisjon og recall for tekst merka for korrekturlesing
    - Teste framleggsmekanismen (kor stor del av rettingane til autentiske skrivefeil får korrekt rettingsframlegg)

## Ressursar
Arbeidsoppgåvene ovafor krev minst ei stilling i samisk språkteknologi.

## Testing

### Status
...

### Testresultat

#### Testdagbok
* 2006: 85% dekningsgrad (132000 ord)
* 2018: 95% (132000 ord)
* 2021: 98% (10 mill korpus)
