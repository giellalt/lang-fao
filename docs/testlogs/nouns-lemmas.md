# Lemma-tests for *nouns* in ...`nouns.lexc`


**hyperlink** failures:

* `hyperlink+N+Neu+Sg+Nom+Indef` does not generate!
* `hyperlink+N+Neu+Pl+Nom+Indef` does not generate!
* `hyperlink+N+Fem+Pl+Nom+Indef` does not generate!
* `hyperlink+N+Msc+Sg+Nom+Indef` does not generate!
* `hyperlink+N+Msc+Pl+Nom+Indef` does not generate!
* `hyperlink+N+Fem+Sg+Nom+Indef` does not generate!
* `hyperlink` has following analyses:
  * `hyperlink+Sg+Nom+Indef`
  * `hyperlink+Sg+Gen+Indef`
  * `hyperlink+Sg+Dat+Indef`
  * `hyperlink+Sg+Acc+Indef`

**røðir** failures:

* `røðir+N+Fem+Pl+Nom+Indef` => `røðirir`
* `røðir` has following analyses:
  * `røði+N+Neu+Pl+Nom+Indef`
  * `røða+V+Ind+Prs+2Sg`
  * `røð+N+Fem+Pl+Acc+Indef`
  * `røði+N+Neu+Pl+Acc+Indef`
  * `røða+V+Ind+Prs+3Sg`
  * `røð+N+Fem+Pl+Nom+Indef`

**homepage** failures:

* `homepage+N+Fem+Pl+Nom+Indef` does not generate!
* `homepage+N+Neu+Pl+Nom+Indef` does not generate!
* `homepage+N+Fem+Sg+Nom+Indef` does not generate!
* `homepage+N+Msc+Sg+Nom+Indef` does not generate!
* `homepage+N+Neu+Sg+Nom+Indef` does not generate!
* `homepage+N+Msc+Pl+Nom+Indef` does not generate!
* `homepage` has following analyses:
  * `homepage+Sg+Nom+Indef`
  * `homepage+Sg+Gen+Indef`
  * `homepage+Sg+Dat+Indef`
  * `homepage+Sg+Acc+Indef`

## Lemma statistics
* 49959 lemmas
* 99.98999179327048 % success

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
