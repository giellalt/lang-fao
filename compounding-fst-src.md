# Compounding morphology



# Lexicon R gets flags and sends compounds over to RReal
 @P.CmpFrst.FALSE@@P.CmpPref.FALSE@@D.CmpLast.TRUE@@D.CmpNone.TRUE@@U.CmpNone.FALSE@@P.CmpOnly.TRUE@ RReal ;  are Flags to control compounding

# Lexicon RReal is the lexicon for the Cmp tag and resending to N, A
 *  +Cmp#: Nouns ;          
 *  +Cmp#: Adjectives ;    
           R-    ;        

# Lexicon R- for compounds with hyphen
  +Cmp#:%- Nouns ;    
  +Cmp#:%- Adjectives ;    

# Lexicon RNum for compounds numeral + noun
       +Use/SpellNoSugg+Cmp/Hyph+Cmp#:-# Nouns ;    For Num Cmp Noun, vi vil ikke ha Num Cmp Num
* * *
<small>This (part of) documentation was generated from [../src/fst/compounding.lexc](http://github.com/giellalt/lang-fao/blob/main/../src/fst/compounding.lexc)</small>