# Lemma-tests for *adjectives* in ...`adjectives.lexc`


## Lemma statistics
* 14089 lemmas
* 100.0 % success

## Settings used

```json
{
    "adjectives": {
        "exclusions": [
            "(adjcmp1|ELDRI|ELSTUR|adj_def|SRi)"
        ],
        "lemmatags": [
            "+A+Msc+Sg+Nom+Indef",
            "+A+Msc+Sg+Nom+Def",
            "+A+Comp+Msc+Sg+Nom+Def",
            "+A+Superl+Msc+Sg+Nom+Def"
        ],
        "lexcfile": ".../adjectives.lexc"
    },
    "analyser": ".../analyser-gt-norm.hfstol",
    "generator": ".../generator-gt-norm.hfstol",
    "nouns": {
        "lemmatags": [
            "+N+Neu+Sg+Nom+Indef",
            "+N+Neu+Pl+Nom+Indef",
            "+N+Fem+Sg+Nom+Indef",
            "+N+Fem+Pl+Nom+Indef",
            "+N+Msc+Sg+Nom+Indef",
            "+N+Msc+Pl+Nom+Indef"
        ],
        "lexcfile": ".../nouns.lexc"
    },
    "propernouns": {
        "lemmatags": [
            "+N+Prop+Sg+Nom",
            "+N+Prop+Msc+Sg+Nom",
            "+N+Prop+Fem+Sg+Nom",
            "+N+Prop+Neu+Sg+Nom",
            "+N+Prop+Msc+Sg+Nom+Indef",
            "+N+Prop+Fem+Sg+Nom+Indef",
            "+N+Prop+Neu+Sg+Nom+Indef",
            "+N+Prop+Msc+Pl+Nom+Indef",
            "+N+Prop+Fem+Pl+Nom+Indef",
            "+N+Prop+Neu+Pl+Nom+Indef",
            "+N+Prop+Msc+Sg+Nom+Def",
            "+N+Prop+Fem+Sg+Nom+Def",
            "+N+Prop+Neu+Sg+Nom+Def",
            "+N+Prop+Msc+Pl+Nom+Def",
            "+N+Prop+Fem+Pl+Nom+Def",
            "+N+Prop+Neu+Pl+Nom+Def"
        ],
        "lexcfile": ".../propernouns.lexc"
    },
    "verbs": {
        "lemmatags": [
            "+V+Inf",
            "+V+Inf+Pass"
        ],
        "lexcfile": ".../verbs.lexc"
    }
}
```
