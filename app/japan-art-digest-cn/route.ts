export const dynamic = "force-static";

const html = String.raw`<!doctype html>
<html lang="zh-Hans">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>在米其林出现之前——日本艺术平台研究发现</title>
<meta name="description" content="日本艺术平台研究发现：权威真空、收紧的窗口、AI 评鉴信任设计、信任攻击防御与先窄后宽的五年路径。附六张图表、71 张来源导览卡与完整参考来源库。">
<meta name="robots" content="noindex, nofollow">
<meta property="og:title" content="在米其林出现之前——日本艺术平台研究发现">
<meta property="og:description" content="日本艺术平台研究的互动式 Digest：市场真空、AI 评鉴信任设计、信任攻击防御与五年路径。">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.bekhelpme.com/japan-art-digest-cn">
<meta property="og:locale" content="zh_CN">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NLVESXBBMR"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NLVESXBBMR');</script>
<style>
:root{
  --bg:#FAF7F0; --surface:#FFFFFF; --ink:#211F1A; --ink-2:#6B675C; --ink-3:#98937F;
  --accent:#177A5B; --accent-dim:#0F5C44; --s1:#177A5B; --s2:#4661C2;
  --hair:#E3DED2; --hair-2:#EDE9DE; --card:#F3EFE5;
  --heat-1:#DDEDE5; --heat-2:#AFD7C4; --heat-3:#75BA9D; --heat-4:#3F9877; --heat-5:#177A5B;
  --grid:#E7E2D5; --axis:#C9C3B2; --btn-ink:#FFFFFF;
  color-scheme: light;
}
@media (prefers-color-scheme: dark){
  :root:where(:not([data-theme="light"])){
    --bg:#141715; --surface:#1C1F1C; --ink:#EDEBE3; --ink-2:#A5A99F; --ink-3:#7C8078;
    --accent:#2FA079; --accent-dim:#45B58D; --s1:#2FA079; --s2:#6B7FE0;
    --hair:#2A2E2A; --hair-2:#232723; --card:#1E221E;
    --heat-1:#1C2B24; --heat-2:#1E4233; --heat-3:#206046; --heat-4:#278159; --heat-5:#2FA079;
    --grid:#262A26; --axis:#3A3F3A; --btn-ink:#0E1512;
    color-scheme: dark;
  }
}
:root[data-theme="dark"]{
  --bg:#141715; --surface:#1C1F1C; --ink:#EDEBE3; --ink-2:#A5A99F; --ink-3:#7C8078;
  --accent:#2FA079; --accent-dim:#45B58D; --s1:#2FA079; --s2:#6B7FE0;
  --hair:#2A2E2A; --hair-2:#232723; --card:#1E221E;
  --heat-1:#1C2B24; --heat-2:#1E4233; --heat-3:#206046; --heat-4:#278159; --heat-5:#2FA079;
  --grid:#262A26; --axis:#3A3F3A; --btn-ink:#0E1512;
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
#btnCardView{background:var(--accent); border-color:var(--accent); color:var(--btn-ink,#fff); font-weight:700; box-shadow:0 2px 8px rgba(23,122,91,.35)}
#btnCardView:hover{background:var(--accent-dim); border-color:var(--accent-dim); color:var(--btn-ink,#fff)}
.mbtn.close{font-weight:700}
.modal-stage{flex:1; background:var(--bg); display:flex; flex-direction:column; min-height:0}
.stage-hint{font-size:12px; color:var(--ink-3); padding:7px 14px; border-bottom:1px solid var(--hair); background:var(--card); line-height:1.7}
.stage-inner{position:relative; flex:1; min-height:0}
.iframe-fallback{position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; text-align:center; color:var(--ink-2); font-size:14px; padding:30px; line-height:1.9}
.iframe-fallback .glyph{font-size:30px; opacity:.5}
.modal-stage iframe{position:absolute; inset:0; width:100%; height:100%; border:0; background:transparent; visibility:hidden}
.modal-stage iframe.loaded{visibility:visible; background:#fff}
.stage-inner.has-card iframe{visibility:hidden}
.stage-inner.has-card.show-frame iframe.loaded{visibility:visible; z-index:3}
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
  <h1>在米其林出现之前，<br>没有人知道哪家餐厅值得绕路</h1>
  <p class="standfirst">日本艺术市场研究发现的完整整理——一个还没有人占据的权威真空、正在收紧的窗口、把权威合法盖起来的方法，以及盖好之后怎么被信任、怎么防守、怎么一步一步走。给 Jason 的交互式参考文档：文中每个机构与网站都可以点开预览、复制网址、另开分页。</p>
  <p class="meta-line">阅读时间约 25 分钟 · 六张图表 · 文末附完整参考来源库</p>
</header>

<nav class="toc" aria-label="目录">
  <p class="toc-title">目录</p>
  <ol>
    <li><a href="#s1"><span class="n">壹</span>一个真空</a></li>
    <li><a href="#s2"><span class="n">贰</span>但窗口在关上</a></li>
    <li><a href="#s3"><span class="n">参</span>日本市场的反差</a></li>
    <li><a href="#s4"><span class="n">肆</span>最有趣的分层</a></li>
    <li><a href="#s5"><span class="n">伍</span>权威的合法盖法</a></li>
    <li><a href="#s6"><span class="n">陆</span>AI 检索的真空实测</a></li>
    <li><a href="#s7"><span class="n">柒</span>权威盖好之后，怎么被信任</a></li>
    <li><a href="#s8"><span class="n">捌</span>信任会怎么被攻击</a></li>
    <li><a href="#s9"><span class="n">玖</span>先窄后宽的路</a></li>
    <li><a href="#appendix"><span class="n">附</span>查阅用参考卡</a></li>
    <li><a href="#sources"><span class="n">源</span>参考来源</a></li>
  </ol>
</nav>

<!-- ================= 壹 一个真空 ================= -->
<section id="s1">
  <div class="eyebrow"><span class="num">壹</span><span class="rule"></span></div>
  <h2>一个真空</h2>

  <p>想像一个场景。一位旧金山的收藏者，在东京的画廊里站在一件青瓷面前，心动了。他拿出手机想查三件事：这位陶艺家是谁、作品好在哪、这个价格合不合理。然后他发现——查不到。不是信息太少，是全世界根本没有一个网站，能同时回答这三个问题。</p>

  <p>这件事听起来不可思议，所以我们用英文和日文两种语言反复搜索验证。结论是：市面上找不到任何一个把「评论、排名、成交数据」三件事做在一起的日本或东亚艺术平台。有拍卖数据库，有画廊电商，有艺术媒体，但没有人把它们接起来。这个假设成立。</p>

  <p>餐饮业曾经也是这样。在<a class="ent" data-url="https://guide.michelin.com/th/en/to-the-stars-and-beyond-th">米其林指南</a>出现之前，没有人知道哪家餐厅值得专程绕路——好餐厅一直都在，缺的是一个大家都服气的人来说「这家值得」。米其林做的事情，本质上就是把散落的品质信息，变成一套可信的判断。然后整个产业围着它转了一百年。</p>

  <p>日本陶艺，现在就站在「米其林出现之前」的位置。这份文档要讲的，就是这个真空长什么样子、为什么窗口正在收紧、以及一个台湾青瓷艺术家凭什么有机会把这座灯塔盖起来。</p>
</section>

<!-- ================= 贰 窗口在关上 ================= -->
<section id="s2">
  <div class="eyebrow"><span class="num">贰</span><span class="rule"></span></div>
  <h2>但窗口在关上</h2>

  <p>真空不会永远是真空。过去一年多，几件大事接连发生，方向全都指向同一件事：大玩家开始抢「艺术数据权威」这个位子。</p>

  <p>先看最大的一桩。<a class="ent" data-url="https://news.artnet.com/market/beowolff-capital-artnet-takeover-2649474">Artnet</a>——经营三十多年的艺术市场数据与媒体公司——在 2025 年 5 月被英国投资公司 <a class="ent" data-url="https://www.theartnewspaper.com/2025/05/27/european-american-investment-company-to-buy-artnet-and-take-it-private">Beowolff Capital</a> 以约六千五百万到七千三百万美元私有化下市。接着在 2026 年 4 月，它与在线画廊平台 <a class="ent" data-url="https://www.theartnewspaper.com/2026/04/23/comment-|-how-viable-is-the-artnet-and-artsys-merger">Artsy</a> 正式合并，由 Artsy 首席执行官 Jeffrey Yin 领军，喊出的愿景是「艺术界的彭博社」——彭博社（Bloomberg）是金融圈人人依赖的数据终端机，意思是他们想成为艺术市场人人依赖的那块屏幕。合并后手上有一千八百万笔拍卖纪录，加上一级市场的画廊网络。不过这桩合并并不轻松：2026 年 4 月两家公司<a class="ent" data-url="https://hyperallergic.com/art-movements-dozens-laid-off-at-artnet-and-artsy/">裁员数十人、关掉柏林办公室</a>，前一年上半年营收还掉了 12%。巨人在整队，但整得很痛。</p>

  <p>其他人也没闲着。<a class="ent" data-url="https://www.prnewswire.com/news-releases/artmarketcom-double-digit-growth-in-q2-2025...302522441.html">Artprice</a>——法国的艺术价格数据库公司——2025 年第二季营收双位数成长，还跟 AI 搜索引擎 Perplexity <a class="ent" data-url="https://www.prnewswire.com/news-releases/artmarketcom-publishes-its-32nd-artprice-annual-report...302708675.html">合作推出混合订阅</a>，等于直接把自己接上 AI 检索的水管。（顺带一提：Artprice 年报说 2025 年全球艺术市场成长 12%，与 Art Basel／UBS 报告的口径相反，两边统计方法不同，引用时要小心。订阅定价<span class="unverified">未查证</span>。）<a class="ent" data-url="https://docs.liveart.xyz/liveart/whitepaper/data-oracles-powering-a-transparent-rwa-market-on-liveart">LiveArt</a> 转向 AI 加 RWA 代币化——RWA（Real World Assets，实体资产代币化）就是把实体艺术品变成链上可交易的凭证——$ART 代币已在 2025 年 9 月上线。<a class="ent" data-url="https://www.myartbroker.com/mab-100">MyArtBroker</a> 用自家 MAB100 指数深耕版画市场。而 <a class="ent" data-url="https://www.wallstreetzen.com/blog/masterworks-review/">Masterworks</a> 用 Reg A+（美国的小额公募制度，让散户能用小额买一股艺术品）把单件作品证券化，累计投资资本超过十亿美元；它那个拍卖数据库扮演的角色，更像「内部选件工具兼信任护城河」，没有证据显示独立卖钱<span class="unverified">未查证</span>。这一点，第玖节会再回来讲。</p>

  <p>日本本土呢？2025 年 4 月，<a class="ent" data-url="https://prtimes.jp/main/html/rd/p/000000478.000008833.html">Mainichi Auction 与 SBI Art Auction 合并</a>为 SBI Mainichi Art Holdings——日本两大拍卖行变成一家。二手比价网站 <a class="ent" data-url="https://help.aucfan.com/hc/ja/articles/54235003362841">aucfan</a> 是日本最大的二手行情数据库，甚至已经开了 ChatGPT 的 API 接口。但它终究只是比价工具，上面没有评论、没有评级、没有「这件作品好在哪」。</p>

  <p>把这些放在一起看，图像很清楚：所有人都在往数据靠，但「评论加排名加成交数据」三位一体的位子，还是空的。空位还在，只是门在慢慢阖上。</p>
</section>

<!-- ================= 参 日本市场的反差 ================= -->
<section id="s3">
  <div class="eyebrow"><span class="num">参</span><span class="rule"></span></div>
  <h2>日本市场的反差</h2>

  <p>为什么是日本？因为 2024 年全球艺术市场在退潮，跌了大约 12%，而<a class="ent" data-url="https://news.artnet.com/market/japan-art-market-is-bigger-than-it-seems-report-2587823">日本市场</a>逆势涨了 2%，来到约 6.92 亿美元。拉长看更有意思：疫情以来的五年，<a class="ent" data-url="https://www.theartnewspaper.com/2025/01/07/japans-art-market-grew-11-since-the-pandemic-new-report-finds">日本累计成长 11%</a>，同期全球只有约 1%。一个只占全球 1% 的小市场，却是少数还在往上走的市场。</p>

  <figure class="viz">
    <p class="viz-title">日本艺术市场规模，2022–2024</p>
    <p class="viz-sub">单位：亿美元 · 来源：Art Basel／UBS 口径之市场报告</p>
    <svg viewBox="0 0 640 290" role="img" aria-label="日本艺术市场规模长条图：2022年7.56亿美元、2023年6.81亿、2024年6.92亿，2024年年增2%，同年全球约负12%">
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
      <text class="ax" x="620" y="285" text-anchor="end">2019–2023 日本累计 +11%，全球约 +1%</text>
    </svg>
    <figcaption><b>Takeaway：</b>全球在退潮的那一年，日本是少数还在涨的市场——规模不大，方向难得。</figcaption>
  </figure>

  <p>更关键的是这个市场的体质。它的销售七成一走画廊和经纪商，在线销售只占 5% 到 16%——全球平均大约两成。买的人呢？八成四是本地藏家。全日本有超过两千零六十家活跃画廊，其中近六成挤在东京。这是一个高度内需、高度线下、高度集中的市场。</p>

  <figure class="viz">
    <p class="viz-title">一个内需、线下的市场</p>
    <p class="viz-sub">日本艺术市场之通路结构与买家来源（占比）</p>
    <div class="legend">
      <span class="key"><i class="sw" style="background:var(--s1)"></i>主要占比</span>
      <span class="key"><i class="sw" style="background:var(--s2)"></i>其余占比</span>
    </div>
    <svg viewBox="0 0 640 150" role="img" aria-label="堆栈长条图：销售通路中画廊与经纪商占71%、拍卖约29%；买家来源中本地藏家占84%、国际买家16%">
      <text class="ax" x="112" y="49" text-anchor="end">销售通路</text>
      <rect x="124" y="34" width="350" height="24" rx="4" fill="var(--s1)"/>
      <rect x="476" y="34" width="142" height="24" rx="4" fill="var(--s2)"/>
      <text class="inbar" x="140" y="50">画廊・经纪商 71%</text>
      <text class="inbar" x="490" y="50">拍卖 29%</text>
      <text class="ax" x="112" y="119" text-anchor="end">买家来源</text>
      <rect x="124" y="104" width="414" height="24" rx="4" fill="var(--s1)"/>
      <rect x="540" y="104" width="78" height="24" rx="4" fill="var(--s2)"/>
      <text class="inbar" x="140" y="120">本地藏家 84%</text>
      <text class="inbar" x="546" y="120">国际 16%</text>
      <text class="note-flag" x="124" y="80">在线销售仅 5–16%（全球平均约 20%）</text>
    </svg>
    <figcaption><b>Takeaway：</b>七成走画廊、八成四本地人买、在线占比不到全球一半——信息不透明不是缺陷，是这个市场的原始状态。也正因如此，第一个把信息做透明的人，拿走的是整个真空。</figcaption>
  </figure>

  <p>「日本人只买日本艺术」这个印象，结构上成立，但正在被稀释——画廊的海外艺博会收入只占 2%、跨境电商仅 1%，可是<a class="ent" data-url="https://www.artbasel.com/stories/japan-young-artists-collectors">年轻藏家已经开始买国际艺术家的作品</a>，具体比例没有量化拆分<span class="unverified">未查证</span>。同时，<a class="ent" data-url="https://news.artnet.com/market/art-week-tokyo-2024-2565916">Art Week Tokyo</a>、Tokyo Gendai 加上疲软的日圆，正在把外国藏家往东京送，Gagosian、Perrotin、Almine Rech 这些国际画廊也已经进驻。墙是有裂缝的，而且裂缝在变大。</p>
</section>

<!-- ================= 肆 最有趣的分层 ================= -->
<section id="s4">
  <div class="eyebrow"><span class="num">肆</span><span class="rule"></span></div>
  <h2>最有趣的分层</h2>

  <p>讲到「日本艺术品的高价都跑去海外」，大家会想到<a class="ent" data-url="https://artnewsjapan.com/article/14039">草间弥生</a>。她的单件作品在香港拍出约 8 亿日圆，而<a class="ent" data-url="https://magazine.collet.am/98">日本国内拍场的纪录</a>大约是 1 亿日圆。同一位艺术家，差了将近十倍。</p>

  <figure class="viz">
    <p class="viz-title">草间弥生：同一位艺术家，两个舞台</p>
    <p class="viz-sub">单件作品拍卖纪录，约值（日圆）</p>
    <svg viewBox="0 0 640 150" role="img" aria-label="横向长条图：草间弥生日本国内拍场纪录约1亿日圆，香港拍场约8亿日圆，相差约十倍">
      <text class="ax" x="140" y="49" text-anchor="end">日本国内拍场</text>
      <rect x="152" y="34" width="57" height="24" rx="4" fill="var(--s1)"/>
      <text class="val" x="218" y="50">约 1 亿</text>
      <text class="ax" x="140" y="114" text-anchor="end">香港拍场</text>
      <rect x="152" y="99" width="458" height="24" rx="4" fill="var(--s1)"/>
      <text class="inbar" x="166" y="115">约 8 亿</text>
      <text class="note-flag" x="280" y="78">差距约 10 倍</text>
    </svg>
    <figcaption><b>Takeaway：</b>十倍的差距不是品质差，是舞台差——香港有国际定价机制，东京没有。</figcaption>
  </figure>

  <p>但这里藏着整份研究最有趣的发现：这个「外流」故事只适用于当代艺术的金字塔顶端。往下看「工艺／陶艺」这一层，情况完全不同——不是作品外流，是<em>从来没有人做过国际定价</em>。人间国宝的作品，主要在<a class="ent" data-url="https://www.mistore.jp/shopping/event/nihombashi_e/dentoukougei_50">三越</a>这类百货公司的美术部销售；<a class="ent" data-url="https://www.mistore.jp/shopping/event/nihombashi_e/dentoukougei_50">日本伝统工芸展</a>第 71、72 回的会场，就办在日本桥三越本店里——展览、验证、销售，三件事在同一个柜位完成。这个体系运转了七十年，运转得很好，但它是一个对内的体系。国际二级市场？不存在。国际定价基准？没人做过。</p>

  <p>而这个没人定价的品类，本身正在缩水。日本工艺产业的生产总额，从 1983 年高峰的约 5,400 亿日圆，掉到 2015 至 2016 年的约 960 到 1,020 亿——缩掉八成。轮岛涂（石川县轮岛市的漆器工艺）更惨烈，从 1991 年的 180 亿掉到 2023 年的 20 亿。在世陶艺家的分级价格带，目前没有可靠数据<span class="unverified">未查证</span>。</p>

  <figure class="viz">
    <p class="viz-title">四十年的结构性萎缩</p>
    <p class="viz-sub">生产总额，单位：亿日圆 · 左：全日本工艺 · 右：轮岛涂</p>
    <svg viewBox="0 0 640 250" role="img" aria-label="两张斜率图：日本工艺生产总额从1983年约5400亿日圆降至2015-16年约990亿；轮岛涂从1991年180亿降至2023年20亿">
      <text class="ax" x="160" y="26" text-anchor="middle">全日本工艺生产总额</text>
      <line x1="70" y1="60" x2="250" y2="196" stroke="var(--s1)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="70"  cy="60"  r="4.5" fill="var(--s1)" stroke="var(--surface)" stroke-width="2"/>
      <circle cx="250" cy="196" r="4.5" fill="var(--s1)" stroke="var(--surface)" stroke-width="2"/>
      <text class="val" x="70" y="46" text-anchor="middle">约 5,400</text>
      <text class="val" x="250" y="188" text-anchor="middle">约 990</text>
      <text class="ax" x="70"  y="226" text-anchor="middle">1983</text>
      <text class="ax" x="250" y="226" text-anchor="middle">2015–16</text>
      <text class="note-flag" x="160" y="246" text-anchor="middle">−82%</text>
      <line class="axisline" x1="320" y1="40" x2="320" y2="220"/>
      <text class="ax" x="480" y="26" text-anchor="middle">轮岛涂</text>
      <line x1="390" y1="72" x2="570" y2="196" stroke="var(--s1)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="390" cy="72"  r="4.5" fill="var(--s1)" stroke="var(--surface)" stroke-width="2"/>
      <circle cx="570" cy="196" r="4.5" fill="var(--s1)" stroke="var(--surface)" stroke-width="2"/>
      <text class="val" x="390" y="58" text-anchor="middle">180</text>
      <text class="val" x="570" y="188" text-anchor="middle">20</text>
      <text class="ax" x="390" y="226" text-anchor="middle">1991</text>
      <text class="ax" x="570" y="226" text-anchor="middle">2023</text>
      <text class="note-flag" x="480" y="246" text-anchor="middle">−89%</text>
    </svg>
    <figcaption><b>Takeaway：</b>这不是景气循环，是四十年的结构性下滑。也正因为市场在缩，体系内的人忙着求生，没有人有余裕替这个品类建国际定价基准——真空不是被守住的，是被遗忘的。</figcaption>
  </figure>

  <p>把两层放在一起看：草间弥生证明了「日本艺术在国际舞台可以值十倍」，工艺的萎缩证明了「没有人在做这件事」。顶层有天价却没有你的位子，底层有真空却没有人进场。机会在中间——替那个从来没被国际定价过的品类，当第一个说「这件值得绕路」的人。</p>
</section>

<!-- ================= 伍 权威的合法盖法 ================= -->
<section id="s5">
  <div class="eyebrow"><span class="num">伍</span><span class="rule"></span></div>
  <h2>权威的合法盖法</h2>

  <p>好，假设要盖这座灯塔。第一个直觉通常是：去借官方的壳。挂上日本政府的认证，不就有公信力了吗？</p>

  <p>此路不通，而且是结构性的不通。<a class="ent" data-url="https://www.meti.go.jp/policy/mono_info_service/mono/nichiyo-densan/index.html">伝统的工芸品マーク</a>——经济产业省发的传统工艺品标章——只发给日本国内的百年产地。<a class="ent" data-url="https://www.bunka.go.jp/seisaku/bunkazai/shokai/mukei/">人间国宝</a>是文化庁的行政认定，同样不对外国个人开放。这两扇门，对一个台湾人来说是焊死的。</p>

  <p>而且连「靠近」都要小心。日本的<a class="ent" data-url="https://www.caa.go.jp/policies/policy/representation/fair_labeling/representation_regulation/misleading_representation">景品表示法</a>有一条「优良误认表示」——白话说，就是把东西讲得比实际好就违法；不正竞争防止法还有「品质等误认惹起行为」，让人误会品质或来历也算。所以「鉴定」「人间国宝级」这类词，在行销文案里碰都不能碰。合法的路，不是借壳，是自己盖。</p>

  <p>有人盖成过吗？有，而且剧本意外地清晰。<a class="ent" data-url="https://kuramaster.com/ja/entry-requirements/regulation/">Kura Master</a> 是一群法国人办的日本酒评选——外国人评日本最传统的产业，日本酒造界不但没有排斥，反而服气，得奖酒标贴在瓶身上当卖点。<a class="ent" data-url="https://www.internationalwinechallenge.com/Articles/sake-judging-and-awards.html">IWC SAKE</a>（国际葡萄酒挑战赛的清酒部门）也一样。两者证明了同一件事：权威不必来自血统，可以来自<em>评审团的组成与流程的公开</em>。再看日本自己的<a class="ent" data-url="https://toobi-tocfa.or.jp/about/">东美鉴定评価机构</a>——它的信任不是来自一纸证书，而是来自公开的委员会构成加上定期的外部审查。民间评审团模式，是验证过可行的。</p>

  <p>那凭什么是 Jason 来组这个评审团？因为他已经在体系里面了。<a class="ent" data-url="https://www.nihonkogeikai.or.jp/about/">日本工芸会</a>的正会员资格，是日本伝统工芸展入选满四次——Jason 从 2022 到 2026 年连年入选，正走在这条轨道上。这不是外人叩门，是体系内的人往外搭桥。桥的另一端也已经有桩：<a class="ent" data-url="https://www.artagenda.jp/exhibition/detail/5891">岐阜県现代陶芸美术馆与莺歌陶瓷博物馆</a>有文化交流协定，2021 年办过「台湾现代陶芸の力」特展；台湾端的官方对口是 <a class="ent" data-url="https://www.ntcri.gov.tw/">NTCRI</a>（国立台湾工艺研究发展中心），近年合作备忘录的细节<span class="unverified">未查证</span>。</p>

  <p>第一批背书者从哪里来？从近到远：Jason 在工芸展体系内已经认识的评审与学者，往外一圈是工芸史学者，再往外是台日馆际的策展人，最外圈是媒体——<a class="ent" data-url="https://bijutsu.press/books/5531/">美术手帖</a> 2025 年 1 月才做过「现代の陶芸」特辑，题目已经在编辑台上了。一圈一圈往外推。不用一次到位。</p>
</section>

<!-- ================= 陆 AI 检索的真空实测 ================= -->
<section id="s6">
  <div class="eyebrow"><span class="num">陆</span><span class="rule"></span></div>
  <h2>AI 检索的真空实测</h2>

  <p>灯塔盖给谁看？十年前答案是 Google。现在多了一个更重要的读者：AI。愈来愈多收藏者的第一个动作不是搜索，而是问 ChatGPT 或 Perplexity。所以我们做了一个实测：问 AI「值得收藏的当代日本陶艺家有哪些」。</p>

  <p>结果很诚实。AI 引用的来源是 <a class="ent" data-url="https://en.wikipedia.org/wiki/Japanese_pottery_and_porcelain">Wikipedia</a>、一个 1999 年创站的老牌陶艺网站 <a class="ent" data-url="http://www.e-yakimono.net/html/about-us.html">e-yakimono.net</a>、拍卖行官网，和<a class="ent" data-url="https://wearejapan.com/articles/discover-six-new-generation-japanese-ceramic/">观光媒体</a>。就这样。策展级的权威——能说出「这位艺术家好在哪、在谱系里站什么位置」的声音——完全缺席。那把椅子是空的。更妙的是，许多当代陶艺家连 Wikidata（维基百科背后的结构化数据库，AI 认识世界的骨架）条目都没有。替他们创建条目，是典型的低成本高杠杆。</p>

  <p>但这个真空有一条残酷的规则：<a class="ent" data-url="https://www.frase.io/blog/what-is-generative-engine-optimization-geo">GEO 研究</a>（Generative Engine Optimization，生成式引擎优化——让 AI 愿意引用你的学问）显示，被 AI 引用的内容里，一半发布不到十三周。意思是先到先赢，但赢了之后不能睡——要用季度更新制一直喂新内容，位子才守得住。</p>

  <p>技术面的玩法，研究也给了清单的骨架：文章开头四十到六十个字直接回答问题，让每个 H2 段落都能被单独抽走引用；结构化标记用 Article 加 FAQPage 就够。<a class="ent" data-url="https://presenc.ai/research/state-of-llms-txt-2026">llms.txt</a>（放在网站根目录、写给 AI 爬虫看的说明档）采用率才一成多，Anthropic 与 Perplexity 正式支持、Google 还没，效果「适度但可测量」。爬虫政策上有一个大坑：七成一的新闻出版商因为误挡了 AI 的搜索爬虫，直接从 AI 答案里消失——所以 Claude-SearchBot、OAI-SearchBot、PerplexityBot、Googlebot 这些要放行，训练用的爬虫才另议。成效怎么量？拿一百到两百条买家意图的提问每周跑一轮，<a class="ent" data-url="https://siftly.ai/blog/tools-measure-citation-rates-ai-generated-content-brands-2026">市面上的追踪工具</a>月费不到一百美元；另外注意七成的 AI 导流在 GA4 里会被误标成「直接流量」，要自订管道分组才看得见。</p>

  <p>语言策略只有一条铁律：英日中三语发布有利跨语言检索，但<em>日文版必须由母语者改写</em>，机翻的日文在日本读者眼中等于自报家门「我是外人」。</p>
</section>

<!-- ================= 柒 权威盖好之后，怎么被信任 ================= -->
<section id="s7">
  <div class="eyebrow"><span class="num">柒</span><span class="rule"></span></div>
  <h2>权威盖好之后，怎么被信任</h2>

  <p>到这里剧本都还算直观。但接下来有一个绕不开的问题：这个平台的评鉴要规模化，势必用上 AI。一个「AI 评陶艺」的东西，凭什么被人相信？米其林的密探吃了一百年才换来今天的信用，一个新平台的算法，第一天就要面对「你凭什么」。</p>

  <p>先看前人怎么处理「评分的信任」。<a class="ent" data-url="https://nuvomagazine.com/magazine/spring-2022/100-point-wine-rating-system">Robert Parker</a> 的葡萄酒百分制把公式摊开了——色泽几分、香气几分、余韵几分，人人可检验。结果呢？影响力大到整个波尔多为了讨好他的口味改酿酒，这现象有个专有名词叫 <a class="ent" data-url="https://grapecollective.com/articles/death-of-the-100-point-system">Parkerization</a>。公开公式带来可检验性，也带来被批判和被迎合的风险。米其林走另一个极端：五大标准公开，但评分流程完全黑箱，靠百年品牌和匿名密探制度撑住信任——这条路新平台学不来，因为黑箱需要历史信用来抵押，而新平台没有。</p>

  <p>中间解是存在的，而且就在第伍节提过的清酒赛场上：IWC 和 Kura Master 公开类别、公开流程、公开评审团构成，但不公开逐杯分数。金融圈的信用评级机构走得更远——<a class="ent" data-url="https://www.moodys.com/web/en/us/insights/methodologies-and-models.html">Moody's</a> 把评级方法整份文档公开、改版前还对市场征询意见；欧盟监管机构 <a class="ent" data-url="https://www.esma.europa.eu/sites/default/files/library/esma71-99-478_public_notice_moodys_germany_and_moodys_united_kingdom.pdf">ESMA</a> 甚至因为 Moody's 没把方法标示清楚而开罚。消息很一致：<em>公开维度和方法、保留细部权重、搭配定期回顾与申诉管道</em>——这是评分机构信任设计的最适区间。</p>

  <p>那人到底什么时候愿意相信算法的判断？信任科学的研究给了几个有点反直觉的答案。「算法厌恶」和「算法欣赏」<a class="ent" data-url="https://aisel.aisnet.org/ecis2020_rp/168/">同时存在</a>，取决于情境：看得到过往准确率、听得懂运作原理的时候，人反而偏好算法；在投资这种严肃决策里，六成六的受试者选算法而不选同样准的人类。最微妙的是 human-in-the-loop（人类在回路中，也就是「AI 打分、人来把关」）：让人可以覆核 AI 的建议，会<a class="ent" data-url="https://pmc.ncbi.nlm.nih.gov/articles/PMC10857587/">显著提升用户的信任</a>——但实验同时显示，人类的手动调整往往让整体准确度变差。所以人审是信任设计，不是精度保证，该用在刀口上：只覆核上榜单、进交易的高影响输出，并签名负责。</p>

  <p>法规这边，三个市场的方向惊人地一致，就是两个字：揭露。欧盟 <a class="ent" data-url="https://artificialintelligenceact.eu/article/50/">AI Act 第 50 条</a>要求跟人交互的 AI 要表明身份、AI 生成的内容要以机器可读方式标记，2026 年还配了一份<a class="ent" data-url="https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content">透明度实务守则</a>当合规路径。<a class="ent" data-url="https://digital.nemko.com/regulations/ai-regulation-japan">日本的 AI 促进法</a>走软法路线，靠 METI 指引与既有法规把关；要特别注意的是日本的「公表权」——<a class="ent" data-url="https://www.nakapat.gr.jp/wp-content/uploads/2023/07/【英訳】20230718_Right-of-Publicity.pdf">Pink Lady 案</a>确立了擅用名人姓名肖像吸客可以求偿，所以「艺术家监修的 AI 评鉴法」必须有明确合约授权，而且不能让消费者误以为评语出自艺术家本人。<a class="ent" data-url="https://www.theleveragedyears.com/ai-regulation-news/taiwan-ai-content-labeling-i-am-ai-duty-2026">台湾的人工智能基本法</a>则预告了「我是 AI」的标示义务，细则待订。</p>

  <p>不揭露的下场，已经有两具尸体可以看。<a class="ent" data-url="https://www.businessinsider.com/sports-illustrated-ran-articles-by-fake-ai-generated-writers-report-2023-11">Sports Illustrated</a> 用 AI 生成的假头像、假作者发文，被抓包后删文、换首席执行官，品牌信用重伤。<a class="ent" data-url="https://www.wired.com/story/cnet-published-ai-generated-stories-then-its-staff-pushed-back/">CNET</a> 悄悄发了七十多篇 AI 理财文，揭露藏在鼠标 hover 才看得到的地方，结果七十七篇里四十一篇要更正。注意：两案烧起来的点都不是「用了 AI」，而是「假装没用」。反过来说，目前还没有任何一个「标示清楚的 AI 评论者」因此被追究——风险在伪装，不在工具。</p>

  <p>把这些收敛成设计，就是四件事。命名以方法为主角，叫「平台审美评鉴法・艺术家监修」，不造一个拟人的 AI 评论家人格。每则评语配固定的四行揭露：这是 AI 生成、依据哪套公开方法、不代表任何机构立场、高影响内容经过谁的人工覆核。发布分级：AI 初评先挂「未认证」，上首页或榜单才经人审签名。最后，方法要有版本号和公开的更正纪录——CNET 的教训是，悄悄改比改错更致命。</p>
</section>

<!-- ================= 捌 信任会怎么被攻击 ================= -->
<section id="s8">
  <div class="eyebrow"><span class="num">捌</span><span class="rule"></span></div>
  <h2>信任会怎么被攻击</h2>

  <p>盖灯塔之前，最好先研究过去一百年里，灯塔是怎么被拆掉的。评价体系的历史，就是一部被攻击的历史，而且剧本重复率高得惊人。</p>

  <p>最便宜的攻击是假评论。有人用假照片和朋友刷的五星评论，把一间根本不存在的餐厅——自家后院的工具棚——刷成 <a class="ent" data-url="https://theconversation.com/believe-nothing-the-hoax-of-the-shed-at-dulwich-91211">TripAdvisor 上的伦敦第一名</a>。The Shed at Dulwich 这场恶作剧之后，「真实体验」四个字在 TripAdvisor 身上再也立不直。<a class="ent" data-url="https://www.aboutamazon.com/news/policy-news-views/amazon-continues-to-take-action-against-fake-review-brokers">Amazon</a> 至今还在跟付费好评仲介缠讼。第二种攻击更阴：<a class="ent" data-url="https://www.latimes.com/business/la-fi-yelp-ratings-20140905-story.html">Yelp</a> 被大量商家指控「不买广告就让负评浮上来」——法院最后认定不构成勒索，Yelp 打赢了官司，却没打赢观感，「评分是销售杠杆」的怀疑跟了它十几年。法律上的清白，救不回市场上的信任。</p>

  <p>第三种是买奖。经济学者 Robin Goldstein 虚构了一间餐厅、附上一份故意挑烂酒的酒单，付了 250 美元申请费——然后拿到了 <a class="ent" data-url="https://hoaxes.org/archive/permalink/wine_spectator_hoaxed">Wine Spectator 的卓越奖</a>。一张奖牌的成本被公开那天，那个奖就死了。第四种最结构性：信用评级机构在 2008 年金融危机前采「发行人付费」——被评的人付钱给评分的人——结果就是次贷商品被灌出一堆高评等，泡沫破掉时整个行业陪葬。第五种攻击瞄准证书本身：纽约 165 年的老画廊 <a class="ent" data-url="https://en.wikipedia.org/wiki/Knoedler">Knoedler</a> 长年卖出伪造的 Rothko 和 Pollock，靠的就是不透明的鉴定叙事，东窗事发后一夕倒闭；日本法院也审过多起<a class="ent" data-url="https://www.courts.go.jp/assets/hanrei/hanrei-pdf-80233.pdf">伪造絵画鉴定证书</a>的案子——鉴定书可以是信任的凭证，也可以是诈欺的道具。</p>

  <p>还有两种要记下：付钱洗白内容——Wikipedia 曾一次<a class="ent" data-url="https://www.bbc.com/news/technology-34127466">封锁 381 个收费代写的假帐号</a>；以及寄生 SEO——垃圾内容付费挂在高信誉网站下借壳排名，Google 已经<a class="ent" data-url="https://blog.google/company-news/inside-google/company-announcements/defending-search-users-from-parasite-seo-spam/">明文列为重点打击对象</a>。连 Parker 本人晚年都因为代表在波尔多兼任酒庄顾问，被<a class="ent" data-url="https://www.nytimes.com/2003/08/10/world/accusations-rise-from-wine-cellars-of-bordeaux.html">质疑利益输送</a>。攻击面就这么多，一张表看完，全放在附录的 Exploit 对照卡里。</p>

  <blockquote class="pull">当所有东西都是 90 分以上，分数就失去了意义——这是酒评论坛里玩家的第一条民间法则。他们用广告重叠度抓买榜，用「这个评论者从不给负评」抓收买，用「评审匿不匿名、自不自费」判断一个奖值不值得信。<cite>—— Reddit 酒类与餐饮社群的 folk heuristics，完整清单见附录</cite></blockquote>

  <p>防守的答案，其实已经被两家机构写好了。<a class="ent" data-url="https://www.consumerreports.org/about-us/policies-and-financials/no-commercial-use-policy/">Consumer Reports</a> 的模型最干净：不收广告、匿名自购商品测试、禁止企业拿它的评分打广告。<a class="ent" data-url="https://www.nytimes.com/wirecutter/reviews/how-wirecutter-makes-money/">Wirecutter</a> 证明了有佣金也能活：推荐由编辑部独立决定，商业团队只在推荐定案后处理分润链接，两边隔一道防火墙。反例也有判例等级的：<a class="ent" data-url="https://www.sec.gov/newsroom/press-releases/2020-112">Morningstar 被 SEC 罚 350 万美元</a>，罪名就是让分析师同时跑业务。所以裁决很硬：评分与排序的决定权，制度上必须跟任何付费收入隔离；付费可以买到「清楚标示的广告」，永远买不到排名。这条线一旦模糊过一次，前面九种攻击随便哪一种都能把平台钉死<span class="unverified">结构推演・未查证</span>。</p>
</section>

<!-- ================= 玖 先窄后宽的路 ================= -->
<section id="s9">
  <div class="eyebrow"><span class="num">玖</span><span class="rule"></span></div>
  <h2>先窄后宽的路</h2>

  <p>最后一个问题：不拥有交易的人，真的能成为定价权威吗？历史说可以，而且例子多到可以归纳出公式。<a class="ent" data-url="https://www.kbb.com/company/history/">Kelley Blue Book</a> 从 1920 年代一张二手车收购价目表起家，二战时被美国政府拿去当价格上限的依据，从此变成「蓝皮书价」。<a class="ent" data-url="https://www.zillow.com/zestimate/">Zillow</a> 用公开地籍数据加机器学习，让全美国人看房先看 Zestimate。<a class="ent" data-url="https://www.hagerty.com/valuation-toolsAbout">Hagerty</a> 把经典车估价跟保险绑在一起，<a class="ent" data-url="https://www.psacard.com/priceguide">PSA</a> 把卡片价格指南跟鉴定评级绑在一起。共同点不是数据独家——是<em>长期累积、被制度采用、跟内核产品绑定</em>，三者叠起来才是护城河。反例同样清楚：Zillow 拿自家估价直接下场买房，亏掉几十亿美元收场——估价被当成交易决策的那一刻，模型偏差会被杠杆放大。所以早期绝不做价格保证。</p>

  <p>那交易数据本身是不是一门好生意？看帐本最诚实。Artnet 的数据业务毛利高，但只占营收三分之一，全公司 2023 年还是小亏；Artprice 的年营收，第三方估计约八百多万欧元。而 Masterworks 干脆把三十万笔数据库免费开放——因为它真正赚钱的是投资产品，数据库的工作是让人相信「艺术是可以被定价的资产」。</p>

  <figure class="viz">
    <p class="viz-title">Artnet 2023 年收入结构</p>
    <p class="viz-sub">单位：百万欧元 · 总营收约 2,335 万欧元，当年净损约 100 万欧元</p>
    <svg viewBox="0 0 640 190" role="img" aria-label="横向长条图：Artnet 2023 年收入 Media 约 860 万欧元、Marketplace 约 800 万、Data 约 670 万，数据业务约占三分之一">
      <text class="ax" x="142" y="49" text-anchor="end">Media 媒体</text>
      <rect x="154" y="34" width="396" height="24" rx="4" fill="var(--s1)"/>
      <text class="val" x="558" y="50">8.6</text>
      <text class="ax" x="142" y="109" text-anchor="end">Marketplace 交易</text>
      <rect x="154" y="94" width="369" height="24" rx="4" fill="var(--s1)"/>
      <text class="val" x="531" y="110">8.0</text>
      <text class="ax" x="142" y="169" text-anchor="end">Data 数据</text>
      <rect x="154" y="154" width="309" height="24" rx="4" fill="var(--s2)"/>
      <text class="val" x="471" y="170">6.7</text>
      <text class="note-flag" x="504" y="170">← ≈ 收入的 1/3</text>
    </svg>
    <figcaption><b>Takeaway：</b>连坐拥 1,700 万笔拍卖纪录的 Artnet，数据订阅也只是门「中等量级的利基生意」。交易数据的真正价值是信任护城河与高毛利 B2B 产品，不是一开始就能收钱的金矿——Masterworks 把数据库免费开放，就是想通了这一点。</figcaption>
  </figure>

  <p>接下来是广与窄的抉择。诱惑很明显：真空这么大，何不一口气占住「日本艺术」甚至「东方艺术」的大词？证据泼了冷水。<a class="ent" data-url="https://www.hawaii.edu/news/2022/05/13/gizmodo-wirecutter-founder-speaks-at-uh/">Wirecutter</a> 从几样 3C 产品做到全品类，<a class="ent" data-url="https://ahrefs.com/blog/healthline-seo-case-study/">Healthline</a> 靠一个疾病一个主题群打成健康内容巨头——成功的内容权威几乎都从窄处起家。一开始就铺开的 <a class="ent" data-url="https://www.forbes.com/sites/natalierobehmed/2013/09/06/why-artsy-is-succeeding-in-putting-the-art-world-online/">Artsy</a> 呢？它靠的是巨额融资加五百家顶级画廊供料，这个起手式复制不起。AI 检索时代的<a class="ent" data-url="https://growganic.io/geo">量化研究</a>更直接：网域权重只解释不到 4% 的引用差异，七成七被 AI 引用的页面来自小网站，真正的门槛是一个主题至少八到十二篇互连的深度内容。小而深，赢过大而浅。别忘了 e-yakimono.net——一个人的窄站，25 年后还被 AI 引用着。</p>

  <p>那窄要窄在哪里？研究把四个候选切口摊开来评分，加上一个混合方案：品牌用「日本艺术／东方艺术」的大框架，深度先砸在两个旗舰——当代日本陶艺（W1，Jason 的主场）和日本艺术投资（W4，付费意愿最强的客群）。</p>

  <figure class="viz">
    <p class="viz-title">四个切口与混合方案的评分矩阵</p>
    <p class="viz-sub">1–5 分，5 为最优 · 「切入空间」分数愈高代表现有引用竞争愈少 · 需求栏多为推估<span style="white-space:nowrap">（未查证）</span></p>
    <div class="tablewrap">
    <table class="heat">
      <thead>
        <tr><th class="rowh">候选切口</th><th>需求</th><th>切入空间</th><th>创办人适配</th><th>可变现受众</th><th>扩张路径</th></tr>
      </thead>
      <tbody>
        <tr><th class="rowh">W1 当代日本陶艺／工芸</th><td class="h3">3</td><td class="h4">4</td><td class="h5">5</td><td class="h4">4</td><td class="h4">4</td></tr>
        <tr><th class="rowh">W2 全日本当代艺术</th><td class="h4">4</td><td class="h2">2</td><td class="h3">3</td><td class="h4">4</td><td class="h3">3</td></tr>
        <tr><th class="rowh">W3 东方艺术（广域）</th><td class="h4">4</td><td class="h2">2</td><td class="h3">3</td><td class="h3">3</td><td class="h4">4</td></tr>
        <tr><th class="rowh">W4 日本艺术收藏／投资</th><td class="h4">4</td><td class="h3">3</td><td class="h4">4</td><td class="h5">5</td><td class="h4">4</td></tr>
        <tr><th class="rowh">Hybrid：品牌广＋W1/W4 深</th><td class="h4">4</td><td class="h5">5</td><td class="h5">5</td><td class="h5">5</td><td class="h5">5</td></tr>
      </tbody>
    </table>
    </div>
    <figcaption><b>Takeaway：</b>Hybrid 是唯一每一栏都亮的列——品牌可以广，深度必须先砸在 W1＋W4。这正是「米其林」的原始配方：红色封面是给全法国的，但第一颗星，从巴黎的餐桌开始发。</figcaption>
  </figure>

  <p>路径于是变成一张五年地图。头半年立品牌与架构：大框架挂「东方艺术」，底下开两个旗舰专区。第六到十八个月做内容权威：窑场指南、陶艺家文件、收藏实务，每个主题群至少八到十二篇互连，同步监测 AI 引用率。第一到第三年，开始在评论里附上「参考成交价」表格，内部悄悄累积拍卖事实数据库。第三到五年，数据过几千笔、有足够的重复成交后，推出订阅式价格数据库和指数，卖给保险公司、博物馆、银行——Artprice 和 Artnet 的帐本证明这是门年收数百万欧元等级的 B2B 生意。五年之后，才考虑轻型的交易撮合。</p>

  <p>收数据的法律红线要先画好。日本著作权法不保护「事实」——成交价、日期、尺寸这些字段可以合法整理——但拍卖行的<a class="ent" data-url="https://www.sbiartauction.co.jp/pdf/en/terms/terms_of_use-en.pdf">网站条款</a>明文禁止爬虫。前车之鉴血淋淋：Christie's 曾<a class="ent" data-url="https://www.artforum.com/news/artprice-files-complaint-against-christies-193635/">控告 Artprice</a> 完整重制两千三百份拍卖目录，Heritage Auctions 则告了 Christie's 子公司 <a class="ent" data-url="https://www.nbcdfw.com/news/local/auction-houses-face-off-in-website-data-scraping-lawsuit/2033762/">Collectrium</a> 爬走近三百万笔拍品数据转售。安全的路是人工或半人工摘取事实字段、自建结构、标明出处——慢，但走得远。至于更诱人的捷径：交易保证、托管、代币化，全部属于「数据与团队成熟前不碰」的清单<span class="unverified">部分属结构推演・未查证</span>。</p>

  <p>回到开头那个旧金山的收藏者。五年后他站在同一件青瓷前面，拿出手机，这次查得到了：艺术家的谱系、作品的评鉴、近三年的成交纪录，三个问题一页答完。而签在那套评鉴方法上的名字，是一个从体系内走出来的台湾陶艺家。米其林出现之前，没有人知道哪家餐厅值得绕路。之后的一百年，全世界跟着它的星星旅行。</p>
</section>

<!-- ================= 附录 ================= -->
<section id="appendix">
  <div class="eyebrow"><span class="num">附</span><span class="rule"></span></div>
  <h2>查阅用参考卡</h2>
  <p>下面是三份补充研究里工具性最强的部分，做成卡片方便日后查阅。点开展开。标注「未查证」处为原研究之标记，照实保留。</p>

  <div class="cards">

  <details class="card">
    <summary><span class="tag">EXPLOIT</span>九种信任攻击对照卡</summary>
    <div class="card-body">
      <p>按「可能性 × 伤害」排序。「对我们的版本」与「对策」属结构推演，原研究均标未查证。</p>
      <div class="tablewrap"><table>
        <tr><th>攻击型态</th><th>历史案例</th><th>对本平台的版本</th><th>对策要点</th></tr>
        <tr><td><b>1. 假评论农场</b></td><td>The Shed at Dulwich 假餐厅刷上 TripAdvisor 伦敦第一；Amazon 长期诉讼打假评仲介</td><td>评价农场向画廊、老师兜售五星好评包</td><td>实名＋购买/参观证据验证；行为异常侦测；公开假评处置统计</td></tr>
        <tr><td><b>2. 评分被当销售杠杆</b></td><td>Yelp「不买广告负评浮上来」诉讼——法律胜诉、信任重伤</td><td>业务暗示付费策展可提升排名</td><td>业务人员不得碰排名逻辑；明文「付费不影响评分排序」；独立申诉管道</td></tr>
        <tr><td><b>3. 买奖／申请费驱动</b></td><td>Wine Spectator 卓越奖被 250 美元假餐厅攻破；World's 50 Best 招待文化</td><td>「年度艺术家」若收高额申请费即被视为广告</td><td>奖项免费或象征性收费；评审匿名且与商业隔离；公开入选与落选理由</td></tr>
        <tr><td><b>4. 发行人付费崩坏</b></td><td>2008 信评机构 issuer-pays 模式助长次贷泡沫</td><td>作品所有者付费鉴定＋同一组人决定认证等级</td><td>付费鉴定与公开评级拆开；鉴定收入不奖励评级人员</td></tr>
        <tr><td><b>5. 证书体系被伪造/俘虏</b></td><td>Knoedler 165 年老店因伪作案倒闭；日本伪造鉴定书判决；Salvator Mundi 争议</td><td>平台认证徽章被少数造假案连坐拖垮</td><td>多名独立专家交叉验证；鉴定书只写证据与不确定性；公开撤销机制</td></tr>
        <tr><td><b>6. 付费编辑洗白</b></td><td>Wikipedia 一次封锁 381 个收费代写帐号；Wiki-PR 事件</td><td>画廊付钱请代写公司灌吹捧内容</td><td>禁止未揭露付费写作；利益揭露字段；社群举报机制</td></tr>
        <tr><td><b>7. 寄生 SEO/内容农场</b></td><td>Google 明文打击 site reputation abuse</td><td>攻击者借高权重媒体养假权威再诱导我们引用</td><td>不挂载外部赞助内容；链接策略以原始数据为主</td></tr>
        <tr><td><b>8. 评论者被商业俘虏</b></td><td>Parker 代表兼任波尔多酒庄顾问遭质疑</td><td>重量级评论者兼任画廊顾问又给关键评等</td><td>利益申报；冲突时自动回避；多人共同决定等级</td></tr>
        <tr><td><b>9. Vanity awards</b></td><td>「付钱就有奖」产业造成奖项通膨（未查证）</td><td>默许付费拿徽章＝全站评级陪葬</td><td>彻底不做：任何奖项不保证入选、不打包销售</td></tr>
      </table></div>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">RISK</span>AI 评鉴风险表（风险 × 对策）</summary>
    <div class="card-body">
      <div class="tablewrap"><table>
        <tr><th>风险</th><th>可能性</th><th>对策</th></tr>
        <tr><td>被误认为代表某博物馆／评论家（冒充权威）</td><td>中偏高</td><td>不用他人机构名义命名；明确声明「非代表任何机构」；引用仅限「参考其公开标准」</td></tr>
        <tr><td>AI 身份未揭露或揭露过于隐蔽</td><td>中</td><td>所有输出明显标示 AI 身份；遵循 EU Art. 50 与台湾基本法；绝不学 CNET 藏在 hover</td></tr>
        <tr><td>模型偏误（偏好特定风格＝新 Parkerization）</td><td>高</td><td>定期比对 AI 评分与多元人审结果；公开偏误分析；方法说明中言明价值取向</td></tr>
        <tr><td>用户过度信任 AI 评语做重大决策</td><td>中</td><td>强调评语为参考；交易场景加入额外人工鉴定；教育过度信任风险</td></tr>
        <tr><td>Human-in-the-loop 流于形式</td><td>高</td><td>人审集中于榜单／交易等高影响输出；创建审查准则与稽核</td></tr>
        <tr><td>日本公表权（肖像／姓名）争议</td><td>中</td><td>与合作艺术家签明确授权合约；标示「监修方法」而非「个人评语」</td></tr>
        <tr><td>AI 法规不符（EU／台／日）</td><td>中</td><td>持续追踪三地细则；预先设计合规标示与记录</td></tr>
        <tr><td>数据错误导致评语失真</td><td>高</td><td>metadata 完整性检查；缺数据标示「暂定」；提供作品方补充管道</td></tr>
      </table></div>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">TEMPLATE</span>命名规则与四行揭露模板</summary>
    <div class="card-body">
      <p><b>命名：方法为主角，人格为次。</b>主名称用「〔平台名〕审美评鉴法」＋副标「〔艺术家名〕监修审美矩阵」；AI 名称低调（如「〔平台名〕评议 AI」），避免拟人化成评论家人格。与真人合作用共署格式：「〔艺术家〕×〔平台〕评鉴框架，由 AI 依此框架计算」。</p>
      <p><b>每则评语上方的固定揭露区块：</b></p>
      <ul>
        <li><b>行 1・身份：</b>「此评语由 AI 系统生成，非人类评论者。」（EU 用户加 AI-generated content 标记）</li>
        <li><b>行 2・方法：</b>「本系统依据〔艺术家〕与〔平台〕公开的审美评鉴法（链接）之可量化维度评估。」</li>
        <li><b>行 3・限制：</b>「本评语仅代表系统依公开方法之运算结果，不代表任何博物馆、学会或评论家之官方立场。」</li>
        <li><b>行 4・人审：</b>「榜单等重要标示均经专家审查确认；作者或机构可循此表单提出更正申请。」</li>
      </ul>
      <p><b>发布分级：</b>AI 评语缺省「未认证」→ 进首页／榜单／交易建议时才经人类审查委员会签名 →「已审核」。方法与模型建版本号，更正公开记录原因。</p>
      <p><b>引用而非冒充：</b>可写「维度设计启发自 IWC／Kura Master 的分类方式」并附「与上述机构无官方关系」；禁用「依米其林标准」「以 MoMA 标准训练」等语言，禁用他人商标。</p>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">DEFENSE</span>防御设计七原则（按证据强度排序）</summary>
    <div class="card-body">
      <ul>
        <li><b>1. 结构性独立：</b>评级／排序在制度上与抽佣、广告收入完全隔离（信评 issuer-pays 与 Morningstar 遭 SEC 罚款为反面教材；Consumer Reports 为正面标竿）。</li>
        <li><b>2. 匿名＋自费评审：</b>鉴定与评级人员对被评者匿名，样品与门票由平台统一支付，不受招待（Michelin／Consumer Reports 模式）。</li>
        <li><b>3. 公开方法论＋版本纪录：</b>公开标准、权重、数据源；每次修订留 changelog。</li>
        <li><b>4. 社群与同侪监督：</b>允许并鼓励外部批评平台评级，提供反驳管道，不压制负面讨论（Wikipedia／Reddit 模式）。</li>
        <li><b>5. 利益揭露与回避：</b>鉴定人与内核评论者定期申报利益；有冲突自动转由他人评级。</li>
        <li><b>6. 反滥用技术＋透明报告：</b>专门团队侦测假评论，定期对外发布侦测与处置统计（Amazon／Google SpamBrain 模式）。</li>
        <li><b>7. 禁止商业利用评级：</b>平台评级不得被销售广告直接引用，除非严格授权且保留撤销权（Consumer Reports 之 No Commercial Use Policy）。</li>
      </ul>
      <p>各原则之落地细节原研究标记未查证，属结构类推。</p>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">HEURISTICS</span>社群怎么判断「被买透了没」——folk heuristics 清单</summary>
    <div class="card-body">
      <ul>
        <li><b>广告重叠＝买榜信号：</b>榜单里反复出现同一批大广告客户，就被视为 pay-to-play。</li>
        <li><b>所有东西都 90+ 分就不可信：</b>分数通膨使评分失去区别力，被归类为行销工具。</li>
        <li><b>看评论者，不看品牌：</b>玩家长期比对具名评论者的纪录；「永远给高分」者被标记为 shill（收钱吹捧者）。</li>
        <li><b>商业化程度决定群众平台可信度：</b>无广告导向的社群（CellarTracker、Reddit）被视为比有官方评分＋商业合作的网站干净。</li>
        <li><b>看负评密度与语气：</b>负评极少且疑似被算法藏起来，反而触发警报。</li>
        <li><b>匿名 vs 非匿名评审：</b>匿名自费的 Michelin 密探被视为相对可信；已知评审、期待招待的 50 Best 被视为公关网络。</li>
        <li><b>Affiliate／业配要打折看：</b>大量分润链接、从不给强烈负评者，被归类为「娱乐内容，不是评测」。</li>
      </ul>
      <p>平台设计目标：让上述每一条 heuristic 检查我们时，都指向「干净」的结论。</p>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">CHECKLIST</span>让 AI 长期愿意引用的十项检查</summary>
    <div class="card-body">
      <ul>
        <li><b>1. 低错误率＋明确更正机制：</b>条目页设「更正记录」区；重大更正对外公告。</li>
        <li><b>2. 稳定 URL 与持久 ID：</b>每个作品、鉴定、评审人有不变的永久网址；改址用明确重定向。</li>
        <li><b>3. 结构化数据：</b>schema.org 的 CreativeWork／Review／Rating／Person＋JSON-LD；标记作者、日期、方法版本。</li>
        <li><b>4. E-E-A-T 信号：</b>公开鉴定人履历、出版、展历；争议作品并陈多位专家观点。</li>
        <li><b>5. 不当寄生 SEO 宿主：</b>不出售页面给外部内容挂载；控制外链品质。</li>
        <li><b>6. 透明标记赞助内容：</b>sponsored 标记；赞助内容与内核评级版面明确分隔。</li>
        <li><b>7. 被高信任来源引用：</b>争取学术、博物馆、公共机构的链接与引用。</li>
        <li><b>8. 编辑流程公开：</b>公开编辑方针、利益冲突政策、重要决策摘要。</li>
        <li><b>9. 人类参与度：</b>避免无差别 AI 生成内容；标示人工审稿责任者。</li>
        <li><b>10. 机器可读的反滥用信号：</b>公开反滥用政策与运行数据。</li>
      </ul>
      <p>多数项目之效果量原研究标记未查证。</p>
    </div>
  </details>

  <details class="card">
    <summary><span class="tag">CONFIDENCE</span>三份研究的信心评估摘要</summary>
    <div class="card-body">
      <div class="tablewrap"><table>
        <tr><th>结论</th><th>信心</th><th>还缺什么证据</th></tr>
        <tr><td>「方法透明＋清楚标示 AI＋共署真人方法」是最佳信任路线</td><td>85%</td><td>缺「AI 艺评人格」的直接 A/B 测试，需自做用户实验</td></tr>
        <tr><td>不应模仿 Michelin 式高度黑箱</td><td>80%</td><td>缺新平台用黑箱成功的反例研究（未查证）</td></tr>
        <tr><td>Human-in-the-loop 提升信任但须严防降低准确度</td><td>90%</td><td>艺术品评领域尚无实验</td></tr>
        <tr><td>风险集中在「未揭露的假专家」而非「标示清楚的 AI」</td><td>88%</td><td>需持续关注未来判例</td></tr>
        <tr><td>引用既有权威标准（声明非官方关系）法律风险可控</td><td>75%</td><td>建议取得各法域律师意见</td></tr>
        <tr><td>方法优先命名优于高度拟人化 AI 人格</td><td>70%</td><td>缺东亚艺术市场在地研究</td></tr>
        <tr><td>「品牌广＋数据窄」（Hybrid）策略</td><td>75%</td><td>缺实际关键字／AI 查找量；B2B 付费意愿未实测（未查证）</td></tr>
        <tr><td>历史 exploit 机制与代价之描述</td><td>85%</td><td>—（多有具名新闻与法院文档）</td></tr>
        <tr><td>Exploit「对我们的版本」与防御推演</td><td>60%</td><td>属结构类推，未有直接案例验证（未查证）</td></tr>
      </table></div>
    </div>
  </details>

  </div>
</section>

<!-- ================= 参考来源 ================= -->
<section id="sources">
  <div class="eyebrow"><span class="num">源</span><span class="rule"></span></div>
  <h2>参考来源</h2>
  <p>以下为本文与三份补充研究的全部来源网址，按主题分四组。每条均可点开预览、复制网址或另开分页。</p>
  <div class="src-group">
    <h3>一、市场真空与竞品扫描（原始研究）（48 条）</h3>
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
    <h3>二、AI 评鉴与信任研究（Q1–Q6）（115 条）</h3>
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
    <h3>三、信任攻击 Exploit 目录（105 条）</h3>
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
    <h3>四、定价权威 Bootstrap 前例研究（111 条）</h3>
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
  <p>日本艺术平台研究发现 · 交互式 Digest · 2026 年 7 月编制。本文集成四份研究素材：市场真空与竞品扫描、AI 评鉴信任研究（Q1–Q6）、信任攻击 Exploit 目录、定价权威 Bootstrap 前例研究。文中「未查证」标注均照原研究保留；凡未标注来源之推论，请以文末原始 URL 交叉验证。</p>
</footer>

</div><!-- /wrap -->

<!-- ================= modal ================= -->
<div class="modal-backdrop" id="modalBackdrop" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-label="网站预览窗口">
    <div class="modal-bar">
      <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="url-box"><input id="modalUrl" type="text" readonly value="" aria-label="网址"></span>
      <button class="mbtn" id="btnCardView" type="button" hidden>看导览卡</button>
      <button class="mbtn" id="btnCopy" type="button">复制网址</button>
      <a class="mbtn" id="btnOpen" href="#" target="_blank" rel="noopener noreferrer">开新分页 ↗</a>
      <button class="mbtn close" id="btnClose" type="button" aria-label="关闭">✕</button>
    </div>
    <div class="modal-stage">
      <div class="stage-hint">多数网站不允许被内嵌预览——若下方空白或出现错误页，请改用上方「复制网址」或「开新分页 ↗」。</div>
      <div class="stage-inner">
        <div class="iframe-fallback">
          <span class="glyph">◫</span>
          <span>此网站不允许内嵌预览——<br>用上方按钮复制网址，或开新分页前往。</span>
        </div>
        <iframe id="modalFrame" title="网站预览" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
        <div class="link-card" id="linkCard">
          <div class="lc-host" id="lcHost"></div>
          <div class="lc-title" id="lcTitle"></div>
          <div class="lc-desc" id="lcDesc"></div>
          <div class="lc-note">外部网站基于安全政策无法在此内嵌显示。上方「复制网址」可分享，「开新分页 ↗」直达原文。</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script id="linkCards" type="application/json">{"https://guide.michelin.com/th/en/to-the-stars-and-beyond-th":{"t":"米其林指南官方页：星级评鉴五大标准","d":"官方页面说明米其林星级由来，公开食材、技术、和谐、主厨个性、一致性五项评鉴标准，是理解评鉴逻辑的第一手依据。"},"https://news.artnet.com/market/beowolff-capital-artnet-takeover-2649474":{"t":"Artnet News报导：英资收购Artnet下市","d":"英国投资公司Beowolff Capital于2025年5月以约6,500–7,370万美元将Artnet私有化下市，艺术市场门户网站易主。"},"https://www.theartnewspaper.com/2025/05/27/european-american-investment-company-to-buy-artnet-and-take-it-private":{"t":"The Art Newspaper报导：Artnet收购下市案","d":"The Art Newspaper对欧美投资公司收购Artnet并将其私有化下市一事的报导，与Artnet News报导同一收购案。"},"https://www.theartnewspaper.com/2026/04/23/comment-|-how-viable-is-the-artnet-and-artsys-merger":{"t":"TAN评论：Artnet与Artsy合并可行性分析","d":"2026年4月评论文章分析Artnet与Artsy合并案是否可行，愿景是打造「艺术界的彭博社」，集成达1,800万笔拍卖纪录的数据库。"},"https://hyperallergic.com/art-movements-dozens-laid-off-at-artnet-and-artsy/":{"t":"Hyperallergic报导：Artnet Artsy合并后裁员","d":"报导Artnet与Artsy合并后两公司裁员数十人、关闭柏林办公室，并指出2025上半年营收较去年同期下滑12%。"},"https://www.prnewswire.com/news-releases/artmarketcom-double-digit-growth-in-q2-2025...302522441.html":{"t":"Artmarket.com官方新闻稿：2025年Q2营收成长","d":"Artmarket.com（Artprice）官方新闻稿宣布2025年第二季营收呈双位数成长；此网址为原始数据的节录版本。"},"https://www.prnewswire.com/news-releases/artmarketcom-publishes-its-32nd-artprice-annual-report...302708675.html":{"t":"Artprice第32届年度报告新闻稿","d":"Artprice第32届年报新闻稿，宣布与Perplexity AI合作推出混合订阅，并称2025年全球艺术市场成长12%，口径异于Art Basel/UBS报告；此为节录版网址。"},"https://docs.liveart.xyz/liveart/whitepaper/data-oracles-powering-a-transparent-rwa-market-on-liveart":{"t":"LiveArt白皮书：Data Oracles与RWA艺术市场","d":"LiveArt官方白皮书说明Data Oracles如何支撑实体资产代币化（RWA）艺术市场叙事，其$ART代币已于2025年9月上线。"},"https://www.myartbroker.com/mab-100":{"t":"MyArtBroker官方页：MAB100版画市场指数","d":"MyArtBroker官方介绍MAB100指数，此指数聚焦版画市场，作为观察版画类别价格走势的专门指针。"},"https://www.wallstreetzen.com/blog/masterworks-review/":{"t":"WallStreetZen评测：Masterworks平台介绍","d":"评测艺术品证券化平台Masterworks：Reg A+单件作品证券化、累计投资资本逾10亿美元，收费1.5%管理费加20%分润，次级市场需90天锁仓。"},"https://prtimes.jp/main/html/rd/p/000000478.000008833.html":{"t":"PR TIMES新闻稿：日本两大拍卖行合并","d":"PR TIMES新闻稿公告2025年4月Mainichi Auction与SBI Art Auction合并成立SBI Mainichi Art Holdings，为日本两大拍卖行集成案。"},"https://help.aucfan.com/hc/ja/articles/54235003362841":{"t":"aucfan说明页：二手行情数据库开通ChatGPT API","d":"aucfan官方说明文档介绍其作为日本最大二手行情数据库开通ChatGPT API的功能；aucfan仅为比价工具，并无评论评级层级。"},"https://news.artnet.com/market/japan-art-market-is-bigger-than-it-seems-report-2587823":{"t":"Artnet News：日本艺术市场比看起来更大","d":"Artnet News解读报告指出，2024年日本艺术市场规模约6.92亿美元、年增2%，对比全球市场同期下滑12%，凸显日本市场的相对韧性。"},"https://www.theartnewspaper.com/2025/01/07/japans-art-market-grew-11-since-the-pandemic-new-report-finds":{"t":"The Art Newspaper：日本市场疫后成长11%","d":"The Art Newspaper报导新研究发现，日本艺术市场2019至2023年累计成长11%，同期全球市场仅成长约1%，显示日本表现优于全球。"},"https://news.artnet.com/market/art-week-tokyo-2024-2565916":{"t":"Artnet News报导：Art Week Tokyo 2024","d":"Artnet News报导2024年Art Week Tokyo活动，指出日圆贬值带动外国藏家大举涌入东京参与艺术周活动与购藏。"},"https://www.artbasel.com/stories/japan-young-artists-collectors":{"t":"Art Basel专题：日本年轻艺术家与新世代藏家","d":"Art Basel专题报导聚焦日本年轻艺术家与新世代藏家的崛起，指出年轻藏家开始购入国际艺术家作品，显示收藏品味的世代转变。"},"https://artnewsjapan.com/article/14039":{"t":"ARTnews JAPAN：草间弥生拍卖纪录报导","d":"ARTnews JAPAN报导草间弥生作品拍卖纪录，指出其于香港拍场单件成交价达约8亿日圆等级，凸显国际拍场对其作品的高度追捧。"},"https://magazine.collet.am/98":{"t":"Collet杂志：日本国内拍场行情整理","d":"Collet杂志整理日本国内拍场行情，指出草间弥生作品在日本国内市场的拍卖纪录约为1亿日圆，与海外拍场价格落差明显。"},"https://www.mistore.jp/shopping/event/nihombashi_e/dentoukougei_50":{"t":"三越百货官方页：日本伝统工芸展活动","d":"三越百货官方活动页介绍于日本桥三越本店举办的日本伝统工芸展，展示其展览、验证、销售三合一的传统工艺推广体系。"},"https://www.artagenda.jp/exhibition/detail/5891":{"t":"Art Agenda展览页：台日陶艺文化交流特展","d":"Art Agenda介绍岐阜県现代陶芸美术馆与莺歌陶瓷博物馆的文化交流，记录2021年「台湾现代陶芸の力」特展内容。"},"https://www.meti.go.jp/policy/mono_info_service/mono/nichiyo-densan/index.html":{"t":"経済产业省官方：伝统的工芸品指定制度","d":"経済产业省官方页面说明伝统的工芸品指定制度与标章规范，此制度仅限日本国内具百年历史的产地申请认定。"},"https://www.bunka.go.jp/seisaku/bunkazai/shokai/mukei/":{"t":"文化庁官方：重要无形文化财认定制度","d":"文化庁官方页面说明重要无形文化财（人间国宝）的行政认定制度，此认定制度并不对外国个人开放申请。"},"https://www.caa.go.jp/policies/policy/representation/fair_labeling/representation_regulation/misleading_representation":{"t":"消费者庁官方：优良误认表示规范说明","d":"消费者庁官方页面说明景品表示法中的「优良误认表示」规范，明定将商品或服务夸大成比实际更好即构成违法。"},"https://kuramaster.com/ja/entry-requirements/regulation/":{"t":"Kura Master官方规则页：日本酒评选制度","d":"Kura Master官方规则页公开由法国人主办的日本酒评选类别与实施规则，证明外国评审团评鉴日本传统产业可被市场接受。"},"https://www.internationalwinechallenge.com/Articles/sake-judging-and-awards.html":{"t":"IWC国际葡萄酒挑战赛清酒评审制度说明","d":"官方说明清酒部门采两轮盲评，至少12名评审与共同主席复审，并设金银铜奖与Trophy制度，可作为评审流程权威依据。"},"https://toobi-tocfa.or.jp/about/":{"t":"东美鉴定评価机构官方信任机制说明","d":"官方说明信任基础来自公开委员会组成与定期外部审查，而非单张证书本身，可作为鉴定机构公信力评估参考。"},"https://www.nihonkogeikai.or.jp/about/":{"t":"日本工芸会正会员资格制度官方说明","d":"官方说明正会员资格门槛，须入选日本伝统工芸展达4次以上等条件，可作为理解工艺家会员制度与资历认定的依据。"},"https://www.ntcri.gov.tw/":{"t":"国立台湾工艺研究发展中心官方网站","d":"台湾工艺领域的官方对口机构网站，提供工艺政策、辅导与资源信息，是了解台湾工艺官方立场与资源的入口。"},"https://bijutsu.press/books/5531/":{"t":"美术手帖2025年1月号现代陶芸特辑书志页","d":"日本美术手帖2025年1月号的书志页，主题为「现代の陶芸」特辑，可作为查找该期陶艺专题内容与出版信息的来源。"},"https://en.wikipedia.org/wiki/Japanese_pottery_and_porcelain":{"t":"维基百科日本陶瓷与瓷器条目页面","d":"英文维基百科关于日本陶瓷的条目，内容涵盖历史与工艺概况，是目前AI回答日本陶艺相关问题时常被引用的主要来源之一。"},"https://wearejapan.com/articles/discover-six-new-generation-japanese-ceramic/":{"t":"We Are Japan新世代陶艺家专题报导","d":"介绍六位新世代日本陶艺家的观光媒体专题文章，是目前这类媒体内容占据AI引用位置、而非产业权威来源的实例。"},"https://www.frase.io/blog/what-is-generative-engine-optimization-geo":{"t":"Frase博客GEO生成式引擎优化入门","d":"Frase博客介绍GEO（生成式引擎优化）概念与方法论，说明如何让内容更容易被AI生成式引擎引用，适合作为入门参考。"},"https://presenc.ai/research/state-of-llms-txt-2026":{"t":"Presenc研究llms.txt采用现况报告","d":"Presenc研究指出llms.txt采用率约10-15%，Anthropic与Perplexity已支持、Google未支持，效果适度但可测量。"},"https://siftly.ai/blog/tools-measure-citation-rates-ai-generated-content-brands-2026":{"t":"Siftly品牌AI引用率追踪工具比较","d":"Siftly比较品牌AI引用率追踪工具，列出Semrush AI Visibility月费99美元、Peec AI月费89欧元等价格。"},"https://nuvomagazine.com/magazine/spring-2022/100-point-wine-rating-system":{"t":"NUVO杂志解析Parker百分制评分公式","d":"NUVO杂志拆解Robert Parker百分制的公开构成，包含50分基础分、色泽5分、香气15分、风味余韵20分、整体10分，是了解评分公式细节的来源。"},"https://grapecollective.com/articles/death-of-the-100-point-system":{"t":"Grape Collective批判百分制评分文章","d":"Grape Collective评论文章标题为「百分制之死」，批判Parker评分制度导致葡萄酒风格趋同的Parkerization现象。"},"https://www.moodys.com/web/en/us/insights/methodologies-and-models.html":{"t":"Moody's官方评级方法论公开页面","d":"官方公开评级方法文档，并在方法改版前对市场征询意见，可作为评分机构方法透明化实务的标竿案例。"},"https://www.esma.europa.eu/sites/default/files/library/esma71-99-478_public_notice_moodys_germany_and_moodys_united_kingdom.pdf":{"t":"欧盟ESMA对Moody's开罚公告PDF文档","d":"欧盟监管机构ESMA公告文档，说明因Moody's未清楚标示评级方法而遭开罚，显示方法揭露在监管上是硬性要求而非选项。"},"https://aisel.aisnet.org/ecis2020_rp/168/":{"t":"ECIS 2020算法厌恶文献综述论文","d":"ECIS 2020学术文献综述，集成29篇论文、84个实验探讨算法厌恶与算法欣赏现象，结论指出效果高度取决于情境。"},"https://pmc.ncbi.nlm.nih.gov/articles/PMC10857587/":{"t":"PMC医学文献人机协作覆核研究","d":"PMC医学文献库收录的实验研究，发现人类覆核AI结果能提升用户信任与采纳意愿，但人工调整往往反而降低整体准确度。"},"https://artificialintelligenceact.eu/article/50/":{"t":"欧盟AI Act第50条透明义务条文全文","d":"欧盟AI Act第50条官方条文，规定与人交互的AI系统须表明身份，AI生成内容须附上机器可读标记，是透明义务的法源依据。"},"https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content":{"t":"欧盟AI生成内容透明度实务守则官方页","d":"欧盟执委会官方页面，发布2026年AI生成内容透明度实务守则，自2026年8月2日起可作为业者合规证明的路径之一。"},"https://digital.nemko.com/regulations/ai-regulation-japan":{"t":"Nemko解析日本2025年AI促进法","d":"Nemko Digital解说日本2025年AI促进法，指出其采创新优先原则、以软法指引为主，且未设直接罚则，与欧盟硬法路线不同。"},"https://www.nakapat.gr.jp/wp-content/uploads/2023/07/【英訳】20230718_Right-of-Publicity.pdf":{"t":"日本律师事务所パブリシティ権英译数据","d":"日本律师事务所英译PDF数据，说明パブリシティ権（公表权）与Pink Lady案最高裁判例，指出擅用名人姓名肖像吸客可能须负赔偿责任。"},"https://www.theleveragedyears.com/ai-regulation-news/taiwan-ai-content-labeling-i-am-ai-duty-2026":{"t":"台湾AI基本法我是AI标示义务法规动态","d":"法规动态分析文章，说明台湾《人工智能基本法》预告将订定「我是AI」标示义务，惟具体施行细则仍待主管机关另行订定。"},"https://www.businessinsider.com/sports-illustrated-ran-articles-by-fake-ai-generated-writers-report-2023-11":{"t":"Business Insider揭露SI造假作者","d":"Business Insider报导揭露Sports Illustrated曾用AI生成的假头像与假作者名义发布文章，事件曝光后删文并更换CEO，重创品牌信誉。"},"https://www.wired.com/story/cnet-published-ai-generated-stories-then-its-staff-pushed-back/":{"t":"WIRED深度报导CNET悄悄发布AI文章","d":"WIRED深度报导指出CNET悄悄发布70余篇AI生成理财文章，作者标示藏在鼠标hover效果中，77篇里有41篇事后需要更正。"},"https://theconversation.com/believe-nothing-the-hoax-of-the-shed-at-dulwich-91211":{"t":"The Conversation分析餐厅诈评丑闻","d":"The Conversation分析文章，讲述有人用假评论把不存在的餐厅刷成TripAdvisor伦敦排名第一的恶作剧事件。"},"https://www.aboutamazon.com/news/policy-news-views/amazon-continues-to-take-action-against-fake-review-brokers":{"t":"亚马逊官方声明：打击付费假评论仲介行动","d":"亚马逊官方政策说明，指出将持续通过诉讼与技术手段追查并打击专门贩售假评论的仲介商，显示平台端对评论造假问题的长期治理立场。"},"https://www.latimes.com/business/la-fi-yelp-ratings-20140905-story.html":{"t":"LA Times报导：Yelp负评与广告争议诉讼","d":"洛杉矶时报报导商家控诉Yelp「不买广告负评就浮上版面」，法院虽认定不构成勒索，但案件凸显平台评论排序机制对商家信任的长期伤害。"},"https://hoaxes.org/archive/permalink/wine_spectator_hoaxed":{"t":"Museum of Hoaxes文件：酒评奖项恶搞事件","d":"记录学者Robin Goldstein虚构一间根本不存在的餐厅，仅凭250美元申请费就骗到Wine Spectator卓越奖，揭露付费荣誉奖项的公信力漏洞。"},"https://en.wikipedia.org/wiki/Knoedler":{"t":"维基百科：Knoedler画廊伪画丑闻始末","d":"记载纽约165年老字号画廊Knoedler因长年贩售伪造Rothko、Pollock等名家作品而倒闭的完整经过，涉案总额约8,000万美元。"},"https://www.courts.go.jp/assets/hanrei/hanrei-pdf-80233.pdf":{"t":"日本裁判所判决书：伪造绘画鉴定证书案","d":"日本法院公开的民事判决原文，处理伪造绘画鉴定证书相关纠纷的原始判决内容，显示鉴定证书本身也可能被当作诈欺工具使用。"},"https://www.bbc.com/news/technology-34127466":{"t":"BBC报导：维基百科封锁代写宣传假帐号","d":"BBC报导维基百科一次性封锁381个收费代写企业宣传条目的sock puppet假帐号，反映百科内容置入行销的规模与平台反制作为。"},"https://blog.google/company-news/inside-google/company-announcements/defending-search-users-from-parasite-seo-spam/":{"t":"Google官方博客：打击寄生型SEO政策","d":"Google官方说明打击Parasite SEO的政策方向，锁定付费挂靠在高信誉网站上、借此借壳排名的操作手法进行治理与清查。"},"https://www.nytimes.com/2003/08/10/world/accusations-rise-from-wine-cellars-of-bordeaux.html":{"t":"纽约时报2003年报导：酒评利益冲突质疑","d":"报导Robert Parker代表同时兼任波尔多酒庄顾问一事引发的利益冲突质疑，凸显权威酒评体系中评鉴与商业角色重叠的风险。"},"https://www.consumerreports.org/about-us/policies-and-financials/no-commercial-use-policy/":{"t":"Consumer Reports官方：不收广告测试政策","d":"Consumer Reports官方说明其No Commercial Use Policy，坚持不接受广告、以匿名自购方式测试产品，并禁止企业将其评分用于广告宣传。"},"https://www.nytimes.com/wirecutter/reviews/how-wirecutter-makes-money/":{"t":"Wirecutter官方说明：编辑商业防火墙机制","d":"Wirecutter官方文档说明推荐内容完全由编辑部独立决定，商业团队仅在产品定案后处理分润链接，创建编辑与营收之间的防火墙。"},"https://www.sec.gov/newsroom/press-releases/2020-112":{"t":"SEC官方新闻稿：Morningstar遭罚款案","d":"美国证管会官方新闻稿说明因分析师同时参与销售与市场拓展工作，对Morningstar处以350万美元罚款，涉及评等机构角色冲突问题。"},"https://www.kbb.com/company/history/":{"t":"Kelley Blue Book官方历史：蓝皮书价由来","d":"KBB官方历史说明其自1926年以价目表起家，二战期间曾被美国政府采用作为价格上限依据，逐步演变成业界通称的「蓝皮书价」。"},"https://www.zillow.com/zestimate/":{"t":"Zillow官方说明：Zestimate自动估价机制","d":"Zillow官方文档说明Zestimate运作原理，结合公开地籍税务数据与机器学习模型进行自动估价，并免费开放使用以累积信任与流量资产。"},"https://www.hagerty.com/valuation-toolsAbout":{"t":"Hagerty官方说明：经典车估价工具方法","d":"Hagerty官方页面说明其经典车估价工具集成保险投保价、拍卖结果与实地勘车数据，并与旗下保险产品紧密绑定运作。"},"https://www.psacard.com/priceguide":{"t":"PSA官方价格指南：认证卡历史成交定价","d":"PSA官方价格指南只采认证卡片的历史拍卖实现价作为定价依据，显示其定价权威与鉴定评级服务紧密绑定的商业模式。"},"https://www.hawaii.edu/news/2022/05/13/gizmodo-wirecutter-founder-speaks-at-uh/":{"t":"夏威夷大学报导：Wirecutter创办人分享历程","d":"报导Wirecutter创办人Brian Lam谈及公司从少数3C产品的niche起家，后续以3,000万美元将公司卖给纽约时报的创业历程。"},"https://ahrefs.com/blog/healthline-seo-case-study/":{"t":"Ahrefs案例研究：Healthline健康搜索称霸策略","d":"Ahrefs案例研究分析Healthline以疾病主题群内容布局搭配医学专业审查，称霸健康类搜索结果，月访客量超过9,600万人次。"},"https://www.forbes.com/sites/natalierobehmed/2013/09/06/why-artsy-is-succeeding-in-putting-the-art-world-online/":{"t":"Forbes 2013报导：Artsy广布局起家策略","d":"Forbes报导指出Artsy从创立初期就采取broad路线，靠大额融资与500多间顶级画廊供料创建规模，此起手式门槛高、难以复制。"},"https://growganic.io/geo":{"t":"Growganic研究：AI引用与网域权重关联性","d":"Growganic量化研究发现网域权重只能解释不到4%的AI引用差异，且77%被引用页面来自DA低于50的小型网站，挑战传统SEO权重迷思。"},"https://www.sbiartauction.co.jp/pdf/en/terms/terms_of_use-en.pdf":{"t":"SBI Art Auction官方条款：禁止爬虫重用","d":"SBI Art Auction网站使用条款PDF明文禁止未经同意的自动爬虫截取、复制与内容重用，界定其拍卖数据的使用限制范围。"},"https://www.artforum.com/news/artprice-files-complaint-against-christies-193635/":{"t":"Artforum报导：Artprice与Christie's诉讼攻防","d":"Artforum报导Artprice与Christie's之间的诉讼攻防，争点为2,300份拍卖目录遭未经同意完整重制的指控，显示大规模重制目录的法律风险极高。"},"https://www.nbcdfw.com/news/local/auction-houses-face-off-in-website-data-scraping-lawsuit/2033762/":{"t":"NBC DFW报导：拍卖业者互控数据爬取诉讼","d":"NBC DFW报导Heritage Auctions控告Christie's子公司Collectrium爬取近300万笔拍品数据并转售，凸显拍卖数据所有权争议。"},"http://www.e-yakimono.net/html/about-us.html":{"t":"e-yakimono.net：25年历史的日本陶艺知识站","d":"1999年创立、第一个专注日本陶器的在线知识中心，提供窑场与陶艺家介绍；25年后仍被AI引用，是「窄而深」的niche权威可以长寿的实证。"}}</script>
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
  var stageInner = document.querySelector('.stage-inner');
  var btnCardView = document.getElementById('btnCardView');
  var HINT_IFRAME = '多数网站不允许被内嵌预览——若下方空白或出现错误页，请改用上方「复制网址」或「开新分页 ↗」。';
  var HINT_CARD = '尝试加载原网页中——若该网站拒绝被内嵌，会停留在导览卡；「开新分页 ↗」可直达原文。';
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
    stageInner.classList.remove('show-frame');
    btnCardView.hidden = true;
    if(card){
      // 有导览卡：卡片为主画面；原网页在背景尝试加载，载好后出现按钮由用户手动切换
      stageInner.classList.add('has-card');
      lcHost.textContent = hostOf(url);
      lcTitle.textContent = card.t;
      lcDesc.textContent = card.d;
      linkCard.classList.add('show');
      stageHint.textContent = HINT_CARD;
    } else {
      stageInner.classList.remove('has-card');
      linkCard.classList.remove('show');
      stageHint.textContent = HINT_IFRAME;
    }
    // 一律尝试加载原网页；iframe 仅在确认加载后才显示，被拒绝时卡片／提示留在原位
    frame.src = url;
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
    stageInner.classList.remove('show-frame');
    stageInner.classList.remove('has-card');
    btnCardView.hidden = true;
    document.body.style.overflow = '';
    resetCopy();
  }
  function resetCopy(){
    if(copyTimer){ clearTimeout(copyTimer); copyTimer = null; }
    btnCopy.textContent = '复制网址';
    btnCopy.classList.remove('copied');
  }
  function copyUrl(){
    var url = urlInput.value;
    function ok(){
      btnCopy.textContent = '已复制 ✓';
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

  // 链接一律用 data-url（不放 href），避免宿主页面（如 artifact 查看器）拦截外部链接另开分页
  var entLinks = document.querySelectorAll('a.ent[data-url]');
  for(var i = 0; i < entLinks.length; i++){
    entLinks[i].setAttribute('tabindex','0');
    entLinks[i].setAttribute('role','link');
  }

  // iframe 仅在真正加载成功后显示；被 CSP／X-Frame-Options 挡下时维持隐藏，露出底层提示
  function setCardBtn(){
    btnCardView.textContent = stageInner.classList.contains('show-frame') ? '看导览卡' : '看网页';
  }
  btnCardView.addEventListener('click', function(){
    stageInner.classList.toggle('show-frame');
    setCardBtn();
    stageHint.textContent = stageInner.classList.contains('show-frame')
      ? '原网页预览中。若画面空白，代表该网站阻挡被内嵌显示——点「看导览卡」返回，或「开新分页 ↗」看原文。'
      : '原网页已就绪——点上方「看网页」可切换预览；若显示异常，「开新分页 ↗」直达原文。';
  });
  frame.addEventListener('load', function(){
    if(frame.getAttribute('src') && backdrop.classList.contains('open') && !frameBlocked){
      frame.classList.add('loaded');
      if(stageInner.classList.contains('has-card')){
        btnCardView.hidden = false;
        setCardBtn();
        stageHint.textContent = '原网页已就绪——点上方「看网页」可切换预览；若显示异常，「开新分页 ↗」直达原文。';
      }
    }
  });
  document.addEventListener('securitypolicyviolation', function(){
    frameBlocked = true;
    frame.classList.remove('loaded');
  });

  // event delegation：所有 .ent 链接一律开 popup，不离开窗口
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
