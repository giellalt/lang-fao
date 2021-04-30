
!!!Arabic numerals

Arabic numeral expressions can be classified in at least the following categories:
; general numeric expressions: 123 456,789 - note: space as thousand separator, groups of three digits
; accounting numeric expressions: 123.456,789 - note: full stop as thousands separator, groups of three digits
; numeric range expressions: 12-14 - can be dates, times, lengths, masses and other sorts of measurements
; measurements: 123 kg
; dates: 2.4.1999, 4.5., 7.8.02, 04.10.2016
; times: 12:34
; money amounts: kr 1234,56; 6.990,-
; temperature: –8°C, 256°K, 100°F

The categories we have are:
* arabic
* roman

Each of these can be subdivided:

!!Roman
* dates
* general (covers years, pagination, lists, and most other uses) - should
  yeares get a category of its own? so that roman numbers below 100 are
  anything, whereas above we consider them years?

!!Arabic

* years (four digits in the range 1000-2500?)
** [[Fransa riegádii] 1182:s [[Umbrias Italias.]
** [[almmuhii čakčat] 2009 [[iežas dutkosa]
* dates in various formats (we should recognise them all, and tag them):
** borgemánu 31. beaivvi.
** 31.1.
** 31.1.2018
* time (in all different formats, tagged)
** 11.00
* phone numbers (ideally all international formats, but at least all the nordic ones)
** 018-16 96 00 (Swedish)
** 23081200 (Norwegian)
* general, in three different versions: space separated with comma decimal,
  punct separated wwith comma decimal, and punct separated with full stop decimal
* temperatures - subtype  of general?
* fractions (nordic style): **0,99**
* plain digits, possibly with thousand separators:
** 7 (miljovnna)
** 16 (jagi)
** (leat sullii) 25 000 (bargi,)
* listings:
** 1) some text, 2) another text, etc
** 1. some text, 1.0 some text, 1.1 some text, etc
* postal codes, format varies by country - should they be kept in language-specific lexicons?
** 751 70 (Uppsala)
** 0002 [[Oslo]
** 00100 [[Helsingfors]
** N-0106 [[Oslo] - should country codes be encoded, or handled via compounding?
* biblical verses, sometimes mistyped using space or comma (or both) instead of colon
  between book and verse (do we want to detect and correct these?); NB! - note similarity with times!:
** [[Kor] 5:17
** [[Gal.] 3:27–28
** [[Lukas] 1, 26-38.
** [[Joh.] 13:34
** [[Matt] 28: 18–20
** [[Apg] 2:38
** [[Mos] 1:27–28a
** [[Sál] 103, 13–17
** [[Sál] 139, 1–12.23–24
** [[Joh] 10,14:28–29
** [[Kor] 15,53–57
* text section references:
** [[SvPS] 697:2,

All of the above can be both simple values or ranges:@
* 2007-2008 (year)
* [[Gal.] 3:27–28; [[Lukas] 1, 26-38. (biblical verse)
* 0-18 [[jagi.] (age, but really a plain integer range in front of a qualifying noun)

Some but not all of the above can make compounds in compounding languages
(obviously compounding and other morphology has to be covered in the
language specific continuation lexicons):
* 1800-logu (year)

Some but not all of the above can inflect for case in such languages
(obviously case inflection and other morphology has to be covered in the
language specific continuation lexicons):
* 1978:s (year)
(Hornberger 1989: 289) - should be analysed as a regular year, not including the colon; this works fine using hfst-tokenise.

We do NOT include measurements, instead  we analyse the measurement abbreviation separately after a general num analysis.

Currency prefixes should be treated as a segment of its own, and not as part of the number. We still to consider prefixes written together with the following number, ie without space.

We do not tag anything in this file, instead we just give continuation lexicons for all different types, so that both tags and possible inflections can be handled on a per language basis. The template file will give suggested tags acccording to the GiellaLT style.

And for sure more than these. Previously everything has been more or less
lumped together, but to avoid noise and to get better input for grammar
checking the ARABICS section should be rewritten such that each category
gets its own lexicon. That way it is easier to restrict the syntax of
numerical expressions in each category.


 !! __LEXICON NUM-PREFIXES__
 This lexicon contains a number of letters and other
 symbols found in front of digits. Their continuation
 lexicons should probably be changed as we restructure
 the arabic numerals.


 * __LEXICON REALARABICfirst__ to avoid 0 as first arabic, except from only 0, or in front of comma

 * __LEXICON REALARABICpunct__ to get number after

 * __LEXICON REALARABIC__ 1-4 arabics

 * __LEXICON REALARABICfirstpart__ numbers like 199 878, 199.878, 199,878, 12000-13000



 * __LEXICON REALDECARABICsecond__ 19912,878 and 12000-13000


 * __LEXICON REALDECARABICdec__ hyph and comma

 * __LEXICON REALARABICsecondpart__ numbers like 199 878 and 199.878 

 * __LEXICON REALARABICsecondpart_cont__ loop, to case suffix, to , or -, 


 * __LEXICON REALARABICDECIM__ loop and to % and case suffix


 * __LEXICON ARABIC__ +Sem/ID, +Ord


 * __LEXICON ARABICLOOPS__


 * __LEXICON ARABICSabcdef__


 * __LEXICON ARABICDATE__

 * __LEXICON ARABICDATEHYPH__

 * __LEXICON ARABICDATENUM__

 * __LEXICON ARABICDATENUM2__

 * __LEXICON datetag_w_dot_cont__

 * __LEXICON ARABICCLOCK__ is a regex for clock time.

 * __LEXICON CLOCK-sep__ different separators for intervals, or one clock time only

 * __LEXICON ARABICCLOCK2__ is the second component of intervals, idntical to ARABICCLOCK


 * __LEXICON ARABICCLOCKDECIMALS__ is fractional seconds

 * __LEXICON ARABICYEAR__

 * __LEXICON numyear__

 * __LEXICON moreyear__


 * __LEXICON ARABICORD__





 * __LEXICON REALARABICDELIMITER__


 * __LEXICON ARABICLOOP__




 * __LEXICON MARKDOT__




 * __LEXICON ROMAN__  roman numerals


 * __LEXICON ROM-SINGEL__


 * __LEXICON ROM-THOUSAND__

 * __LEXICON ROM-THOUSAND-TAG__

 * __LEXICON ROM-HUNDRED__

 * __LEXICON ROM-HUNDRED-TAG__

 * __LEXICON ROM-TEN__

 * __LEXICON ROM-TEN-TAG__

 * __LEXICON ROM-ONE__

 * __LEXICON ROM-ONE-TAG__


 * __LEXICON ROM-SPLIT__



 * __LEXICON 2ROMAN__

 * __LEXICON 2ROM-THOUSAND__

 * __LEXICON 2ROM-THOUSAND-TAG__

 * __LEXICON 2ROM-HUNDRED__

 * __LEXICON 2ROM-HUNDRED-TAG__

 * __LEXICON 2ROM-TEN__

 * __LEXICON 2ROM-TEN-TAG__

 * __LEXICON 2ROM-ONE__

 * __LEXICON 2ROM-ONE-TAG__





 * __LEXICON ISOLATED-NUMEXP__ some isolated numeral expressions





