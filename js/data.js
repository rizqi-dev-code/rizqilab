/* Data karakter Hiragana & Katakana, dikelompokkan per 行 (gyou / baris konsonan) */

const HIRAGANA = [
  { label: "あ行", type: "basic", chars: [
    { k: "あ", r: "a" }, { k: "い", r: "i" }, { k: "う", r: "u" }, { k: "え", r: "e" }, { k: "お", r: "o" }
  ]},
  { label: "か行", type: "basic", chars: [
    { k: "か", r: "ka" }, { k: "き", r: "ki" }, { k: "く", r: "ku" }, { k: "け", r: "ke" }, { k: "こ", r: "ko" }
  ]},
  { label: "さ行", type: "basic", chars: [
    { k: "さ", r: "sa" }, { k: "し", r: "shi" }, { k: "す", r: "su" }, { k: "せ", r: "se" }, { k: "そ", r: "so" }
  ]},
  { label: "た行", type: "basic", chars: [
    { k: "た", r: "ta" }, { k: "ち", r: "chi" }, { k: "つ", r: "tsu" }, { k: "て", r: "te" }, { k: "と", r: "to" }
  ]},
  { label: "な行", type: "basic", chars: [
    { k: "な", r: "na" }, { k: "に", r: "ni" }, { k: "ぬ", r: "nu" }, { k: "ね", r: "ne" }, { k: "の", r: "no" }
  ]},
  { label: "は行", type: "basic", chars: [
    { k: "は", r: "ha" }, { k: "ひ", r: "hi" }, { k: "ふ", r: "fu" }, { k: "へ", r: "he" }, { k: "ほ", r: "ho" }
  ]},
  { label: "ま行", type: "basic", chars: [
    { k: "ま", r: "ma" }, { k: "み", r: "mi" }, { k: "む", r: "mu" }, { k: "め", r: "me" }, { k: "も", r: "mo" }
  ]},
  { label: "や行", type: "basic", chars: [
    { k: "や", r: "ya" }, { k: "ゆ", r: "yu" }, { k: "よ", r: "yo" }
  ]},
  { label: "ら行", type: "basic", chars: [
    { k: "ら", r: "ra" }, { k: "り", r: "ri" }, { k: "る", r: "ru" }, { k: "れ", r: "re" }, { k: "ろ", r: "ro" }
  ]},
  { label: "わ行", type: "basic", chars: [
    { k: "わ", r: "wa" }, { k: "を", r: "wo" }
  ]},
  { label: "ん", type: "basic", chars: [
    { k: "ん", r: "n" }
  ]},
  { label: "が行", type: "dakuten", chars: [
    { k: "が", r: "ga" }, { k: "ぎ", r: "gi" }, { k: "ぐ", r: "gu" }, { k: "げ", r: "ge" }, { k: "ご", r: "go" }
  ]},
  { label: "ざ行", type: "dakuten", chars: [
    { k: "ざ", r: "za" }, { k: "じ", r: "ji" }, { k: "ず", r: "zu" }, { k: "ぜ", r: "ze" }, { k: "ぞ", r: "zo" }
  ]},
  { label: "だ行", type: "dakuten", chars: [
    { k: "だ", r: "da" }, { k: "ぢ", r: "ji" }, { k: "づ", r: "zu" }, { k: "で", r: "de" }, { k: "ど", r: "do" }
  ]},
  { label: "ば行", type: "dakuten", chars: [
    { k: "ば", r: "ba" }, { k: "び", r: "bi" }, { k: "ぶ", r: "bu" }, { k: "べ", r: "be" }, { k: "ぼ", r: "bo" }
  ]},
  { label: "ぱ行", type: "handakuten", chars: [
    { k: "ぱ", r: "pa" }, { k: "ぴ", r: "pi" }, { k: "ぷ", r: "pu" }, { k: "ぺ", r: "pe" }, { k: "ぽ", r: "po" }
  ]},
  { label: "拗音 (きゃ〜)", type: "youon", chars: [
    { k: "きゃ", r: "kya" }, { k: "きゅ", r: "kyu" }, { k: "きょ", r: "kyo" },
    { k: "しゃ", r: "sha" }, { k: "しゅ", r: "shu" }, { k: "しょ", r: "sho" },
    { k: "ちゃ", r: "cha" }, { k: "ちゅ", r: "chu" }, { k: "ちょ", r: "cho" },
    { k: "にゃ", r: "nya" }, { k: "にゅ", r: "nyu" }, { k: "にょ", r: "nyo" },
    { k: "ひゃ", r: "hya" }, { k: "ひゅ", r: "hyu" }, { k: "ひょ", r: "hyo" },
    { k: "みゃ", r: "mya" }, { k: "みゅ", r: "myu" }, { k: "みょ", r: "myo" },
    { k: "りゃ", r: "rya" }, { k: "りゅ", r: "ryu" }, { k: "りょ", r: "ryo" },
    { k: "ぎゃ", r: "gya" }, { k: "ぎゅ", r: "gyu" }, { k: "ぎょ", r: "gyo" },
    { k: "じゃ", r: "ja" }, { k: "じゅ", r: "ju" }, { k: "じょ", r: "jo" },
    { k: "びゃ", r: "bya" }, { k: "びゅ", r: "byu" }, { k: "びょ", r: "byo" },
    { k: "ぴゃ", r: "pya" }, { k: "ぴゅ", r: "pyu" }, { k: "ぴょ", r: "pyo" }
  ]}
];

