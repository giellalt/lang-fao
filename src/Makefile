# *************************************************************** #
# This is a makefile that builds the Faroese morphological parser #
# *************************************************************** #

LEX = fao-lex.txt noun-fao-lex.txt \
	propernoun-fao-lex.txt propernoun-fao-morph.txt adj-fao-morph.txt \
    adj-fao-lex.txt adv-fao-lex.txt verb-fao-lex.txt abbr-fao-lex.txt acro-fao-lex.txt \
    verb-fao-morph.txt pron-fao-lex.txt punct-fao-lex.txt numeral-fao-lex.txt \
    pp-fao-lex.txt cc-fao-lex.txt cs-fao-lex.txt interj-fao-lex.txt det-fao-lex.txt \
	abbr-fao-lex.txt

# The ultimate goal is to build ifao.fst, the generator
# This goal depends on fao.save being up to date.

ifao.fst: ../bin/ifao.fst
../bin/ifao.fst: ../bin/fao.fst ../bin/fao.save ../bin/tok.fst ../bin/abbr.txt \
	../bin/allcaps.fst ../bin/fao-dis.bin
	@echo
	@echo "*** Building the inverse ifao.fst ***"
	@echo
	@printf "load ../bin/fao.save \n\
	invert net \n\
	save stack ../bin/ifao.fst \n\
	quit \n" > /tmp/ifao-fst-script
	@xfst -utf8 < /tmp/ifao-fst-script
	@rm -f /tmp/ifao-fst-script

 
# The first goal is to build fao.fst, the analyzer.
# This goal depends on fao.save and caseconv.fst being up to date

fao.fst: ../bin/fao.fst
../bin/fao.fst: ../bin/fao.save ../bin/caseconv.fst ../bin/allcaps.fst \
	../bin/tok.fst
	@echo
	@echo "*** Building fao.fst ***" ;
	@echo
	@printf "read regex @\"../bin/fao.save\" .o. \
	@\"../bin/caseconv.fst\" ; \n\
	save stack ../bin/fao.fst \n\
	quit \n" > /tmp/fao-fst-script
	@xfst -utf8 < /tmp/fao-fst-script
	@rm -f /tmp/fao-fst-script


# Here we make the abbrevation file for our current preprocessor, 
# the perl-based preprocess (located in the script catalogue)

empty:=
comma:=,
space:=$(empty) $(empty)
ABBRSRCS=$(subst $(space),$(comma),$(LEX))

scripts=$(HOME)/gt/script

abbr: ../bin/abbr.txt
../bin/abbr.txt: $(scripts)/abbr-extract $(scripts)/langTools/Util.pm $(LEX)
	@echo
	@echo "*** Extracting abbreviations from abbr-fao-lex.txt to abbr.txt ***" ;
	@echo
	@perl -I $(scripts) $(scripts)/abbr-extract \
		--output=$@ \
		--abbr_lex=abbr-fao-lex.txt \
		--lex=$(ABBRSRCS)


# The second goal is to build the caseconv.fst file
# This goal depends on case.regex

caseconv.fst: ../bin/caseconv.fst
../bin/caseconv.fst: case.regex
	@echo
	@echo "*** Building caseconv.fst ***" ;
	@echo
	@printf "read regex < case.regex \n\
	save stack ../bin/caseconv.fst \n\
	quit \n" > /tmp/caseconv-script
	@xfst -utf8 < /tmp/caseconv-script
	@rm -f /tmp/caseconv-script


# This goal depends on allcaps.regex

allcaps.fst: ../bin/allcaps.fst
../bin/allcaps.fst: allcaps.regex
	@echo
	@echo "*** Building allcaps.fst ***" ;
	@echo
	@printf "source allcaps.regex \n\
	save stack ../bin/allcaps.fst \n\
	quit \n" > /tmp/tok-script
	@xfst -utf8 < /tmp/tok-script
	@rm -f /tmp/tok-script


# The third goal is to build fao.save
# This goal depends on twol-fao.bin and a bunch of lexicon files

