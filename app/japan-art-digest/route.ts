export const dynamic = "force-static";

const html = String.raw`<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>在米其林出現之前——日本藝術平台研究發現</title>
<meta name="description" content="日本藝術平台研究發現：權威真空、收緊的窗口、AI 評鑑信任設計、信任攻擊防禦與先窄後寬的五年路徑。附六張圖表、71 張來源導覽卡與完整參考來源庫。">
<meta name="robots" content="noindex, nofollow">
<meta property="og:title" content="在米其林出現之前——日本藝術平台研究發現">
<meta property="og:description" content="日本藝術平台研究的互動式 Digest：市場真空、AI 評鑑信任設計、信任攻擊防禦與五年路徑。">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.bekhelpme.com/japan-art-digest">
<meta property="og:locale" content="zh_TW">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NLVESXBBMR"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NLVESXBBMR');</script>
<style>
:root{
  --bg:#FAF7F0; --surface:#FFFFFF; --ink:#211F1A; --ink-2:#6B675C; --ink-3:#98937F;
  --accent:#177A5B; --accent-dim:#0F5C44; --s1:#177A5B; --s2:#4661C2;
  --hair:#E3DED2; --hair-2:#EDE9DE; --card:#F3EFE5;
  --heat-1:#DDEDE5; --heat-2:#AFD7C4; --heat-3:#75BA9D; --heat-4:#3F9877; --heat-5:#177A5B;
  --grid:#E7E2D5; --axis:#C9C3B2;
  color-scheme: light;
}
@media (prefers-color-scheme: dark){
  :root:where(:not([data-theme="light"])){
    --bg:#141715; --surface:#1C1F1C; --ink:#EDEBE3; --ink-2:#A5A99F; --ink-3:#7C8078;
    --accent:#2FA079; --accent-dim:#45B58D; --s1:#2FA079; --s2:#6B7FE0;
    --hair:#2A2E2A; --hair-2:#232723; --card:#1E221E;
    --heat-1:#1C2B24; --heat-2:#1E4233; --heat-3:#206046; --heat-4:#278159; --heat-5:#2FA079;
    --grid:#262A26; --axis:#3A3F3A;
    color-scheme: dark;
  }
}
:root[data-theme="dark"]{
  --bg:#141715; --surface:#1C1F1C; --ink:#EDEBE3; --ink-2:#A5A99F; --ink-3:#7C8078;
  --accent:#2FA079; --accent-dim:#45B58D; --s1:#2FA079; --s2:#6B7FE0;
  --hair:#2A2E2A; --hair-2:#232723; --card:#1E221E;
  --heat-1:#1C2B24; --heat-2:#1E4233; --heat-3:#206046; --heat-4:#278159; --heat-5:#2FA079;
  --grid:#262A26; --axis:#3A3F3A;
  color-scheme: dark;
}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{
  margin:0; background:var(--bg); color:var(--ink);
  font-family:"Noto Sans TC","PingFang TC","Hiragino Sans","Microsoft JhengHei",system-ui,-apple-system,sans-serif;
  font-size:17px; line-height:1.95; letter-spacing:.015em;
}
.wrap{max-width:740px; margin:0 auto; padding:0 20px 96px}
.serif{font-family:"Noto Serif TC","Songti TC","Yu Mincho","Hiragino Mincho ProN",serif}

/* ---------- masthead ---------- */
header.masthead{padding:72px 0 40px; border-bottom:1px solid var(--hair)}
.kicker{font-size:12.5px; letter-spacing:.32em; color:var(--accent); text-transform:uppercase; margin:0 0 18px}
h1{font-family:"Noto Serif TC","Songti TC","Yu Mincho",serif; font-weight:700; font-size:clamp(30px,6vw,44px); line-height:1.35; margin:0 0 14px; text-wrap:balance}
.standfirst{color:var(--ink-2); font-size:16.5px; margin:0; max-width:36em}
.meta-line{margin-top:26px; font-size:13px; color:var(--ink-3); letter-spacing:.06em}

/* ---------- toc ---------- */
nav.toc{margin:40px 0 8px; padding:26px 28px; background:var(--card); border-radius:10px}
nav.toc p.toc-title{margin:0 0 12px; font-size:12.5px; letter-spacing:.28em; color:var(--ink-3)}
nav.toc ol{margin:0; padding:0; list-style:none; column-gap:36px}
@media(min-width:620px){nav.toc ol{columns:2}}
nav.toc li{break-inside:avoid; padding:5px 0; font-size:15px}
nav.toc a{color:var(--ink); text-decoration:none; border-bottom:none}
nav.toc a:hover{color:var(--accent)}
nav.toc .n{font-family:"Noto Serif TC",serif; color:var(--accent); margin-right:10px; font-size:13.5px}

/* ---------- sections ---------- */
section{margin-top:76px}
.eyebrow{display:flex; align-items:baseline; gap:14px; margin-bottom:10px}
.eyebrow .num{font-family:"Noto Serif TC","Songti TC",serif; font-size:15px; color:var(--accent); letter-spacing:.1em}
.eyebrow .rule{flex:1; height:1px; background:var(--hair)}
h2{font-family:"Noto Serif TC","Songti TC","Yu Mincho",serif; font-weight:700; font-size:clamp(23px,4vw,29px); line-height:1.5; margin:0 0 26px; text-wrap:balance}
h3{font-family:"Noto Serif TC","Songti TC",serif; font-weight:700; font-size:18.5px; margin:44px 0 14px}
p{margin:0 0 1.5em}
em{font-style:normal; color:var(--accent-dim); font-weight:600}
.unverified{font-size:12px; color:var(--ink-3); border:1px solid var(--hair); border-radius:4px; padding:1px 7px; margin:0 3px; white-space:nowrap; vertical-align:.12em}

/* entity popup links */
a.ent{color:var(--accent); text-decoration:none; border-bottom:1px dotted var(--accent); cursor:pointer; transition:border-color .15s}
a.ent:hover{border-bottom-style:solid}
a.ent:focus-visible{outline:2px solid var(--accent); outline-offset:2px; border-radius:2px}

/* pull quote */
blockquote.pull{margin:40px 0; padding:6px 0 6px 26px; border-left:3px solid var(--accent);
  font-family:"Noto Serif TC","Songti TC",serif; font-size:20px; line-height:1.85; color:var(--ink)}
blockquote.pull cite{display:block; margin-top:10px; font-size:13px; font-style:normal; color:var(--ink-3)}

/* ---------- figures / charts ---------- */
figure.viz{margin:44px 0; padding:28px 26px 22px; background:var(--surface); border:1px solid var(--hair); border-radius:12px}
figure.viz .viz-title{font-weight:700; font-size:15.5px; margin:0 0 2px}
figure.viz .viz-sub{font-size:12.5px; color:var(--ink-3); margin:0 0 20px}
figure.viz svg{display:block; width:100%; height:auto}
figure.viz figcaption{margin-top:16px; padding-top:14px; border-top:1px solid var(--hair-2); font-size:14px; color:var(--ink-2); line-height:1.8}
figure.viz figcaption b{color:var(--ink)}
.legend{display:flex; flex-wrap:wrap; gap:18px; margin:0 0 14px; font-size:12.5px; color:var(--ink-2)}
.legend .key{display:inline-flex; align-items:center; gap:7px}
.legend .sw{width:12px; height:12px; border-radius:3px; display:inline-block}
svg text{font-family:"Noto Sans TC","PingFang TC",system-ui,sans-serif}
.ax{fill:var(--ink-3); font-size:11.5px}
.axn{fill:var(--ink-3); font-size:11.5px; font-variant-numeric:tabular-nums}
.val{fill:var(--ink); font-size:12.5px; font-weight:600; font-variant-numeric:tabular-nums}
.val2{fill:var(--ink-2); font-size:11.5px}
.inbar{fill:#FFFFFF; font-size:12px; font-weight:600}
.gridline{stroke:var(--grid); stroke-width:1}
.axisline{stroke:var(--axis); stroke-width:1}
.note-flag{fill:var(--ink-2); font-size:11.5px}

/* heatmap table */
.tablewrap{overflow-x:auto}
table.heat{border-collapse:separate; border-spacing:3px; width:100%; min-width:560px; font-size:13px}
table.heat th{font-weight:600; color:var(--ink-2); padding:8px 6px; text-align:center; font-size:12.5px; line-height:1.4}
table.heat th.rowh{text-align:left; color:var(--ink); min-width:9.5em; font-size:13px}
table.heat td{text-align:center; padding:11px 6px; border-radius:6px; font-weight:700; font-variant-numeric:tabular-nums}
table.heat td.h1{background:var(--heat-1); color:var(--ink)}
table.heat td.h2{background:var(--heat-2); color:var(--ink)}
table.heat td.h3{background:var(--heat-3); color:#fff}
table.heat td.h4{background:var(--heat-4); color:#fff}
table.heat td.h5{background:var(--heat-5); color:#fff}
:root[data-theme="dark"] table.heat td.h1, :root[data-theme="dark"] table.heat td.h2{color:var(--ink)}

/* ---------- appendix cards ---------- */
.cards{display:grid; gap:14px; margin-top:30px}
details.card{background:var(--surface); border:1px solid var(--hair); border-radius:10px; padding:0}
details.card summary{list-style:none; cursor:pointer; padding:18px 22px; font-weight:700; font-size:15.5px; display:flex; align-items:center; gap:12px}
details.card summary::-webkit-details-marker{display:none}
details.card summary .tag{font-size:11px; font-weight:600; letter-spacing:.14em; color:var(--accent); border:1px solid var(--accent); border-radius:99px; padding:1px 10px; white-space:nowrap}
details.card summary::after{content:"＋"; margin-left:auto; color:var(--ink-3); font-weight:400}
details.card[open] summary::after{content:"－"}
details.card .card-body{padding:2px 22px 22px; font-size:14px; line-height:1.85; color:var(--ink-2)}
details.card .card-body b{color:var(--ink)}
details.card .card-body ul{margin:8px 0; padding-left:20px}
details.card .card-body li{margin:6px 0}
details.card .card-body table{border-collapse:collapse; width:100%; font-size:13px; margin:10px 0}
details.card .card-body table th, details.card .card-body table td{border:1px solid var(--hair); padding:8px 10px; text-align:left; vertical-align:top; line-height:1.6}
details.card .card-body table th{background:var(--card); color:var(--ink); font-weight:600}
details.card .card-body .tablewrap{overflow-x:auto}
details.card .card-body table{min-width:520px}

/* ---------- sources ---------- */
#sources .src-group{margin-top:34px}
#sources h3{margin-top:0}
#sources ol{margin:10px 0 0; padding-left:0; list-style:none; counter-reset:src}
#sources li{counter-increment:src; font-size:12.5px; line-height:1.7; padding:5px 0 5px 44px; position:relative; border-bottom:1px solid var(--hair-2); word-break:break-all}
#sources li::before{content:counter(src,decimal-leading-zero); position:absolute; left:0; top:6px; color:var(--ink-3); font-variant-numeric:tabular-nums; font-size:11px}
#sources a.ent{border-bottom:none; color:var(--accent)}
#sources a.ent:hover{text-decoration:underline}

/* ---------- modal ---------- */
.modal-backdrop{position:fixed; inset:0; background:rgba(15,15,12,.55); display:none; z-index:60; -webkit-backdrop-filter:blur(2px); backdrop-filter:blur(2px)}
.modal-backdrop.open{display:flex; align-items:center; justify-content:center; padding:18px}
.modal{background:var(--surface); width:min(920px,100%); height:min(640px,88vh); border-radius:14px; overflow:hidden; display:flex; flex-direction:column; box-shadow:0 24px 70px rgba(0,0,0,.35); border:1px solid var(--hair)}
.modal-bar{display:flex; align-items:center; gap:8px; padding:10px 12px; background:var(--card); border-bottom:1px solid var(--hair); flex-wrap:wrap}
.modal-bar .dots{display:flex; gap:5px; margin-right:4px}
.modal-bar .dots i{width:10px; height:10px; border-radius:50%; background:var(--hair); display:block}
.url-box{flex:1 1 200px; min-width:0; display:flex; align-items:center; background:var(--bg); border:1px solid var(--hair); border-radius:8px; padding:6px 12px}
.url-box input{flex:1; min-width:0; border:0; background:transparent; color:var(--ink-2); font-size:12.5px; font-family:ui-monospace,SFMono-Regular,Menlo,monospace; outline:none}
.mbtn{border:1px solid var(--hair); background:var(--surface); color:var(--ink); font-size:12.5px; padding:6px 12px; border-radius:8px; cursor:pointer; white-space:nowrap; font-family:inherit; text-decoration:none; display:inline-flex; align-items:center; gap:4px; line-height:1.4}
.mbtn:hover{border-color:var(--accent); color:var(--accent)}
.mbtn.copied{border-color:var(--accent); color:var(--accent)}
.mbtn.close{font-weight:700}
.modal-stage{flex:1; background:var(--bg); display:flex; flex-direction:column; min-height:0}
.stage-hint{font-size:12px; color:var(--ink-3); padding:7px 14px; border-bottom:1px solid var(--hair); background:var(--card); line-height:1.7}
.stage-inner{position:relative; flex:1; min-height:0}
.iframe-fallback{position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; text-align:center; color:var(--ink-2); font-size:14px; padding:30px; line-height:1.9}
.iframe-fallback .glyph{font-size:30px; opacity:.5}
.modal-stage iframe{position:absolute; inset:0; width:100%; height:100%; border:0; background:transparent; visibility:hidden}
.modal-stage iframe.loaded{visibility:visible; background:#fff}
.link-card{position:absolute; inset:0; display:none; flex-direction:column; justify-content:center; gap:14px; padding:40px min(9%,64px); overflow-y:auto; background:var(--bg); z-index:2}
.link-card.show{display:flex}
.link-card .lc-host{font-size:12.5px; letter-spacing:.14em; color:var(--accent); text-transform:uppercase; font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
.link-card .lc-title{font-family:"Noto Serif TC","Songti TC",serif; font-weight:700; font-size:21px; line-height:1.6; color:var(--ink); text-wrap:balance}
.link-card .lc-desc{font-size:15px; line-height:2; color:var(--ink-2); max-width:34em}
.link-card .lc-note{margin-top:10px; padding-top:14px; border-top:1px solid var(--hair); font-size:12.5px; color:var(--ink-3); line-height:1.8}

/* footer */
footer.colophon{margin-top:90px; padding-top:26px; border-top:1px solid var(--hair); font-size:12.5px; color:var(--ink-3); line-height:1.9}

@media (prefers-reduced-motion: reduce){ *{transition:none !important} }
@media (max-width:560px){
  body{font-size:16px}
  figure.viz{padding:20px 14px 16px; margin-left:-6px; margin-right:-6px}
  .modal{height:min(560px,92vh)}
}
</style>
</head>
<body>
<div class="wrap">

<header class="masthead">
  <p class="kicker">Research Digest · 2026年7月</p>
  <h1>在米其林出現之前，<br>沒有人知道哪家餐廳值得繞路</h1>
  <p class="standfirst">日本藝術市場研究發現的完整整理——一個還沒有人佔據的權威真空、正在收緊的窗口、把權威合法蓋起來的方法，以及蓋好之後怎麼被信任、怎麼防守、怎麼一步一步走。給 Jason 的互動式參考文件：文中每個機構與網站都可以點開預覽、複製網址、另開分頁。</p>
  <p class="meta-line">閱讀時間約 25 分鐘 · 六張圖表 · 文末附完整參考來源庫</p>
</header>

<nav class="toc" aria-label="目錄">
  <p class="toc-title">目錄</p>
  <ol>
    <li><a href="#s1"><span class="n">壹</span>一個真空</a></li>
    <li><a href="#s2"><span class="n">貳</span>但窗口在關上</a></li>
    <li><a href="#s3"><span class="n">參</span>日本市場的反差</a></li>
    <li><a href="#s4"><span class="n">肆</span>最有趣的分層</a></li>
    <li><a href="#s5"><span class="n">伍</span>權威的合法蓋法</a></li>
    <li><a href="#s6"><span class="n">陸</span>AI 檢索的真空實測</a></li>
    <li><a href="#s7"><span class="n">柒</span>權威蓋好之後，怎麼被信任</a></li>
    <li><a href="#s8"><span class="n">捌</span>信任會怎麼被攻擊</a></li>
    <li><a href="#s9"><span class="n">玖</span>先窄後寬的路</a></li>
    <li><a href="#appendix"><span class="n">附</span>查閱用參考卡</a></li>
    <li><a href="#sources"><span class="n">源</span>參考來源</a></li>
  </ol>
</nav>

<!-- ================= 壹 一個真空 ================= -->
<section id="s1">
  <div class="eyebrow"><span class="num">壹</span><span class="rule"></span></div>
  <h2>一個真空</h2>

  <p>想像一個場景。一位舊金山的收藏者，在東京的畫廊裡站在一件青瓷面前，心動了。他拿出手機想查三件事：這位陶藝家是誰、作品好在哪、這個價格合不合理。然後他發現——查不到。不是資訊太少，是全世界根本沒有一個網站，能同時回答這三個問題。</p>

  <p>這件事聽起來不可思議，所以我們用英文和日文兩種語言反覆搜尋驗證。結論是：市面上找不到任何一個把「評論、排名、成交數據」三件事做在一起的日本或東亞藝術平台。有拍賣數據庫，有畫廊電商，有藝術媒體，但沒有人把它們接起來。這個假設成立。</p>

  <p>餐飲業曾經也是這樣。在<a class="ent" data-url="https://guide.michelin.com/th/en/to-the-stars-and-beyond-th">米其林指南</a>出現之前，沒有人知道哪家餐廳值得專程繞路——好餐廳一直都在，缺的是一個大家都服氣的人來說「這家值得」。米其林做的事情，本質上就是把散落的品質資訊，變成一套可信的判斷。然後整個產業圍著它轉了一百年。</p>

  <p>日本陶藝，現在就站在「米其林出現之前」的位置。這份文件要講的，就是這個真空長什麼樣子、為什麼窗口正在收緊、以及一個台灣青瓷藝術家憑什麼有機會把這座燈塔蓋起來。</p>
</section>

<!-- ================= 貳 窗口在關上 ================= -->
<section id="s2">
  <div class="eyebrow"><span class="num">貳</span><span class="rule"></span></div>
  <h2>但窗口在關上</h2>

  <p>真空不會永遠是真空。過去一年多，幾件大事接連發生，方向全都指向同一件事：大玩家開始搶「藝術數據權威」這個位子。</p>

  <p>先看最大的一樁。<a class="ent" data-url="https://news.artnet.com/market/beowolff-capital-artnet-takeover-2649474">Artnet</a>——經營三十多年的藝術市場數據與媒體公司——在 2025 年 5 月被英國投資公司 <a class="ent" data-url="https://www.theartnewspaper.com/2025/05/27/european-american-investment-company-to-buy-artnet-and-take-it-private">Beowolff Capital</a> 以約六千五百萬到七千三百萬美元私有化下市。接著在 2026 年 4 月，它與線上畫廊平台 <a class="ent" data-url="https://www.theartnewspaper.com/2026/04/23/comment-|-how-viable-is-the-artnet-and-artsys-merger">Artsy</a> 正式合併，由 Artsy 執行長 Jeffrey Yin 領軍，喊出的願景是「藝術界的彭博社」——彭博社（Bloomberg）是金融圈人人依賴的數據終端機，意思是他們想成為藝術市場人人依賴的那塊螢幕。合併後手上有一千八百萬筆拍賣紀錄，加上一級市場的畫廊網絡。不過這樁合併並不輕鬆：2026 年 4 月兩家公司<a class="ent" data-url="https://hyperallergic.com/art-movements-dozens-laid-off-at-artnet-and-artsy/">裁員數十人、關掉柏林辦公室</a>，前一年上半年營收還掉了 12%。巨人在整隊，但整得很痛。</p>

  <p>其他人也沒閒著。<a class="ent" data-url="https://www.prnewswire.com/news-releases/artmarketcom-double-digit-growth-in-q2-2025...302522441.html">Artprice</a>——法國的藝術價格資料庫公司——2025 年第二季營收雙位數成長，還跟 AI 搜尋引擎 Perplexity <a class="ent" data-url="https://www.prnewswire.com/news-releases/artmarketcom-publishes-its-32nd-artprice-annual-report...302708675.html">合作推出混合訂閱</a>，等於直接把自己接上 AI 檢索的水管。（順帶一提：Artprice 年報說 2025 年全球藝術市場成長 12%，與 Art Basel／UBS 報告的口徑相反，兩邊統計方法不同，引用時要小心。訂閱定價<span class="unverified">未查證</span>。）<a class="ent" data-url="https://docs.liveart.xyz/liveart/whitepaper/data-oracles-powering-a-transparent-rwa-market-on-liveart">LiveArt</a> 轉向 AI 加 RWA 代幣化——RWA（Real World Assets，實體資產代幣化）就是把實體藝術品變成鏈上可交易的憑證——$ART 代幣已在 2025 年 9 月上線。<a class="ent" data-url="https://www.myartbroker.com/mab-100">MyArtBroker</a> 用自家 MAB100 指數深耕版畫市場。而 <a class="ent" data-url="https://www.wallstreetzen.com/blog/masterworks-review/">Masterworks</a> 用 Reg A+（美國的小額公募制度，讓散戶能用小額買一股藝術品）把單件作品證券化，累計投資資本超過十億美元；它那個拍賣資料庫扮演的角色，更像「內部選件工具兼信任護城河」，沒有證據顯示獨立賣錢<span class="unverified">未查證</span>。這一點，第玖節會再回來講。</p>

  <p>日本本土呢？2025 年 4 月，<a class="ent" data-url="https://prtimes.jp/main/html/rd/p/000000478.000008833.html">Mainichi Auction 與 SBI Art Auction 合併</a>為 SBI Mainichi Art Holdings——日本兩大拍賣行變成一家。二手比價網站 <a class="ent" data-url="https://help.aucfan.com/hc/ja/articles/54235003362841">aucfan</a> 是日本最大的二手行情資料庫，甚至已經開了 ChatGPT 的 API 接口。但它終究只是比價工具，上面沒有評論、沒有評級、沒有「這件作品好在哪」。</p>

  <p>把這些放在一起看，圖像很清楚：所有人都在往數據靠，但「評論加排名加成交數據」三位一體的位子，還是空的。空位還在，只是門在慢慢闔上。</p>
</section>

<!-- ================= 參 日本市場的反差 ================= -->
<section id="s3">
  <div class="eyebrow"><span class="num">參</span><span class="rule"></span></div>
  <h2>日本市場的反差</h2>

  <p>為什麼是日本？因為 2024 年全球藝術市場在退潮，跌了大約 12%，而<a class="ent" data-url="https://news.artnet.com/market/japan-art-market-is-bigger-than-it-seems-report-2587823">日本市場</a>逆勢漲了 2%，來到約 6.92 億美元。拉長看更有意思：疫情以來的五年，<a class="ent" data-url="https://www.theartnewspaper.com/2025/01/07/japans-art-market-grew-11-since-the-pandemic-new-report-finds">日本累計成長 11%</a>，同期全球只有約 1%。一個只佔全球 1% 的小市場，卻是少數還在往上走的市場。</p>

  <figure class="viz">
    <p class="viz-title">日本藝術市場規模，2022–2024</p>
    <p class="viz-sub">單位：億美元 · 來源：Art Basel／UBS 口徑之市場報告</p>
    <svg viewBox="0 0 640 290" role="img" aria-label="日本藝術市場規模長條圖：2022年7.56億美元、2023年6.81億、2024年6.92億，2024年年增2%，同年全球約負12%">
      <line class="gridline" x1="60" y1="40"  x2="620" y2="40"/>
      <line class="gridline" x1="60" y1="90"  x2="620" y2="90"/>
      <line class="gridline" x1="60" y1="140" x2="620" y2="140"/>
      <line class="gridline" x1="60" y1="190" x2="620" y2="190"/>
      <line class="axisline" x1="60" y1="240" x2="620" y2="240"/>
      <text class="axn" x="52" y="244" text-anchor="end">0</text>
      <text class="axn" x="52" y="194" text-anchor="end">2</text>
      <text class="axn" x="52" y="144" text-anchor="end">4</text>
      <text class="axn" x="52" y="94"  text-anchor="end">6</text>
      <text class="axn" x="52" y="44"  text-anchor="end">8</text>
      <rect x="168" y="51"  width="24" height="189" rx="4" fill="var(--s1)"/><rect x="168" y="234" width="24" height="6" fill="var(--s1)"/>
      <rect x="328" y="69.8" width="24" height="170.2" rx="4" fill="var(--s1)"/><rect x="328" y="234" width="24" height="6" fill="var(--s1)"/>
      <rect x="488" y="67"  width="24" height="173" rx="4" fill="var(--s1)"/><rect x="488" y="234" width="24" height="6" fill="var(--s1)"/>
      <text class="val" x="180" y="40" text-anchor="middle">7.56</text>
      <text class="val" x="340" y="59" text-anchor="middle">6.81</text>
      <text class="val" x="500" y="56" text-anchor="middle">6.92</text>
      <text class="ax" x="180" y="264" text-anchor="middle">2022</text>
      <text class="ax" x="340" y="264" text-anchor="middle">2023</text>
      <text class="ax" x="500" y="264" text-anchor="middle">2024</text>
      <text class="val2" x="536" y="80">YoY +2%</text>
      <text class="note-flag" x="536" y="98">全球同年 −12%</text>
      <text class="ax" x="620" y="285" text-anchor="end">2019–2023 日本累計 +11%，全球約 +1%</text>
    </svg>
    <figcaption><b>Takeaway：</b>全球在退潮的那一年，日本是少數還在漲的市場——規模不大，方向難得。</figcaption>
  </figure>

  <p>更關鍵的是這個市場的體質。它的銷售七成一走畫廊和經紀商，線上銷售只佔 5% 到 16%——全球平均大約兩成。買的人呢？八成四是本地藏家。全日本有超過兩千零六十家活躍畫廊，其中近六成擠在東京。這是一個高度內需、高度線下、高度集中的市場。</p>

  <figure class="viz">
    <p class="viz-title">一個內需、線下的市場</p>
    <p class="viz-sub">日本藝術市場之通路結構與買家來源（占比）</p>
    <div class="legend">
      <span class="key"><i class="sw" style="background:var(--s1)"></i>主要占比</span>
      <span class="key"><i class="sw" style="background:var(--s2)"></i>其餘占比</span>
    </div>
    <svg viewBox="0 0 640 150" role="img" aria-label="堆疊長條圖：銷售通路中畫廊與經紀商佔71%、拍賣約29%；買家來源中本地藏家佔84%、國際買家16%">
      <text class="ax" x="112" y="49" text-anchor="end">銷售通路</text>
      <rect x="124" y="34" width="350" height="24" rx="4" fill="var(--s1)"/>
      <rect x="476" y="34" width="142" height="24" rx="4" fill="var(--s2)"/>
      <text class="inbar" x="140" y="50">畫廊・經紀商 71%</text>
      <text class="inbar" x="490" y="50">拍賣 29%</text>
      <text class="ax" x="112" y="119" text-anchor="end">買家來源</text>
      <rect x="124" y="104" width="414" height="24" rx="4" fill="var(--s1)"/>
      <rect x="540" y="104" width="78" height="24" rx="4" fill="var(--s2)"/>
      <text class="inbar" x="140" y="120">本地藏家 84%</text>
      <text class="inbar" x="546" y="120">國際 16%</text>
      <text class="note-flag" x="124" y="80">線上銷售僅 5–16%（全球平均約 20%）</text>
    </svg>
    <figcaption><b>Takeaway：</b>七成走畫廊、八成四本地人買、線上占比不到全球一半——資訊不透明不是缺陷，是這個市場的原始狀態。也正因如此，第一個把資訊做透明的人，拿走的是整個真空。</figcaption>
  </figure>

  <p>「日本人只買日本藝術」這個印象，結構上成立，但正在被稀釋——畫廊的海外藝博會收入只佔 2%、跨境電商僅 1%，可是<a class="ent" data-url="https://www.artbasel.com/stories/japan-young-artists-collectors">年輕藏家已經開始買國際藝術家的作品</a>，具體比例沒有量化拆分<span class="unverified">未查證</span>。同時，<a class="ent" data-url="https://news.artnet.com/market/art-week-tokyo-2024-2565916">Art Week Tokyo</a>、Tokyo Gendai 加上疲軟的日圓，正在把外國藏家往東京送，Gagosian、Perrotin、Almine Rech 這些國際畫廊也已經進駐。牆是有裂縫的，而且裂縫在變大。</p>
</section>

<!-- ================= 肆 最有趣的分層 ================= -->
<section id="s4">
  <div class="eyebrow"><span class="num">肆</span><span class="rule"></span></div>
  <h2>最有趣的分層</h2>

  <p>講到「日本藝術品的高價都跑去海外」，大家會想到<a class="ent" data-url="https://artnewsjapan.com/article/14039">草間彌生</a>。她的單件作品在香港拍出約 8 億日圓，而<a class="ent" data-url="https://magazine.collet.am/98">日本國內拍場的紀錄</a>大約是 1 億日圓。同一位藝術家，差了將近十倍。</p>

  <figure class="viz">
    <p class="viz-title">草間彌生：同一位藝術家，兩個舞台</p>
    <p class="viz-sub">單件作品拍賣紀錄，約值（日圓）</p>
    <svg viewBox="0 0 640 150" role="img" aria-label="橫向長條圖：草間彌生日本國內拍場紀錄約1億日圓，香港拍場約8億日圓，相差約十倍">
      <text class="ax" x="140" y="49" text-anchor="end">日本國內拍場</text>
      <rect x="152" y="34" width="57" height="24" rx="4" fill="var(--s1)"/>
      <text class="val" x="218" y="50">約 1 億</text>
      <text class="ax" x="140" y="114" text-anchor="end">香港拍場</text>
      <rect x="152" y="99" width="458" height="24" rx="4" fill="var(--s1)"/>
      <text class="inbar" x="166" y="115">約 8 億</text>
      <text class="note-flag" x="280" y="78">差距約 10 倍</text>
    </svg>
    <figcaption><b>Takeaway：</b>十倍的差距不是品質差，是舞台差——香港有國際定價機制，東京沒有。</figcaption>
  </figure>

  <p>但這裡藏著整份研究最有趣的發現：這個「外流」故事只適用於當代藝術的金字塔頂端。往下看「工藝／陶藝」這一層，情況完全不同——不是作品外流，是<em>從來沒有人做過國際定價</em>。人間國寶的作品，主要在<a class="ent" data-url="https://www.mistore.jp/shopping/event/nihombashi_e/dentoukougei_50">三越</a>這類百貨公司的美術部銷售；<a class="ent" data-url="https://www.mistore.jp/shopping/event/nihombashi_e/dentoukougei_50">日本伝統工芸展</a>第 71、72 回的會場，就辦在日本橋三越本店裡——展覽、驗證、銷售，三件事在同一個櫃位完成。這個體系運轉了七十年，運轉得很好，但它是一個對內的體系。國際二級市場？不存在。國際定價基準？沒人做過。</p>

  <p>而這個沒人定價的品類，本身正在縮水。日本工藝產業的生產總額，從 1983 年高峰的約 5,400 億日圓，掉到 2015 至 2016 年的約 960 到 1,020 億——縮掉八成。輪島塗（石川縣輪島市的漆器工藝）更慘烈，從 1991 年的 180 億掉到 2023 年的 20 億。在世陶藝家的分級價格帶，目前沒有可靠資料<span class="unverified">未查證</span>。</p>

  <figure class="viz">
    <p class="viz-title">四十年的結構性萎縮</p>
    <p class="viz-sub">生產總額，單位：億日圓 · 左：全日本工藝 · 右：輪島塗</p>
    <svg viewBox="0 0 640 250" role="img" aria-label="兩張斜率圖：日本工藝生產總額從1983年約5400億日圓降至2015-16年約990億；輪島塗從1991年180億降至2023年20億">
      <text class="ax" x="160" y="26" text-anchor="middle">全日本工藝生產總額</text>
      <line x1="70" y1="60" x2="250" y2="196" stroke="var(--s1)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="70"  cy="60"  r="4.5" fill="var(--s1)" stroke="var(--surface)" stroke-width="2"/>
      <circle cx="250" cy="196" r="4.5" fill="var(--s1)" stroke="var(--surface)" stroke-width="2"/>
      <text class="val" x="70" y="46" text-anchor="middle">約 5,400</text>
      <text class="val" x="250" y="188" text-anchor="middle">約 990</text>
      <text class="ax" x="70"  y="226" text-anchor="middle">1983</text>
      <text class="ax" x="250" y="226" text-anchor="middle">2015–16</text>
      <text class="note-flag" x="160" y="246" text-anchor="middle">−82%</text>
      <line class="axisline" x1="320" y1="40" x2="320" y2="220"/>
      <text class="ax" x="480" y="26" text-anchor="middle">輪島塗</text>
      <line x1="390" y1="72" x2="570" y2="196" stroke="var(--s1)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="390" cy="72"  r="4.5" fill="var(--s1)" stroke="var(--surface)" stroke-width="2"/>
      <circle cx="570" cy="196" r="4.5" fill="var(--s1)" stroke="var(--surface)" stroke-width="2"/>
      <text class="val" x="390" y="58" text-anchor="middle">180</text>
      <text class="val" x="570" y="188" text-anchor="middle">20</text>
      <text class="ax" x="390" y="226" text-anchor="middle">1991</text>
      <text class="ax" x="570" y="226" text-anchor="middle">2023</text>
      <text class="note-flag" x="480" y="246" text-anchor="middle">−89%</text>
    </svg>
    <figcaption><b>Takeaway：</b>這不是景氣循環，是四十年的結構性下滑。也正因為市場在縮，體系內的人忙著求生，沒有人有餘裕替這個品類建國際定價基準——真空不是被守住的，是被遺忘的。</figcaption>
  </figure>

  <p>把兩層放在一起看：草間彌生證明了「日本藝術在國際舞台可以值十倍」，工藝的萎縮證明了「沒有人在做這件事」。頂層有天價卻沒有你的位子，底層有真空卻沒有人進場。機會在中間——替那個從來沒被國際定價過的品類，當第一個說「這件值得繞路」的人。</p>
</section>

<!-- ================= 伍 權威的合法蓋法 ================= -->
<section id="s5">
  <div class="eyebrow"><span class="num">伍</span><span class="rule"></span></div>
  <h2>權威的合法蓋法</h2>

  <p>好，假設要蓋這座燈塔。第一個直覺通常是：去借官方的殼。掛上日本政府的認證，不就有公信力了嗎？</p>

  <p>此路不通，而且是結構性的不通。<a class="ent" data-url="https://www.meti.go.jp/policy/mono_info_service/mono/nichiyo-densan/index.html">伝統的工芸品マーク</a>——經濟產業省發的傳統工藝品標章——只發給日本國內的百年產地。<a class="ent" data-url="https://www.bunka.go.jp/seisaku/bunkazai/shokai/mukei/">人間國寶</a>是文化庁的行政認定，同樣不對外國個人開放。這兩扇門，對一個台灣人來說是焊死的。</p>

  <p>而且連「靠近」都要小心。日本的<a class="ent" data-url="https://www.caa.go.jp/policies/policy/representation/fair_labeling/representation_regulation/misleading_representation">景品表示法</a>有一條「優良誤認表示」——白話說，就是把東西講得比實際好就違法；不正競争防止法還有「品質等誤認惹起行為」，讓人誤會品質或來歷也算。所以「鑑定」「人間國寶級」這類詞，在行銷文案裡碰都不能碰。合法的路，不是借殼，是自己蓋。</p>

  <p>有人蓋成過嗎？有，而且劇本意外地清晰。<a class="ent" data-url="https://kuramaster.com/ja/entry-requirements/regulation/">Kura Master</a> 是一群法國人辦的日本酒評選——外國人評日本最傳統的產業，日本酒造界不但沒有排斥，反而服氣，得獎酒標貼在瓶身上當賣點。<a class="ent" data-url="https://www.internationalwinechallenge.com/Articles/sake-judging-and-awards.html">IWC SAKE</a>（國際葡萄酒挑戰賽的清酒部門）也一樣。兩者證明了同一件事：權威不必來自血統，可以來自<em>評審團的組成與流程的公開</em>。再看日本自己的<a class="ent" data-url="https://toobi-tocfa.or.jp/about/">東美鑑定評価機構</a>——它的信任不是來自一紙證書，而是來自公開的委員會構成加上定期的外部審查。民間評審團模式，是驗證過可行的。</p>

  <p>那憑什麼是 Jason 來組這個評審團？因為他已經在體系裡面了。<a class="ent" data-url="https://www.nihonkogeikai.or.jp/about/">日本工芸会</a>的正會員資格，是日本伝統工芸展入選滿四次——Jason 從 2022 到 2026 年連年入選，正走在這條軌道上。這不是外人叩門，是體系內的人往外搭橋。橋的另一端也已經有樁：<a class="ent" data-url="https://www.artagenda.jp/exhibition/detail/5891">岐阜県現代陶芸美術館與鶯歌陶瓷博物館</a>有文化交流協定，2021 年辦過「台湾現代陶芸の力」特展；台灣端的官方對口是 <a class="ent" data-url="https://www.ntcri.gov.tw/">NTCRI</a>（國立臺灣工藝研究發展中心），近年合作備忘錄的細節<span class="unverified">未查證</span>。</p>

  <p>第一批背書者從哪裡來？從近到遠：Jason 在工芸展體系內已經認識的評審與學者，往外一圈是工芸史學者，再往外是台日館際的策展人，最外圈是媒體——<a class="ent" data-url="https://bijutsu.press/books/5531/">美術手帖</a> 2025 年 1 月才做過「現代の陶芸」特輯，題目已經在編輯台上了。一圈一圈往外推。不用一次到位。</p>
</section>

<!-- ================= 陸 AI 檢索的真空實測 ================= -->
<section id="s6">
  <div class="eyebrow"><span class="num">陸</span><span class="rule"></span></div>
  <h2>AI 檢索的真空實測</h2>

  <p>燈塔蓋給誰看？十年前答案是 Google。現在多了一個更重要的讀者：AI。愈來愈多收藏者的第一個動作不是搜尋，而是問 ChatGPT 或 Perplexity。所以我們做了一個實測：問 AI「值得收藏的當代日本陶藝家有哪些」。</p>

  <p>結果很誠實。AI 引用的來源是 <a class="ent" data-url="https://en.wikipedia.org/wiki/Japanese_pottery_and_porcelain">Wikipedia</a>、一個 1999 年創站的老牌陶藝網站 <a class="ent" data-url="http://www.e-yakimono.net/html/about-us.html">e-yakimono.net</a>、拍賣行官網，和<a class="ent" data-url="https://wearejapan.com/articles/discover-six-new-generation-japanese-ceramic/">觀光媒體</a>。就這樣。策展級的權威——能說出「這位藝術家好在哪、在譜系裡站什麼位置」的聲音——完全缺席。那把椅子是空的。更妙的是，許多當代陶藝家連 Wikidata（維基百科背後的結構化資料庫，AI 認識世界的骨架）條目都沒有。替他們建立條目，是典型的低成本高槓桿。</p>

  <p>但這個真空有一條殘酷的規則：<a class="ent" data-url="https://www.frase.io/blog/what-is-generative-engine-optimization-geo">GEO 研究</a>（Generative Engine Optimization，生成式引擎優化——讓 AI 願意引用你的學問）顯示，被 AI 引用的內容裡，一半發佈不到十三週。意思是先到先贏，但贏了之後不能睡——要用季度更新制一直餵新內容，位子才守得住。</p>

  <p>技術面的玩法，研究也給了清單的骨架：文章開頭四十到六十個字直接回答問題，讓每個 H2 段落都能被單獨抽走引用；結構化標記用 Article 加 FAQPage 就夠。<a class="ent" data-url="https://presenc.ai/research/state-of-llms-txt-2026">llms.txt</a>（放在網站根目錄、寫給 AI 爬蟲看的說明檔）採用率才一成多，Anthropic 與 Perplexity 正式支持、Google 還沒，效果「適度但可測量」。爬蟲政策上有一個大坑：七成一的新聞出版商因為誤擋了 AI 的搜尋爬蟲，直接從 AI 答案裡消失——所以 Claude-SearchBot、OAI-SearchBot、PerplexityBot、Googlebot 這些要放行，訓練用的爬蟲才另議。成效怎麼量？拿一百到兩百條買家意圖的提問每週跑一輪，<a class="ent" data-url="https://siftly.ai/blog/tools-measure-citation-rates-ai-generated-content-brands-2026">市面上的追蹤工具</a>月費不到一百美元；另外注意七成的 AI 導流在 GA4 裡會被誤標成「直接流量」，要自訂管道分組才看得見。</p>

  <p>語言策略只有一條鐵律：英日中三語發佈有利跨語言檢索，但<em>日文版必須由母語者改寫</em>，機翻的日文在日本讀者眼中等於自報家門「我是外人」。</p>
</section>

<!-- ================= 柒 權威蓋好之後，怎麼被信任 ================= -->
<section id="s7">
  <div class="eyebrow"><span class="num">柒</span><span class="rule"></span></div>
  <h2>權威蓋好之後，怎麼被信任</h2>

  <p>到這裡劇本都還算直觀。但接下來有一個繞不開的問題：這個平台的評鑑要規模化，勢必用上 AI。一個「AI 評陶藝」的東西，憑什麼被人相信？米其林的密探吃了一百年才換來今天的信用，一個新平台的演算法，第一天就要面對「你憑什麼」。</p>

  <p>先看前人怎麼處理「評分的信任」。<a class="ent" data-url="https://nuvomagazine.com/magazine/spring-2022/100-point-wine-rating-system">Robert Parker</a> 的葡萄酒百分制把公式攤開了——色澤幾分、香氣幾分、餘韻幾分，人人可檢驗。結果呢？影響力大到整個波爾多為了討好他的口味改釀酒，這現象有個專有名詞叫 <a class="ent" data-url="https://grapecollective.com/articles/death-of-the-100-point-system">Parkerization</a>。公開公式帶來可檢驗性，也帶來被批判和被迎合的風險。米其林走另一個極端：五大標準公開，但評分流程完全黑箱，靠百年品牌和匿名密探制度撐住信任——這條路新平台學不來，因為黑箱需要歷史信用來抵押，而新平台沒有。</p>

  <p>中間解是存在的，而且就在第伍節提過的清酒賽場上：IWC 和 Kura Master 公開類別、公開流程、公開評審團構成，但不公開逐杯分數。金融圈的信用評級機構走得更遠——<a class="ent" data-url="https://www.moodys.com/web/en/us/insights/methodologies-and-models.html">Moody's</a> 把評級方法整份文件公開、改版前還對市場徵詢意見；歐盟監管機構 <a class="ent" data-url="https://www.esma.europa.eu/sites/default/files/library/esma71-99-478_public_notice_moodys_germany_and_moodys_united_kingdom.pdf">ESMA</a> 甚至因為 Moody's 沒把方法標示清楚而開罰。訊息很一致：<em>公開維度和方法、保留細部權重、搭配定期回顧與申訴管道</em>——這是評分機構信任設計的最適區間。</p>

  <p>那人到底什麼時候願意相信演算法的判斷？信任科學的研究給了幾個有點反直覺的答案。「演算法厭惡」和「演算法欣賞」<a class="ent" data-url="https://aisel.aisnet.org/ecis2020_rp/168/">同時存在</a>，取決於情境：看得到過往準確率、聽得懂運作原理的時候，人反而偏好演算法；在投資這種嚴肅決策裡，六成六的受試者選演算法而不選同樣準的人類。最微妙的是 human-in-the-loop（人類在迴路中，也就是「AI 打分、人來把關」）：讓人可以覆核 AI 的建議，會<a class="ent" data-url="https://pmc.ncbi.nlm.nih.gov/articles/PMC10857587/">顯著提升使用者的信任</a>——但實驗同時顯示，人類的手動調整往往讓整體準確度變差。所以人審是信任設計，不是精度保證，該用在刀口上：只覆核上榜單、進交易的高影響輸出，並簽名負責。</p>

  <p>法規這邊，三個市場的方向驚人地一致，就是兩個字：揭露。歐盟 <a class="ent" data-url="https://artificialintelligenceact.eu/article/50/">AI Act 第 50 條</a>要求跟人互動的 AI 要表明身份、AI 生成的內容要以機器可讀方式標記，2026 年還配了一份<a class="ent" data-url="https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content">透明度實務守則</a>當合規路徑。<a class="ent" data-url="https://digital.nemko.com/regulations/ai-regulation-japan">日本的 AI 促進法</a>走軟法路線，靠 METI 指引與既有法規把關；要特別注意的是日本的「公表權」——<a class="ent" data-url="https://www.nakapat.gr.jp/wp-content/uploads/2023/07/【英訳】20230718_Right-of-Publicity.pdf">Pink Lady 案</a>確立了擅用名人姓名肖像吸客可以求償，所以「藝術家監修的 AI 評鑑法」必須有明確合約授權，而且不能讓消費者誤以為評語出自藝術家本人。<a class="ent" data-url="https://www.theleveragedyears.com/ai-regulation-news/taiwan-ai-content-labeling-i-am-ai-duty-2026">台灣的人工智慧基本法</a>則預告了「我是 AI」的標示義務，細則待訂。</p>

  <p>不揭露的下場，已經有兩具屍體可以看。<a class="ent" data-url="https://www.businessinsider.com/sports-illustrated-ran-articles-by-fake-ai-generated-writers-report-2023-11">Sports Illustrated</a> 用 AI 生成的假頭像、假作者發文，被抓包後刪文、換執行長，品牌信用重傷。<a class="ent" data-url="https://www.wired.com/story/cnet-published-ai-generated-stories-then-its-staff-pushed-back/">CNET</a> 悄悄發了七十多篇 AI 理財文，揭露藏在滑鼠 hover 才看得到的地方，結果七十七篇裡四十一篇要更正。注意：兩案燒起來的點都不是「用了 AI」，而是「假裝沒用」。反過來說，目前還沒有任何一個「標示清楚的 AI 評論者」因此被追究——風險在偽裝，不在工具。</p>

  <p>把這些收斂成設計，就是四件事。命名以方法為主角，叫「平台審美評鑑法・藝術家監修」，不造一個擬人的 AI 評論家人格。每則評語配固定的四行揭露：這是 AI 生成、依據哪套公開方法、不代表任何機構立場、高影響內容經過誰的人工覆核。發布分級：AI 初評先掛「未認證」，上首頁或榜單才經人審簽名。最後，方法要有版本號和公開的更正紀錄——CNET 的教訓是，悄悄改比改錯更致命。</p>
</section>

<!-- ================= 捌 信任會怎麼被攻擊 ================= -->
<section id="s8">
  <div class="eyebrow"><span class="num">捌</span><span class="rule"></span></div>
  <h2>信任會怎麼被攻擊</h2>

  <p>蓋燈塔之前，最好先研究過去一百年裡，燈塔是怎麼被拆掉的。評價體系的歷史，就是一部被攻擊的歷史，而且劇本重複率高得驚人。</p>

  <p>最便宜的攻擊是假評論。有人用假照片和朋友刷的五星評論，把一間根本不存在的餐廳——自家後院的工具棚——刷成 <a class="ent" data-url="https://theconversation.com/believe-nothing-the-hoax-of-the-shed-at-dulwich-91211">TripAdvisor 上的倫敦第一名</a>。The Shed at Dulwich 這場惡作劇之後，「真實體驗」四個字在 TripAdvisor 身上再也立不直。<a class="ent" data-url="https://www.aboutamazon.com/news/policy-news-views/amazon-continues-to-take-action-against-fake-review-brokers">Amazon</a> 至今還在跟付費好評仲介纏訟。第二種攻擊更陰：<a class="ent" data-url="https://www.latimes.com/business/la-fi-yelp-ratings-20140905-story.html">Yelp</a> 被大量商家指控「不買廣告就讓負評浮上來」——法院最後認定不構成勒索，Yelp 打贏了官司，卻沒打贏觀感，「評分是銷售槓桿」的懷疑跟了它十幾年。法律上的清白，救不回市場上的信任。</p>

  <p>第三種是買獎。經濟學者 Robin Goldstein 虛構了一間餐廳、附上一份故意挑爛酒的酒單，付了 250 美元申請費——然後拿到了 <a class="ent" data-url="https://hoaxes.org/archive/permalink/wine_spectator_hoaxed">Wine Spectator 的卓越獎</a>。一張獎牌的成本被公開那天，那個獎就死了。第四種最結構性：信用評級機構在 2008 年金融危機前採「發行人付費」——被評的人付錢給評分的人——結果就是次貸商品被灌出一堆高評等，泡沫破掉時整個行業陪葬。第五種攻擊瞄準證書本身：紐約 165 年的老畫廊 <a class="ent" data-url="https://en.wikipedia.org/wiki/Knoedler">Knoedler</a> 長年賣出偽造的 Rothko 和 Pollock，靠的就是不透明的鑑定敘事，東窗事發後一夕倒閉；日本法院也審過多起<a class="ent" data-url="https://www.courts.go.jp/assets/hanrei/hanrei-pdf-80233.pdf">偽造絵画鑑定証書</a>的案子——鑑定書可以是信任的憑證，也可以是詐欺的道具。</p>

  <p>還有兩種要記下：付錢洗白內容——Wikipedia 曾一次<a class="ent" data-url="https://www.bbc.com/news/technology-34127466">封鎖 381 個收費代寫的假帳號</a>；以及寄生 SEO——垃圾內容付費掛在高信譽網站下借殼排名，Google 已經<a class="ent" data-url="https://blog.google/company-news/inside-google/company-announcements/defending-search-users-from-parasite-seo-spam/">明文列為重點打擊對象</a>。連 Parker 本人晚年都因為代表在波爾多兼任酒莊顧問，被<a class="ent" data-url="https://www.nytimes.com/2003/08/10/world/accusations-rise-from-wine-cellars-of-bordeaux.html">質疑利益輸送</a>。攻擊面就這麼多，一張表看完，全放在附錄的 Exploit 對照卡裡。</p>

  <blockquote class="pull">當所有東西都是 90 分以上，分數就失去了意義——這是酒評論壇裡玩家的第一條民間法則。他們用廣告重疊度抓買榜，用「這個評論者從不給負評」抓收買，用「評審匿不匿名、自不自費」判斷一個獎值不值得信。<cite>—— Reddit 酒類與餐飲社群的 folk heuristics，完整清單見附錄</cite></blockquote>

  <p>防守的答案，其實已經被兩家機構寫好了。<a class="ent" data-url="https://www.consumerreports.org/about-us/policies-and-financials/no-commercial-use-policy/">Consumer Reports</a> 的模型最乾淨：不收廣告、匿名自購商品測試、禁止企業拿它的評分打廣告。<a class="ent" data-url="https://www.nytimes.com/wirecutter/reviews/how-wirecutter-makes-money/">Wirecutter</a> 證明了有佣金也能活：推薦由編輯部獨立決定，商業團隊只在推薦定案後處理分潤連結，兩邊隔一道防火牆。反例也有判例等級的：<a class="ent" data-url="https://www.sec.gov/newsroom/press-releases/2020-112">Morningstar 被 SEC 罰 350 萬美元</a>，罪名就是讓分析師同時跑業務。所以裁決很硬：評分與排序的決定權，制度上必須跟任何付費收入隔離；付費可以買到「清楚標示的廣告」，永遠買不到排名。這條線一旦模糊過一次，前面九種攻擊隨便哪一種都能把平台釘死<span class="unverified">結構推演・未查證</span>。</p>
</section>

<!-- ================= 玖 先窄後寬的路 ================= -->
<section id="s9">
  <div class="eyebrow"><span class="num">玖</span><span class="rule"></span></div>
  <h2>先窄後寬的路</h2>

  <p>最後一個問題：不擁有交易的人，真的能成為定價權威嗎？歷史說可以，而且例子多到可以歸納出公式。<a class="ent" data-url="https://www.kbb.com/company/history/">Kelley Blue Book</a> 從 1920 年代一張二手車收購價目表起家，二戰時被美國政府拿去當價格上限的依據，從此變成「藍皮書價」。<a class="ent" data-url="https://www.zillow.com/zestimate/">Zillow</a> 用公開地籍資料加機器學習，讓全美國人看房先看 Zestimate。<a class="ent" data-url="https://www.hagerty.com/valuation-toolsAbout">Hagerty</a> 把經典車估價跟保險綁在一起，<a class="ent" data-url="https://www.psacard.com/priceguide">PSA</a> 把卡片價格指南跟鑑定評級綁在一起。共同點不是資料獨家——是<em>長期累積、被制度採用、跟核心產品綁定</em>，三者疊起來才是護城河。反例同樣清楚：Zillow 拿自家估價直接下場買房，虧掉幾十億美元收場——估價被當成交易決策的那一刻，模型偏差會被槓桿放大。所以早期絕不做價格保證。</p>

  <p>那交易資料本身是不是一門好生意？看帳本最誠實。Artnet 的數據業務毛利高，但只佔營收三分之一，全公司 2023 年還是小虧；Artprice 的年營收，第三方估計約八百多萬歐元。而 Masterworks 乾脆把三十萬筆資料庫免費開放——因為它真正賺錢的是投資產品，資料庫的工作是讓人相信「藝術是可以被定價的資產」。</p>

  <figure class="viz">
    <p class="viz-title">Artnet 2023 年收入結構</p>
    <p class="viz-sub">單位：百萬歐元 · 總營收約 2,335 萬歐元，當年淨損約 100 萬歐元</p>
    <svg viewBox="0 0 640 190" role="img" aria-label="橫向長條圖：Artnet 2023 年收入 Media 約 860 萬歐元、Marketplace 約 800 萬、Data 約 670 萬，數據業務約佔三分之一">
      <text class="ax" x="142" y="49" text-anchor="end">Media 媒體</text>
      <rect x="154" y="34" width="396" height="24" rx="4" fill="var(--s1)"/>
      <text class="val" x="558" y="50">8.6</text>
      <text class="ax" x="142" y="109" text-anchor="end">Marketplace 交易</text>
      <rect x="154" y="94" width="369" height="24" rx="4" fill="var(--s1)"/>
      <text class="val" x="531" y="110">8.0</text>
      <text class="ax" x="142" y="169" text-anchor="end">Data 數據</text>
      <rect x="154" y="154" width="309" height="24" rx="4" fill="var(--s2)"/>
      <text class="val" x="471" y="170">6.7</text>
      <text class="note-flag" x="504" y="170">← ≈ 收入的 1/3</text>
    </svg>
    <figcaption><b>Takeaway：</b>連坐擁 1,700 萬筆拍賣紀錄的 Artnet，數據訂閱也只是門「中等量級的利基生意」。交易資料的真正價值是信任護城河與高毛利 B2B 產品，不是一開始就能收錢的金礦——Masterworks 把資料庫免費開放，就是想通了這一點。</figcaption>
  </figure>

  <p>接下來是廣與窄的抉擇。誘惑很明顯：真空這麼大，何不一口氣佔住「日本藝術」甚至「東方藝術」的大詞？證據潑了冷水。<a class="ent" data-url="https://www.hawaii.edu/news/2022/05/13/gizmodo-wirecutter-founder-speaks-at-uh/">Wirecutter</a> 從幾樣 3C 產品做到全品類，<a class="ent" data-url="https://ahrefs.com/blog/healthline-seo-case-study/">Healthline</a> 靠一個疾病一個主題群打成健康內容巨頭——成功的內容權威幾乎都從窄處起家。一開始就鋪開的 <a class="ent" data-url="https://www.forbes.com/sites/natalierobehmed/2013/09/06/why-artsy-is-succeeding-in-putting-the-art-world-online/">Artsy</a> 呢？它靠的是鉅額融資加五百家頂級畫廊供料，這個起手式複製不起。AI 檢索時代的<a class="ent" data-url="https://growganic.io/geo">量化研究</a>更直接：網域權重只解釋不到 4% 的引用差異，七成七被 AI 引用的頁面來自小網站，真正的門檻是一個主題至少八到十二篇互連的深度內容。小而深，贏過大而淺。別忘了 e-yakimono.net——一個人的窄站，25 年後還被 AI 引用著。</p>

  <p>那窄要窄在哪裡？研究把四個候選切口攤開來評分，加上一個混合方案：品牌用「日本藝術／東方藝術」的大框架，深度先砸在兩個旗艦——當代日本陶藝（W1，Jason 的主場）和日本藝術投資（W4，付費意願最強的客群）。</p>

  <figure class="viz">
    <p class="viz-title">四個切口與混合方案的評分矩陣</p>
    <p class="viz-sub">1–5 分，5 為最優 · 「切入空間」分數愈高代表現有引用競爭愈少 · 需求欄多為推估<span style="white-space:nowrap">（未查證）</span></p>
    <div class="tablewrap">
    <table class="heat">
      <thead>
        <tr><th class="rowh">候選切口</th><th>需求</th><th>切入空間</th><th>創辦人適配</th><th>可變現受眾</th><th>擴張路徑</th></tr>
      </thead>
      <tbody>
        <tr><th class="rowh">W1 當代日本陶藝／工芸</th><td class="h3">3</td><td class="h4">4</td><td class="h5">5</td><td class="h4">4</td><td class="h4">4</td></tr>
        <tr><th class="rowh">W2 全日本當代藝術</th><td class="h4">4</td><td class="h2">2</td><td class="h3">3</td><td class="h4">4</td><td class="h3">3</td></tr>
        <tr><th class="rowh">W3 東方藝術（廣域）</th><td class="h4">4</td><td class="h2">2</td><td class="h3">3</td><td class="h3">3</td><td class="h4">4</td></tr>
        <tr><th class="rowh">W4 日本藝術收藏／投資</th><td class="h4">4</td><td class="h3">3</td><td class="h4">4</td><td class="h5">5</td><td class="h4">4</td></tr>
        <tr><th class="rowh">Hybrid：品牌廣＋W1/W4 深</th><td class="h4">4</td><td class="h5">5</td><td class="h5">5</td><td class="h5">5</td><td class="h5">5</td></tr>
      </tbody>
    </table>
    </div>
    <figcaption><b>Takeaway：</b>Hybrid 是唯一每一欄都亮的列——品牌可以廣，深度必須先砸在 W1＋W4。這正是「米其林」的原始配方：紅色封面是給全法國的，但第一顆星，從巴黎的餐桌開始發。</figcaption>
  </figure>

  <p>路徑於是變成一張五年地圖。頭半年立品牌與架構：大框架掛「東方藝術」，底下開兩個旗艦專區。第六到十八個月做內容權威：窯場指南、陶藝家檔案、收藏實務，每個主題群至少八到十二篇互連，同步監測 AI 引用率。第一到第三年，開始在評論裡附上「參考成交價」表格，內部悄悄累積拍賣事實資料庫。第三到五年，資料過幾千筆、有足夠的重複成交後，推出訂閱式價格資料庫和指數，賣給保險公司、博物館、銀行——Artprice 和 Artnet 的帳本證明這是門年收數百萬歐元等級的 B2B 生意。五年之後，才考慮輕型的交易撮合。</p>

  <p>收資料的法律紅線要先畫好。日本著作權法不保護「事實」——成交價、日期、尺寸這些欄位可以合法整理——但拍賣行的<a class="ent" data-url="https://www.sbiartauction.co.jp/pdf/en/terms/terms_of_use-en.pdf">網站條款</a>明文禁止爬蟲。前車之鑑血淋淋：Christie's 曾<a class="ent" data-url="https://www.artforum.com/news/artprice-files-complaint-against-christies-193635/">控告 Artprice</a> 完整重製兩千三百份拍賣目錄，Heritage Auctions 則告了 Christie's 子公司 <a class="ent" data-url="https://www.nbcdfw.com/news/local/auction-houses-face-off-in-website-data-scraping-lawsuit/2033762/">Collectrium</a> 爬走近三百萬筆拍品資料轉售。安全的路是人工或半人工摘取事實欄位、自建結構、標明出處——慢，但走得遠。至於更誘人的捷徑：交易保證、託管、代幣化，全部屬於「資料與團隊成熟前不碰」的清單<span class="unverified">部分屬結構推演・未查證</span>。</p>

  <p>回到開頭那個舊金山的收藏者。五年後他站在同一件青瓷前面，拿出手機，這次查得到了：藝術家的譜系、作品的評鑑、近三年的成交紀錄，三個問題一頁答完。而簽在那套評鑑方法上的名字，是一個從體系內走出來的台灣陶藝家。米其林出現之前，沒有人知道哪家餐廳值得繞路。之後的一百年，全世界跟著它的星星旅行。</p>
</section>

<!-- ================= 附錄 ================= -->
<section id="appendix">
  <div class="eyebrow"><span class="num">附</span><span class="rule"></span></div>
  <h2>查閱用參考卡</h2>
  <p>下面是三份補充研究裡工具性最強的部分，做成卡片方便日後查閱。點開展開。標注「未查證」處為原研究之標記，照實保留。</p>

  <div class="cards">

  <details class="card">
    <summary><span class="tag">EXPLOIT</span>九種信任攻擊對照卡</summary>
    <div class="card-body">
      <p>按「可能性 × 傷害」排序。「對我們的版本」與「對策」屬結構推演，原研究均標未查證。</p>
      <div class="tablewrap"><table>
        <tr><th>攻擊型態</th><th>歷史案例</th><th>對本平台的版本</th><th>對策要點</th></tr>
        <tr><td><b>1. 假評論農場</b></td><td>The Shed at Dulwich 假餐廳刷上 TripAdvisor 倫敦第一；Amazon 長期訴訟打假評仲介</td><td>評價農場向畫廊、老師兜售五星好評包</td><td>實名＋購買/參觀證據驗證；行為異常偵測；公開假評處置統計</td></tr>
        <tr><td><b>2. 評分被當銷售槓桿</b></td><td>Yelp「不買廣告負評浮上來」訴訟——法律勝訴、信任重傷</td><td>業務暗示付費策展可提升排名</td><td>業務人員不得碰排名邏輯；明文「付費不影響評分排序」；獨立申訴管道</td></tr>
        <tr><td><b>3. 買獎／申請費驅動</b></td><td>Wine Spectator 卓越獎被 250 美元假餐廳攻破；World's 50 Best 招待文化</td><td>「年度藝術家」若收高額申請費即被視為廣告</td><td>獎項免費或象徵性收費；評審匿名且與商業隔離；公開入選與落選理由</td></tr>
        <tr><td><b>4. 發行人付費崩壞</b></td><td>2008 信評機構 issuer-pays 模式助長次貸泡沫</td><td>作品所有者付費鑑定＋同一組人決定認證等級</td><td>付費鑑定與公開評級拆開；鑑定收入不獎勵評級人員</td></tr>
        <tr><td><b>5. 證書體系被偽造/俘虜</b></td><td>Knoedler 165 年老店因偽作案倒閉；日本偽造鑑定書判決；Salvator Mundi 爭議</td><td>平台認證徽章被少數造假案連坐拖垮</td><td>多名獨立專家交叉驗證；鑑定書只寫證據與不確定性；公開撤銷機制</td></tr>
        <tr><td><b>6. 付費編輯洗白</b></td><td>Wikipedia 一次封鎖 381 個收費代寫帳號；Wiki-PR 事件</td><td>畫廊付錢請代寫公司灌吹捧內容</td><td>禁止未揭露付費寫作；利益揭露欄位；社群舉報機制</td></tr>
        <tr><td><b>7. 寄生 SEO/內容農場</b></td><td>Google 明文打擊 site reputation abuse</td><td>攻擊者借高權重媒體養假權威再誘導我們引用</td><td>不掛載外部贊助內容；連結策略以原始資料為主</td></tr>
        <tr><td><b>8. 評論者被商業俘虜</b></td><td>Parker 代表兼任波爾多酒莊顧問遭質疑</td><td>重量級評論者兼任畫廊顧問又給關鍵評等</td><td>利益申報；衝突時自動迴避；多人共同決定等級</td></tr>
        <tr><td><b>9. Vanity awards</b></td><td>「付錢就有獎」產業造成獎項通膨（未查證）</td><td>默許付費拿徽章＝全站評級陪葬</td><td>徹底不做：任何獎項不保證入選、不打包銷售</td></tr>
      </table></div>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">RISK</span>AI 評鑑風險表（風險 × 對策）</summary>
    <div class="card-body">
      <div class="tablewrap"><table>
        <tr><th>風險</th><th>可能性</th><th>對策</th></tr>
        <tr><td>被誤認為代表某博物館／評論家（冒充權威）</td><td>中偏高</td><td>不用他人機構名義命名；明確聲明「非代表任何機構」；引用僅限「參考其公開標準」</td></tr>
        <tr><td>AI 身份未揭露或揭露過於隱蔽</td><td>中</td><td>所有輸出明顯標示 AI 身份；遵循 EU Art. 50 與台灣基本法；絕不學 CNET 藏在 hover</td></tr>
        <tr><td>模型偏誤（偏好特定風格＝新 Parkerization）</td><td>高</td><td>定期比對 AI 評分與多元人審結果；公開偏誤分析；方法說明中言明價值取向</td></tr>
        <tr><td>用戶過度信任 AI 評語做重大決策</td><td>中</td><td>強調評語為參考；交易場景加入額外人工鑑定；教育過度信任風險</td></tr>
        <tr><td>Human-in-the-loop 流於形式</td><td>高</td><td>人審集中於榜單／交易等高影響輸出；建立審查準則與稽核</td></tr>
        <tr><td>日本公表權（肖像／姓名）爭議</td><td>中</td><td>與合作藝術家簽明確授權合約；標示「監修方法」而非「個人評語」</td></tr>
        <tr><td>AI 法規不符（EU／台／日）</td><td>中</td><td>持續追蹤三地細則；預先設計合規標示與記錄</td></tr>
        <tr><td>資料錯誤導致評語失真</td><td>高</td><td>metadata 完整性檢查；缺資料標示「暫定」；提供作品方補充管道</td></tr>
      </table></div>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">TEMPLATE</span>命名規則與四行揭露模板</summary>
    <div class="card-body">
      <p><b>命名：方法為主角，人格為次。</b>主名稱用「〔平台名〕審美評鑑法」＋副標「〔藝術家名〕監修審美矩陣」；AI 名稱低調（如「〔平台名〕評議 AI」），避免擬人化成評論家人格。與真人合作用共署格式：「〔藝術家〕×〔平台〕評鑑框架，由 AI 依此框架計算」。</p>
      <p><b>每則評語上方的固定揭露區塊：</b></p>
      <ul>
        <li><b>行 1・身份：</b>「此評語由 AI 系統生成，非人類評論者。」（EU 用戶加 AI-generated content 標記）</li>
        <li><b>行 2・方法：</b>「本系統依據〔藝術家〕與〔平台〕公開的審美評鑑法（連結）之可量化維度評估。」</li>
        <li><b>行 3・限制：</b>「本評語僅代表系統依公開方法之運算結果，不代表任何博物館、學會或評論家之官方立場。」</li>
        <li><b>行 4・人審：</b>「榜單等重要標示均經專家審查確認；作者或機構可循此表單提出更正申請。」</li>
      </ul>
      <p><b>發布分級：</b>AI 評語預設「未認證」→ 進首頁／榜單／交易建議時才經人類審查委員會簽名 →「已審核」。方法與模型建版本號，更正公開記錄原因。</p>
      <p><b>引用而非冒充：</b>可寫「維度設計啟發自 IWC／Kura Master 的分類方式」並附「與上述機構無官方關係」；禁用「依米其林標準」「以 MoMA 標準訓練」等語言，禁用他人商標。</p>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">DEFENSE</span>防禦設計七原則（按證據強度排序）</summary>
    <div class="card-body">
      <ul>
        <li><b>1. 結構性獨立：</b>評級／排序在制度上與抽佣、廣告收入完全隔離（信評 issuer-pays 與 Morningstar 遭 SEC 罰款為反面教材；Consumer Reports 為正面標竿）。</li>
        <li><b>2. 匿名＋自費評審：</b>鑑定與評級人員對被評者匿名，樣品與門票由平台統一支付，不受招待（Michelin／Consumer Reports 模式）。</li>
        <li><b>3. 公開方法論＋版本紀錄：</b>公開標準、權重、資料來源；每次修訂留 changelog。</li>
        <li><b>4. 社群與同儕監督：</b>允許並鼓勵外部批評平台評級，提供反駁管道，不壓制負面討論（Wikipedia／Reddit 模式）。</li>
        <li><b>5. 利益揭露與迴避：</b>鑑定人與核心評論者定期申報利益；有衝突自動轉由他人評級。</li>
        <li><b>6. 反濫用技術＋透明報告：</b>專門團隊偵測假評論，定期對外發布偵測與處置統計（Amazon／Google SpamBrain 模式）。</li>
        <li><b>7. 禁止商業利用評級：</b>平台評級不得被銷售廣告直接引用，除非嚴格授權且保留撤銷權（Consumer Reports 之 No Commercial Use Policy）。</li>
      </ul>
      <p>各原則之落地細節原研究標記未查證，屬結構類推。</p>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">HEURISTICS</span>社群怎麼判斷「被買透了沒」——folk heuristics 清單</summary>
    <div class="card-body">
      <ul>
        <li><b>廣告重疊＝買榜訊號：</b>榜單裡反覆出現同一批大廣告客戶，就被視為 pay-to-play。</li>
        <li><b>所有東西都 90+ 分就不可信：</b>分數通膨使評分失去區別力，被歸類為行銷工具。</li>
        <li><b>看評論者，不看品牌：</b>玩家長期比對具名評論者的紀錄；「永遠給高分」者被標記為 shill（收錢吹捧者）。</li>
        <li><b>商業化程度決定群眾平台可信度：</b>無廣告導向的社群（CellarTracker、Reddit）被視為比有官方評分＋商業合作的網站乾淨。</li>
        <li><b>看負評密度與語氣：</b>負評極少且疑似被演算法藏起來，反而觸發警報。</li>
        <li><b>匿名 vs 非匿名評審：</b>匿名自費的 Michelin 密探被視為相對可信；已知評審、期待招待的 50 Best 被視為公關網絡。</li>
        <li><b>Affiliate／業配要打折看：</b>大量分潤連結、從不給強烈負評者，被歸類為「娛樂內容，不是評測」。</li>
      </ul>
      <p>平台設計目標：讓上述每一條 heuristic 檢查我們時，都指向「乾淨」的結論。</p>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">CHECKLIST</span>讓 AI 長期願意引用的十項檢查</summary>
    <div class="card-body">
      <ul>
        <li><b>1. 低錯誤率＋明確更正機制：</b>條目頁設「更正記錄」區；重大更正對外公告。</li>
        <li><b>2. 穩定 URL 與持久 ID：</b>每個作品、鑑定、評審人有不變的永久網址；改址用明確重定向。</li>
        <li><b>3. 結構化資料：</b>schema.org 的 CreativeWork／Review／Rating／Person＋JSON-LD；標記作者、日期、方法版本。</li>
        <li><b>4. E-E-A-T 信號：</b>公開鑑定人履歷、出版、展歷；爭議作品並陳多位專家觀點。</li>
        <li><b>5. 不當寄生 SEO 宿主：</b>不出售頁面給外部內容掛載；控制外鏈品質。</li>
        <li><b>6. 透明標記贊助內容：</b>sponsored 標記；贊助內容與核心評級版面明確分隔。</li>
        <li><b>7. 被高信任來源引用：</b>爭取學術、博物館、公共機構的連結與引用。</li>
        <li><b>8. 編輯流程公開：</b>公開編輯方針、利益衝突政策、重要決策摘要。</li>
        <li><b>9. 人類參與度：</b>避免無差別 AI 生成內容；標示人工審稿責任者。</li>
        <li><b>10. 機器可讀的反濫用信號：</b>公開反濫用政策與執行數據。</li>
      </ul>
      <p>多數項目之效果量原研究標記未查證。</p>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">CONFIDENCE</span>三份研究的信心評估摘要</summary>
    <div class="card-body">
      <div class="tablewrap"><table>
        <tr><th>結論</th><th>信心</th><th>還缺什麼證據</th></tr>
        <tr><td>「方法透明＋清楚標示 AI＋共署真人方法」是最佳信任路線</td><td>85%</td><td>缺「AI 藝評人格」的直接 A/B 測試，需自做用戶實驗</td></tr>
        <tr><td>不應模仿 Michelin 式高度黑箱</td><td>80%</td><td>缺新平台用黑箱成功的反例研究（未查證）</td></tr>
        <tr><td>Human-in-the-loop 提升信任但須嚴防降低準確度</td><td>90%</td><td>藝術品評領域尚無實驗</td></tr>
        <tr><td>風險集中在「未揭露的假專家」而非「標示清楚的 AI」</td><td>88%</td><td>需持續關注未來判例</td></tr>
        <tr><td>引用既有權威標準（聲明非官方關係）法律風險可控</td><td>75%</td><td>建議取得各法域律師意見</td></tr>
        <tr><td>方法優先命名優於高度擬人化 AI 人格</td><td>70%</td><td>缺東亞藝術市場在地研究</td></tr>
        <tr><td>「品牌廣＋數據窄」（Hybrid）策略</td><td>75%</td><td>缺實際關鍵字／AI 查詢量；B2B 付費意願未實測（未查證）</td></tr>
        <tr><td>歷史 exploit 機制與代價之描述</td><td>85%</td><td>—（多有具名新聞與法院文件）</td></tr>
        <tr><td>Exploit「對我們的版本」與防禦推演</td><td>60%</td><td>屬結構類推，未有直接案例驗證（未查證）</td></tr>
      </table></div>
    </div>
  </details>

  </div>
</section>

<!-- ================= 參考來源 ================= -->
<section id="sources">
  <div class="eyebrow"><span class="num">源</span><span class="rule"></span></div>
  <h2>參考來源</h2>
  <p>以下為本文與三份補充研究的全部來源網址，按主題分四組。每條均可點開預覽、複製網址或另開分頁。</p>
  <div class="src-group">
    <h3>一、市場真空與競品掃描（原始研究）（48 條）</h3>
    <ol>
      <li><a class="ent" data-url="https://www.wallstreetzen.com/blog/masterworks-review/">https://www.wallstreetzen.com/blog/masterworks-review/</a></li>
      <li><a class="ent" data-url="https://news.artnet.com/market/beowolff-capital-artnet-takeover-2649474">https://news.artnet.com/market/beowolff-capital-artnet-takeover-2649474</a></li>
      <li><a class="ent" data-url="https://www.theartnewspaper.com/2025/05/27/european-american-investment-company-to-buy-artnet-and-take-it-private">https://www.theartnewspaper.com/2025/05/27/european-american-investment-company-to-buy-artnet-and-take-it-private</a></li>
      <li><a class="ent" data-url="https://www.theartnewspaper.com/2026/04/23/comment-|-how-viable-is-the-artnet-and-artsys-merger">https://www.theartnewspaper.com/2026/04/23/comment-|-how-viable-is-the-artnet-and-artsys-merger</a></li>
      <li><a class="ent" data-url="https://hyperallergic.com/art-movements-dozens-laid-off-at-artnet-and-artsy/">https://hyperallergic.com/art-movements-dozens-laid-off-at-artnet-and-artsy/</a></li>
      <li><a class="ent" data-url="https://www.prnewswire.com/news-releases/artmarketcom-double-digit-growth-in-q2-2025...302522441.html">https://www.prnewswire.com/news-releases/artmarketcom-double-digit-growth-in-q2-2025...302522441.html</a></li>
      <li><a class="ent" data-url="https://www.prnewswire.com/news-releases/artmarketcom-publishes-its-32nd-artprice-annual-report...302708675.html">https://www.prnewswire.com/news-releases/artmarketcom-publishes-its-32nd-artprice-annual-report...302708675.html</a></li>
      <li><a class="ent" data-url="https://blog.mexc.com/what-is-art-liveart/">https://blog.mexc.com/what-is-art-liveart/</a></li>
      <li><a class="ent" data-url="https://docs.liveart.xyz/liveart/whitepaper/data-oracles-powering-a-transparent-rwa-market-on-liveart">https://docs.liveart.xyz/liveart/whitepaper/data-oracles-powering-a-transparent-rwa-market-on-liveart</a></li>
      <li><a class="ent" data-url="https://www.myartbroker.com/mab-100">https://www.myartbroker.com/mab-100</a></li>
      <li><a class="ent" data-url="https://www.myartbroker.com/art-and-tech/articles/navigating-art-investments-mab100-singularityx">https://www.myartbroker.com/art-and-tech/articles/navigating-art-investments-mab100-singularityx</a></li>
      <li><a class="ent" data-url="https://www.thefineartledger.com/post/ai-art-market-analytics-provenance-authentication-2026">https://www.thefineartledger.com/post/ai-art-market-analytics-provenance-authentication-2026</a></li>
      <li><a class="ent" data-url="https://news.artnet.com/market/2026-asian-art-market-preview-2737112">https://news.artnet.com/market/2026-asian-art-market-preview-2737112</a></li>
      <li><a class="ent" data-url="https://help.aucfan.com/hc/ja/articles/54235003362841">https://help.aucfan.com/hc/ja/articles/54235003362841</a></li>
      <li><a class="ent" data-url="https://prtimes.jp/main/html/rd/p/000000478.000008833.html">https://prtimes.jp/main/html/rd/p/000000478.000008833.html</a></li>
      <li><a class="ent" data-url="https://artnewsjapan.com/article/64802">https://artnewsjapan.com/article/64802</a></li>
      <li><a class="ent" data-url="https://news.artnet.com/market/japan-art-market-is-bigger-than-it-seems-report-2587823">https://news.artnet.com/market/japan-art-market-is-bigger-than-it-seems-report-2587823</a></li>
      <li><a class="ent" data-url="https://www.theartnewspaper.com/2025/01/07/japans-art-market-grew-11-since-the-pandemic-new-report-finds">https://www.theartnewspaper.com/2025/01/07/japans-art-market-grew-11-since-the-pandemic-new-report-finds</a></li>
      <li><a class="ent" data-url="https://www.artbasel.com/stories/japan-young-artists-collectors">https://www.artbasel.com/stories/japan-young-artists-collectors</a></li>
      <li><a class="ent" data-url="https://news.artnet.com/market/art-week-tokyo-2024-2565916">https://news.artnet.com/market/art-week-tokyo-2024-2565916</a></li>
      <li><a class="ent" data-url="https://artnewsjapan.com/article/14039">https://artnewsjapan.com/article/14039</a></li>
      <li><a class="ent" data-url="https://magazine.collet.am/98">https://magazine.collet.am/98</a></li>
      <li><a class="ent" data-url="https://en.thevalue.com/articles/sothebys-hong-kong-single-owner-sale-japanese-eggking-ise-collection-chinese-ceramics-2025-result">https://en.thevalue.com/articles/sothebys-hong-kong-single-owner-sale-japanese-eggking-ise-collection-chinese-ceramics-2025-result</a></li>
      <li><a class="ent" data-url="https://en.kogei-japonica.com/media/invest/crafts-market-2025/">https://en.kogei-japonica.com/media/invest/crafts-market-2025/</a></li>
      <li><a class="ent" data-url="https://www.mistore.jp/shopping/event/nihombashi_e/dentoukougei_50">https://www.mistore.jp/shopping/event/nihombashi_e/dentoukougei_50</a></li>
      <li><a class="ent" data-url="https://www.nihonkogeikai.or.jp/about/">https://www.nihonkogeikai.or.jp/about/</a></li>
      <li><a class="ent" data-url="https://www.bunka.go.jp/seisaku/bunkazai/shokai/mukei/">https://www.bunka.go.jp/seisaku/bunkazai/shokai/mukei/</a></li>
      <li><a class="ent" data-url="https://www.meti.go.jp/policy/mono_info_service/mono/nichiyo-densan/index.html">https://www.meti.go.jp/policy/mono_info_service/mono/nichiyo-densan/index.html</a></li>
      <li><a class="ent" data-url="https://www.jetro.go.jp/services/takumi_next/">https://www.jetro.go.jp/services/takumi_next/</a></li>
      <li><a class="ent" data-url="https://toobi-tocfa.or.jp/about/">https://toobi-tocfa.or.jp/about/</a></li>
      <li><a class="ent" data-url="https://www.caa.go.jp/policies/policy/representation/fair_labeling/representation_regulation/misleading_representation">https://www.caa.go.jp/policies/policy/representation/fair_labeling/representation_regulation/misleading_representation</a></li>
      <li><a class="ent" data-url="https://seto-tougeikyoukai.jp/">https://seto-tougeikyoukai.jp/</a></li>
      <li><a class="ent" data-url="https://www.mino-tougeikyoukai.org/">https://www.mino-tougeikyoukai.org/</a></li>
      <li><a class="ent" data-url="https://www.artagenda.jp/exhibition/detail/5891">https://www.artagenda.jp/exhibition/detail/5891</a></li>
      <li><a class="ent" data-url="https://japan.focustaiwan.tw/culture/202607020008">https://japan.focustaiwan.tw/culture/202607020008</a></li>
      <li><a class="ent" data-url="https://japan.focustaiwan.tw/culture/202607030002">https://japan.focustaiwan.tw/culture/202607030002</a></li>
      <li><a class="ent" data-url="https://bijutsu.press/books/5531/">https://bijutsu.press/books/5531/</a></li>
      <li><a class="ent" data-url="https://www.ntcri.gov.tw/">https://www.ntcri.gov.tw/</a></li>
      <li><a class="ent" data-url="https://www.frase.io/blog/what-is-generative-engine-optimization-geo">https://www.frase.io/blog/what-is-generative-engine-optimization-geo</a></li>
      <li><a class="ent" data-url="https://presenc.ai/research/state-of-llms-txt-2026">https://presenc.ai/research/state-of-llms-txt-2026</a></li>
      <li><a class="ent" data-url="https://www.digitalapplied.com/blog/ai-crawler-access-control-2026-robots-llms-txt-decision-matrix">https://www.digitalapplied.com/blog/ai-crawler-access-control-2026-robots-llms-txt-decision-matrix</a></li>
      <li><a class="ent" data-url="https://www.digitalapplied.com/blog/ai-share-of-voice-tracking-brand-citations-framework-2026">https://www.digitalapplied.com/blog/ai-share-of-voice-tracking-brand-citations-framework-2026</a></li>
      <li><a class="ent" data-url="https://siftly.ai/blog/tools-measure-citation-rates-ai-generated-content-brands-2026">https://siftly.ai/blog/tools-measure-citation-rates-ai-generated-content-brands-2026</a></li>
      <li><a class="ent" data-url="https://www.techtimes.com/articles/318359/20260614/generative-engine-optimization-geo-2026-how-get-your-content-cited-chatgpt-ai-overviews.htm">https://www.techtimes.com/articles/318359/20260614/generative-engine-optimization-geo-2026-how-get-your-content-cited-chatgpt-ai-overviews.htm</a></li>
      <li><a class="ent" data-url="https://wearejapan.com/articles/discover-six-new-generation-japanese-ceramic/">https://wearejapan.com/articles/discover-six-new-generation-japanese-ceramic/</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/Japanese_pottery_and_porcelain">https://en.wikipedia.org/wiki/Japanese_pottery_and_porcelain</a></li>
      <li><a class="ent" data-url="https://organikpi.com/blog/geo-ai-search/multilingual-geo-international-ai-search/">https://organikpi.com/blog/geo-ai-search/multilingual-geo-international-ai-search/</a></li>
      <li><a class="ent" data-url="https://medium.com/@aivsrank/how-ai-engines-cite-sources-patterns-across-chatgpt-claude-perplexity-and-sge-8c317777c71d">https://medium.com/@aivsrank/how-ai-engines-cite-sources-patterns-across-chatgpt-claude-perplexity-and-sge-8c317777c71d</a></li>
    </ol>
  </div>
  <div class="src-group">
    <h3>二、AI 評鑑與信任研究（Q1–Q6）（115 條）</h3>
    <ol>
      <li><a class="ent" data-url="https://www.thedrinksbusiness.com/2022/07/scientists-develop-new-wine-tasting-ai-technology/">https://www.thedrinksbusiness.com/2022/07/scientists-develop-new-wine-tasting-ai-technology/</a></li>
      <li><a class="ent" data-url="https://apps.apple.com/us/app/wine-a-bee-ai/id6746491087">https://apps.apple.com/us/app/wine-a-bee-ai/id6746491087</a></li>
      <li><a class="ent" data-url="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5241870">https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5241870</a></li>
      <li><a class="ent" data-url="https://www.internationalwinechallenge.com/Articles/sake-judging-and-awards.html">https://www.internationalwinechallenge.com/Articles/sake-judging-and-awards.html</a></li>
      <li><a class="ent" data-url="https://sakeinternational.org/international-wine-challenge-iwc-sake/">https://sakeinternational.org/international-wine-challenge-iwc-sake/</a></li>
      <li><a class="ent" data-url="https://www.truesake.com/blogs/may-2023/sake-judging-the-2023-international-wine-challenge">https://www.truesake.com/blogs/may-2023/sake-judging-the-2023-international-wine-challenge</a></li>
      <li><a class="ent" data-url="https://pubmed.ncbi.nlm.nih.gov/31961909/">https://pubmed.ncbi.nlm.nih.gov/31961909/</a></li>
      <li><a class="ent" data-url="https://onlinelibrary.wiley.com/doi/10.1155/2022/4566185">https://onlinelibrary.wiley.com/doi/10.1155/2022/4566185</a></li>
      <li><a class="ent" data-url="https://www.nature.com/articles/s41598-026-42766-8">https://www.nature.com/articles/s41598-026-42766-8</a></li>
      <li><a class="ent" data-url="https://arxiv.org/html/2602.00394">https://arxiv.org/html/2602.00394</a></li>
      <li><a class="ent" data-url="https://www.semanticscholar.org/paper/Taste-and-the-algorithm-Arielli/667cd0f5f9ba014d09219be9bee74240684956fe">https://www.semanticscholar.org/paper/Taste-and-the-algorithm-Arielli/667cd0f5f9ba014d09219be9bee74240684956fe</a></li>
      <li><a class="ent" data-url="https://www.michelin.com/media/magazine/explore-guide-michelin">https://www.michelin.com/media/magazine/explore-guide-michelin</a></li>
      <li><a class="ent" data-url="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4285645">https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4285645</a></li>
      <li><a class="ent" data-url="https://pmc.ncbi.nlm.nih.gov/articles/PMC10857587/">https://pmc.ncbi.nlm.nih.gov/articles/PMC10857587/</a></li>
      <li><a class="ent" data-url="https://aisel.aisnet.org/ecis2020_rp/63/">https://aisel.aisnet.org/ecis2020_rp/63/</a></li>
      <li><a class="ent" data-url="https://www.scribd.com/document/658530729/Robo-Advice-Report-2020-25012021">https://www.scribd.com/document/658530729/Robo-Advice-Report-2020-25012021</a></li>
      <li><a class="ent" data-url="https://www.jdsupra.com/legalnews/does-that-avatar-really-like-that-brand-98596/">https://www.jdsupra.com/legalnews/does-that-avatar-really-like-that-brand-98596/</a></li>
      <li><a class="ent" data-url="https://riuma.uma.es/xmlui/bitstream/handle/10630/24922/Virtual%20Influencers%20AIRSI%20fv%20-%20RIUMA.pdf?sequence=1">https://riuma.uma.es/xmlui/bitstream/handle/10630/24922/Virtual%20Influencers%20AIRSI%20fv%20-%20RIUMA.pdf?sequence=1</a></li>
      <li><a class="ent" data-url="https://www.sciencedirect.com/science/article/pii/S0001691825008868">https://www.sciencedirect.com/science/article/pii/S0001691825008868</a></li>
      <li><a class="ent" data-url="https://aisel.aisnet.org/ecis2020_rp/168/">https://aisel.aisnet.org/ecis2020_rp/168/</a></li>
      <li><a class="ent" data-url="https://diglib.uibk.ac.at/download/pdf/5099158.pdf">https://diglib.uibk.ac.at/download/pdf/5099158.pdf</a></li>
      <li><a class="ent" data-url="https://link.springer.com/article/10.1007/s13347-022-00511-9">https://link.springer.com/article/10.1007/s13347-022-00511-9</a></li>
      <li><a class="ent" data-url="https://eric.ed.gov/?id=ED615541">https://eric.ed.gov/?id=ED615541</a></li>
      <li><a class="ent" data-url="https://www.semanticscholar.org/paper/Why-trust-an-algorithm-Performance,-cognition,-and-Alexander-Blinder/4fe93cbebe700bc37b5ab31f977edf45884f00f7">https://www.semanticscholar.org/paper/Why-trust-an-algorithm-Performance,-cognition,-and-Alexander-Blinder/4fe93cbebe700bc37b5ab31f977edf45884f00f7</a></li>
      <li><a class="ent" data-url="https://dl.acm.org/doi/10.1016/j.chb.2018.07.026">https://dl.acm.org/doi/10.1016/j.chb.2018.07.026</a></li>
      <li><a class="ent" data-url="https://csroc.org.tw/journal/JOC36-3/JOC3603-22.pdf">https://csroc.org.tw/journal/JOC36-3/JOC3603-22.pdf</a></li>
      <li><a class="ent" data-url="https://blogs.law.ox.ac.uk/oblb/blog-post/2024/02/putting-human-loop-increasing-uptake-decreasing-accuracy-automated-decision">https://blogs.law.ox.ac.uk/oblb/blog-post/2024/02/putting-human-loop-increasing-uptake-decreasing-accuracy-automated-decision</a></li>
      <li><a class="ent" data-url="https://pmc.ncbi.nlm.nih.gov/articles/PMC11614927/">https://pmc.ncbi.nlm.nih.gov/articles/PMC11614927/</a></li>
      <li><a class="ent" data-url="https://www.southampton.ac.uk/~sem03/CACM-2022.pdf">https://www.southampton.ac.uk/~sem03/CACM-2022.pdf</a></li>
      <li><a class="ent" data-url="https://dl.acm.org/doi/10.1016/j.chb.2020.106572">https://dl.acm.org/doi/10.1016/j.chb.2020.106572</a></li>
      <li><a class="ent" data-url="https://nuvomagazine.com/magazine/spring-2022/100-point-wine-rating-system">https://nuvomagazine.com/magazine/spring-2022/100-point-wine-rating-system</a></li>
      <li><a class="ent" data-url="https://sommy.wine/blog/wine-scoring-100-point-scale/">https://sommy.wine/blog/wine-scoring-100-point-scale/</a></li>
      <li><a class="ent" data-url="https://grapecollective.com/articles/death-of-the-100-point-system">https://grapecollective.com/articles/death-of-the-100-point-system</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/Michelin_Guide">https://en.wikipedia.org/wiki/Michelin_Guide</a></li>
      <li><a class="ent" data-url="https://www.michelin.com/en/media/magazine/explore-guide-michelin">https://www.michelin.com/en/media/magazine/explore-guide-michelin</a></li>
      <li><a class="ent" data-url="https://guide.michelin.com/th/en/to-the-stars-and-beyond-th">https://guide.michelin.com/th/en/to-the-stars-and-beyond-th</a></li>
      <li><a class="ent" data-url="https://www.internationalwinechallenge.com/Articles/new-for-2023.html">https://www.internationalwinechallenge.com/Articles/new-for-2023.html</a></li>
      <li><a class="ent" data-url="https://kuramaster.com/ja/entry-requirements/regulation/">https://kuramaster.com/ja/entry-requirements/regulation/</a></li>
      <li><a class="ent" data-url="https://www.moodys.com/web/en/us/insights/methodologies-and-models.html">https://www.moodys.com/web/en/us/insights/methodologies-and-models.html</a></li>
      <li><a class="ent" data-url="https://dl.icdst.org/pdfs/files3/eb40b7c49c0d20a6cf48d9816de3bb22.pdf">https://dl.icdst.org/pdfs/files3/eb40b7c49c0d20a6cf48d9816de3bb22.pdf</a></li>
      <li><a class="ent" data-url="https://www.sec.gov/Archives/edgar/data/1650548/000165054819000001/SPGR_Ex2.Mar2019.pdf">https://www.sec.gov/Archives/edgar/data/1650548/000165054819000001/SPGR_Ex2.Mar2019.pdf</a></li>
      <li><a class="ent" data-url="https://ma.moodys.com/rs/961-KCJ-308/images/Rating%20Methodologies%20-%20General-Principles-for-Assessing-Environmental-Social-and-Governance-Ri...%20-%2028Jun21.pdf">https://ma.moodys.com/rs/961-KCJ-308/images/Rating%20Methodologies%20-%20General-Principles-for-Assessing-Environmental-Social-and-Governance-Ri...%20-%2028Jun21.pdf</a></li>
      <li><a class="ent" data-url="https://www.esma.europa.eu/sites/default/files/library/esma71-99-478_public_notice_moodys_germany_and_moodys_united_kingdom.pdf">https://www.esma.europa.eu/sites/default/files/library/esma71-99-478_public_notice_moodys_germany_and_moodys_united_kingdom.pdf</a></li>
      <li><a class="ent" data-url="https://artificialintelligenceact.eu/article/50/">https://artificialintelligenceact.eu/article/50/</a></li>
      <li><a class="ent" data-url="https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content">https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content</a></li>
      <li><a class="ent" data-url="https://digital-strategy.ec.europa.eu/en/faqs/signing-code-practice-transparency-ai-generated-content">https://digital-strategy.ec.europa.eu/en/faqs/signing-code-practice-transparency-ai-generated-content</a></li>
      <li><a class="ent" data-url="https://natlawreview.com/article/ai-generated-content-european-union-what-adherence-code-practice-means-article-50">https://natlawreview.com/article/ai-generated-content-european-union-what-adherence-code-practice-means-article-50</a></li>
      <li><a class="ent" data-url="https://www.twobirds.com/en/insights/2026/taking-the-eu-ai-act-to-practice-the-final-transparency-code-of-practice">https://www.twobirds.com/en/insights/2026/taking-the-eu-ai-act-to-practice-the-final-transparency-code-of-practice</a></li>
      <li><a class="ent" data-url="https://digital.nemko.com/regulations/ai-regulation-japan">https://digital.nemko.com/regulations/ai-regulation-japan</a></li>
      <li><a class="ent" data-url="https://www.gov-online.go.jp/hlj/en/november_2025/november_2025-08.html">https://www.gov-online.go.jp/hlj/en/november_2025/november_2025-08.html</a></li>
      <li><a class="ent" data-url="https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20240419_14.pdf">https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20240419_14.pdf</a></li>
      <li><a class="ent" data-url="https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20240419_15.pdf">https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20240419_15.pdf</a></li>
      <li><a class="ent" data-url="https://www.meti.go.jp/english/press/2024/0419_002.html">https://www.meti.go.jp/english/press/2024/0419_002.html</a></li>
      <li><a class="ent" data-url="https://www.detectdeepfakes.com/laws/jp">https://www.detectdeepfakes.com/laws/jp</a></li>
      <li><a class="ent" data-url="http://yoshizuka.com/index.php/2023/11/17/deciphering-the-pink-lady-case-a-landmark-ruling-on-publicity-rights-in-japan/">http://yoshizuka.com/index.php/2023/11/17/deciphering-the-pink-lady-case-a-landmark-ruling-on-publicity-rights-in-japan/</a></li>
      <li><a class="ent" data-url="https://www.nakapat.gr.jp/wp-content/uploads/2023/07/【英訳】20230718_Right-of-Publicity.pdf">https://www.nakapat.gr.jp/wp-content/uploads/2023/07/【英訳】20230718_Right-of-Publicity.pdf</a></li>
      <li><a class="ent" data-url="https://stli.iii.org.tw/en/article-detail.aspx?no=105&amp;tp=2&amp;i=168&amp;d=9199">https://stli.iii.org.tw/en/article-detail.aspx?no=105&amp;tp=2&amp;i=168&amp;d=9199</a></li>
      <li><a class="ent" data-url="https://law.nstc.gov.tw/EngLawContent.aspx?lan=E&amp;id=10099">https://law.nstc.gov.tw/EngLawContent.aspx?lan=E&amp;id=10099</a></li>
      <li><a class="ent" data-url="https://www.theleveragedyears.com/ai-regulation-news/taiwan-ai-content-labeling-i-am-ai-duty-2026">https://www.theleveragedyears.com/ai-regulation-news/taiwan-ai-content-labeling-i-am-ai-duty-2026</a></li>
      <li><a class="ent" data-url="https://www.npr.org/2023/11/28/1215693615/sports-illustrated-is-accused-of-posting-articles-by-writers-created-by-ai">https://www.npr.org/2023/11/28/1215693615/sports-illustrated-is-accused-of-posting-articles-by-writers-created-by-ai</a></li>
      <li><a class="ent" data-url="https://www.cnn.com/2023/11/27/media/sports-illustrated-deletes-articles-fake-author-names-ai-profile-photos">https://www.cnn.com/2023/11/27/media/sports-illustrated-deletes-articles-fake-author-names-ai-profile-photos</a></li>
      <li><a class="ent" data-url="https://www.businessinsider.com/sports-illustrated-ran-articles-by-fake-ai-generated-writers-report-2023-11">https://www.businessinsider.com/sports-illustrated-ran-articles-by-fake-ai-generated-writers-report-2023-11</a></li>
      <li><a class="ent" data-url="https://www.newsweek.com/sports-illustrated-union-responds-report-parent-company-used-ai-authors-1847372">https://www.newsweek.com/sports-illustrated-union-responds-report-parent-company-used-ai-authors-1847372</a></li>
      <li><a class="ent" data-url="https://www.youtube.com/watch?v=WSBQbFJ7SBA">https://www.youtube.com/watch?v=WSBQbFJ7SBA</a></li>
      <li><a class="ent" data-url="https://www.telegraph.co.uk/us/news/2023/12/12/sports-illustrated-ceo-fired-fake-authors-ai-articles/">https://www.telegraph.co.uk/us/news/2023/12/12/sports-illustrated-ceo-fired-fake-authors-ai-articles/</a></li>
      <li><a class="ent" data-url="https://vibegraveyard.ai/story/cnet-ai-articles-corrections/">https://vibegraveyard.ai/story/cnet-ai-articles-corrections/</a></li>
      <li><a class="ent" data-url="https://thedesk.net/2023/01/cnet-artificial-intelligence-ai-article-errors-futurism/">https://thedesk.net/2023/01/cnet-artificial-intelligence-ai-article-errors-futurism/</a></li>
      <li><a class="ent" data-url="https://www.wired.com/story/cnet-published-ai-generated-stories-then-its-staff-pushed-back/">https://www.wired.com/story/cnet-published-ai-generated-stories-then-its-staff-pushed-back/</a></li>
      <li><a class="ent" data-url="https://www.youtube.com/watch?v=M79aiiXwskg">https://www.youtube.com/watch?v=M79aiiXwskg</a></li>
      <li><a class="ent" data-url="https://www.theregister.com/2023/01/19/cnet_reviewing_ai_authored_stories/">https://www.theregister.com/2023/01/19/cnet_reviewing_ai_authored_stories/</a></li>
      <li><a class="ent" data-url="https://gigazine.net/gsc_news/en/20230123-cnet-pauses-ai-written-stories/">https://gigazine.net/gsc_news/en/20230123-cnet-pauses-ai-written-stories/</a></li>
      <li><a class="ent" data-url="https://fineartmultiple.com/blog/mark-rofko-jackson-pollok/">https://fineartmultiple.com/blog/mark-rofko-jackson-pollok/</a></li>
      <li><a class="ent" data-url="https://blog.sullivanlaw.com/artlawreport/knoedler-gallery-owners-may-be-liable-for-companys-acts-court-sets-case-for-july-trial">https://blog.sullivanlaw.com/artlawreport/knoedler-gallery-owners-may-be-liable-for-companys-acts-court-sets-case-for-july-trial</a></li>
      <li><a class="ent" data-url="https://www.dailymail.co.uk/news/article-9011295/New-documentary-Look-examines-60-fake-paintings-sold-80-million.html">https://www.dailymail.co.uk/news/article-9011295/New-documentary-Look-examines-60-fake-paintings-sold-80-million.html</a></li>
      <li><a class="ent" data-url="https://www.lemonde.fr/culture/article/2016/02/12/le-scandale-des-faux-tableaux-de-la-galerie-new-yorkaise-knoedler-co-se-regle-a-l-amiable_4864167_3246.html">https://www.lemonde.fr/culture/article/2016/02/12/le-scandale-des-faux-tableaux-de-la-galerie-new-yorkaise-knoedler-co-se-regle-a-l-amiable_4864167_3246.html</a></li>
      <li><a class="ent" data-url="https://de.wikipedia.org/wiki/M_Knoedler_&amp;_Co">https://de.wikipedia.org/wiki/M_Knoedler_&amp;_Co</a></li>
      <li><a class="ent" data-url="https://www.youtube.com/watch?v=mK96IvR6L3E">https://www.youtube.com/watch?v=mK96IvR6L3E</a></li>
      <li><a class="ent" data-url="https://news.artnet.com/art-world/old-masters-forgery-scandal-facts-702065">https://news.artnet.com/art-world/old-masters-forgery-scandal-facts-702065</a></li>
      <li><a class="ent" data-url="https://news.artnet.com/art-world/sothebys-sues-weiss-hals-849560">https://news.artnet.com/art-world/sothebys-sues-weiss-hals-849560</a></li>
      <li><a class="ent" data-url="https://news.artnet.com/art-world/old-master-fakes-scandal-heating-up-683267">https://news.artnet.com/art-world/old-master-fakes-scandal-heating-up-683267</a></li>
      <li><a class="ent" data-url="https://www.vanityfair.com/culture/2012/10/wolfgang-beltracchi-helene-art-scam">https://www.vanityfair.com/culture/2012/10/wolfgang-beltracchi-helene-art-scam</a></li>
      <li><a class="ent" data-url="https://comparativeai.org/topics/content-labeling-provenance/eu/">https://comparativeai.org/topics/content-labeling-provenance/eu/</a></li>
      <li><a class="ent" data-url="http://www.cad.zju.edu.cn/home/jhyu/Papers/Inkthetics.pdf">http://www.cad.zju.edu.cn/home/jhyu/Papers/Inkthetics.pdf</a></li>
      <li><a class="ent" data-url="https://openaccess.thecvf.com/content/CVPR2023/papers/Yi_Towards_Artistic_Image_Aesthetics_Assessment_A_Large-Scale_Dataset_and_a_CVPR_2023_paper.pdf">https://openaccess.thecvf.com/content/CVPR2023/papers/Yi_Towards_Artistic_Image_Aesthetics_Assessment_A_Large-Scale_Dataset_and_a_CVPR_2023_paper.pdf</a></li>
      <li><a class="ent" data-url="https://dl.acm.org/doi/10.1145/2464576.2483912">https://dl.acm.org/doi/10.1145/2464576.2483912</a></li>
      <li><a class="ent" data-url="https://arxiv.org/html/2405.02982v1">https://arxiv.org/html/2405.02982v1</a></li>
      <li><a class="ent" data-url="https://arxiv.org/pdf/1804.10982v1.pdf">https://arxiv.org/pdf/1804.10982v1.pdf</a></li>
      <li><a class="ent" data-url="https://publications.aston.ac.uk/id/eprint/46692/1/EASTON_EDWARD_WILLIAM_2023_redacted.pdf">https://publications.aston.ac.uk/id/eprint/46692/1/EASTON_EDWARD_WILLIAM_2023_redacted.pdf</a></li>
      <li><a class="ent" data-url="https://www.ostfalia.de/fileadmin/user_upload/Fakultaeten/w/Dateien/WolfsburgWorkingPaper/2022/fakw_WWP22-02_Impact-of-the-Decoy-Effect-on-Algorithm-Aversion.pdf">https://www.ostfalia.de/fileadmin/user_upload/Fakultaeten/w/Dateien/WolfsburgWorkingPaper/2022/fakw_WWP22-02_Impact-of-the-Decoy-Effect-on-Algorithm-Aversion.pdf</a></li>
      <li><a class="ent" data-url="https://www.internationalwinechallenge.com/competition/sake">https://www.internationalwinechallenge.com/competition/sake</a></li>
      <li><a class="ent" data-url="https://www.internationalwinechallenge.com/about-the-sake-competition.html?lang=ja">https://www.internationalwinechallenge.com/about-the-sake-competition.html?lang=ja</a></li>
      <li><a class="ent" data-url="https://www.courts.go.jp/ip/eng/assets/ip/eng/chizai_en/chizai_en-pdf-889.pdf">https://www.courts.go.jp/ip/eng/assets/ip/eng/chizai_en/chizai_en-pdf-889.pdf</a></li>
      <li><a class="ent" data-url="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3158004">https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3158004</a></li>
      <li><a class="ent" data-url="https://cclr.cba.org/index.php/cclr/article/download/749/739/751">https://cclr.cba.org/index.php/cclr/article/download/749/739/751</a></li>
      <li><a class="ent" data-url="https://news.rice.edu/news/2026/ai-crashed-paris-wine-tasting-and-was-point">https://news.rice.edu/news/2026/ai-crashed-paris-wine-tasting-and-was-point</a></li>
      <li><a class="ent" data-url="https://jier.org/index.php/journal/article/download/3610/2873/6389">https://jier.org/index.php/journal/article/download/3610/2873/6389</a></li>
      <li><a class="ent" data-url="https://guide.michelin.com/my/en/faq-frequently-asked-questions-my">https://guide.michelin.com/my/en/faq-frequently-asked-questions-my</a></li>
      <li><a class="ent" data-url="https://www.ecija.com/adcecija/en/transparencia-na-ia-comissao-europeia-publica-codigo-de-pratica-para-conteudos-gerados-por-ia/">https://www.ecija.com/adcecija/en/transparencia-na-ia-comissao-europeia-publica-codigo-de-pratica-para-conteudos-gerados-por-ia/</a></li>
      <li><a class="ent" data-url="https://www.moodys.com/sites/products/ProductAttachments/Exhibit2.pdf">https://www.moodys.com/sites/products/ProductAttachments/Exhibit2.pdf</a></li>
      <li><a class="ent" data-url="https://ccianet.org/wp-content/uploads/2025/12/Transparency-Obligations-for-All-AI-Systems-Article-50-of-the-AI-Act-Written-by-Dr.-Joan-Barata-Mir.pdf">https://ccianet.org/wp-content/uploads/2025/12/Transparency-Obligations-for-All-AI-Systems-Article-50-of-the-AI-Act-Written-by-Dr.-Joan-Barata-Mir.pdf</a></li>
      <li><a class="ent" data-url="https://cicl.stanford.edu/papers/vodrahalli2022humans.pdf">https://cicl.stanford.edu/papers/vodrahalli2022humans.pdf</a></li>
      <li><a class="ent" data-url="https://www.tandfonline.com/doi/full/10.1080/0144929X.2025.2535732">https://www.tandfonline.com/doi/full/10.1080/0144929X.2025.2535732</a></li>
      <li><a class="ent" data-url="https://www.sciencedirect.com/science/article/abs/pii/S0747563220303204">https://www.sciencedirect.com/science/article/abs/pii/S0747563220303204</a></li>
      <li><a class="ent" data-url="http://arno.uvt.nl/show.cgi?fid=154703">http://arno.uvt.nl/show.cgi?fid=154703</a></li>
      <li><a class="ent" data-url="https://www.art-critique.com/en/2020/01/the-long-game-how-wolfgang-beltracchi-conned-the-art-world/">https://www.art-critique.com/en/2020/01/the-long-game-how-wolfgang-beltracchi-conned-the-art-world/</a></li>
      <li><a class="ent" data-url="https://www.youtube.com/watch?v=f7vRXypvKWw">https://www.youtube.com/watch?v=f7vRXypvKWw</a></li>
      <li><a class="ent" data-url="https://listique.com/magazine/new-york-art-scandal">https://listique.com/magazine/new-york-art-scandal</a></li>
      <li><a class="ent" data-url="https://prtimes.jp/main/html/rd/p/000000023.000035460.html">https://prtimes.jp/main/html/rd/p/000000023.000035460.html</a></li>
      <li><a class="ent" data-url="https://en.sakeworld.jp/special/202506-kuramaster-nft/">https://en.sakeworld.jp/special/202506-kuramaster-nft/</a></li>
      <li><a class="ent" data-url="https://prtimes.jp/main/html/rd/p/000000018.000035460.html">https://prtimes.jp/main/html/rd/p/000000018.000035460.html</a></li>
      <li><a class="ent" data-url="https://prtimes.jp/main/html/rd/p/000000010.000035460.html">https://prtimes.jp/main/html/rd/p/000000010.000035460.html</a></li>
      <li><a class="ent" data-url="https://ratings.moodys.com/api/rmc-documents/361103">https://ratings.moodys.com/api/rmc-documents/361103</a></li>
      <li><a class="ent" data-url="https://ec.europa.eu/economy_finance/events/2015/20151202-workshop/documents/david_gillmor_en.pdf">https://ec.europa.eu/economy_finance/events/2015/20151202-workshop/documents/david_gillmor_en.pdf</a></li>
      <li><a class="ent" data-url="https://www.sec.gov/Archives/edgar/data/1650548/000165054824000007/SPGR_Ex5.Dec2024.pdf">https://www.sec.gov/Archives/edgar/data/1650548/000165054824000007/SPGR_Ex5.Dec2024.pdf</a></li>
      <li><a class="ent" data-url="https://kuramaster.com/ja/liqueur/entry-requirements/regulation/">https://kuramaster.com/ja/liqueur/entry-requirements/regulation/</a></li>
    </ol>
  </div>
  <div class="src-group">
    <h3>三、信任攻擊 Exploit 目錄（105 條）</h3>
    <ol>
      <li><a class="ent" data-url="https://www.mz.de/leben/reisen/the-shed-at-dulwich-das-beste-restaurant-londons-bei-tripadvisor-gibt-es-gar-nicht-1386935">https://www.mz.de/leben/reisen/the-shed-at-dulwich-das-beste-restaurant-londons-bei-tripadvisor-gibt-es-gar-nicht-1386935</a></li>
      <li><a class="ent" data-url="https://www.business-standard.com/article/beyond-business/london-s-top-rated-eatery-the-shed-at-dulwich-turns-out-to-be-a-fake-117120701345_1.html">https://www.business-standard.com/article/beyond-business/london-s-top-rated-eatery-the-shed-at-dulwich-turns-out-to-be-a-fake-117120701345_1.html</a></li>
      <li><a class="ent" data-url="https://www.thesun.co.uk/news/5084218/hoaxer-gets-his-shed-to-the-top-of-tripadvisors-london-restaurant-rankings/">https://www.thesun.co.uk/news/5084218/hoaxer-gets-his-shed-to-the-top-of-tripadvisors-london-restaurant-rankings/</a></li>
      <li><a class="ent" data-url="https://theconversation.com/believe-nothing-the-hoax-of-the-shed-at-dulwich-91211">https://theconversation.com/believe-nothing-the-hoax-of-the-shed-at-dulwich-91211</a></li>
      <li><a class="ent" data-url="https://www.aboutamazon.com/news/policy-news-views/amazon-continues-to-take-action-against-fake-review-brokers">https://www.aboutamazon.com/news/policy-news-views/amazon-continues-to-take-action-against-fake-review-brokers</a></li>
      <li><a class="ent" data-url="https://www.aboutamazon.com/news/policy-news-views/amazons-latest-actions-against-fake-review-brokers-2023">https://www.aboutamazon.com/news/policy-news-views/amazons-latest-actions-against-fake-review-brokers-2023</a></li>
      <li><a class="ent" data-url="https://www.bbc.com/news/technology-32251698">https://www.bbc.com/news/technology-32251698</a></li>
      <li><a class="ent" data-url="https://cdn.ca9.uscourts.gov/datastore/opinions/2014/09/02/11-17676.pdf">https://cdn.ca9.uscourts.gov/datastore/opinions/2014/09/02/11-17676.pdf</a></li>
      <li><a class="ent" data-url="https://www.latimes.com/business/la-fi-yelp-ratings-20140905-story.html">https://www.latimes.com/business/la-fi-yelp-ratings-20140905-story.html</a></li>
      <li><a class="ent" data-url="https://martech.org/california-extortion-class-action-yelp-dismissed/">https://martech.org/california-extortion-class-action-yelp-dismissed/</a></li>
      <li><a class="ent" data-url="https://www.cbsnews.com/news/yelp-accused-of-pressure-tactics/">https://www.cbsnews.com/news/yelp-accused-of-pressure-tactics/</a></li>
      <li><a class="ent" data-url="https://abcnews.go.com/Technology/TheLaw/yelp-faces-extortion-claim-class-action-suit/story?id=9944826">https://abcnews.go.com/Technology/TheLaw/yelp-faces-extortion-claim-class-action-suit/story?id=9944826</a></li>
      <li><a class="ent" data-url="https://ca.finance.yahoo.com/news/yelp-accused-bullying-businesses-paying-100000488.html">https://ca.finance.yahoo.com/news/yelp-accused-bullying-businesses-paying-100000488.html</a></li>
      <li><a class="ent" data-url="https://searchengineland.com/class-action-lawsuit-filed-against-yelp-alleging-extortion-36817">https://searchengineland.com/class-action-lawsuit-filed-against-yelp-alleging-extortion-36817</a></li>
      <li><a class="ent" data-url="https://wineeconomist.com/2008/09/04/the-wine-spectator-award-hoax/">https://wineeconomist.com/2008/09/04/the-wine-spectator-award-hoax/</a></li>
      <li><a class="ent" data-url="https://hoaxes.org/archive/permalink/wine_spectator_hoaxed">https://hoaxes.org/archive/permalink/wine_spectator_hoaxed</a></li>
      <li><a class="ent" data-url="https://www.julienmarchand.com/2008/08/21/wine-spectator-award-of-excellence-peut-on-sy-fier/">https://www.julienmarchand.com/2008/08/21/wine-spectator-award-of-excellence-peut-on-sy-fier/</a></li>
      <li><a class="ent" data-url="https://www.youtube.com/watch?v=drQaCFjF6oM">https://www.youtube.com/watch?v=drQaCFjF6oM</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/Robin_Goldstein">https://en.wikipedia.org/wiki/Robin_Goldstein</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/wine/comments/qx0bzl/wine_spectator_top_100_i_wish_someone_would/">https://www.reddit.com/r/wine/comments/qx0bzl/wine_spectator_top_100_i_wish_someone_would/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/finedining/comments/1d4uy8l/how_is_the_50_best_list_organized/">https://www.reddit.com/r/finedining/comments/1d4uy8l/how_is_the_50_best_list_organized/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/finedining/comments/uipxpt/worlds_50_best_or_michelin_guide_which_do_you/">https://www.reddit.com/r/finedining/comments/uipxpt/worlds_50_best_or_michelin_guide_which_do_you/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/finedining/comments/17cnx1v/opinions_on_worlds_50_best_mine_its_bettermore/">https://www.reddit.com/r/finedining/comments/17cnx1v/opinions_on_worlds_50_best_mine_its_bettermore/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/Chefit/comments/8avvif/world_50_best_vs_michelin_stars/">https://www.reddit.com/r/Chefit/comments/8avvif/world_50_best_vs_michelin_stars/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/finedining/comments/1lfkepo/worlds_50_best/">https://www.reddit.com/r/finedining/comments/1lfkepo/worlds_50_best/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/finedining/comments/1d901oy/worlds_50_best/">https://www.reddit.com/r/finedining/comments/1d901oy/worlds_50_best/</a></li>
      <li><a class="ent" data-url="https://distantreader.org/tmp/carrels-ojs/cblr/cache/cblr-2946.pdf">https://distantreader.org/tmp/carrels-ojs/cblr/cache/cblr-2946.pdf</a></li>
      <li><a class="ent" data-url="https://trace.tennessee.edu/cgi/viewcontent.cgi?article=2994&amp;context=utk_chanhonoproj">https://trace.tennessee.edu/cgi/viewcontent.cgi?article=2994&amp;context=utk_chanhonoproj</a></li>
      <li><a class="ent" data-url="https://www.ecgi.global/sites/default/files/working_papers/documents/SSRN-id1650802.pdf">https://www.ecgi.global/sites/default/files/working_papers/documents/SSRN-id1650802.pdf</a></li>
      <li><a class="ent" data-url="https://www.journalchc.com/2021/06/30/fake-no-fortune/">https://www.journalchc.com/2021/06/30/fake-no-fortune/</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/Knoedler">https://en.wikipedia.org/wiki/Knoedler</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/todayilearned/comments/ujfro9/til_about_knoedler_an_art_dealership_in_ny_that/">https://www.reddit.com/r/todayilearned/comments/ujfro9/til_about_knoedler_an_art_dealership_in_ny_that/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/artcollecting/comments/1mzte45/how_do_you_think_the_165yearold_knoedler_gallery/">https://www.reddit.com/r/artcollecting/comments/1mzte45/how_do_you_think_the_165yearold_knoedler_gallery/</a></li>
      <li><a class="ent" data-url="https://www.courts.go.jp/assets/hanrei/hanrei-pdf-80233.pdf">https://www.courts.go.jp/assets/hanrei/hanrei-pdf-80233.pdf</a></li>
      <li><a class="ent" data-url="https://jucc.sakura.ne.jp/precedent/precedent-2014-05-30.html">https://jucc.sakura.ne.jp/precedent/precedent-2014-05-30.html</a></li>
      <li><a class="ent" data-url="https://www.courts.go.jp/assets/hanrei/hanrei-pdf-80755.pdf">https://www.courts.go.jp/assets/hanrei/hanrei-pdf-80755.pdf</a></li>
      <li><a class="ent" data-url="https://www.theguardian.com/artanddesign/2017/nov/20/artistic-license-experts-doubt-leonardo-da-vinci-painted-450m-salvator-mundi">https://www.theguardian.com/artanddesign/2017/nov/20/artistic-license-experts-doubt-leonardo-da-vinci-painted-450m-salvator-mundi</a></li>
      <li><a class="ent" data-url="https://www.britannica.com/story/why-is-the-salvator-mundi-called-the-worlds-most-controversial-painting">https://www.britannica.com/story/why-is-the-salvator-mundi-called-the-worlds-most-controversial-painting</a></li>
      <li><a class="ent" data-url="https://www.theguardian.com/artanddesign/2018/aug/06/leonardo-da-vinci-scholar-challenges-attribution-salvator-mundi-bernardino-luini">https://www.theguardian.com/artanddesign/2018/aug/06/leonardo-da-vinci-scholar-challenges-attribution-salvator-mundi-bernardino-luini</a></li>
      <li><a class="ent" data-url="https://www.smithsonianmag.com/smart-news/oxford-scholar-challenges-salvator-mundi-attribution-arguing-leonardos-assistant-painted-majority-work-180969948/">https://www.smithsonianmag.com/smart-news/oxford-scholar-challenges-salvator-mundi-attribution-arguing-leonardos-assistant-painted-majority-work-180969948/</a></li>
      <li><a class="ent" data-url="https://news.artnet.com/market/leonardo-da-vinci-christies-salvator-mundi-experts-1149203">https://news.artnet.com/market/leonardo-da-vinci-christies-salvator-mundi-experts-1149203</a></li>
      <li><a class="ent" data-url="https://blog.oup.com/2022/12/leonardo-and-the-salvator-mundi-fame-and-infamy/">https://blog.oup.com/2022/12/leonardo-and-the-salvator-mundi-fame-and-infamy/</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/Salvator_Mundi_(painting)">https://en.wikipedia.org/wiki/Salvator_Mundi_(painting)</a></li>
      <li><a class="ent" data-url="https://www.bbc.com/news/technology-34127466">https://www.bbc.com/news/technology-34127466</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/List_of_Wikipedia_controversies">https://en.wikipedia.org/wiki/List_of_Wikipedia_controversies</a></li>
      <li><a class="ent" data-url="https://www.independent.co.uk/tech/wikipedia-names-texas-pr-firm-over-false-manipulation-of-site-entries-8952624.html">https://www.independent.co.uk/tech/wikipedia-names-texas-pr-firm-over-false-manipulation-of-site-entries-8952624.html</a></li>
      <li><a class="ent" data-url="https://www.theguardian.com/technology/2026/jan/16/pr-firm-portland-accused-of-commissioning-favourable-changes-to-wikipedia-pages">https://www.theguardian.com/technology/2026/jan/16/pr-firm-portland-accused-of-commissioning-favourable-changes-to-wikipedia-pages</a></li>
      <li><a class="ent" data-url="https://blog.google/company-news/inside-google/company-announcements/defending-search-users-from-parasite-seo-spam/">https://blog.google/company-news/inside-google/company-announcements/defending-search-users-from-parasite-seo-spam/</a></li>
      <li><a class="ent" data-url="https://www.serp-consultancy.com/blog/googles-2025-spam-update-what-every-webmaster-needs-to-know/">https://www.serp-consultancy.com/blog/googles-2025-spam-update-what-every-webmaster-needs-to-know/</a></li>
      <li><a class="ent" data-url="https://webwallah.in/google-2025-spam-update-seo-impact/">https://webwallah.in/google-2025-spam-update-seo-impact/</a></li>
      <li><a class="ent" data-url="https://www.mailmodo.com/guides/parasite-seo/">https://www.mailmodo.com/guides/parasite-seo/</a></li>
      <li><a class="ent" data-url="https://www.sterlingsky.ca/august-2025-spam-algorithm-update/">https://www.sterlingsky.ca/august-2025-spam-algorithm-update/</a></li>
      <li><a class="ent" data-url="https://developers.google.com/search/docs/essentials/spam-policies">https://developers.google.com/search/docs/essentials/spam-policies</a></li>
      <li><a class="ent" data-url="https://www.nytimes.com/2003/08/10/world/accusations-rise-from-wine-cellars-of-bordeaux.html">https://www.nytimes.com/2003/08/10/world/accusations-rise-from-wine-cellars-of-bordeaux.html</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/Parkerization_of_wine">https://en.wikipedia.org/wiki/Parkerization_of_wine</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/wine/comments/1gg5ujv/decanter_or_wine_spectator/">https://www.reddit.com/r/wine/comments/1gg5ujv/decanter_or_wine_spectator/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/wine/comments/16jfe4i/wine_enthusiast_or_wine_spectator/">https://www.reddit.com/r/wine/comments/16jfe4i/wine_enthusiast_or_wine_spectator/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/wine/comments/kgx2l1/professional_ratings/">https://www.reddit.com/r/wine/comments/kgx2l1/professional_ratings/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/wine/comments/1dsxg78/which_wine_reviewers_do_you_trust_most/">https://www.reddit.com/r/wine/comments/1dsxg78/which_wine_reviewers_do_you_trust_most/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/bourbon/comments/63p833/opinions_on_distillercom/">https://www.reddit.com/r/bourbon/comments/63p833/opinions_on_distillercom/</a></li>
      <li><a class="ent" data-url="https://www.nytimes.com/2009/09/17/business/media/17adco.html">https://www.nytimes.com/2009/09/17/business/media/17adco.html</a></li>
      <li><a class="ent" data-url="https://www.forbes.com/sites/karlaalindahao/2019/10/23/the-secret-life-of-an-anonymous-michelin-restaurant-inspector-2019/">https://www.forbes.com/sites/karlaalindahao/2019/10/23/the-secret-life-of-an-anonymous-michelin-restaurant-inspector-2019/</a></li>
      <li><a class="ent" data-url="https://guide.michelin.com/th/en/michelin-guide-inspectors">https://guide.michelin.com/th/en/michelin-guide-inspectors</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/whiskey/comments/16wiiho/unpopular_online_whiskey_reviewers_are_a_joke/">https://www.reddit.com/r/whiskey/comments/16wiiho/unpopular_online_whiskey_reviewers_are_a_joke/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/Watches/comments/1i9o7iy/most_trustworthy_reviews_who_is_the_most_trusted/">https://www.reddit.com/r/Watches/comments/1i9o7iy/most_trustworthy_reviews_who_is_the_most_trusted/</a></li>
      <li><a class="ent" data-url="https://www.consumerreports.org/about-us/policies-and-financials/no-commercial-use-policy/">https://www.consumerreports.org/about-us/policies-and-financials/no-commercial-use-policy/</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/Consumer_Reports">https://en.wikipedia.org/wiki/Consumer_Reports</a></li>
      <li><a class="ent" data-url="https://minneapolimedia.town.news/g/coon-rapids-mn/n/352013/consumer-reports-trusted-independent-resource-smarter-buying-decisions">https://minneapolimedia.town.news/g/coon-rapids-mn/n/352013/consumer-reports-trusted-independent-resource-smarter-buying-decisions</a></li>
      <li><a class="ent" data-url="https://www.sec.gov/newsroom/press-releases/2020-112">https://www.sec.gov/newsroom/press-releases/2020-112</a></li>
      <li><a class="ent" data-url="https://s21.q4cdn.com/198919461/files/doc_downloads/2023/11/Investment-Research-Integrity-Policy-Equity-Research.pdf">https://s21.q4cdn.com/198919461/files/doc_downloads/2023/11/Investment-Research-Integrity-Policy-Equity-Research.pdf</a></li>
      <li><a class="ent" data-url="https://www.wsj.com/articles/sec-order-finds-morningstar-mixed-analytical-functions-with-sales-and-marketing-11589558426">https://www.wsj.com/articles/sec-order-finds-morningstar-mixed-analytical-functions-with-sales-and-marketing-11589558426</a></li>
      <li><a class="ent" data-url="https://www.nytimes.com/wirecutter/reviews/how-wirecutter-makes-money/">https://www.nytimes.com/wirecutter/reviews/how-wirecutter-makes-money/</a></li>
      <li><a class="ent" data-url="https://www.youtube.com/watch?v=PeuVjPA9wBQ">https://www.youtube.com/watch?v=PeuVjPA9wBQ</a></li>
      <li><a class="ent" data-url="https://www.cjr.org/business_of_news/consumer-reports-wirecutter.php">https://www.cjr.org/business_of_news/consumer-reports-wirecutter.php</a></li>
      <li><a class="ent" data-url="https://www.vox.com/2015/1/21/7537153/consumer-reports">https://www.vox.com/2015/1/21/7537153/consumer-reports</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/Michelin_Guide">https://en.wikipedia.org/wiki/Michelin_Guide</a></li>
      <li><a class="ent" data-url="https://www.grubstreet.com/2008/08/fake_restaurant_wins_wine_spec.html">https://www.grubstreet.com/2008/08/fake_restaurant_wins_wine_spec.html</a></li>
      <li><a class="ent" data-url="https://laradunston.com/2008/08/wine-spectator-award-fraud/">https://laradunston.com/2008/08/wine-spectator-award-fraud/</a></li>
      <li><a class="ent" data-url="https://www.independent.co.uk/life-style/food-and-drink/the-shed-at-dulwich-was-london-s-toprated-restaurant-just-one-problem-it-didn-t-exist-a8107791.html">https://www.independent.co.uk/life-style/food-and-drink/the-shed-at-dulwich-was-london-s-toprated-restaurant-just-one-problem-it-didn-t-exist-a8107791.html</a></li>
      <li><a class="ent" data-url="https://nowiknow.com/the-winning-wine-list-that-wasnt/">https://nowiknow.com/the-winning-wine-list-that-wasnt/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/ArtHistory/comments/z08tkt/does_the_knoedler_gallery_scandal_expose_rothko/">https://www.reddit.com/r/ArtHistory/comments/z08tkt/does_the_knoedler_gallery_scandal_expose_rothko/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/wine/comments/1apdlh3/question_regarding_ratings_wine_spectator_etc/">https://www.reddit.com/r/wine/comments/1apdlh3/question_regarding_ratings_wine_spectator_etc/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/wine/comments/1irwxvf/yes_they_make_great_wine_yes_its_pay_to_play_but/">https://www.reddit.com/r/wine/comments/1irwxvf/yes_they_make_great_wine_yes_its_pay_to_play_but/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/wine/comments/ku4yr/wine_ratings_preferences/">https://www.reddit.com/r/wine/comments/ku4yr/wine_ratings_preferences/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/ArtHistory/rising/">https://www.reddit.com/r/ArtHistory/rising/</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/ArtHistory/hot/">https://www.reddit.com/r/ArtHistory/hot/</a></li>
      <li><a class="ent" data-url="https://www.reviewjournal.com/life/review-site-yelp-battles-extortion-claims/">https://www.reviewjournal.com/life/review-site-yelp-battles-extortion-claims/</a></li>
      <li><a class="ent" data-url="https://news.bloomberglaw.com/tech-and-telecom-law/extortion-claims-over-manipulation-of-user-reviews-by-yelp-dismissed">https://news.bloomberglaw.com/tech-and-telecom-law/extortion-claims-over-manipulation-of-user-reviews-by-yelp-dismissed</a></li>
      <li><a class="ent" data-url="https://www.academia.edu/42636495/_It_is_not_the_Salvator_Mundi_A_questionable_attribution_to_Leonardo_da_Vinci">https://www.academia.edu/42636495/_It_is_not_the_Salvator_Mundi_A_questionable_attribution_to_Leonardo_da_Vinci</a></li>
      <li><a class="ent" data-url="https://www.frieze.com/article/christies-rejects-oxford-scholars-claim-450m-salvator-mundi-painted-leonardos-assistant">https://www.frieze.com/article/christies-rejects-oxford-scholars-claim-450m-salvator-mundi-painted-leonardos-assistant</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/AskCulinary/comments/1726f2c/michelín/">https://www.reddit.com/r/AskCulinary/comments/1726f2c/michelín/</a></li>
      <li><a class="ent" data-url="https://dl.acm.org/doi/pdf/10.1145/3640794.3665582">https://dl.acm.org/doi/pdf/10.1145/3640794.3665582</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/finedining/comments/1l3yi37/worlds_50_best_51100_list_just_released/">https://www.reddit.com/r/finedining/comments/1l3yi37/worlds_50_best_51100_list_just_released/</a></li>
      <li><a class="ent" data-url="http://www.arxiv.org/abs/2502.06802">http://www.arxiv.org/abs/2502.06802</a></li>
      <li><a class="ent" data-url="https://ai-alert.org/posts/prompt-injection-wild-2025/">https://ai-alert.org/posts/prompt-injection-wild-2025/</a></li>
      <li><a class="ent" data-url="https://www.semanticscholar.org/paper/Large-Language-Models-and-Games:-A-Survey-and-Gallotta-Todd/5a9ce2055a0f200fd53b7eeddf1c05f9e01ccf5a">https://www.semanticscholar.org/paper/Large-Language-Models-and-Games:-A-Survey-and-Gallotta-Todd/5a9ce2055a0f200fd53b7eeddf1c05f9e01ccf5a</a></li>
      <li><a class="ent" data-url="https://arxiv.org/abs/2604.27202">https://arxiv.org/abs/2604.27202</a></li>
      <li><a class="ent" data-url="https://www.reddit.com/r/finedining/comments/144a98a/worlds_50_best_2023_51100_announced/">https://www.reddit.com/r/finedining/comments/144a98a/worlds_50_best_2023_51100_announced/</a></li>
      <li><a class="ent" data-url="https://arxiv.org/html/2604.27202v1">https://arxiv.org/html/2604.27202v1</a></li>
      <li><a class="ent" data-url="https://www.youtube.com/watch?v=8ihKeH3OFEQ">https://www.youtube.com/watch?v=8ihKeH3OFEQ</a></li>
      <li><a class="ent" data-url="https://www.seo-kreativ.de/en/blog/alternative-traffic-parasite-seo-communities/">https://www.seo-kreativ.de/en/blog/alternative-traffic-parasite-seo-communities/</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_Signpost/2024-12-12/Disinformation_report">https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_Signpost/2024-12-12/Disinformation_report</a></li>
      <li><a class="ent" data-url="https://www.iloveseo.net/how-ai-broke-search-trust-and-what-google-is-doing-about-it-maybe/">https://www.iloveseo.net/how-ai-broke-search-trust-and-what-google-is-doing-about-it-maybe/</a></li>
      <li><a class="ent" data-url="https://www.judiciary.uk/wp-content/uploads/2025/08/Wikimedia-Foundation-and-another-v-Secretary-of-State-for-Science-Innovation-and-Technology.pdf">https://www.judiciary.uk/wp-content/uploads/2025/08/Wikimedia-Foundation-and-another-v-Secretary-of-State-for-Science-Innovation-and-Technology.pdf</a></li>
      <li><a class="ent" data-url="https://www.sec.gov/Archives/edgar/data/1650793/000141057816000871/a16-15190_1ex99de5.pdf">https://www.sec.gov/Archives/edgar/data/1650793/000141057816000871/a16-15190_1ex99de5.pdf</a></li>
    </ol>
  </div>
  <div class="src-group">
    <h3>四、定價權威 Bootstrap 前例研究（111 條）</h3>
    <ol>
      <li><a class="ent" data-url="https://www.kbb.com/company/history/">https://www.kbb.com/company/history/</a></li>
      <li><a class="ent" data-url="https://www.jdpower.com/hagerty-car-values-and-ratings">https://www.jdpower.com/hagerty-car-values-and-ratings</a></li>
      <li><a class="ent" data-url="https://www.zillow.com/zestimate/">https://www.zillow.com/zestimate/</a></li>
      <li><a class="ent" data-url="https://aws.amazon.com/ru/solutions/case-studies/zillow-zestimate/">https://aws.amazon.com/ru/solutions/case-studies/zillow-zestimate/</a></li>
      <li><a class="ent" data-url="https://www.zillow.com/news/how-zillow-spent-20-years-teaching-ai-to-understand-home-value/">https://www.zillow.com/news/how-zillow-spent-20-years-teaching-ai-to-understand-home-value/</a></li>
      <li><a class="ent" data-url="https://www.businessinsider.com/what-is-a-zestimate-zillow-home-value-algorithm-history-accuracy-2021-11">https://www.businessinsider.com/what-is-a-zestimate-zillow-home-value-algorithm-history-accuracy-2021-11</a></li>
      <li><a class="ent" data-url="https://www.hagerty.com/media/market-trends/valuation/how-much-is-your-classic-car-worth/">https://www.hagerty.com/media/market-trends/valuation/how-much-is-your-classic-car-worth/</a></li>
      <li><a class="ent" data-url="https://www.hagerty.com/valuation-toolsAbout">https://www.hagerty.com/valuation-toolsAbout</a></li>
      <li><a class="ent" data-url="https://www.hagertyagent.com/resources/hagerty-insights/vehicle-valuation">https://www.hagertyagent.com/resources/hagerty-insights/vehicle-valuation</a></li>
      <li><a class="ent" data-url="https://newsroom.hagerty.com/press/hagerty-automotive-intelligence-refreshes-valuation-website-predicts-211-million-in-upcoming-classic-car-auction-sales/">https://newsroom.hagerty.com/press/hagerty-automotive-intelligence-refreshes-valuation-website-predicts-211-million-in-upcoming-classic-car-auction-sales/</a></li>
      <li><a class="ent" data-url="https://watchcharts.com/watches/about">https://watchcharts.com/watches/about</a></li>
      <li><a class="ent" data-url="https://www.wine-searcher.com/wine-searcher">https://www.wine-searcher.com/wine-searcher</a></li>
      <li><a class="ent" data-url="https://en.wikipedia.org/wiki/Wine-Searcher">https://en.wikipedia.org/wiki/Wine-Searcher</a></li>
      <li><a class="ent" data-url="https://support.discogs.com/hc/en-us/articles/360007425553-Where-Can-I-Access-Sales-History">https://support.discogs.com/hc/en-us/articles/360007425553-Where-Can-I-Access-Sales-History</a></li>
      <li><a class="ent" data-url="https://www.psacard.com/priceguide">https://www.psacard.com/priceguide</a></li>
      <li><a class="ent" data-url="https://www.psacard.com/auctionprices">https://www.psacard.com/auctionprices</a></li>
      <li><a class="ent" data-url="https://waxpackgods.com/psa-price-guide/">https://waxpackgods.com/psa-price-guide/</a></li>
      <li><a class="ent" data-url="https://www.beckett.com/news/breaking-online-price-guide-plus-released/">https://www.beckett.com/news/breaking-online-price-guide-plus-released/</a></li>
      <li><a class="ent" data-url="https://stockx.com/help/articles/what-are-stockxs-fees-for-sellers">https://stockx.com/help/articles/what-are-stockxs-fees-for-sellers</a></li>
      <li><a class="ent" data-url="https://stockx.com/help/en-GB/articles/what-are-stockxs-fees-for-sellers">https://stockx.com/help/en-GB/articles/what-are-stockxs-fees-for-sellers</a></li>
      <li><a class="ent" data-url="https://www.underpriced.app/blog/stockx-seller-fees-2026">https://www.underpriced.app/blog/stockx-seller-fees-2026</a></li>
      <li><a class="ent" data-url="https://www.myartbroker.com/art-and-tech/articles/decoding-art-indices-mab100-and-traditional-resources">https://www.myartbroker.com/art-and-tech/articles/decoding-art-indices-mab100-and-traditional-resources</a></li>
      <li><a class="ent" data-url="https://www.myartbroker.com/art-and-tech/articles/mab100-art-index-against-conventional-assets">https://www.myartbroker.com/art-and-tech/articles/mab100-art-index-against-conventional-assets</a></li>
      <li><a class="ent" data-url="https://www.myartbroker.com/art-and-tech/articles/everything-we-built-machine-learning-ai-report">https://www.myartbroker.com/art-and-tech/articles/everything-we-built-machine-learning-ai-report</a></li>
      <li><a class="ent" data-url="https://imgpublic.artprice.com/img/wp/sites/11/2023/06/FactSheet_2023_EN.pdf">https://imgpublic.artprice.com/img/wp/sites/11/2023/06/FactSheet_2023_EN.pdf</a></li>
      <li><a class="ent" data-url="https://www.artprice.com/home">https://www.artprice.com/home</a></li>
      <li><a class="ent" data-url="https://sia.libguides.com/pricedatabases/artprice">https://sia.libguides.com/pricedatabases/artprice</a></li>
      <li><a class="ent" data-url="https://craft.co/artprice">https://craft.co/artprice</a></li>
      <li><a class="ent" data-url="https://www.actusnews.com/en/artmarket/pr/2024/04/30/artmarket_com-rapport-financier-annuel-artprice-2023-hausses-du-ca-du-resultat-net-et-des-capitaux-propres">https://www.actusnews.com/en/artmarket/pr/2024/04/30/artmarket_com-rapport-financier-annuel-artprice-2023-hausses-du-ca-du-resultat-net-et-des-capitaux-propres</a></li>
      <li><a class="ent" data-url="https://www.artprice.com/">https://www.artprice.com/</a></li>
      <li><a class="ent" data-url="https://www.artnet.com/price-database/">https://www.artnet.com/price-database/</a></li>
      <li><a class="ent" data-url="https://stockanalysis.com/quote/fra/ART/financials/metrics/">https://stockanalysis.com/quote/fra/ART/financials/metrics/</a></li>
      <li><a class="ent" data-url="https://stockanalysis.com/quote/fra/ART/financials/">https://stockanalysis.com/quote/fra/ART/financials/</a></li>
      <li><a class="ent" data-url="https://de.marketscreener.com/kurs/aktie/ARTNET-AG-9069063/news/Jahresbericht-2023-der-Artnet-AG-Stabile-Performance-trotz-schwierigem-Marktumfeld-47780782/">https://de.marketscreener.com/kurs/aktie/ARTNET-AG-9069063/news/Jahresbericht-2023-der-Artnet-AG-Stabile-Performance-trotz-schwierigem-Marktumfeld-47780782/</a></li>
      <li><a class="ent" data-url="https://www.appraisers.org/docs/default-source/benefit-partner/artnet_pdb_exclusive-offers_wip_10_16_25.pdf?sfvrsn=363f6524_1">https://www.appraisers.org/docs/default-source/benefit-partner/artnet_pdb_exclusive-offers_wip_10_16_25.pdf?sfvrsn=363f6524_1</a></li>
      <li><a class="ent" data-url="https://insights.masterworks.com/art/auctions/art-indices-why-they-matter/">https://insights.masterworks.com/art/auctions/art-indices-why-they-matter/</a></li>
      <li><a class="ent" data-url="https://www.nytimes.com/wirecutter/blog/hello/">https://www.nytimes.com/wirecutter/blog/hello/</a></li>
      <li><a class="ent" data-url="https://www.hawaii.edu/news/2022/05/13/gizmodo-wirecutter-founder-speaks-at-uh/">https://www.hawaii.edu/news/2022/05/13/gizmodo-wirecutter-founder-speaks-at-uh/</a></li>
      <li><a class="ent" data-url="https://startupfounderstories.com/es/stories/wirecutter-brian-lam">https://startupfounderstories.com/es/stories/wirecutter-brian-lam</a></li>
      <li><a class="ent" data-url="https://theseohustler.com/blog/healthline-seo-deep-dive">https://theseohustler.com/blog/healthline-seo-deep-dive</a></li>
      <li><a class="ent" data-url="https://ahrefs.com/blog/healthline-seo-case-study/">https://ahrefs.com/blog/healthline-seo-case-study/</a></li>
      <li><a class="ent" data-url="https://gracker.ai/case-studies/nerdwallet">https://gracker.ai/case-studies/nerdwallet</a></li>
      <li><a class="ent" data-url="https://www.forbes.com/sites/natalierobehmed/2013/09/06/why-artsy-is-succeeding-in-putting-the-art-world-online/">https://www.forbes.com/sites/natalierobehmed/2013/09/06/why-artsy-is-succeeding-in-putting-the-art-world-online/</a></li>
      <li><a class="ent" data-url="http://www.e-yakimono.net/html/about-us.html">http://www.e-yakimono.net/html/about-us.html</a></li>
      <li><a class="ent" data-url="https://growganic.io/geo">https://growganic.io/geo</a></li>
      <li><a class="ent" data-url="https://www.agentpatterns.ai/geo/topical-authority/">https://www.agentpatterns.ai/geo/topical-authority/</a></li>
      <li><a class="ent" data-url="https://slatehq.com/blog/ai-seo-statistics">https://slatehq.com/blog/ai-seo-statistics</a></li>
      <li><a class="ent" data-url="https://indexcraft.in/blog/topical-authority-guide-2026">https://indexcraft.in/blog/topical-authority-guide-2026</a></li>
      <li><a class="ent" data-url="https://www.sbiartauction.co.jp/en/news/article/212">https://www.sbiartauction.co.jp/en/news/article/212</a></li>
      <li><a class="ent" data-url="https://econique.art/en/sbi-art-auction-celebrates-the-success-of-the-77th-modern-legacy-auction/">https://econique.art/en/sbi-art-auction-celebrates-the-success-of-the-77th-modern-legacy-auction/</a></li>
      <li><a class="ent" data-url="https://www.sbiartauction.co.jp/en/news/article/217">https://www.sbiartauction.co.jp/en/news/article/217</a></li>
      <li><a class="ent" data-url="https://www.cric.or.jp/english/clj/cl2.html">https://www.cric.or.jp/english/clj/cl2.html</a></li>
      <li><a class="ent" data-url="https://www.cric.or.jp/english/csj/csj4.html">https://www.cric.or.jp/english/csj/csj4.html</a></li>
      <li><a class="ent" data-url="https://www.perplexity.ai/search/cdad9bc7-d180-4cde-b4bb-e2b02271bdb6">https://www.perplexity.ai/search/cdad9bc7-d180-4cde-b4bb-e2b02271bdb6</a></li>
      <li><a class="ent" data-url="https://www.bonhams.com/legals/9944/">https://www.bonhams.com/legals/9944/</a></li>
      <li><a class="ent" data-url="https://www.artforum.com/news/artprice-files-complaint-against-christies-193635/">https://www.artforum.com/news/artprice-files-complaint-against-christies-193635/</a></li>
      <li><a class="ent" data-url="https://www.nbcdfw.com/news/local/auction-houses-face-off-in-website-data-scraping-lawsuit/2033762/">https://www.nbcdfw.com/news/local/auction-houses-face-off-in-website-data-scraping-lawsuit/2033762/</a></li>
      <li><a class="ent" data-url="https://www.sciencedirect.com/science/article/abs/pii/S1574067606010271">https://www.sciencedirect.com/science/article/abs/pii/S1574067606010271</a></li>
      <li><a class="ent" data-url="https://www.myartbroker.com/fr/art-and-tech/articles/decoder-indices-art-mab100-et-ressources-traditionnelles">https://www.myartbroker.com/fr/art-and-tech/articles/decoder-indices-art-mab100-et-ressources-traditionnelles</a></li>
      <li><a class="ent" data-url="https://www.hagerty.co.uk/valuation/">https://www.hagerty.co.uk/valuation/</a></li>
      <li><a class="ent" data-url="https://www.hagerty.com/valuation-tools/classic-car-buyer">https://www.hagerty.com/valuation-tools/classic-car-buyer</a></li>
      <li><a class="ent" data-url="https://www.kbb.com/car-values/">https://www.kbb.com/car-values/</a></li>
      <li><a class="ent" data-url="https://www.myartbroker.com/art-and-tech/articles/everything-we-built-2023-tech-report">https://www.myartbroker.com/art-and-tech/articles/everything-we-built-2023-tech-report</a></li>
      <li><a class="ent" data-url="https://www.hagerty.co.uk/valuation/tool/">https://www.hagerty.co.uk/valuation/tool/</a></li>
      <li><a class="ent" data-url="https://sridhar-ai.ch/case-studies/zillow-zestimate">https://sridhar-ai.ch/case-studies/zillow-zestimate</a></li>
      <li><a class="ent" data-url="https://www.zillow.com/research/methodology-neural-zhvi-32128/">https://www.zillow.com/research/methodology-neural-zhvi-32128/</a></li>
      <li><a class="ent" data-url="https://businessmodelcanvastemplate.com/blogs/how-it-works/stockx-how-it-works">https://businessmodelcanvastemplate.com/blogs/how-it-works/stockx-how-it-works</a></li>
      <li><a class="ent" data-url="https://www.youtube.com/watch?v=cCz8VyWWrgQ">https://www.youtube.com/watch?v=cCz8VyWWrgQ</a></li>
      <li><a class="ent" data-url="https://www.psacard.com/articles/articleview/9416/massive-database-auction-results-unlocked-free-collectors">https://www.psacard.com/articles/articleview/9416/massive-database-auction-results-unlocked-free-collectors</a></li>
      <li><a class="ent" data-url="https://www.psacard.com/auctionprices/search">https://www.psacard.com/auctionprices/search</a></li>
      <li><a class="ent" data-url="https://echanges.dila.gouv.fr/OPENDATA/AMF/ACT/2023/09/FCACT066130_20230919.pdf">https://echanges.dila.gouv.fr/OPENDATA/AMF/ACT/2023/09/FCACT066130_20230919.pdf</a></li>
      <li><a class="ent" data-url="https://live.euronext.com/sites/default/files/company_press_releases/attachments/2023/09/19/cpr05_actus_81806_FR0000074783.pdf">https://live.euronext.com/sites/default/files/company_press_releases/attachments/2023/09/19/cpr05_actus_81806_FR0000074783.pdf</a></li>
      <li><a class="ent" data-url="https://www.discogs.com/selling/resources/how-to-price-items/">https://www.discogs.com/selling/resources/how-to-price-items/</a></li>
      <li><a class="ent" data-url="https://www.zillow.com/news/how-zillow-validates-public-record-addresses/">https://www.zillow.com/news/how-zillow-validates-public-record-addresses/</a></li>
      <li><a class="ent" data-url="https://www.slideshare.net/IBMIndiaSS/imc14660-usen">https://www.slideshare.net/IBMIndiaSS/imc14660-usen</a></li>
      <li><a class="ent" data-url="https://www.reddoormetro.com/how-accurate-is-zillows-zestimate-what-you-really-need-to-know/">https://www.reddoormetro.com/how-accurate-is-zillows-zestimate-what-you-really-need-to-know/</a></li>
      <li><a class="ent" data-url="https://www.zillowgroup.com/news/in-case-you-missed-it/">https://www.zillowgroup.com/news/in-case-you-missed-it/</a></li>
      <li><a class="ent" data-url="https://www.eqs-news.com/news/corporate/artnet-ag-annual-report-2023-steady-performance-amid-challenging-market-conditions/53844e40-8e38-4bd4-a901-b44618e4f8a2">https://www.eqs-news.com/news/corporate/artnet-ag-annual-report-2023-steady-performance-amid-challenging-market-conditions/53844e40-8e38-4bd4-a901-b44618e4f8a2</a></li>
      <li><a class="ent" data-url="https://www.actusnews.com/en/artmarket/pr/2023/02/09/artmarket_com-reports-q4-2022-revenue-growth-and-a-new-business-model-generating-additional-income-from-affiliate-advertisers">https://www.actusnews.com/en/artmarket/pr/2023/02/09/artmarket_com-reports-q4-2022-revenue-growth-and-a-new-business-model-generating-additional-income-from-affiliate-advertisers</a></li>
      <li><a class="ent" data-url="https://www.actusnews.com/news/82761-artmarket-com-q3-2023-turnover-growth-up-75-percent-after-2-years-of-optimizing-its-artprice-by-artmarket-online-databases.pdf">https://www.actusnews.com/news/82761-artmarket-com-q3-2023-turnover-growth-up-75-percent-after-2-years-of-optimizing-its-artprice-by-artmarket-online-databases.pdf</a></li>
      <li><a class="ent" data-url="https://www.prnewswire.com/ae/news-releases/artprice-by-artmarketcom-28th-annual-report--the-art-market-in-2023-a-new-record-number-of-artworks-sold-at-auction-biggest-national-marketplace-the-usa-female-artists-showed-spectacular-growth-302083003.html">https://www.prnewswire.com/ae/news-releases/artprice-by-artmarketcom-28th-annual-report--the-art-market-in-2023-a-new-record-number-of-artworks-sold-at-auction-biggest-national-marketplace-the-usa-female-artists-showed-spectacular-growth-302083003.html</a></li>
      <li><a class="ent" data-url="https://www.owler.com/company/artprice">https://www.owler.com/company/artprice</a></li>
      <li><a class="ent" data-url="https://imgpublic.artprice.com/img/wp/sites/11/2023/06/FactSheet_2023_DE.pdf">https://imgpublic.artprice.com/img/wp/sites/11/2023/06/FactSheet_2023_DE.pdf</a></li>
      <li><a class="ent" data-url="https://capston.ai/geo-scientific-research-2026/">https://capston.ai/geo-scientific-research-2026/</a></li>
      <li><a class="ent" data-url="https://geo-score.online/learn/topical-authority">https://geo-score.online/learn/topical-authority</a></li>
      <li><a class="ent" data-url="https://geo-score.online/en-sg/learn/comprehensiveness">https://geo-score.online/en-sg/learn/comprehensiveness</a></li>
      <li><a class="ent" data-url="https://whitebunnie.com/blog/geo-benchmark-report-ai-citations/">https://whitebunnie.com/blog/geo-benchmark-report-ai-citations/</a></li>
      <li><a class="ent" data-url="https://geo-score.online/de/learn/topical-authority">https://geo-score.online/de/learn/topical-authority</a></li>
      <li><a class="ent" data-url="https://sunilpratapsingh.com/guides/geo/internal-linking-for-geo">https://sunilpratapsingh.com/guides/geo/internal-linking-for-geo</a></li>
      <li><a class="ent" data-url="https://sunilpratapsingh.com/intelligence/relevance/format/topical-authority-and-content-clusters">https://sunilpratapsingh.com/intelligence/relevance/format/topical-authority-and-content-clusters</a></li>
      <li><a class="ent" data-url="https://datacatalyst.org/wp-content/uploads/2023/09/Discover-Buy-and-Sell-Fine-Art-QA-with-Artsys-VP-of-Collector-Sales-Jessica-Backus.pdf">https://datacatalyst.org/wp-content/uploads/2023/09/Discover-Buy-and-Sell-Fine-Art-QA-with-Artsys-VP-of-Collector-Sales-Jessica-Backus.pdf</a></li>
      <li><a class="ent" data-url="https://seenos.ai/geo-lens-page-types/pillar-page-geo">https://seenos.ai/geo-lens-page-types/pillar-page-geo</a></li>
      <li><a class="ent" data-url="https://www.sbiartauction.co.jp/en/news/">https://www.sbiartauction.co.jp/en/news/</a></li>
      <li><a class="ent" data-url="https://www.mentionlayer.com/blog/topical-authority-complete-guide">https://www.mentionlayer.com/blog/topical-authority-complete-guide</a></li>
      <li><a class="ent" data-url="https://www.chaitanyaprabuddha.com/blog/topical-authority-ai-search-era">https://www.chaitanyaprabuddha.com/blog/topical-authority-ai-search-era</a></li>
      <li><a class="ent" data-url="https://www.pravinkumar.co/blog/topical-authority-vs-keywords-seo-ai-2026">https://www.pravinkumar.co/blog/topical-authority-vs-keywords-seo-ai-2026</a></li>
      <li><a class="ent" data-url="https://www.jstage.jst.go.jp/article/johokanri/44/5/44_5_322/_pdf">https://www.jstage.jst.go.jp/article/johokanri/44/5/44_5_322/_pdf</a></li>
      <li><a class="ent" data-url="https://www.sbiartauction.co.jp/pdf/en/terms/terms_of_use-en.pdf">https://www.sbiartauction.co.jp/pdf/en/terms/terms_of_use-en.pdf</a></li>
      <li><a class="ent" data-url="https://www.bonhams.com/legals/">https://www.bonhams.com/legals/</a></li>
      <li><a class="ent" data-url="https://www.econstor.eu/bitstream/10419/159332/1/wp0491.pdf">https://www.econstor.eu/bitstream/10419/159332/1/wp0491.pdf</a></li>
      <li><a class="ent" data-url="https://www.sbiartauction.co.jp/pdf/en/privacy-policy/privacy-policy-en.pdf">https://www.sbiartauction.co.jp/pdf/en/privacy-policy/privacy-policy-en.pdf</a></li>
      <li><a class="ent" data-url="https://www.emams.uzh.ch/dam/jcr:ffffffff-adae-ea3a-0000-0000723349e7/Res_Urech_Art_Pricing_Model.pdf">https://www.emams.uzh.ch/dam/jcr:ffffffff-adae-ea3a-0000-0000723349e7/Res_Urech_Art_Pricing_Model.pdf</a></li>
      <li><a class="ent" data-url="https://dipot.ulb.ac.be/dspace/bitstream/2013/3303/1/vg-0175.pdf">https://dipot.ulb.ac.be/dspace/bitstream/2013/3303/1/vg-0175.pdf</a></li>
      <li><a class="ent" data-url="https://www.liveauctioneers.com/catalog/388009_jewels/">https://www.liveauctioneers.com/catalog/388009_jewels/</a></li>
      <li><a class="ent" data-url="https://data.epo.org/publication-server/rest/v1.0/publication-dates/20110810/patents/EP2355035NWA1/document.pdf">https://data.epo.org/publication-server/rest/v1.0/publication-dates/20110810/patents/EP2355035NWA1/document.pdf</a></li>
      <li><a class="ent" data-url="https://plottdata.com/blogs/stockx-fees-explained">https://plottdata.com/blogs/stockx-fees-explained</a></li>
      <li><a class="ent" data-url="https://www.artnet.com/investor-relations/annual-reports/240831_artnet_AnnualReport_EN.pdf">https://www.artnet.com/investor-relations/annual-reports/240831_artnet_AnnualReport_EN.pdf</a></li>
      <li><a class="ent" data-url="https://www.sendpayback.com/profits/blog/stockx-seller-fees-2026">https://www.sendpayback.com/profits/blog/stockx-seller-fees-2026</a></li>
      <li><a class="ent" data-url="https://ircenter.handelsblatt.com/download/companies/artnet/Annual%20Reports/DE000A1K0375-JA-2023-EQ-D-00.pdf">https://ircenter.handelsblatt.com/download/companies/artnet/Annual%20Reports/DE000A1K0375-JA-2023-EQ-D-00.pdf</a></li>
      <li><a class="ent" data-url="https://www.marketscreener.com/quote/stock/ARTNET-AG-9069063/news/Artnet-AG-Reports-Earnings-Results-for-the-Full-Year-Ended-December-31-2023-47781140/">https://www.marketscreener.com/quote/stock/ARTNET-AG-9069063/news/Artnet-AG-Reports-Earnings-Results-for-the-Full-Year-Ended-December-31-2023-47781140/</a></li>
      <li><a class="ent" data-url="https://www.beckett.com/online-price-guide">https://www.beckett.com/online-price-guide</a></li>
    </ol>
  </div>
</section>

<footer class="colophon">
  <p>日本藝術平台研究發現 · 互動式 Digest · 2026 年 7 月編製。本文整合四份研究素材：市場真空與競品掃描、AI 評鑑信任研究（Q1–Q6）、信任攻擊 Exploit 目錄、定價權威 Bootstrap 前例研究。文中「未查證」標注均照原研究保留；凡未標注來源之推論，請以文末原始 URL 交叉驗證。</p>
</footer>

</div><!-- /wrap -->

<!-- ================= modal ================= -->
<div class="modal-backdrop" id="modalBackdrop" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-label="網站預覽視窗">
    <div class="modal-bar">
      <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="url-box"><input id="modalUrl" type="text" readonly value="" aria-label="網址"></span>
      <button class="mbtn" id="btnCopy" type="button">複製網址</button>
      <a class="mbtn" id="btnOpen" href="#" target="_blank" rel="noopener noreferrer">開新分頁 ↗</a>
      <button class="mbtn close" id="btnClose" type="button" aria-label="關閉">✕</button>
    </div>
    <div class="modal-stage">
      <div class="stage-hint">多數網站不允許被內嵌預覽——若下方空白或出現錯誤頁，請改用上方「複製網址」或「開新分頁 ↗」。</div>
      <div class="stage-inner">
        <div class="iframe-fallback">
          <span class="glyph">◫</span>
          <span>此網站不允許內嵌預覽——<br>用上方按鈕複製網址，或開新分頁前往。</span>
        </div>
        <iframe id="modalFrame" title="網站預覽" sandbox="allow-scripts allow-same-origin" referrerpolicy="no-referrer"></iframe>
        <div class="link-card" id="linkCard">
          <div class="lc-host" id="lcHost"></div>
          <div class="lc-title" id="lcTitle"></div>
          <div class="lc-desc" id="lcDesc"></div>
          <div class="lc-note">外部網站基於安全政策無法在此內嵌顯示。上方「複製網址」可分享，「開新分頁 ↗」直達原文。</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script id="linkCards" type="application/json">{"https://guide.michelin.com/th/en/to-the-stars-and-beyond-th":{"t":"米其林指南官方頁：星級評鑑五大標準","d":"官方頁面說明米其林星級由來，公開食材、技術、和諧、主廚個性、一致性五項評鑑標準，是理解評鑑邏輯的第一手依據。"},"https://news.artnet.com/market/beowolff-capital-artnet-takeover-2649474":{"t":"Artnet News報導：英資收購Artnet下市","d":"英國投資公司Beowolff Capital於2025年5月以約6,500–7,370萬美元將Artnet私有化下市，藝術市場入口網站易主。"},"https://www.theartnewspaper.com/2025/05/27/european-american-investment-company-to-buy-artnet-and-take-it-private":{"t":"The Art Newspaper報導：Artnet收購下市案","d":"The Art Newspaper對歐美投資公司收購Artnet並將其私有化下市一事的報導，與Artnet News報導同一收購案。"},"https://www.theartnewspaper.com/2026/04/23/comment-|-how-viable-is-the-artnet-and-artsys-merger":{"t":"TAN評論：Artnet與Artsy合併可行性分析","d":"2026年4月評論文章分析Artnet與Artsy合併案是否可行，願景是打造「藝術界的彭博社」，整合達1,800萬筆拍賣紀錄的資料庫。"},"https://hyperallergic.com/art-movements-dozens-laid-off-at-artnet-and-artsy/":{"t":"Hyperallergic報導：Artnet Artsy合併後裁員","d":"報導Artnet與Artsy合併後兩公司裁員數十人、關閉柏林辦公室，並指出2025上半年營收較去年同期下滑12%。"},"https://www.prnewswire.com/news-releases/artmarketcom-double-digit-growth-in-q2-2025...302522441.html":{"t":"Artmarket.com官方新聞稿：2025年Q2營收成長","d":"Artmarket.com（Artprice）官方新聞稿宣布2025年第二季營收呈雙位數成長；此網址為原始資料的節錄版本。"},"https://www.prnewswire.com/news-releases/artmarketcom-publishes-its-32nd-artprice-annual-report...302708675.html":{"t":"Artprice第32屆年度報告新聞稿","d":"Artprice第32屆年報新聞稿，宣布與Perplexity AI合作推出混合訂閱，並稱2025年全球藝術市場成長12%，口徑異於Art Basel/UBS報告；此為節錄版網址。"},"https://docs.liveart.xyz/liveart/whitepaper/data-oracles-powering-a-transparent-rwa-market-on-liveart":{"t":"LiveArt白皮書：Data Oracles與RWA藝術市場","d":"LiveArt官方白皮書說明Data Oracles如何支撐實體資產代幣化（RWA）藝術市場敘事，其$ART代幣已於2025年9月上線。"},"https://www.myartbroker.com/mab-100":{"t":"MyArtBroker官方頁：MAB100版畫市場指數","d":"MyArtBroker官方介紹MAB100指數，此指數聚焦版畫市場，作為觀察版畫類別價格走勢的專門指標。"},"https://www.wallstreetzen.com/blog/masterworks-review/":{"t":"WallStreetZen評測：Masterworks平台介紹","d":"評測藝術品證券化平台Masterworks：Reg A+單件作品證券化、累計投資資本逾10億美元，收費1.5%管理費加20%分潤，次級市場需90天鎖倉。"},"https://prtimes.jp/main/html/rd/p/000000478.000008833.html":{"t":"PR TIMES新聞稿：日本兩大拍賣行合併","d":"PR TIMES新聞稿公告2025年4月Mainichi Auction與SBI Art Auction合併成立SBI Mainichi Art Holdings，為日本兩大拍賣行整合案。"},"https://help.aucfan.com/hc/ja/articles/54235003362841":{"t":"aucfan說明頁：二手行情資料庫開通ChatGPT API","d":"aucfan官方說明文件介紹其作為日本最大二手行情資料庫開通ChatGPT API的功能；aucfan僅為比價工具，並無評論評級層級。"},"https://news.artnet.com/market/japan-art-market-is-bigger-than-it-seems-report-2587823":{"t":"Artnet News：日本藝術市場比看起來更大","d":"Artnet News解讀報告指出，2024年日本藝術市場規模約6.92億美元、年增2%，對比全球市場同期下滑12%，凸顯日本市場的相對韌性。"},"https://www.theartnewspaper.com/2025/01/07/japans-art-market-grew-11-since-the-pandemic-new-report-finds":{"t":"The Art Newspaper：日本市場疫後成長11%","d":"The Art Newspaper報導新研究發現，日本藝術市場2019至2023年累計成長11%，同期全球市場僅成長約1%，顯示日本表現優於全球。"},"https://news.artnet.com/market/art-week-tokyo-2024-2565916":{"t":"Artnet News報導：Art Week Tokyo 2024","d":"Artnet News報導2024年Art Week Tokyo活動，指出日圓貶值帶動外國藏家大舉湧入東京參與藝術週活動與購藏。"},"https://www.artbasel.com/stories/japan-young-artists-collectors":{"t":"Art Basel專題：日本年輕藝術家與新世代藏家","d":"Art Basel專題報導聚焦日本年輕藝術家與新世代藏家的崛起，指出年輕藏家開始購入國際藝術家作品，顯示收藏品味的世代轉變。"},"https://artnewsjapan.com/article/14039":{"t":"ARTnews JAPAN：草間彌生拍賣紀錄報導","d":"ARTnews JAPAN報導草間彌生作品拍賣紀錄，指出其於香港拍場單件成交價達約8億日圓等級，凸顯國際拍場對其作品的高度追捧。"},"https://magazine.collet.am/98":{"t":"Collet雜誌：日本國內拍場行情整理","d":"Collet雜誌整理日本國內拍場行情，指出草間彌生作品在日本國內市場的拍賣紀錄約為1億日圓，與海外拍場價格落差明顯。"},"https://www.mistore.jp/shopping/event/nihombashi_e/dentoukougei_50":{"t":"三越百貨官方頁：日本伝統工芸展活動","d":"三越百貨官方活動頁介紹於日本橋三越本店舉辦的日本伝統工芸展，展示其展覽、驗證、銷售三合一的傳統工藝推廣體系。"},"https://www.artagenda.jp/exhibition/detail/5891":{"t":"Art Agenda展覽頁：台日陶藝文化交流特展","d":"Art Agenda介紹岐阜県現代陶芸美術館與鶯歌陶瓷博物館的文化交流，記錄2021年「台湾現代陶芸の力」特展內容。"},"https://www.meti.go.jp/policy/mono_info_service/mono/nichiyo-densan/index.html":{"t":"経済産業省官方：伝統的工芸品指定制度","d":"経済産業省官方頁面說明伝統的工芸品指定制度與標章規範，此制度僅限日本國內具百年歷史的產地申請認定。"},"https://www.bunka.go.jp/seisaku/bunkazai/shokai/mukei/":{"t":"文化庁官方：重要無形文化財認定制度","d":"文化庁官方頁面說明重要無形文化財（人間國寶）的行政認定制度，此認定制度並不對外國個人開放申請。"},"https://www.caa.go.jp/policies/policy/representation/fair_labeling/representation_regulation/misleading_representation":{"t":"消費者庁官方：優良誤認表示規範說明","d":"消費者庁官方頁面說明景品表示法中的「優良誤認表示」規範，明定將商品或服務誇大成比實際更好即構成違法。"},"https://kuramaster.com/ja/entry-requirements/regulation/":{"t":"Kura Master官方規則頁：日本酒評選制度","d":"Kura Master官方規則頁公開由法國人主辦的日本酒評選類別與實施規則，證明外國評審團評鑑日本傳統產業可被市場接受。"},"https://www.internationalwinechallenge.com/Articles/sake-judging-and-awards.html":{"t":"IWC國際葡萄酒挑戰賽清酒評審制度說明","d":"官方說明清酒部門採兩輪盲評，至少12名評審與共同主席複審，並設金銀銅獎與Trophy制度，可作為評審流程權威依據。"},"https://toobi-tocfa.or.jp/about/":{"t":"東美鑑定評価機構官方信任機制說明","d":"官方說明信任基礎來自公開委員會組成與定期外部審查，而非單張證書本身，可作為鑑定機構公信力評估參考。"},"https://www.nihonkogeikai.or.jp/about/":{"t":"日本工芸会正會員資格制度官方說明","d":"官方說明正會員資格門檻，須入選日本伝統工芸展達4次以上等條件，可作為理解工藝家會員制度與資歷認定的依據。"},"https://www.ntcri.gov.tw/":{"t":"國立臺灣工藝研究發展中心官方網站","d":"台灣工藝領域的官方對口機構網站，提供工藝政策、輔導與資源資訊，是了解台灣工藝官方立場與資源的入口。"},"https://bijutsu.press/books/5531/":{"t":"美術手帖2025年1月號現代陶芸特輯書誌頁","d":"日本美術手帖2025年1月號的書誌頁，主題為「現代の陶芸」特輯，可作為查找該期陶藝專題內容與出版資訊的來源。"},"https://en.wikipedia.org/wiki/Japanese_pottery_and_porcelain":{"t":"維基百科日本陶瓷與瓷器條目頁面","d":"英文維基百科關於日本陶瓷的條目，內容涵蓋歷史與工藝概況，是目前AI回答日本陶藝相關問題時常被引用的主要來源之一。"},"https://wearejapan.com/articles/discover-six-new-generation-japanese-ceramic/":{"t":"We Are Japan新世代陶藝家專題報導","d":"介紹六位新世代日本陶藝家的觀光媒體專題文章，是目前這類媒體內容佔據AI引用位置、而非產業權威來源的實例。"},"https://www.frase.io/blog/what-is-generative-engine-optimization-geo":{"t":"Frase部落格GEO生成式引擎優化入門","d":"Frase部落格介紹GEO（生成式引擎優化）概念與方法論，說明如何讓內容更容易被AI生成式引擎引用，適合作為入門參考。"},"https://presenc.ai/research/state-of-llms-txt-2026":{"t":"Presenc研究llms.txt採用現況報告","d":"Presenc研究指出llms.txt採用率約10-15%，Anthropic與Perplexity已支持、Google未支持，效果適度但可測量。"},"https://siftly.ai/blog/tools-measure-citation-rates-ai-generated-content-brands-2026":{"t":"Siftly品牌AI引用率追蹤工具比較","d":"Siftly比較品牌AI引用率追蹤工具，列出Semrush AI Visibility月費99美元、Peec AI月費89歐元等價格。"},"https://nuvomagazine.com/magazine/spring-2022/100-point-wine-rating-system":{"t":"NUVO雜誌解析Parker百分制評分公式","d":"NUVO雜誌拆解Robert Parker百分制的公開構成，包含50分基礎分、色澤5分、香氣15分、風味餘韻20分、整體10分，是了解評分公式細節的來源。"},"https://grapecollective.com/articles/death-of-the-100-point-system":{"t":"Grape Collective批判百分制評分文章","d":"Grape Collective評論文章標題為「百分制之死」，批判Parker評分制度導致葡萄酒風格趨同的Parkerization現象。"},"https://www.moodys.com/web/en/us/insights/methodologies-and-models.html":{"t":"Moody's官方評級方法論公開頁面","d":"官方公開評級方法文件，並在方法改版前對市場徵詢意見，可作為評分機構方法透明化實務的標竿案例。"},"https://www.esma.europa.eu/sites/default/files/library/esma71-99-478_public_notice_moodys_germany_and_moodys_united_kingdom.pdf":{"t":"歐盟ESMA對Moody's開罰公告PDF文件","d":"歐盟監管機構ESMA公告文件，說明因Moody's未清楚標示評級方法而遭開罰，顯示方法揭露在監管上是硬性要求而非選項。"},"https://aisel.aisnet.org/ecis2020_rp/168/":{"t":"ECIS 2020演算法厭惡文獻綜述論文","d":"ECIS 2020學術文獻綜述，整合29篇論文、84個實驗探討演算法厭惡與演算法欣賞現象，結論指出效果高度取決於情境。"},"https://pmc.ncbi.nlm.nih.gov/articles/PMC10857587/":{"t":"PMC醫學文獻人機協作覆核研究","d":"PMC醫學文獻庫收錄的實驗研究，發現人類覆核AI結果能提升使用者信任與採納意願，但人工調整往往反而降低整體準確度。"},"https://artificialintelligenceact.eu/article/50/":{"t":"歐盟AI Act第50條透明義務條文全文","d":"歐盟AI Act第50條官方條文，規定與人互動的AI系統須表明身份，AI生成內容須附上機器可讀標記，是透明義務的法源依據。"},"https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content":{"t":"歐盟AI生成內容透明度實務守則官方頁","d":"歐盟執委會官方頁面，發布2026年AI生成內容透明度實務守則，自2026年8月2日起可作為業者合規證明的路徑之一。"},"https://digital.nemko.com/regulations/ai-regulation-japan":{"t":"Nemko解析日本2025年AI促進法","d":"Nemko Digital解說日本2025年AI促進法，指出其採創新優先原則、以軟法指引為主，且未設直接罰則，與歐盟硬法路線不同。"},"https://www.nakapat.gr.jp/wp-content/uploads/2023/07/【英訳】20230718_Right-of-Publicity.pdf":{"t":"日本律師事務所パブリシティ権英譯資料","d":"日本律師事務所英譯PDF資料，說明パブリシティ権（公表權）與Pink Lady案最高裁判例，指出擅用名人姓名肖像吸客可能須負賠償責任。"},"https://www.theleveragedyears.com/ai-regulation-news/taiwan-ai-content-labeling-i-am-ai-duty-2026":{"t":"台灣AI基本法我是AI標示義務法規動態","d":"法規動態分析文章，說明台灣《人工智慧基本法》預告將訂定「我是AI」標示義務，惟具體施行細則仍待主管機關另行訂定。"},"https://www.businessinsider.com/sports-illustrated-ran-articles-by-fake-ai-generated-writers-report-2023-11":{"t":"Business Insider揭露SI造假作者","d":"Business Insider報導揭露Sports Illustrated曾用AI生成的假頭像與假作者名義發布文章，事件曝光後刪文並更換CEO，重創品牌信譽。"},"https://www.wired.com/story/cnet-published-ai-generated-stories-then-its-staff-pushed-back/":{"t":"WIRED深度報導CNET悄悄發布AI文章","d":"WIRED深度報導指出CNET悄悄發布70餘篇AI生成理財文章，作者標示藏在滑鼠hover效果中，77篇裡有41篇事後需要更正。"},"https://theconversation.com/believe-nothing-the-hoax-of-the-shed-at-dulwich-91211":{"t":"The Conversation分析餐廳詐評醜聞","d":"The Conversation分析文章，講述有人用假評論把不存在的餐廳刷成TripAdvisor倫敦排名第一的惡作劇事件。"},"https://www.aboutamazon.com/news/policy-news-views/amazon-continues-to-take-action-against-fake-review-brokers":{"t":"亞馬遜官方聲明：打擊付費假評論仲介行動","d":"亞馬遜官方政策說明，指出將持續透過訴訟與技術手段追查並打擊專門販售假評論的仲介商，顯示平台端對評論造假問題的長期治理立場。"},"https://www.latimes.com/business/la-fi-yelp-ratings-20140905-story.html":{"t":"LA Times報導：Yelp負評與廣告爭議訴訟","d":"洛杉磯時報報導商家控訴Yelp「不買廣告負評就浮上版面」，法院雖認定不構成勒索，但案件凸顯平台評論排序機制對商家信任的長期傷害。"},"https://hoaxes.org/archive/permalink/wine_spectator_hoaxed":{"t":"Museum of Hoaxes檔案：酒評獎項惡搞事件","d":"記錄學者Robin Goldstein虛構一間根本不存在的餐廳，僅憑250美元申請費就騙到Wine Spectator卓越獎，揭露付費榮譽獎項的公信力漏洞。"},"https://en.wikipedia.org/wiki/Knoedler":{"t":"維基百科：Knoedler畫廊偽畫醜聞始末","d":"記載紐約165年老字號畫廊Knoedler因長年販售偽造Rothko、Pollock等名家作品而倒閉的完整經過，涉案總額約8,000萬美元。"},"https://www.courts.go.jp/assets/hanrei/hanrei-pdf-80233.pdf":{"t":"日本裁判所判決書：偽造繪畫鑑定證書案","d":"日本法院公開的民事判決原文，處理偽造繪畫鑑定證書相關糾紛的原始判決內容，顯示鑑定證書本身也可能被當作詐欺工具使用。"},"https://www.bbc.com/news/technology-34127466":{"t":"BBC報導：維基百科封鎖代寫宣傳假帳號","d":"BBC報導維基百科一次性封鎖381個收費代寫企業宣傳條目的sock puppet假帳號，反映百科內容置入行銷的規模與平台反制作為。"},"https://blog.google/company-news/inside-google/company-announcements/defending-search-users-from-parasite-seo-spam/":{"t":"Google官方部落格：打擊寄生型SEO政策","d":"Google官方說明打擊Parasite SEO的政策方向，鎖定付費掛靠在高信譽網站上、藉此借殼排名的操作手法進行治理與清查。"},"https://www.nytimes.com/2003/08/10/world/accusations-rise-from-wine-cellars-of-bordeaux.html":{"t":"紐約時報2003年報導：酒評利益衝突質疑","d":"報導Robert Parker代表同時兼任波爾多酒莊顧問一事引發的利益衝突質疑，凸顯權威酒評體系中評鑑與商業角色重疊的風險。"},"https://www.consumerreports.org/about-us/policies-and-financials/no-commercial-use-policy/":{"t":"Consumer Reports官方：不收廣告測試政策","d":"Consumer Reports官方說明其No Commercial Use Policy，堅持不接受廣告、以匿名自購方式測試產品，並禁止企業將其評分用於廣告宣傳。"},"https://www.nytimes.com/wirecutter/reviews/how-wirecutter-makes-money/":{"t":"Wirecutter官方說明：編輯商業防火牆機制","d":"Wirecutter官方文件說明推薦內容完全由編輯部獨立決定，商業團隊僅在產品定案後處理分潤連結，建立編輯與營收之間的防火牆。"},"https://www.sec.gov/newsroom/press-releases/2020-112":{"t":"SEC官方新聞稿：Morningstar遭罰款案","d":"美國證管會官方新聞稿說明因分析師同時參與銷售與市場拓展工作，對Morningstar處以350萬美元罰款，涉及評等機構角色衝突問題。"},"https://www.kbb.com/company/history/":{"t":"Kelley Blue Book官方歷史：藍皮書價由來","d":"KBB官方歷史說明其自1926年以價目表起家，二戰期間曾被美國政府採用作為價格上限依據，逐步演變成業界通稱的「藍皮書價」。"},"https://www.zillow.com/zestimate/":{"t":"Zillow官方說明：Zestimate自動估價機制","d":"Zillow官方文件說明Zestimate運作原理，結合公開地籍稅務資料與機器學習模型進行自動估價，並免費開放使用以累積信任與流量資產。"},"https://www.hagerty.com/valuation-toolsAbout":{"t":"Hagerty官方說明：經典車估價工具方法","d":"Hagerty官方頁面說明其經典車估價工具整合保險投保價、拍賣結果與實地勘車資料，並與旗下保險產品緊密綁定運作。"},"https://www.psacard.com/priceguide":{"t":"PSA官方價格指南：認證卡歷史成交定價","d":"PSA官方價格指南只採認證卡片的歷史拍賣實現價作為定價依據，顯示其定價權威與鑑定評級服務緊密綁定的商業模式。"},"https://www.hawaii.edu/news/2022/05/13/gizmodo-wirecutter-founder-speaks-at-uh/":{"t":"夏威夷大學報導：Wirecutter創辦人分享歷程","d":"報導Wirecutter創辦人Brian Lam談及公司從少數3C產品的niche起家，後續以3,000萬美元將公司賣給紐約時報的創業歷程。"},"https://ahrefs.com/blog/healthline-seo-case-study/":{"t":"Ahrefs案例研究：Healthline健康搜尋稱霸策略","d":"Ahrefs案例研究分析Healthline以疾病主題群內容佈局搭配醫學專業審查，稱霸健康類搜尋結果，月訪客量超過9,600萬人次。"},"https://www.forbes.com/sites/natalierobehmed/2013/09/06/why-artsy-is-succeeding-in-putting-the-art-world-online/":{"t":"Forbes 2013報導：Artsy廣佈局起家策略","d":"Forbes報導指出Artsy從創立初期就採取broad路線，靠大額融資與500多間頂級畫廊供料建立規模，此起手式門檻高、難以複製。"},"https://growganic.io/geo":{"t":"Growganic研究：AI引用與網域權重關聯性","d":"Growganic量化研究發現網域權重只能解釋不到4%的AI引用差異，且77%被引用頁面來自DA低於50的小型網站，挑戰傳統SEO權重迷思。"},"https://www.sbiartauction.co.jp/pdf/en/terms/terms_of_use-en.pdf":{"t":"SBI Art Auction官方條款：禁止爬蟲重用","d":"SBI Art Auction網站使用條款PDF明文禁止未經同意的自動爬蟲擷取、複製與內容重用，界定其拍賣資料的使用限制範圍。"},"https://www.artforum.com/news/artprice-files-complaint-against-christies-193635/":{"t":"Artforum報導：Artprice與Christie's訴訟攻防","d":"Artforum報導Artprice與Christie's之間的訴訟攻防，爭點為2,300份拍賣目錄遭未經同意完整重製的指控，顯示大規模重製目錄的法律風險極高。"},"https://www.nbcdfw.com/news/local/auction-houses-face-off-in-website-data-scraping-lawsuit/2033762/":{"t":"NBC DFW報導：拍賣業者互控資料爬取訴訟","d":"NBC DFW報導Heritage Auctions控告Christie's子公司Collectrium爬取近300萬筆拍品資料並轉售，凸顯拍賣資料所有權爭議。"},"http://www.e-yakimono.net/html/about-us.html":{"t":"e-yakimono.net：25年歷史的日本陶藝知識站","d":"1999年創立、第一個專注日本陶器的線上知識中心，提供窯場與陶藝家介紹；25年後仍被AI引用，是「窄而深」的niche權威可以長壽的實證。"}}</script>
<script>
(function(){
  var backdrop = document.getElementById('modalBackdrop');
  var urlInput = document.getElementById('modalUrl');
  var btnCopy  = document.getElementById('btnCopy');
  var btnOpen  = document.getElementById('btnOpen');
  var btnClose = document.getElementById('btnClose');
  var frame    = document.getElementById('modalFrame');
  var copyTimer = null;
  var frameBlocked = false;
  var linkCard = document.getElementById('linkCard');
  var lcHost = document.getElementById('lcHost');
  var lcTitle = document.getElementById('lcTitle');
  var lcDesc = document.getElementById('lcDesc');
  var stageHint = document.querySelector('.stage-hint');
  var HINT_IFRAME = '多數網站不允許被內嵌預覽——若下方空白或出現錯誤頁，請改用上方「複製網址」或「開新分頁 ↗」。';
  var HINT_CARD = '來源導覽卡：說明整理自本文的研究素材。閱讀原文請點「開新分頁 ↗」。';
  var cards = {};
  try{ cards = JSON.parse(document.getElementById('linkCards').textContent); }catch(e){}

  function hostOf(url){
    try{ return new URL(url).hostname.replace(/^www\./,''); }catch(e){ return url.split('/')[2] || url; }
  }
  function openModal(url){
    urlInput.value = url;
    btnOpen.href = url;
    frameBlocked = false;
    frame.classList.remove('loaded');
    frame.removeAttribute('src');
    var card = cards[url];
    if(card){
      // 有導覽卡：直接顯示卡片，不嘗試內嵌（各平台行為一致）
      lcHost.textContent = hostOf(url);
      lcTitle.textContent = card.t;
      lcDesc.textContent = card.d;
      linkCard.classList.add('show');
      stageHint.textContent = HINT_CARD;
    } else {
      linkCard.classList.remove('show');
      stageHint.textContent = HINT_IFRAME;
      // 佔位訊息常駐底層；iframe 僅在確認載入成功後才顯示（避免瀏覽器錯誤頁蓋住提示）
      frame.src = url;
    }
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }
  function closeModal(){
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden','true');
    frame.classList.remove('loaded');
    frame.removeAttribute('src');
    document.body.style.overflow = '';
    resetCopy();
  }
  function resetCopy(){
    if(copyTimer){ clearTimeout(copyTimer); copyTimer = null; }
    btnCopy.textContent = '複製網址';
    btnCopy.classList.remove('copied');
  }
  function copyUrl(){
    var url = urlInput.value;
    function ok(){
      btnCopy.textContent = '已複製 ✓';
      btnCopy.classList.add('copied');
      copyTimer = setTimeout(resetCopy, 1800);
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(url).then(ok).catch(function(){ fallbackCopy(url, ok); });
    } else {
      fallbackCopy(url, ok);
    }
  }
  function fallbackCopy(text, done){
    urlInput.focus();
    urlInput.select();
    try{ document.execCommand('copy'); done(); }catch(e){}
    urlInput.setSelectionRange(0,0);
    urlInput.blur();
  }

  // 連結一律用 data-url（不放 href），避免宿主頁面（如 artifact 檢視器）攔截外部連結另開分頁
  var entLinks = document.querySelectorAll('a.ent[data-url]');
  for(var i = 0; i < entLinks.length; i++){
    entLinks[i].setAttribute('tabindex','0');
    entLinks[i].setAttribute('role','link');
  }

  // iframe 僅在真正載入成功後顯示；被 CSP／X-Frame-Options 擋下時維持隱藏，露出底層提示
  frame.addEventListener('load', function(){
    if(frame.getAttribute('src') && backdrop.classList.contains('open') && !frameBlocked){
      frame.classList.add('loaded');
    }
  });
  document.addEventListener('securitypolicyviolation', function(){
    frameBlocked = true;
    frame.classList.remove('loaded');
  });

  // event delegation：所有 .ent 連結一律開 popup，不離開視窗
  function entTarget(ev){
    var el = ev.target;
    if(el && el.closest) return el.closest('a.ent[data-url]');
    return null;
  }
  document.addEventListener('click', function(ev){
    var a = entTarget(ev);
    if(a){
      ev.preventDefault();
      ev.stopPropagation();
      openModal(a.getAttribute('data-url'));
    }
  });
  document.addEventListener('keydown', function(ev){
    if(ev.key === 'Enter'){
      var a = entTarget(ev);
      if(a){
        ev.preventDefault();
        openModal(a.getAttribute('data-url'));
      }
    }
  });
  btnCopy.addEventListener('click', copyUrl);
  btnClose.addEventListener('click', closeModal);
  backdrop.addEventListener('click', function(ev){
    if(ev.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', function(ev){
    if(ev.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });
})();
</script>
</body>
</html>
`;

export async function GET() {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
