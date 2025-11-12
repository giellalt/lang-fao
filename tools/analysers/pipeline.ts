import * as cg3 from "./.divvun-rt/cg3.ts";
import * as divvun from "./.divvun-rt/divvun.ts";
import * as hfst from "./.divvun-rt/hfst.ts";
import { Command, StringEntry } from "./.divvun-rt/mod.ts";

export default function foAnalyser(entry: StringEntry): Command {
  let x = hfst.tokenize("tokenize", entry, { model_path: "tokeniser-disamb-gt-desc.pmhfst" });
  x = divvun.blanktag("whitespace", x, { model_path: "analyser-gt-whitespace.hfst" });
  x = cg3.vislcg3("mwe-dis", x, { model_path: "mwe-dis.bin" });
  x = cg3.mwesplit("mwesplit", x);
  x = cg3.vislcg3("disamb", x, { model_path: "disambiguator.bin" });
  x = cg3.vislcg3("functions", x, { model_path: "functions.bin" });
  return cg3.vislcg3("dependency", x, { model_path: "dependency.bin" });
}

/**
 * Dev pipeline for testing with local models.
 */
export function localTest_dev(entry: StringEntry): Command {
  let x = hfst.tokenize("tokenize", entry, { model_path: "@./tokeniser-disamb-gt-desc.pmhfst" });
  x = divvun.blanktag("whitespace", x, { model_path: "@./analyser-gt-whitespace.hfst" });
  x = cg3.vislcg3("mwe-dis", x, { model_path: "@../tokenisers/mwe-dis.cg3" });
  x = cg3.mwesplit("mwesplit", x);
  x = cg3.vislcg3("disamb", x, { model_path: "@../../src/cg3/disambiguator.cg3" });
  x = cg3.vislcg3("functions", x, { model_path: "@../../../shared-smi/src/cg3/functions.cg3" });
  return cg3.vislcg3("dependency", x, { model_path: "@../../../shared-smi/src/cg3/dependency.cg3" });
}
