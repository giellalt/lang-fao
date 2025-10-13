import * as cg3 from './.divvun-rt/cg3.ts';
import * as divvun from './.divvun-rt/divvun.ts';
import * as hfst from './.divvun-rt/hfst.ts';
import { Command, StringEntry } from './.divvun-rt/mod.ts';

export default function smeGramRelease(entry: StringEntry): Command {
  let x = hfst.tokenize("tokenize", entry, { model_path: "tokeniser-gramcheck-gt-desc.pmhfst" });
  x = divvun.blanktag("whitespace", x, { model_path: "analyser-gt-whitespace.hfst" });
  x = cg3.vislcg3("mwe-dis", x, { model_path: "mwe-dis.bin" });
  x = cg3.mwesplit("mwesplit", x);
  x = divvun.blanktag("whitespace", x, { model_path: "analyser-gt-whitespace.hfst" });
  x = divvun.cgspell("speller", x, {
        acc_model_path: "acceptor.default.hfst",
        err_model_path: "errmodel.default.hfst"
    });
  x = cg3.vislcg3("grc-disamb", x, { model_path: "grc-disambiguator.bin" });
  x = cg3.vislcg3("spell-sugg-filtering", x, { model_path: "spellchecker.bin" });
  x = cg3.vislcg3("after-spell-disamb", x, { model_path: "after-speller-disambiguator.bin" });
  x = cg3.vislcg3("gramcheck", x, { model_path: "grammarchecker.bin" });
  return divvun.suggest("suggestions", x, { model_path: "generator-gramcheck-gt-norm.hfstol" });
}
