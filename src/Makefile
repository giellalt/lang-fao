# *************************************************************** #
# This is a makefile that builds the Faroese morphological parser #
# *************************************************************** #

XFST = xfst
LEXC = lexc
TWOLC = twolc

ifeq (victorio.uit.no, $(shell hostname))
XFST = /opt/sami/xerox/c-fsm/ix86-linux2.6-gcc3.4/bin/fst -utf8
LEXC = /opt/sami/xerox/bin/lexc -utf8
TWOLC = /opt/sami/xerox/bin/twolc -utf8
endif

scripts=$(GTHOME)/gt/script

LEX = fao-lex.txt \
	  noun-fao-lex.txt \
	  noun-fao-morph.txt \
	  propernoun-fao-lex.txt \
	  propernoun-fao-morph.txt \
	  adj-fao-lex.txt \
	  adj-fao-morph.txt \
	  verb-fao-lex.txt \
	  verb-fao-morph.txt \
	  adv-fao-lex.txt \
	  abbr-fao-lex.txt \
	  acro-fao-lex.txt \
	  pron-fao-lex.txt \
	  punct-fao-lex.txt \
	  numeral-fao-lex.txt \
	  pp-fao-lex.txt \
	  cc-fao-lex.txt \
	  cs-fao-lex.txt \
	  interj-fao-lex.txt \
	  det-fao-lex.txt



# The ultimate goal is to build ifao.fst, the generator
# This goal depends on fao.save being up to date.

ifao.fst: ../bin/ifao.fst
../bin/ifao.fst: ../bin/fao.save \
				 ../bin/fao.fst \
				 ../bin/tok.fst \
				 ../bin/abbr.txt \
            	 ../bin/allcaps.fst \
            	 ../bin/fao-dis.bin \
            	 ../bin/fao-dep.bin \
            	 ../bin/tagfix.fst
	@echo
	@echo "*** Building the inverse ifao.fst ***"
	@echo
	@printf "load $< \n\
	invert net \n\
	save stack $@ \n\
	quit \n" > ../../tmp/ifao-fst-script
	$(XFST)  < ../../tmp/ifao-fst-script
	@rm -f ../../tmp/ifao-fst-script

 
# The first goal is to build fao.fst, the analyzer.
# This goal depends on fao.save and inituppercase.fst being up to date

fao.fst: ../bin/fao.fst
../bin/fao.fst: ../bin/fao.save \
				../bin/inituppercase.fst \
				../bin/allcaps.fst \
				../bin/tok.fst \
				../bin/tagfix.fst
	@echo
	@echo "*** Building fao.fst ***" ;
	@echo
	@printf "read regex @\"../bin/tagfix.fst\" \
					.o. @\"../bin/fao.save\" \
					.o. @\"../bin/inituppercase.fst\" ; \n\
	save stack $@ \n\
	quit \n" > ../../tmp/fao-fst-script
	$(XFST)  < ../../tmp/fao-fst-script
	@rm -f ../../tmp/fao-fst-script


# Here we make the abbrevation file for our current preprocessor, 
# the perl-based preprocess (located in the script catalogue)

empty:=
comma:=,
space:=$(empty) $(empty)
ABBRSRCS=$(subst $(space),$(comma),$(LEX))

abbr: ../bin/abbr.txt
../bin/abbr.txt: $(scripts)/abbr-extract \
				 $(scripts)/langTools/Util.pm \
				 $(LEX)
	@echo
	@echo "*** Extracting abbreviations from abbr-fao-lex.txt to abbr.txt ***" ;
	@echo
	@perl -I $(scripts) $(scripts)/abbr-extract \
		--output=$@ \
		--abbr_lex=abbr-fao-lex.txt \
		--lex=$(ABBRSRCS)


# The second goal is to build the inituppercase.fst file
# This goal depends on inituppercase.regex

inituppercase.fst: ../bin/inituppercase.fst
../bin/inituppercase.fst: inituppercase.regex
	@echo
	@echo "*** Building inituppercase.fst ***" ;
	@echo
	@printf "read regex < inituppercase.regex \n\
	save stack ../bin/inituppercase.fst \n\
	quit \n" > ../../tmp/inituppercase-script
	$(XFST)  < ../../tmp/inituppercase-script
	@rm -f ../../tmp/inituppercase-script


# This goal depends on allcaps.regex

allcaps.fst: ../bin/allcaps.fst
../bin/allcaps.fst: allcaps.regex
	@echo
	@echo "*** Building allcaps.fst ***" ;
	@echo
	@printf "source allcaps.regex \n\
	save stack ../bin/allcaps.fst \n\
	quit \n" > ../../tmp/tok-script
	$(XFST)  < ../../tmp/tok-script
	@rm -f ../../tmp/tok-script

# This goal depends on tagfix.regex

tagfix.fst: ../bin/tagfix.fst
../bin/tagfix.fst: tagfix.regex
	@echo
	@echo "*** Building tagfix.fst ***" ;
	@echo
	@printf "source tagfix.regex \n\
	save stack ../bin/tagfix.fst \n\
	quit \n" > ../../tmp/tok-script
	$(XFST)  < ../../tmp/tok-script
	@rm -f ../../tmp/tok-script


# The third goal is to build fao.save
# This goal depends on twol-fao.bin and a bunch of lexicon files

fao.save: ../bin/fao.save
../bin/fao.save: ../bin/twol-fao.bin $(LEX)
	@echo
	@echo "*** Building fao-lex.save ***" ;
	@echo
	printf "compile-source $(LEX)  \n\
	read-rules ../bin/twol-fao.bin \n\
	compose-result \n\
	save-result ../bin/fao.save \n\
	quit \n" > ../../tmp/fao-lex-save-script
	$(LEXC)  < ../../tmp/fao-lex-save-script
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
	quit \n" > ../../tmp/twol-fao-script
	$(TWOLC)  < ../../tmp/twol-fao-script
	@rm -f ../../tmp/twol-fao-script

# Here we include a preprocessor.
# This goal depends on tok.regex

tok.fst: ../bin/tok.fst 
../bin/tok.fst: tok.regex
	@echo
	@echo "*** Building the tokenizer tok.fst ***" ;
	@echo
	@printf "source tok.regex \n\
	save stack ../bin/tok.fst \n\
	quit \n" > ../../tmp/tok-script
	$(XFST)  < ../../tmp/tok-script
	@rm -f ../../tmp/tok-script

# Let us just make a binary disambiguator
# It can be used instead of the source file.
dis-bin: ../bin/fao-dis.bin
../bin/fao-dis.bin: fao-dis.rle
	@echo
	@echo "*** Building a binary disambiguator fao-dis.bin ***" ;
	@echo
	@vislcg3 --grammar fao-dis.rle \
			 --grammar-only \
			 --grammar-bin ../bin/fao-dis.bin \
			 -C UTF-8


# Let us just make a binary dependency grammar
# It can be used instead of the source file.
dep-bin: ../bin/fao-dep.bin
../bin/fao-dep.bin: fao-dep.rle
	@echo
	@echo "*** Building a binary disambiguator fao-dep.bin ***" ;
	@echo
	@vislcg3 --grammar fao-dep.rle \
			 --grammar-only \
			 --grammar-bin ../bin/fao-dep.bin \
			 -C UTF-8


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
#	quit \n" > ../../tmp/fao-save-script
#	$(LEXC) < ../../tmp/fao-save-script
#	rm -f ../../tmp/fao-save-script