fao.save: ../bin/fao.save
../bin/fao.save: ../bin/twol-fao.bin fao-lex.txt noun-fao-morph.txt noun-fao-lex.txt \
        propernoun-fao-lex.txt propernoun-fao-morph.txt adj-fao-morph.txt \
	adj-fao-lex.txt adv-fao-lex.txt verb-fao-lex.txt abbr-fao-lex.txt acro-fao-lex.txt \
	verb-fao-morph.txt pron-fao-lex.txt punct-fao-lex.txt numeral-fao-lex.txt \
	pp-fao-lex.txt cc-fao-lex.txt cs-fao-lex.txt interj-fao-lex.txt det-fao-lex.txt
	@echo
	@echo "*** Building fao-lex.save ***" ;
	@echo
	printf "compile-source fao-lex.txt noun-fao-morph.txt noun-fao-lex.txt \
        propernoun-fao-lex.txt propernoun-fao-morph.txt adj-fao-lex.txt \
	adj-fao-morph.txt adv-fao-lex.txt verb-fao-lex.txt abbr-fao-lex.txt acro-fao-lex.txt \
	verb-fao-morph.txt pron-fao-lex.txt punct-fao-lex.txt numeral-fao-lex.txt \
	pp-fao-lex.txt cc-fao-lex.txt cs-fao-lex.txt interj-fao-lex.txt det-fao-lex.txt \n\
	read-rules ../bin/twol-fao.bin \n\
	compose-result \n\
	save-result ../bin/fao.save \n\
	quit \n" > ../../tmp/fao-lex-save-script
	@lexc -utf8 < ../../tmp/fao-lex-save-script
	rm -f ../../tmp/fao-lex-save-script


# The fourth goal is to build twol-fao.bin
# This goal depends on twol-fao.txt

twol-fao.bin: ../bin/twol.fao.bin
../bin/twol-fao.bin: twol-fao.txt
	@echo
	@echo "*** Building twol-fao.bin ***" ;
	@echo
	@printf "read-grammar twol-fao.txt \n\
	compile \n\
	save-binary ../bin/twol-fao.bin \n\
	quit \n" > /tmp/twol-fao-script
	@twolc -utf8 < /tmp/twol-fao-script
	@rm -f /tmp/twol-fao-script

# Here we include a preprocessor.
# This goal depends on tok.txt

tok.fst: ../bin/tok.fst 
../bin/tok.fst: tok.txt
	@echo
	@echo "*** Building the tokenizer tok.fst ***" ;
	@echo
	@printf "source tok.txt \n\
	save stack ../bin/tok.fst \n\
	quit \n" > /tmp/tok-script
	@xfst -utf8 < /tmp/tok-script
	@rm -f /tmp/tok-script

# Let us just make a binary disambiguator
# It can be used instead of the source file.
dis-bin: ../bin/fao-dis.bin
../bin/fao-dis.bin: fao-dis.rle
	@echo
	@echo "*** Building a binary disambiguator fao-dis.bin ***" ;
	@echo
	@vislcg3 --grammar fao-dis.rle --grammar-only --grammar-bin ../bin/fao-dis.bin


# "make clean" is there to remove the binary files at will.

clean:
	@rm -f ../bin/*.fst ../bin/*.save ../bin/*.bin



#fao.save: ../bin/fao.save
#../bin/fao.save: ../bin/twol-fao.bin fao-lex.txt adj-fao-lex.txt \
#	adv-fao-lex.txt noun-fao-lex.txt verb-fao-lex.txt \
#	closed-fao-lex.txt pp-fao-lex.txt propernoun-fao-lex.txt
#	@echo
#	@echo "*** Building fao.save ***" ;
#	@echo
#	printf "compile-source fao-lex.txt adj-fao-lex.txt adv-fao-lex.txt \
#	noun-fao-lex.txt verb-fao-lex.txt closed-fao-lex.txt \
#	pp-fao-lex.txt propernoun-fao-lex.txt \n\
#	read-rules ../bin/twol-fao.bin \n\
#	compose-result \n\
#	save-result ../bin/fao.save \n\
#	quit \n" > /tmp/fao-save-script
#	@lexc < /tmp/fao-save-script
#	rm -f /tmp/fao-save-script


