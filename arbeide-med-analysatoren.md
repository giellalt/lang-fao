
# Prinsipp for å arbeide med analysatoren

## Korleis handsame feil

Analysatoren består av
* ei liste av lemma, stamme og suffiks
* eit sett av reglar for morfofonologiske vekslingar

Feil kan oppstå t.d. ved at
* det kan vere skrivefeil i alle delane av koden
* orda kan vere klassifisert feil
* orda kan peike til feil kontinuasjonsleksikon (bøyingsmønster)
* bøyingsleksikonet kan innehalde feil suffiks
* det kan vere feil i dei morfofonologiske reglane
* det kan hende at styringssymbol (`^EDH`, ..) ikkje er deklarert i `src/fst/root.lexc`

Ver serleg merksam på
* komparativ og superlativ
* verbas partisippformer
* ord med uregelrett böying
* eit godt råd er å lese nedover i god fart og sjå etter rare bokstavkombinasjonar
