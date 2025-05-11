const words = [
  {
    eng: "replaceable",
    jpn: "置き換えられる，代わりのある",
    category: "形容詞",
  },
  {
    eng: "spark",
    jpn: "火花，きらめき",
    category: "名詞",
  },
  {
    eng: "pity",
    jpn: "同情，あわれみ",
    category: "名詞",
  },
  {
    eng: "strictly",
    jpn: "厳密に，厳しく",
    category: "副詞",
  },
  {
    eng: "brightly",
    jpn: "明るく，輝いて",
    category: "副詞",
  },
  {
    eng: "hang on",
    jpn: "しがみつく，頑張る",
    category: "熟語",
  },
  {
    eng: "look up to",
    jpn: "を尊敬する，を敬う",
    category: "熟語",
  },
  {
    eng: "sympathetic",
    jpn: "思いやりのある，共感的な",
    category: "形容詞",
  },
  {
    eng: "end up",
    jpn: "最終的に，することになる",
    category: "熟語",
  },
  {
    eng: "chimney",
    jpn: "煙突",
    category: "名詞",
  },
  {
    eng: "temper",
    jpn: "気性，かんしゃく",
    category: "名詞",
  },
  {
    eng: "quarrel",
    jpn: "喧嘩，口論，言い争い",
    category: "名詞",
  },
  {
    eng: "bark",
    jpn: "吠える",
    category: "動詞",
  },
  {
    eng: "bark",
    jpn: "木の皮",
    category: "名詞",
  },
  {
    eng: "loyalty",
    jpn: "忠誠，誠実",
    category: "名詞",
  },
  {
    eng: "intent",
    jpn: "意図，目的",
    category: "名詞",
  },
  {
    eng: "lately",
    jpn: "最近",
    category: "副詞",
  },
  {
    eng: "invade",
    jpn: "侵略する",
    category: "動詞",
  },
  {
    eng: "tender",
    jpn: "優しい",
    category: "形容詞",
  },
  {
    eng: "tender",
    jpn: "世話人",
    category: "名詞",
  },
  {
    eng: "map out",
    jpn: "綿密に計画する，詳細に計画する，地図に精密に示す",
    category: "熟語",
  },
  {
    eng: "spontaneous",
    jpn: "自発的な，任意の",
    category: "形容詞",
  },
  {
    eng: "forgive",
    jpn: "を許す，大目に見る",
    category: "動詞",
  },
  {
    eng: "in contrast",
    jpn: "対照的に，これに対して",
    category: "熟語",
  },
  {
    eng: "fame",
    jpn: "名声",
    category: "名詞",
  },
  {
    eng: "modest",
    jpn: "控えめな",
    category: "形容詞",
  },
  {
    eng: "thumb",
    jpn: "親指",
    category: "名詞",
  },
  {
    eng: "robber",
    jpn: "強盗，強盗罪",
    category: "名詞",
  },
  {
    eng: "terribly",
    jpn: "ひどく，ものすごく",
    category: "副詞",
  },
  {
    eng: "drawer",
    jpn: "引き出し",
    category: "名詞",
  },
  {
    eng: "informal",
    jpn: "非公式な，略式の",
    category: "形容詞",
  },
  {
    eng: "conclusive",
    jpn: "決定的な，結論的な",
    category: "形容詞",
  },
  {
    eng: "fertilizer",
    jpn: "肥料，育成剤",
    category: "名詞",
  },
  {
    eng: "holistic",
    jpn: "全体論の，総体的な",
    category: "形容詞",
  },
  {
    eng: "sincerely",
    jpn: "心から，真心こめて",
    category: "副詞",
  },
  {
    eng: "sympathy",
    jpn: "同情，思いやり",
    category: "名詞",
  },
  {
    eng: "pat",
    jpn: "軽くたたく，軽く打つ",
    category: "動詞",
  },
  {
    eng: "in order to",
    jpn: "～するために，～の目的で",
    category: "熟語",
  },
  {
    eng: "pioneer",
    jpn: "開拓者，先駆者",
    category: "名詞",
  },
  {
    eng: "mend",
    jpn: "を直す，修繕する",
    category: "動詞",
  },
  {
    eng: "pollution",
    jpn: "汚染，汚れ，汚染物",
    category: "名詞",
  },
  {
    eng: "tightly",
    jpn: "しっかりと，きつく",
    category: "副詞",
  },
  {
    eng: "cruel",
    jpn: "残酷な，ひどい",
    category: "形容詞",
  },
  {
    eng: "oxygen",
    jpn: "酸素",
    category: "名詞",
  },
  {
    eng: "come down with",
    jpn: "病気などにかかる，罹患する",
    category: "熟語",
  },
  {
    eng: "applause",
    jpn: "拍手かっさい，称賛",
    category: "名詞",
  },
  {
    eng: "spectator",
    jpn: "観客，見物人",
    category: "名詞",
  },
  {
    eng: "afford to",
    jpn: "する余裕がある",
    category: "熟語",
  },
  {
    eng: "slave",
    jpn: "奴隷",
    category: "名詞",
  },
  {
    eng: "debt",
    jpn: "借金，負債",
    category: "名詞",
  },
  {
    eng: "tame",
    jpn: "飼いならす",
    category: "動詞",
  },
  {
    eng: "blank",
    jpn: "白紙の，空白の",
    category: "形容詞",
  },
  {
    eng: "gross",
    jpn: "全体の，総体的な",
    category: "形容詞",
  },
  {
    eng: "meantime",
    jpn: "合間に，その間に",
    category: "副詞",
  },
  {
    eng: "impractical",
    jpn: "非実用的な，実行不可能な",
    category: "形容詞",
  },
  {
    eng: "sturdy",
    jpn: "たくましい，頑強な",
    category: "形容詞",
  },
  {
    eng: "confess",
    jpn: "を打ち明ける，白状する",
    category: "動詞",
  },
  {
    eng: "silence",
    jpn: "沈黙，静けさ",
    category: "名詞",
  },
  {
    eng: "incredible",
    jpn: "信じられない，信じがたい",
    category: "形容詞",
  },
  {
    eng: "nasty",
    jpn: "不快な，不愉快な",
    category: "形容詞",
  },
  {
    eng: "envelope",
    jpn: "封筒，封書",
    category: "名詞",
  },
  {
    eng: "ugly",
    jpn: "醜い",
    category: "形容詞",
  },
  {
    eng: "do away with",
    jpn: "廃止する，取り消す",
    category: "熟語",
  },
  {
    eng: "horrible",
    jpn: "恐ろしい",
    category: "形容詞",
  },
  {
    eng: "leap in",
    jpn: "飛び込む，急上昇",
    category: "熟語",
  },
  {
    eng: "soap",
    jpn: "せっけん",
    category: "名詞",
  },
  {
    eng: "spite",
    jpn: "悪意，恨み",
    category: "名詞",
  },
  {
    eng: "reception",
    jpn: "応接，歓迎",
    category: "名詞",
  },
  {
    eng: "noble",
    jpn: "気高い，高貴な",
    category: "形容詞",
  },
  {
    eng: "capacity",
    jpn: "容量，容積",
    category: "名詞",
  },
  {
    eng: "blend",
    jpn: "を混ぜ合わせる，を混ぜる",
    category: "動詞",
  },
  {
    eng: "tuck in",
    jpn: "押し込む，詰め込む",
    category: "熟語",
  },
  {
    eng: "religious",
    jpn: "宗教上の，信仰の",
    category: "形容詞",
  },
  {
    eng: "laundry",
    jpn: "洗濯物，洗濯",
    category: "名詞",
  },
  {
    eng: "interval",
    jpn: "間隔，合い間",
    category: "名詞",
  },
  {
    eng: "rob",
    jpn: "から奪う，強奪する",
    category: "動詞",
  },
  {
    eng: "vast",
    jpn: "広大な，莫大な",
    category: "形容詞",
  },
  {
    eng: "luggage",
    jpn: "荷物，手荷物",
    category: "名詞",
  },
  {
    eng: "grief",
    jpn: "悲しみ，深い悲しみ",
    category: "名詞",
  },
  {
    eng: "kettle",
    jpn: "やかん，湯沸かし",
    category: "名詞",
  },
  {
    eng: "flock",
    jpn: "群れ，集団",
    category: "名詞",
  },
  {
    eng: "fall for",
    jpn: "に夢中になる，騙される，引きつけられる",
    category: "熟語",
  },
  {
    eng: "intend to",
    jpn: "するつもりである，する意図がある",
    category: "熟語",
  },
  {
    eng: "adventure",
    jpn: "冒険",
    category: "名詞",
  },
  {
    eng: "cart",
    jpn: "荷車，荷馬車",
    category: "名詞",
  },
  {
    eng: "earthquake",
    jpn: "地震",
    category: "名詞",
  },
  {
    eng: "grace",
    jpn: "恵み",
    category: "名詞",
  },
  {
    eng: "shell",
    jpn: "貝殻，貝",
    category: "名詞",
  },
  {
    eng: "weave",
    jpn: "織物を織る",
    category: "動詞",
  },
  {
    eng: "boast",
    jpn: "自慢する，誇示する",
    category: "動詞",
  },
  {
    eng: "knock down",
    jpn: "を取り壊す，打ち倒す",
    category: "熟語",
  },
  {
    eng: "bandage",
    jpn: "包帯，絆創膏，ガーゼ",
    category: "名詞",
  },
  {
    eng: "afterward",
    jpn: "その後",
    category: "副詞",
  },
  {
    eng: "instruct",
    jpn: "指示する，教える",
    category: "動詞",
  },
  {
    eng: "starve",
    jpn: "飢える",
    category: "動詞",
  },
  {
    eng: "horizon",
    jpn: "地平線，水平線",
    category: "名詞",
  },
  {
    eng: "arrest",
    jpn: "を逮捕する，捕まえる",
    category: "動詞",
  },
  {
    eng: "lay off",
    jpn: "を解雇する，首にする",
    category: "熟語",
  },
  {
    eng: "prestigious",
    jpn: "著名な，名声のある",
    category: "形容詞",
  },
  {
    eng: "geography",
    jpn: "地理，地理学",
    category: "名詞",
  },
  {
    eng: "per",
    jpn: "につき，ごとに",
    category: "その他",
  },
  {
    eng: "at face value",
    jpn: "額面通り，表面通りの価値で",
    category: "熟語",
  },
  {
    eng: "act up",
    jpn: "あばれる，騒ぐ",
    category: "熟語",
  },
  {
    eng: "beggar",
    jpn: "乞食，物乞い",
    category: "名詞",
  },
  {
    eng: "warmth",
    jpn: "暖かさ，温もり",
    category: "名詞",
  },
  {
    eng: "stabilize",
    jpn: "固定させる，安定させる",
    category: "動詞",
  },
  {
    eng: "meadow",
    jpn: "牧草地，草原",
    category: "名詞",
  },
  {
    eng: "water down",
    jpn: "水で薄める，和らげる",
    category: "熟語",
  },
  {
    eng: "fountain",
    jpn: "噴水，泉",
    category: "名詞",
  },
  {
    eng: "phase out",
    jpn: "段階的に廃止する，撤去する",
    category: "熟語",
  },
  {
    eng: "thin",
    jpn: "薄い，痩せた",
    category: "形容詞",
  },
  {
    eng: "replacement",
    jpn: "置換，代替",
    category: "名詞",
  },
  {
    eng: "cage",
    jpn: "かご，おり",
    category: "名詞",
  },
  {
    eng: "get past",
    jpn: "のそばを通る，通り抜ける",
    category: "熟語",
  },
  {
    eng: "what is more",
    jpn: "さらに，その上",
    category: "熟語",
  },
  {
    eng: "invitation",
    jpn: "招待，案内",
    category: "名詞",
  },
  {
    eng: "container",
    jpn: "容器，入れ物",
    category: "名詞",
  },
  {
    eng: "jealous",
    jpn: "うらやましい，嫉妬している",
    category: "形容詞",
  },
  {
    eng: "marble",
    jpn: "大理石，大理石模様",
    category: "名詞",
  },
  {
    eng: "tutor",
    jpn: "家庭教師，個別指導者",
    category: "名詞",
  },
  {
    eng: "unite",
    jpn: "を結合させる，団結する",
    category: "動詞",
  },
  {
    eng: "in substance",
    jpn: "実質上，実際には，事実上",
    category: "熟語",
  },
  {
    eng: "comb",
    jpn: "くし",
    category: "名詞",
  },
  {
    eng: "fiction",
    jpn: "創作，作り話",
    category: "名詞",
  },
  {
    eng: "in the red",
    jpn: "赤字で，赤字経営で",
    category: "熟語",
  },
  {
    eng: "frank",
    jpn: "率直な，隠さない",
    category: "形容詞",
  },
  {
    eng: "spectacle",
    jpn: "光景，ありさま",
    category: "名詞",
  },
  {
    eng: "eager to",
    jpn: "したがる，熱意を持って",
    category: "熟語",
  },
  {
    eng: "shed light on",
    jpn: "に光を放つ，当てる",
    category: "熟語",
  },
  {
    eng: "fanatical",
    jpn: "熱狂的な，熱烈な",
    category: "形容詞",
  },
  {
    eng: "glue",
    jpn: "接着剤",
    category: "名詞",
  },
  {
    eng: "bold",
    jpn: "勇敢な",
    category: "形容詞",
  },
  {
    eng: "ultimately",
    jpn: "最後に，ついに",
    category: "副詞",
  },
  {
    eng: "backyard",
    jpn: "裏庭",
    category: "名詞",
  },
  {
    eng: "roast",
    jpn: "あぶり焼きにする",
    category: "動詞",
  },
  {
    eng: "neat",
    jpn: "きちんとした",
    category: "形容詞",
  },
  {
    eng: "put up at",
    jpn: "に泊まる，宿泊する",
    category: "熟語",
  },
  {
    eng: "set a precedent",
    jpn: "先例を作る，前例を作る",
    category: "熟語",
  },
  {
    eng: "flash",
    jpn: "閃光",
    category: "名詞",
  },
  {
    eng: "organ",
    jpn: "臓器",
    category: "名詞",
  },
  {
    eng: "kingdom",
    jpn: "王国",
    category: "名詞",
  },
  {
    eng: "outstanding",
    jpn: "並外れた，目立った",
    category: "形容詞",
  },
  {
    eng: "rise and shine",
    jpn: "起き上がる，起床する",
    category: "熟語",
  },
  {
    eng: "vague",
    jpn: "漠然とした，あいまいな",
    category: "形容詞",
  },
  {
    eng: "break into tears",
    jpn: "涙が出る，泣き出す",
    category: "熟語",
  },
  {
    eng: "ankle",
    jpn: "足首，くるぶし",
    category: "名詞",
  },
  {
    eng: "instead",
    jpn: "代わりに，その代わり",
    category: "副詞",
  },
  {
    eng: "striking",
    jpn: "印象的な，目立つ",
    category: "形容詞",
  },
  {
    eng: "harsh",
    jpn: "厳しい",
    category: "形容詞",
  },
  {
    eng: "vandalize",
    jpn: "わざと壊す，故意に破壊する",
    category: "動詞",
  },
  {
    eng: "essence",
    jpn: "本質，真髄",
    category: "名詞",
  },
  {
    eng: "pull over",
    jpn: "車を止める，車を停止させる",
    category: "熟語",
  },
  {
    eng: "calmly",
    jpn: "落ち着いて，静かに",
    category: "副詞",
  },
  {
    eng: "fortunately",
    jpn: "運よく，幸いにも",
    category: "副詞",
  },
  {
    eng: "countryside",
    jpn: "田舎，地方",
    category: "名詞",
  },
  {
    eng: "vanish",
    jpn: "消える",
    category: "動詞",
  },
  {
    eng: "be akin to",
    jpn: "に似ている，と同種である",
    category: "熟語",
  },
  {
    eng: "atom",
    jpn: "原子，微小分子",
    category: "名詞",
  },
  {
    eng: "rage",
    jpn: "激怒，憤慨",
    category: "名詞",
  },
  {
    eng: "sincere",
    jpn: "誠実な",
    category: "形容詞",
  },
  {
    eng: "elder",
    jpn: "年上の，年長の",
    category: "形容詞",
  },
  {
    eng: "convention",
    jpn: "大会，会議",
    category: "名詞",
  },
  {
    eng: "urgent",
    jpn: "緊急の，急を要する",
    category: "形容詞",
  },
  {
    eng: "rough up",
    jpn: "手荒く扱う，かき乱す",
    category: "熟語",
  },
  {
    eng: "glorify",
    jpn: "栄光をたたえる，賛美する",
    category: "動詞",
  },
  {
    eng: "stair",
    jpn: "階段",
    category: "名詞",
  },
  {
    eng: "atlas",
    jpn: "地図帳",
    category: "名詞",
  },
  {
    eng: "invention",
    jpn: "発明，創造",
    category: "名詞",
  },
  {
    eng: "be incongruous with",
    jpn: "と矛盾する，と不一致である",
    category: "熟語",
  },
  {
    eng: "delighted",
    jpn: "うれしい，喜んだ",
    category: "形容詞",
  },
  {
    eng: "go astray",
    jpn: "行方不明になる，堕落する",
    category: "熟語",
  },
  {
    eng: "wrap",
    jpn: "を包む，巻きつける",
    category: "動詞",
  },
  {
    eng: "shallow",
    jpn: "浅い",
    category: "形容詞",
  },
  {
    eng: "bush",
    jpn: "茂み，低木",
    category: "名詞",
  },
  {
    eng: "stiff",
    jpn: "硬い",
    category: "形容詞",
  },
  {
    eng: "discern",
    jpn: "はっきり分かる，認める",
    category: "動詞",
  },
  {
    eng: "seclusion",
    jpn: "隔離，分離",
    category: "名詞",
  },
  {
    eng: "discharge",
    jpn: "排出，放電/荷を降ろす",
    category: "動詞",
  },
  {
    eng: "progression",
    jpn: "前進，進歩",
    category: "名詞",
  },
  {
    eng: "wheat",
    jpn: "小麦",
    category: "名詞",
  },
  {
    eng: "weary",
    jpn: "疲れた，疲弊した",
    category: "形容詞",
  },
  {
    eng: "purse",
    jpn: "財布，ハンドバッグ",
    category: "名詞",
  },
  {
    eng: "blame",
    jpn: "を非難する，批判する",
    category: "動詞",
  },
  {
    eng: "employment",
    jpn: "雇用，採用",
    category: "名詞",
  },
  {
    eng: "consequently",
    jpn: "その結果として，それゆえに",
    category: "副詞",
  },
  {
    eng: "fare",
    jpn: "運賃",
    category: "名詞",
  },
  {
    eng: "venue",
    jpn: "会場，場所",
    category: "名詞",
  },
  {
    eng: "archaeological",
    jpn: "考古学の，古典的な",
    category: "形容詞",
  },
  {
    eng: "stumbling block",
    jpn: "障害，障害物",
    category: "名詞",
  },
  {
    eng: "chill",
    jpn: "冷たさ，寒気",
    category: "名詞",
  },
  {
    eng: "distribute",
    jpn: "を配布する，分配する",
    category: "動詞",
  },
  {
    eng: "breeze",
    jpn: "そよ風",
    category: "名詞",
  },
  {
    eng: "parcel",
    jpn: "小包，包み",
    category: "名詞",
  },
  {
    eng: "sew up",
    jpn: "縫合する，縫い合わせる",
    category: "熟語",
  },
  {
    eng: "prop up",
    jpn: "添える，支える",
    category: "熟語",
  },
  {
    eng: "fall back on",
    jpn: "に頼る，信じる",
    category: "熟語",
  },
  {
    eng: "weed",
    jpn: "雑草，草取り",
    category: "名詞",
  },
  {
    eng: "bless",
    jpn: "を祝福する，に授ける",
    category: "動詞",
  },
  {
    eng: "specialize in",
    jpn: "に特化する，専門とする",
    category: "熟語",
  },
  {
    eng: "headache",
    jpn: "頭痛",
    category: "名詞",
  },
  {
    eng: "feather",
    jpn: "羽根，羽毛",
    category: "名詞",
  },
  {
    eng: "electricity",
    jpn: "電力，電気",
    category: "名詞",
  },
  {
    eng: "ladder",
    jpn: "はしご，踏み台",
    category: "名詞",
  },
  {
    eng: "deflate",
    jpn: "空気を抜く，しぼませる",
    category: "動詞",
  },
  {
    eng: "dawn",
    jpn: "夜明け，暁",
    category: "名詞",
  },
  {
    eng: "filament",
    jpn: "細糸，線条",
    category: "名詞",
  },
  {
    eng: "be prone to",
    jpn: "する傾向がある，しがちである",
    category: "熟語",
  },
  {
    eng: "injure",
    jpn: "を傷つける",
    category: "動詞",
  },
  {
    eng: "end up with",
    jpn: "で終わる，の羽目になる",
    category: "熟語",
  },
  {
    eng: "weep",
    jpn: "泣く，涙を流す",
    category: "動詞",
  },
  {
    eng: "peasant",
    jpn: "農民，農夫",
    category: "名詞",
  },
  {
    eng: "baggage",
    jpn: "荷物，手荷物",
    category: "名詞",
  },
  {
    eng: "deliberate",
    jpn: "故意の，意図的な",
    category: "形容詞",
  },
  {
    eng: "break up",
    jpn: "別れる",
    category: "熟語",
  },
  {
    eng: "era",
    jpn: "時代，世代",
    category: "名詞",
  },
  {
    eng: "pessimism",
    jpn: "悲観的，悲観主義",
    category: "名詞",
  },
  {
    eng: "give off",
    jpn: "を放つ，放出する",
    category: "熟語",
  },
  {
    eng: "contend with",
    jpn: "と戦う，張り合う",
    category: "熟語",
  },
  {
    eng: "bore",
    jpn: "退屈させる，うんざりさせる",
    category: "動詞",
  },
  {
    eng: "instance",
    jpn: "衝動，例",
    category: "名詞",
  },
  {
    eng: "villain",
    jpn: "悪党，悪者",
    category: "名詞",
  },
  {
    eng: "miserly",
    jpn: "しみったれた，欲深い",
    category: "形容詞",
  },
  {
    eng: "disappointment",
    jpn: "失望，期待外れ",
    category: "名詞",
  },
  {
    eng: "peel away",
    jpn: "むく，剥がす",
    category: "熟語",
  },
  {
    eng: "under fire",
    jpn: "攻撃を受けて，批判を受けて",
    category: "熟語",
  },
  {
    eng: "complicated",
    jpn: "複雑な，繁雑な",
    category: "形容詞",
  },
  {
    eng: "no longer",
    jpn: "もはや～でない，既に～ない",
    category: "熟語",
  },
  {
    eng: "wrist",
    jpn: "手首，そで口",
    category: "名詞",
  },
  {
    eng: "pay regard to",
    jpn: "を尊重する，尊敬する",
    category: "熟語",
  },
  {
    eng: "apology",
    jpn: "謝罪，お詫び",
    category: "名詞",
  },
  {
    eng: "refrigerator",
    jpn: "冷蔵庫，冷却装置",
    category: "名詞",
  },
  {
    eng: "keep at",
    jpn: "を根気よく続ける，継続する",
    category: "熟語",
  },
  {
    eng: "suck",
    jpn: "を吸う，すする",
    category: "動詞",
  },
  {
    eng: "breed",
    jpn: "を飼育する，繁殖する",
    category: "動詞",
  },
  {
    eng: "cut off",
    jpn: "を断つ，切る",
    category: "熟語",
  },
  {
    eng: "anyhow",
    jpn: "どうしても，なんとしても",
    category: "副詞",
  },
  {
    eng: "monastery",
    jpn: "修道院",
    category: "名詞",
  },
  {
    eng: "bound",
    jpn: "跳ねる，跳ね返る",
    category: "動詞",
  },
  {
    eng: "opt for",
    jpn: "選ぶ，選択する",
    category: "熟語",
  },
  {
    eng: "turn over",
    jpn: "をひっくり返す",
    category: "熟語",
  },
  {
    eng: "tendency",
    jpn: "傾向",
    category: "名詞",
  },
  {
    eng: "get by",
    jpn: "どうにか切り抜ける",
    category: "熟語",
  },
  {
    eng: "departure",
    jpn: "出発",
    category: "名詞",
  },
  {
    eng: "devote",
    jpn: "に捧げる，ゆだねる",
    category: "動詞",
  },
  {
    eng: "tuition fee",
    jpn: "授業料，学費",
    category: "名詞",
  },
  {
    eng: "beard",
    jpn: "ひげ，あごひげ",
    category: "名詞",
  },
  {
    eng: "weed out",
    jpn: "取り除く，引き抜く",
    category: "熟語",
  },
  {
    eng: "intimacy",
    jpn: "親密さ，親交関係",
    category: "名詞",
  },
  {
    eng: "mockingly",
    jpn: "あざけるように，からかって",
    category: "副詞",
  },
  {
    eng: "fortunate",
    jpn: "幸運な，運の良い",
    category: "形容詞",
  },
  {
    eng: "offensive",
    jpn: "攻撃的な，無礼な",
    category: "形容詞",
  },
  {
    eng: "inopportune",
    jpn: "間の悪い，都合の悪い",
    category: "形容詞",
  },
  {
    eng: "in response to",
    jpn: "に応じて，に反応して",
    category: "熟語",
  },
  {
    eng: "scoop up",
    jpn: "すくい取る，くみ上げる",
    category: "熟語",
  },
  {
    eng: "stand down",
    jpn: "身を引く，後退する",
    category: "熟語",
  },
  {
    eng: "rub in",
    jpn: "刷り込む，繰り返し言う",
    category: "熟語",
  },
  {
    eng: "steep",
    jpn: "急勾配の，傾斜の急な",
    category: "形容詞",
  },
  {
    eng: "screw",
    jpn: "ねじ",
    category: "名詞",
  },
  {
    eng: "see out",
    jpn: "見送る，見届ける",
    category: "熟語",
  },
  {
    eng: "moustache",
    jpn: "口ひげ",
    category: "名詞",
  },
  {
    eng: "dull",
    jpn: "面白みのない，鈍い",
    category: "形容詞",
  },
  {
    eng: "expense",
    jpn: "費用，出費，犠牲",
    category: "名詞",
  },
  {
    eng: "loyal",
    jpn: "忠実な，信念の厳格な",
    category: "形容詞",
  },
  {
    eng: "fall apart",
    jpn: "崩壊する，ばらばらに壊れる",
    category: "熟語",
  },
  {
    eng: "flour",
    jpn: "小麦粉",
    category: "名詞",
  },
  {
    eng: "vase",
    jpn: "花瓶，つぼ",
    category: "名詞",
  },
  {
    eng: "grain",
    jpn: "穀物，穀類",
    category: "名詞",
  },
  {
    eng: "crush",
    jpn: "を押しつぶす",
    category: "動詞",
  },
  {
    eng: "pill",
    jpn: "丸薬，錠剤",
    category: "名詞",
  },
  {
    eng: "fund",
    jpn: "基金，資金",
    category: "名詞",
  },
  {
    eng: "deadly",
    jpn: "致命的な，命にかかわる",
    category: "形容詞",
  },
  {
    eng: "abuse",
    jpn: "乱用，悪用",
    category: "名詞",
  },
  {
    eng: "destination",
    jpn: "目的地，行き先",
    category: "名詞",
  },
  {
    eng: "residence",
    jpn: "住宅，居住地",
    category: "名詞",
  },
  {
    eng: "plunge into",
    jpn: "飛び込む，突進する",
    category: "熟語",
  },
  {
    eng: "embarrassment",
    jpn: "困惑，当惑",
    category: "名詞",
  },
  {
    eng: "all ears",
    jpn: "耳を傾ける，熱心に聴く",
    category: "熟語",
  },
  {
    eng: "infant",
    jpn: "乳児，赤ちゃん",
    category: "名詞",
  },
  {
    eng: "inherit",
    jpn: "を受け継ぐ，相続する",
    category: "動詞",
  },
  {
    eng: "launch",
    jpn: "発売する，船をおろす",
    category: "動詞",
  },
  {
    eng: "tidy",
    jpn: "きちんとした",
    category: "形容詞",
  },
  {
    eng: "uncertain",
    jpn: "不確実な，確信を持てない",
    category: "形容詞",
  },
  {
    eng: "scarcely",
    jpn: "ほとんどない",
    category: "副詞",
  },
  {
    eng: "token",
    jpn: "しるし，象徴",
    category: "名詞",
  },
  {
    eng: "sticky",
    jpn: "べたつく，ねばねばした",
    category: "形容詞",
  },
  {
    eng: "apologize",
    jpn: "謝る，謝罪する",
    category: "動詞",
  },
  {
    eng: "halfway",
    jpn: "途中の，中間の",
    category: "形容詞",
  },
  {
    eng: "pass over",
    jpn: "を無視する，通り越す",
    category: "熟語",
  },
  {
    eng: "yawn",
    jpn: "欠伸をする，あくびをする",
    category: "動詞",
  },
  {
    eng: "minister",
    jpn: "大臣，牧師",
    category: "名詞",
  },
  {
    eng: "assert",
    jpn: "主張する，主意を表す",
    category: "動詞",
  },
  {
    eng: "consciousness",
    jpn: "意識，知覚",
    category: "名詞",
  },
  {
    eng: "surrounding",
    jpn: "周囲，付近",
    category: "名詞",
  },
  {
    eng: "crawl",
    jpn: "這う，這って進む",
    category: "動詞",
  },
  {
    eng: "wilderness",
    jpn: "荒野，未開の地",
    category: "名詞",
  },
  {
    eng: "detective",
    jpn: "探偵，刑事，捜査官",
    category: "名詞",
  },
  {
    eng: "seal",
    jpn: "密閉する，封鎖する",
    category: "動詞",
  },
  {
    eng: "measurement",
    jpn: "測定，計測",
    category: "名詞",
  },
  {
    eng: "depart",
    jpn: "出発する，立ち去る",
    category: "動詞",
  },
  {
    eng: "determination",
    jpn: "決定，決断",
    category: "名詞",
  },
  {
    eng: "take offense at",
    jpn: "に怒る，腹を立てる",
    category: "熟語",
  },
  {
    eng: "preach",
    jpn: "説教する，説く",
    category: "動詞",
  },
  {
    eng: "scenery",
    jpn: "風景",
    category: "名詞",
  },
  {
    eng: "efficiency",
    jpn: "効率，能率",
    category: "名詞",
  },
  {
    eng: "to no avail",
    jpn: "無駄に，役に立たずに",
    category: "熟語",
  },
  {
    eng: "in the concrete",
    jpn: "具体的に，具体化すると",
    category: "熟語",
  },
  {
    eng: "competitor",
    jpn: "競合他社，競争相手",
    category: "名詞",
  },
  {
    eng: "drag on",
    jpn: "長引く，続きすぎる",
    category: "熟語",
  },
  {
    eng: "mercy",
    jpn: "慈悲，あわれみ",
    category: "名詞",
  },
  {
    eng: "differ",
    jpn: "異なる，違う",
    category: "動詞",
  },
  {
    eng: "infringe on",
    jpn: "侵害する，侵犯する",
    category: "熟語",
  },
  {
    eng: "formerly",
    jpn: "以前は，かつて",
    category: "副詞",
  },
  {
    eng: "favorable",
    jpn: "好ましい，有利な",
    category: "形容詞",
  },
  {
    eng: "sew",
    jpn: "縫う，繕う",
    category: "動詞",
  },
  {
    eng: "pertain to",
    jpn: "に関係する，にふさわしい",
    category: "熟語",
  },
  {
    eng: "sting",
    jpn: "刺す，突く",
    category: "動詞",
  },
  {
    eng: "lie on",
    jpn: "責任がある，のしかかる，横になる",
    category: "熟語",
  },
  {
    eng: "adjustment",
    jpn: "調整，調節",
    category: "名詞",
  },
  {
    eng: "confession",
    jpn: "告白，自白",
    category: "名詞",
  },
  {
    eng: "ministry",
    jpn: "省庁，官庁",
    category: "名詞",
  },
  {
    eng: "outcome",
    jpn: "結果",
    category: "名詞",
  },
  {
    eng: "boil down to",
    jpn: "煮詰める，結局～になる",
    category: "熟語",
  },
  {
    eng: "scent",
    jpn: "香り，におい",
    category: "名詞",
  },
  {
    eng: "wicked",
    jpn: "邪悪な，悪い",
    category: "形容詞",
  },
  {
    eng: "ups and downs",
    jpn: "浮き沈み，上昇と下降",
    category: "名詞",
  },
  {
    eng: "triumph",
    jpn: "勝利",
    category: "名詞",
  },
  {
    eng: "equate A with B",
    jpn: "AとBを等しくする，AをBと同等にする",
    category: "熟語",
  },
  {
    eng: "sculpture",
    jpn: "彫刻，彫像",
    category: "名詞",
  },
  {
    eng: "await",
    jpn: "を待つ",
    category: "動詞",
  },
  {
    eng: "agricultural",
    jpn: "農業の，農作物の",
    category: "形容詞",
  },
  {
    eng: "conscience",
    jpn: "良心，道徳心",
    category: "名詞",
  },
  {
    eng: "heal",
    jpn: "癒す，治す",
    category: "動詞",
  },
  {
    eng: "profitable",
    jpn: "利益のある，収益性の高い",
    category: "形容詞",
  },
  {
    eng: "haste",
    jpn: "急ぐ/急ぎ",
    category: "名詞",
  },
  {
    eng: "weaken",
    jpn: "弱める，力を失う",
    category: "動詞",
  },
  {
    eng: "complain of",
    jpn: "の不満を漏らす，について苦情を言う",
    category: "熟語",
  },
  {
    eng: "resemble",
    jpn: "に似ている",
    category: "動詞",
  },
  {
    eng: "butcher",
    jpn: "肉屋",
    category: "名詞",
  },
  {
    eng: "engagement",
    jpn: "約束，取り決め",
    category: "名詞",
  },
  {
    eng: "the lion's share",
    jpn: "最大の分け前，大きすぎる分け前",
    category: "名詞",
  },
  {
    eng: "humble",
    jpn: "謙虚な",
    category: "形容詞",
  },
  {
    eng: "stir",
    jpn: "をかき混ぜる, 混ぜる",
    category: "動詞",
  },
  {
    eng: "stock",
    jpn: "株，在庫/を在庫に持つ",
    category: "名詞",
  },
  {
    eng: "blend in",
    jpn: "溶け合う，調和する",
    category: "熟語",
  },
  {
    eng: "ignorance",
    jpn: "無知，無学",
    category: "名詞",
  },
  {
    eng: "flare up",
    jpn: "急に燃え上がる，勃発する",
    category: "熟語",
  },
  {
    eng: "commerce",
    jpn: "商業，商売",
    category: "名詞",
  },
  {
    eng: "clap",
    jpn: "手をたたく",
    category: "動詞",
  },
  {
    eng: "dusty",
    jpn: "ほこりっぽい",
    category: "形容詞",
  },
  {
    eng: "unkind",
    jpn: "不親切な，薄情な",
    category: "形容詞",
  },
  {
    eng: "pavement",
    jpn: "舗装路",
    category: "名詞",
  },
  {
    eng: "rule of thumb",
    jpn: "親指で計測すること，大雑把な方法",
    category: "名詞",
  },
  {
    eng: "fall prey to",
    jpn: "の餌食になる，犠牲になる",
    category: "熟語",
  },
  {
    eng: "restrain",
    jpn: "抑える",
    category: "動詞",
  },
  {
    eng: "imperial",
    jpn: "帝国の",
    category: "形容詞",
  },
  {
    eng: "pass off",
    jpn: "次第に消える，徐々に消える",
    category: "熟語",
  },
  {
    eng: "advertisement",
    jpn: "広告，宣伝",
    category: "名詞",
  },
  {
    eng: "fall in with",
    jpn: "と知り合いになる，交際する",
    category: "熟語",
  },
  {
    eng: "betray",
    jpn: "を裏切る，をだます",
    category: "動詞",
  },
  {
    eng: "coward",
    jpn: "腰抜け，臆病者",
    category: "名詞",
  },
  {
    eng: "obedient",
    jpn: "従順な，素直な",
    category: "形容詞",
  },
  {
    eng: "kidnap",
    jpn: "を誘拐する",
    category: "動詞",
  },
  {
    eng: "ashtray",
    jpn: "灰皿",
    category: "名詞",
  },
  {
    eng: "pass for",
    jpn: "として通る，通過する",
    category: "熟語",
  },
  {
    eng: "porter",
    jpn: "運搬人",
    category: "名詞",
  },
  {
    eng: "faithful",
    jpn: "忠実な，誠実な",
    category: "形容詞",
  },
  {
    eng: "hollow",
    jpn: "くぼみ/空洞のある",
    category: "名詞",
  },
  {
    eng: "after all",
    jpn: "結局，最終的に",
    category: "熟語",
  },
  {
    eng: "hidden",
    jpn: "隠された，隠秘の",
    category: "形容詞",
  },
  {
    eng: "limb",
    jpn: "手足，四肢",
    category: "名詞",
  },
  {
    eng: "admiration",
    jpn: "感心，賞賛",
    category: "名詞",
  },
  {
    eng: "prosperity",
    jpn: "繁栄，成功",
    category: "名詞",
  },
  {
    eng: "enthusiastic",
    jpn: "熱狂的な，熱烈な",
    category: "形容詞",
  },
  {
    eng: "surrender",
    jpn: "降伏する，投降する",
    category: "動詞",
  },
  {
    eng: "miserable",
    jpn: "悲惨な，みじめな",
    category: "形容詞",
  },
  {
    eng: "decay",
    jpn: "腐る，朽ちる",
    category: "動詞",
  },
  {
    eng: "enclose",
    jpn: "を囲む，同封する",
    category: "動詞",
  },
  {
    eng: "ambitious",
    jpn: "野心的な，大志を抱く",
    category: "形容詞",
  },
  {
    eng: "bear the brunt of",
    jpn: "の矢面に立つ，まともに受ける",
    category: "熟語",
  },
  {
    eng: "guilt",
    jpn: "罪悪感，有罪",
    category: "名詞",
  },
  {
    eng: "occasional",
    jpn: "時折の",
    category: "形容詞",
  },
  {
    eng: "take a beating",
    jpn: "負ける，敗北する",
    category: "熟語",
  },
  {
    eng: "puppy",
    jpn: "子犬，幼犬",
    category: "名詞",
  },
  {
    eng: "greedy",
    jpn: "貪欲な，欲張りの",
    category: "形容詞",
  },
  {
    eng: "admire A for B",
    jpn: "BについてAを賞賛する，AのBを素晴らしいと思う",
    category: "熟語",
  },
  {
    eng: "bestow A on B",
    jpn: "BにAを授ける，BにAを費やす",
    category: "熟語",
  },
  {
    eng: "envy",
    jpn: "妬み，羨望",
    category: "名詞",
  },
  {
    eng: "partial",
    jpn: "部分的な，一部の",
    category: "形容詞",
  },
  {
    eng: "awfully",
    jpn: "ひどく，恐ろしく",
    category: "副詞",
  },
  {
    eng: "by the same token",
    jpn: "同様に，さらに",
    category: "熟語",
  },
  {
    eng: "razor",
    jpn: "かみそり",
    category: "名詞",
  },
  {
    eng: "nap",
    jpn: "昼寝",
    category: "名詞",
  },
  {
    eng: "rejoice",
    jpn: "をうれしがる，喜ぶ",
    category: "動詞",
  },
  {
    eng: "heroic",
    jpn: "英雄的な，勇ましい",
    category: "形容詞",
  },
  {
    eng: "descend",
    jpn: "下降する",
    category: "動詞",
  },
  {
    eng: "multiply",
    jpn: "掛け算する，乗算する",
    category: "動詞",
  },
  {
    eng: "make haste",
    jpn: "急ぐ，手早くする",
    category: "熟語",
  },
  {
    eng: "drum up",
    jpn: "呼び集める，募集する",
    category: "熟語",
  },
  {
    eng: "formation",
    jpn: "形成，構成",
    category: "名詞",
  },
  {
    eng: "namely",
    jpn: "すなわち，つまり",
    category: "副詞",
  },
  {
    eng: "mighty",
    jpn: "強力な，精力のある",
    category: "形容詞",
  },
  {
    eng: "pop up",
    jpn: "飛び出す，出現する",
    category: "熟語",
  },
  {
    eng: "handful",
    jpn: "一握りの",
    category: "形容詞",
  },
  {
    eng: "pronounce",
    jpn: "を発音する",
    category: "動詞",
  },
  {
    eng: "pay down",
    jpn: "頭金として払う，即金で払う",
    category: "熟語",
  },
  {
    eng: "saucer",
    jpn: "受け皿",
    category: "名詞",
  },
  {
    eng: "outer",
    jpn: "外に，外部の",
    category: "形容詞",
  },
  {
    eng: "despair",
    jpn: "絶望，失望",
    category: "名詞",
  },
  {
    eng: "antique",
    jpn: "骨董の，古風な",
    category: "形容詞",
  },
  {
    eng: "glory",
    jpn: "栄光，名誉",
    category: "名詞",
  },
  {
    eng: "immense",
    jpn: "巨大な，莫大な",
    category: "形容詞",
  },
  {
    eng: "faint",
    jpn: "かすかな，ぼんやりした",
    category: "形容詞",
  },
  {
    eng: "insult",
    jpn: "を侮辱する，を罵る",
    category: "動詞",
  },
  {
    eng: "forecast",
    jpn: "予測する",
    category: "動詞",
  },
  {
    eng: "chew",
    jpn: "を噛む",
    category: "動詞",
  },
  {
    eng: "set forth",
    jpn: "説明する，を明らかにする",
    category: "熟語",
  },
  {
    eng: "scholarship",
    jpn: "奨学金",
    category: "名詞",
  },
  {
    eng: "fatal",
    jpn: "致命的な，運命の",
    category: "形容詞",
  },
  {
    eng: "repay",
    jpn: "返済する，報いる",
    category: "動詞",
  },
  {
    eng: "deceive",
    jpn: "を欺く，をだます",
    category: "動詞",
  },
  {
    eng: "out of the woods",
    jpn: "森の外へ，困難を脱して",
    category: "熟語",
  },
  {
    eng: "accuse",
    jpn: "告発する，告発",
    category: "動詞",
  },
  {
    eng: "in other words",
    jpn: "言い換えれば，つまり",
    category: "熟語",
  },
  {
    eng: "frankly",
    jpn: "率直に，直接的に",
    category: "副詞",
  },
  {
    eng: "land A with B",
    jpn: "AにBを引き受けさせる，AにBをやらせる",
    category: "熟語",
  },
  {
    eng: "ache",
    jpn: "痛み",
    category: "名詞",
  },
  {
    eng: "activate",
    jpn: "作動させる",
    category: "動詞",
  },
  {
    eng: "composer",
    jpn: "作曲，楽曲制作",
    category: "名詞",
  },
  {
    eng: "postpone",
    jpn: "を延期する，を先送りする",
    category: "動詞",
  },
  {
    eng: "issue A to B",
    jpn: "AをBに支給する，発行する",
    category: "熟語",
  },
  {
    eng: "from hand to mouth",
    jpn: "その日暮らしで，将来の備えをしないで",
    category: "熟語",
  },
  {
    eng: "monument",
    jpn: "記念碑",
    category: "名詞",
  },
  {
    eng: "cruelty",
    jpn: "残酷さ，残虐性",
    category: "名詞",
  },
  {
    eng: "go nuts",
    jpn: "気がふれる，怒り狂う",
    category: "熟語",
  },
  {
    eng: "canal",
    jpn: "運河",
    category: "名詞",
  },
  {
    eng: "amaze",
    jpn: "をびっくりさせる，驚かせる",
    category: "動詞",
  },
  {
    eng: "prolong",
    jpn: "延長する",
    category: "動詞",
  },
  {
    eng: "bud",
    jpn: "つぼみ",
    category: "名詞",
  },
  {
    eng: "hatred",
    jpn: "憎しみ，憎悪",
    category: "名詞",
  },
  {
    eng: "splendid",
    jpn: "素晴らしい，華やかな",
    category: "形容詞",
  },
  {
    eng: "basin",
    jpn: "盆地",
    category: "名詞",
  },
  {
    eng: "bleed",
    jpn: "出血する",
    category: "動詞",
  },
  {
    eng: "ripe",
    jpn: "熟した，熟れた",
    category: "形容詞",
  },
  {
    eng: "thorough",
    jpn: "徹底した",
    category: "形容詞",
  },
  {
    eng: "digest",
    jpn: "要約/消化する",
    category: "名詞",
  },
  {
    eng: "rattle",
    jpn: "ガタガタ鳴る",
    category: "動詞",
  },
  {
    eng: "athletic",
    jpn: "競技の，運動家の",
    category: "形容詞",
  },
  {
    eng: "sidewalk",
    jpn: "歩道，歩行者道",
    category: "名詞",
  },
  {
    eng: "fasten",
    jpn: "を固定する，締める",
    category: "動詞",
  },
  {
    eng: "dish out",
    jpn: "盛り付ける，配膳する",
    category: "熟語",
  },
  {
    eng: "interpreter",
    jpn: "解説者，通訳者",
    category: "名詞",
  },
  {
    eng: "scold",
    jpn: "を叱る，に小言を言う",
    category: "動詞",
  },
  {
    eng: "ruling",
    jpn: "支配的な，主要な，優勢な",
    category: "形容詞",
  },
  {
    eng: "thoroughly",
    jpn: "徹底的に，完全に",
    category: "副詞",
  },
  {
    eng: "paragraph",
    jpn: "段落，区切り",
    category: "名詞",
  },
  {
    eng: "cast off",
    jpn: "投げ捨てる，縄を解く",
    category: "熟語",
  },
  {
    eng: "vain",
    jpn: "うぬぼれの強い，自惚れた",
    category: "形容詞",
  },
  {
    eng: "marvelous",
    jpn: "素晴らしい",
    category: "形容詞",
  },
  {
    eng: "conquer",
    jpn: "征服する",
    category: "動詞",
  },
  {
    eng: "obey",
    jpn: "従う",
    category: "動詞",
  },
  {
    eng: "ally",
    jpn: "と同盟する，手を結ぶ",
    category: "動詞",
  },
  {
    eng: "arc",
    jpn: "円弧，孤",
    category: "名詞",
  },
  {
    eng: "pass on",
    jpn: "通り過ぎる，を伝える",
    category: "熟語",
  },
  {
    eng: "lipstick",
    jpn: "口紅",
    category: "名詞",
  },
  {
    eng: "merrily",
    jpn: "陽気に，楽しそうに",
    category: "副詞",
  },
  {
    eng: "sorrow",
    jpn: "悲しみ",
    category: "名詞",
  },
  {
    eng: "in exchange",
    jpn: "と引き換えに，代わりに",
    category: "熟語",
  },
  {
    eng: "hillside",
    jpn: "山腹，斜面",
    category: "名詞",
  },
  {
    eng: "hasty",
    jpn: "急ぐ，急ぎ足で",
    category: "形容詞",
  },
  {
    eng: "margin",
    jpn: "余白，へり",
    category: "名詞",
  },
  {
    eng: "in place of",
    jpn: "の代わりに，変わって",
    category: "熟語",
  },
  {
    eng: "swift",
    jpn: "迅速な，速い",
    category: "形容詞",
  },
  {
    eng: "oral",
    jpn: "口頭の，口述の",
    category: "形容詞",
  },
  {
    eng: "to excess",
    jpn: "過剰に，過度に",
    category: "熟語",
  },
  {
    eng: "ambassador",
    jpn: "大使",
    category: "名詞",
  },
  {
    eng: "concentrated",
    jpn: "濃縮された，集中した",
    category: "形容詞",
  },
  {
    eng: "flu",
    jpn: "インフルエンザ",
    category: "名詞",
  },
  {
    eng: "in the suburbs of",
    jpn: "の郊外で，の近郊で",
    category: "熟語",
  },
  {
    eng: "symphony",
    jpn: "交響曲",
    category: "名詞",
  },
  {
    eng: "tread",
    jpn: "足を踏み入れる",
    category: "動詞",
  },
  {
    eng: "hasten",
    jpn: "急ぐ",
    category: "動詞",
  },
  {
    eng: "pastime",
    jpn: "娯楽",
    category: "名詞",
  },
  {
    eng: "magnificent",
    jpn: "壮大な",
    category: "形容詞",
  },
  {
    eng: "errand",
    jpn: "使い走り",
    category: "名詞",
  },
  {
    eng: "pass through",
    jpn: "を通る，通り抜ける",
    category: "熟語",
  },
  {
    eng: "fairness",
    jpn: "公平さ",
    category: "名詞",
  },
  {
    eng: "make allowance for",
    jpn: "を大目に見る，を考慮に入れる",
    category: "熟語",
  },
  {
    eng: "hedge",
    jpn: "垣根，障壁，障害物",
    category: "名詞",
  },
  {
    eng: "out in the cold",
    jpn: "冷たくされて，無視されて",
    category: "熟語",
  },
  {
    eng: "patiently",
    jpn: "辛抱強く，根気よく",
    category: "副詞",
  },
  {
    eng: "herd",
    jpn: "群れ，集団",
    category: "名詞",
  },
  {
    eng: "out of bounds",
    jpn: "立入禁止で，境界線を越えて",
    category: "熟語",
  },
  {
    eng: "approximately",
    jpn: "約，おおよそ",
    category: "副詞",
  },
  {
    eng: "liver",
    jpn: "肝臓，肝",
    category: "名詞",
  },
  {
    eng: "be reckless of",
    jpn: "を気に掛けない，気にしない",
    category: "熟語",
  },
  {
    eng: "dominant",
    jpn: "支配的な",
    category: "形容詞",
  },
  {
    eng: "shrink",
    jpn: "縮小する",
    category: "動詞",
  },
  {
    eng: "instantly",
    jpn: "すぐに，直ちに，即座に",
    category: "副詞",
  },
  {
    eng: "biology",
    jpn: "生物学",
    category: "名詞",
  },
  {
    eng: "feed on",
    jpn: "にエサをやる，(～を)えさとする",
    category: "熟語",
  },
  {
    eng: "scarce",
    jpn: "乏しい",
    category: "形容詞",
  },
  {
    eng: "at close quarters",
    jpn: "間近に，接近して",
    category: "熟語",
  },
  {
    eng: "vigor",
    jpn: "活力",
    category: "名詞",
  },
  {
    eng: "capitalism",
    jpn: "資本主義",
    category: "名詞",
  },
  {
    eng: "conquest",
    jpn: "征服，克服",
    category: "名詞",
  },
  {
    eng: "sparkle",
    jpn: "閃光",
    category: "名詞",
  },
  {
    eng: "arena",
    jpn: "舞台，闘技場",
    category: "名詞",
  },
  {
    eng: "pinch",
    jpn: "をつねる，つまむ",
    category: "動詞",
  },
  {
    eng: "embroil in",
    jpn: "に巻き込む，関与させる",
    category: "熟語",
  },
  {
    eng: "attain",
    jpn: "を達成する，獲得する",
    category: "動詞",
  },
  {
    eng: "speak ill of",
    jpn: "の悪口を言う，を悪く言う",
    category: "熟語",
  },
  {
    eng: "ban",
    jpn: "を禁止する，を禁制する",
    category: "動詞",
  },
  {
    eng: "assign",
    jpn: "割り当てる",
    category: "動詞",
  },
  {
    eng: "die down",
    jpn: "下火になる，(騒ぎが)静まる",
    category: "熟語",
  },
  {
    eng: "all told",
    jpn: "全体で，結局",
    category: "熟語",
  },
  {
    eng: "blow in",
    jpn: "風が吹き込む，突然現れる",
    category: "熟語",
  },
  {
    eng: "grind",
    jpn: "をひく，細かく砕く",
    category: "動詞",
  },
  {
    eng: "plow",
    jpn: "耕作用すき，すきに似たもの",
    category: "名詞",
  },
  {
    eng: "prohibit",
    jpn: "禁じる",
    category: "動詞",
  },
  {
    eng: "conceive",
    jpn: "を心に抱く，思う",
    category: "動詞",
  },
  {
    eng: "conjure up",
    jpn: "素早く出す，呪文で呼び出す",
    category: "熟語",
  },
  {
    eng: "disgusting",
    jpn: "いやな，むかつくような",
    category: "形容詞",
  },
  {
    eng: "medieval",
    jpn: "中世の",
    category: "形容詞",
  },
  {
    eng: "fish for",
    jpn: "聞き出す，誘い出す",
    category: "熟語",
  },
  {
    eng: "fascinating",
    jpn: "魅惑的な，うっとりさせる",
    category: "形容詞",
  },
  {
    eng: "dock",
    jpn: "船着場，波止場",
    category: "名詞",
  },
  {
    eng: "go under",
    jpn: "失敗する，破産する，失敗に終わる",
    category: "熟語",
  },
  {
    eng: "retreat",
    jpn: "へ退却する/後退",
    category: "動詞",
  },
  {
    eng: "productivity",
    jpn: "生産性，生産力",
    category: "名詞",
  },
  {
    eng: "feed off",
    jpn: "から取って食べる，情報を得る，採取して利用する",
    category: "熟語",
  },
  {
    eng: "shiny",
    jpn: "輝いた，光沢のある",
    category: "形容詞",
  },
  {
    eng: "organism",
    jpn: "生命体，生物",
    category: "名詞",
  },
  {
    eng: "sow",
    jpn: "の種をまく",
    category: "動詞",
  },
  {
    eng: "buy over",
    jpn: "買収する，味方に抱き込む",
    category: "熟語",
  },
  {
    eng: "courageous",
    jpn: "勇気のある，勇敢な",
    category: "形容詞",
  },
  {
    eng: "kneel",
    jpn: "に膝まづく，ひざをつく",
    category: "動詞",
  },
  {
    eng: "procession",
    jpn: "行列",
    category: "名詞",
  },
  {
    eng: "carry off",
    jpn: "運び去る，誘拐する",
    category: "熟語",
  },
  {
    eng: "majesty",
    jpn: "威厳",
    category: "名詞",
  },
  {
    eng: "suspicion",
    jpn: "疑い，疑惑",
    category: "名詞",
  },
  {
    eng: "desperately",
    jpn: "必死に",
    category: "副詞",
  },
  {
    eng: "startle",
    jpn: "驚愕させる",
    category: "動詞",
  },
  {
    eng: "heir",
    jpn: "相続人，跡取り",
    category: "名詞",
  },
  {
    eng: "illusion",
    jpn: "幻覚，思い込み",
    category: "名詞",
  },
  {
    eng: "progressive",
    jpn: "進歩的な，革新的な",
    category: "形容詞",
  },
  {
    eng: "utter",
    jpn: "完全な",
    category: "形容詞",
  },
  {
    eng: "mourn",
    jpn: "を悲しむ，嘆く",
    category: "動詞",
  },
  {
    eng: "round and round",
    jpn: "グルグルと，うろうろと",
    category: "熟語",
  },
  {
    eng: "solely",
    jpn: "単独で，専ら",
    category: "副詞",
  },
  {
    eng: "ill at ease",
    jpn: "落ち着かない，不安な",
    category: "形容詞",
  },
  {
    eng: "strive",
    jpn: "努力する，励む",
    category: "動詞",
  },
  {
    eng: "snatch",
    jpn: "をひったくる",
    category: "動詞",
  },
  {
    eng: "omit",
    jpn: "を省略する，省く",
    category: "動詞",
  },
  {
    eng: "sole",
    jpn: "単独の",
    category: "形容詞",
  },
  {
    eng: "despise",
    jpn: "を軽蔑する，さげすむ",
    category: "動詞",
  },
  {
    eng: "obedience",
    jpn: "従順，服従",
    category: "名詞",
  },
  {
    eng: "boredom",
    jpn: "退屈",
    category: "名詞",
  },
  {
    eng: "furnish",
    jpn: "家具を備える",
    category: "動詞",
  },
  {
    eng: "daring",
    jpn: "大胆な，図太い",
    category: "形容詞",
  },
  {
    eng: "appreciation",
    jpn: "感謝，称賛",
    category: "名詞",
  },
  {
    eng: "prosper",
    jpn: "繁栄する，発展する",
    category: "動詞",
  },
  {
    eng: "rosy",
    jpn: "バラ色の",
    category: "形容詞",
  },
  {
    eng: "noticeable",
    jpn: "目立つ，際立つ",
    category: "形容詞",
  },
  {
    eng: "fantastic",
    jpn: "素晴らしい",
    category: "形容詞",
  },
  {
    eng: "get wet to the skin",
    jpn: "ずぶ濡れになる，びしょ濡れになる",
    category: "熟語",
  },
  {
    eng: "vivid",
    jpn: "鮮やかな",
    category: "形容詞",
  },
  {
    eng: "least of all",
    jpn: "とりわけ，最も～ない",
    category: "副詞",
  },
  {
    eng: "brutal",
    jpn: "残忍な，残酷な",
    category: "形容詞",
  },
  {
    eng: "disguise",
    jpn: "変装させる， 見せかける",
    category: "動詞",
  },
  {
    eng: "consult",
    jpn: "相談する，話し合う",
    category: "動詞",
  },
  {
    eng: "frustration",
    jpn: "欲求不満，落胆",
    category: "名詞",
  },
  {
    eng: "cunning",
    jpn: "ずる賢い",
    category: "形容詞",
  },
  {
    eng: "make a fuss",
    jpn: "大騒ぎする，騒ぎ立てる",
    category: "熟語",
  },
  {
    eng: "let on",
    jpn: "漏らす，白状する",
    category: "熟語",
  },
  {
    eng: "prescription",
    jpn: "処方，処方箋",
    category: "名詞",
  },
  {
    eng: "particle",
    jpn: "分子",
    category: "名詞",
  },
  {
    eng: "hug",
    jpn: "抱擁/を抱きしめる",
    category: "名詞",
  },
  {
    eng: "absurd",
    jpn: "ばかげた，道理に合わない",
    category: "形容詞",
  },
  {
    eng: "run down",
    jpn: "流れ落ちる，荒廃する",
    category: "熟語",
  },
  {
    eng: "assemble",
    jpn: "組み立てる",
    category: "動詞",
  },
  {
    eng: "pick up the pieces",
    jpn: "欠片を拾う，事態を修復する",
    category: "熟語",
  },
  {
    eng: "refusal",
    jpn: "拒否，拒絶",
    category: "名詞",
  },
  {
    eng: "uncertainty",
    jpn: "不確実性，不明確さ",
    category: "名詞",
  },
  {
    eng: "conceal",
    jpn: "隠す",
    category: "動詞",
  },
  {
    eng: "expedition",
    jpn: "遠征",
    category: "名詞",
  },
  {
    eng: "unjust",
    jpn: "不当な，不公平な",
    category: "形容詞",
  },
  {
    eng: "tragic",
    jpn: "悲劇的な，悲劇的",
    category: "形容詞",
  },
  {
    eng: "edit",
    jpn: "を編集する",
    category: "動詞",
  },
  {
    eng: "declaration",
    jpn: "宣言，発表",
    category: "名詞",
  },
  {
    eng: "vow",
    jpn: "誓い",
    category: "名詞",
  },
  {
    eng: "tighten",
    jpn: "締める，絞る",
    category: "動詞",
  },
  {
    eng: "barge in",
    jpn: "入り込む，押しかける",
    category: "熟語",
  },
  {
    eng: "tolerate",
    jpn: "に耐える，寛大に取り扱う",
    category: "動詞",
  },
  {
    eng: "gloomy",
    jpn: "憂鬱な，暗い",
    category: "形容詞",
  },
  {
    eng: "out of place",
    jpn: "場違いで，不適切で",
    category: "熟語",
  },
  {
    eng: "suspend",
    jpn: "つるす",
    category: "動詞",
  },
  {
    eng: "imitation",
    jpn: "模倣",
    category: "名詞",
  },
  {
    eng: "acquisition",
    jpn: "取得",
    category: "名詞",
  },
  {
    eng: "warrior",
    jpn: "戦士",
    category: "名詞",
  },
  {
    eng: "verb",
    jpn: "動詞",
    category: "名詞",
  },
  {
    eng: "physically",
    jpn: "肉体的に，身体的に",
    category: "副詞",
  },
  {
    eng: "batch",
    jpn: "ひとまとめ",
    category: "名詞",
  },
  {
    eng: "honorable",
    jpn: "尊敬できる",
    category: "形容詞",
  },
  {
    eng: "anticipate",
    jpn: "を期待する，予想する",
    category: "動詞",
  },
  {
    eng: "seldom if ever",
    jpn: "めったに，しない",
    category: "熟語",
  },
  {
    eng: "volcano",
    jpn: "火山，噴火口",
    category: "名詞",
  },
  {
    eng: "sentiment",
    jpn: "感情，心情",
    category: "名詞",
  },
  {
    eng: "sleep over",
    jpn: "外泊する，を見落とす",
    category: "熟語",
  },
  {
    eng: "severely",
    jpn: "厳しく，ひどく",
    category: "副詞",
  },
  {
    eng: "flexible",
    jpn: "柔軟な，しなやかな",
    category: "形容詞",
  },
  {
    eng: "feast",
    jpn: "ごちそう，祝祭",
    category: "名詞",
  },
  {
    eng: "eagerly",
    jpn: "熱心に",
    category: "副詞",
  },
  {
    eng: "soar",
    jpn: "舞い上がる",
    category: "動詞",
  },
  {
    eng: "fertile",
    jpn: "肥沃な，多産の",
    category: "形容詞",
  },
  {
    eng: "rule out",
    jpn: "除外する",
    category: "熟語",
  },
  {
    eng: "overhead",
    jpn: "間接の",
    category: "形容詞",
  },
  {
    eng: "modify",
    jpn: "を変更する，を修正する",
    category: "動詞",
  },
  {
    eng: "bond",
    jpn: "拘束，束縛",
    category: "名詞",
  },
  {
    eng: "pile in",
    jpn: "どっと中に入る，一気に入る",
    category: "熟語",
  },
  {
    eng: "comprehension",
    jpn: "理解",
    category: "名詞",
  },
  {
    eng: "try out",
    jpn: "を試す，十分に試してみる",
    category: "熟語",
  },
  {
    eng: "irony",
    jpn: "皮肉",
    category: "名詞",
  },
  {
    eng: "surgeon",
    jpn: "外科医，手術医",
    category: "名詞",
  },
  {
    eng: "lick",
    jpn: "をなめる，をなめてかかる",
    category: "動詞",
  },
  {
    eng: "refuge",
    jpn: "避難",
    category: "名詞",
  },
  {
    eng: "bow out",
    jpn: "お辞儀して退出する，身を引く",
    category: "熟語",
  },
  {
    eng: "bulk",
    jpn: "大きさ，かさ",
    category: "名詞",
  },
  {
    eng: "peel",
    jpn: "皮，表皮",
    category: "名詞",
  },
  {
    eng: "cactus",
    jpn: "サボテン",
    category: "名詞",
  },
  {
    eng: "grieve",
    jpn: "深く悲しむ，嘆く",
    category: "動詞",
  },
  {
    eng: "snap out of",
    jpn: "から素早く脱出する，抜け出す",
    category: "熟語",
  },
  {
    eng: "forehead",
    jpn: "おでこ，ひたい",
    category: "名詞",
  },
  {
    eng: "productive",
    jpn: "生産的な",
    category: "形容詞",
  },
  {
    eng: "aisle",
    jpn: "通路",
    category: "名詞",
  },
  {
    eng: "sphere",
    jpn: "球，球体",
    category: "名詞",
  },
  {
    eng: "right off",
    jpn: "すぐに，直ちに",
    category: "副詞",
  },
  {
    eng: "insure",
    jpn: "を保証する",
    category: "動詞",
  },
  {
    eng: "dense",
    jpn: "密な，密集した",
    category: "形容詞",
  },
  {
    eng: "dip",
    jpn: "少し浸す",
    category: "動詞",
  },
  {
    eng: "distress",
    jpn: "苦痛，苦悩",
    category: "名詞",
  },
  {
    eng: "prominent",
    jpn: "目立つ，突き出た",
    category: "形容詞",
  },
  {
    eng: "statesman",
    jpn: "政治家",
    category: "名詞",
  },
  {
    eng: "bowl over",
    jpn: "を打ち倒す，仰天させる",
    category: "熟語",
  },
  {
    eng: "experimental",
    jpn: "実験的な，実験の",
    category: "形容詞",
  },
  {
    eng: "isolated",
    jpn: "孤立した，隔離された",
    category: "形容詞",
  },
  {
    eng: "cast away",
    jpn: "投げ捨てる，処分する",
    category: "熟語",
  },
  {
    eng: "likewise",
    jpn: "同様に",
    category: "副詞",
  },
  {
    eng: "bank on",
    jpn: "を当てにする，頼る",
    category: "熟語",
  },
  {
    eng: "sue",
    jpn: "訴える",
    category: "動詞",
  },
  {
    eng: "remedy",
    jpn: "治療",
    category: "名詞",
  },
  {
    eng: "electronics",
    jpn: "電気",
    category: "名詞",
  },
  {
    eng: "fluent",
    jpn: "流暢な",
    category: "形容詞",
  },
  {
    eng: "farewell",
    jpn: "別れ",
    category: "名詞",
  },
  {
    eng: "in token of",
    jpn: "の証拠に，のしるしとして",
    category: "熟語",
  },
  {
    eng: "fierce",
    jpn: "激しい，凶暴な",
    category: "形容詞",
  },
  {
    eng: "sprinkle",
    jpn: "を振りかける",
    category: "動詞",
  },
  {
    eng: "prevail",
    jpn: "打ち勝つ",
    category: "動詞",
  },
  {
    eng: "canine",
    jpn: "イヌの，イヌ科の",
    category: "形容詞",
  },
  {
    eng: "patron",
    jpn: "常連客，保護者",
    category: "名詞",
  },
  {
    eng: "fetch",
    jpn: "を取ってくる",
    category: "動詞",
  },
  {
    eng: "plead",
    jpn: "懇願する，お願いする",
    category: "動詞",
  },
  {
    eng: "consensus",
    jpn: "同意，同調",
    category: "名詞",
  },
  {
    eng: "suspicious",
    jpn: "疑わしい，怪しい",
    category: "形容詞",
  },
  {
    eng: "accurately",
    jpn: "正確に，綿密に",
    category: "副詞",
  },
  {
    eng: "be devoid of",
    jpn: "を持っていない，に欠いている",
    category: "熟語",
  },
  {
    eng: "resign",
    jpn: "辞任する",
    category: "動詞",
  },
  {
    eng: "stain",
    jpn: "よごれ",
    category: "名詞",
  },
  {
    eng: "buck for",
    jpn: "得ようと努める，求める",
    category: "熟語",
  },
  {
    eng: "oriental",
    jpn: "東洋の",
    category: "形容詞",
  },
  {
    eng: "be indebted to",
    jpn: "に負債がある，恩義がある",
    category: "熟語",
  },
  {
    eng: "dissolve",
    jpn: "を溶かす",
    category: "動詞",
  },
  {
    eng: "moderate",
    jpn: "適度な，適切な，ほどよい",
    category: "形容詞",
  },
  {
    eng: "microwave",
    jpn: "電子レンジ",
    category: "名詞",
  },
  {
    eng: "imperfect",
    jpn: "不完全な，未完成の",
    category: "形容詞",
  },
  {
    eng: "torch",
    jpn: "たいまつ",
    category: "名詞",
  },
  {
    eng: "run errands",
    jpn: "使い走りをする，お使いをする",
    category: "熟語",
  },
  {
    eng: "trim",
    jpn: "を整える，手入れする",
    category: "動詞",
  },
  {
    eng: "defect",
    jpn: "欠陥，欠点",
    category: "名詞",
  },
  {
    eng: "optimistic",
    jpn: "楽観的な",
    category: "形容詞",
  },
  {
    eng: "evaluation",
    jpn: "評価，査定",
    category: "名詞",
  },
  {
    eng: "attendant",
    jpn: "付き添い，付随",
    category: "名詞",
  },
  {
    eng: "rag",
    jpn: "ぼろきれ，布切れ",
    category: "名詞",
  },
  {
    eng: "rib",
    jpn: "肋骨，あばら骨",
    category: "名詞",
  },
  {
    eng: "condense",
    jpn: "を凝縮する，濃縮する",
    category: "動詞",
  },
  {
    eng: "in a nutshell",
    jpn: "一言で言えば，極めて簡単に言えば",
    category: "熟語",
  },
  {
    eng: "wit",
    jpn: "機転",
    category: "名詞",
  },
  {
    eng: "be bound up with",
    jpn: "と密接な関係のある，深く関係した",
    category: "熟語",
  },
  {
    eng: "unaware",
    jpn: "気づいていない",
    category: "形容詞",
  },
  {
    eng: "sacred",
    jpn: "神聖な，神の",
    category: "形容詞",
  },
  {
    eng: "faithfully",
    jpn: "忠実に，誠実に",
    category: "副詞",
  },
  {
    eng: "flourish",
    jpn: "繁栄する，栄える",
    category: "動詞",
  },
  {
    eng: "accomplishment",
    jpn: "完成，成果",
    category: "名詞",
  },
  {
    eng: "to say the least",
    jpn: "控えめに言っても，遠からず",
    category: "熟語",
  },
  {
    eng: "diligent",
    jpn: "勤勉な",
    category: "形容詞",
  },
  {
    eng: "clay",
    jpn: "粘土",
    category: "名詞",
  },
  {
    eng: "regulate",
    jpn: "を規制する，統制する",
    category: "動詞",
  },
  {
    eng: "misfortune",
    jpn: "不幸，災厄",
    category: "名詞",
  },
  {
    eng: "forbid",
    jpn: "を禁じる，禁止する",
    category: "動詞",
  },
  {
    eng: "inspiration",
    jpn: "ひらめき，思い付き",
    category: "名詞",
  },
  {
    eng: "gleam",
    jpn: "きらめき，薄明かり",
    category: "名詞",
  },
  {
    eng: "protective",
    jpn: "保護的な，保護する",
    category: "形容詞",
  },
  {
    eng: "onward",
    jpn: "前進の，前進的な",
    category: "形容詞",
  },
  {
    eng: "inquire after",
    jpn: "の安否を尋ねる，を見舞う",
    category: "熟語",
  },
  {
    eng: "immensely",
    jpn: "莫大に，広大に",
    category: "副詞",
  },
  {
    eng: "down the drain",
    jpn: "排水路に流されて，失われて",
    category: "熟語",
  },
  {
    eng: "promptly",
    jpn: "早速，即座に",
    category: "副詞",
  },
  {
    eng: "bump",
    jpn: "こぶ，衝突",
    category: "名詞",
  },
  {
    eng: "cover for",
    jpn: "を覆う，代理となる",
    category: "熟語",
  },
  {
    eng: "ward",
    jpn: "区画，病室",
    category: "名詞",
  },
  {
    eng: "freshman",
    jpn: "新入生",
    category: "名詞",
  },
  {
    eng: "refine",
    jpn: "を精製する",
    category: "動詞",
  },
  {
    eng: "dim",
    jpn: "薄暗い，ほの暗い",
    category: "形容詞",
  },
  {
    eng: "resume",
    jpn: "再開する，続ける",
    category: "動詞",
  },
  {
    eng: "eternal",
    jpn: "永遠の，永遠不変の",
    category: "形容詞",
  },
  {
    eng: "brush off",
    jpn: "をすげなく断る，無視する，拒否する",
    category: "熟語",
  },
  {
    eng: "be obsessed with",
    jpn: "に取り付かれる，で頭がいっぱい",
    category: "熟語",
  },
  {
    eng: "colonial",
    jpn: "植民地の",
    category: "形容詞",
  },
  {
    eng: "arithmetic",
    jpn: "算数",
    category: "名詞",
  },
  {
    eng: "esteem",
    jpn: "を尊重する，尊敬する",
    category: "動詞",
  },
  {
    eng: "currency",
    jpn: "通貨，流通",
    category: "名詞",
  },
  {
    eng: "ridiculous",
    jpn: "ばかげている，不合理な",
    category: "形容詞",
  },
  {
    eng: "calculation",
    jpn: "計算，算定",
    category: "名詞",
  },
  {
    eng: "terrific",
    jpn: "すごい，ものすごい",
    category: "形容詞",
  },
  {
    eng: "stitch",
    jpn: "縫い目",
    category: "名詞",
  },
  {
    eng: "pasture",
    jpn: "牧草，牧草地",
    category: "名詞",
  },
  {
    eng: "bargain for",
    jpn: "について交渉する，話し合う",
    category: "熟語",
  },
  {
    eng: "boil over",
    jpn: "沸騰してこぼれる，憤慨する",
    category: "熟語",
  },
  {
    eng: "thorn",
    jpn: "とげ，茨",
    category: "名詞",
  },
  {
    eng: "twilight",
    jpn: "黄昏時",
    category: "名詞",
  },
  {
    eng: "moan",
    jpn: "うめき声",
    category: "名詞",
  },
  {
    eng: "lame",
    jpn: "不十分な",
    category: "形容詞",
  },
  {
    eng: "legally",
    jpn: "合法的に，法律上",
    category: "副詞",
  },
  {
    eng: "have off",
    jpn: "取り外す，休暇を取る",
    category: "熟語",
  },
  {
    eng: "seemingly",
    jpn: "一見すると，表面上",
    category: "副詞",
  },
  {
    eng: "singular",
    jpn: "特異な，非凡な",
    category: "形容詞",
  },
  {
    eng: "condemn",
    jpn: "を責める，非難する",
    category: "動詞",
  },
  {
    eng: "catastrophe",
    jpn: "大惨事",
    category: "名詞",
  },
  {
    eng: "pick up the thread",
    jpn: "再び続ける，再開する",
    category: "熟語",
  },
  {
    eng: "colleague",
    jpn: "同僚，仲間",
    category: "名詞",
  },
  {
    eng: "passionate",
    jpn: "情熱的な，熱情的な",
    category: "形容詞",
  },
  {
    eng: "tide over",
    jpn: "乗り切る，切り抜ける",
    category: "熟語",
  },
  {
    eng: "diplomatic",
    jpn: "外交の，外交上の",
    category: "形容詞",
  },
  {
    eng: "widow",
    jpn: "未亡人，夫を亡くした女性",
    category: "名詞",
  },
  {
    eng: "swallow up",
    jpn: "飲み込む，使い尽くす",
    category: "熟語",
  },
  {
    eng: "deadline",
    jpn: "締め切り，期限",
    category: "名詞",
  },
  {
    eng: "pore over",
    jpn: "を凝視する，熟読する",
    category: "熟語",
  },
  {
    eng: "proclaim",
    jpn: "を宣言する，公表する",
    category: "動詞",
  },
  {
    eng: "enlarge",
    jpn: "を拡大する，を広げる",
    category: "動詞",
  },
  {
    eng: "iron out",
    jpn: "解決する，しわを伸ばす",
    category: "熟語",
  },
  {
    eng: "stern",
    jpn: "厳格な",
    category: "形容詞",
  },
  {
    eng: "ivory",
    jpn: "象牙，象牙質の",
    category: "名詞",
  },
  {
    eng: "outlet",
    jpn: "出口",
    category: "名詞",
  },
  {
    eng: "day in, day out",
    jpn: "明けても暮れても，毎日毎日",
    category: "熟語",
  },
  {
    eng: "steer",
    jpn: "を操縦する，かじを取る",
    category: "動詞",
  },
  {
    eng: "hay",
    jpn: "干し草",
    category: "名詞",
  },
  {
    eng: "erect",
    jpn: "直立の，まっすぐな",
    category: "形容詞",
  },
  {
    eng: "stumble",
    jpn: "につまずく",
    category: "動詞",
  },
  {
    eng: "bug",
    jpn: "虫，故障",
    category: "名詞",
  },
  {
    eng: "grim",
    jpn: "厳格な，険しい",
    category: "形容詞",
  },
  {
    eng: "cathedral",
    jpn: "大聖堂",
    category: "名詞",
  },
  {
    eng: "robbery",
    jpn: "強盗，強盗罪",
    category: "名詞",
  },
  {
    eng: "slap",
    jpn: "平手打ち",
    category: "名詞",
  },
  {
    eng: "awkward",
    jpn: "ぎこちない",
    category: "形容詞",
  },
  {
    eng: "lark",
    jpn: "戯れ",
    category: "名詞",
  },
  {
    eng: "separation",
    jpn: "分離，区分",
    category: "名詞",
  },
  {
    eng: "makeup",
    jpn: "化粧",
    category: "名詞",
  },
  {
    eng: "dye",
    jpn: "染料",
    category: "名詞",
  },
  {
    eng: "swell",
    jpn: "膨れる，大きくなる",
    category: "動詞",
  },
  {
    eng: "mingle with",
    jpn: "と混ざる，交じる",
    category: "熟語",
  },
  {
    eng: "organic",
    jpn: "無農薬の",
    category: "形容詞",
  },
  {
    eng: "ideally",
    jpn: "理想的には，申し分なく",
    category: "副詞",
  },
  {
    eng: "for the good of",
    jpn: "のために，の(利益の)ために",
    category: "熟語",
  },
  {
    eng: "dread",
    jpn: "ひどく怖がる，恐れる",
    category: "動詞",
  },
  {
    eng: "oblige",
    jpn: "義務づける，強制する",
    category: "動詞",
  },
  {
    eng: "perish",
    jpn: "滅びる，死ぬ",
    category: "動詞",
  },
  {
    eng: "barn",
    jpn: "物置，納屋",
    category: "名詞",
  },
  {
    eng: "economist",
    jpn: "経済学者",
    category: "名詞",
  },
  {
    eng: "delightful",
    jpn: "楽しい，うれしい",
    category: "形容詞",
  },
  {
    eng: "exaggerate",
    jpn: "を誇張する，大げさに言う",
    category: "動詞",
  },
  {
    eng: "in the abstract",
    jpn: "理論上は，理論的には",
    category: "熟語",
  },
  {
    eng: "give way",
    jpn: "道を譲る，くじける",
    category: "熟語",
  },
  {
    eng: "continuous",
    jpn: "継続的な，持続的な",
    category: "形容詞",
  },
  {
    eng: "proven",
    jpn: "証明された",
    category: "形容詞",
  },
  {
    eng: "unity",
    jpn: "団結，単一",
    category: "名詞",
  },
  {
    eng: "destiny",
    jpn: "運命，使命",
    category: "名詞",
  },
  {
    eng: "recess",
    jpn: "休憩，休み",
    category: "名詞",
  },
  {
    eng: "shelf life",
    jpn: "保存可能期間，賞味期限",
    category: "名詞",
  },
  {
    eng: "abundance",
    jpn: "豊富",
    category: "名詞",
  },
  {
    eng: "tear off",
    jpn: "引きちぎる，脱ぎ捨てる",
    category: "熟語",
  },
  {
    eng: "witch",
    jpn: "魔女，魔法使い",
    category: "名詞",
  },
  {
    eng: "capitalize on",
    jpn: "に資本を投下する，を利用する",
    category: "熟語",
  },
  {
    eng: "glorious",
    jpn: "栄光のある，名誉ある",
    category: "形容詞",
  },
  {
    eng: "damp",
    jpn: "湿った",
    category: "形容詞",
  },
  {
    eng: "dispose of",
    jpn: "廃棄する，処分する",
    category: "動詞",
  },
  {
    eng: "commotion",
    jpn: "騒動",
    category: "名詞",
  },
  {
    eng: "thermometer",
    jpn: "温度計，気温計",
    category: "名詞",
  },
  {
    eng: "groan",
    jpn: "うめき声，うなり声",
    category: "名詞",
  },
  {
    eng: "consume",
    jpn: "を消費する，消耗する",
    category: "動詞",
  },
  {
    eng: "violate",
    jpn: "違反する，破る",
    category: "動詞",
  },
  {
    eng: "frequency",
    jpn: "周波数，頻繁さ",
    category: "名詞",
  },
  {
    eng: "agony",
    jpn: "激しい苦痛，苦悶",
    category: "名詞",
  },
  {
    eng: "trifle with",
    jpn: "ぞんざいに扱う，適当に扱う",
    category: "熟語",
  },
  {
    eng: "tempt",
    jpn: "を誘惑する",
    category: "動詞",
  },
  {
    eng: "uncommon",
    jpn: "珍しい，滅多にない",
    category: "形容詞",
  },
  {
    eng: "famine",
    jpn: "食料不足",
    category: "名詞",
  },
  {
    eng: "punctual",
    jpn: "規則正しい，時間通りの",
    category: "形容詞",
  },
  {
    eng: "deal with",
    jpn: "に対処する，に対応する",
    category: "熟語",
  },
  {
    eng: "abound in",
    jpn: "であふれている，に富む",
    category: "熟語",
  },
  {
    eng: "summon",
    jpn: "召喚する",
    category: "動詞",
  },
  {
    eng: "twinkle",
    jpn: "きらきら光る",
    category: "動詞",
  },
  {
    eng: "wrestle with",
    jpn: "取っ組み合う，取り組む",
    category: "熟語",
  },
  {
    eng: "howl",
    jpn: "遠吠えする",
    category: "動詞",
  },
  {
    eng: "word for word",
    jpn: "一言一句，文字通りに",
    category: "熟語",
  },
  {
    eng: "stubborn",
    jpn: "頑固な",
    category: "形容詞",
  },
  {
    eng: "detour",
    jpn: "迂回する",
    category: "動詞",
  },
  {
    eng: "life expectancy",
    jpn: "余命，残りの寿命",
    category: "名詞",
  },
  {
    eng: "flatter",
    jpn: "にお世辞を言う",
    category: "動詞",
  },
  {
    eng: "inhabit",
    jpn: "に生息する，住む",
    category: "動詞",
  },
  {
    eng: "frown",
    jpn: "しかめっ面，顔をしかめる",
    category: "動詞",
  },
  {
    eng: "psychology",
    jpn: "心理学，精神科学",
    category: "名詞",
  },
  {
    eng: "build up",
    jpn: "増大する，築き上げる",
    category: "熟語",
  },
  {
    eng: "prudent",
    jpn: "用心深い，慎重な",
    category: "形容詞",
  },
  {
    eng: "air out",
    jpn: "が乾く，乾燥する",
    category: "熟語",
  },
  {
    eng: "want for",
    jpn: "に欠ける，必要とする",
    category: "熟語",
  },
  {
    eng: "genuine",
    jpn: "本物の，純粋な",
    category: "形容詞",
  },
  {
    eng: "conductor",
    jpn: "導体，指導者",
    category: "名詞",
  },
  {
    eng: "not absolutely",
    jpn: "絶対ではない，必ず，ではない",
    category: "副詞",
  },
  {
    eng: "odds and ends",
    jpn: "がらくた，半端なもの",
    category: "名詞",
  },
  {
    eng: "publisher",
    jpn: "出版社，出版会社",
    category: "名詞",
  },
  {
    eng: "wind up",
    jpn: "巻き上げる，終わりにする",
    category: "熟語",
  },
  {
    eng: "monarch",
    jpn: "君主，王",
    category: "名詞",
  },
  {
    eng: "blaze",
    jpn: "火炎，炎",
    category: "名詞",
  },
  {
    eng: "heap",
    jpn: "かたまり",
    category: "名詞",
  },
  {
    eng: "exclaim",
    jpn: "を叫ぶ，大声で言う",
    category: "動詞",
  },
  {
    eng: "sob",
    jpn: "すすり泣く，涙声で泣く",
    category: "動詞",
  },
  {
    eng: "chaos",
    jpn: "混沌",
    category: "名詞",
  },
  {
    eng: "exploration",
    jpn: "探査，探索",
    category: "名詞",
  },
  {
    eng: "detrimental",
    jpn: "有害な",
    category: "形容詞",
  },
  {
    eng: "dialect",
    jpn: "方言",
    category: "名詞",
  },
  {
    eng: "prevention",
    jpn: "防止，予防",
    category: "名詞",
  },
  {
    eng: "in the mood for",
    jpn: "したい気分である，する気になっている",
    category: "熟語",
  },
  {
    eng: "undertake",
    jpn: "引き受ける",
    category: "動詞",
  },
  {
    eng: "root out",
    jpn: "根絶する，一掃する",
    category: "熟語",
  },
  {
    eng: "by dint of",
    jpn: "によって，の力で",
    category: "熟語",
  },
  {
    eng: "reluctant",
    jpn: "しぶしぶの，気が進まない",
    category: "形容詞",
  },
  {
    eng: "neutral",
    jpn: "中立の，公平な",
    category: "形容詞",
  },
  {
    eng: "no sweat",
    jpn: "容易に，お安い御用で",
    category: "熟語",
  },
  {
    eng: "influential",
    jpn: "影響力のある，有力な",
    category: "形容詞",
  },
  {
    eng: "cut down",
    jpn: "を減らす，削減する",
    category: "熟語",
  },
  {
    eng: "in disguise",
    jpn: "変装した，～したふり",
    category: "熟語",
  },
  {
    eng: "turn pale",
    jpn: "青ざめる，血色が悪くなる",
    category: "熟語",
  },
  {
    eng: "midday",
    jpn: "真昼，正午",
    category: "名詞",
  },
  {
    eng: "acquaint",
    jpn: "に知らせる",
    category: "動詞",
  },
  {
    eng: "in anticipation of",
    jpn: "を予期して，見込んで",
    category: "熟語",
  },
  {
    eng: "apparatus",
    jpn: "器具，装置",
    category: "名詞",
  },
  {
    eng: "cradle",
    jpn: "ゆりかご",
    category: "名詞",
  },
  {
    eng: "noun",
    jpn: "名詞",
    category: "名詞",
  },
  {
    eng: "foam",
    jpn: "小さな泡，微細な泡",
    category: "名詞",
  },
  {
    eng: "forgetful",
    jpn: "忘れっぽい，忘れやすい",
    category: "形容詞",
  },
  {
    eng: "disgrace",
    jpn: "不名誉",
    category: "名詞",
  },
  {
    eng: "scar",
    jpn: "傷跡，痕跡",
    category: "名詞",
  },
  {
    eng: "disappointed",
    jpn: "がっかりした，当ての外れた",
    category: "形容詞",
  },
  {
    eng: "track down",
    jpn: "の跡を辿る，追い詰める",
    category: "熟語",
  },
  {
    eng: "grocery",
    jpn: "食料品",
    category: "名詞",
  },
  {
    eng: "throne",
    jpn: "王位，王座",
    category: "名詞",
  },
  {
    eng: "pullover",
    jpn: "路肩に寄せる",
    category: "動詞",
  },
  {
    eng: "accommodation",
    jpn: "宿泊施設",
    category: "名詞",
  },
  {
    eng: "architect",
    jpn: "建築家",
    category: "名詞",
  },
  {
    eng: "stride",
    jpn: "大きく歩く，元気よく歩く",
    category: "動詞",
  },
  {
    eng: "mummy",
    jpn: "ミイラ，乾燥死体",
    category: "名詞",
  },
  {
    eng: "assignment",
    jpn: "割り当て，配分",
    category: "名詞",
  },
  {
    eng: "impatient",
    jpn: "せっかちな，性急な",
    category: "形容詞",
  },
  {
    eng: "inquire",
    jpn: "を問い合わせる，尋ねる",
    category: "動詞",
  },
  {
    eng: "murmur",
    jpn: "つぶやく",
    category: "動詞",
  },
  {
    eng: "acute",
    jpn: "鋭角の",
    category: "形容詞",
  },
  {
    eng: "undergraduate",
    jpn: "大学生，学部生",
    category: "名詞",
  },
  {
    eng: "rest on",
    jpn: "に基づく，に頼る",
    category: "熟語",
  },
  {
    eng: "invasion",
    jpn: "侵入，侵略",
    category: "名詞",
  },
  {
    eng: "plunge",
    jpn: "突入する，侵入する",
    category: "動詞",
  },
  {
    eng: "perfume",
    jpn: "香水，芳香",
    category: "名詞",
  },
  {
    eng: "halt",
    jpn: "立ち止まる，停止",
    category: "動詞",
  },
  {
    eng: "provider",
    jpn: "生産者，製造者",
    category: "名詞",
  },
  {
    eng: "mischief",
    jpn: "いたずら",
    category: "名詞",
  },
  {
    eng: "sneeze",
    jpn: "くしゃみ/くしゃみをする",
    category: "動詞",
  },
  {
    eng: "roar",
    jpn: "とどろく，吠える",
    category: "動詞",
  },
  {
    eng: "for instance",
    jpn: "例えば，たとえ… としても",
    category: "熟語",
  },
  {
    eng: "keep down",
    jpn: "身を低くする，大きな声を出さずにいる",
    category: "熟語",
  },
  {
    eng: "plainly",
    jpn: "明白に，はっきりと",
    category: "副詞",
  },
  {
    eng: "by default",
    jpn: "既定では，初期段階から",
    category: "熟語",
  },
  {
    eng: "shipping",
    jpn: "輸送，発送",
    category: "名詞",
  },
  {
    eng: "architecture",
    jpn: "建築",
    category: "名詞",
  },
  {
    eng: "inflict A on B",
    jpn: "BにAを与える，負わせる",
    category: "熟語",
  },
  {
    eng: "uncover",
    jpn: "を明らかにする，ふたを取る",
    category: "動詞",
  },
  {
    eng: "embassy",
    jpn: "大使館",
    category: "名詞",
  },
  {
    eng: "pessimistic",
    jpn: "悲観的な",
    category: "形容詞",
  },
  {
    eng: "assurance",
    jpn: "保証，請け合い",
    category: "名詞",
  },
  {
    eng: "evaluate",
    jpn: "評価する，見積もる",
    category: "動詞",
  },
  {
    eng: "pull through",
    jpn: "を乗り越える，を超える",
    category: "熟語",
  },
  {
    eng: "graceful",
    jpn: "優雅な，上品な",
    category: "形容詞",
  },
  {
    eng: "abolish",
    jpn: "廃止する",
    category: "動詞",
  },
  {
    eng: "in spite of",
    jpn: "にも関わらず",
    category: "熟語",
  },
  {
    eng: "carve",
    jpn: "を彫る",
    category: "動詞",
  },
  {
    eng: "miss out",
    jpn: "機会を逃す，見落とす，見過ごす",
    category: "熟語",
  },
  {
    eng: "portray",
    jpn: "描く，表現する",
    category: "動詞",
  },
  {
    eng: "catch a glimpse of",
    jpn: "をちらっと見る，垣間見る",
    category: "熟語",
  },
  {
    eng: "remarkably",
    jpn: "著しく，非常に",
    category: "副詞",
  },
  {
    eng: "exceed",
    jpn: "を超える，超過する",
    category: "動詞",
  },
  {
    eng: "revive",
    jpn: "生き返る",
    category: "動詞",
  },
  {
    eng: "deprive",
    jpn: "から奪う，略奪する",
    category: "動詞",
  },
  {
    eng: "far cry from",
    jpn: "叫び声から遠い，からほど遠い",
    category: "熟語",
  },
  {
    eng: "legend",
    jpn: "伝説，言い伝え",
    category: "名詞",
  },
  {
    eng: "complexity",
    jpn: "複雑さ，錯綜さ",
    category: "名詞",
  },
  {
    eng: "overtake",
    jpn: "追い越す，追いつく",
    category: "動詞",
  },
  {
    eng: "harmless",
    jpn: "無害な",
    category: "形容詞",
  },
  {
    eng: "consent",
    jpn: "同意する，賛成する",
    category: "動詞",
  },
  {
    eng: "ornament",
    jpn: "装飾品，飾り",
    category: "名詞",
  },
  {
    eng: "send in",
    jpn: "に送る，提出する",
    category: "熟語",
  },
  {
    eng: "idiot",
    jpn: "馬鹿",
    category: "名詞",
  },
  {
    eng: "plural",
    jpn: "複数の",
    category: "形容詞",
  },
  {
    eng: "provincial",
    jpn: "地方の",
    category: "形容詞",
  },
  {
    eng: "removal",
    jpn: "除去，取り除く",
    category: "名詞",
  },
  {
    eng: "diarrhea",
    jpn: "下痢",
    category: "名詞",
  },
  {
    eng: "work off",
    jpn: "徐々に取れる，減らす",
    category: "熟語",
  },
  {
    eng: "brim",
    jpn: "へり，ふち",
    category: "名詞",
  },
  {
    eng: "dwelling",
    jpn: "住居",
    category: "名詞",
  },
  {
    eng: "gravity",
    jpn: "重力，引力",
    category: "名詞",
  },
  {
    eng: "diverse",
    jpn: "多様な，多種多様な",
    category: "形容詞",
  },
  {
    eng: "pledge",
    jpn: "誓約，固い約束",
    category: "名詞",
  },
  {
    eng: "anticipation",
    jpn: "期待，予想",
    category: "名詞",
  },
  {
    eng: "simultaneously",
    jpn: "同時に",
    category: "副詞",
  },
  {
    eng: "soak",
    jpn: "浸す",
    category: "動詞",
  },
  {
    eng: "supplement",
    jpn: "補足，追加",
    category: "名詞",
  },
  {
    eng: "inevitably",
    jpn: "必然的に",
    category: "副詞",
  },
  {
    eng: "crouch",
    jpn: "しゃがむ，かがむ",
    category: "動詞",
  },
  {
    eng: "branch out",
    jpn: "枝を出す，手を広げる",
    category: "熟語",
  },
  {
    eng: "in abundance",
    jpn: "大量に，豊富に",
    category: "熟語",
  },
  {
    eng: "rip",
    jpn: "を裂く，破る",
    category: "動詞",
  },
  {
    eng: "supervision",
    jpn: "監督，指導者",
    category: "名詞",
  },
  {
    eng: "comical",
    jpn: "おどけた，滑稽な",
    category: "形容詞",
  },
  {
    eng: "counsel",
    jpn: "弁護士，協議",
    category: "名詞",
  },
  {
    eng: "cheat on",
    jpn: "でズルをする，裏切る",
    category: "熟語",
  },
  {
    eng: "metaphor",
    jpn: "比喩，隠喩",
    category: "名詞",
  },
  {
    eng: "compensation",
    jpn: "補償，賠償",
    category: "名詞",
  },
  {
    eng: "impolite",
    jpn: "失礼な，無礼な",
    category: "形容詞",
  },
  {
    eng: "pastry",
    jpn: "パン菓子",
    category: "名詞",
  },
  {
    eng: "remainder",
    jpn: "残り，残りもの",
    category: "名詞",
  },
  {
    eng: "biography",
    jpn: "伝記",
    category: "名詞",
  },
  {
    eng: "persistent",
    jpn: "根気強い，粘り強い",
    category: "形容詞",
  },
  {
    eng: "rubbish",
    jpn: "ごみ，がらくた",
    category: "名詞",
  },
  {
    eng: "shameful",
    jpn: "恥ずべき",
    category: "形容詞",
  },
  {
    eng: "edge out",
    jpn: "徐々に押しのける，辛勝する",
    category: "熟語",
  },
  {
    eng: "vanity",
    jpn: "虚栄心，うぬぼれ",
    category: "名詞",
  },
  {
    eng: "umpire",
    jpn: "審判，審判員",
    category: "名詞",
  },
  {
    eng: "intensity",
    jpn: "強度，強烈さ",
    category: "名詞",
  },
  {
    eng: "diplomat",
    jpn: "外交官，外交官僚",
    category: "名詞",
  },
  {
    eng: "exert oneself to",
    jpn: "するために努力する，するために尽力する",
    category: "熟語",
  },
  {
    eng: "naval",
    jpn: "海軍の，海軍のもの",
    category: "形容詞",
  },
  {
    eng: "sway",
    jpn: "揺さぶる",
    category: "動詞",
  },
  {
    eng: "microscope",
    jpn: "顕微鏡，測微鏡",
    category: "名詞",
  },
  {
    eng: "probe",
    jpn: "探り針",
    category: "名詞",
  },
  {
    eng: "geometry",
    jpn: "幾何学",
    category: "名詞",
  },
  {
    eng: "fuzzy",
    jpn: "ぼやけた",
    category: "形容詞",
  },
  {
    eng: "skyscraper",
    jpn: "超高層建築物，摩天楼",
    category: "名詞",
  },
  {
    eng: "deceit",
    jpn: "詐欺，騙し",
    category: "名詞",
  },
  {
    eng: "rebellion",
    jpn: "反乱，暴動",
    category: "名詞",
  },
  {
    eng: "isolation",
    jpn: "隔離",
    category: "名詞",
  },
  {
    eng: "lay down",
    jpn: "を横たえる，倒す",
    category: "熟語",
  },
  {
    eng: "nobility",
    jpn: "尊さ，高貴さ",
    category: "名詞",
  },
  {
    eng: "spit",
    jpn: "唾を吐く",
    category: "動詞",
  },
  {
    eng: "think out",
    jpn: "考え抜く，熟考する",
    category: "熟語",
  },
  {
    eng: "obstacle",
    jpn: "障害，妨害",
    category: "名詞",
  },
  {
    eng: "chairperson",
    jpn: "議長",
    category: "名詞",
  },
  {
    eng: "embarrassed",
    jpn: "恥ずかしい",
    category: "形容詞",
  },
  {
    eng: "plentiful",
    jpn: "たっぷりの，たくさんの",
    category: "形容詞",
  },
  {
    eng: "all thumbs",
    jpn: "不器用な，ぶざまな",
    category: "熟語",
  },
  {
    eng: "orchard",
    jpn: "果樹園",
    category: "名詞",
  },
  {
    eng: "fatigue",
    jpn: "疲労",
    category: "名詞",
  },
  {
    eng: "attendance",
    jpn: "出席，参列",
    category: "名詞",
  },
  {
    eng: "come around",
    jpn: "遠回りする，立ち寄る",
    category: "熟語",
  },
  {
    eng: "probability",
    jpn: "確率",
    category: "名詞",
  },
  {
    eng: "prediction",
    jpn: "予測，予想",
    category: "名詞",
  },
  {
    eng: "ownership",
    jpn: "所有権",
    category: "名詞",
  },
  {
    eng: "equation",
    jpn: "方程式",
    category: "名詞",
  },
  {
    eng: "accounting",
    jpn: "会計，計算",
    category: "名詞",
  },
  {
    eng: "shatter",
    jpn: "を粉砕する",
    category: "動詞",
  },
  {
    eng: "preliminary",
    jpn: "予備的な，予備の",
    category: "形容詞",
  },
  {
    eng: "endurance",
    jpn: "忍耐，がまん",
    category: "名詞",
  },
  {
    eng: "fleet",
    jpn: "艦隊",
    category: "名詞",
  },
  {
    eng: "stand over",
    jpn: "を監督する，延期する",
    category: "熟語",
  },
  {
    eng: "comet",
    jpn: "彗星",
    category: "名詞",
  },
  {
    eng: "cozy",
    jpn: "居心地の良い，快適な",
    category: "形容詞",
  },
  {
    eng: "speculation",
    jpn: "憶測，推測",
    category: "名詞",
  },
  {
    eng: "execute",
    jpn: "を実行する，遂行する",
    category: "動詞",
  },
  {
    eng: "have a flat tire",
    jpn: "タイヤがパンクする，パンクしている",
    category: "熟語",
  },
  {
    eng: "masterpiece",
    jpn: "傑作，名作",
    category: "名詞",
  },
  {
    eng: "nun",
    jpn: "修道女",
    category: "名詞",
  },
  {
    eng: "be keen to",
    jpn: "やる気がある，乗り気になっている",
    category: "熟語",
  },
  {
    eng: "discrimination",
    jpn: "差別/差別的な",
    category: "名詞",
  },
  {
    eng: "wash away",
    jpn: "を洗い流す，を洗い落とす",
    category: "熟語",
  },
  {
    eng: "bounce",
    jpn: "跳ねる，はずむ",
    category: "動詞",
  },
  {
    eng: "blueprint",
    jpn: "青写真",
    category: "名詞",
  },
  {
    eng: "bring about",
    jpn: "を引き起こす，発生させる",
    category: "熟語",
  },
  {
    eng: "disturbing",
    jpn: "邪魔な，迷惑な",
    category: "形容詞",
  },
  {
    eng: "attentive",
    jpn: "注意深い",
    category: "形容詞",
  },
  {
    eng: "take root",
    jpn: "根付く，定着する",
    category: "熟語",
  },
  {
    eng: "mock",
    jpn: "をあざ笑う，ばかにする",
    category: "動詞",
  },
  {
    eng: "identify A as B",
    jpn: "AがBだと分かる，認識する",
    category: "熟語",
  },
  {
    eng: "receptionist",
    jpn: "受付係",
    category: "名詞",
  },
  {
    eng: "identification",
    jpn: "身分証明書，身元確認",
    category: "名詞",
  },
  {
    eng: "prey",
    jpn: "獲物",
    category: "名詞",
  },
  {
    eng: "shrine",
    jpn: "神社，聖堂",
    category: "名詞",
  },
  {
    eng: "solitary",
    jpn: "独りの，独りぼっちの",
    category: "形容詞",
  },
  {
    eng: "jack up",
    jpn: "吊り上げる，ジャッキで上げる",
    category: "熟語",
  },
  {
    eng: "diminish",
    jpn: "減らす",
    category: "動詞",
  },
  {
    eng: "cue",
    jpn: "合図，きっかけ",
    category: "名詞",
  },
  {
    eng: "scramble",
    jpn: "をかき混ぜる，素早く進む",
    category: "動詞",
  },
  {
    eng: "councilor",
    jpn: "評議員",
    category: "名詞",
  },
  {
    eng: "federation",
    jpn: "連合，連盟",
    category: "名詞",
  },
  {
    eng: "in short",
    jpn: "要するに，つまり",
    category: "熟語",
  },
  {
    eng: "inexpensive",
    jpn: "安価な，費用のかからない",
    category: "形容詞",
  },
  {
    eng: "astronomer",
    jpn: "天文学者",
    category: "名詞",
  },
  {
    eng: "multitude",
    jpn: "大勢，多く",
    category: "名詞",
  },
  {
    eng: "lumber",
    jpn: "木材",
    category: "名詞",
  },
  {
    eng: "hostile",
    jpn: "敵意のある，反感を持つ，敵対視する",
    category: "形容詞",
  },
  {
    eng: "bilingual",
    jpn: "二ヶ国語話者",
    category: "名詞",
  },
  {
    eng: "insistence",
    jpn: "主張，信条，主義",
    category: "名詞",
  },
  {
    eng: "administrative",
    jpn: "運営の，管理の",
    category: "形容詞",
  },
  {
    eng: "staircase",
    jpn: "階段",
    category: "名詞",
  },
  {
    eng: "inheritance",
    jpn: "継承，相続",
    category: "名詞",
  },
  {
    eng: "accuracy",
    jpn: "正確さ，精密",
    category: "名詞",
  },
  {
    eng: "mortal",
    jpn: "死を伴う",
    category: "形容詞",
  },
  {
    eng: "liner",
    jpn: "定期船",
    category: "名詞",
  },
  {
    eng: "abrupt",
    jpn: "突然の，不意の",
    category: "形容詞",
  },
  {
    eng: "registration",
    jpn: "登録",
    category: "名詞",
  },
  {
    eng: "exhaustion",
    jpn: "枯渇，疲労",
    category: "名詞",
  },
  {
    eng: "call down",
    jpn: "下に向って叫ぶ，叱りつける",
    category: "熟語",
  },
  {
    eng: "cluster",
    jpn: "集団",
    category: "名詞",
  },
  {
    eng: "script",
    jpn: "台本，脚本",
    category: "名詞",
  },
  {
    eng: "infectious",
    jpn: "伝染性の，感染する",
    category: "形容詞",
  },
  {
    eng: "odor",
    jpn: "臭い，悪臭",
    category: "名詞",
  },
  {
    eng: "ample",
    jpn: "広大な，広い",
    category: "形容詞",
  },
  {
    eng: "ornamental",
    jpn: "装飾用の",
    category: "形容詞",
  },
  {
    eng: "dullness",
    jpn: "鈍さ，鈍感",
    category: "名詞",
  },
  {
    eng: "indication",
    jpn: "指示，指し示すこと",
    category: "名詞",
  },
  {
    eng: "certificate",
    jpn: "証書，証券",
    category: "名詞",
  },
  {
    eng: "remembrance",
    jpn: "記憶，思い出",
    category: "名詞",
  },
  {
    eng: "jerk",
    jpn: "急な動き",
    category: "名詞",
  },
  {
    eng: "orient",
    jpn: "東洋",
    category: "名詞",
  },
  {
    eng: "offspring",
    jpn: "子孫",
    category: "名詞",
  },
  {
    eng: "counterpart",
    jpn: "相手",
    category: "名詞",
  },
  {
    eng: "documentary",
    jpn: "事実を記録した",
    category: "形容詞",
  },
  {
    eng: "scrape",
    jpn: "を削り取る",
    category: "動詞",
  },
  {
    eng: "dedicate",
    jpn: "に専念する，奉納する",
    category: "動詞",
  },
  {
    eng: "astronaut",
    jpn: "宇宙飛行士",
    category: "名詞",
  },
  {
    eng: "naughty",
    jpn: "わんぱくな，いたずらな",
    category: "形容詞",
  },
  {
    eng: "pregnancy",
    jpn: "妊娠",
    category: "名詞",
  },
  {
    eng: "comparable",
    jpn: "比較できる，比べられる",
    category: "形容詞",
  },
  {
    eng: "haunt",
    jpn: "にたびたび行く",
    category: "動詞",
  },
  {
    eng: "trash",
    jpn: "ごみ，価値のないもの",
    category: "名詞",
  },
  {
    eng: "outskirt",
    jpn: "郊外",
    category: "名詞",
  },
  {
    eng: "valid",
    jpn: "有効な，根拠のある",
    category: "形容詞",
  },
  {
    eng: "behind the scenes",
    jpn: "舞台裏で，陰で",
    category: "熟語",
  },
  {
    eng: "mellow",
    jpn: "豊潤な，熟した",
    category: "形容詞",
  },
  {
    eng: "paw",
    jpn: "動物の足",
    category: "名詞",
  },
  {
    eng: "genetic",
    jpn: "遺伝的な，遺伝による",
    category: "形容詞",
  },
  {
    eng: "stimulus",
    jpn: "刺激",
    category: "名詞",
  },
  {
    eng: "spectacular",
    jpn: "壮観な，見事な",
    category: "形容詞",
  },
  {
    eng: "villa",
    jpn: "別荘",
    category: "名詞",
  },
  {
    eng: "chilly",
    jpn: "肌寒い",
    category: "形容詞",
  },
  {
    eng: "crook",
    jpn: "湾曲させる",
    category: "動詞",
  },
  {
    eng: "costly",
    jpn: "高価な，費用のかかる",
    category: "形容詞",
  },
  {
    eng: "coarse",
    jpn: "粗末な，下等な",
    category: "形容詞",
  },
  {
    eng: "buy up",
    jpn: "全部買う，買収する",
    category: "熟語",
  },
  {
    eng: "accusation",
    jpn: "非難，告発",
    category: "名詞",
  },
  {
    eng: "transaction",
    jpn: "取引",
    category: "名詞",
  },
  {
    eng: "stupidity",
    jpn: "愚かさ，愚鈍",
    category: "名詞",
  },
  {
    eng: "leak",
    jpn: "漏れる",
    category: "動詞",
  },
  {
    eng: "tuck",
    jpn: "を押し込む，つめ込む",
    category: "動詞",
  },
  {
    eng: "without so much as",
    jpn: "さえしないで，すらしない",
    category: "熟語",
  },
  {
    eng: "rack",
    jpn: "置き棚",
    category: "名詞",
  },
  {
    eng: "avail oneself of",
    jpn: "を利用する，を活用する",
    category: "熟語",
  },
  {
    eng: "hesitation",
    jpn: "ためらい，躊躇",
    category: "名詞",
  },
  {
    eng: "utility",
    jpn: "効用",
    category: "名詞",
  },
  {
    eng: "furthermore",
    jpn: "さらに，その上",
    category: "副詞",
  },
  {
    eng: "exclusive",
    jpn: "閉鎖的な",
    category: "形容詞",
  },
  {
    eng: "signify",
    jpn: "意味する，示す",
    category: "動詞",
  },
  {
    eng: "stick up",
    jpn: "上に突き出る，両手を挙げさせる",
    category: "熟語",
  },
  {
    eng: "exclusively",
    jpn: "排他的に，限定して",
    category: "副詞",
  },
  {
    eng: "diversity",
    jpn: "多様性，多様化",
    category: "名詞",
  },
  {
    eng: "vocal",
    jpn: "音声の，声の",
    category: "形容詞",
  },
  {
    eng: "exceptional",
    jpn: "例外の，まれな",
    category: "形容詞",
  },
  {
    eng: "in all likelihood",
    jpn: "おそらく，ほぼ確実に",
    category: "熟語",
  },
  {
    eng: "irresponsible",
    jpn: "責任を負えない，無責任な",
    category: "形容詞",
  },
  {
    eng: "distinctive",
    jpn: "特有の，独特の",
    category: "形容詞",
  },
  {
    eng: "faraway",
    jpn: "遠くの",
    category: "形容詞",
  },
  {
    eng: "puff",
    jpn: "軽く吹くこと，一吹き",
    category: "名詞",
  },
  {
    eng: "sincerity",
    jpn: "誠意，誠実",
    category: "名詞",
  },
  {
    eng: "beyond question",
    jpn: "疑いもなく，確かに",
    category: "熟語",
  },
  {
    eng: "vicious",
    jpn: "悪意のある，意地悪な",
    category: "形容詞",
  },
  {
    eng: "starvation",
    jpn: "飢餓，餓死",
    category: "名詞",
  },
  {
    eng: "slip of the tongue",
    jpn: "失言，口を滑らせる",
    category: "熟語",
  },
  {
    eng: "stack",
    jpn: "積み重ねる，累積する",
    category: "動詞",
  },
  {
    eng: "rely on",
    jpn: "に頼る，を当てにする",
    category: "熟語",
  },
  {
    eng: "alongside",
    jpn: "と一緒に，並行して",
    category: "副詞",
  },
  {
    eng: "spring from",
    jpn: "から生じる，から生まれる",
    category: "熟語",
  },
  {
    eng: "monopoly",
    jpn: "独占，専売",
    category: "名詞",
  },
  {
    eng: "reckless",
    jpn: "無謀な，向こう見ずな",
    category: "形容詞",
  },
  {
    eng: "strip A of B",
    jpn: "AからBを取り去る，奪う",
    category: "熟語",
  },
  {
    eng: "retail",
    jpn: "小売り",
    category: "名詞",
  },
  {
    eng: "utilize",
    jpn: "利用する",
    category: "動詞",
  },
  {
    eng: "take the plunge",
    jpn: "思い切ってやる，やってみる",
    category: "熟語",
  },
  {
    eng: "withdrawal",
    jpn: "撤回，撤退",
    category: "名詞",
  },
  {
    eng: "disclose",
    jpn: "を開示する，見せる",
    category: "動詞",
  },
  {
    eng: "put emphasis on",
    jpn: "に重点を置く，を重んじる",
    category: "熟語",
  },
  {
    eng: "puppet",
    jpn: "操り人形，指人形",
    category: "名詞",
  },
  {
    eng: "hold off",
    jpn: "を寄せ付けない，引き離す",
    category: "熟語",
  },
  {
    eng: "provoke",
    jpn: "挑発する",
    category: "動詞",
  },
  {
    eng: "stony",
    jpn: "石の，石の多い",
    category: "形容詞",
  },
  {
    eng: "ethics",
    jpn: "倫理",
    category: "名詞",
  },
  {
    eng: "gun for",
    jpn: "を追い求める，必死になる",
    category: "熟語",
  },
  {
    eng: "stoop",
    jpn: "かがむ",
    category: "動詞",
  },
  {
    eng: "regain",
    jpn: "を取り戻す，回復する",
    category: "動詞",
  },
  {
    eng: "alley",
    jpn: "路地",
    category: "名詞",
  },
  {
    eng: "ethnic",
    jpn: "民族の，民族特有の",
    category: "形容詞",
  },
  {
    eng: "shiver",
    jpn: "震える，おののく",
    category: "動詞",
  },
  {
    eng: "inadequate",
    jpn: "不十分な，不適切な",
    category: "形容詞",
  },
  {
    eng: "fulfillment",
    jpn: "遂行",
    category: "名詞",
  },
  {
    eng: "garment",
    jpn: "衣服",
    category: "名詞",
  },
  {
    eng: "exploit",
    jpn: "偉業，業績",
    category: "名詞",
  },
  {
    eng: "deliberately",
    jpn: "故意に，慎重に",
    category: "副詞",
  },
  {
    eng: "feminist",
    jpn: "男女同権主義者，フェミニスト",
    category: "名詞",
  },
  {
    eng: "stump",
    jpn: "切り株",
    category: "名詞",
  },
  {
    eng: "hail from",
    jpn: "の出身である，(船が)から来る",
    category: "熟語",
  },
  {
    eng: "unfold",
    jpn: "を展開する，広げる",
    category: "動詞",
  },
  {
    eng: "dialogue",
    jpn: "対話",
    category: "名詞",
  },
  {
    eng: "vacant",
    jpn: "空っぽの，無人の",
    category: "形容詞",
  },
  {
    eng: "commodity",
    jpn: "商品",
    category: "名詞",
  },
  {
    eng: "residential",
    jpn: "居住の，住居の",
    category: "形容詞",
  },
  {
    eng: "pin down",
    jpn: "を留める，押さえつける",
    category: "熟語",
  },
  {
    eng: "accountant",
    jpn: "会計士，会計係",
    category: "名詞",
  },
  {
    eng: "compel",
    jpn: "無理にさせる",
    category: "動詞",
  },
  {
    eng: "architectural",
    jpn: "建築の",
    category: "形容詞",
  },
  {
    eng: "inspection",
    jpn: "検査，点検",
    category: "名詞",
  },
  {
    eng: "patent",
    jpn: "特許",
    category: "名詞",
  },
  {
    eng: "guarantee",
    jpn: "を保証する/保証",
    category: "動詞",
  },
  {
    eng: "bear down",
    jpn: "圧迫する，制圧する",
    category: "熟語",
  },
  {
    eng: "fluid",
    jpn: "液体，流動体",
    category: "名詞",
  },
  {
    eng: "decent",
    jpn: "まともな",
    category: "形容詞",
  },
  {
    eng: "identical",
    jpn: "同一の",
    category: "形容詞",
  },
  {
    eng: "revise",
    jpn: "改訂する",
    category: "動詞",
  },
  {
    eng: "proficient",
    jpn: "熟練した，堪能な",
    category: "形容詞",
  },
  {
    eng: "rally",
    jpn: "を結集する，呼び集める",
    category: "動詞",
  },
  {
    eng: "fit into",
    jpn: "に溶け込む，調和する",
    category: "熟語",
  },
  {
    eng: "illegal",
    jpn: "違法な，不法な",
    category: "形容詞",
  },
  {
    eng: "accessible",
    jpn: "行きやすい，便利な",
    category: "形容詞",
  },
  {
    eng: "as a last resort",
    jpn: "最後の手段として，切羽詰まって",
    category: "熟語",
  },
  {
    eng: "penetrate",
    jpn: "貫く",
    category: "動詞",
  },
  {
    eng: "head over heels",
    jpn: "真っ逆さまに，逆さまに",
    category: "熟語",
  },
  {
    eng: "accommodate",
    jpn: "収容する",
    category: "動詞",
  },
  {
    eng: "peck",
    jpn: "をついばむ，つつく",
    category: "動詞",
  },
  {
    eng: "spacecraft",
    jpn: "宇宙船",
    category: "名詞",
  },
  {
    eng: "be weary of",
    jpn: "にうんざりしている",
    category: "熟語",
  },
  {
    eng: "considerably",
    jpn: "かなり，相当に",
    category: "副詞",
  },
  {
    eng: "stray",
    jpn: "迷い込む",
    category: "動詞",
  },
  {
    eng: "resemblance",
    jpn: "類似",
    category: "名詞",
  },
  {
    eng: "institutional",
    jpn: "制度の，制度上の",
    category: "形容詞",
  },
  {
    eng: "plague",
    jpn: "伝染病",
    category: "名詞",
  },
  {
    eng: "glimpse",
    jpn: "ひと目見ること",
    category: "名詞",
  },
  {
    eng: "fuss",
    jpn: "空騒ぎ",
    category: "名詞",
  },
  {
    eng: "inception",
    jpn: "始まり，発端",
    category: "名詞",
  },
  {
    eng: "be doomed to",
    jpn: "運命づけられる，の運命にある",
    category: "熟語",
  },
  {
    eng: "insert",
    jpn: "を差し込む，挿入する",
    category: "動詞",
  },
  {
    eng: "pretense",
    jpn: "見せかけ",
    category: "名詞",
  },
  {
    eng: "sheer",
    jpn: "本当の，透けるほど薄い",
    category: "形容詞",
  },
  {
    eng: "to begin with",
    jpn: "最初に，最初から",
    category: "熟語",
  },
  {
    eng: "coordinate",
    jpn: "座標の，同等の/整合する",
    category: "動詞",
  },
  {
    eng: "checkup",
    jpn: "健康診断，照合",
    category: "名詞",
  },
  {
    eng: "applaud",
    jpn: "拍手する",
    category: "動詞",
  },
  {
    eng: "ethical",
    jpn: "倫理的な",
    category: "形容詞",
  },
  {
    eng: "shady",
    jpn: "陰になった，日陰になった",
    category: "形容詞",
  },
  {
    eng: "preservation",
    jpn: "保存，保護",
    category: "名詞",
  },
  {
    eng: "rust",
    jpn: "錆び，酸化",
    category: "名詞",
  },
  {
    eng: "flexibility",
    jpn: "しなやかさ，弾力性，柔軟性",
    category: "名詞",
  },
  {
    eng: "be destitute of",
    jpn: "に困窮する，を持っていない",
    category: "熟語",
  },
  {
    eng: "clause",
    jpn: "条項，節",
    category: "名詞",
  },
  {
    eng: "transmit",
    jpn: "送信する",
    category: "動詞",
  },
  {
    eng: "reproach A for B",
    jpn: "BのことでAを非難する，咎める",
    category: "熟語",
  },
  {
    eng: "denial",
    jpn: "拒否，避妊",
    category: "名詞",
  },
  {
    eng: "nobleman",
    jpn: "貴族",
    category: "名詞",
  },
  {
    eng: "stale",
    jpn: "古くさい，新鮮でない",
    category: "形容詞",
  },
  {
    eng: "talk back to",
    jpn: "に口答えする，言い返す",
    category: "熟語",
  },
  {
    eng: "depressed",
    jpn: "落ち込んだ，憂鬱な",
    category: "形容詞",
  },
  {
    eng: "quest",
    jpn: "探求，探究",
    category: "名詞",
  },
  {
    eng: "overthrow",
    jpn: "を打倒する，転覆する",
    category: "動詞",
  },
  {
    eng: "excursion",
    jpn: "遠足",
    category: "名詞",
  },
  {
    eng: "fragment",
    jpn: "断片",
    category: "名詞",
  },
  {
    eng: "watchdog",
    jpn: "番犬",
    category: "名詞",
  },
  {
    eng: "bald",
    jpn: "禿げた",
    category: "形容詞",
  },
  {
    eng: "mutter",
    jpn: "つぶやく",
    category: "動詞",
  },
  {
    eng: "back off",
    jpn: "後退する，後ろに下がる",
    category: "熟語",
  },
  {
    eng: "ridge",
    jpn: "尾根",
    category: "名詞",
  },
  {
    eng: "adjective",
    jpn: "形容詞，形容する言葉",
    category: "名詞",
  },
  {
    eng: "classify",
    jpn: "に分類する，類別する",
    category: "動詞",
  },
  {
    eng: "labyrinth",
    jpn: "迷宮，迷路",
    category: "名詞",
  },
  {
    eng: "cooperate",
    jpn: "協力する，共同する",
    category: "動詞",
  },
  {
    eng: "sober",
    jpn: "酒を飲んでいない",
    category: "形容詞",
  },
  {
    eng: "frustrate",
    jpn: "挫折させる",
    category: "動詞",
  },
  {
    eng: "envious",
    jpn: "羨ましい，妬ましい",
    category: "形容詞",
  },
  {
    eng: "step down",
    jpn: "降りる，身を引く",
    category: "熟語",
  },
  {
    eng: "cooperative",
    jpn: "協力的な",
    category: "形容詞",
  },
  {
    eng: "donation",
    jpn: "寄贈，寄付",
    category: "名詞",
  },
  {
    eng: "overwhelm",
    jpn: "圧倒する",
    category: "動詞",
  },
  {
    eng: "structural",
    jpn: "構造上の，構成上の",
    category: "形容詞",
  },
  {
    eng: "librarian",
    jpn: "図書館員",
    category: "名詞",
  },
  {
    eng: "rigid",
    jpn: "堅い",
    category: "形容詞",
  },
  {
    eng: "authorize",
    jpn: "許可する",
    category: "動詞",
  },
  {
    eng: "marvel",
    jpn: "驚異，驚き",
    category: "名詞",
  },
  {
    eng: "fling",
    jpn: "を投げ飛ばす",
    category: "動詞",
  },
  {
    eng: "transmission",
    jpn: "伝送",
    category: "名詞",
  },
  {
    eng: "peep",
    jpn: "のぞき見る",
    category: "動詞",
  },
  {
    eng: "endeavor",
    jpn: "努力する",
    category: "動詞",
  },
  {
    eng: "hang around",
    jpn: "うろつく，徘徊する",
    category: "熟語",
  },
  {
    eng: "physicist",
    jpn: "物理学者",
    category: "名詞",
  },
  {
    eng: "immature",
    jpn: "未熟な，未成熟の",
    category: "形容詞",
  },
  {
    eng: "outbreak",
    jpn: "突発，ぼっ発",
    category: "名詞",
  },
  {
    eng: "manuscript",
    jpn: "原稿",
    category: "名詞",
  },
  {
    eng: "stagger",
    jpn: "よろめく，よろよろ歩く",
    category: "動詞",
  },
  {
    eng: "slam",
    jpn: "強く閉める",
    category: "動詞",
  },
  {
    eng: "banish",
    jpn: "を流刑にする，追放する",
    category: "動詞",
  },
  {
    eng: "swamp",
    jpn: "沼地，湿地",
    category: "名詞",
  },
  {
    eng: "conform to",
    jpn: "に順応する，慣れる，適応する",
    category: "熟語",
  },
  {
    eng: "capability",
    jpn: "容量，能力",
    category: "名詞",
  },
  {
    eng: "molecule",
    jpn: "分子",
    category: "名詞",
  },
  {
    eng: "what if",
    jpn: "もし～ならば",
    category: "熟語",
  },
  {
    eng: "participation",
    jpn: "参加，加入",
    category: "名詞",
  },
  {
    eng: "faculty",
    jpn: "学部",
    category: "名詞",
  },
  {
    eng: "head off",
    jpn: "を回避する，阻止する",
    category: "熟語",
  },
  {
    eng: "courtesy",
    jpn: "礼儀，丁重さ",
    category: "名詞",
  },
  {
    eng: "midst",
    jpn: "真ん中，中央",
    category: "名詞",
  },
  {
    eng: "resent",
    jpn: "憤る，怒る",
    category: "動詞",
  },
  {
    eng: "undo",
    jpn: "元通りにする",
    category: "動詞",
  },
  {
    eng: "lad",
    jpn: "若者，少年",
    category: "名詞",
  },
  {
    eng: "loosen",
    jpn: "を緩める",
    category: "動詞",
  },
  {
    eng: "riddle",
    jpn: "なぞ",
    category: "名詞",
  },
  {
    eng: "corruption",
    jpn: "不正行為，腐敗",
    category: "名詞",
  },
  {
    eng: "extract",
    jpn: "抜き取る",
    category: "動詞",
  },
  {
    eng: "speaking of which",
    jpn: "と言えば，に関して",
    category: "熟語",
  },
  {
    eng: "unconscious",
    jpn: "無意識の，潜在意識の",
    category: "形容詞",
  },
  {
    eng: "rebuild",
    jpn: "を再建する，改築する",
    category: "動詞",
  },
  {
    eng: "by contract",
    jpn: "契約で，契約上の",
    category: "熟語",
  },
  {
    eng: "curse",
    jpn: "を呪う，悪口を言う",
    category: "動詞",
  },
  {
    eng: "prominence",
    jpn: "卓越、傑出",
    category: "名詞",
  },
  {
    eng: "fable",
    jpn: "作り話",
    category: "名詞",
  },
  {
    eng: "toxic to",
    jpn: "に有毒な，～に対して毒性を持つ",
    category: "熟語",
  },
  {
    eng: "bribe",
    jpn: "賄賂",
    category: "名詞",
  },
  {
    eng: "untidy",
    jpn: "だらしない，乱雑な",
    category: "形容詞",
  },
  {
    eng: "go against",
    jpn: "に反して，に逆らって，反対に",
    category: "熟語",
  },
  {
    eng: "transparent",
    jpn: "透明な，光を通す",
    category: "形容詞",
  },
  {
    eng: "roll up",
    jpn: "を巻き上げる，巻く",
    category: "熟語",
  },
  {
    eng: "almighty",
    jpn: "全能の",
    category: "形容詞",
  },
  {
    eng: "come down to",
    jpn: "結局～になる，に帰する",
    category: "熟語",
  },
  {
    eng: "successor",
    jpn: "後継，次代",
    category: "名詞",
  },
  {
    eng: "look to",
    jpn: "を頼りにする，信頼する",
    category: "熟語",
  },
  {
    eng: "hence",
    jpn: "したがって，結果として",
    category: "副詞",
  },
  {
    eng: "dizzy",
    jpn: "めまいがする，ふらふらする",
    category: "形容詞",
  },
  {
    eng: "stool",
    jpn: "腰かけ椅子",
    category: "名詞",
  },
  {
    eng: "mislead",
    jpn: "迷わせる",
    category: "動詞",
  },
  {
    eng: "adverb",
    jpn: "副詞",
    category: "名詞",
  },
  {
    eng: "as it stands",
    jpn: "現状では，現在のところ",
    category: "熟語",
  },
  {
    eng: "corrupt",
    jpn: "腐敗した",
    category: "形容詞",
  },
  {
    eng: "cross out",
    jpn: "線を引いて消す，を抹消する",
    category: "熟語",
  },
  {
    eng: "transformation",
    jpn: "変形，変身",
    category: "名詞",
  },
  {
    eng: "immortal",
    jpn: "不滅の，不死の",
    category: "形容詞",
  },
  {
    eng: "gem",
    jpn: "宝石",
    category: "名詞",
  },
  {
    eng: "mine",
    jpn: "鉱山，地雷",
    category: "名詞",
  },
  {
    eng: "pension",
    jpn: "年金",
    category: "名詞",
  },
  {
    eng: "comprehend",
    jpn: "理解する",
    category: "動詞",
  },
  {
    eng: "wrinkle",
    jpn: "しわ",
    category: "名詞",
  },
  {
    eng: "timid",
    jpn: "臆病な",
    category: "形容詞",
  },
  {
    eng: "examiner",
    jpn: "審査官，試験管",
    category: "名詞",
  },
  {
    eng: "buzz",
    jpn: "ざわめく",
    category: "動詞",
  },
  {
    eng: "infinite",
    jpn: "無限の，限りない",
    category: "形容詞",
  },
  {
    eng: "eternally",
    jpn: "永遠に",
    category: "副詞",
  },
  {
    eng: "live up to",
    jpn: "に従って動く，期待に答える",
    category: "熟語",
  },
  {
    eng: "beak",
    jpn: "くちばし",
    category: "名詞",
  },
  {
    eng: "muddy",
    jpn: "泥の，泥まみれの",
    category: "形容詞",
  },
  {
    eng: "idiom",
    jpn: "熟語",
    category: "名詞",
  },
  {
    eng: "interruption",
    jpn: "妨害，中断",
    category: "名詞",
  },
  {
    eng: "syllable",
    jpn: "音節",
    category: "名詞",
  },
  {
    eng: "revolve",
    jpn: "を回る，回転する",
    category: "動詞",
  },
  {
    eng: "premise",
    jpn: "前提，根拠",
    category: "名詞",
  },
  {
    eng: "controversy",
    jpn: "論争，議論",
    category: "名詞",
  },
  {
    eng: "delicately",
    jpn: "繊細に，微妙に",
    category: "副詞",
  },
  {
    eng: "accumulate",
    jpn: "蓄積する",
    category: "動詞",
  },
  {
    eng: "intellect",
    jpn: "知性，知力",
    category: "名詞",
  },
  {
    eng: "speak for",
    jpn: "を代弁する，の代理で話す，言い表す",
    category: "熟語",
  },
  {
    eng: "conception",
    jpn: "概念，考え",
    category: "名詞",
  },
  {
    eng: "rainfall",
    jpn: "降雨量，雨量",
    category: "名詞",
  },
  {
    eng: "framework",
    jpn: "骨格",
    category: "名詞",
  },
  {
    eng: "threaten with extinction",
    jpn: "絶滅の危機に瀕する",
    category: "熟語",
  },
  {
    eng: "realm",
    jpn: "領域",
    category: "名詞",
  },
  {
    eng: "convict",
    jpn: "有罪とする",
    category: "動詞",
  },
  {
    eng: "trivial",
    jpn: "取るに足らない",
    category: "形容詞",
  },
  {
    eng: "solemnly",
    jpn: "粛々と，厳粛に",
    category: "副詞",
  },
  {
    eng: "oval",
    jpn: "楕円形の，卵形の",
    category: "形容詞",
  },
  {
    eng: "orthodox",
    jpn: "正統派の",
    category: "形容詞",
  },
  {
    eng: "vowel",
    jpn: "母音",
    category: "名詞",
  },
  {
    eng: "mold",
    jpn: "鋳型，型造り/型どる",
    category: "動詞",
  },
  {
    eng: "exaggeration",
    jpn: "誇張",
    category: "名詞",
  },
  {
    eng: "sink in",
    jpn: "浸透する，理解される",
    category: "熟語",
  },
  {
    eng: "render",
    jpn: "与える",
    category: "動詞",
  },
  {
    eng: "nomination",
    jpn: "指名，任命",
    category: "名詞",
  },
  {
    eng: "warrant",
    jpn: "証明書，保証書",
    category: "名詞",
  },
  {
    eng: "maiden",
    jpn: "未婚の",
    category: "名詞",
  },
  {
    eng: "continental",
    jpn: "大陸の",
    category: "形容詞",
  },
  {
    eng: "murderer",
    jpn: "殺人者",
    category: "名詞",
  },
  {
    eng: "on the run",
    jpn: "逃げて，奔走して",
    category: "熟語",
  },
  {
    eng: "penniless",
    jpn: "無一文の",
    category: "形容詞",
  },
  {
    eng: "grammatical",
    jpn: "文法の",
    category: "形容詞",
  },
  {
    eng: "reassure",
    jpn: "安心させる",
    category: "動詞",
  },
  {
    eng: "paradox",
    jpn: "逆説",
    category: "名詞",
  },
  {
    eng: "hymn",
    jpn: "賛美歌",
    category: "名詞",
  },
  {
    eng: "dimension",
    jpn: "寸法",
    category: "名詞",
  },
  {
    eng: "put A to sleep",
    jpn: "Aを眠らせる，安楽死させる",
    category: "熟語",
  },
  {
    eng: "utmost",
    jpn: "最大限の，最高の",
    category: "形容詞",
  },
  {
    eng: "ascent",
    jpn: "上昇",
    category: "名詞",
  },
  {
    eng: "canyon",
    jpn: "峡谷",
    category: "名詞",
  },
  {
    eng: "bring on",
    jpn: "を引き起こす，を発生させる",
    category: "熟語",
  },
  {
    eng: "lift off",
    jpn: "離陸する，飛び立つ",
    category: "熟語",
  },
  {
    eng: "defy",
    jpn: "を無視する，に挑む",
    category: "動詞",
  },
  {
    eng: "prick",
    jpn: "をちくりと刺す",
    category: "動詞",
  },
  {
    eng: "brilliance",
    jpn: "明るさ，光沢",
    category: "名詞",
  },
  {
    eng: "sympathize",
    jpn: "同情する，共感する",
    category: "動詞",
  },
  {
    eng: "due to",
    jpn: "が原因で，によって",
    category: "熟語",
  },
  {
    eng: "precaution",
    jpn: "用心，予防策",
    category: "名詞",
  },
  {
    eng: "treasury",
    jpn: "宝庫，基金",
    category: "名詞",
  },
  {
    eng: "betrayal",
    jpn: "裏切り，密告",
    category: "名詞",
  },
  {
    eng: "roam",
    jpn: "歩き回る",
    category: "動詞",
  },
  {
    eng: "fortnight",
    jpn: "二週間",
    category: "名詞",
  },
  {
    eng: "stillness",
    jpn: "静寂，静けさ",
    category: "名詞",
  },
  {
    eng: "side job",
    jpn: "副業，アルバイト",
    category: "名詞",
  },
  {
    eng: "savage",
    jpn: "獰猛な",
    category: "形容詞",
  },
  {
    eng: "torture",
    jpn: "を拷問にかける",
    category: "動詞",
  },
  {
    eng: "lose out to",
    jpn: "に負ける，で死ぬ",
    category: "熟語",
  },
  {
    eng: "count on",
    jpn: "に頼る，を当てにする",
    category: "熟語",
  },
  {
    eng: "narrative",
    jpn: "物語，話",
    category: "名詞",
  },
  {
    eng: "in fact",
    jpn: "実際には, 実際",
    category: "熟語",
  },
  {
    eng: "scorn",
    jpn: "軽蔑，さげずみ",
    category: "名詞",
  },
  {
    eng: "orphan",
    jpn: "孤児",
    category: "名詞",
  },
  {
    eng: "smooth over",
    jpn: "丸く収める，穏便に済ます",
    category: "熟語",
  },
  {
    eng: "stability",
    jpn: "安定，平穏，均衡",
    category: "名詞",
  },
  {
    eng: "bacteria",
    jpn: "細菌",
    category: "名詞",
  },
  {
    eng: "parliamentary",
    jpn: "議会の",
    category: "形容詞",
  },
  {
    eng: "qualification",
    jpn: "資格，能力",
    category: "名詞",
  },
  {
    eng: "ape",
    jpn: "類人猿，大猿",
    category: "名詞",
  },
  {
    eng: "tenderness",
    jpn: "優しさ",
    category: "名詞",
  },
  {
    eng: "moderately",
    jpn: "適度に，適切に",
    category: "副詞",
  },
  {
    eng: "jolly",
    jpn: "陽気な，愉快な",
    category: "形容詞",
  },
  {
    eng: "persist",
    jpn: "固執する",
    category: "動詞",
  },
  {
    eng: "foster",
    jpn: "を養育する，の世話をする",
    category: "動詞",
  },
  {
    eng: "herb",
    jpn: "薬草",
    category: "名詞",
  },
  {
    eng: "nausea",
    jpn: "吐き気，嘔吐感",
    category: "名詞",
  },
  {
    eng: "stir up",
    jpn: "をかき混ぜる，刺激する",
    category: "熟語",
  },
  {
    eng: "fossil",
    jpn: "化石，遺跡",
    category: "名詞",
  },
  {
    eng: "make out",
    jpn: "理解する，うまくやる",
    category: "熟語",
  },
  {
    eng: "earnestly",
    jpn: "真剣に",
    category: "副詞",
  },
  {
    eng: "violation",
    jpn: "違反，侵害",
    category: "名詞",
  },
  {
    eng: "initiate",
    jpn: "始める，開始する",
    category: "動詞",
  },
  {
    eng: "cartoon",
    jpn: "漫画",
    category: "名詞",
  },
  {
    eng: "feeble",
    jpn: "弱った，虚弱な",
    category: "形容詞",
  },
  {
    eng: "compulsory",
    jpn: "強制的な",
    category: "形容詞",
  },
  {
    eng: "nuisance",
    jpn: "迷惑なもの",
    category: "名詞",
  },
  {
    eng: "disturbance",
    jpn: "騒動",
    category: "名詞",
  },
  {
    eng: "reside",
    jpn: "住む，居住する",
    category: "動詞",
  },
  {
    eng: "water vapor",
    jpn: "水蒸気，蒸気",
    category: "名詞",
  },
  {
    eng: "vigorous",
    jpn: "精力的な，元気な",
    category: "形容詞",
  },
  {
    eng: "contentment",
    jpn: "満足",
    category: "名詞",
  },
  {
    eng: "aim to",
    jpn: "するつもりである，意図する",
    category: "熟語",
  },
  {
    eng: "digestion",
    jpn: "消化",
    category: "名詞",
  },
  {
    eng: "irritating",
    jpn: "腹立たしい",
    category: "形容詞",
  },
  {
    eng: "hospitality",
    jpn: "おもてなし，歓待",
    category: "名詞",
  },
  {
    eng: "owing",
    jpn: "借りている，未払いの",
    category: "形容詞",
  },
  {
    eng: "astronomy",
    jpn: "天文学",
    category: "名詞",
  },
  {
    eng: "shut out",
    jpn: "を締め出す，閉め出す",
    category: "熟語",
  },
  {
    eng: "electron",
    jpn: "電子",
    category: "名詞",
  },
  {
    eng: "sit by",
    jpn: "傍観する，見守る",
    category: "熟語",
  },
  {
    eng: "tremble",
    jpn: "震える，おののく",
    category: "動詞",
  },
  {
    eng: "lest",
    jpn: "しないように",
    category: "その他",
  },
  {
    eng: "trade in",
    jpn: "を下取りに出す，下取りする",
    category: "熟語",
  },
  {
    eng: "stick with",
    jpn: "に固執する，堅持する",
    category: "熟語",
  },
  {
    eng: "imprison",
    jpn: "刑務所に入れる",
    category: "動詞",
  },
  {
    eng: "cemetery",
    jpn: "お墓，墓地",
    category: "名詞",
  },
  {
    eng: "blot",
    jpn: "しみ，汚れ",
    category: "名詞",
  },
  {
    eng: "nutrition",
    jpn: "栄養，栄養素",
    category: "名詞",
  },
  {
    eng: "graze",
    jpn: "軽く食べる",
    category: "動詞",
  },
  {
    eng: "gasp",
    jpn: "あえぎ",
    category: "動詞",
  },
  {
    eng: "revolt",
    jpn: "反乱/反抗する",
    category: "動詞",
  },
  {
    eng: "slavery",
    jpn: "奴隷制度",
    category: "名詞",
  },
  {
    eng: "strife",
    jpn: "闘争，争い",
    category: "名詞",
  },
  {
    eng: "show off",
    jpn: "見せびらかす",
    category: "熟語",
  },
  {
    eng: "fraction",
    jpn: "分数",
    category: "名詞",
  },
  {
    eng: "peril",
    jpn: "危険，危機",
    category: "名詞",
  },
  {
    eng: "reap",
    jpn: "を収穫する，刈る",
    category: "動詞",
  },
  {
    eng: "intermediate",
    jpn: "中間の",
    category: "形容詞",
  },
  {
    eng: "divine",
    jpn: "神の",
    category: "形容詞",
  },
  {
    eng: "secondhand",
    jpn: "中古の",
    category: "形容詞",
  },
  {
    eng: "bleach",
    jpn: "を漂白する",
    category: "動詞",
  },
  {
    eng: "public official",
    jpn: "公務員",
    category: "名詞",
  },
  {
    eng: "administrator",
    jpn: "管理者，行政官",
    category: "名詞",
  },
  {
    eng: "mingle",
    jpn: "を混ぜる，一緒にする",
    category: "動詞",
  },
  {
    eng: "seaweed",
    jpn: "海藻，海草",
    category: "名詞",
  },
  {
    eng: "admirable",
    jpn: "見事な，立派な",
    category: "形容詞",
  },
  {
    eng: "folly",
    jpn: "愚かさ，愚劣",
    category: "名詞",
  },
  {
    eng: "purity",
    jpn: "純粋",
    category: "名詞",
  },
  {
    eng: "habitual",
    jpn: "習慣的な，常習的な",
    category: "形容詞",
  },
  {
    eng: "lasting",
    jpn: "永続的な，長持ちする",
    category: "形容詞",
  },
  {
    eng: "broom",
    jpn: "ほうき",
    category: "名詞",
  },
  {
    eng: "dreadful",
    jpn: "恐ろしい",
    category: "形容詞",
  },
  {
    eng: "manly",
    jpn: "男らしい",
    category: "形容詞",
  },
  {
    eng: "salute",
    jpn: "に敬礼する",
    category: "動詞",
  },
  {
    eng: "a range of",
    jpn: "様々な，色々な",
    category: "熟語",
  },
  {
    eng: "lodging",
    jpn: "宿泊",
    category: "名詞",
  },
  {
    eng: "reign",
    jpn: "統治，治世",
    category: "名詞",
  },
  {
    eng: "vitality",
    jpn: "生命力，活気",
    category: "名詞",
  },
  {
    eng: "inclination",
    jpn: "傾斜",
    category: "名詞",
  },
  {
    eng: "obscure",
    jpn: "不明瞭な",
    category: "形容詞",
  },
  {
    eng: "insistent",
    jpn: "しつこい",
    category: "形容詞",
  },
  {
    eng: "inflict",
    jpn: "を与える，加える",
    category: "動詞",
  },
  {
    eng: "objection",
    jpn: "異議，反対",
    category: "名詞",
  },
  {
    eng: "gratitude",
    jpn: "感謝，謝意",
    category: "名詞",
  },
  {
    eng: "cordial",
    jpn: "心のこもった，本心からの",
    category: "形容詞",
  },
  {
    eng: "persuasion",
    jpn: "説得，口説き",
    category: "名詞",
  },
  {
    eng: "expressive",
    jpn: "表現力豊かな，表現に富む",
    category: "形容詞",
  },
  {
    eng: "sanitary",
    jpn: "衛生的な，公衆の",
    category: "形容詞",
  },
  {
    eng: "branch off",
    jpn: "分岐する，枝を広げる",
    category: "熟語",
  },
  {
    eng: "trifle",
    jpn: "ささいなこと",
    category: "名詞",
  },
  {
    eng: "intact",
    jpn: "そのままの，手をつけない",
    category: "形容詞",
  },
  {
    eng: "diploma",
    jpn: "卒業証書，学位証書",
    category: "名詞",
  },
  {
    eng: "dogmatic",
    jpn: "独断的な，教義上の",
    category: "形容詞",
  },
  {
    eng: "bellybutton",
    jpn: "へそ，へその緒がついていた傷痕",
    category: "名詞",
  },
  {
    eng: "patriot",
    jpn: "愛国者，愛国主義者",
    category: "名詞",
  },
  {
    eng: "fit in",
    jpn: "うまく馴染む，溶け込む",
    category: "熟語",
  },
  {
    eng: "comrade",
    jpn: "同志，仲間",
    category: "名詞",
  },
  {
    eng: "resistant",
    jpn: "抵抗する，反抗する",
    category: "形容詞",
  },
  {
    eng: "witty",
    jpn: "気の利いた",
    category: "形容詞",
  },
  {
    eng: "doctrine",
    jpn: "教義，信条",
    category: "名詞",
  },
  {
    eng: "threshold",
    jpn: "敷居，入り口",
    category: "名詞",
  },
  {
    eng: "pulse",
    jpn: "脈動，脈拍",
    category: "名詞",
  },
  {
    eng: "testify",
    jpn: "証言する",
    category: "動詞",
  },
  {
    eng: "utterance",
    jpn: "発言，発声",
    category: "名詞",
  },
  {
    eng: "improper",
    jpn: "不適切な，誤った",
    category: "形容詞",
  },
  {
    eng: "pastor",
    jpn: "牧師",
    category: "名詞",
  },
  {
    eng: "dual citizenship",
    jpn: "二重国籍，二重国籍者",
    category: "名詞",
  },
  {
    eng: "seasoning",
    jpn: "調味料，薬味",
    category: "名詞",
  },
  {
    eng: "lieutenant",
    jpn: "副官",
    category: "名詞",
  },
  {
    eng: "blunt",
    jpn: "鈍い",
    category: "形容詞",
  },
  {
    eng: "weird",
    jpn: "変な，気味の悪い",
    category: "形容詞",
  },
  {
    eng: "crude",
    jpn: "原油の，天然の",
    category: "形容詞",
  },
  {
    eng: "halve",
    jpn: "2等分する，半分に分ける",
    category: "動詞",
  },
  {
    eng: "diligence",
    jpn: "勤勉",
    category: "名詞",
  },
  {
    eng: "concession",
    jpn: "譲歩，容認",
    category: "名詞",
  },
  {
    eng: "subsidy",
    jpn: "補助金",
    category: "名詞",
  },
  {
    eng: "subsidiary",
    jpn: "子会社",
    category: "名詞",
  },
  {
    eng: "botanical",
    jpn: "植物の",
    category: "形容詞",
  },
  {
    eng: "domain",
    jpn: "領地",
    category: "名詞",
  },
  {
    eng: "confidential",
    jpn: "機密の，内々の",
    category: "形容詞",
  },
  {
    eng: "blast off",
    jpn: "発射される",
    category: "熟語",
  },
  {
    eng: "clutch",
    jpn: "をしっかり握る",
    category: "動詞",
  },
  {
    eng: "thrive",
    jpn: "繁栄する，隆盛する",
    category: "動詞",
  },
  {
    eng: "embark",
    jpn: "積み込む，乗船する",
    category: "動詞",
  },
  {
    eng: "queer",
    jpn: "風変わりな，変な",
    category: "形容詞",
  },
  {
    eng: "oppress",
    jpn: "を抑圧する，虐げる",
    category: "動詞",
  },
  {
    eng: "aide",
    jpn: "助力者",
    category: "名詞",
  },
  {
    eng: "conspiracy",
    jpn: "陰謀",
    category: "名詞",
  },
  {
    eng: "disarmament",
    jpn: "軍縮",
    category: "名詞",
  },
  {
    eng: "functional",
    jpn: "機能的な，機能上の",
    category: "形容詞",
  },
  {
    eng: "civic",
    jpn: "市民の",
    category: "形容詞",
  },
  {
    eng: "subtract",
    jpn: "差し引く",
    category: "動詞",
  },
  {
    eng: "fall away",
    jpn: "弱まる，落ちる",
    category: "熟語",
  },
  {
    eng: "harmonious",
    jpn: "調和のとれた",
    category: "形容詞",
  },
  {
    eng: "displace",
    jpn: "ずらす，にとって代わる",
    category: "動詞",
  },
  {
    eng: "vertical",
    jpn: "垂直の，縦の",
    category: "形容詞",
  },
  {
    eng: "administer",
    jpn: "を管理する，治める",
    category: "動詞",
  },
  {
    eng: "fury",
    jpn: "激怒",
    category: "名詞",
  },
  {
    eng: "prestige",
    jpn: "名声，評判",
    category: "名詞",
  },
  {
    eng: "at fault",
    jpn: "落ち度がある，咎められるべき",
    category: "熟語",
  },
  {
    eng: "comprise",
    jpn: "含む，構成する",
    category: "動詞",
  },
  {
    eng: "look into",
    jpn: "を調べる/調査",
    category: "熟語",
  },
  {
    eng: "kin",
    jpn: "親族，親類",
    category: "名詞",
  },
  {
    eng: "magnitude",
    jpn: "大きさ，規模",
    category: "名詞",
  },
  {
    eng: "perpetual",
    jpn: "永久の",
    category: "形容詞",
  },
  {
    eng: "limp",
    jpn: "のろのろ進む",
    category: "動詞",
  },
  {
    eng: "exclamation",
    jpn: "感嘆，叫び",
    category: "名詞",
  },
  {
    eng: "superstition",
    jpn: "迷信",
    category: "名詞",
  },
  {
    eng: "eccentric",
    jpn: "風変わりな，普通でない",
    category: "形容詞",
  },
  {
    eng: "twig",
    jpn: "小枝",
    category: "名詞",
  },
  {
    eng: "concise",
    jpn: "簡潔な",
    category: "形容詞",
  },
  {
    eng: "subscription",
    jpn: "購読，定期購読",
    category: "名詞",
  },
  {
    eng: "abusive",
    jpn: "虐待的な，乱用の",
    category: "形容詞",
  },
  {
    eng: "low frequency",
    jpn: "低周波，低頻度",
    category: "名詞",
  },
  {
    eng: "flattery",
    jpn: "お世辞，おべっか",
    category: "名詞",
  },
  {
    eng: "steadfast",
    jpn: "固定した，確固とした",
    category: "形容詞",
  },
  {
    eng: "elastic",
    jpn: "弾力のある，伸縮自在の",
    category: "形容詞",
  },
  {
    eng: "situate",
    jpn: "を置く，位置させる",
    category: "動詞",
  },
  {
    eng: "drop off",
    jpn: "落ちる，落とす",
    category: "熟語",
  },
  {
    eng: "tolerance",
    jpn: "寛容さ，忍耐力",
    category: "名詞",
  },
  {
    eng: "transmit A to B",
    jpn: "AをBに伝染させる，移す",
    category: "熟語",
  },
  {
    eng: "recite",
    jpn: "を朗読する，を暗唱する",
    category: "動詞",
  },
  {
    eng: "freight",
    jpn: "運賃，貨物運送",
    category: "名詞",
  },
  {
    eng: "out of question",
    jpn: "話にならない，不可能な",
    category: "熟語",
  },
  {
    eng: "slay",
    jpn: "を殺害する，計画的に殺す",
    category: "動詞",
  },
  {
    eng: "look down on",
    jpn: "を見下す，軽視する",
    category: "熟語",
  },
  {
    eng: "enrich",
    jpn: "豊かにする",
    category: "動詞",
  },
  {
    eng: "snore",
    jpn: "いびきをかく，睡眠中にうるさく呼吸する",
    category: "動詞",
  },
  {
    eng: "den",
    jpn: "ねぐら，巣穴",
    category: "名詞",
  },
  {
    eng: "tram",
    jpn: "市街電車，路面電車",
    category: "名詞",
  },
  {
    eng: "let up",
    jpn: "やめる，弱まる，止む",
    category: "熟語",
  },
  {
    eng: "profess",
    jpn: "を公言する，明言する",
    category: "動詞",
  },
  {
    eng: "thaw",
    jpn: "雪が解ける，雪解けの陽気になる",
    category: "動詞",
  },
  {
    eng: "coastal",
    jpn: "湾岸の，海岸の",
    category: "形容詞",
  },
  {
    eng: "grow into",
    jpn: "に発展する，進展する",
    category: "熟語",
  },
  {
    eng: "notable",
    jpn: "注目すべき，重要な",
    category: "形容詞",
  },
  {
    eng: "categorize A as B",
    jpn: "AをBの範疇に分ける，AをBとして分類する",
    category: "熟語",
  },
  {
    eng: "seam",
    jpn: "縫い目，継ぎ目",
    category: "名詞",
  },
  {
    eng: "come before",
    jpn: "の前に現れる，先立って現れる",
    category: "熟語",
  },
  {
    eng: "implore",
    jpn: "を懇願する",
    category: "動詞",
  },
  {
    eng: "pathetic",
    jpn: "哀れな",
    category: "形容詞",
  },
  {
    eng: "contend",
    jpn: "争う，戦う",
    category: "動詞",
  },
  {
    eng: "exile",
    jpn: "亡命，国外追放",
    category: "名詞",
  },
  {
    eng: "density",
    jpn: "密度，濃度",
    category: "名詞",
  },
  {
    eng: "inherent",
    jpn: "本来の，固有の",
    category: "形容詞",
  },
  {
    eng: "drive off",
    jpn: "を追い払う，排除する",
    category: "熟語",
  },
  {
    eng: "perplex",
    jpn: "を困らせる，混乱させる",
    category: "動詞",
  },
  {
    eng: "sly",
    jpn: "ずるい，陰険な",
    category: "形容詞",
  },
  {
    eng: "census",
    jpn: "国勢調査，人口調査",
    category: "名詞",
  },
  {
    eng: "stapler",
    jpn: "ホッチキス",
    category: "名詞",
  },
  {
    eng: "pave",
    jpn: "を舗装する",
    category: "動詞",
  },
  {
    eng: "edible",
    jpn: "食べられる，摂取可能な",
    category: "形容詞",
  },
  {
    eng: "shabby",
    jpn: "みすぼらしい",
    category: "形容詞",
  },
  {
    eng: "revelation",
    jpn: "啓示",
    category: "名詞",
  },
  {
    eng: "thereafter",
    jpn: "その後は",
    category: "副詞",
  },
  {
    eng: "punctuality",
    jpn: "時間厳守",
    category: "名詞",
  },
  {
    eng: "editorial",
    jpn: "編集の/社説",
    category: "名詞",
  },
  {
    eng: "up for",
    jpn: "に参加しようとしている，参画しようとしている",
    category: "熟語",
  },
  {
    eng: "merchandise",
    jpn: "商品",
    category: "名詞",
  },
  {
    eng: "pharmacist",
    jpn: "薬剤師",
    category: "名詞",
  },
  {
    eng: "yarn",
    jpn: "編み糸",
    category: "名詞",
  },
  {
    eng: "elevate",
    jpn: "上げる，昇進させる",
    category: "動詞",
  },
  {
    eng: "gargle",
    jpn: "うがいする",
    category: "動詞",
  },
  {
    eng: "exquisite",
    jpn: "絶妙な，見事な",
    category: "形容詞",
  },
  {
    eng: "experiment with",
    jpn: "を試す，実験する",
    category: "熟語",
  },
  {
    eng: "rebellious",
    jpn: "反抗的な，抵抗的な",
    category: "形容詞",
  },
  {
    eng: "detergent",
    jpn: "洗剤",
    category: "名詞",
  },
  {
    eng: "dividend",
    jpn: "配当，配当金",
    category: "名詞",
  },
  {
    eng: "preface",
    jpn: "まえがき，序文",
    category: "名詞",
  },
  {
    eng: "reinforce",
    jpn: "強化する",
    category: "動詞",
  },
  {
    eng: "conceptual",
    jpn: "概念的な，概念の",
    category: "形容詞",
  },
  {
    eng: "tumble",
    jpn: "転落する，倒れる",
    category: "動詞",
  },
  {
    eng: "no better than",
    jpn: "と変わらない，同じぐらい悪い",
    category: "熟語",
  },
  {
    eng: "contemplate",
    jpn: "を熟考する，よく考える",
    category: "動詞",
  },
  {
    eng: "devour",
    jpn: "をむさぼり食う，がつがつ食う",
    category: "動詞",
  },
  {
    eng: "traitor",
    jpn: "裏切り者，反逆者",
    category: "名詞",
  },
  {
    eng: "equator",
    jpn: "赤道，赤道線，赤道面",
    category: "名詞",
  },
  {
    eng: "set in",
    jpn: "始まる，起こる",
    category: "熟語",
  },
  {
    eng: "fiscal",
    jpn: "財政上の，国庫の",
    category: "形容詞",
  },
  {
    eng: "tan",
    jpn: "肌を焼く，日焼けする",
    category: "動詞",
  },
  {
    eng: "supervise",
    jpn: "監督する，管理する",
    category: "動詞",
  },
  {
    eng: "statistical",
    jpn: "統計的な",
    category: "形容詞",
  },
  {
    eng: "adore",
    jpn: "崇拝する，敬愛する",
    category: "動詞",
  },
  {
    eng: "point out",
    jpn: "を指摘する，指示する",
    category: "熟語",
  },
  {
    eng: "vein",
    jpn: "静脈",
    category: "名詞",
  },
  {
    eng: "directive",
    jpn: "指示的な",
    category: "形容詞",
  },
  {
    eng: "envelop",
    jpn: "包む，包装する",
    category: "動詞",
  },
  {
    eng: "diameter",
    jpn: "直径",
    category: "名詞",
  },
  {
    eng: "altar",
    jpn: "祭壇",
    category: "名詞",
  },
  {
    eng: "flap",
    jpn: "羽ばたく",
    category: "動詞",
  },
  {
    eng: "skim",
    jpn: "すくい取る",
    category: "動詞",
  },
  {
    eng: "profound",
    jpn: "深い，深遠な",
    category: "形容詞",
  },
  {
    eng: "altitude",
    jpn: "高度",
    category: "名詞",
  },
  {
    eng: "cripple",
    jpn: "身体障がい者",
    category: "名詞",
  },
  {
    eng: "vocation",
    jpn: "天職，職業",
    category: "名詞",
  },
  {
    eng: "omission",
    jpn: "省略",
    category: "名詞",
  },
  {
    eng: "sergeant",
    jpn: "軍曹",
    category: "名詞",
  },
  {
    eng: "dose",
    jpn: "服用量",
    category: "名詞",
  },
  {
    eng: "brochure",
    jpn: "小冊子",
    category: "名詞",
  },
  {
    eng: "refrain",
    jpn: "控える，慎む",
    category: "動詞",
  },
  {
    eng: "weigh on",
    jpn: "の重荷になる，負担になる，の負荷となる",
    category: "熟語",
  },
  {
    eng: "bias",
    jpn: "偏見，先入観",
    category: "名詞",
  },
  {
    eng: "satire",
    jpn: "風刺，皮肉",
    category: "名詞",
  },
  {
    eng: "simultaneous",
    jpn: "同時の，同時に起こる",
    category: "形容詞",
  },
  {
    eng: "conversion",
    jpn: "転換，変換",
    category: "名詞",
  },
  {
    eng: "kick off",
    jpn: "始める，追い払う",
    category: "熟語",
  },
  {
    eng: "steward",
    jpn: "給仕，執事",
    category: "名詞",
  },
  {
    eng: "crumb",
    jpn: "パンくず",
    category: "名詞",
  },
  {
    eng: "chip in",
    jpn: "寄付する，金を出す",
    category: "熟語",
  },
  {
    eng: "expertise",
    jpn: "専門知識",
    category: "名詞",
  },
  {
    eng: "allow for",
    jpn: "を考慮に入れる，余裕を持つ",
    category: "熟語",
  },
  {
    eng: "glare",
    jpn: "まぶしい光",
    category: "名詞",
  },
  {
    eng: "adoption",
    jpn: "採用，受け入れ",
    category: "名詞",
  },
  {
    eng: "disposal",
    jpn: "廃棄",
    category: "名詞",
  },
  {
    eng: "surpass",
    jpn: "超える，勝る",
    category: "動詞",
  },
  {
    eng: "repent",
    jpn: "を悔い改める，後悔する",
    category: "動詞",
  },
  {
    eng: "giggle",
    jpn: "くすくす笑う",
    category: "動詞",
  },
  {
    eng: "confirmation",
    jpn: "確証，確認",
    category: "名詞",
  },
  {
    eng: "humid",
    jpn: "湿っぽい、湿度の高い",
    category: "形容詞",
  },
  {
    eng: "saloon",
    jpn: "大広間",
    category: "名詞",
  },
  {
    eng: "dictate",
    jpn: "を書きとらせる",
    category: "動詞",
  },
  {
    eng: "wrap up",
    jpn: "纏める，結束する",
    category: "熟語",
  },
  {
    eng: "fright",
    jpn: "恐怖，驚き",
    category: "名詞",
  },
  {
    eng: "execution",
    jpn: "実行，遂行",
    category: "名詞",
  },
  {
    eng: "fall off",
    jpn: "減少する",
    category: "熟語",
  },
  {
    eng: "textile",
    jpn: "織物の",
    category: "形容詞",
  },
  {
    eng: "geographical",
    jpn: "地理的な",
    category: "形容詞",
  },
  {
    eng: "furious",
    jpn: "怒り狂った",
    category: "形容詞",
  },
  {
    eng: "dusk",
    jpn: "夕暮れ，たそがれ",
    category: "名詞",
  },
  {
    eng: "monarchy",
    jpn: "君主制",
    category: "名詞",
  },
  {
    eng: "greed",
    jpn: "貪欲，強欲",
    category: "名詞",
  },
  {
    eng: "melancholy",
    jpn: "憂うつ，哀愁",
    category: "名詞",
  },
  {
    eng: "tribute",
    jpn: "貢ぎ物，感謝",
    category: "名詞",
  },
  {
    eng: "tidal",
    jpn: "潮の，潮に乗った",
    category: "形容詞",
  },
  {
    eng: "shrub",
    jpn: "低木，かん木",
    category: "名詞",
  },
  {
    eng: "file a suit",
    jpn: "提訴する，訴訟を提出する",
    category: "熟語",
  },
  {
    eng: "texture",
    jpn: "生地",
    category: "名詞",
  },
  {
    eng: "just around the corner",
    jpn: "目前に来ている，間近である",
    category: "熟語",
  },
  {
    eng: "tedious",
    jpn: "退屈な",
    category: "形容詞",
  },
  {
    eng: "drastic",
    jpn: "抜本的な，思い切った",
    category: "形容詞",
  },
  {
    eng: "on standby",
    jpn: "待機して，キャンセル待ちをして",
    category: "熟語",
  },
  {
    eng: "take pride in",
    jpn: "を誇りにする，自慢する",
    category: "熟語",
  },
  {
    eng: "bureaucracy",
    jpn: "官僚，官僚制度",
    category: "名詞",
  },
  {
    eng: "swarm",
    jpn: "群れ",
    category: "名詞",
  },
  {
    eng: "feverish",
    jpn: "熱っぽい",
    category: "形容詞",
  },
  {
    eng: "prophet",
    jpn: "預言者",
    category: "名詞",
  },
  {
    eng: "spur",
    jpn: "刺激",
    category: "名詞",
  },
  {
    eng: "petition",
    jpn: "嘆願，請願",
    category: "名詞",
  },
  {
    eng: "contradict",
    jpn: "を否定する，矛盾する",
    category: "動詞",
  },
  {
    eng: "stick to",
    jpn: "にくっつく，接着する",
    category: "熟語",
  },
  {
    eng: "pottery",
    jpn: "陶器",
    category: "名詞",
  },
  {
    eng: "pitiful",
    jpn: "哀れな，かわいそうな",
    category: "形容詞",
  },
  {
    eng: "delegate",
    jpn: "委任する",
    category: "動詞",
  },
  {
    eng: "thigh",
    jpn: "ふともも",
    category: "名詞",
  },
  {
    eng: "make it",
    jpn: "やり遂げる，たどり着く",
    category: "熟語",
  },
  {
    eng: "confide",
    jpn: "を打ち明ける，信用する",
    category: "動詞",
  },
  {
    eng: "easygoing",
    jpn: "楽観的な",
    category: "形容詞",
  },
  {
    eng: "walk off with",
    jpn: "から歩いて出る，立ち去る",
    category: "熟語",
  },
  {
    eng: "differentiate",
    jpn: "を区別する",
    category: "動詞",
  },
  {
    eng: "eyelid",
    jpn: "まぶた",
    category: "名詞",
  },
  {
    eng: "furnace",
    jpn: "かまど，暖炉",
    category: "名詞",
  },
  {
    eng: "get into",
    jpn: "に入り込む，合格する",
    category: "熟語",
  },
  {
    eng: "disastrous",
    jpn: "悲惨な，惨事の",
    category: "形容詞",
  },
  {
    eng: "unanimous",
    jpn: "満場一致の，同意見の",
    category: "形容詞",
  },
  {
    eng: "deficiency",
    jpn: "不足，欠乏",
    category: "名詞",
  },
  {
    eng: "distract",
    jpn: "気を散らす，気をそらす",
    category: "動詞",
  },
  {
    eng: "discomfort",
    jpn: "不快感，違和感",
    category: "名詞",
  },
  {
    eng: "zeal",
    jpn: "熱心，熱意",
    category: "名詞",
  },
  {
    eng: "stab",
    jpn: "刺す，突き刺す",
    category: "動詞",
  },
  {
    eng: "grant A to B",
    jpn: "BにAを供与する，BにAを提供する",
    category: "熟語",
  },
  {
    eng: "arouse",
    jpn: "を起こす，喚起する",
    category: "動詞",
  },
  {
    eng: "on the rise",
    jpn: "上昇中で，増加中",
    category: "熟語",
  },
  {
    eng: "arrogant",
    jpn: "傲慢な，横柄な",
    category: "形容詞",
  },
  {
    eng: "quaint",
    jpn: "趣のある",
    category: "形容詞",
  },
  {
    eng: "pluck",
    jpn: "を引き抜く，摘む",
    category: "動詞",
  },
  {
    eng: "sublime",
    jpn: "高尚な，気品のある",
    category: "形容詞",
  },
  {
    eng: "adorn",
    jpn: "を飾る",
    category: "動詞",
  },
  {
    eng: "trustee",
    jpn: "受託者，保管人",
    category: "名詞",
  },
  {
    eng: "bring A in",
    jpn: "Aを持ち込む，持参する",
    category: "熟語",
  },
  {
    eng: "in danger of",
    jpn: "の危険にさらされている，危険に直面している",
    category: "熟語",
  },
  {
    eng: "indicator",
    jpn: "指示者",
    category: "名詞",
  },
  {
    eng: "merciful",
    jpn: "慈悲深い",
    category: "形容詞",
  },
  {
    eng: "outfit",
    jpn: "衣装",
    category: "名詞",
  },
  {
    eng: "forum",
    jpn: "公開討論会",
    category: "名詞",
  },
  {
    eng: "projection",
    jpn: "投影",
    category: "名詞",
  },
  {
    eng: "desolate",
    jpn: "荒れ果てた",
    category: "形容詞",
  },
  {
    eng: "bimonthly",
    jpn: "隔月の",
    category: "形容詞",
  },
  {
    eng: "along with",
    jpn: "に沿って",
    category: "熟語",
  },
  {
    eng: "wither",
    jpn: "枯れる，しおれる",
    category: "動詞",
  },
  {
    eng: "enchant",
    jpn: "心を奪う",
    category: "動詞",
  },
  {
    eng: "anonymous",
    jpn: "匿名の，不明の",
    category: "形容詞",
  },
  {
    eng: "dismissal",
    jpn: "解散，解任",
    category: "名詞",
  },
  {
    eng: "liability",
    jpn: "責任，責務，義務",
    category: "名詞",
  },
  {
    eng: "eloquent",
    jpn: "雄弁な，口達者な",
    category: "形容詞",
  },
  {
    eng: "meditate",
    jpn: "瞑想する，熟考する",
    category: "動詞",
  },
  {
    eng: "vapor",
    jpn: "蒸気，水蒸気",
    category: "名詞",
  },
  {
    eng: "fingerprint",
    jpn: "指紋",
    category: "名詞",
  },
  {
    eng: "prove",
    jpn: "を証明する",
    category: "動詞",
  },
  {
    eng: "reconcile",
    jpn: "仲直りさせる",
    category: "動詞",
  },
  {
    eng: "submarine",
    jpn: "潜水艦，水中艇",
    category: "名詞",
  },
  {
    eng: "crust",
    jpn: "外皮",
    category: "名詞",
  },
  {
    eng: "dazzle",
    jpn: "まぶしくする，目をくらませる",
    category: "動詞",
  },
  {
    eng: "regardless of",
    jpn: "にも関わらず，それにも関わらず",
    category: "熟語",
  },
  {
    eng: "supernatural",
    jpn: "超自然的な",
    category: "形容詞",
  },
  {
    eng: "expend",
    jpn: "費やす，消費する",
    category: "動詞",
  },
  {
    eng: "pronoun",
    jpn: "代名詞",
    category: "名詞",
  },
  {
    eng: "respectively",
    jpn: "それぞれ，別々に",
    category: "副詞",
  },
  {
    eng: "presume",
    jpn: "を推定する，仮定する",
    category: "動詞",
  },
  {
    eng: "lament",
    jpn: "を嘆く，嘆き悲しむ",
    category: "動詞",
  },
  {
    eng: "bestow",
    jpn: "を授ける，与える",
    category: "動詞",
  },
  {
    eng: "wreck",
    jpn: "難破，衝突",
    category: "名詞",
  },
  {
    eng: "to the point",
    jpn: "適切な，要領を得た",
    category: "熟語",
  },
  {
    eng: "disciple",
    jpn: "弟子",
    category: "名詞",
  },
  {
    eng: "ballot",
    jpn: "投票用紙，選挙票",
    category: "名詞",
  },
  {
    eng: "timber",
    jpn: "木材",
    category: "名詞",
  },
  {
    eng: "haul",
    jpn: "を運搬する，引っ張る",
    category: "動詞",
  },
  {
    eng: "frightful",
    jpn: "恐ろしい",
    category: "形容詞",
  },
  {
    eng: "disgusted",
    jpn: "むかついた",
    category: "形容詞",
  },
  {
    eng: "excel",
    jpn: "勝る，優れる，上回る",
    category: "動詞",
  },
  {
    eng: "ranch",
    jpn: "牧場",
    category: "名詞",
  },
  {
    eng: "appetizer",
    jpn: "前菜",
    category: "名詞",
  },
  {
    eng: "back up",
    jpn: "を後援する，後退させる",
    category: "熟語",
  },
  {
    eng: "eminent",
    jpn: "著名な，身分の高い",
    category: "形容詞",
  },
  {
    eng: "compensate",
    jpn: "補償する，償う",
    category: "動詞",
  },
  {
    eng: "exert",
    jpn: "行使する",
    category: "動詞",
  },
  {
    eng: "mortality",
    jpn: "死亡者数，死亡率",
    category: "名詞",
  },
  {
    eng: "discouragement",
    jpn: "落胆，失意",
    category: "名詞",
  },
  {
    eng: "folklore",
    jpn: "民話",
    category: "名詞",
  },
  {
    eng: "riot",
    jpn: "暴動，騒動",
    category: "名詞",
  },
  {
    eng: "glacier",
    jpn: "氷河，ゆっくりと動く氷塊",
    category: "名詞",
  },
  {
    eng: "bliss",
    jpn: "至福，極楽",
    category: "名詞",
  },
  {
    eng: "concede",
    jpn: "認める，譲歩する",
    category: "動詞",
  },
  {
    eng: "outgoing",
    jpn: "社交的な，外交的な",
    category: "形容詞",
  },
  {
    eng: "wreath",
    jpn: "花輪，花冠",
    category: "名詞",
  },
  {
    eng: "strand",
    jpn: "行き詰らせる，座礁させる",
    category: "動詞",
  },
  {
    eng: "latitude",
    jpn: "緯度，緯線",
    category: "名詞",
  },
  {
    eng: "role model",
    jpn: "お手本，模範",
    category: "熟語",
  },
  {
    eng: "hold over",
    jpn: "を持ち越す，延期する",
    category: "熟語",
  },
  {
    eng: "pile up",
    jpn: "を積み上げる，積み重ねる，山積みにする，集積する",
    category: "熟語",
  },
  {
    eng: "insane",
    jpn: "正気でない，狂気の",
    category: "形容詞",
  },
  {
    eng: "outrage",
    jpn: "乱暴，暴行",
    category: "名詞",
  },
  {
    eng: "souvenir",
    jpn: "お土産",
    category: "名詞",
  },
  {
    eng: "scratch out",
    jpn: "線を引いて消す，を抹消する",
    category: "熟語",
  },
  {
    eng: "incentive",
    jpn: "動機",
    category: "名詞",
  },
  {
    eng: "be aimed at",
    jpn: "を狙っている，が意図されている",
    category: "熟語",
  },
  {
    eng: "imprisonment",
    jpn: "投獄，監禁",
    category: "名詞",
  },
  {
    eng: "give in",
    jpn: "降伏する，投降する",
    category: "熟語",
  },
  {
    eng: "predecessor",
    jpn: "前任者，先任者",
    category: "名詞",
  },
  {
    eng: "oath",
    jpn: "誓い，誓約",
    category: "名詞",
  },
  {
    eng: "in advance",
    jpn: "前もって，事前に",
    category: "熟語",
  },
  {
    eng: "applicable",
    jpn: "該当する",
    category: "形容詞",
  },
  {
    eng: "discard",
    jpn: "を捨てる，廃棄する",
    category: "動詞",
  },
  {
    eng: "rustle",
    jpn: "ざわめく",
    category: "動詞",
  },
  {
    eng: "pay off",
    jpn: "全部払う，完済する",
    category: "熟語",
  },
  {
    eng: "stiffen",
    jpn: "を堅くする，硬化する",
    category: "動詞",
  },
  {
    eng: "dictation",
    jpn: "書き取り",
    category: "名詞",
  },
  {
    eng: "theoretical",
    jpn: "理論上の，理論に基づいた",
    category: "形容詞",
  },
  {
    eng: "abbreviation",
    jpn: "省略，略語",
    category: "名詞",
  },
  {
    eng: "menace",
    jpn: "脅威",
    category: "名詞",
  },
  {
    eng: "bait",
    jpn: "えさ",
    category: "名詞",
  },
  {
    eng: "complement",
    jpn: "補足物",
    category: "名詞",
  },
  {
    eng: "with all",
    jpn: "にも関わらず，全力でも",
    category: "熟語",
  },
  {
    eng: "constitutional",
    jpn: "構成上の",
    category: "形容詞",
  },
  {
    eng: "algebra",
    jpn: "代数",
    category: "名詞",
  },
  {
    eng: "citizenship",
    jpn: "市民権，公民権",
    category: "名詞",
  },
  {
    eng: "confer",
    jpn: "授与する",
    category: "動詞",
  },
  {
    eng: "splendor",
    jpn: "輝き",
    category: "名詞",
  },
  {
    eng: "subsequent",
    jpn: "その後の",
    category: "形容詞",
  },
  {
    eng: "temperate",
    jpn: "控えめな，節度のある",
    category: "形容詞",
  },
  {
    eng: "slip by",
    jpn: "そっと通り過ぎる，静かに通過する",
    category: "熟語",
  },
  {
    eng: "apprentice",
    jpn: "見習い",
    category: "名詞",
  },
  {
    eng: "get away with",
    jpn: "を持ち逃げする，盗み出す",
    category: "熟語",
  },
  {
    eng: "stay off",
    jpn: "から離れる，距離を取る",
    category: "熟語",
  },
  {
    eng: "lapse",
    jpn: "間違い",
    category: "名詞",
  },
  {
    eng: "formidable",
    jpn: "恐ろしい，手ごわい",
    category: "形容詞",
  },
  {
    eng: "deem",
    jpn: "考える",
    category: "動詞",
  },
  {
    eng: "roundabout",
    jpn: "迂回の，遠回りの",
    category: "形容詞",
  },
  {
    eng: "partake",
    jpn: "参加する",
    category: "動詞",
  },
  {
    eng: "all the time",
    jpn: "いつも，いつでも",
    category: "熟語",
  },
  {
    eng: "avail",
    jpn: "利用する",
    category: "動詞",
  },
  {
    eng: "slumber",
    jpn: "まどろむ，心地よく眠る",
    category: "動詞",
  },
  {
    eng: "withstand",
    jpn: "耐える",
    category: "動詞",
  },
  {
    eng: "legitimate",
    jpn: "正当な",
    category: "形容詞",
  },
  {
    eng: "drop back",
    jpn: "後退する，後ろに下がる",
    category: "熟語",
  },
  {
    eng: "toll",
    jpn: "料金",
    category: "名詞",
  },
  {
    eng: "distort",
    jpn: "歪める",
    category: "動詞",
  },
  {
    eng: "tyranny",
    jpn: "専制政治，圧政",
    category: "名詞",
  },
  {
    eng: "marshal",
    jpn: "元帥",
    category: "名詞",
  },
  {
    eng: "eyelash",
    jpn: "まつげ",
    category: "名詞",
  },
  {
    eng: "messy",
    jpn: "乱雑な",
    category: "形容詞",
  },
  {
    eng: "sip",
    jpn: "一口飲む",
    category: "動詞",
  },
  {
    eng: "bosom",
    jpn: "乳房，胸",
    category: "名詞",
  },
  {
    eng: "preside",
    jpn: "主宰する，司会する",
    category: "動詞",
  },
  {
    eng: "eyesight",
    jpn: "視界，視野，視力",
    category: "名詞",
  },
  {
    eng: "rug",
    jpn: "じゅうたん，敷き物",
    category: "名詞",
  },
  {
    eng: "beware",
    jpn: "用心する，気を付ける",
    category: "動詞",
  },
  {
    eng: "reckon",
    jpn: "を数える，計算する",
    category: "動詞",
  },
  {
    eng: "suppression",
    jpn: "抑制，鎮圧",
    category: "名詞",
  },
  {
    eng: "come to a head",
    jpn: "山場を迎える，クライマックスを迎える",
    category: "熟語",
  },
  {
    eng: "pedestrian",
    jpn: "歩行者",
    category: "名詞",
  },
  {
    eng: "stout",
    jpn: "頑丈な，太った",
    category: "形容詞",
  },
  {
    eng: "down payment",
    jpn: "頭金，手付金",
    category: "名詞",
  },
  {
    eng: "contractor",
    jpn: "請負業者，契約者",
    category: "名詞",
  },
  {
    eng: "planetary",
    jpn: "惑星の",
    category: "形容詞",
  },
  {
    eng: "approximate",
    jpn: "およその",
    category: "形容詞",
  },
  {
    eng: "leftover",
    jpn: "残り物，食べ残し",
    category: "名詞",
  },
  {
    eng: "formulate",
    jpn: "策定する，計画する",
    category: "動詞",
  },
  {
    eng: "slant",
    jpn: "傾斜/傾く",
    category: "名詞",
  },
  {
    eng: "play at",
    jpn: "起用する，遊ぶ",
    category: "熟語",
  },
  {
    eng: "municipal",
    jpn: "市政の，地方自治の",
    category: "形容詞",
  },
  {
    eng: "vulgar",
    jpn: "下品な",
    category: "形容詞",
  },
  {
    eng: "precision",
    jpn: "正確さ，精度",
    category: "名詞",
  },
  {
    eng: "thesis",
    jpn: "論文，論題",
    category: "名詞",
  },
  {
    eng: "drowsy",
    jpn: "眠い，うとうとしている",
    category: "形容詞",
  },
  {
    eng: "picturesque",
    jpn: "絵のような，絵の様に美しい",
    category: "形容詞",
  },
  {
    eng: "dutiful",
    jpn: "忠実な，従順な",
    category: "形容詞",
  },
  {
    eng: "cherish",
    jpn: "大切にする，希望を抱く",
    category: "動詞",
  },
  {
    eng: "drop by",
    jpn: "ちょっと立ち寄る, 立ち寄る",
    category: "熟語",
  },
  {
    eng: "supplier",
    jpn: "供給者，供給元，仕入先",
    category: "名詞",
  },
  {
    eng: "precede",
    jpn: "先行する",
    category: "動詞",
  },
  {
    eng: "subdue",
    jpn: "鎮圧する，抑制する",
    category: "動詞",
  },
  {
    eng: "in excess",
    jpn: "過度に，余分に",
    category: "熟語",
  },
  {
    eng: "decisive",
    jpn: "決定的な，結論的な",
    category: "形容詞",
  },
  {
    eng: "barbarian",
    jpn: "野蛮人，未開の人々",
    category: "名詞",
  },
  {
    eng: "superb",
    jpn: "見事な，立派な",
    category: "形容詞",
  },
  {
    eng: "enforce",
    jpn: "を実行する，実施する",
    category: "動詞",
  },
  {
    eng: "linguistic",
    jpn: "言語学の，言語の",
    category: "形容詞",
  },
  {
    eng: "vacancy",
    jpn: "空っぽ，空いた場所",
    category: "名詞",
  },
  {
    eng: "forceful",
    jpn: "力強い，強い",
    category: "形容詞",
  },
  {
    eng: "dismal",
    jpn: "陰気な，暗い",
    category: "形容詞",
  },
  {
    eng: "sullen",
    jpn: "不機嫌な，不機嫌そうな",
    category: "形容詞",
  },
  {
    eng: "proverb",
    jpn: "ことわざ，格言",
    category: "名詞",
  },
  {
    eng: "force down",
    jpn: "を無理やり飲み込む，強いて飲み込む，無理に飲み込む",
    category: "熟語",
  },
  {
    eng: "prop",
    jpn: "支柱，支え",
    category: "名詞",
  },
  {
    eng: "evenly",
    jpn: "均等に，等しく",
    category: "副詞",
  },
  {
    eng: "forsake",
    jpn: "を見捨てる，突き放す",
    category: "動詞",
  },
  {
    eng: "fraud",
    jpn: "詐欺，ごまかし",
    category: "名詞",
  },
  {
    eng: "abandonment",
    jpn: "放棄，遺棄",
    category: "名詞",
  },
  {
    eng: "itch",
    jpn: "かゆみ，そう痒",
    category: "名詞",
  },
  {
    eng: "plaster",
    jpn: "石膏，ギプス",
    category: "名詞",
  },
  {
    eng: "foresee",
    jpn: "予見する，予測する",
    category: "動詞",
  },
  {
    eng: "handout",
    jpn: "配布物",
    category: "名詞",
  },
  {
    eng: "doom",
    jpn: "破滅，悪い運命",
    category: "名詞",
  },
  {
    eng: "dispatch",
    jpn: "を送る，発送する",
    category: "動詞",
  },
  {
    eng: "mercury",
    jpn: "水星，水星の",
    category: "名詞",
  },
  {
    eng: "eventual",
    jpn: "最終的な，究極的な",
    category: "形容詞",
  },
  {
    eng: "paralyze",
    jpn: "麻痺させる",
    category: "動詞",
  },
  {
    eng: "rot",
    jpn: "腐敗する，腐る",
    category: "動詞",
  },
  {
    eng: "revoke",
    jpn: "取り消す，無効にする",
    category: "動詞",
  },
  {
    eng: "toil",
    jpn: "苦労して働く，懸命に働く",
    category: "動詞",
  },
  {
    eng: "allege",
    jpn: "を申し立てる，主張する",
    category: "動詞",
  },
  {
    eng: "occurrence",
    jpn: "発生",
    category: "名詞",
  },
  {
    eng: "landlord",
    jpn: "家主",
    category: "名詞",
  },
  {
    eng: "lavatory",
    jpn: "洗面所",
    category: "名詞",
  },
  {
    eng: "rein",
    jpn: "手綱，馬具",
    category: "名詞",
  },
  {
    eng: "scornful",
    jpn: "さげずんだ，軽蔑する",
    category: "形容詞",
  },
  {
    eng: "tranquil",
    jpn: "静かな，平穏な",
    category: "形容詞",
  },
  {
    eng: "rotten",
    jpn: "腐った，腐敗した",
    category: "形容詞",
  },
  {
    eng: "flush",
    jpn: "流す",
    category: "動詞",
  },
  {
    eng: "take on",
    jpn: "を雇う，引き受ける，採用する",
    category: "熟語",
  },
  {
    eng: "polar",
    jpn: "極地の",
    category: "形容詞",
  },
  {
    eng: "raid",
    jpn: "襲撃",
    category: "名詞",
  },
  {
    eng: "fiery",
    jpn: "燃え立つような",
    category: "形容詞",
  },
  {
    eng: "gracious",
    jpn: "優雅な",
    category: "形容詞",
  },
  {
    eng: "surplus",
    jpn: "余剰，余り",
    category: "名詞",
  },
  {
    eng: "sort out",
    jpn: "分類する，改善する",
    category: "熟語",
  },
  {
    eng: "foggy",
    jpn: "霧のかかった",
    category: "形容詞",
  },
  {
    eng: "prospective",
    jpn: "予測される，期待される",
    category: "形容詞",
  },
  {
    eng: "legislative",
    jpn: "立法上の",
    category: "形容詞",
  },
  {
    eng: "duration",
    jpn: "持続時間，持続期間",
    category: "名詞",
  },
  {
    eng: "admiral",
    jpn: "提督，司令官",
    category: "名詞",
  },
  {
    eng: "plumber",
    jpn: "配管工",
    category: "名詞",
  },
  {
    eng: "shriek",
    jpn: "悲鳴を上げる/悲鳴",
    category: "動詞",
  },
  {
    eng: "carry through",
    jpn: "やり通す，達成する",
    category: "熟語",
  },
  {
    eng: "sell out",
    jpn: "売りつくす，売却する",
    category: "熟語",
  },
  {
    eng: "snare",
    jpn: "わな",
    category: "名詞",
  },
  {
    eng: "rhetoric",
    jpn: "美辞麗句",
    category: "名詞",
  },
  {
    eng: "optimism",
    jpn: "楽観主義",
    category: "名詞",
  },
  {
    eng: "scheme",
    jpn: "計画，案",
    category: "名詞",
  },
  {
    eng: "stagnant",
    jpn: "停滞している",
    category: "形容詞",
  },
  {
    eng: "abolition",
    jpn: "廃止，撤廃",
    category: "名詞",
  },
  {
    eng: "forthcoming",
    jpn: "今後の",
    category: "形容詞",
  },
  {
    eng: "sane",
    jpn: "正気の，気の確かな",
    category: "形容詞",
  },
  {
    eng: "clumsy",
    jpn: "不器用な，ぎこちない",
    category: "形容詞",
  },
  {
    eng: "hydrogen",
    jpn: "水素",
    category: "名詞",
  },
  {
    eng: "friction",
    jpn: "摩擦，不和",
    category: "名詞",
  },
  {
    eng: "pouch",
    jpn: "小袋",
    category: "名詞",
  },
  {
    eng: "epoch",
    jpn: "時代，歴史の節目",
    category: "名詞",
  },
  {
    eng: "supreme",
    jpn: "最高の，至高の",
    category: "形容詞",
  },
  {
    eng: "tariff",
    jpn: "関税",
    category: "名詞",
  },
  {
    eng: "growl",
    jpn: "うなり声",
    category: "動詞",
  },
  {
    eng: "collision",
    jpn: "衝突，対立",
    category: "名詞",
  },
  {
    eng: "despite",
    jpn: "にも関わらず，けれども",
    category: "その他",
  },
  {
    eng: "reptile",
    jpn: "爬虫類",
    category: "名詞",
  },
  {
    eng: "refinement",
    jpn: "精製，精錬",
    category: "名詞",
  },
  {
    eng: "in person",
    jpn: "直接に，対面で",
    category: "熟語",
  },
  {
    eng: "conform",
    jpn: "従う",
    category: "動詞",
  },
  {
    eng: "stick up for",
    jpn: "を支持する，を弁護する，を擁護する",
    category: "熟語",
  },
  {
    eng: "amend",
    jpn: "を修正する，改良する",
    category: "動詞",
  },
  {
    eng: "gratify",
    jpn: "を満足させる",
    category: "動詞",
  },
  {
    eng: "utensil",
    jpn: "用具，器具",
    category: "名詞",
  },
  {
    eng: "colonel",
    jpn: "大佐",
    category: "名詞",
  },
  {
    eng: "marsh",
    jpn: "沼地，湿地",
    category: "名詞",
  },
  {
    eng: "furnished",
    jpn: "家具付きの",
    category: "形容詞",
  },
  {
    eng: "malice",
    jpn: "悪意，敵意",
    category: "名詞",
  },
  {
    eng: "hatch",
    jpn: "ふ化する",
    category: "動詞",
  },
  {
    eng: "peninsula",
    jpn: "半島",
    category: "名詞",
  },
  {
    eng: "hypothesis",
    jpn: "仮説，推論",
    category: "名詞",
  },
  {
    eng: "scanty",
    jpn: "乏しい，不十分な",
    category: "形容詞",
  },
  {
    eng: "donate",
    jpn: "を寄付する，を寄贈する",
    category: "動詞",
  },
  {
    eng: "coffin",
    jpn: "棺桶",
    category: "名詞",
  },
  {
    eng: "let out",
    jpn: "外に出す，解放する",
    category: "熟語",
  },
  {
    eng: "get in on",
    jpn: "加わる，乗り込む",
    category: "熟語",
  },
  {
    eng: "geology",
    jpn: "地質学",
    category: "名詞",
  },
  {
    eng: "boastful",
    jpn: "自慢の，高慢な",
    category: "形容詞",
  },
  {
    eng: "in order",
    jpn: "順序通りに，整った",
    category: "熟語",
  },
  {
    eng: "believe in",
    jpn: "を信じる，を信用する",
    category: "熟語",
  },
  {
    eng: "ridicule",
    jpn: "あざ笑う，嘲笑する",
    category: "動詞",
  },
  {
    eng: "forefather",
    jpn: "先祖，祖先",
    category: "名詞",
  },
  {
    eng: "stand up to",
    jpn: "に抵抗する，耐える，反抗する",
    category: "熟語",
  },
  {
    eng: "submission",
    jpn: "提出，降伏",
    category: "名詞",
  },
  {
    eng: "sermon",
    jpn: "説教，説法",
    category: "名詞",
  },
  {
    eng: "beverage",
    jpn: "飲料",
    category: "名詞",
  },
  {
    eng: "pebble",
    jpn: "小石，石ころ",
    category: "名詞",
  },
  {
    eng: "prescribe",
    jpn: "処方する，指示する",
    category: "動詞",
  },
  {
    eng: "disappearance",
    jpn: "失踪，消滅",
    category: "名詞",
  },
  {
    eng: "kernel",
    jpn: "核心",
    category: "名詞",
  },
  {
    eng: "reproach",
    jpn: "叱責/をしかる",
    category: "名詞",
  },
  {
    eng: "give over",
    jpn: "を任せる，委ねる",
    category: "熟語",
  },
  {
    eng: "brisk",
    jpn: "活発な，元気の良い",
    category: "形容詞",
  },
  {
    eng: "tell on",
    jpn: "言いつける，密告する",
    category: "熟語",
  },
  {
    eng: "heed",
    jpn: "注意する，気を付ける",
    category: "動詞",
  },
  {
    eng: "emission",
    jpn: "排出，放射",
    category: "名詞",
  },
  {
    eng: "skinny",
    jpn: "やせこけた",
    category: "形容詞",
  },
  {
    eng: "mediator",
    jpn: "調停者，仲裁者",
    category: "名詞",
  },
  {
    eng: "presumably",
    jpn: "たぶん，おそらく",
    category: "副詞",
  },
  {
    eng: "be laid up",
    jpn: "寝込む，寝たきりになる，病床にある",
    category: "熟語",
  },
  {
    eng: "specimen",
    jpn: "検体，見本",
    category: "名詞",
  },
  {
    eng: "suspension",
    jpn: "停止",
    category: "名詞",
  },
  {
    eng: "diagnosis",
    jpn: "診断，判断",
    category: "名詞",
  },
  {
    eng: "catch on",
    jpn: "流行する，受け入れられる",
    category: "熟語",
  },
  {
    eng: "hazard",
    jpn: "危険",
    category: "名詞",
  },
  {
    eng: "rake",
    jpn: "くま手",
    category: "名詞",
  },
  {
    eng: "bough",
    jpn: "大きな枝",
    category: "名詞",
  },
  {
    eng: "buckle down",
    jpn: "精を出す，全力を尽くす",
    category: "熟語",
  },
  {
    eng: "exclusion",
    jpn: "除外",
    category: "名詞",
  },
  {
    eng: "keep A away from B",
    jpn: "AをBから遠ざける",
    category: "熟語",
  },
  {
    eng: "not surprisingly",
    jpn: "当たり前の事だが，もちろんのことだが，当然のことながら",
    category: "副詞",
  },
  {
    eng: "lessen",
    jpn: "減らす",
    category: "動詞",
  },
  {
    eng: "pious",
    jpn: "信心深い",
    category: "形容詞",
  },
  {
    eng: "lengthen",
    jpn: "を長くする",
    category: "動詞",
  },
  {
    eng: "play down",
    jpn: "を軽く扱う，手軽に扱う，を見くびる",
    category: "熟語",
  },
  {
    eng: "affirm",
    jpn: "を断言する，明言する",
    category: "動詞",
  },
  {
    eng: "feminine",
    jpn: "女性らしい",
    category: "形容詞",
  },
  {
    eng: "hearth",
    jpn: "囲炉裏",
    category: "名詞",
  },
  {
    eng: "expenditure",
    jpn: "消費，経費",
    category: "名詞",
  },
  {
    eng: "fascination",
    jpn: "魅惑",
    category: "名詞",
  },
  {
    eng: "allied",
    jpn: "同盟を結んでいる，連携している",
    category: "形容詞",
  },
  {
    eng: "bachelor",
    jpn: "独身男性，未婚男性",
    category: "名詞",
  },
  {
    eng: "shawl",
    jpn: "肩掛け",
    category: "名詞",
  },
  {
    eng: "spoil",
    jpn: "台無しにする，損なう",
    category: "動詞",
  },
  {
    eng: "confrontation",
    jpn: "対決，対戦",
    category: "名詞",
  },
  {
    eng: "grumble",
    jpn: "不平，不満",
    category: "名詞",
  },
  {
    eng: "interaction",
    jpn: "相互作用",
    category: "名詞",
  },
  {
    eng: "affectionate",
    jpn: "愛情深い，優しい",
    category: "形容詞",
  },
  {
    eng: "temperament",
    jpn: "気質",
    category: "名詞",
  },
  {
    eng: "pollute",
    jpn: "汚染する",
    category: "動詞",
  },
  {
    eng: "bulky",
    jpn: "かさばった，嵩高な",
    category: "形容詞",
  },
  {
    eng: "novelty",
    jpn: "斬新さ，珍しさ",
    category: "名詞",
  },
  {
    eng: "litter",
    jpn: "ごみ",
    category: "名詞",
  },
  {
    eng: "across from",
    jpn: "の向かいに，対面に，の向かい側",
    category: "熟語",
  },
  {
    eng: "brew",
    jpn: "醸造する",
    category: "動詞",
  },
  {
    eng: "brace",
    jpn: "支える",
    category: "動詞",
  },
  {
    eng: "velocity",
    jpn: "速度",
    category: "名詞",
  },
  {
    eng: "tow",
    jpn: "をけん引する，引く",
    category: "動詞",
  },
  {
    eng: "aerospace",
    jpn: "航空宇宙",
    category: "名詞",
  },
  {
    eng: "anguish",
    jpn: "苦悩，苦悶",
    category: "名詞",
  },
  {
    eng: "philosophical",
    jpn: "哲学的な，思索的な",
    category: "形容詞",
  },
  {
    eng: "leave off",
    jpn: "脱いだままでいる，着ずにいる",
    category: "熟語",
  },
  {
    eng: "repel",
    jpn: "追い払う",
    category: "動詞",
  },
  {
    eng: "comply",
    jpn: "準拠する",
    category: "動詞",
  },
  {
    eng: "habitat",
    jpn: "生息地",
    category: "名詞",
  },
  {
    eng: "lock up",
    jpn: "刑務所，留置所",
    category: "名詞",
  },
  {
    eng: "bribery",
    jpn: "賄賂の授受，贈収賄",
    category: "名詞",
  },
  {
    eng: "set off",
    jpn: "を引き起こす",
    category: "熟語",
  },
  {
    eng: "eruption",
    jpn: "噴火，爆発",
    category: "名詞",
  },
  {
    eng: "emigration",
    jpn: "移住",
    category: "名詞",
  },
  {
    eng: "embroider",
    jpn: "刺繍する",
    category: "動詞",
  },
  {
    eng: "bewilder",
    jpn: "当惑させる",
    category: "動詞",
  },
  {
    eng: "spine",
    jpn: "脊椎，背骨",
    category: "名詞",
  },
  {
    eng: "lawsuit",
    jpn: "訴訟",
    category: "名詞",
  },
  {
    eng: "missionary",
    jpn: "宣教師，使節",
    category: "名詞",
  },
  {
    eng: "critique",
    jpn: "批評，評論",
    category: "名詞",
  },
  {
    eng: "subordinate",
    jpn: "下位の",
    category: "形容詞",
  },
  {
    eng: "proportional",
    jpn: "均整の取れた，比例の",
    category: "形容詞",
  },
  {
    eng: "fragile",
    jpn: "もろい",
    category: "形容詞",
  },
  {
    eng: "sanity",
    jpn: "正気",
    category: "名詞",
  },
  {
    eng: "nationwide",
    jpn: "全国の",
    category: "形容詞",
  },
  {
    eng: "legacy",
    jpn: "遺産",
    category: "名詞",
  },
  {
    eng: "shove",
    jpn: "を突き出す，押す",
    category: "動詞",
  },
  {
    eng: "adjustable",
    jpn: "調整可能な，順応できる",
    category: "形容詞",
  },
  {
    eng: "disabled",
    jpn: "障害のある",
    category: "形容詞",
  },
  {
    eng: "lure",
    jpn: "疑似餌",
    category: "名詞",
  },
  {
    eng: "expanse",
    jpn: "広がり",
    category: "名詞",
  },
  {
    eng: "smuggle",
    jpn: "を密輸する",
    category: "動詞",
  },
  {
    eng: "endorse",
    jpn: "を支持する，裏書きする",
    category: "動詞",
  },
  {
    eng: "fill out",
    jpn: "書き込む，記入する",
    category: "熟語",
  },
  {
    eng: "novice",
    jpn: "初心者，新米",
    category: "名詞",
  },
  {
    eng: "deprivation",
    jpn: "剥奪，取り上げ",
    category: "名詞",
  },
  {
    eng: "at random",
    jpn: "無作為に，手あたり次第に",
    category: "熟語",
  },
  {
    eng: "breach",
    jpn: "違反",
    category: "名詞",
  },
  {
    eng: "compelling",
    jpn: "説得力のある，有力な",
    category: "形容詞",
  },
  {
    eng: "conspicuous",
    jpn: "目立った，顕著な",
    category: "形容詞",
  },
  {
    eng: "baron",
    jpn: "男爵",
    category: "名詞",
  },
  {
    eng: "trot",
    jpn: "急ぎ足，駆け足",
    category: "名詞",
  },
  {
    eng: "supposedly",
    jpn: "たぶん，おそらく",
    category: "副詞",
  },
  {
    eng: "mother-in-law",
    jpn: "義理の母，義母",
    category: "名詞",
  },
  {
    eng: "frail",
    jpn: "もろい，か弱い",
    category: "形容詞",
  },
  {
    eng: "withhold",
    jpn: "差し控える",
    category: "動詞",
  },
  {
    eng: "hang on to",
    jpn: "にしがみつく，執着する",
    category: "熟語",
  },
  {
    eng: "affirmative",
    jpn: "断定的な，肯定的な",
    category: "形容詞",
  },
  {
    eng: "spouse",
    jpn: "配偶者",
    category: "名詞",
  },
  {
    eng: "push through",
    jpn: "押し通す，芽が出る",
    category: "熟語",
  },
  {
    eng: "consolidate",
    jpn: "を固める，統合する",
    category: "動詞",
  },
  {
    eng: "attic",
    jpn: "屋根裏",
    category: "名詞",
  },
  {
    eng: "hinge",
    jpn: "要点，蝶番",
    category: "名詞",
  },
  {
    eng: "quota",
    jpn: "割り当て，分け前",
    category: "名詞",
  },
  {
    eng: "fall under",
    jpn: "支配下に入る，分類される",
    category: "熟語",
  },
  {
    eng: "creed",
    jpn: "信条",
    category: "名詞",
  },
  {
    eng: "endow",
    jpn: "寄付する",
    category: "動詞",
  },
  {
    eng: "stammer",
    jpn: "どもる，口ごもる",
    category: "動詞",
  },
  {
    eng: "irrelevant",
    jpn: "無関係な",
    category: "形容詞",
  },
  {
    eng: "send out for",
    jpn: "お使いに出す，出前を頼む",
    category: "熟語",
  },
  {
    eng: "radiation",
    jpn: "放射線，放射",
    category: "名詞",
  },
  {
    eng: "questionnaire",
    jpn: "質問表",
    category: "名詞",
  },
  {
    eng: "realism",
    jpn: "現実主義",
    category: "名詞",
  },
  {
    eng: "bleak",
    jpn: "吹きさらしの，荒涼とした",
    category: "形容詞",
  },
  {
    eng: "adverse",
    jpn: "反対の，逆の",
    category: "形容詞",
  },
  {
    eng: "theft",
    jpn: "盗み，窃盗",
    category: "名詞",
  },
  {
    eng: "lunar",
    jpn: "月の",
    category: "形容詞",
  },
  {
    eng: "coalition",
    jpn: "連立，連合",
    category: "名詞",
  },
  {
    eng: "barren",
    jpn: "実を結ばない，結果を出さない",
    category: "形容詞",
  },
  {
    eng: "transparency",
    jpn: "透明性",
    category: "名詞",
  },
  {
    eng: "count for",
    jpn: "の価値がある，価値が認められる",
    category: "熟語",
  },
  {
    eng: "afflict",
    jpn: "を苦しめる，悩ます",
    category: "動詞",
  },
  {
    eng: "bishop",
    jpn: "司教，教会の指導者",
    category: "名詞",
  },
  {
    eng: "clarity",
    jpn: "明快さ，明瞭",
    category: "名詞",
  },
  {
    eng: "disability",
    jpn: "障害，無力",
    category: "名詞",
  },
  {
    eng: "plea",
    jpn: "嘆願，懇願",
    category: "名詞",
  },
  {
    eng: "brink",
    jpn: "瀬戸際，切羽詰まった状態",
    category: "名詞",
  },
  {
    eng: "compile",
    jpn: "編集する",
    category: "動詞",
  },
  {
    eng: "confinement",
    jpn: "制限，監禁",
    category: "名詞",
  },
  {
    eng: "clasp",
    jpn: "留め金",
    category: "名詞",
  },
  {
    eng: "under warranty",
    jpn: "保証内，保険の有効な",
    category: "熟語",
  },
  {
    eng: "to be honest",
    jpn: "正直に言うと，実を言うと",
    category: "熟語",
  },
  {
    eng: "entrepreneur",
    jpn: "起業家",
    category: "名詞",
  },
  {
    eng: "sales quota",
    jpn: "売上ノルマ，販売割当",
    category: "名詞",
  },
  {
    eng: "encyclopedia",
    jpn: "百科事典",
    category: "名詞",
  },
  {
    eng: "pick through",
    jpn: "を探る，選りすぐる",
    category: "熟語",
  },
  {
    eng: "compassion",
    jpn: "思いやり",
    category: "名詞",
  },
  {
    eng: "recipient",
    jpn: "受取人",
    category: "名詞",
  },
  {
    eng: "aspire",
    jpn: "熱望する，憧れる",
    category: "動詞",
  },
  {
    eng: "split up",
    jpn: "を分ける，分割する，区別する",
    category: "熟語",
  },
  {
    eng: "galaxy",
    jpn: "銀河",
    category: "名詞",
  },
  {
    eng: "snort",
    jpn: "鼻を鳴らす",
    category: "動詞",
  },
  {
    eng: "call on",
    jpn: "を訪問する，要求する",
    category: "熟語",
  },
  {
    eng: "amid",
    jpn: "真ん中に，の中に",
    category: "その他",
  },
  {
    eng: "humidity",
    jpn: "湿度，湿気",
    category: "名詞",
  },
  {
    eng: "relevance",
    jpn: "関連性",
    category: "名詞",
  },
  {
    eng: "judicial",
    jpn: "司法の，裁判の",
    category: "形容詞",
  },
  {
    eng: "extinct",
    jpn: "絶滅した",
    category: "形容詞",
  },
  {
    eng: "clench",
    jpn: "食いしばる，固く握る",
    category: "動詞",
  },
  {
    eng: "integrate",
    jpn: "統合する",
    category: "動詞",
  },
  {
    eng: "coincidence",
    jpn: "同時発生",
    category: "名詞",
  },
  {
    eng: "crash down",
    jpn: "崩れる，台無しになる",
    category: "熟語",
  },
  {
    eng: "wag",
    jpn: "を振る，揺り動かす",
    category: "動詞",
  },
  {
    eng: "conspire",
    jpn: "陰謀を企てる",
    category: "動詞",
  },
  {
    eng: "finish off",
    jpn: "を完成させる，完遂させる",
    category: "熟語",
  },
  {
    eng: "dough",
    jpn: "パン生地",
    category: "名詞",
  },
  {
    eng: "congregation",
    jpn: "会合",
    category: "名詞",
  },
  {
    eng: "accumulation",
    jpn: "蓄積",
    category: "名詞",
  },
  {
    eng: "relish",
    jpn: "風味",
    category: "名詞",
  },
  {
    eng: "bully",
    jpn: "いじめっ子",
    category: "名詞",
  },
  {
    eng: "migration",
    jpn: "移住",
    category: "名詞",
  },
  {
    eng: "sprawl",
    jpn: "寝そべる",
    category: "動詞",
  },
  {
    eng: "compress",
    jpn: "圧縮する",
    category: "動詞",
  },
  {
    eng: "grow out of",
    jpn: "から生じる，脱皮する",
    category: "熟語",
  },
  {
    eng: "superstitious",
    jpn: "迷信的な",
    category: "形容詞",
  },
  {
    eng: "aging",
    jpn: "老化",
    category: "名詞",
  },
  {
    eng: "irrational",
    jpn: "理性のない",
    category: "形容詞",
  },
  {
    eng: "stroll",
    jpn: "散歩する",
    category: "動詞",
  },
  {
    eng: "sculptor",
    jpn: "彫刻家",
    category: "名詞",
  },
  {
    eng: "congressional",
    jpn: "会議の",
    category: "形容詞",
  },
  {
    eng: "to date",
    jpn: "これまで，現在まで",
    category: "熟語",
  },
  {
    eng: "prickly",
    jpn: "とげのある",
    category: "形容詞",
  },
  {
    eng: "degradation",
    jpn: "降格，格下げ",
    category: "名詞",
  },
  {
    eng: "authentic",
    jpn: "本物の，信頼できる",
    category: "形容詞",
  },
  {
    eng: "enroll",
    jpn: "入学する",
    category: "動詞",
  },
  {
    eng: "transplant",
    jpn: "を移植する",
    category: "動詞",
  },
  {
    eng: "pickpocket",
    jpn: "すり",
    category: "名詞",
  },
  {
    eng: "contributor",
    jpn: "貢献者，寄付者",
    category: "名詞",
  },
  {
    eng: "deathbed",
    jpn: "臨終",
    category: "名詞",
  },
  {
    eng: "botany",
    jpn: "植物学",
    category: "名詞",
  },
  {
    eng: "scrub",
    jpn: "をこすり洗う",
    category: "動詞",
  },
  {
    eng: "in the first place",
    jpn: "最初に，元々",
    category: "熟語",
  },
  {
    eng: "epidemic",
    jpn: "流行性の，伝染性の",
    category: "形容詞",
  },
  {
    eng: "audit",
    jpn: "監査，会計検査",
    category: "名詞",
  },
  {
    eng: "equilibrium",
    jpn: "均衡，つり合い",
    category: "名詞",
  },
  {
    eng: "endanger",
    jpn: "危険にさらす",
    category: "動詞",
  },
  {
    eng: "rite",
    jpn: "儀式",
    category: "名詞",
  },
  {
    eng: "buddy",
    jpn: "相棒，仲間",
    category: "名詞",
  },
  {
    eng: "blood vessel",
    jpn: "血管，血の管",
    category: "名詞",
  },
  {
    eng: "yearn",
    jpn: "憧れる，慕う",
    category: "動詞",
  },
  {
    eng: "subside",
    jpn: "低下する，沈む",
    category: "動詞",
  },
  {
    eng: "sneak",
    jpn: "こっそり動く",
    category: "動詞",
  },
  {
    eng: "custody",
    jpn: "親権，管理",
    category: "名詞",
  },
  {
    eng: "retailer",
    jpn: "小売業者",
    category: "名詞",
  },
  {
    eng: "pilgrim",
    jpn: "巡礼者",
    category: "名詞",
  },
  {
    eng: "volcanic",
    jpn: "火山の",
    category: "形容詞",
  },
  {
    eng: "notify",
    jpn: "知らせる，通報する",
    category: "動詞",
  },
  {
    eng: "mow",
    jpn: "を刈る",
    category: "動詞",
  },
  {
    eng: "turmoil",
    jpn: "騒動，混乱，騒ぎ",
    category: "名詞",
  },
  {
    eng: "come off",
    jpn: "から取れる，外れる",
    category: "熟語",
  },
  {
    eng: "extravagant",
    jpn: "贅沢な，無駄遣いの",
    category: "形容詞",
  },
  {
    eng: "anatomy",
    jpn: "解剖学",
    category: "名詞",
  },
  {
    eng: "array",
    jpn: "整列させる，並べる",
    category: "動詞",
  },
  {
    eng: "gale",
    jpn: "疾風，強風",
    category: "名詞",
  },
  {
    eng: "sniff",
    jpn: "を嗅ぐ，におう",
    category: "動詞",
  },
  {
    eng: "likelihood",
    jpn: "可能性，見込み",
    category: "名詞",
  },
  {
    eng: "voucher",
    jpn: "引換券",
    category: "名詞",
  },
  {
    eng: "dynamics",
    jpn: "原動力",
    category: "名詞",
  },
  {
    eng: "portfolio",
    jpn: "人物像",
    category: "名詞",
  },
  {
    eng: "gulp",
    jpn: "急いで飲み込む",
    category: "動詞",
  },
  {
    eng: "redundant",
    jpn: "冗長な，豊富な，余計な",
    category: "形容詞",
  },
  {
    eng: "reinforcement",
    jpn: "強化，増強",
    category: "名詞",
  },
  {
    eng: "eloquence",
    jpn: "雄弁",
    category: "名詞",
  },
  {
    eng: "consistency",
    jpn: "一貫性，一致",
    category: "名詞",
  },
  {
    eng: "adolescent",
    jpn: "思春期の",
    category: "名詞",
  },
  {
    eng: "exotic",
    jpn: "異国情緒の，外国の",
    category: "形容詞",
  },
  {
    eng: "vent",
    jpn: "排出口，通風孔",
    category: "名詞",
  },
  {
    eng: "casualty",
    jpn: "犠牲者，被害者",
    category: "名詞",
  },
  {
    eng: "plaintiff",
    jpn: "原告",
    category: "名詞",
  },
  {
    eng: "shareholder",
    jpn: "株主",
    category: "名詞",
  },
  {
    eng: "oppressive",
    jpn: "抑圧的な，横暴な",
    category: "形容詞",
  },
  {
    eng: "vulnerable",
    jpn: "傷つきやすい，繊細",
    category: "形容詞",
  },
  {
    eng: "query",
    jpn: "疑問，質問",
    category: "名詞",
  },
  {
    eng: "triumphant",
    jpn: "成功した，勝利した",
    category: "形容詞",
  },
  {
    eng: "worship",
    jpn: "礼拝，崇拝",
    category: "名詞",
  },
  {
    eng: "hold up",
    jpn: "持ちこたえる，耐える",
    category: "熟語",
  },
  {
    eng: "autonomy",
    jpn: "自治，自主性",
    category: "名詞",
  },
  {
    eng: "integrated",
    jpn: "統合された",
    category: "形容詞",
  },
  {
    eng: "composite",
    jpn: "混成の，合成の",
    category: "形容詞",
  },
  {
    eng: "dweller",
    jpn: "住人，住民",
    category: "名詞",
  },
  {
    eng: "die out",
    jpn: "廃れる，消滅していく",
    category: "熟語",
  },
  {
    eng: "expire",
    jpn: "期限切れの",
    category: "動詞",
  },
  {
    eng: "explicit",
    jpn: "明らかな，はっきりとした",
    category: "形容詞",
  },
  {
    eng: "out of nowhere",
    jpn: "いきなり，突然",
    category: "熟語",
  },
  {
    eng: "coherent",
    jpn: "首尾一貫した",
    category: "形容詞",
  },
  {
    eng: "alleged",
    jpn: "容疑のある",
    category: "形容詞",
  },
  {
    eng: "aristocratic",
    jpn: "貴族の",
    category: "形容詞",
  },
  {
    eng: "thrift",
    jpn: "倹約，節約",
    category: "名詞",
  },
  {
    eng: "collide",
    jpn: "衝突する，ぶつかる",
    category: "動詞",
  },
  {
    eng: "show up",
    jpn: "現れる，出現する",
    category: "熟語",
  },
  {
    eng: "toxic",
    jpn: "有毒な",
    category: "形容詞",
  },
  {
    eng: "designate",
    jpn: "選定する",
    category: "動詞",
  },
  {
    eng: "pull in",
    jpn: "到着する，片側に寄る",
    category: "熟語",
  },
  {
    eng: "hitch",
    jpn: "引っかける",
    category: "動詞",
  },
  {
    eng: "run against",
    jpn: "にぶつかる，偶然出会う",
    category: "熟語",
  },
  {
    eng: "strategic",
    jpn: "戦略的な",
    category: "形容詞",
  },
  {
    eng: "sneer",
    jpn: "冷笑する，あざ笑う",
    category: "動詞",
  },
  {
    eng: "prosecute",
    jpn: "を起訴する，告訴する",
    category: "動詞",
  },
  {
    eng: "assault",
    jpn: "暴行，攻撃",
    category: "名詞",
  },
  {
    eng: "dilemma",
    jpn: "板挟み，窮地",
    category: "名詞",
  },
  {
    eng: "subconscious",
    jpn: "潜在意識の",
    category: "名詞",
  },
  {
    eng: "equity",
    jpn: "公平，公正",
    category: "名詞",
  },
  {
    eng: "parable",
    jpn: "比喩，たとえ話",
    category: "名詞",
  },
  {
    eng: "statute",
    jpn: "法令",
    category: "名詞",
  },
  {
    eng: "entity",
    jpn: "実在，実体",
    category: "名詞",
  },
  {
    eng: "accelerate",
    jpn: "加速する",
    category: "動詞",
  },
  {
    eng: "devastate",
    jpn: "荒廃させる",
    category: "動詞",
  },
  {
    eng: "stay in touch with",
    jpn: "と連絡を取り続ける，絶えず連絡する",
    category: "熟語",
  },
  {
    eng: "speculate",
    jpn: "推測する",
    category: "動詞",
  },
  {
    eng: "agitation",
    jpn: "動揺",
    category: "名詞",
  },
  {
    eng: "jurisdiction",
    jpn: "司法権，裁判権",
    category: "名詞",
  },
  {
    eng: "allegedly",
    jpn: "申し立てによると，主張によると",
    category: "副詞",
  },
  {
    eng: "real estate",
    jpn: "不動産，物件",
    category: "名詞",
  },
  {
    eng: "submerge",
    jpn: "を水中に入れる，浸す",
    category: "動詞",
  },
  {
    eng: "make over",
    jpn: "を作り替える，を改装する",
    category: "熟語",
  },
  {
    eng: "divinity",
    jpn: "神格",
    category: "名詞",
  },
  {
    eng: "artisan",
    jpn: "職人",
    category: "名詞",
  },
  {
    eng: "parental",
    jpn: "親の",
    category: "形容詞",
  },
  {
    eng: "suffice",
    jpn: "満足させる，足りる",
    category: "動詞",
  },
  {
    eng: "burglary",
    jpn: "強盗，住宅侵入",
    category: "名詞",
  },
  {
    eng: "interact",
    jpn: "相互作用する，互いに影響を与える",
    category: "動詞",
  },
  {
    eng: "prevent A from B",
    jpn: "AをBから防ぐ，AをBから保護する",
    category: "熟語",
  },
  {
    eng: "ignition",
    jpn: "点火，発火",
    category: "名詞",
  },
  {
    eng: "segment",
    jpn: "区切り，部分",
    category: "名詞",
  },
  {
    eng: "numb",
    jpn: "麻痺した、しびれた",
    category: "形容詞",
  },
  {
    eng: "lurk",
    jpn: "待ち伏せる",
    category: "動詞",
  },
  {
    eng: "quote",
    jpn: "見積り/見積る",
    category: "名詞",
  },
  {
    eng: "hemisphere",
    jpn: "半球",
    category: "名詞",
  },
  {
    eng: "throw off",
    jpn: "を投げ捨てる，放り出す，放棄する",
    category: "熟語",
  },
  {
    eng: "warehouse",
    jpn: "倉庫",
    category: "名詞",
  },
  {
    eng: "considerate",
    jpn: "思いやりのある",
    category: "形容詞",
  },
  {
    eng: "expel",
    jpn: "を追放する，除名する",
    category: "動詞",
  },
  {
    eng: "windmill",
    jpn: "風車",
    category: "名詞",
  },
  {
    eng: "practitioner",
    jpn: "開業医，専門家",
    category: "名詞",
  },
  {
    eng: "depict",
    jpn: "を描写する，描く",
    category: "動詞",
  },
  {
    eng: "aesthetic",
    jpn: "美的な",
    category: "形容詞",
  },
  {
    eng: "constraint",
    jpn: "拘束，強制",
    category: "名詞",
  },
  {
    eng: "emit",
    jpn: "を放射する，発する",
    category: "動詞",
  },
  {
    eng: "swirl",
    jpn: "渦巻く，旋回する",
    category: "動詞",
  },
  {
    eng: "propel",
    jpn: "を推し進める，前進させる",
    category: "動詞",
  },
  {
    eng: "substantially",
    jpn: "実質的に，本質的に",
    category: "副詞",
  },
  {
    eng: "correlation",
    jpn: "相関性",
    category: "名詞",
  },
  {
    eng: "dignify",
    jpn: "威厳をつける",
    category: "動詞",
  },
  {
    eng: "treacherous",
    jpn: "裏切った，反逆の",
    category: "形容詞",
  },
  {
    eng: "faction",
    jpn: "派閥，党派",
    category: "名詞",
  },
  {
    eng: "entangle",
    jpn: "を絡ませる，もつれさせる",
    category: "動詞",
  },
  {
    eng: "luminous",
    jpn: "光っている，輝く",
    category: "形容詞",
  },
  {
    eng: "suburban",
    jpn: "郊外の，郊外型の",
    category: "形容詞",
  },
  {
    eng: "rave",
    jpn: "夢中で話す",
    category: "動詞",
  },
  {
    eng: "raft",
    jpn: "いかだ",
    category: "名詞",
  },
  {
    eng: "extinguish",
    jpn: "を消す",
    category: "動詞",
  },
  {
    eng: "prologue",
    jpn: "序章",
    category: "名詞",
  },
  {
    eng: "communion",
    jpn: "親交",
    category: "名詞",
  },
  {
    eng: "bail",
    jpn: "保釈，保釈金",
    category: "名詞",
  },
  {
    eng: "settle up",
    jpn: "を支払う，払い戻す",
    category: "熟語",
  },
  {
    eng: "take in",
    jpn: "を摂取する，取り入れる",
    category: "熟語",
  },
  {
    eng: "rumble",
    jpn: "ゴロゴロ鳴る",
    category: "動詞",
  },
  {
    eng: "adolescence",
    jpn: "青春期，思春期",
    category: "名詞",
  },
  {
    eng: "vomit",
    jpn: "吐く/嘔吐",
    category: "動詞",
  },
  {
    eng: "obsess",
    jpn: "執着する，とりつく",
    category: "動詞",
  },
  {
    eng: "add up to",
    jpn: "結局～になる，結果として",
    category: "熟語",
  },
  {
    eng: "gush",
    jpn: "吹き出る",
    category: "動詞",
  },
  {
    eng: "revenue",
    jpn: "収益，所得",
    category: "名詞",
  },
  {
    eng: "negligent",
    jpn: "怠慢な",
    category: "形容詞",
  },
  {
    eng: "unify",
    jpn: "を一つにする，統一する",
    category: "動詞",
  },
  {
    eng: "associate A with B",
    jpn: "AとBを関係づける",
    category: "熟語",
  },
  {
    eng: "medication",
    jpn: "投薬，薬剤",
    category: "名詞",
  },
  {
    eng: "gauge",
    jpn: "規格",
    category: "名詞",
  },
  {
    eng: "slaughter",
    jpn: "虐殺，大量殺戮",
    category: "名詞",
  },
  {
    eng: "traverse",
    jpn: "を横切る，横断する",
    category: "動詞",
  },
  {
    eng: "tavern",
    jpn: "居酒屋",
    category: "名詞",
  },
  {
    eng: "rusty",
    jpn: "さびた",
    category: "形容詞",
  },
  {
    eng: "attribute A to B",
    jpn: "AをBに依るものとする，AをBとみなす",
    category: "熟語",
  },
  {
    eng: "agonize",
    jpn: "苦しむ",
    category: "動詞",
  },
  {
    eng: "presidency",
    jpn: "大統領職，首相職",
    category: "名詞",
  },
  {
    eng: "hangover",
    jpn: "二日酔い",
    category: "名詞",
  },
  {
    eng: "pharmacy",
    jpn: "薬局",
    category: "名詞",
  },
  {
    eng: "distract A from B",
    jpn: "Aの気をBからそらす",
    category: "熟語",
  },
  {
    eng: "wicket",
    jpn: "窓口",
    category: "名詞",
  },
  {
    eng: "rapture",
    jpn: "有頂天，大喜び",
    category: "名詞",
  },
  {
    eng: "skid",
    jpn: "滑り止め，横滑り",
    category: "名詞",
  },
  {
    eng: "assassinate",
    jpn: "を暗殺する",
    category: "動詞",
  },
  {
    eng: "have access to",
    jpn: "を利用できる，を利用可能",
    category: "熟語",
  },
  {
    eng: "lust",
    jpn: "切望，渇望",
    category: "名詞",
  },
  {
    eng: "in pursuit of",
    jpn: "を追跡して，追いかけて",
    category: "熟語",
  },
  {
    eng: "abound",
    jpn: "たくさんいる，多い",
    category: "動詞",
  },
  {
    eng: "prostitute",
    jpn: "売春婦",
    category: "名詞",
  },
  {
    eng: "in development",
    jpn: "開発中の，開発過程において",
    category: "熟語",
  },
  {
    eng: "contaminate",
    jpn: "を汚染する，汚す",
    category: "動詞",
  },
  {
    eng: "unstable",
    jpn: "不安定な，ゆらぎやすい",
    category: "形容詞",
  },
  {
    eng: "keep up on",
    jpn: "の最新状況を把握する，追いつく",
    category: "熟語",
  },
  {
    eng: "archaic",
    jpn: "古風な，すたれた",
    category: "形容詞",
  },
  {
    eng: "durable",
    jpn: "耐久性のある，長持ちする",
    category: "形容詞",
  },
  {
    eng: "retort",
    jpn: "言い返す",
    category: "動詞",
  },
  {
    eng: "gender",
    jpn: "性別，性",
    category: "名詞",
  },
  {
    eng: "ongoing",
    jpn: "進行中の",
    category: "形容詞",
  },
  {
    eng: "slip up",
    jpn: "やり損なう，うっかり誤る",
    category: "熟語",
  },
  {
    eng: "sarcastic",
    jpn: "皮肉な，嫌みの",
    category: "形容詞",
  },
  {
    eng: "disaster",
    jpn: "災害，災難",
    category: "名詞",
  },
  {
    eng: "fad",
    jpn: "流行",
    category: "名詞",
  },
  {
    eng: "analogy",
    jpn: "類似",
    category: "名詞",
  },
  {
    eng: "assorted",
    jpn: "盛り合わせの",
    category: "形容詞",
  },
  {
    eng: "register for",
    jpn: "に登録する，に記録する",
    category: "熟語",
  },
  {
    eng: "exalt",
    jpn: "高揚する",
    category: "動詞",
  },
  {
    eng: "integrity",
    jpn: "誠実さ，誠意",
    category: "名詞",
  },
  {
    eng: "defective",
    jpn: "欠点のある",
    category: "形容詞",
  },
  {
    eng: "subject to",
    jpn: "の支配下にある，によると",
    category: "熟語",
  },
  {
    eng: "attainment",
    jpn: "達成，到達",
    category: "名詞",
  },
  {
    eng: "make ends meet",
    jpn: "収支を合わせる，つじつまを合わせる",
    category: "熟語",
  },
  {
    eng: "shudder",
    jpn: "身震いする",
    category: "動詞",
  },
  {
    eng: "feel for",
    jpn: "を感じる，同情する，を体感する",
    category: "熟語",
  },
  {
    eng: "clean cut",
    jpn: "きちんとした，整然とした",
    category: "形容詞",
  },
  {
    eng: "cramp",
    jpn: "けいれん",
    category: "名詞",
  },
  {
    eng: "frantic",
    jpn: "半狂乱の，狂った",
    category: "形容詞",
  },
  {
    eng: "tickle",
    jpn: "をくすぐる",
    category: "動詞",
  },
  {
    eng: "allegation",
    jpn: "主張，申し立て",
    category: "名詞",
  },
  {
    eng: "delicacy",
    jpn: "優美さ，精巧さ",
    category: "名詞",
  },
  {
    eng: "light bulb",
    jpn: "電球，蛍光灯",
    category: "名詞",
  },
  {
    eng: "pass out",
    jpn: "気絶する，失神する",
    category: "熟語",
  },
  {
    eng: "ecological",
    jpn: "生態学の",
    category: "形容詞",
  },
  {
    eng: "kick around",
    jpn: "粗末に扱う，酷使する",
    category: "熟語",
  },
  {
    eng: "tug",
    jpn: "をぐいと引く，強く引っ張る",
    category: "動詞",
  },
  {
    eng: "ironic",
    jpn: "皮肉な",
    category: "形容詞",
  },
  {
    eng: "lyric",
    jpn: "歌詞/叙情的な",
    category: "名詞",
  },
  {
    eng: "rouge",
    jpn: "口紅",
    category: "名詞",
  },
  {
    eng: "sulfur",
    jpn: "硫黄",
    category: "名詞",
  },
  {
    eng: "tie up",
    jpn: "を縛り上げる，束縛する",
    category: "熟語",
  },
  {
    eng: "ripple",
    jpn: "波紋",
    category: "名詞",
  },
  {
    eng: "testimony",
    jpn: "証言，申し立て",
    category: "名詞",
  },
  {
    eng: "recede",
    jpn: "退く",
    category: "動詞",
  },
  {
    eng: "ascertain",
    jpn: "を確かめる",
    category: "動詞",
  },
  {
    eng: "negligible",
    jpn: "取るに足らない",
    category: "形容詞",
  },
  {
    eng: "compatible",
    jpn: "互換性のある，両立できる",
    category: "形容詞",
  },
  {
    eng: "aboriginal",
    jpn: "先住民の，土着の",
    category: "形容詞",
  },
  {
    eng: "disdain",
    jpn: "を軽蔑する",
    category: "動詞",
  },
  {
    eng: "finite",
    jpn: "有限の，限りある",
    category: "形容詞",
  },
  {
    eng: "poach",
    jpn: "密漁する",
    category: "動詞",
  },
  {
    eng: "paraphrase",
    jpn: "言い換え",
    category: "名詞",
  },
  {
    eng: "shake up",
    jpn: "大きく変える，再編する",
    category: "熟語",
  },
  {
    eng: "blur",
    jpn: "しみ，汚れ",
    category: "名詞",
  },
  {
    eng: "prophecy",
    jpn: "予言",
    category: "名詞",
  },
  {
    eng: "hierarchy",
    jpn: "階層",
    category: "名詞",
  },
  {
    eng: "decimal",
    jpn: "小数",
    category: "名詞",
  },
  {
    eng: "par",
    jpn: "同等，等価",
    category: "名詞",
  },
  {
    eng: "laptop",
    jpn: "ノートパソコン",
    category: "名詞",
  },
  {
    eng: "aviation",
    jpn: "航空，飛行",
    category: "名詞",
  },
  {
    eng: "captivity",
    jpn: "監禁，囚禁",
    category: "名詞",
  },
  {
    eng: "sterile",
    jpn: "殺菌した，不妊の",
    category: "形容詞",
  },
  {
    eng: "breakthrough",
    jpn: "突破口",
    category: "名詞",
  },
  {
    eng: "transcript",
    jpn: "写し，写本",
    category: "名詞",
  },
  {
    eng: "deodorant",
    jpn: "防臭剤",
    category: "名詞",
  },
  {
    eng: "desperation",
    jpn: "自暴自棄，絶望",
    category: "名詞",
  },
  {
    eng: "shrill",
    jpn: "かん高い，金切り声の",
    category: "形容詞",
  },
  {
    eng: "contagious",
    jpn: "伝染性の",
    category: "形容詞",
  },
  {
    eng: "ambiguous",
    jpn: "あいまいな",
    category: "形容詞",
  },
  {
    eng: "hostage",
    jpn: "人質",
    category: "名詞",
  },
  {
    eng: "facilitate",
    jpn: "を促進する，楽にする",
    category: "動詞",
  },
  {
    eng: "sovereign",
    jpn: "主権者，君主",
    category: "名詞",
  },
  {
    eng: "addiction",
    jpn: "中毒性",
    category: "名詞",
  },
  {
    eng: "on balance",
    jpn: "考慮すると，結局",
    category: "熟語",
  },
  {
    eng: "hitherto",
    jpn: "従来，今まで",
    category: "副詞",
  },
  {
    eng: "strangle",
    jpn: "を絞め殺す，窒息させる",
    category: "動詞",
  },
  {
    eng: "maze",
    jpn: "迷路",
    category: "名詞",
  },
  {
    eng: "quiver",
    jpn: "小刻みに揺れる，震える",
    category: "動詞",
  },
  {
    eng: "supervisor",
    jpn: "上司",
    category: "名詞",
  },
  {
    eng: "conserve",
    jpn: "を保存する，保護する",
    category: "動詞",
  },
  {
    eng: "nurture",
    jpn: "を養う，養育する",
    category: "動詞",
  },
  {
    eng: "tilt",
    jpn: "を傾ける，を斜めにする",
    category: "動詞",
  },
  {
    eng: "tonic",
    jpn: "強壮剤，健康促進剤",
    category: "名詞",
  },
  {
    eng: "integration",
    jpn: "統合，結合",
    category: "名詞",
  },
  {
    eng: "dissolution",
    jpn: "分離，溶解",
    category: "名詞",
  },
  {
    eng: "arrogance",
    jpn: "傲慢",
    category: "名詞",
  },
  {
    eng: "rotate",
    jpn: "回転する",
    category: "動詞",
  },
  {
    eng: "tribal",
    jpn: "部族の",
    category: "形容詞",
  },
  {
    eng: "craze",
    jpn: "発狂させる",
    category: "動詞",
  },
  {
    eng: "pier",
    jpn: "桟橋",
    category: "名詞",
  },
  {
    eng: "relic",
    jpn: "遺物，遺跡",
    category: "名詞",
  },
  {
    eng: "talk down to",
    jpn: "見下して話す，軽蔑して話す",
    category: "熟語",
  },
  {
    eng: "aerial",
    jpn: "大気の，空気の",
    category: "形容詞",
  },
  {
    eng: "juvenile",
    jpn: "少年の",
    category: "形容詞",
  },
  {
    eng: "keep A out of B",
    jpn: "AをBに入れない，AをBに含めない",
    category: "熟語",
  },
  {
    eng: "resolute",
    jpn: "断固たる",
    category: "形容詞",
  },
  {
    eng: "nourishment",
    jpn: "栄養，滋養",
    category: "名詞",
  },
  {
    eng: "donor",
    jpn: "提供者，寄付者",
    category: "名詞",
  },
  {
    eng: "coup",
    jpn: "大当たり",
    category: "名詞",
  },
  {
    eng: "underlying",
    jpn: "根底にある",
    category: "形容詞",
  },
  {
    eng: "burn out",
    jpn: "を焼き尽くす，を灼き尽くす",
    category: "熟語",
  },
  {
    eng: "humiliate",
    jpn: "に恥をかかせる",
    category: "動詞",
  },
  {
    eng: "rarity",
    jpn: "希少さ，珍しさ",
    category: "名詞",
  },
  {
    eng: "reddish",
    jpn: "赤らんだ",
    category: "形容詞",
  },
  {
    eng: "pick over",
    jpn: "吟味して選ぶ，選び抜く",
    category: "熟語",
  },
  {
    eng: "merge",
    jpn: "合併する，合体する",
    category: "動詞",
  },
  {
    eng: "shrewd",
    jpn: "鋭敏な，鋭い",
    category: "形容詞",
  },
  {
    eng: "glaze",
    jpn: "上塗りする",
    category: "動詞",
  },
  {
    eng: "parish",
    jpn: "教区",
    category: "名詞",
  },
  {
    eng: "thereby",
    jpn: "それによって",
    category: "副詞",
  },
  {
    eng: "unprecedented",
    jpn: "前例のない",
    category: "形容詞",
  },
  {
    eng: "validity",
    jpn: "有効性，効果性",
    category: "名詞",
  },
  {
    eng: "norm",
    jpn: "規範，基準",
    category: "名詞",
  },
  {
    eng: "vendor",
    jpn: "行商人",
    category: "名詞",
  },
  {
    eng: "close in",
    jpn: "を閉じ込める，隔離する",
    category: "熟語",
  },
  {
    eng: "diabetes",
    jpn: "糖尿病，高血糖症",
    category: "名詞",
  },
  {
    eng: "momentum",
    jpn: "運動量，運動エネルギー",
    category: "名詞",
  },
  {
    eng: "opt",
    jpn: "を選ぶ，選定する",
    category: "動詞",
  },
  {
    eng: "chunk",
    jpn: "厚切り，かたまり",
    category: "名詞",
  },
  {
    eng: "secular",
    jpn: "世俗の，現世の",
    category: "形容詞",
  },
  {
    eng: "in particular",
    jpn: "特に，とりわけ",
    category: "熟語",
  },
  {
    eng: "manipulate",
    jpn: "操る",
    category: "動詞",
  },
  {
    eng: "sanction",
    jpn: "認可，許可",
    category: "名詞",
  },
  {
    eng: "fire up",
    jpn: "点火する，起動する",
    category: "熟語",
  },
  {
    eng: "poke",
    jpn: "を突つく",
    category: "動詞",
  },
  {
    eng: "donate A to B",
    jpn: "AをBに寄付する",
    category: "熟語",
  },
  {
    eng: "immune",
    jpn: "免疫の，免疫のある",
    category: "形容詞",
  },
  {
    eng: "remnant",
    jpn: "残り物，残存物",
    category: "名詞",
  },
  {
    eng: "inventory",
    jpn: "在庫",
    category: "名詞",
  },
  {
    eng: "grotesque",
    jpn: "怪奇な，異様な",
    category: "形容詞",
  },
  {
    eng: "discourse",
    jpn: "言説，講演",
    category: "名詞",
  },
  {
    eng: "reminder",
    jpn: "催促，注意喚起",
    category: "名詞",
  },
  {
    eng: "willingness",
    jpn: "意欲，意志",
    category: "名詞",
  },
  {
    eng: "verdict",
    jpn: "評決",
    category: "名詞",
  },
  {
    eng: "nutrient",
    jpn: "栄養素，栄養分",
    category: "名詞",
  },
  {
    eng: "syndrome",
    jpn: "症候群",
    category: "名詞",
  },
  {
    eng: "squad",
    jpn: "分隊",
    category: "名詞",
  },
  {
    eng: "credibility",
    jpn: "信頼性，信用",
    category: "名詞",
  },
  {
    eng: "legislature",
    jpn: "立法府",
    category: "名詞",
  },
  {
    eng: "read off",
    jpn: "を読み上げる，すらすら読む",
    category: "熟語",
  },
  {
    eng: "collaboration",
    jpn: "共同，共作，協力",
    category: "名詞",
  },
  {
    eng: "respondent",
    jpn: "被告，応答",
    category: "名詞",
  },
  {
    eng: "hand off",
    jpn: "を渡す，手渡す",
    category: "熟語",
  },
  {
    eng: "racism",
    jpn: "人種差別",
    category: "名詞",
  },
  {
    eng: "infrastructure",
    jpn: "基盤",
    category: "名詞",
  },
  {
    eng: "sovereignty",
    jpn: "主権，統治権",
    category: "名詞",
  },
  {
    eng: "behavioral",
    jpn: "行動上の，行動の",
    category: "形容詞",
  },
  {
    eng: "sibling",
    jpn: "兄弟姉妹",
    category: "名詞",
  },
  {
    eng: "synonym",
    jpn: "同意語，類語",
    category: "名詞",
  },
  {
    eng: "shoelace",
    jpn: "靴ひも",
    category: "名詞",
  },
  {
    eng: "verify",
    jpn: "を確認する，立証する",
    category: "動詞",
  },
  {
    eng: "gorge",
    jpn: "峡谷，谷間",
    category: "名詞",
  },
  {
    eng: "cult",
    jpn: "儀式，信仰",
    category: "名詞",
  },
  {
    eng: "aptitude",
    jpn: "素質，才能",
    category: "名詞",
  },
  {
    eng: "miser",
    jpn: "守銭奴，欲張り",
    category: "名詞",
  },
  {
    eng: "ramp",
    jpn: "傾斜路",
    category: "名詞",
  },
  {
    eng: "ore",
    jpn: "鉱石",
    category: "名詞",
  },
  {
    eng: "abbreviate",
    jpn: "を略する，短縮する",
    category: "動詞",
  },
  {
    eng: "ingenuity",
    jpn: "工夫，創意工夫",
    category: "名詞",
  },
  {
    eng: "swap",
    jpn: "交換する，取り換える",
    category: "動詞",
  },
  {
    eng: "afar",
    jpn: "はるか遠くに",
    category: "副詞",
  },
  {
    eng: "work out",
    jpn: "練習する，運動する",
    category: "熟語",
  },
  {
    eng: "analogous",
    jpn: "類似している",
    category: "形容詞",
  },
  {
    eng: "allot",
    jpn: "を割り当てる，充当する",
    category: "動詞",
  },
  {
    eng: "dissent",
    jpn: "異議を唱える，反対する",
    category: "動詞",
  },
  {
    eng: "diverge",
    jpn: "分岐する，分かれる",
    category: "動詞",
  },
  {
    eng: "distaste",
    jpn: "嫌悪，いや気",
    category: "名詞",
  },
  {
    eng: "overt",
    jpn: "明白な，公然の",
    category: "形容詞",
  },
  {
    eng: "ordeal",
    jpn: "試練，試金石",
    category: "名詞",
  },
  {
    eng: "crescent",
    jpn: "三日月",
    category: "名詞",
  },
  {
    eng: "vice versa",
    jpn: "反対に，反対もまた",
    category: "熟語",
  },
  {
    eng: "outnumber",
    jpn: "数で勝る",
    category: "動詞",
  },
  {
    eng: "round up",
    jpn: "寄せ集める，切り上げる",
    category: "熟語",
  },
  {
    eng: "pact",
    jpn: "協定，条約",
    category: "名詞",
  },
  {
    eng: "consolation",
    jpn: "慰め，慰安",
    category: "名詞",
  },
  {
    eng: "purge",
    jpn: "粛清する，浄化する",
    category: "動詞",
  },
  {
    eng: "distortion",
    jpn: "ねじれ，ゆがみ",
    category: "名詞",
  },
  {
    eng: "remorse",
    jpn: "自責，良心の呵責",
    category: "名詞",
  },
  {
    eng: "apathy",
    jpn: "無関心，無感動",
    category: "名詞",
  },
  {
    eng: "lifelike",
    jpn: "生きてるような，生き写しの",
    category: "形容詞",
  },
  {
    eng: "transit",
    jpn: "乗り継ぎ",
    category: "名詞",
  },
  {
    eng: "faithless",
    jpn: "不誠実な，不実な",
    category: "形容詞",
  },
  {
    eng: "enrage",
    jpn: "激怒させる",
    category: "動詞",
  },
  {
    eng: "stick around",
    jpn: "居残る，うろうろする",
    category: "熟語",
  },
  {
    eng: "ply",
    jpn: "精を出す，努力する",
    category: "動詞",
  },
  {
    eng: "ease into",
    jpn: "にゆっくりと入る，スムーズに入る，滞りなく入る",
    category: "熟語",
  },
  {
    eng: "dogma",
    jpn: "教義，信条",
    category: "名詞",
  },
  {
    eng: "occupant",
    jpn: "占有者，居住者",
    category: "名詞",
  },
  {
    eng: "excerpt",
    jpn: "抜粋，引用句",
    category: "名詞",
  },
  {
    eng: "erroneous",
    jpn: "誤った，間違えた",
    category: "形容詞",
  },
  {
    eng: "siege",
    jpn: "包囲",
    category: "名詞",
  },
  {
    eng: "adornment",
    jpn: "装飾品",
    category: "名詞",
  },
  {
    eng: "notional",
    jpn: "概念的な，抽象的な",
    category: "形容詞",
  },
  {
    eng: "militant",
    jpn: "好戦的な，攻撃的な",
    category: "形容詞",
  },
  {
    eng: "bin",
    jpn: "容器",
    category: "名詞",
  },
  {
    eng: "inconceivable",
    jpn: "想像もつかない，信じられない",
    category: "形容詞",
  },
  {
    eng: "put A into place",
    jpn: "Aを実行する，Aを遂行する",
    category: "熟語",
  },
  {
    eng: "bonfire",
    jpn: "たき火",
    category: "名詞",
  },
  {
    eng: "set aside",
    jpn: "横に置く，取っておく",
    category: "熟語",
  },
  {
    eng: "constable",
    jpn: "巡査，公務員",
    category: "名詞",
  },
  {
    eng: "gravestone",
    jpn: "墓石",
    category: "名詞",
  },
  {
    eng: "rebel against",
    jpn: "に反抗する，対抗する",
    category: "熟語",
  },
  {
    eng: "enmity",
    jpn: "敵意，憎しみ",
    category: "名詞",
  },
  {
    eng: "chronic",
    jpn: "慢性的な",
    category: "形容詞",
  },
  {
    eng: "forearm",
    jpn: "前腕部",
    category: "名詞",
  },
  {
    eng: "interrogate",
    jpn: "を尋問する",
    category: "動詞",
  },
  {
    eng: "exempt",
    jpn: "を免除する",
    category: "動詞",
  },
  {
    eng: "monopolize",
    jpn: "を独占する",
    category: "動詞",
  },
  {
    eng: "confess to",
    jpn: "を白状する，告白する",
    category: "熟語",
  },
  {
    eng: "assimilate",
    jpn: "吸収する，同化する，取り込む",
    category: "動詞",
  },
  {
    eng: "summer solstice",
    jpn: "夏至",
    category: "名詞",
  },
  {
    eng: "vogue",
    jpn: "流行",
    category: "名詞",
  },
  {
    eng: "nip",
    jpn: "をつねる，はさむ",
    category: "動詞",
  },
  {
    eng: "tune up",
    jpn: "を調整する，整備する",
    category: "熟語",
  },
  {
    eng: "back down",
    jpn: "手を引く，引き下がる",
    category: "熟語",
  },
  {
    eng: "pervade",
    jpn: "浸透する",
    category: "動詞",
  },
  {
    eng: "rigorous",
    jpn: "厳格な",
    category: "形容詞",
  },
  {
    eng: "transfusion",
    jpn: "輸血",
    category: "名詞",
  },
  {
    eng: "hygiene",
    jpn: "衛生",
    category: "名詞",
  },
  {
    eng: "hang out",
    jpn: "くつろぐ，リラックスする",
    category: "熟語",
  },
  {
    eng: "duplicate",
    jpn: "を複製する",
    category: "動詞",
  },
  {
    eng: "rectify",
    jpn: "を修正する",
    category: "動詞",
  },
  {
    eng: "ecstatic",
    jpn: "夢中の，有頂天の",
    category: "形容詞",
  },
  {
    eng: "instantaneous",
    jpn: "即時の，瞬間の",
    category: "形容詞",
  },
  {
    eng: "commemorate",
    jpn: "を祝う，記念する",
    category: "動詞",
  },
  {
    eng: "droop",
    jpn: "うなだれる",
    category: "動詞",
  },
  {
    eng: "repute",
    jpn: "評判",
    category: "名詞",
  },
  {
    eng: "fingertip",
    jpn: "指先",
    category: "名詞",
  },
  {
    eng: "celestial",
    jpn: "天体の，天国の",
    category: "形容詞",
  },
  {
    eng: "crave",
    jpn: "を欲する，切望する",
    category: "動詞",
  },
  {
    eng: "bog",
    jpn: "沼地",
    category: "名詞",
  },
  {
    eng: "anecdote",
    jpn: "逸話",
    category: "名詞",
  },
  {
    eng: "amiable",
    jpn: "愛想が良い，感じが良い",
    category: "形容詞",
  },
  {
    eng: "infuse",
    jpn: "注入する",
    category: "動詞",
  },
  {
    eng: "precedent",
    jpn: "先例，前提",
    category: "名詞",
  },
  {
    eng: "surmise",
    jpn: "を推測する",
    category: "動詞",
  },
  {
    eng: "noteworthy",
    jpn: "注目に値する，著しい",
    category: "形容詞",
  },
  {
    eng: "law enforcement",
    jpn: "法の執行",
    category: "名詞",
  },
  {
    eng: "contention",
    jpn: "争い，競争",
    category: "名詞",
  },
  {
    eng: "cuddle",
    jpn: "を抱きしめる",
    category: "動詞",
  },
  {
    eng: "take up",
    jpn: "を取り上げる",
    category: "熟語",
  },
  {
    eng: "duchess",
    jpn: "公爵夫人",
    category: "名詞",
  },
  {
    eng: "plaque",
    jpn: "額，歯垢",
    category: "名詞",
  },
  {
    eng: "malicious",
    jpn: "悪意のある，意地の悪い",
    category: "形容詞",
  },
  {
    eng: "win over",
    jpn: "に勝つ，説得する",
    category: "熟語",
  },
  {
    eng: "metro",
    jpn: "地下鉄",
    category: "名詞",
  },
  {
    eng: "hover",
    jpn: "空中停止する",
    category: "動詞",
  },
  {
    eng: "contemptuous",
    jpn: "軽蔑的な",
    category: "形容詞",
  },
  {
    eng: "irresistible",
    jpn: "抵抗できない，抑えられない",
    category: "形容詞",
  },
  {
    eng: "fusion",
    jpn: "融合",
    category: "名詞",
  },
  {
    eng: "predicate",
    jpn: "述語",
    category: "名詞",
  },
  {
    eng: "eat up",
    jpn: "食べつくす，使い果たす",
    category: "熟語",
  },
  {
    eng: "incoherent",
    jpn: "一貫性のない",
    category: "形容詞",
  },
  {
    eng: "distracted",
    jpn: "気の散った，注意をそらされた",
    category: "形容詞",
  },
  {
    eng: "slack",
    jpn: "緩んだ，たるんだ",
    category: "形容詞",
  },
  {
    eng: "extravagance",
    jpn: "浪費",
    category: "名詞",
  },
  {
    eng: "precarious",
    jpn: "不安定な，不確かな",
    category: "形容詞",
  },
  {
    eng: "crack up",
    jpn: "大破する，くじける",
    category: "熟語",
  },
  {
    eng: "pester",
    jpn: "を悩ませる，困らせる",
    category: "動詞",
  },
  {
    eng: "repress",
    jpn: "を抑圧する，鎮圧する",
    category: "動詞",
  },
  {
    eng: "be critical of",
    jpn: "に批判的である，否定的な",
    category: "熟語",
  },
  {
    eng: "pang",
    jpn: "激痛",
    category: "名詞",
  },
  {
    eng: "glisten",
    jpn: "きらめく，光る",
    category: "動詞",
  },
  {
    eng: "moor",
    jpn: "つなぐ",
    category: "動詞",
  },
  {
    eng: "decree",
    jpn: "法令",
    category: "名詞",
  },
  {
    eng: "censor",
    jpn: "検閲官",
    category: "名詞",
  },
  {
    eng: "evoke",
    jpn: "呼び起こす",
    category: "動詞",
  },
  {
    eng: "spectrum",
    jpn: "波長分布，波長の分布，光の分布",
    category: "名詞",
  },
  {
    eng: "rigorous",
    jpn: "厳しい，厳格な",
    category: "形容詞",
  },
  {
    eng: "superintendent",
    jpn: "監督者",
    category: "名詞",
  },
  {
    eng: "distance A from B",
    jpn: "AをBから遠ざける，AをBから隔てる",
    category: "熟語",
  },
  {
    eng: "differential",
    jpn: "差分の，差別的な",
    category: "形容詞",
  },
  {
    eng: "conjecture",
    jpn: "推測，憶測",
    category: "名詞",
  },
  {
    eng: "contamination",
    jpn: "汚染，汚染物質",
    category: "名詞",
  },
  {
    eng: "highness",
    jpn: "高度，殿下",
    category: "名詞",
  },
  {
    eng: "coherence",
    jpn: "一貫性，結合",
    category: "名詞",
  },
  {
    eng: "sinister",
    jpn: "不吉な，縁起の悪い",
    category: "形容詞",
  },
  {
    eng: "salvation",
    jpn: "救済，救い",
    category: "名詞",
  },
  {
    eng: "turn down",
    jpn: "を断る，拒む",
    category: "熟語",
  },
  {
    eng: "intuitive",
    jpn: "直感的な",
    category: "形容詞",
  },
  {
    eng: "temperance",
    jpn: "節制，禁酒",
    category: "名詞",
  },
  {
    eng: "abort",
    jpn: "中絶する，流産する",
    category: "動詞",
  },
  {
    eng: "matrix",
    jpn: "母体，原盤",
    category: "名詞",
  },
  {
    eng: "bring out",
    jpn: "を引き出す，引き起こす",
    category: "熟語",
  },
  {
    eng: "occidental",
    jpn: "西洋の",
    category: "形容詞",
  },
  {
    eng: "fall out of favor with",
    jpn: "に嫌われる，のお気に入りでなくなる",
    category: "熟語",
  },
  {
    eng: "haven",
    jpn: "避難所",
    category: "名詞",
  },
  {
    eng: "chant",
    jpn: "聖歌，歌",
    category: "名詞",
  },
  {
    eng: "rustic",
    jpn: "素朴な，田舎の",
    category: "形容詞",
  },
  {
    eng: "aquatic",
    jpn: "水生の，水の",
    category: "形容詞",
  },
  {
    eng: "gutter",
    jpn: "側溝，排水溝",
    category: "名詞",
  },
  {
    eng: "observatory",
    jpn: "観測所",
    category: "名詞",
  },
  {
    eng: "populous",
    jpn: "人口の多い",
    category: "形容詞",
  },
  {
    eng: "supersonic",
    jpn: "超音速の",
    category: "形容詞",
  },
  {
    eng: "janitor",
    jpn: "用務員，建物のメンテナンス等を担当する人",
    category: "名詞",
  },
  {
    eng: "in mind",
    jpn: "頭に置いて，考慮して",
    category: "熟語",
  },
  {
    eng: "poultry",
    jpn: "家禽",
    category: "名詞",
  },
  {
    eng: "sensory",
    jpn: "感覚の",
    category: "形容詞",
  },
  {
    eng: "ruthless",
    jpn: "冷酷な，無慈悲な",
    category: "形容詞",
  },
  {
    eng: "deter",
    jpn: "を辞めさせる，躊躇させる",
    category: "動詞",
  },
  {
    eng: "converse",
    jpn: "逆の",
    category: "形容詞",
  },
  {
    eng: "jot",
    jpn: "わずか，微量",
    category: "名詞",
  },
  {
    eng: "cheery",
    jpn: "陽気な，明るい",
    category: "形容詞",
  },
  {
    eng: "cut in",
    jpn: "切り込む，干渉する",
    category: "熟語",
  },
  {
    eng: "vocational",
    jpn: "職業の，職業上の",
    category: "形容詞",
  },
  {
    eng: "din",
    jpn: "騒音",
    category: "名詞",
  },
  {
    eng: "intimidate",
    jpn: "をおびえさせる，脅す",
    category: "動詞",
  },
  {
    eng: "insincere",
    jpn: "誠意のない，不誠実な",
    category: "形容詞",
  },
  {
    eng: "obstruct",
    jpn: "をふさぐ，遮断する",
    category: "動詞",
  },
  {
    eng: "astray",
    jpn: "道に迷って",
    category: "副詞",
  },
  {
    eng: "go back on",
    jpn: "を裏切る，約束を破る",
    category: "熟語",
  },
  {
    eng: "obsolete",
    jpn: "時代遅れの",
    category: "形容詞",
  },
  {
    eng: "wail",
    jpn: "泣き叫ぶ",
    category: "動詞",
  },
  {
    eng: "conceited",
    jpn: "うぬぼれた",
    category: "形容詞",
  },
  {
    eng: "ebb",
    jpn: "衰退，引き潮",
    category: "名詞",
  },
  {
    eng: "morale",
    jpn: "士気，風紀",
    category: "名詞",
  },
  {
    eng: "stun",
    jpn: "を気絶させる",
    category: "動詞",
  },
  {
    eng: "transcribe",
    jpn: "を筆記する，複写する",
    category: "動詞",
  },
  {
    eng: "rascal",
    jpn: "ならず者，ごろつき",
    category: "名詞",
  },
  {
    eng: "piety",
    jpn: "信仰心",
    category: "名詞",
  },
  {
    eng: "infer",
    jpn: "を推論する，推量する",
    category: "動詞",
  },
  {
    eng: "preoccupation",
    jpn: "没頭，夢中",
    category: "名詞",
  },
  {
    eng: "heredity",
    jpn: "遺伝，相続",
    category: "名詞",
  },
  {
    eng: "barter",
    jpn: "物々交換する",
    category: "動詞",
  },
  {
    eng: "aloof",
    jpn: "離れて，遠ざかって",
    category: "副詞",
  },
  {
    eng: "indecent",
    jpn: "わいせつな，みだらな",
    category: "形容詞",
  },
  {
    eng: "integrate A into B",
    jpn: "AをBに統合する，AをBに併合する",
    category: "熟語",
  },
  {
    eng: "gravel",
    jpn: "砂利",
    category: "名詞",
  },
  {
    eng: "compassionate",
    jpn: "思いやりのある，情け深い",
    category: "形容詞",
  },
  {
    eng: "elaboration",
    jpn: "精巧さ",
    category: "名詞",
  },
  {
    eng: "cynical",
    jpn: "皮肉な，冷笑的な",
    category: "形容詞",
  },
  {
    eng: "footnote",
    jpn: "脚注",
    category: "名詞",
  },
  {
    eng: "in line with",
    jpn: "に従って，一致して，合致して",
    category: "熟語",
  },
  {
    eng: "outrageous",
    jpn: "無法な，法律を無視した",
    category: "形容詞",
  },
  {
    eng: "providence",
    jpn: "摂理",
    category: "名詞",
  },
  {
    eng: "sustainable",
    jpn: "存続可能な，持続可能な",
    category: "形容詞",
  },
  {
    eng: "contradictory",
    jpn: "矛盾した，正反対の",
    category: "形容詞",
  },
  {
    eng: "conflict with",
    jpn: "と相容れない，合わない",
    category: "熟語",
  },
  {
    eng: "detection",
    jpn: "発見，探知",
    category: "名詞",
  },
  {
    eng: "surgical",
    jpn: "外科の，外科的な",
    category: "形容詞",
  },
  {
    eng: "inflammation",
    jpn: "炎症，発火",
    category: "名詞",
  },
  {
    eng: "mobilize",
    jpn: "動員する",
    category: "動詞",
  },
  {
    eng: "taint",
    jpn: "腐敗，汚染",
    category: "名詞",
  },
  {
    eng: "assertive",
    jpn: "断定的な",
    category: "形容詞",
  },
  {
    eng: "pedestal",
    jpn: "台座，基礎",
    category: "名詞",
  },
  {
    eng: "elasticity",
    jpn: "弾力，伸縮",
    category: "名詞",
  },
  {
    eng: "layman",
    jpn: "俗人",
    category: "名詞",
  },
  {
    eng: "tuition",
    jpn: "授業料，学費",
    category: "名詞",
  },
  {
    eng: "classify A as B",
    jpn: "AをBに分類する",
    category: "熟語",
  },
  {
    eng: "potent",
    jpn: "効能のある，効果的な",
    category: "形容詞",
  },
  {
    eng: "impair",
    jpn: "を損なう，弱める",
    category: "動詞",
  },
  {
    eng: "gust",
    jpn: "突風",
    category: "名詞",
  },
  {
    eng: "radius",
    jpn: "半径",
    category: "名詞",
  },
  {
    eng: "dynasty",
    jpn: "王朝，王家",
    category: "名詞",
  },
  {
    eng: "stop by",
    jpn: "立ち寄る，短時間訪れる",
    category: "熟語",
  },
  {
    eng: "undermine",
    jpn: "弱体化させる，衰退させる",
    category: "動詞",
  },
  {
    eng: "overcast",
    jpn: "曇った，陰気な",
    category: "形容詞",
  },
  {
    eng: "feudal",
    jpn: "領地の，封建の",
    category: "形容詞",
  },
  {
    eng: "intermission",
    jpn: "休止，休憩",
    category: "名詞",
  },
  {
    eng: "shoplift",
    jpn: "を万引きする",
    category: "動詞",
  },
  {
    eng: "boulevard",
    jpn: "大通り",
    category: "名詞",
  },
  {
    eng: "be tidied up",
    jpn: "きちんと片づけた，整えた",
    category: "熟語",
  },
  {
    eng: "invest in",
    jpn: "に投資する，に資本を提供する",
    category: "熟語",
  },
  {
    eng: "as it turns out",
    jpn: "結局のところ，最終的に",
    category: "熟語",
  },
  {
    eng: "shun",
    jpn: "を避ける",
    category: "動詞",
  },
  {
    eng: "damned",
    jpn: "のろわれた",
    category: "形容詞",
  },
  {
    eng: "act on",
    jpn: "を決定する，決議する",
    category: "熟語",
  },
  {
    eng: "curfew",
    jpn: "門限",
    category: "名詞",
  },
  {
    eng: "uproar",
    jpn: "大騒ぎ，騒動",
    category: "名詞",
  },
  {
    eng: "spiral",
    jpn: "螺旋の",
    category: "形容詞",
  },
  {
    eng: "yolk",
    jpn: "卵黄，黄身",
    category: "名詞",
  },
  {
    eng: "terminate",
    jpn: "を終了する，終わらせる",
    category: "動詞",
  },
  {
    eng: "petroleum",
    jpn: "石油",
    category: "名詞",
  },
  {
    eng: "monotony",
    jpn: "単調，一本調子",
    category: "名詞",
  },
  {
    eng: "linguistics",
    jpn: "言語学",
    category: "名詞",
  },
  {
    eng: "redeem",
    jpn: "を引き換える，買い戻す",
    category: "動詞",
  },
  {
    eng: "enrichment",
    jpn: "濃縮",
    category: "名詞",
  },
  {
    eng: "application form",
    jpn: "申込用紙，願書",
    category: "名詞",
  },
  {
    eng: "adjacent",
    jpn: "隣接している",
    category: "形容詞",
  },
  {
    eng: "biased toward",
    jpn: "に対する偏見，偏った見方",
    category: "熟語",
  },
  {
    eng: "bondage",
    jpn: "緊縛，縛り",
    category: "名詞",
  },
  {
    eng: "infuriate",
    jpn: "を激怒させる",
    category: "動詞",
  },
  {
    eng: "oblivion",
    jpn: "忘却",
    category: "名詞",
  },
  {
    eng: "sift",
    jpn: "をふるいにかける",
    category: "動詞",
  },
  {
    eng: "placid",
    jpn: "穏やかな，温和な",
    category: "形容詞",
  },
  {
    eng: "persevere",
    jpn: "を辛抱する，我慢する",
    category: "動詞",
  },
  {
    eng: "amplify",
    jpn: "を拡大する，増大する",
    category: "動詞",
  },
  {
    eng: "fixture",
    jpn: "備品",
    category: "名詞",
  },
  {
    eng: "disruptive",
    jpn: "破壊的な，破壊力のある",
    category: "形容詞",
  },
  {
    eng: "impeach",
    jpn: "を責める，弾劾する",
    category: "動詞",
  },
  {
    eng: "inexplicable",
    jpn: "不可解な，説明できない",
    category: "形容詞",
  },
  {
    eng: "allocation",
    jpn: "割り当て，配置",
    category: "名詞",
  },
  {
    eng: "hypocrite",
    jpn: "偽善者",
    category: "名詞",
  },
  {
    eng: "blizzard",
    jpn: "猛吹雪",
    category: "名詞",
  },
  {
    eng: "longevity",
    jpn: "寿命，長寿",
    category: "名詞",
  },
  {
    eng: "void",
    jpn: "無効の",
    category: "形容詞",
  },
  {
    eng: "fatherland",
    jpn: "祖国",
    category: "名詞",
  },
  {
    eng: "lock in",
    jpn: "を閉じ込める，密封するように閉じる",
    category: "熟語",
  },
  {
    eng: "reminiscence",
    jpn: "回想",
    category: "名詞",
  },
  {
    eng: "give rise to",
    jpn: "を生じさせる，を引き起こす",
    category: "熟語",
  },
  {
    eng: "surge",
    jpn: "波打つ，急に上がる",
    category: "動詞",
  },
  {
    eng: "participle",
    jpn: "分詞",
    category: "名詞",
  },
  {
    eng: "obstacle to",
    jpn: "への障壁，の妨害",
    category: "熟語",
  },
  {
    eng: "reservoir",
    jpn: "貯水池",
    category: "名詞",
  },
  {
    eng: "distill",
    jpn: "蒸留する",
    category: "動詞",
  },
  {
    eng: "evacuate",
    jpn: "避難する，逃避する",
    category: "動詞",
  },
  {
    eng: "trickle",
    jpn: "したたる",
    category: "動詞",
  },
  {
    eng: "crest",
    jpn: "とさか",
    category: "名詞",
  },
  {
    eng: "pollutant",
    jpn: "汚染物質",
    category: "名詞",
  },
  {
    eng: "contour",
    jpn: "輪郭",
    category: "名詞",
  },
  {
    eng: "sum up",
    jpn: "を合計する，要約する",
    category: "熟語",
  },
  {
    eng: "irrelevance",
    jpn: "無関係，見当違い",
    category: "名詞",
  },
  {
    eng: "fragrant",
    jpn: "香りのよい，香り高い",
    category: "形容詞",
  },
  {
    eng: "periodic",
    jpn: "定期的な，周期的な",
    category: "形容詞",
  },
  {
    eng: "tentative",
    jpn: "暫定の，仮の",
    category: "形容詞",
  },
  {
    eng: "crimson",
    jpn: "真紅の",
    category: "形容詞",
  },
  {
    eng: "butler",
    jpn: "執事",
    category: "名詞",
  },
  {
    eng: "rogue",
    jpn: "悪党",
    category: "名詞",
  },
  {
    eng: "preparatory",
    jpn: "準備の",
    category: "形容詞",
  },
  {
    eng: "acoustic",
    jpn: "音響の，聴覚の",
    category: "形容詞",
  },
  {
    eng: "lighthearted",
    jpn: "気軽な，気楽な",
    category: "形容詞",
  },
  {
    eng: "discord",
    jpn: "不一致，不和",
    category: "名詞",
  },
  {
    eng: "fore",
    jpn: "前方の，前部の",
    category: "形容詞",
  },
  {
    eng: "throng",
    jpn: "群衆，群れ",
    category: "名詞",
  },
  {
    eng: "chauffeur",
    jpn: "運転手",
    category: "名詞",
  },
  {
    eng: "midweek",
    jpn: "週半ば",
    category: "名詞",
  },
  {
    eng: "psychic",
    jpn: "超能力のある",
    category: "形容詞",
  },
  {
    eng: "solicit",
    jpn: "を懇願する",
    category: "動詞",
  },
  {
    eng: "flair",
    jpn: "才能，能力",
    category: "名詞",
  },
  {
    eng: "madden",
    jpn: "を発狂させる，激怒させる",
    category: "動詞",
  },
  {
    eng: "painstaking",
    jpn: "骨を折る，苦心する",
    category: "形容詞",
  },
  {
    eng: "lukewarm",
    jpn: "なまぬるい，微温の",
    category: "形容詞",
  },
  {
    eng: "flaw",
    jpn: "欠点",
    category: "名詞",
  },
  {
    eng: "sling",
    jpn: "投石器",
    category: "名詞",
  },
  {
    eng: "legitimacy",
    jpn: "合法，正当性",
    category: "名詞",
  },
  {
    eng: "go over",
    jpn: "を繰り返す",
    category: "熟語",
  },
  {
    eng: "see through",
    jpn: "を見抜く，見通す，透視する",
    category: "熟語",
  },
  {
    eng: "assassin",
    jpn: "暗殺者，刺客",
    category: "名詞",
  },
  {
    eng: "plume",
    jpn: "羽根飾り",
    category: "名詞",
  },
  {
    eng: "posterity",
    jpn: "子孫",
    category: "名詞",
  },
  {
    eng: "scrutiny",
    jpn: "精査",
    category: "名詞",
  },
  {
    eng: "overdue",
    jpn: "延滞した，期限の過ぎた",
    category: "形容詞",
  },
  {
    eng: "diffuse",
    jpn: "を散らす，拡散する",
    category: "動詞",
  },
  {
    eng: "deteriorate",
    jpn: "を悪化させる",
    category: "動詞",
  },
  {
    eng: "grandeur",
    jpn: "雄大さ，壮大さ",
    category: "名詞",
  },
  {
    eng: "parasite",
    jpn: "寄生虫，寄生生物",
    category: "名詞",
  },
  {
    eng: "renounce",
    jpn: "を放棄する，中止する",
    category: "動詞",
  },
  {
    eng: "porridge",
    jpn: "おかゆ",
    category: "名詞",
  },
  {
    eng: "at the moment",
    jpn: "今のところ，現状",
    category: "熟語",
  },
  {
    eng: "sled",
    jpn: "そり",
    category: "名詞",
  },
  {
    eng: "entice",
    jpn: "誘惑する，魅惑する",
    category: "動詞",
  },
  {
    eng: "peat",
    jpn: "泥炭",
    category: "名詞",
  },
  {
    eng: "put forth",
    jpn: "を進める，出す",
    category: "熟語",
  },
  {
    eng: "sunken",
    jpn: "沈んだ",
    category: "形容詞",
  },
  {
    eng: "oversight",
    jpn: "見落とし，過失",
    category: "名詞",
  },
  {
    eng: "immeasurable",
    jpn: "計り知れない，無限の",
    category: "形容詞",
  },
  {
    eng: "outsmart",
    jpn: "裏をかく，出し抜ける",
    category: "動詞",
  },
  {
    eng: "neutralize",
    jpn: "中和する",
    category: "動詞",
  },
  {
    eng: "supremacy",
    jpn: "至高，覇権",
    category: "名詞",
  },
  {
    eng: "sign up",
    jpn: "登録する，署名する",
    category: "熟語",
  },
  {
    eng: "electrify",
    jpn: "帯電させる",
    category: "動詞",
  },
  {
    eng: "eclipse",
    jpn: "日食",
    category: "名詞",
  },
  {
    eng: "heath",
    jpn: "荒野，野原",
    category: "名詞",
  },
  {
    eng: "boon",
    jpn: "恩恵",
    category: "名詞",
  },
  {
    eng: "epic",
    jpn: "大作，壮大な作品",
    category: "名詞",
  },
  {
    eng: "jest",
    jpn: "冗談",
    category: "名詞",
  },
  {
    eng: "phonetic",
    jpn: "音声の",
    category: "形容詞",
  },
  {
    eng: "wisdom tooth",
    jpn: "親知らず，知歯",
    category: "名詞",
  },
  {
    eng: "sewer",
    jpn: "下水道",
    category: "名詞",
  },
  {
    eng: "pane",
    jpn: "鏡板",
    category: "名詞",
  },
  {
    eng: "muscular",
    jpn: "筋肉質の",
    category: "形容詞",
  },
  {
    eng: "border",
    jpn: "国境，境界",
    category: "名詞",
  },
  {
    eng: "recurrence",
    jpn: "再発，反復",
    category: "名詞",
  },
  {
    eng: "skeptical",
    jpn: "懐疑的な，疑い深い",
    category: "形容詞",
  },
  {
    eng: "frugal",
    jpn: "質素な，倹約な",
    category: "形容詞",
  },
  {
    eng: "daze",
    jpn: "目をくらます",
    category: "動詞",
  },
  {
    eng: "foretell",
    jpn: "を予告する，予言する",
    category: "動詞",
  },
  {
    eng: "emigrant",
    jpn: "移民，移住者",
    category: "名詞",
  },
  {
    eng: "sanctuary",
    jpn: "聖域，聖なる場所",
    category: "名詞",
  },
  {
    eng: "cheeky",
    jpn: "生意気な，ずうずうしい",
    category: "形容詞",
  },
  {
    eng: "prank",
    jpn: "いたずら，悪ふざけ",
    category: "名詞",
  },
  {
    eng: "fabulous",
    jpn: "素晴らしい",
    category: "形容詞",
  },
  {
    eng: "segregate",
    jpn: "を分離する，隔離する",
    category: "動詞",
  },
  {
    eng: "cuisine",
    jpn: "料理",
    category: "名詞",
  },
  {
    eng: "skim over",
    jpn: "流し読みする，ざっと読む，素早く読む",
    category: "熟語",
  },
  {
    eng: "retention",
    jpn: "保持，維持",
    category: "名詞",
  },
  {
    eng: "bring off",
    jpn: "を成し遂げる，達成する，完成させる",
    category: "熟語",
  },
  {
    eng: "whereby",
    jpn: "それによって，それに従って",
    category: "その他",
  },
  {
    eng: "partition",
    jpn: "仕切り，分割",
    category: "名詞",
  },
  {
    eng: "dubious",
    jpn: "疑っている，はっきりしない",
    category: "形容詞",
  },
  {
    eng: "intrigue",
    jpn: "陰謀",
    category: "名詞",
  },
  {
    eng: "captivate",
    jpn: "を魅了する",
    category: "動詞",
  },
  {
    eng: "expose A to B",
    jpn: "AをBにさらす",
    category: "熟語",
  },
  {
    eng: "erupt",
    jpn: "噴火する",
    category: "動詞",
  },
  {
    eng: "prone",
    jpn: "しがちで，傾向がある",
    category: "形容詞",
  },
  {
    eng: "level off",
    jpn: "平らにする，水平にする",
    category: "熟語",
  },
  {
    eng: "deceptive",
    jpn: "だまそうとする，当てにならない",
    category: "形容詞",
  },
  {
    eng: "talk up",
    jpn: "を大袈裟にほめる，過大に評価する",
    category: "熟語",
  },
  {
    eng: "contribute to",
    jpn: "に貢献する",
    category: "熟語",
  },
  {
    eng: "designation",
    jpn: "指定，選定",
    category: "名詞",
  },
  {
    eng: "avert",
    jpn: "を逸らす，避ける",
    category: "動詞",
  },
  {
    eng: "dreary",
    jpn: "退屈な",
    category: "形容詞",
  },
  {
    eng: "camel",
    jpn: "ラクダ",
    category: "名詞",
  },
  {
    eng: "stink",
    jpn: "悪臭を放つ",
    category: "動詞",
  },
  {
    eng: "thermal",
    jpn: "熱の，温度に関する",
    category: "形容詞",
  },
  {
    eng: "devoid",
    jpn: "欠けている，欠如している",
    category: "形容詞",
  },
  {
    eng: "thump",
    jpn: "を殴る，たたく",
    category: "動詞",
  },
  {
    eng: "mimic",
    jpn: "を模倣する，真似る",
    category: "動詞",
  },
  {
    eng: "place limitation on",
    jpn: "に制限を加える，限界を与える",
    category: "熟語",
  },
  {
    eng: "meager",
    jpn: "貧弱な",
    category: "形容詞",
  },
  {
    eng: "notation",
    jpn: "表記，注釈",
    category: "名詞",
  },
  {
    eng: "torrent",
    jpn: "急流",
    category: "名詞",
  },
  {
    eng: "merger",
    jpn: "合併",
    category: "名詞",
  },
  {
    eng: "perpetuate",
    jpn: "を永続させる",
    category: "動詞",
  },
  {
    eng: "evergreen",
    jpn: "常緑の",
    category: "形容詞",
  },
  {
    eng: "rebuke",
    jpn: "を注意する，しかる",
    category: "動詞",
  },
  {
    eng: "manipulation",
    jpn: "巧妙な扱い，操作",
    category: "名詞",
  },
  {
    eng: "holocaust",
    jpn: "大虐殺",
    category: "名詞",
  },
  {
    eng: "hectic",
    jpn: "興奮した",
    category: "形容詞",
  },
  {
    eng: "nod off",
    jpn: "眠り込む，眠る",
    category: "熟語",
  },
  {
    eng: "denounce",
    jpn: "非難する，批判する",
    category: "動詞",
  },
  {
    eng: "incur",
    jpn: "負う，招く",
    category: "動詞",
  },
  {
    eng: "sap",
    jpn: "樹液",
    category: "名詞",
  },
  {
    eng: "predominant",
    jpn: "優勢な，有力な",
    category: "形容詞",
  },
  {
    eng: "interim",
    jpn: "暫定，中間",
    category: "名詞",
  },
  {
    eng: "affluent",
    jpn: "裕福な，富裕な",
    category: "形容詞",
  },
  {
    eng: "devotee",
    jpn: "信者",
    category: "名詞",
  },
  {
    eng: "hit the books",
    jpn: "猛勉強する，必死に勉強する",
    category: "熟語",
  },
  {
    eng: "pretext",
    jpn: "口実，弁解",
    category: "名詞",
  },
  {
    eng: "idly",
    jpn: "何もしないで，怠けて",
    category: "副詞",
  },
  {
    eng: "repentance",
    jpn: "後悔，懺悔",
    category: "名詞",
  },
  {
    eng: "ceaseless",
    jpn: "絶え間ない",
    category: "形容詞",
  },
  {
    eng: "bizarre",
    jpn: "奇妙な，異様な",
    category: "形容詞",
  },
  {
    eng: "gratification",
    jpn: "満足，喜び",
    category: "名詞",
  },
  {
    eng: "reunion",
    jpn: "同窓会",
    category: "名詞",
  },
  {
    eng: "radioactive",
    jpn: "放射性の",
    category: "形容詞",
  },
  {
    eng: "akin",
    jpn: "同族の，血族の",
    category: "形容詞",
  },
  {
    eng: "meek",
    jpn: "おとなしい，温和な",
    category: "形容詞",
  },
  {
    eng: "purify",
    jpn: "を清める，浄化する",
    category: "動詞",
  },
  {
    eng: "layoff",
    jpn: "一時解雇",
    category: "名詞",
  },
  {
    eng: "bounce back",
    jpn: "持ち直す，回復する",
    category: "熟語",
  },
  {
    eng: "fight back",
    jpn: "応戦する，やり返す",
    category: "熟語",
  },
  {
    eng: "illegitimate",
    jpn: "違法の，非合法の",
    category: "形容詞",
  },
  {
    eng: "exertion",
    jpn: "尽力，努力",
    category: "名詞",
  },
  {
    eng: "lethal",
    jpn: "致命的な",
    category: "形容詞",
  },
  {
    eng: "as before",
    jpn: "以前の様に，以前と同等に",
    category: "熟語",
  },
  {
    eng: "median",
    jpn: "中央値",
    category: "名詞",
  },
  {
    eng: "condemnation",
    jpn: "非難",
    category: "名詞",
  },
  {
    eng: "fall into",
    jpn: "に属する，分類される",
    category: "熟語",
  },
  {
    eng: "lengthy",
    jpn: "長い",
    category: "形容詞",
  },
  {
    eng: "frivolous",
    jpn: "軽薄な，いい加減な",
    category: "形容詞",
  },
  {
    eng: "germ",
    jpn: "細菌",
    category: "名詞",
  },
  {
    eng: "compulsion",
    jpn: "脅迫，強制",
    category: "名詞",
  },
  {
    eng: "boulder",
    jpn: "丸石",
    category: "名詞",
  },
  {
    eng: "sequel",
    jpn: "続編，続き",
    category: "名詞",
  },
  {
    eng: "agitate",
    jpn: "を扇動する，揺り動かす",
    category: "動詞",
  },
  {
    eng: "jump at",
    jpn: "に飛びつく，すぐに受け入れる",
    category: "熟語",
  },
  {
    eng: "tangible",
    jpn: "有形の，手で触れる",
    category: "形容詞",
  },
  {
    eng: "keep up with",
    jpn: "に遅れず付いていく，遅れないで追随する",
    category: "熟語",
  },
  {
    eng: "evade",
    jpn: "避ける，避ける",
    category: "動詞",
  },
  {
    eng: "thong",
    jpn: "ひも",
    category: "名詞",
  },
  {
    eng: "seduce",
    jpn: "を誘惑する，そそのかす",
    category: "動詞",
  },
  {
    eng: "sinner",
    jpn: "罪人",
    category: "名詞",
  },
  {
    eng: "massacre",
    jpn: "皆殺し，大虐殺",
    category: "名詞",
  },
  {
    eng: "haze",
    jpn: "もや，かすみ",
    category: "名詞",
  },
  {
    eng: "woe",
    jpn: "悲痛，苦悩",
    category: "名詞",
  },
  {
    eng: "ponder",
    jpn: "を熟考する，じっくり考える",
    category: "動詞",
  },
  {
    eng: "lucrative",
    jpn: "利益が上がる，儲かる",
    category: "形容詞",
  },
  {
    eng: "illogical",
    jpn: "非論理的な",
    category: "形容詞",
  },
  {
    eng: "radiant",
    jpn: "輝く，光を放つ",
    category: "形容詞",
  },
  {
    eng: "inborn",
    jpn: "生まれつきの，先天的な",
    category: "形容詞",
  },
  {
    eng: "doze",
    jpn: "居眠りする",
    category: "動詞",
  },
  {
    eng: "oversee",
    jpn: "を監督する",
    category: "動詞",
  },
  {
    eng: "plateau",
    jpn: "高原，台地",
    category: "名詞",
  },
  {
    eng: "detain",
    jpn: "を引き留める，留め置く",
    category: "動詞",
  },
  {
    eng: "match A with B",
    jpn: "AをBと適合させる",
    category: "熟語",
  },
  {
    eng: "petty",
    jpn: "取るに足らない，ささいな",
    category: "形容詞",
  },
  {
    eng: "sage",
    jpn: "賢明な",
    category: "形容詞",
  },
  {
    eng: "peek",
    jpn: "のぞき見る，ちらっとのぞく",
    category: "動詞",
  },
  {
    eng: "impotent",
    jpn: "無力な，無気力な",
    category: "形容詞",
  },
  {
    eng: "come through",
    jpn: "を通り抜ける，やり通す",
    category: "熟語",
  },
  {
    eng: "fall through",
    jpn: "失敗に終わる，駄目になる，台無しになる",
    category: "熟語",
  },
  {
    eng: "dictatorship",
    jpn: "独裁",
    category: "名詞",
  },
  {
    eng: "confound",
    jpn: "を困惑させる，混乱させる",
    category: "動詞",
  },
  {
    eng: "anarchy",
    jpn: "無秩序，無政府状態",
    category: "名詞",
  },
  {
    eng: "head out",
    jpn: "出発する，去る",
    category: "熟語",
  },
  {
    eng: "deduct",
    jpn: "を差し引く，控除する",
    category: "動詞",
  },
  {
    eng: "irrigation",
    jpn: "灌漑",
    category: "名詞",
  },
  {
    eng: "toothpick",
    jpn: "爪楊枝",
    category: "名詞",
  },
  {
    eng: "avalanche",
    jpn: "雪崩",
    category: "名詞",
  },
  {
    eng: "residue",
    jpn: "残留物，残余",
    category: "名詞",
  },
  {
    eng: "irrigate",
    jpn: "を灌漑する，水を引く",
    category: "動詞",
  },
  {
    eng: "imprudent",
    jpn: "軽率な，無謀な",
    category: "形容詞",
  },
  {
    eng: "myriad",
    jpn: "無数の",
    category: "名詞",
  },
  {
    eng: "disfigure",
    jpn: "醜くする",
    category: "動詞",
  },
  {
    eng: "pinnacle",
    jpn: "頂点",
    category: "名詞",
  },
  {
    eng: "botanist",
    jpn: "植物学者，植物研究者",
    category: "名詞",
  },
  {
    eng: "discreet",
    jpn: "慎重な，分別のある",
    category: "形容詞",
  },
  {
    eng: "maternal",
    jpn: "母の",
    category: "形容詞",
  },
  {
    eng: "regiment",
    jpn: "連隊",
    category: "名詞",
  },
  {
    eng: "congestion",
    jpn: "密集，充満",
    category: "名詞",
  },
  {
    eng: "dilute",
    jpn: "薄める，希釈する",
    category: "動詞",
  },
  {
    eng: "crumble",
    jpn: "を粉々にする",
    category: "動詞",
  },
  {
    eng: "reciprocal",
    jpn: "相互の",
    category: "形容詞",
  },
  {
    eng: "let A go",
    jpn: "Aを解雇する，自由にする",
    category: "熟語",
  },
  {
    eng: "face off",
    jpn: "対決する，向き合う，立ち向かう",
    category: "熟語",
  },
  {
    eng: "feat",
    jpn: "偉業，功績",
    category: "名詞",
  },
  {
    eng: "depot",
    jpn: "停車場",
    category: "名詞",
  },
  {
    eng: "dioxide",
    jpn: "二酸化物",
    category: "名詞",
  },
  {
    eng: "localize",
    jpn: "地方化する",
    category: "動詞",
  },
  {
    eng: "saving account",
    jpn: "普通預金，通常の預金",
    category: "名詞",
  },
  {
    eng: "complacent",
    jpn: "自己満足の，独りよがりの",
    category: "形容詞",
  },
  {
    eng: "perverse",
    jpn: "ひねくれた，強情な",
    category: "形容詞",
  },
  {
    eng: "tip over",
    jpn: "ひっくり返る，転覆する",
    category: "熟語",
  },
  {
    eng: "childbirth",
    jpn: "出産，分娩",
    category: "名詞",
  },
  {
    eng: "break down",
    jpn: "を壊す，解体する",
    category: "熟語",
  },
  {
    eng: "tact",
    jpn: "機転",
    category: "名詞",
  },
  {
    eng: "tumor",
    jpn: "腫瘍",
    category: "名詞",
  },
  {
    eng: "be likely to",
    jpn: "する可能性が高い，しそうになる",
    category: "熟語",
  },
  {
    eng: "stepfather",
    jpn: "継父，義父",
    category: "名詞",
  },
  {
    eng: "abstraction",
    jpn: "抽象的",
    category: "名詞",
  },
  {
    eng: "intrinsic",
    jpn: "本質的な，基本的な",
    category: "形容詞",
  },
  {
    eng: "premature",
    jpn: "時期尚早の，早まった",
    category: "形容詞",
  },
  {
    eng: "forefinger",
    jpn: "人差し指",
    category: "名詞",
  },
  {
    eng: "bran",
    jpn: "ぬか",
    category: "名詞",
  },
  {
    eng: "mythology",
    jpn: "神話",
    category: "名詞",
  },
  {
    eng: "ravage",
    jpn: "破壊",
    category: "動詞",
  },
  {
    eng: "get down to",
    jpn: "に下りる，取り組む",
    category: "熟語",
  },
  {
    eng: "kidney",
    jpn: "腎臓",
    category: "名詞",
  },
  {
    eng: "swoop",
    jpn: "急襲する",
    category: "動詞",
  },
  {
    eng: "whatsoever",
    jpn: "なんでも",
    category: "副詞",
  },
  {
    eng: "come along",
    jpn: "一緒に行く，共に進む",
    category: "熟語",
  },
  {
    eng: "plummet",
    jpn: "おもり",
    category: "名詞",
  },
  {
    eng: "herald",
    jpn: "報道者，使者",
    category: "名詞",
  },
  {
    eng: "notorious",
    jpn: "悪名高い，有名な",
    category: "形容詞",
  },
  {
    eng: "protocol",
    jpn: "儀礼",
    category: "名詞",
  },
  {
    eng: "alienate",
    jpn: "を遠ざける",
    category: "動詞",
  },
  {
    eng: "cosmic",
    jpn: "宇宙の，宙域の",
    category: "形容詞",
  },
  {
    eng: "put an end to",
    jpn: "を終わらせる，終了させる",
    category: "熟語",
  },
  {
    eng: "tumult",
    jpn: "騒動，暴動",
    category: "名詞",
  },
  {
    eng: "play out",
    jpn: "最後まで演じる，遊ぶ，最後まで続ける",
    category: "熟語",
  },
  {
    eng: "retrospect",
    jpn: "回顧，回想",
    category: "名詞",
  },
  {
    eng: "pack up",
    jpn: "を荷造りする，詰める",
    category: "熟語",
  },
  {
    eng: "apiece",
    jpn: "各自で",
    category: "副詞",
  },
  {
    eng: "get on with",
    jpn: "とうまくやっていく，スムーズに進める",
    category: "熟語",
  },
  {
    eng: "mediocre",
    jpn: "平凡な，月並みの",
    category: "形容詞",
  },
  {
    eng: "renown",
    jpn: "名声",
    category: "名詞",
  },
  {
    eng: "intricacy",
    jpn: "複雑さ",
    category: "名詞",
  },
  {
    eng: "effortless",
    jpn: "楽な",
    category: "形容詞",
  },
  {
    eng: "futile",
    jpn: "無駄な",
    category: "形容詞",
  },
  {
    eng: "entrust",
    jpn: "委託する",
    category: "動詞",
  },
  {
    eng: "robust",
    jpn: "たくましい，強靭な",
    category: "形容詞",
  },
  {
    eng: "drought",
    jpn: "干ばつ",
    category: "名詞",
  },
  {
    eng: "spank",
    jpn: "尻を叩く",
    category: "動詞",
  },
  {
    eng: "warranty",
    jpn: "保証，保障",
    category: "名詞",
  },
  {
    eng: "attest",
    jpn: "を証明する",
    category: "動詞",
  },
  {
    eng: "evaporate",
    jpn: "蒸発する",
    category: "動詞",
  },
  {
    eng: "squeak",
    jpn: "きしむ",
    category: "動詞",
  },
  {
    eng: "retrace",
    jpn: "引き返す",
    category: "動詞",
  },
  {
    eng: "denote",
    jpn: "表示する，示す",
    category: "動詞",
  },
  {
    eng: "aggravate",
    jpn: "悪化させる，劣化させる",
    category: "動詞",
  },
  {
    eng: "humane",
    jpn: "人道的な，人道に基づく",
    category: "形容詞",
  },
  {
    eng: "crunch",
    jpn: "を噛み砕く",
    category: "動詞",
  },
  {
    eng: "forcible",
    jpn: "強制的な，強い",
    category: "形容詞",
  },
  {
    eng: "nick",
    jpn: "刻み目",
    category: "名詞",
  },
  {
    eng: "browse",
    jpn: "拾い読みする，一部読む",
    category: "動詞",
  },
  {
    eng: "apprehend",
    jpn: "を逮捕する",
    category: "動詞",
  },
  {
    eng: "tribunal",
    jpn: "裁判所",
    category: "名詞",
  },
  {
    eng: "gaily",
    jpn: "陽気に",
    category: "副詞",
  },
  {
    eng: "retrieve",
    jpn: "取り戻す",
    category: "動詞",
  },
  {
    eng: "recur",
    jpn: "再発する，繰り返される",
    category: "動詞",
  },
  {
    eng: "glossary",
    jpn: "用語集",
    category: "名詞",
  },
  {
    eng: "affiliate",
    jpn: "連携させる，合併する",
    category: "動詞",
  },
  {
    eng: "compression",
    jpn: "圧縮，ようやく",
    category: "名詞",
  },
  {
    eng: "miltary service",
    jpn: "兵役，徴兵",
    category: "名詞",
  },
  {
    eng: "defiant",
    jpn: "反抗的な，挑戦的な",
    category: "形容詞",
  },
  {
    eng: "fungus",
    jpn: "菌",
    category: "名詞",
  },
  {
    eng: "improvise",
    jpn: "即興で作る",
    category: "動詞",
  },
  {
    eng: "sluggish",
    jpn: "鈍い，遅い",
    category: "形容詞",
  },
  {
    eng: "glossy",
    jpn: "光沢のある，つやのある",
    category: "形容詞",
  },
  {
    eng: "acclaim",
    jpn: "称賛する",
    category: "動詞",
  },
  {
    eng: "commencement",
    jpn: "開始",
    category: "名詞",
  },
  {
    eng: "coma",
    jpn: "こん睡状態",
    category: "名詞",
  },
  {
    eng: "trespass",
    jpn: "侵害する，つけ込む",
    category: "動詞",
  },
  {
    eng: "convene",
    jpn: "を召集する",
    category: "動詞",
  },
  {
    eng: "debris",
    jpn: "破片，残骸",
    category: "名詞",
  },
  {
    eng: "predator",
    jpn: "捕食者",
    category: "名詞",
  },
  {
    eng: "regulatory",
    jpn: "規制，制限",
    category: "形容詞",
  },
  {
    eng: "diagnose",
    jpn: "を診断する",
    category: "動詞",
  },
  {
    eng: "vice",
    jpn: "副",
    category: "名詞",
  },
  {
    eng: "deploy",
    jpn: "を展開する，配置する",
    category: "動詞",
  },
  {
    eng: "paid vacation",
    jpn: "有給休暇，給与付きの休暇",
    category: "名詞",
  },
  {
    eng: "trance",
    jpn: "恍惚，夢中",
    category: "名詞",
  },
  {
    eng: "consecutive",
    jpn: "連続した",
    category: "形容詞",
  },
  {
    eng: "devastating",
    jpn: "壊滅的な，破壊的な",
    category: "形容詞",
  },
  {
    eng: "inmate",
    jpn: "収容者，被収容者",
    category: "名詞",
  },
  {
    eng: "accountability",
    jpn: "説明責任",
    category: "名詞",
  },
  {
    eng: "minimal",
    jpn: "最小限の，最低限の",
    category: "形容詞",
  },
  {
    eng: "carbohydrate",
    jpn: "炭水化物",
    category: "名詞",
  },
  {
    eng: "legislator",
    jpn: "議員",
    category: "名詞",
  },
  {
    eng: "envision",
    jpn: "想像する，思い描く",
    category: "動詞",
  },
  {
    eng: "theology",
    jpn: "神学",
    category: "名詞",
  },
  {
    eng: "critical of",
    jpn: "を批判する，非難する",
    category: "熟語",
  },
  {
    eng: "mandate",
    jpn: "権限，指令",
    category: "名詞",
  },
  {
    eng: "regulator",
    jpn: "規定者",
    category: "名詞",
  },
  {
    eng: "give away",
    jpn: "無償で配る，暴露する",
    category: "熟語",
  },
  {
    eng: "mentor",
    jpn: "指導者，リーダー",
    category: "名詞",
  },
  {
    eng: "tactic",
    jpn: "戦術",
    category: "名詞",
  },
  {
    eng: "annual fee",
    jpn: "年会費，年会料",
    category: "名詞",
  },
  {
    eng: "enact",
    jpn: "を制定する，法令化する",
    category: "動詞",
  },
  {
    eng: "articulate",
    jpn: "明確にする",
    category: "動詞",
  },
  {
    eng: "stand out",
    jpn: "目立つ，すぐれている",
    category: "熟語",
  },
  {
    eng: "skull",
    jpn: "頭蓋骨",
    category: "名詞",
  },
  {
    eng: "nominee",
    jpn: "候補者",
    category: "名詞",
  },
  {
    eng: "compliance",
    jpn: "社会規範",
    category: "名詞",
  },
  {
    eng: "indigenous",
    jpn: "原産の",
    category: "形容詞",
  },
  {
    eng: "influx",
    jpn: "流入",
    category: "名詞",
  },
  {
    eng: "pageant",
    jpn: "壮観",
    category: "名詞",
  },
  {
    eng: "cognitive",
    jpn: "認識の",
    category: "形容詞",
  },
  {
    eng: "ferocious",
    jpn: "どう猛な，恐ろしい",
    category: "形容詞",
  },
  {
    eng: "overstate",
    jpn: "を誇張する",
    category: "動詞",
  },
  {
    eng: "surveillance",
    jpn: "監視，見守り",
    category: "名詞",
  },
  {
    eng: "courtroom",
    jpn: "法廷",
    category: "名詞",
  },
  {
    eng: "eligible",
    jpn: "資格のある，適格な",
    category: "形容詞",
  },
  {
    eng: "slit",
    jpn: "を切り開く",
    category: "動詞",
  },
  {
    eng: "rampage",
    jpn: "大暴れ，乱闘",
    category: "名詞",
  },
  {
    eng: "revitalize",
    jpn: "活性化させる",
    category: "動詞",
  },
  {
    eng: "blurry",
    jpn: "ぼやけた",
    category: "形容詞",
  },
  {
    eng: "disband",
    jpn: "を解散する",
    category: "動詞",
  },
  {
    eng: "impede",
    jpn: "を妨げる",
    category: "動詞",
  },
  {
    eng: "vicinity",
    jpn: "近所，近隣",
    category: "名詞",
  },
  {
    eng: "legible",
    jpn: "読みやすい",
    category: "形容詞",
  },
  {
    eng: "downcast",
    jpn: "意気消沈した",
    category: "形容詞",
  },
  {
    eng: "inflame",
    jpn: "を興奮させる，燃え上がらせる",
    category: "動詞",
  },
  {
    eng: "benefit from",
    jpn: "で利益を得る，儲かる",
    category: "熟語",
  },
  {
    eng: "sporadically",
    jpn: "散発的に，まばらに",
    category: "副詞",
  },
  {
    eng: "opposed",
    jpn: "反対した",
    category: "形容詞",
  },
  {
    eng: "improved",
    jpn: "改善した",
    category: "形容詞",
  },
  {
    eng: "atop",
    jpn: "頂上に，の上に",
    category: "副詞",
  },
  {
    eng: "sprain",
    jpn: "をくじく，捻挫する",
    category: "動詞",
  },
  {
    eng: "routinely",
    jpn: "日常的に，いつものように",
    category: "副詞",
  },
  {
    eng: "cross over",
    jpn: "越えて渡る，越えていく",
    category: "熟語",
  },
  {
    eng: "instructional",
    jpn: "教育の，指導的な",
    category: "形容詞",
  },
  {
    eng: "demographic",
    jpn: "人口統計の，人口統計学の",
    category: "形容詞",
  },
  {
    eng: "politically",
    jpn: "政治的に",
    category: "副詞",
  },
  {
    eng: "palatial",
    jpn: "宮殿のような，豪華な",
    category: "形容詞",
  },
  {
    eng: "incredibly",
    jpn: "信じられないほど",
    category: "副詞",
  },
  {
    eng: "terrain",
    jpn: "地形",
    category: "名詞",
  },
  {
    eng: "availability",
    jpn: "可用性，利用可能性",
    category: "名詞",
  },
  {
    eng: "self-esteem",
    jpn: "自尊心",
    category: "名詞",
  },
  {
    eng: "reliability",
    jpn: "信頼性",
    category: "名詞",
  },
  {
    eng: "catch up",
    jpn: "遅れを取り戻す，追いつく，遅延を補う",
    category: "熟語",
  },
  {
    eng: "innovative",
    jpn: "革新的な",
    category: "形容詞",
  },
  {
    eng: "short-term",
    jpn: "短期の",
    category: "形容詞",
  },
  {
    eng: "ironically",
    jpn: "皮肉なことに，逆説的に",
    category: "副詞",
  },
  {
    eng: "wear off",
    jpn: "擦り切れる，徐々に減る",
    category: "熟語",
  },
  {
    eng: "loophole",
    jpn: "抜け穴、例外や逃げ道",
    category: "名詞",
  },
  {
    eng: "dehydrate",
    jpn: "脱水する，水を抜く",
    category: "動詞",
  },
  {
    eng: "annoy",
    jpn: "いらだたせる，怒らせる",
    category: "動詞",
  },
  {
    eng: "wholesome",
    jpn: "健全な，健康的な",
    category: "形容詞",
  },
  {
    eng: "abstain",
    jpn: "控える，慎む",
    category: "動詞",
  },
  {
    eng: "disclosure",
    jpn: "開示",
    category: "名詞",
  },
  {
    eng: "fumigate",
    jpn: "燻蒸する",
    category: "動詞",
  },
  {
    eng: "embarrass",
    jpn: "を恥ずかしがらせる，を恥じさせる",
    category: "動詞",
  },
  {
    eng: "irritate",
    jpn: "イライラさせる，怒らせる",
    category: "動詞",
  },
  {
    eng: "tear down",
    jpn: "解体する",
    category: "熟語",
  },
  {
    eng: "tease",
    jpn: "からかう",
    category: "動詞",
  },
  {
    eng: "whisper",
    jpn: "ささやく，を耳打ちする",
    category: "動詞",
  },
  {
    eng: "cope with",
    jpn: "に対処する，に対応する",
    category: "熟語",
  },
  {
    eng: "cough up",
    jpn: "咳払いする",
    category: "熟語",
  },
  {
    eng: "ashamed",
    jpn: "恥じて，恥ずかしくて",
    category: "形容詞",
  },
  {
    eng: "addictive",
    jpn: "中毒性の、依存性の",
    category: "形容詞",
  },
  {
    eng: "impulse",
    jpn: "衝動，衝力",
    category: "名詞",
  },
  {
    eng: "maternity",
    jpn: "妊娠",
    category: "名詞",
  },
  {
    eng: "eerie",
    jpn: "不気味な，気味が悪い",
    category: "形容詞",
  },
  {
    eng: "proper",
    jpn: "適切な，ふさわしい",
    category: "形容詞",
  },
  {
    eng: "conventional",
    jpn: "従来の，伝統的な",
    category: "形容詞",
  },
  {
    eng: "adhere to",
    jpn: "にくっつく",
    category: "熟語",
  },
  {
    eng: "fabricate",
    jpn: "作り上げる，でっち上げる",
    category: "動詞",
  },
  {
    eng: "instigate",
    jpn: "扇動する",
    category: "動詞",
  },
  {
    eng: "hesitate",
    jpn: "ためらう，躊躇する",
    category: "動詞",
  },
  {
    eng: "compose",
    jpn: "を構成する，作曲する",
    category: "動詞",
  },
  {
    eng: "estate",
    jpn: "財産，資産",
    category: "名詞",
  },
  {
    eng: "notion",
    jpn: "考え，意見",
    category: "名詞",
  },
  {
    eng: "unveil",
    jpn: "明らかにする",
    category: "動詞",
  },
  {
    eng: "alleviate",
    jpn: "和らげる，軽減する",
    category: "動詞",
  },
  {
    eng: "call off",
    jpn: "を中止する",
    category: "熟語",
  },
  {
    eng: "drift",
    jpn: "漂流，流れる",
    category: "名詞",
  },
  {
    eng: "feature",
    jpn: "特徴，特性",
    category: "名詞",
  },
  {
    eng: "feature",
    jpn: "を目玉とする",
    category: "動詞",
  },
  {
    eng: "foe",
    jpn: "敵",
    category: "名詞",
  },
  {
    eng: "alteration",
    jpn: "変更",
    category: "名詞",
  },
  {
    eng: "break out",
    jpn: "勃発する",
    category: "熟語",
  },
  {
    eng: "orbit",
    jpn: "軌道, 軌跡",
    category: "名詞",
  },
  {
    eng: "inspect",
    jpn: "検査する",
    category: "動詞",
  },
  {
    eng: "amuse",
    jpn: "楽しませる，娯楽を提供する",
    category: "動詞",
  },
  {
    eng: "charm",
    jpn: "魅力，引力",
    category: "名詞",
  },
  {
    eng: "asset",
    jpn: "資産，財産",
    category: "名詞",
  },
  {
    eng: "fade out",
    jpn: "消える，消えていく",
    category: "熟語",
  },
  {
    eng: "magnify",
    jpn: "拡大する，増大する",
    category: "動詞",
  },
  {
    eng: "bout",
    jpn: "試合，競技",
    category: "名詞",
  },
  {
    eng: "sophisticated",
    jpn: "洗練された，高雅な",
    category: "形容詞",
  },
  {
    eng: "bureau",
    jpn: "事務局，たんす",
    category: "名詞",
  },
  {
    eng: "disrupt",
    jpn: "混乱させる",
    category: "動詞",
  },
  {
    eng: "dispute",
    jpn: "争議",
    category: "名詞",
  },
  {
    eng: "dispute",
    jpn: "論争する",
    category: "動詞",
  },
  {
    eng: "amicable",
    jpn: "友好的な",
    category: "形容詞",
  },
  {
    eng: "sprout",
    jpn: "芽，新芽",
    category: "名詞",
  },
  {
    eng: "abandon",
    jpn: "を捨て去る，放棄する",
    category: "動詞",
  },
  {
    eng: "grumpy",
    jpn: "気難しい",
    category: "形容詞",
  },
  {
    eng: "chatter",
    jpn: "おしゃべり",
    category: "名詞",
  },
  {
    eng: "grouchy",
    jpn: "不機嫌な",
    category: "形容詞",
  },
  {
    eng: "relevant",
    jpn: "関連のある，適切な",
    category: "形容詞",
  },
  {
    eng: "acquit",
    jpn: "無罪宣告する、無罪を証明する",
    category: "動詞",
  },
  {
    eng: "commit",
    jpn: "専念，ゆだねる",
    category: "動詞",
  },
  {
    eng: "perch",
    jpn: "止まり木",
    category: "名詞",
  },
  {
    eng: "in vain",
    jpn: "無駄に，軽々しく",
    category: "熟語",
  },
  {
    eng: "nominal",
    jpn: "名目上の、形式上の",
    category: "形容詞",
  },
  {
    eng: "suppress",
    jpn: "抑える，抑圧する",
    category: "動詞",
  },
  {
    eng: "stem",
    jpn: "幹",
    category: "名詞",
  },
  {
    eng: "translucent",
    jpn: "半透明の、透けて見える",
    category: "形容詞",
  },
  {
    eng: "judicious",
    jpn: "賢明な",
    category: "形容詞",
  },
  {
    eng: "axis",
    jpn: "軸",
    category: "名詞",
  },
  {
    eng: "figure out",
    jpn: "がわかる",
    category: "熟語",
  },
  {
    eng: "soothe",
    jpn: "落ち着かせる，安定させる",
    category: "動詞",
  },
  {
    eng: "minute",
    jpn: "分，議事録",
    category: "名詞",
  },
  {
    eng: "anthem",
    jpn: "賛歌，賛美歌",
    category: "名詞",
  },
  {
    eng: "superficial",
    jpn: "表面的な",
    category: "形容詞",
  },
  {
    eng: "peculiar",
    jpn: "奇妙な，変わった",
    category: "形容詞",
  },
  {
    eng: "squeeze",
    jpn: "絞る，押しつぶす",
    category: "動詞",
  },
  {
    eng: "expand",
    jpn: "拡大する，広がる",
    category: "動詞",
  },
  {
    eng: "caricature",
    jpn: "風刺画",
    category: "名詞",
  },
  {
    eng: "feasible",
    jpn: "実行可能な，可能性のある",
    category: "形容詞",
  },
  {
    eng: "outdated",
    jpn: "時代遅れの",
    category: "形容詞",
  },
  {
    eng: "neglect",
    jpn: "を無視する，放っておく",
    category: "動詞",
  },
  {
    eng: "evasion",
    jpn: "回避/避ける",
    category: "名詞",
  },
  {
    eng: "waver",
    jpn: "揺らぐ、安定していない、ぐらつく",
    category: "動詞",
  },
  {
    eng: "surmount",
    jpn: "乗り越える",
    category: "動詞",
  },
  {
    eng: "chronological",
    jpn: "年代順の",
    category: "形容詞",
  },
  {
    eng: "oblivious",
    jpn: "忘れっぽい，物忘れの激しい",
    category: "形容詞",
  },
  {
    eng: "hardy",
    jpn: "丈夫な",
    category: "形容詞",
  },
  {
    eng: "commute",
    jpn: "通勤する，取り替える",
    category: "動詞",
  },
  {
    eng: "blink",
    jpn: "瞬きをする，瞬間を過ごす",
    category: "動詞",
  },
  {
    eng: "courteous",
    jpn: "丁寧な",
    category: "形容詞",
  },
  {
    eng: "implicit",
    jpn: "暗黙の",
    category: "形容詞",
  },
  {
    eng: "mundane",
    jpn: "平凡な，普通の",
    category: "形容詞",
  },
  {
    eng: "compartment",
    jpn: "区画",
    category: "名詞",
  },
  {
    eng: "admonish",
    jpn: "訓戒する，警告する",
    category: "動詞",
  },
  {
    eng: "ascribe",
    jpn: "のせいにする，責任を転嫁する",
    category: "動詞",
  },
  {
    eng: "candid",
    jpn: "率直な、正直な",
    category: "形容詞",
  },
  {
    eng: "barrel",
    jpn: "樽",
    category: "名詞",
  },
  {
    eng: "bystander",
    jpn: "傍観者，見物人",
    category: "名詞",
  },
  {
    eng: "briefly",
    jpn: "簡単に，手短に",
    category: "副詞",
  },
  {
    eng: "commission",
    jpn: "手数料，委任状",
    category: "名詞",
  },
  {
    eng: "hang up",
    jpn: "中断する",
    category: "熟語",
  },
  {
    eng: "investigation",
    jpn: "調査，研究",
    category: "名詞",
  },
  {
    eng: "cowardly",
    jpn: "臆病な",
    category: "形容詞",
  },
  {
    eng: "standstill",
    jpn: "停止",
    category: "名詞",
  },
  {
    eng: "ammunition",
    jpn: "弾薬",
    category: "名詞",
  },
  {
    eng: "accompany",
    jpn: "に付き添う，に同行する",
    category: "動詞",
  },
  {
    eng: "relieve",
    jpn: "和らげる，軽減する",
    category: "動詞",
  },
  {
    eng: "kinship",
    jpn: "親族，家族",
    category: "名詞",
  },
  {
    eng: "troop",
    jpn: "群れ，集団",
    category: "名詞",
  },
  {
    eng: "certify",
    jpn: "証明する",
    category: "動詞",
  },
  {
    eng: "exposure",
    jpn: "暴露，さらすこと",
    category: "名詞",
  },
  {
    eng: "adorable",
    jpn: "愛らしい",
    category: "形容詞",
  },
  {
    eng: "commend",
    jpn: "褒める，賞賛する",
    category: "動詞",
  },
  {
    eng: "subtle",
    jpn: "微妙な，繊細な",
    category: "形容詞",
  },
  {
    eng: "appoint",
    jpn: "任命する，指定する",
    category: "動詞",
  },
  {
    eng: "straddle",
    jpn: "またがる，乗り越える",
    category: "動詞",
  },
  {
    eng: "propriety",
    jpn: "礼儀，可否",
    category: "名詞",
  },
  {
    eng: "auditor",
    jpn: "監査人",
    category: "名詞",
  },
  {
    eng: "frown upon",
    jpn: "眉をひそめる",
    category: "熟語",
  },
  {
    eng: "encourage",
    jpn: "を勇気づける，励ます",
    category: "動詞",
  },
  {
    eng: "enlist",
    jpn: "入隊する，参加する",
    category: "動詞",
  },
  {
    eng: "itinerary",
    jpn: "旅程",
    category: "名詞",
  },
  {
    eng: "cultivate",
    jpn: "耕作する，耕す",
    category: "動詞",
  },
  {
    eng: "diagram",
    jpn: "図",
    category: "名詞",
  },
  {
    eng: "alternate",
    jpn: "代わりの",
    category: "形容詞",
  },
  {
    eng: "perspective",
    jpn: "見解，見通し",
    category: "名詞",
  },
  {
    eng: "invisible",
    jpn: "見えない，不可視な",
    category: "形容詞",
  },
  {
    eng: "nostalgic",
    jpn: "懐かしい",
    category: "形容詞",
  },
  {
    eng: "outburst",
    jpn: "爆発，爆破",
    category: "名詞",
  },
  {
    eng: "ominous",
    jpn: "不吉な，不運な",
    category: "形容詞",
  },
  {
    eng: "burden",
    jpn: "負担，重荷",
    category: "名詞",
  },
  {
    eng: "advocate",
    jpn: "提唱する，主張する",
    category: "動詞",
  },
  {
    eng: "worthwhile",
    jpn: "価値のある",
    category: "形容詞",
  },
  {
    eng: "crunchy",
    jpn: "カリカリの，カタい",
    category: "形容詞",
  },
  {
    eng: "renovate",
    jpn: "改修する，改装する",
    category: "動詞",
  },
  {
    eng: "tidy up",
    jpn: "片付ける",
    category: "熟語",
  },
  {
    eng: "abide by",
    jpn: "遵守する",
    category: "熟語",
  },
  {
    eng: "clueless",
    jpn: "無知な、知識のない",
    category: "形容詞",
  },
  {
    eng: "miscellaneous",
    jpn: "雑多な",
    category: "形容詞",
  },
  {
    eng: "wound",
    jpn: "傷",
    category: "名詞",
  },
  {
    eng: "reprimand",
    jpn: "厳しく叱る，注意する",
    category: "動詞",
  },
  {
    eng: "treaty",
    jpn: "条約",
    category: "名詞",
  },
  {
    eng: "efficacy",
    jpn: "効能，効果",
    category: "名詞",
  },
  {
    eng: "mutual",
    jpn: "相互の，互いの",
    category: "形容詞",
  },
  {
    eng: "fidelity",
    jpn: "忠実度",
    category: "名詞",
  },
  {
    eng: "overhaul",
    jpn: "分解検査する，分析検査する",
    category: "動詞",
  },
  {
    eng: "absorb",
    jpn: "を吸収する，吸い取る",
    category: "動詞",
  },
  {
    eng: "emerge",
    jpn: "現れる",
    category: "動詞",
  },
  {
    eng: "hinder",
    jpn: "妨げる",
    category: "動詞",
  },
  {
    eng: "topple",
    jpn: "倒れる",
    category: "動詞",
  },
  {
    eng: "ritual",
    jpn: "儀式，式典",
    category: "名詞",
  },
  {
    eng: "chore",
    jpn: "雑用",
    category: "名詞",
  },
  {
    eng: "mumble",
    jpn: "つぶやく",
    category: "動詞",
  },
  {
    eng: "attribute",
    jpn: "に帰する",
    category: "動詞",
  },
  {
    eng: "condiment",
    jpn: "調味料",
    category: "名詞",
  },
  {
    eng: "resolve",
    jpn: "解決する，を決心する",
    category: "動詞",
  },
  {
    eng: "blister",
    jpn: "水膨れ、水疱",
    category: "名詞",
  },
  {
    eng: "blast",
    jpn: "爆風，突風",
    category: "名詞",
  },
  {
    eng: "verge",
    jpn: "寸前，境界",
    category: "名詞",
  },
  {
    eng: "jovial",
    jpn: "陽気な",
    category: "形容詞",
  },
  {
    eng: "suction",
    jpn: "吸引",
    category: "名詞",
  },
  {
    eng: "delusion",
    jpn: "妄想",
    category: "名詞",
  },
  {
    eng: "equivalent",
    jpn: "等しい，同等の",
    category: "形容詞",
  },
  {
    eng: "dismay",
    jpn: "がっかりさせる，失望させる",
    category: "動詞",
  },
  {
    eng: "assumption",
    jpn: "想定，仮説",
    category: "名詞",
  },
  {
    eng: "twist",
    jpn: "ねじれ，より合わせる",
    category: "名詞",
  },
  {
    eng: "falsify",
    jpn: "改ざんする",
    category: "動詞",
  },
  {
    eng: "jumble",
    jpn: "乱雑にする，乱す",
    category: "動詞",
  },
  {
    eng: "thread",
    jpn: "糸",
    category: "名詞",
  },
  {
    eng: "aristocrat",
    jpn: "貴族",
    category: "名詞",
  },
  {
    eng: "glance",
    jpn: "一目見る",
    category: "名詞",
  },
  {
    eng: "glance",
    jpn: "一目",
    category: "動詞",
  },
  {
    eng: "glide",
    jpn: "滑る",
    category: "動詞",
  },
  {
    eng: "come across",
    jpn: "を横切る，出くわす",
    category: "熟語",
  },
  {
    eng: "tighten up",
    jpn: "締め付ける",
    category: "熟語",
  },
  {
    eng: "citation",
    jpn: "引用/他人の言葉や文章を取り上げる",
    category: "名詞",
  },
  {
    eng: "ventilate",
    jpn: "換気する",
    category: "動詞",
  },
  {
    eng: "viable",
    jpn: "生存できる，生き抜く",
    category: "形容詞",
  },
  {
    eng: "vary",
    jpn: "多様化する，異なる",
    category: "動詞",
  },
  {
    eng: "transient",
    jpn: "一時的な",
    category: "形容詞",
  },
  {
    eng: "perilous",
    jpn: "危険な",
    category: "形容詞",
  },
  {
    eng: "facade",
    jpn: "正面，真正面",
    category: "名詞",
  },
  {
    eng: "federal",
    jpn: "連邦の，連邦制の",
    category: "形容詞",
  },
  {
    eng: "armament",
    jpn: "武装",
    category: "名詞",
  },
  {
    eng: "permeate",
    jpn: "浸透する、染み込む、広がる",
    category: "動詞",
  },
  {
    eng: "combat",
    jpn: "戦闘，闘争",
    category: "名詞",
  },
  {
    eng: "barely",
    jpn: "かろうじて，やっと",
    category: "副詞",
  },
  {
    eng: "take over",
    jpn: "を引き継ぐ, 継承",
    category: "熟語",
  },
  {
    eng: "demotion",
    jpn: "降格",
    category: "名詞",
  },
  {
    eng: "audible",
    jpn: "聞くことのできる",
    category: "形容詞",
  },
  {
    eng: "observation",
    jpn: "観察，観測",
    category: "名詞",
  },
  {
    eng: "unified",
    jpn: "統一された",
    category: "形容詞",
  },
  {
    eng: "synthesize",
    jpn: "統合する、まとめる",
    category: "動詞",
  },
  {
    eng: "prejudice",
    jpn: "先入観",
    category: "名詞",
  },
  {
    eng: "shaft",
    jpn: "軸",
    category: "名詞",
  },
  {
    eng: "wipe up",
    jpn: "拭く",
    category: "熟語",
  },
  {
    eng: "grasp",
    jpn: "つかむ，把握する",
    category: "動詞",
  },
  {
    eng: "shrug",
    jpn: "肩をすくめる，無視する",
    category: "動詞",
  },
  {
    eng: "acquaintance",
    jpn: "知人，友人",
    category: "名詞",
  },
  {
    eng: "resilient",
    jpn: "弾力性のある、柔軟な",
    category: "形容詞",
  },
  {
    eng: "distinction",
    jpn: "区別，相違",
    category: "名詞",
  },
  {
    eng: "apparent",
    jpn: "外見上の，明白な",
    category: "形容詞",
  },
  {
    eng: "adequate",
    jpn: "適切で，十分な",
    category: "形容詞",
  },
  {
    eng: "cling to",
    jpn: "にしがみつく",
    category: "熟語",
  },
  {
    eng: "inject",
    jpn: "注入する",
    category: "動詞",
  },
  {
    eng: "ratio",
    jpn: "比率",
    category: "名詞",
  },
  {
    eng: "alliance",
    jpn: "同盟，協定",
    category: "名詞",
  },
  {
    eng: "upscale",
    jpn: "高級な",
    category: "形容詞",
  },
  {
    eng: "pivot",
    jpn: "回転軸，中心",
    category: "名詞",
  },
  {
    eng: "summit",
    jpn: "頂上，山頂",
    category: "名詞",
  },
  {
    eng: "docile",
    jpn: "扱いやすい",
    category: "形容詞",
  },
  {
    eng: "facile",
    jpn: "安易な，手軽な",
    category: "形容詞",
  },
  {
    eng: "accord",
    jpn: "一致する，調和する",
    category: "動詞",
  },
  {
    eng: "convey",
    jpn: "伝える，運ぶ",
    category: "動詞",
  },
  {
    eng: "pursue",
    jpn: "追い求める，追跡する",
    category: "動詞",
  },
  {
    eng: "entitle",
    jpn: "と題する，と名づける",
    category: "動詞",
  },
  {
    eng: "dispense",
    jpn: "分配する，排出する",
    category: "動詞",
  },
  {
    eng: "autograph",
    jpn: "署名，サイン",
    category: "名詞",
  },
  {
    eng: "cram",
    jpn: "詰め込む",
    category: "動詞",
  },
  {
    eng: "imply",
    jpn: "をほのめかす，暗示する",
    category: "動詞",
  },
  {
    eng: "arduous",
    jpn: "骨の折れる，困難な",
    category: "形容詞",
  },
  {
    eng: "prompt",
    jpn: "即座の，直ちに",
    category: "形容詞",
  },
  {
    eng: "vessel",
    jpn: "容器，器",
    category: "名詞",
  },
  {
    eng: "ransom",
    jpn: "身代金，解放金",
    category: "名詞",
  },
  {
    eng: "intangible",
    jpn: "触れられない",
    category: "形容詞",
  },
  {
    eng: "assess",
    jpn: "評価する，査定する",
    category: "動詞",
  },
  {
    eng: "termination",
    jpn: "終了，終わり",
    category: "名詞",
  },
  {
    eng: "austere",
    jpn: "厳格な、厳重な",
    category: "形容詞",
  },
  {
    eng: "tenant",
    jpn: "店子",
    category: "名詞",
  },
  {
    eng: "intuition",
    jpn: "直感",
    category: "名詞",
  },
  {
    eng: "heritage",
    jpn: "遺産，相続財産",
    category: "名詞",
  },
  {
    eng: "polarize",
    jpn: "分極化する",
    category: "動詞",
  },
  {
    eng: "gaudy",
    jpn: "派手",
    category: "形容詞",
  },
  {
    eng: "uplift",
    jpn: "隆起",
    category: "名詞",
  },
  {
    eng: "constitute",
    jpn: "構成する，組み立てる",
    category: "動詞",
  },
  {
    eng: "smudge",
    jpn: "汚れ",
    category: "名詞",
  },
  {
    eng: "vault",
    jpn: "丸天井，ドーム型の天井",
    category: "名詞",
  },
  {
    eng: "alleviated",
    jpn: "軽減された",
    category: "形容詞",
  },
  {
    eng: "definition",
    jpn: "定義，明確な説明",
    category: "名詞",
  },
  {
    eng: "physician",
    jpn: "医師，内科医",
    category: "名詞",
  },
  {
    eng: "take after",
    jpn: "をまねる，に似る",
    category: "熟語",
  },
  {
    eng: "excess",
    jpn: "過剰，超過",
    category: "名詞",
  },
  {
    eng: "relegate",
    jpn: "左遷する，異動させる",
    category: "動詞",
  },
  {
    eng: "sacrifice",
    jpn: "犠牲，捧げ物",
    category: "名詞",
  },
  {
    eng: "apprehension",
    jpn: "気遣い、不安、配慮や心配",
    category: "名詞",
  },
  {
    eng: "veil",
    jpn: "覆うもの，口実",
    category: "名詞",
  },
  {
    eng: "garnish",
    jpn: "飾る，装飾する",
    category: "動詞",
  },
  {
    eng: "appliance",
    jpn: "家電，電化製品",
    category: "名詞",
  },
  {
    eng: "instill",
    jpn: "注入する，打ち込む",
    category: "動詞",
  },
  {
    eng: "vital",
    jpn: "極めて重要な，生命の",
    category: "形容詞",
  },
  {
    eng: "doze off",
    jpn: "うとうと眠る",
    category: "熟語",
  },
  {
    eng: "lean",
    jpn: "傾く，寄りかかる",
    category: "動詞",
  },
  {
    eng: "radical",
    jpn: "急進的な，抜本的な",
    category: "形容詞",
  },
  {
    eng: "undergo",
    jpn: "経験する，体験する",
    category: "動詞",
  },
  {
    eng: "cumulative",
    jpn: "累積的な",
    category: "形容詞",
  },
  {
    eng: "outlook",
    jpn: "見通し",
    category: "名詞",
  },
  {
    eng: "abstract",
    jpn: "抽象的な，非具体的な",
    category: "形容詞",
  },
  {
    eng: "contemporary",
    jpn: "現在の，現代の",
    category: "形容詞",
  },
  {
    eng: "opponent",
    jpn: "相手，対象",
    category: "名詞",
  },
  {
    eng: "scatter",
    jpn: "まき散らす，ばらまく",
    category: "動詞",
  },
  {
    eng: "principle",
    jpn: "原理",
    category: "名詞",
  },
  {
    eng: "collapse",
    jpn: "崩壊する，つぶれる",
    category: "動詞",
  },
  {
    eng: "thrifty",
    jpn: "倹約な",
    category: "形容詞",
  },
  {
    eng: "faith",
    jpn: "信頼，信用",
    category: "名詞",
  },
  {
    eng: "forgery",
    jpn: "偽造",
    category: "名詞",
  },
  {
    eng: "tactical",
    jpn: "戦術的な",
    category: "形容詞",
  },
  {
    eng: "asteroid",
    jpn: "小惑星",
    category: "名詞",
  },
  {
    eng: "essential",
    jpn: "不可欠な",
    category: "形容詞",
  },
  {
    eng: "component",
    jpn: "成分",
    category: "名詞",
  },
  {
    eng: "chaotic",
    jpn: "混沌とした",
    category: "形容詞",
  },
  {
    eng: "recall",
    jpn: "呼び戻す，思い出す",
    category: "動詞",
  },
  {
    eng: "encounter",
    jpn: "遭遇する，出会う",
    category: "動詞",
  },
  {
    eng: "venture",
    jpn: "冒険的事業，投機的事業",
    category: "名詞",
  },
  {
    eng: "catastrophe",
    jpn: "大惨事",
    category: "名詞",
  },
  {
    eng: "uptight",
    jpn: "きつい",
    category: "形容詞",
  },
  {
    eng: "tangle",
    jpn: "もつれさせる，絡ませる，混乱させる",
    category: "動詞",
  },
  {
    eng: "ameliorate",
    jpn: "改善する",
    category: "動詞",
  },
  {
    eng: "simmer",
    jpn: "煮る",
    category: "動詞",
  },
  {
    eng: "associate",
    jpn: "結びつけて考える，賛同する",
    category: "動詞",
  },
  {
    eng: "envoy",
    jpn: "使者、代理人や遣使",
    category: "名詞",
  },
  {
    eng: "beckon",
    jpn: "手招きする",
    category: "動詞",
  },
  {
    eng: "appropriate",
    jpn: "適当な，充当する",
    category: "形容詞",
  },
  {
    eng: "memento",
    jpn: "記念品",
    category: "名詞",
  },
  {
    eng: "congregate",
    jpn: "集まる",
    category: "動詞",
  },
  {
    eng: "audacity",
    jpn: "大胆さ",
    category: "名詞",
  },
  {
    eng: "phobia",
    jpn: "恐怖症",
    category: "名詞",
  },
  {
    eng: "thief",
    jpn: "泥棒",
    category: "名詞",
  },
  {
    eng: "permanent",
    jpn: "永久の，永遠の",
    category: "形容詞",
  },
  {
    eng: "assure",
    jpn: "保証する，確証する",
    category: "動詞",
  },
  {
    eng: "synchronize",
    jpn: "同期する",
    category: "動詞",
  },
  {
    eng: "throw up",
    jpn: "吐く",
    category: "熟語",
  },
  {
    eng: "repeal",
    jpn: "廃止する，中止する",
    category: "動詞",
  },
  {
    eng: "thrust",
    jpn: "突き上げる",
    category: "動詞",
  },
  {
    eng: "seize",
    jpn: "つかむ，把握する",
    category: "動詞",
  },
  {
    eng: "embrace",
    jpn: "を抱きしめる，擁する",
    category: "動詞",
  },
  {
    eng: "chuckle",
    jpn: "含み笑い、ほくそ笑い",
    category: "名詞",
  },
  {
    eng: "configuration",
    jpn: "構成",
    category: "名詞",
  },
  {
    eng: "grate",
    jpn: "格子，格子状",
    category: "名詞",
  },
  {
    eng: "sit up",
    jpn: "まっすぐ座る",
    category: "熟語",
  },
  {
    eng: "stop over",
    jpn: "立ち寄る",
    category: "熟語",
  },
  {
    eng: "brag",
    jpn: "自慢",
    category: "動詞",
  },
  {
    eng: "idle",
    jpn: "停止状態",
    category: "形容詞",
  },
  {
    eng: "ancestor",
    jpn: "祖先，先祖",
    category: "名詞",
  },
  {
    eng: "exhaust",
    jpn: "疲れ果てさせる，消耗させる",
    category: "動詞",
  },
  {
    eng: "confine",
    jpn: "制限する，限定する",
    category: "動詞",
  },
  {
    eng: "commemoration",
    jpn: "記念",
    category: "名詞",
  },
  {
    eng: "stature",
    jpn: "身長，身の丈",
    category: "名詞",
  },
  {
    eng: "nauseous",
    jpn: "吐き気がする",
    category: "形容詞",
  },
  {
    eng: "dominance",
    jpn: "支配",
    category: "名詞",
  },
  {
    eng: "passive",
    jpn: "受身の，消極的な",
    category: "形容詞",
  },
  {
    eng: "accustom",
    jpn: "慣れる",
    category: "動詞",
  },
  {
    eng: "hibernate",
    jpn: "冬眠する",
    category: "動詞",
  },
  {
    eng: "bid",
    jpn: "入札する",
    category: "動詞",
  },
  {
    eng: "allocate",
    jpn: "割り当てる",
    category: "動詞",
  },
  {
    eng: "verbal",
    jpn: "言葉の，語句の",
    category: "形容詞",
  },
  {
    eng: "mural",
    jpn: "壁画，天井画",
    category: "名詞",
  },
  {
    eng: "constellation",
    jpn: "星座",
    category: "名詞",
  },
  {
    eng: "nosy",
    jpn: "詮索好きな",
    category: "形容詞",
  },
  {
    eng: "evolve",
    jpn: "進化する，発展する",
    category: "動詞",
  },
  {
    eng: "competent",
    jpn: "有能な",
    category: "形容詞",
  },
  {
    eng: "empathy",
    jpn: "共感，感情移入",
    category: "名詞",
  },
  {
    eng: "scam",
    jpn: "詐欺",
    category: "名詞",
  },
  {
    eng: "illiterate",
    jpn: "読み書きのできない",
    category: "形容詞",
  },
  {
    eng: "amnesty",
    jpn: "恩赦",
    category: "名詞",
  },
  {
    eng: "attach",
    jpn: "を貼り付ける，を貼る",
    category: "動詞",
  },
  {
    eng: "dormitory",
    jpn: "寮，大部屋",
    category: "名詞",
  },
  {
    eng: "strain",
    jpn: "張る，伸ばす",
    category: "動詞",
  },
  {
    eng: "solitude",
    jpn: "孤独",
    category: "名詞",
  },
  {
    eng: "intruder",
    jpn: "侵入者",
    category: "名詞",
  },
  {
    eng: "wander",
    jpn: "放浪する",
    category: "動詞",
  },
  {
    eng: "discourage",
    jpn: "落胆させる",
    category: "動詞",
  },
  {
    eng: "impose",
    jpn: "を課す，負わせる",
    category: "動詞",
  },
  {
    eng: "absolute",
    jpn: "絶対的な，完全な",
    category: "形容詞",
  },
  {
    eng: "flammable",
    jpn: "可燃性",
    category: "形容詞",
  },
  {
    eng: "eliminate",
    jpn: "を取り除く，を排除する",
    category: "動詞",
  },
  {
    eng: "detonate",
    jpn: "爆発させる、破裂させる",
    category: "動詞",
  },
  {
    eng: "look over",
    jpn: "見渡す，展望する",
    category: "熟語",
  },
  {
    eng: "aimless",
    jpn: "目的のない",
    category: "形容詞",
  },
  {
    eng: "immigrate",
    jpn: "移住する，移転する",
    category: "動詞",
  },
  {
    eng: "archive",
    jpn: "書庫，保存場所",
    category: "名詞",
  },
  {
    eng: "gulf",
    jpn: "湾",
    category: "名詞",
  },
  {
    eng: "drain",
    jpn: "排出させる，排水をする",
    category: "動詞",
  },
  {
    eng: "eject",
    jpn: "追い出す、排除する",
    category: "動詞",
  },
  {
    eng: "break in",
    jpn: "押し入る",
    category: "熟語",
  },
  {
    eng: "villainous",
    jpn: "極悪人の，悪役の",
    category: "形容詞",
  },
  {
    eng: "prior",
    jpn: "優先の，前の",
    category: "形容詞",
  },
  {
    eng: "predict",
    jpn: "を予想する，を予測する",
    category: "動詞",
  },
  {
    eng: "compliment",
    jpn: "褒め言葉",
    category: "名詞",
  },
  {
    eng: "artifact",
    jpn: "遺物，工芸品",
    category: "名詞",
  },
  {
    eng: "bail out",
    jpn: "脱出する，救済する",
    category: "熟語",
  },
  {
    eng: "sustain",
    jpn: "保持する，維持する",
    category: "動詞",
  },
  {
    eng: "carry out",
    jpn: "を成し遂げる，実行する",
    category: "熟語",
  },
  {
    eng: "fold",
    jpn: "折りたたむ，畳む",
    category: "動詞",
  },
  {
    eng: "Arctic",
    jpn: "北極地方",
    category: "名詞",
  },
  {
    eng: "cut back on",
    jpn: "切り戻す",
    category: "熟語",
  },
  {
    eng: "dodge",
    jpn: "かわす，よける",
    category: "動詞",
  },
  {
    eng: "bankrupt",
    jpn: "破産",
    category: "形容詞",
  },
  {
    eng: "contract",
    jpn: "契約，協定",
    category: "名詞",
  },
  {
    eng: "justify",
    jpn: "正当化する，合理化する",
    category: "動詞",
  },
  {
    eng: "replenish",
    jpn: "補充する、足りないものを追加する",
    category: "動詞",
  },
  {
    eng: "hurdle",
    jpn: "課題，困難",
    category: "名詞",
  },
  {
    eng: "admission",
    jpn: "入場，入場料",
    category: "名詞",
  },
  {
    eng: "domestic",
    jpn: "国内の，家庭の",
    category: "形容詞",
  },
  {
    eng: "nourish",
    jpn: "養う、育てる、支える",
    category: "動詞",
  },
  {
    eng: "tension",
    jpn: "緊張",
    category: "名詞",
  },
  {
    eng: "correspond",
    jpn: "対応する，反応する",
    category: "動詞",
  },
  {
    eng: "a wide range of",
    jpn: "広範囲の",
    category: "熟語",
  },
  {
    eng: "witness",
    jpn: "目撃者，証人/を目撃する",
    category: "名詞",
  },
  {
    eng: "primitive",
    jpn: "原始的な，先史的な",
    category: "形容詞",
  },
  {
    eng: "acknowledge",
    jpn: "を認める，認める",
    category: "動詞",
  },
  {
    eng: "aid",
    jpn: "援助/助ける",
    category: "名詞",
  },
  {
    eng: "demote",
    jpn: "降格する",
    category: "動詞",
  },
  {
    eng: "foil",
    jpn: "箔，金属の箔",
    category: "名詞",
  },
  {
    eng: "garble",
    jpn: "文字化けする",
    category: "動詞",
  },
  {
    eng: "groom",
    jpn: "新郎",
    category: "名詞",
  },
  {
    eng: "adhere",
    jpn: "遵守する",
    category: "動詞",
  },
  {
    eng: "endangered",
    jpn: "絶滅の危機にさらされている",
    category: "形容詞",
  },
  {
    eng: "auditorium",
    jpn: "講堂",
    category: "名詞",
  },
  {
    eng: "fussy",
    jpn: "小うるさい",
    category: "形容詞",
  },
  {
    eng: "immerse",
    jpn: "浸す，没入する",
    category: "動詞",
  },
  {
    eng: "abstain from",
    jpn: "を控える，慎む",
    category: "熟語",
  },
  {
    eng: "swipe",
    jpn: "拭く",
    category: "動詞",
  },
  {
    eng: "blatant",
    jpn: "露骨な，あからさまな",
    category: "形容詞",
  },
  {
    eng: "outcast",
    jpn: "追放された，追い出された",
    category: "名詞",
  },
  {
    eng: "choke",
    jpn: "のどに詰まらせる",
    category: "動詞",
  },
  {
    eng: "crisp",
    jpn: "新鮮な，さっぱりした",
    category: "形容詞",
  },
  {
    eng: "corridor",
    jpn: "廊下，通路",
    category: "名詞",
  },
  {
    eng: "generate",
    jpn: "発生させる，起こす",
    category: "動詞",
  },
  {
    eng: "sloppy",
    jpn: "ずさんな，いい加減な",
    category: "形容詞",
  },
  {
    eng: "conflict",
    jpn: "対立，争い",
    category: "名詞",
  },
  {
    eng: "cave in",
    jpn: "陥没する",
    category: "熟語",
  },
  {
    eng: "conviction",
    jpn: "信念，確信",
    category: "名詞",
  },
  {
    eng: "serene",
    jpn: "穏やかな",
    category: "形容詞",
  },
  {
    eng: "bundle",
    jpn: "束，一揃い",
    category: "名詞",
  },
  {
    eng: "gratuity",
    jpn: "心付け",
    category: "名詞",
  },
  {
    eng: "annotation",
    jpn: "注釈",
    category: "名詞",
  },
  {
    eng: "sarcasm",
    jpn: "皮肉，嘲笑，冷笑",
    category: "名詞",
  },
  {
    eng: "instinct",
    jpn: "直感，本能，勘",
    category: "名詞",
  },
  {
    eng: "buffer",
    jpn: "緩衝，緩和",
    category: "名詞",
  },
  {
    eng: "out of date",
    jpn: "時代遅れの，古風な",
    category: "熟語",
  },
  {
    eng: "acid",
    jpn: "酸の，酸性の",
    category: "形容詞",
  },
  {
    eng: "discriminate",
    jpn: "差別する",
    category: "動詞",
  },
  {
    eng: "rational",
    jpn: "理性的な，合理的な",
    category: "形容詞",
  },
  {
    eng: "foundation",
    jpn: "土台，根拠，設立",
    category: "名詞",
  },
  {
    eng: "vibrant",
    jpn: "活気のある",
    category: "形容詞",
  },
];
