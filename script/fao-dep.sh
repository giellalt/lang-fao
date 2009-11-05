#! /bin/bash


while [ 1 ]                                 # as long as there is input
do                                          # run the following loop
echo -n "Skriv setning (ctrl-C = STOP): "          # (message to user)
read sentence                               # next 3 lines is the usual command
echo $sentence | preprocess --abbr=~/gtsvn/st/fao/bin/abbr.txt | \
lookup -flags mbTT -utf8 ~/gtsvn/st/fao/bin/fao.fst | ~/gtsvn/gt/script/lookup2cg | \
vislcg3 --grammar $HOME/gtsvn/st/fao/src/fao-dis.rle -C UTF-8 | \
vislcg3 --grammar $HOME/gtsvn/st/fao/src/fao-dep.rle -C UTF-8

done                      
exit 0
