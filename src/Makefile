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

all: ifao.fst

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


tagfix.fst: ../bin/tagfix.fst
../bin/tagfix.fst: tagfix.xfst
	@echo
	@echo "*** Building $(notdir $@) ***" ;
	@echo
	$(XFST) -e "source < tagfix.xfst" \
			-e "save stack   ../bin/tagfix.fst " \
			-stop


allcaps.fst: ../bin/allcaps.fst
../bin/allcaps.fst: allcaps.xfst
	@echo
	@echo "*** Building $(notdir $@) ***" ;
	@echo
	$(XFST) -e "source < $< " \
			-e "save stack   $@ " \
			-stop


inituppercase.fst: ../bin/inituppercase.fst
../bin/inituppercase.fst: inituppercase.regex
	@echo
	@echo "*** Building $(notdir $@) ***" ;
	@echo
	$(XFST) -e "read regex < $< " \
			-e "save stack   $@ " \
			-stop


# The third goal is to build fao.save
# This goal depends on twol-fao.bin and a bunch of lexicon files
fao.save: ../bin/fao.save
../bin/fao.save: ../bin/twol-fao.bin $(LEX)
	@echo
	@echo "*** Building fao-lex.save ***" ;
	@echo
	printf "compile-source $(LEX)  \n\
	read-rules $< \n\
	compose-result \n\
	save-result $@ \n\
	quit \n" > ../../tmp/fao-lex-save-script
	$(LEXC)  < ../../tmp/fao-lex-save-script
	rm -f ../../tmp/fao-lex-save-script


# The fourth goal is to build twol-fao.bin
# This goal depends on twol-fao.txt
twol-fao.bin: ../bin/twol-fao.bin
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
../bin/tok.fst: tok.xfst
	@echo
	@echo "*** Building the tokenizer $(notdir $@) ***" ;
	@echo
	@printf "source $< \n\
	save stack $@ \n\
	quit \n" > ../../tmp/tok-script
	$(XFST)  < ../../tmp/tok-script
	@rm -f ../../tmp/tok-script

# Let us just make a binary disambiguator
# and dependency grammar.
# They can be used instead of the source files.
dis-bin: ../bin/fao-dis.bin
../bin/%.bin: %.rle
	@echo
	@echo "*** Building a binary $(notdir $@) ***" ;
	@echo
	@vislcg3 --grammar $< \
			 --grammar-only \
			 --grammar-bin $@ \
			 -C UTF-8

# "make clean" is there to remove the binary files at will.
clean:
	@rm -f ../bin/*
