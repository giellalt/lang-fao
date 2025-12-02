import * as cg3 from "./.divvun-rt/cg3.ts";
import * as divvun from "./.divvun-rt/divvun.ts";
import * as hfst from "./.divvun-rt/hfst.ts";
import { Command, StringEntry } from "./.divvun-rt/mod.ts";
import * as speech from './.divvun-rt/speech.ts';

export default function faoTextTTS(entry: StringEntry): Command {
  let x = hfst.tokenize("tokenise", entry, { model_path: "tokeniser-tts-cggt-desc.pmhfst" });
  x = divvun.blanktag("whitespace", x, { model_path: "analyser-gt-whitespace.hfst" });
  x = cg3.vislcg3("mwe-dis",        x, { model_path: "mwe-dis.bin" });
  x = cg3.mwesplit("mwesplit",      x);
  x = cg3.vislcg3("disamb",         x, { model_path: "disambiguator.bin" });
  x = cg3.vislcg3("functions",      x, { model_path: "functions.bin" });
  x = cg3.vislcg3("deps",           x, { model_path: "dependency.bin" });
  x = speech.normalize(
    "normaliser", x,
    {
      generator: "generator-tts-gt-norm.hfstol",
      analyzer:  "analyser-gt-norm.hfstol",
      normalizers: {
        "Sem/Time-clock": "transcriptor-clock-digit2text.filtered.lookup.hfstol",
        "Sem/Date":       "transcriptor-ttsdate-digit2text.filtered.lookup.hfstol",
        "Sem/Year":       "transcriptor-ttsdate-digit2text.filtered.lookup.hfstol",
        "Arab":           "transcriptor-numbers-digit2text.filtered.lookup.hfstol",
        "Roman":          "transcriptor-numbers-digit2text.filtered.lookup.hfstol",
        "ABBR":           "transcriptor-abbrevs2text.filtered.lookup.hfstol",
        "ACR":            "transcriptor-abbrevs2text.filtered.lookup.hfstol",
        "Symbol":         "transcriptor-symbols2text.filtered.lookup.hfstol",
        "Emoji":          "transcriptor-emoji2text.filtered.lookup.hfstol"
      }
    }
  );
  x = speech.phon("text2phon", x, { model: "text2phontext.hfstol", tag_models: { "ACR": "acro2text.hfstol" } });
  x = cg3.sentences("phon",    x, { mode: "phonological" });
  return x;
}

/**
 * Dev pipeline for testing with local models.
 */
export function localTTSTest_dev(entry: StringEntry): Command {
  let x = hfst.tokenize("tokenise", entry, { model_path: "@./tokeniser-tts-cggt-desc.pmhfst" });
  x = divvun.blanktag("whitespace", x,     { model_path: "@./analyser-gt-whitespace.hfst" });
  x = cg3.vislcg3("mwe-dis",        x,     { model_path: "@../tokenisers/mwe-dis.cg3" });
  x = cg3.mwesplit("mwesplit",      x);
  x = cg3.vislcg3("disamb",         x,     { model_path: "@../../src/cg3/disambiguator.cg3" });
  x = cg3.vislcg3("functions",      x,     { model_path: "@../../src/cg3/functions.cg3" });
  x = cg3.vislcg3("deps",           x,     { model_path: "@../../src/cg3/dependency.cg3" });
  x = speech.normalize(
    "normaliser", x,
    {
      generator: "@./generator-tts-gt-norm.hfstol",
      analyzer:  "@./analyser-gt-norm.hfstol",
      normalizers: {
        "Sem/Time-clock": "@./transcriptor-clock-digit2text.filtered.lookup.hfstol",
        "Sem/Date":       "@./transcriptor-ttsdate-digit2text.filtered.lookup.hfstol",
        "Sem/Year":       "@./transcriptor-ttsdate-digit2text.filtered.lookup.hfstol",
        "Arab":           "@./transcriptor-numbers-digit2text.filtered.lookup.hfstol",
        "Roman":          "@./transcriptor-numbers-digit2text.filtered.lookup.hfstol",
        "ABBR":           "@./transcriptor-abbrevs2text.filtered.lookup.hfstol",
        "ACR":            "@./transcriptor-abbrevs2text.filtered.lookup.hfstol",
        "Symbol":         "@./transcriptor-symbols2text.filtered.lookup.hfstol",
        "Emoji":          "@./transcriptor-emoji2text.filtered.lookup.hfstol"
      }
    }
  );
  x = speech.phon("text2phon", x, { model: "@./text2phontext.hfstol", tag_models: { "ACR": "@./acro2text.hfstol" } });
  x = cg3.sentences("phon",    x, { mode: "phonological" });
  return x;
}
