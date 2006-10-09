# *************************************************************** #
# This is a makefile that builds the Faroese morphological parser #
# *************************************************************** #

# The ultimate goal is to build ifoe.fst, the generator
# This goal depends on foe.save being up to date.

ifoe.fst: ../bin/ifoe.fst
../bin/ifoe.fst: ../bin/foe.fst ../bin/foe.save ../bin/tok.fst ../bin/abbr.txt \
	../bin/allcaps.fst
	@echo
	@echo "*** Building the inverse ifoe.fst ***"
	@echo
	@printf "load ../bin/foe.save \n\
	invert net \n\
	save stack ../bin/ifoe.fst \n\
	quit \n" > /tmp/ifoe-fst-script
	@xfst < /tmp/ifoe-fst-script
	@rm -f /tmp/ifoe-fst-script

 
# The first goal is to build foe.fst, the analyzer.
# This goal depends on foe.save and caseconv.fst being up to date

foe.fst: ../bin/foe.fst
../bin/foe.fst: ../bin/foe.save ../bin/caseconv.fst ../bin/allcaps.fst \
	../bin/tok.fst
	@echo
	@echo "*** Building foe.fst ***" ;
	@echo
	@printf "read regex @\"../bin/foe.save\" .o. \
	@\"../bin/caseconv.fst\" ; \n\
	save stack ../bin/foe.fst \n\
	quit \n" > /tmp/foe-fst-script
	@xfst < /tmp/foe-fst-script
	@rm -f /tmp/foe-fst-script


# Here we make the abbrevation file for our current preprocessor, 
# the perl-based preprocess (located in the script catalogue)

abbr: ../bin/abbr.txt
../bin/abbr.txt: ../../../gt/script/abbr-extract propernoun-foe-lex.txt pron-foe-lex.txt \
	adv-foe-lex.txt cc-foe-lex.txt cs-foe-lex.txt pp-foe-lex.txt\
	abbr-foe-lex.txt noun-foe-lex.txt
	@echo
	@echo "*** Extracting abbreviations from abbr-foe-lex.txt to abbr.txt ***" ;
	@echo
	@perl ../../../gt/script/abbr-extract \
		--abbr_lex=abbr-foe-lex.txt \
		--lex=propernoun-foe-lex.txt,pron-foe-lex.txt \
	adv-foe-lex.txt cc-foe-lex.txt cs-foe-lex.txt pp-foe-lex.txt,noun-foe-lex.txt,abbr-foe-lex.txt \
		--output=$@


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


# The third goal is to build foe.save
# This goal depends on twol-foe.bin and a bunch of lexicon files

foe.save: ../bin/foe.save
../bin/foe.save: ../bin/twol-foe.bin foe-lex.txt noun-foe-morph.txt noun-foe-lex.txt \
        propernoun-foe-lex.txt adj-foe-morph.txt adj-foe-lex.txt adv-foe-lex.txt \
	verb-foe-lex.txt abbr-foe-lex.txt \
	verb-foe-morph.txt pron-foe-lex.txt punct-foe-lex.txt numeral-foe-lex.txt \
	pp-foe-lex.txt cc-foe-lex.txt cs-foe-lex.txt interj-foe-lex.txt det-foe-lex.txt
	@echo
	@echo "*** Building foe-lex.save ***" ;
	@echo
	printf "compile-source foe-lex.txt noun-foe-morph.txt noun-foe-lex.txt \
        propernoun-foe-lex.txt adj-foe-lex.txt adj-foe-morph.txt adv-foe-lex.txt \
	verb-foe-lex.txt abbr-foe-lex.txt \
	verb-foe-morph.txt pron-foe-lex.txt punct-foe-lex.txt numeral-foe-lex.txt \
	pp-foe-lex.txt cc-foe-lex.txt cs-foe-lex.txt interj-foe-lex.txt det-foe-lex.txt \n\
	read-rules ../bin/twol-foe.bin \n\
	compose-result \n\
	save-result ../bin/foe.save \n\
	quit \n" > ../../tmp/foe-lex-save-script
	@lexc -utf8 < ../../tmp/foe-lex-save-script
	rm -f ../../tmp/foe-lex-save-script


# The fourth goal is to build twol-foe.bin
# This goal depends on twol-foe.txt

twol-foe.bin: ../bin/twol.foe.bin
../bin/twol-foe.bin: twol-foe.txt
	@echo
	@echo "*** Building twol-foe.bin ***" ;
	@echo
	@printf "read-grammar twol-foe.txt \n\
	compile \n\
	save-binary ../bin/twol-foe.bin \n\
	quit \n" > /tmp/twol-foe-script
	@twolc -utf8 < /tmp/twol-foe-script
	@rm -f /tmp/twol-foe-script

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


# "make clean" is there to remove the binary files at will.

clean:
	@rm -f ../bin/*.fst ../bin/*.save ../bin/*.bin



#foe.save: ../bin/foe.save
#../bin/foe.save: ../bin/twol-foe.bin foe-lex.txt adj-foe-lex.txt \
#	adv-foe-lex.txt noun-foe-lex.txt verb-foe-lex.txt \
#	closed-foe-lex.txt pp-foe-lex.txt propernoun-foe-lex.txt
#	@echo
#	@echo "*** Building foe.save ***" ;
#	@echo
#	printf "compile-source foe-lex.txt adj-foe-lex.txt adv-foe-lex.txt \
#	noun-foe-lex.txt verb-foe-lex.txt closed-foe-lex.txt \
#	pp-foe-lex.txt propernoun-foe-lex.txt \n\
#	read-rules ../bin/twol-foe.bin \n\
#	compose-result \n\
#	save-result ../bin/foe.save \n\
#	quit \n" > /tmp/foe-save-script
#	@lexc < /tmp/foe-save-script
#	rm -f /tmp/foe-save-script


