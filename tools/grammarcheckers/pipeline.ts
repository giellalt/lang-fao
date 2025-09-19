import * as cg3 from "./.divvun-rt/cg3.ts";
import * as divvun from "./.divvun-rt/divvun.ts";
import * as hfst from "./.divvun-rt/hfst.ts";
import { Command, StringEntry } from "./.divvun-rt/mod.ts";

export default function smaGramRelease(entry: StringEntry): Command {
  let x = hfst.tokenize(entry, {
    model_path: "tokeniser-gramcheck-gt-desc.pmhfst",
  });
  x = divvun.blanktag(x, { model_path: "analyser-gt-whitespace.hfst" });
  x = cg3.vislcg3(x, { model_path: "valency.bin" });
  x = cg3.vislcg3(x, { model_path: "mwe-dis.bin" });
  x = cg3.mwesplit(x);
  x = divvun.blanktag(x, { model_path: "analyser-gt-errorwhitespace.hfst" });
  x = divvun.cgspell(x, {
    acc_model_path: "acceptor.default.hfst",
    err_model_path: "errmodel.default.hfst",
  });
  x = cg3.vislcg3(x, { model_path: "valency-postspell.bin" });
  x = cg3.vislcg3(x, { model_path: "grc-disambiguator.bin" });
  x = cg3.vislcg3(x, { model_path: "spellchecker.bin" });
  x = cg3.vislcg3(x, { model_path: "grammarchecker-release.bin" });
  x = divvun.suggest(x, { model_path: "generator-gramcheck-gt-norm.hfstol" });

  return x;
}
