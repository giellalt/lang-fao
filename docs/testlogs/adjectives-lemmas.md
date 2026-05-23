# Lemma-tests for *adjectives* in ...`adjectives.lexc`


**næsthægstur** failures:

* `næsthægstur+A+Superl+Msc+Sg+Nom+Def` => `næsthægsti`
* `næsthægstur` has following analyses:
  * `næsthægstur+A+Superl+Msc+Sg+Nom+Indef`

**næststørstur** failures:

* `næststørstur+A+Superl+Msc+Sg+Nom+Def` => `næststørsti`
* `næststørstur` has following analyses:
  * `næststørstur+A+Superl+Msc+Sg+Nom+Indef`

**fjórðstørstur** failures:

* `fjórðstørstur+A+Superl+Msc+Sg+Nom+Def` => `fjórðstørsti`
* `fjórðstørstur` has following analyses:
  * `fjórðstørstur+A+Superl+Msc+Sg+Nom+Indef`

**triðstørstur** failures:

* `triðstørstur+A+Superl+Msc+Sg+Nom+Def` => `triðstørsti`
* `triðstørstur` has following analyses:
  * `triðstørstur+A+Superl+Msc+Sg+Nom+Indef`

## Lemma statistics
* 14093 lemmas
* 99.97161711487973 % success

## Settings used

```json
{
    "adjectives": {
        "exclusions": [
            "(adjcmp1|ELDRI|ELSTUR|adj_def)"
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
            "+N+Neus+Sg+Nom+Indef",
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
            "+N+Prop+Neu+Pl+Nom+Indef"
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