const KATAKANA = [
  { label: "ア行", type: "basic", chars: [
    { k: "ア", r: "a" }, { k: "イ", r: "i" }, { k: "ウ", r: "u" }, { k: "エ", r: "e" }, { k: "オ", r: "o" }
  ]},
  { label: "カ行", type: "basic", chars: [
    { k: "カ", r: "ka" }, { k: "キ", r: "ki" }, { k: "ク", r: "ku" }, { k: "ケ", r: "ke" }, { k: "コ", r: "ko" }
  ]},
  { label: "サ行", type: "basic", chars: [
    { k: "サ", r: "sa" }, { k: "シ", r: "shi" }, { k: "ス", r: "su" }, { k: "セ", r: "se" }, { k: "ソ", r: "so" }
  ]},
  { label: "タ行", type: "basic", chars: [
    { k: "タ", r: "ta" }, { k: "チ", r: "chi" }, { k: "ツ", r: "tsu" }, { k: "テ", r: "te" }, { k: "ト", r: "to" }
  ]},
  { label: "ナ行", type: "basic", chars: [
    { k: "ナ", r: "na" }, { k: "ニ", r: "ni" }, { k: "ヌ", r: "nu" }, { k: "ネ", r: "ne" }, { k: "ノ", r: "no" }
  ]},
  { label: "ハ行", type: "basic", chars: [
    { k: "ハ", r: "ha" }, { k: "ヒ", r: "hi" }, { k: "フ", r: "fu" }, { k: "ヘ", r: "he" }, { k: "ホ", r: "ho" }
  ]},
  { label: "マ行", type: "basic", chars: [
    { k: "マ", r: "ma" }, { k: "ミ", r: "mi" }, { k: "ム", r: "mu" }, { k: "メ", r: "me" }, { k: "モ", r: "mo" }
  ]},
  { label: "ヤ行", type: "basic", chars: [
    { k: "ヤ", r: "ya" }, { k: "ユ", r: "yu" }, { k: "ヨ", r: "yo" }
  ]},
  { label: "ラ行", type: "basic", chars: [
    { k: "ラ", r: "ra" }, { k: "リ", r: "ri" }, { k: "ル", r: "ru" }, { k: "レ", r: "re" }, { k: "ロ", r: "ro" }
  ]},
  { label: "ワ行", type: "basic", chars: [
    { k: "ワ", r: "wa" }, { k: "ヲ", r: "wo" }
  ]},
  { label: "ン", type: "basic", chars: [
    { k: "ン", r: "n" }
  ]},
  { label: "ガ行", type: "dakuten", chars: [
    { k: "ガ", r: "ga" }, { k: "ギ", r: "gi" }, { k: "グ", r: "gu" }, { k: "ゲ", r: "ge" }, { k: "ゴ", r: "go" }
  ]},
  { label: "ザ行", type: "dakuten", chars: [
    { k: "ザ", r: "za" }, { k: "ジ", r: "ji" }, { k: "ズ", r: "zu" }, { k: "ゼ", r: "ze" }, { k: "ゾ", r: "zo" }
  ]},
  { label: "ダ行", type: "dakuten", chars: [
    { k: "ダ", r: "da" }, { k: "ヂ", r: "ji" }, { k: "ヅ", r: "zu" }, { k: "デ", r: "de" }, { k: "ド", r: "do" }
  ]},
  { label: "バ行", type: "dakuten", chars: [
    { k: "バ", r: "ba" }, { k: "ビ", r: "bi" }, { k: "ブ", r: "bu" }, { k: "ベ", r: "be" }, { k: "ボ", r: "bo" }
  ]},
  { label: "パ行", type: "handakuten", chars: [
    { k: "パ", r: "pa" }, { k: "ピ", r: "pi" }, { k: "プ", r: "pu" }, { k: "ペ", r: "pe" }, { k: "ポ", r: "po" }
  ]},
  { label: "拗音 (キャ〜)", type: "youon", chars: [
    { k: "キャ", r: "kya" }, { k: "キュ", r: "kyu" }, { k: "キョ", r: "kyo" },
    { k: "シャ", r: "sha" }, { k: "シュ", r: "shu" }, { k: "ショ", r: "sho" },
    { k: "チャ", r: "cha" }, { k: "チュ", r: "chu" }, { k: "チョ", r: "cho" },
    { k: "ニャ", r: "nya" }, { k: "ニュ", r: "nyu" }, { k: "ニョ", r: "nyo" },
    { k: "ヒャ", r: "hya" }, { k: "ヒュ", r: "hyu" }, { k: "ヒョ", r: "hyo" },
    { k: "ミャ", r: "mya" }, { k: "ミュ", r: "myu" }, { k: "ミョ", r: "myo" },
    { k: "リャ", r: "rya" }, { k: "リュ", r: "ryu" }, { k: "リョ", r: "ryo" },
    { k: "ギャ", r: "gya" }, { k: "ギュ", r: "gyu" }, { k: "ギョ", r: "gyo" },
    { k: "ジャ", r: "ja" }, { k: "ジュ", r: "ju" }, { k: "ジョ", r: "jo" },
    { k: "ビャ", r: "bya" }, { k: "ビュ", r: "byu" }, { k: "ビョ", r: "byo" },
    { k: "ピャ", r: "pya" }, { k: "ピュ", r: "pyu" }, { k: "ピョ", r: "pyo" }
  ]}
];

/* Meratakan data jadi satu daftar flat per skrip, dipakai flashcard & kuis */
function flattenKana(rows) {
  const out = [];
  rows.forEach(row => {
    row.chars.forEach(c => out.push({ k: c.k, r: c.r, type: row.type, label: row.label }));
  });
  return out;
}

const HIRAGANA_FLAT = flattenKana(HIRAGANA);
const KATAKANA_FLAT = flattenKana(KATAKANA);

const TYPE_LABEL = {
  basic: "Dasar",
  dakuten: "Dakuten (゛)",
  handakuten: "Handakuten (゜)",
  youon: "Yōon (拗音)"
};
