## Process this file with automake to produce Makefile.in
## Copyright: Sámediggi/Divvun/UiT
## Licence: GPL v3+

if WANT_NEURAL_SPELLERS
GT_NEURAL_MODELS=speller.charbased.model
noinst_DATA=$(GT_NEURAL_MODELS)
endif

typos.txt: $(top_srcdir)/test/data/typos.txt
	cp -v $< $@

typos.unsorted: typos.txt
	grep -v -E '^#' < $< | grep -v -E '^$$' | sort -R | cut -f 1,2 -d '	' > $@

# TODO:
# TRAIN VALID TEST split is now 90 % 5 % 5 %, if corpora too big update to:
# everything minus some thousands, some thousands halved -split!
# also, collect correct words in this corpus...
train.typos: typos.unsorted
	head -n `wc -l < $< | $(SED) -e 's:$$: * 0.9 / 1:' | bc` < $< > $@

validate.typos: typos.unsorted
	tail -n `wc -l < $< | $(SED) -e 's:$$: * 0.1 / 1:' | bc` < $< |\
		head -n `wc -l < $< | $(SED) -e 's:$$: * 0.05 / 1:' | bc` > $@

test.typos: typos.unsorted
	tail -n `wc -l < $< | $(SED) -e 's:$$: * 0.1 / 1:' | bc` < $< |\
		tail -n `wc -l < $< | $(SED) -e 's:$$: * 0.05 / 1:' | bc` > $@

%.correct: %.typos
	cut -d '	' -f 1 < $< > $@

%.incorrect: %.typos
	cut -d '	' -f 2 < $< > $@

%.chars: %
	$(SED) -e 's/ /_/g' -e 's/./ & /g' < $< > $@

if WANT_NEURAL_SPELLERS

typos.vocab.chars.src: train.correct.chars train.incorrect.chars \
					   validate.correct.chars validate.incorrect.chars \
					   speller.charbased.yaml
	$(ONMT_BUILD_VOCAB) -config speller.charbased.yaml


typos.vocab.chars.tgt: typos.vocab.chars.src

speller.charbased.model: typos.vocab.chars.tgt
	$(ONMT_TRAIN) -config speller.charbased.yaml
	cp -v speller.charbased.model_step_100000.pt $@
endif

# include $(top_srcdir)/../giella-core/am-shared/tools-spellcheckers-neural-dir-include.am
