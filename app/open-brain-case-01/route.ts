export const dynamic = "force-static";

const html = String.raw`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>先建公司真腦，再談 ERP｜一份真實客戶提案（去識別化）</title>
<meta name="description" content="一家 30 年裝修工程公司問：AI 要先做哪一步？14 份全員訪談、蓋房子的施工順序、90 天拿數字驗收——Bek Open Brain 導入案例。">
<meta name="robots" content="index, follow">
<meta property="og:title" content="先建公司真腦，再談 ERP｜一份真實客戶提案（去識別化）">
<meta property="og:description" content="一家 30 年裝修工程公司問：AI 要先做哪一步？14 份全員訪談、蓋房子的施工順序、90 天拿數字驗收——Bek Open Brain 導入案例。">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.bekhelpme.com/open-brain-case-01">
<meta property="og:locale" content="zh_TW">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NLVESXBBMR"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NLVESXBBMR');</script>

<style>
:root{
  --deep:#051C2C; --accent:#2251FF; --accent-t:#16337A; --accent-f:#ECF0FF;
  --body:#1A1A1A; --muted:#595959; --hair:#D6DBE0; --mist:#F2F5F7; --paper:#FFFFFF;
  --danger:#B03A2E; --danger-f:#FBECEA; --danger-t:#8E2A20;
  --warn:#B9770E; --warn-f:#FBF3E6; --warn-t:#7A4E08;
  --green:#1E7A46; --green-f:#EAF6EF; --green-t:#155C35;
  --font:"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:var(--font);color:var(--body);background:var(--mist);line-height:1.7;font-size:16px}

/* ── 圖紙（每一頁）── */
.sheet{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:34px 20px 20px;position:relative}
.paper{background:var(--paper);width:100%;max-width:1120px;border:2px solid var(--deep);position:relative;
  display:flex;flex-direction:column;box-shadow:0 6px 30px rgba(5,28,44,.10)}
.paper::before{content:"";position:absolute;inset:8px;border:1px solid var(--hair);pointer-events:none}
.inner{padding:52px 60px 30px;flex:1;position:relative;z-index:1}
/* 標題欄（工程圖 title block）*/
.tblock{border-top:2px solid var(--deep);display:flex;flex-wrap:wrap;font-size:12px;color:var(--muted);position:relative;z-index:1}
.tblock div{padding:8px 14px;border-right:1px solid var(--hair);white-space:nowrap}
.tblock div:last-child{border-right:none;margin-left:auto}
.tblock b{color:var(--deep);font-weight:700}
/* 章眉 */
.eyebrow{font-size:14px;font-weight:700;letter-spacing:.35em;color:var(--accent-t);text-transform:uppercase;margin-bottom:14px}
h1{font-size:clamp(26px,3.2vw,40px);font-weight:900;color:var(--deep);line-height:1.35;margin-bottom:8px}
h1 .lite{font-weight:400;color:var(--muted);font-size:.6em;display:block;margin-top:6px;letter-spacing:0}
.rule{height:3px;background:var(--deep);width:72px;margin:18px 0 26px}
p.lead{font-size:clamp(16px,1.5vw,19px);max-width:46em}
.big{font-size:clamp(30px,5vw,56px);font-weight:900;color:var(--deep);line-height:1.3}
.accent{color:var(--accent)}

/* callout */
.co{display:flex;gap:0;margin:14px 0;border-left:12px solid;padding:14px 18px;font-size:15.5px}
.co b{display:block;margin-bottom:4px;font-size:16px}
.co.note{border-color:var(--deep);background:#EAEEF2}.co.note b{color:var(--deep)}
.co.danger{border-color:var(--danger);background:var(--danger-f)}.co.danger b{color:var(--danger-t)}
.co.warn{border-color:var(--warn);background:var(--warn-f)}.co.warn b{color:var(--warn-t)}
.co.info{border-color:var(--accent);background:var(--accent-f)}.co.info b{color:var(--accent-t)}
.co.green{border-color:var(--green);background:var(--green-f)}.co.green b{color:var(--green-t)}

/* 進場動畫 */
.a{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s ease}
.in .a{opacity:1;transform:none}
.in .a.d1{transition-delay:.12s}.in .a.d2{transition-delay:.24s}.in .a.d3{transition-delay:.36s}
.in .a.d4{transition-delay:.48s}.in .a.d5{transition-delay:.6s}.in .a.d6{transition-delay:.72s}
@media (prefers-reduced-motion:reduce){.a{transition:none;opacity:1;transform:none}}

/* 導航圓點（桌機）*/
#dots{position:fixed;right:18px;top:50%;transform:translateY(-50%);z-index:50;display:flex;flex-direction:column;gap:10px}
#dots a{width:11px;height:11px;border-radius:50%;background:#B9C4CC;display:block;transition:.25s}
#dots a.on{background:var(--accent);transform:scale(1.35)}
#hint{position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:50;background:var(--deep);color:#fff;
  font-size:12.5px;padding:7px 16px;border-radius:99px;opacity:.92;transition:opacity .5s}
#bar{position:fixed;top:0;left:0;height:4px;background:var(--accent);z-index:60;width:0}

/* ── 封面 ── */
.cover .inner{display:flex;flex-direction:column;justify-content:center}
.cover .conc{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:26px}
.cc{background:var(--mist);border-left:10px solid var(--deep);padding:16px 18px;font-size:15.5px}
.cc b{color:var(--deep)}

/* ── 對照兩欄 ── */
.duo{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:8px}
.panel{border:2px solid var(--hair);padding:22px 24px}
.panel h3{font-size:19px;color:var(--deep);margin-bottom:10px}
.panel.bad{border-color:var(--danger);background:var(--danger-f)}
.panel.good{border-color:var(--green);background:var(--green-f)}
.panel ul{list-style:none}.panel li{padding:5px 0 5px 1.3em;position:relative;font-size:15.5px}
.panel li::before{content:"·";position:absolute;left:.3em;font-weight:900;color:var(--deep)}

/* ── 人名痛點卡 ── */
.cards{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:20px}
.pc{border:1.5px solid var(--hair);border-top:8px solid var(--danger);padding:16px 14px;background:#fff}
.pc .who{font-weight:900;color:var(--deep);font-size:16.5px}
.pc .role{font-size:12.5px;color:var(--muted);margin-bottom:10px}
.pc .num{font-size:42px;font-weight:900;color:var(--danger-t);line-height:1.1;font-variant-numeric:tabular-nums}
.pc .unit{font-size:15px;font-weight:700;color:var(--danger-t)}
.pc .what{font-size:13.5px;color:var(--body);margin-top:8px;line-height:1.55}

/* ── 蓋房子（簽名場景）── */
.house{max-width:760px;margin:10px auto 0;position:relative}
.fl{border:2.5px solid;border-left-width:14px;padding:16px 20px;margin-bottom:10px;background:#fff;
  opacity:0;transform:translateY(46px);transition:opacity .65s ease,transform .65s ease}
.in .fl{opacity:1;transform:none}
.fl .fh{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:4px}
.fl .fh b{font-size:18.5px}.fl .fh span{font-size:13.5px;color:var(--muted)}
.fl .fd{font-size:14.5px;margin-top:4px}
.fl .chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px}
.chip{border:1.5px solid;border-radius:7px;padding:2px 10px;font-size:12.5px;font-weight:700;background:#fff}
.fl.g{border-color:var(--green)}.fl.g b{color:var(--green-t)}.fl.g .chip{border-color:var(--green);color:var(--green-t)}
.fl.b{border-color:var(--accent)}.fl.b b{color:var(--accent-t)}.fl.b .chip{border-color:var(--accent);color:var(--accent-t)}
.fl.o{border-color:var(--warn)}.fl.o b{color:var(--warn-t)}.fl.o .chip{border-color:var(--warn);color:var(--warn-t)}
.roof{width:0;height:0;border-left:200px solid transparent;border-right:200px solid transparent;
  border-bottom:64px solid var(--deep);margin:0 auto 10px;position:relative;
  opacity:0;transform:translateY(30px);transition:.65s ease}
.in .roof{opacity:1;transform:none}
.rooflab{text-align:center;font-size:13.5px;color:var(--muted);margin-bottom:8px;
  opacity:0;transition:opacity .6s ease}
.in .rooflab{opacity:1}
.dig{border:2px dashed var(--muted);background:var(--mist);padding:12px 20px;font-size:14.5px;
  opacity:0;transform:translateY(46px);transition:.65s ease}
.in .dig{opacity:1;transform:none}
.dig b{color:var(--green-t)}
/* 樓層疊上順序（由下而上）*/
.in .dig{transition-delay:.1s}
.in .fl.g{transition-delay:.5s}
.in .fl.b{transition-delay:.95s}
.in .fl.o{transition-delay:1.4s}
.in .roof{transition-delay:1.85s}
.in .rooflab{transition-delay:2.05s}

/* ── 橋 ── */
.bridge{display:grid;grid-template-columns:1fr 1.1fr 1.25fr;gap:14px;align-items:stretch;margin-top:14px}
.bx{border:2px solid;padding:0 0 14px;background:#fff}
.bx .bh{color:#fff;font-weight:900;text-align:center;padding:9px;font-size:16.5px}
.bx ul{list-style:none;padding:12px 16px 0}
.bx li{border:1.5px solid;border-radius:8px;padding:7px 12px;margin-bottom:8px;font-size:14px;font-weight:700;
  display:flex;justify-content:space-between;gap:8px;align-items:baseline}
.bx li span{font-weight:400;font-size:12px;color:var(--muted)}
.bx.eng{border-color:var(--accent)}.bx.eng .bh{background:var(--accent)}.bx.eng li{border-color:var(--accent);color:var(--accent-t)}
.bx.vault{border-color:var(--green)}.bx.vault .bh{background:var(--green)}.bx.vault li{border-color:var(--green);color:var(--green-t)}
.bx.vault li.future{border-style:dashed;border-color:var(--muted);color:var(--muted)}
.mid{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:6px;padding:10px 4px}
.mid svg{width:100%;max-width:270px}
.mid .mt{font-weight:900;color:var(--deep);font-size:18px}
.mid .ms{font-size:13px;color:var(--muted)}
.fixnote{font-size:13.5px;margin-top:8px;padding:8px 12px;background:var(--warn-f);border-left:8px solid var(--warn)}
.fixnote b{color:var(--warn-t)}

/* ── 90 天 ── */
.tl{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:16px 0 6px}
.step{border:1.5px solid var(--hair);border-top:7px solid var(--accent);padding:13px 14px;background:#fff}
.step .wk{font-size:12px;font-weight:700;color:var(--accent-t);letter-spacing:.06em}
.step b{display:block;color:var(--deep);font-size:16px;margin:3px 0 5px}
.step p{font-size:13px;color:var(--body);line-height:1.55}
table{border-collapse:collapse;width:100%;margin-top:14px;font-size:14.5px}
th{background:var(--deep);color:#fff;text-align:left;padding:9px 13px;font-size:14px}
td{border:1px solid var(--hair);padding:8px 13px}
tr:nth-child(even) td{background:var(--mist)}
td.t{color:var(--green-t);font-weight:700}

/* ── 邊界 / 四問 ── */
.qs{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px}
.q{border:1.5px solid var(--hair);padding:16px 18px;background:#fff;position:relative}
.q .qn{position:absolute;top:-14px;left:14px;background:var(--accent);color:#fff;font-weight:900;
  width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px}
.q b{color:var(--deep);display:block;font-size:15.5px;margin-bottom:4px;padding-top:2px}
.q p{font-size:13.5px;color:var(--muted)}
.nots{list-style:none;margin-top:10px}
.nots li{padding:8px 0 8px 2em;position:relative;font-size:15.5px;border-bottom:1px solid var(--hair)}
.nots li::before{content:"✕";position:absolute;left:.3em;color:var(--danger);font-weight:900}
.nots li b{color:var(--deep)}

/* ── CTA ── */
.cta{display:flex;align-items:center;gap:20px;margin-top:22px;background:var(--deep);color:#fff;padding:22px 26px}
.cta .n{font-size:44px;font-weight:900;line-height:1}
.cta p{font-size:15.5px;line-height:1.6}
.cta b{color:#9BB8FF}

/* ── 桌機翻頁模式 ── */
@media (min-width:769px){
  body.deck{overflow:hidden;height:100vh}
  body.deck #wrap{height:100vh;overflow-y:auto;scroll-snap-type:y mandatory;scroll-behavior:smooth}
  body.deck .sheet{scroll-snap-align:start;height:100vh;overflow:hidden}
  body.deck .paper{max-height:calc(100vh - 54px)}
  body.deck .inner{overflow:hidden}
}
/* ── 手機 ── */
@media (max-width:768px){
  #dots{display:none}
  .inner{padding:34px 22px 22px}
  .cover .conc,.duo,.qs{grid-template-columns:1fr}
  .cards{grid-template-columns:1fr 1fr}
  .pc:last-child{grid-column:1/-1}
  .bridge{grid-template-columns:1fr}
  .mid{order:2}
  .tl{grid-template-columns:1fr 1fr}
  .roof{border-left-width:120px;border-right-width:120px;border-bottom-width:44px}
  .tblock{font-size:10.5px}.tblock div{padding:6px 8px}
  table{font-size:12.5px}th,td{padding:6px 8px}
  .cta{flex-direction:column;text-align:center}
}
</style>
</head>
<body>
<div id="bar"></div>
<div id="hint">電腦：← → 或滾輪翻頁 ｜ 手機：往下滑</div>
<nav id="dots"></nav>

<div id="wrap">

<!-- A-00 封面 -->
<section class="sheet cover" id="s0">
  <div class="paper"><div class="inner">
    <div class="eyebrow a">Bek Open Brain 導入案例 ── 真實客戶提案（已去識別化）</div>
    <h1 class="a d1" style="font-size:clamp(34px,4.6vw,56px)">AI 要先做哪一步？<span class="lite">給老闆的一份建議：先建公司真腦，再談系統</span></h1>
    <div class="rule a d2"></div>
    <div class="conc">
      <div class="cc a d2"><b>您的架構圖是對的</b>——那是H 公司三年後的樣子。但它是完工圖，不是施工順序。</div>
      <div class="cc a d3"><b>第一步不是 ERP</b>——ERP 是一本很貴的記帳本，買來第一天是空的。</div>
      <div class="cc a d4"><b>您的直覺完全正確</b>——「底層資料要能連起來」。要先連的，是老師傅腦袋裡的功夫，不是帳。</div>
      <div class="cc a d5"><b>工程已經開工</b>——14 份全員訪談就是第一批料。不要中斷它。</div>
    </div>
    <p class="a d6" style="margin-top:22px;color:var(--muted);font-size:14px">每一個數字、每一個例子，都出自 2026-07-10 全公司 14 位同仁訪談，沒有一個是編的。</p>
  </div>
  <div class="tblock"><div>工程名稱 <b>H 公司 AI 智慧營運平台</b></div><div>圖名 <b>封面</b></div><div>圖號 <b>A-00</b></div><div>日期 2026-07-11</div><div>繪製 Bek</div></div>
  </div>
</section>

<!-- A-01 工地鐵律 -->
<section class="sheet" id="s1">
  <div class="paper"><div class="inner">
    <div class="eyebrow a">01 ── 用您最熟的一句話講清楚</div>
    <h1 class="a d1">圖沒定案，就不要發包。</h1>
    <div class="rule a d1"></div>
    <p class="lead a d2">H 公司每天都在提醒業主：設計圖還在改就急著施工，結果一定是<b>重工，錢花兩次</b>。導入 ERP，是一模一樣的道理——ERP 會把公司的做事流程「灌進水泥」。</p>
    <div class="duo">
      <div class="panel bad a d3">
        <h3>▲ H 公司現在的實況＝「圖還在改」</h3>
        <ul>
          <li>需求靠 LINE 和口頭在傳</li>
          <li>業主天天改設計、標單滾動調整</li>
          <li>請購單還在跑紙本簽核</li>
          <li>同一個案子，各部門版本對不起來</li>
        </ul>
      </div>
      <div class="panel a d4" style="border-color:var(--danger)">
        <h3 style="color:var(--danger-t)">這時候上 ERP，只有兩種結局</h3>
        <ul>
          <li>同仁嫌麻煩繞過系統，繼續用 LINE——<b>系統變蚊子館，錢白花</b></li>
          <li>不停付錢改系統配合現場——<b>顧問費像追加工程一樣滾上去</b></li>
        </ul>
      </div>
    </div>
    <div class="co info a d5"><b>› 那 ERP 到底要不要做？</b>要，但它是精裝修，是最後一步。流程跑順、規格清楚後，H 公司帶著自己的需求書去採購——那時您是拿圖說發包的甲方，條件您開。</div>
  </div>
  <div class="tblock"><div>工程名稱 <b>H 公司 AI 智慧營運平台</b></div><div>圖名 <b>工地鐵律</b></div><div>圖號 <b>A-01</b></div><div>日期 2026-07-11</div><div>繪製 Bek</div></div>
  </div>
</section>

<!-- A-02 病根 -->
<section class="sheet" id="s2">
  <div class="paper"><div class="inner">
    <div class="eyebrow a">02 ── 14 位同仁的訪談</div>
    <h1 class="a d1">最痛的五件事，沒有一件是「少一套記帳系統」</h1>
    <div class="rule a d1"></div>
    <div class="cards">
      <div class="pc a d1"><div class="who">估採發專員</div><div class="role">化名</div>
        <span class="num" data-n="10" data-pre="5–">0</span><span class="unit"> 次</span>
        <div class="what">業主一改設計，成控表整份重做，每次 2–3 天</div></div>
      <div class="pc a d2"><div class="who">估算專員</div><div class="role">化名</div>
        <span class="num" data-n="7">0</span><span class="unit"> 家</span>
        <div class="what">每週打電話催 7 家協力商報價，每家催 2–3 次</div></div>
      <div class="pc a d3"><div class="who">專案協理</div><div class="role">化名</div>
        <span class="num" style="font-size:34px">每案</span><span class="unit"></span>
        <div class="what">同樣的資料反覆整理、同樣的問題反覆回答</div></div>
      <div class="pc a d4"><div class="who">行銷企劃</div><div class="role">化名</div>
        <span class="num" data-n="7" data-suf="">0</span><span class="unit"> 天</span>
        <div class="what">要一份實務資料，最久等一整週才拿得到</div></div>
      <div class="pc a d5"><div class="who">管理處協理</div><div class="role">化名</div>
        <span class="num" data-n="7" data-pre="4–">0</span><span class="unit"> 天</span>
        <div class="what">每月人工整理出勤工表，全處加班趕薪資</div></div>
    </div>
    <div class="co danger a d6"><b>▲ 真正的病根</b>公司的功夫——工項價格、哪家協力商靠得住、案子怎麼做、老闆怎麼判斷——散在 LINE 裡、紙本上、Excel 裡，最多的是在老師傅的腦袋裡。要用的時候只能用問的、用等的、用重做的。<b style="display:inline">人一離職，功夫跟著走。</b></div>
    <p class="a d6" style="font-size:15px">明天就算 ERP 上線，上面五張卡，一張都不會消失。因為 <b>ERP 記的是帳，不是功夫</b>。</p>
  </div>
  <div class="tblock"><div>工程名稱 <b>H 公司 AI 智慧營運平台</b></div><div>圖名 <b>病根診斷</b></div><div>圖號 <b>A-02</b></div><div>日期 2026-07-11</div><div>繪製 Bek</div></div>
  </div>
</section>

<!-- A-03 功夫簿 -->
<section class="sheet" id="s3">
  <div class="paper"><div class="inner">
    <div class="eyebrow a">03 ── 比H 公司大十倍的同行，贏在哪</div>
    <h1 class="a d1">不是贏在系統多，是有一本「公司的功夫簿」</h1>
    <div class="rule a d1"></div>
    <p class="lead a d2">行話叫<b>價格庫</b>。每一種工項的成交單價都留著；每一家協力商做過什麼工、報價落在哪、配合好不好，都有紀錄。</p>
    <div class="co green a d3"><b>■ 有這本簿子之後</b>八成的標準工項，用自己的歷史價就能先估——不用發詢價單出去等。估算專員等報價的 5–7 天、估採發專員反覆重做的成控表，根子上的解法就在這裡。這本簿子，ERP 不會幫您建：ERP 只記已經發生的帳，不會累積判斷的依據。</div>
    <div class="co warn a d4"><b>◆ 先把醜話說在前面</b>有兩種「等」任何系統都消不掉：<b style="display:inline">等業主拍板、等協力商算價</b>——這是別人家的事。AI 能幫的是三件實在事：問題一次問齊（不要一來一回問十次）、催報價改自動催（省下每週幾十通電話）、標準工項用歷史價先估（等，但不卡決策）。誰跟您保證能「消除等待」，那是話術。</div>
  </div>
  <div class="tblock"><div>工程名稱 <b>H 公司 AI 智慧營運平台</b></div><div>圖名 <b>功夫簿</b></div><div>圖號 <b>A-03</b></div><div>日期 2026-07-11</div><div>繪製 Bek</div></div>
  </div>
</section>

<!-- A-04 回應廠商 -->
<section class="sheet" id="s4">
  <div class="paper"><div class="inner">
    <div class="eyebrow a">04 ── 回應廠商推薦的 NotebookLM ＋ ChatGPT</div>
    <h1 class="a d1">聰明的資料夾，不是公司的腦</h1>
    <div class="rule a d1"></div>
    <p class="lead a d2">這兩個工具本身不差，問題是定位——它們是<b>個人用的好工具</b>，不是公司的地基。</p>
    <div class="duo">
      <div class="panel a d3">
        <h3>NotebookLM ＝ 很聰明的資料夾</h3>
        <ul>
          <li>丟文件進去、它回答您——個人研究好用</li>
          <li>但薪資成本誰能看、誰不能看，它管不了</li>
          <li>學到的東西存不回去，別的 AI 讀不到它</li>
          <li>資料放在人家平台上，帶不帶得走不是您說了算</li>
        </ul>
      </div>
      <div class="panel a d4">
        <h3>ChatGPT ＝ 沒有H 公司記憶的高手</h3>
        <ul>
          <li>每個同仁各問各的，問完就散了</li>
          <li>公司層面不累積任何東西</li>
          <li>三年後，公司在 AI 上累積的資產：<b>零</b></li>
        </ul>
      </div>
    </div>
    <div class="co note a d5"><b>■ 一句話</b>公司要的不是聰明的資料夾，是一顆自己的腦——有規矩（權限）、接得上（任何 AI 都能讀）、帶得走（資料是H 公司的）。</div>
  </div>
  <div class="tblock"><div>工程名稱 <b>H 公司 AI 智慧營運平台</b></div><div>圖名 <b>工具定位</b></div><div>圖號 <b>A-04</b></div><div>日期 2026-07-11</div><div>繪製 Bek</div></div>
  </div>
</section>

<!-- A-05 建置順序圖（簽名場景）-->
<section class="sheet" id="s5">
  <div class="paper"><div class="inner">
    <div class="eyebrow a">05 ── 您的八大模組，一個不少，排出施工順序</div>
    <h1 class="a d1">建置順序圖：由下而上，一層一層蓋</h1>
    <div class="rule a d1"></div>
    <div class="house">
      <div class="rooflab">④ 屋頂（最後蓋）：07 經營分析 BI・08 董事長決策中心——疊在乾淨資料上，儀表板才是真的</div>
      <div class="roof"></div>
      <div class="fl o"><div class="fh"><b>③ 精裝修｜系統採購（記帳本）</b><span>90 天驗收後評估</span></div>
        <div class="fd">流程跑順後，H 公司帶規格去採購——甲方姿態，條件您開。真腦資料直接接上，一毛不白花。</div>
        <div class="chips"><span class="chip">01 CRM</span><span class="chip">02 設計管理</span><span class="chip">03 進銷存</span><span class="chip">04 工程管理</span><span class="chip">05 人資</span><span class="chip">06 財務會計</span></div></div>
      <div class="fl b"><div class="fh"><b>② 立骨架｜AI 上工（幫手）</b><span>第 7–12 週</span></div>
        <div class="fd">挑低風險場景，第一個 AI 接上真腦實際跑。90 天拿數字驗收：重做次數、等待天數、電話通數。</div>
        <div class="chips"><span class="chip">AI 會議紀錄</span><span class="chip">AI 估價助理</span><span class="chip">AI 採購分析</span><span class="chip">…逐個上線</span></div></div>
      <div class="fl g"><div class="fh"><b>① 打地基｜公司真腦（功夫簿）</b><span>第 1–6 週</span></div>
        <div class="fd">把散在 LINE、紙本、老師傅腦袋裡的功夫收進公司自己的腦＝架構圖上的「AI 企業知識庫」。</div>
        <div class="chips"><span class="chip">工項價格庫</span><span class="chip">協力商紀錄</span><span class="chip">案例工法 SOP</span><span class="chip">老闆決策準則</span></div></div>
      <div class="dig"><b>✓ 地基開挖（已完成）</b>　2026-07-10 全公司 14 位同仁聚焦訪談——真腦的第一批料，已進場</div>
    </div>
  </div>
  <div class="tblock"><div>工程名稱 <b>H 公司 AI 智慧營運平台</b></div><div>圖名 <b>建置順序圖</b></div><div>圖號 <b>A-05</b></div><div>日期 2026-07-11</div><div>繪製 Bek</div></div>
  </div>
</section>

<!-- A-06 MCP 修正圖 -->
<section class="sheet" id="s6">
  <div class="paper"><div class="inner">
    <div class="eyebrow a">06 ── 您那張 MCP 橋樑圖，方向是對的</div>
    <h1 class="a d1">建議修正兩個地方：右邊先裝滿、左邊不綁死</h1>
    <div class="rule a d1"></div>
    <div class="bridge">
      <div class="bx eng a d2">
        <div class="bh">AI 引擎（腦力）</div>
        <ul><li>Claude</li><li>GPT</li><li>Gemini</li><li>下一個更強的…</li></ul>
        <p style="text-align:center;font-size:13px;color:var(--accent-t);font-weight:700;padding:2px 10px 0">誰強用誰，隨時換<br><span style="font-weight:400;color:var(--muted)">換引擎不用換腦——像換車不用換駕照</span></p>
      </div>
      <div class="mid a d3">
        <div class="mt">MCP 標準插座</div>
        <div class="ms">業界標準接口・有鎖有權限</div>
        <svg viewBox="0 0 270 90" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="38" width="250" height="16" fill="#F2F5F7" stroke="#051C2C" stroke-width="2"/>
          <rect x="36" y="8" width="8" height="60" fill="#051C2C"/><rect x="226" y="8" width="8" height="60" fill="#051C2C"/>
          <line x1="40" y1="12" x2="135" y2="40" stroke="#051C2C" stroke-width="1.6"/>
          <line x1="230" y1="12" x2="135" y2="40" stroke="#051C2C" stroke-width="1.6"/>
          <circle cx="135" cy="46" r="12" fill="#fff" stroke="#051C2C" stroke-width="2"/>
          <rect x="129" y="44" width="12" height="9" rx="2" fill="#051C2C"/>
          <path d="M131 44 v-3 a4 4 0 0 1 8 0 v3" fill="none" stroke="#051C2C" stroke-width="2"/>
          <line x1="30" y1="78" x2="240" y2="78" stroke="#2251FF" stroke-width="3" marker-end="url(#m1)" marker-start="url(#m2)"/>
          <defs><marker id="m1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 z" fill="#2251FF"/></marker>
          <marker id="m2" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto-start-reverse"><path d="M0,0 L7,3 L0,6 z" fill="#2251FF"/></marker></defs>
        </svg>
        <div class="ms" style="color:var(--accent-t)">AI 過橋讀料，答案寫回腦裡</div>
      </div>
      <div class="bx vault a d4">
        <div class="bh">H 公司真腦（功夫簿）</div>
        <ul>
          <li>✓ 14 份全員訪談 <span>已入庫</span></li>
          <li>工項價格庫 <span>第 3–6 週</span></li>
          <li>協力商紀錄 <span>第 3–6 週</span></li>
          <li>案例工法 SOP <span>第 3–6 週</span></li>
          <li>老闆決策準則 <span>第 5–8 週</span></li>
          <li class="future">ERP／CRM 交易資料 <span>90 天後評估接入</span></li>
        </ul>
      </div>
    </div>
    <div class="duo" style="margin-top:4px">
      <div class="fixnote a d5"><b>◆ 修正一：</b>原圖寫死一家 AI。這行一年換一次龍頭，架構別綁死。</div>
      <div class="fixnote a d5"><b>◆ 修正二：</b>原圖橋的右端是一套空 ERP。倉庫是空的，AI 過橋讀不到東西。</div>
    </div>
  </div>
  <div class="tblock"><div>工程名稱 <b>H 公司 AI 智慧營運平台</b></div><div>圖名 <b>MCP 修正圖</b></div><div>圖號 <b>A-06</b></div><div>日期 2026-07-11</div><div>繪製 Bek</div></div>
  </div>
</section>

<!-- A-07 90天 -->
<section class="sheet" id="s7">
  <div class="paper"><div class="inner">
    <div class="eyebrow a">07 ── 怎麼做、多久、怎麼算成功</div>
    <h1 class="a d1"><span class="accent" style="font-variant-numeric:tabular-nums"><span class="num" data-n="90">0</span> 天</span>，拿數字對答案</h1>
    <div class="rule a d1"></div>
    <div class="tl">
      <div class="step a d1"><div class="wk">第 1–2 週</div><b>定規矩</b><p>跟各部門核對訪談內容、定分類和負責人（一場半天會議）</p></div>
      <div class="step a d2"><div class="wk">第 3–6 週</div><b>裝腦</b><p>訪談成果、工項價格、協力商紀錄收進真腦（各部門交 Excel）</p></div>
      <div class="step a d3"><div class="wk">第 5–8 週</div><b>收老闆的功夫</b><p>與您深談 2–3 次，報價判斷、接案標準、風險紅線入庫。以後同仁送簽前可先問 AI「老闆會怎麼看」</p></div>
      <div class="step a d4"><div class="wk">第 7–12 週</div><b>試一個 AI ＋ 驗收</b><p>第一個 AI 接腦實際跑，拿基準數字對答案</p></div>
    </div>
    <table class="a d5">
      <tr><th>現在的狀況（訪談實測）</th><th>90 天後要看到的方向</th></tr>
      <tr><td>行銷企劃要一份實務資料，等 2 天到 1 週</td><td class="t">真腦裡直接查，馬上有</td></tr>
      <tr><td>估採發專員成控表一案重做 5–10 次，每次 2–3 天</td><td class="t">AI 比對新舊版，重做時間明顯縮短</td></tr>
      <tr><td>估算專員每週催 7 家廠商、每家 2–3 次電話</td><td class="t">自動催，人不用掛在電話上</td></tr>
      <tr><td>專案協理同樣的問題反覆回答</td><td class="t">常見問題 AI 先答第一輪</td></tr>
      <tr><td>案子交接會掉棒</td><td class="t">案件功夫存在腦裡，不跟著人走</td></tr>
    </table>
    <p class="a d6" style="margin-top:10px;font-size:14.5px">開工前這些數字雙方簽字認定；90 天後回來對。成不成看數字，不看感覺。同仁負擔：導入第一個月每週約一小時，錄播教材配 AI 練，<b>不佔您的時間</b>。</p>
  </div>
  <div class="tblock"><div>工程名稱 <b>H 公司 AI 智慧營運平台</b></div><div>圖名 <b>90 天施工計畫</b></div><div>圖號 <b>A-07</b></div><div>日期 2026-07-11</div><div>繪製 Bek</div></div>
  </div>
</section>

<!-- A-08 邊界與承諾 -->
<section class="sheet" id="s8">
  <div class="paper"><div class="inner">
    <div class="eyebrow a">08 ── 先講清楚，免得期待錯位</div>
    <h1 class="a d1">我們不做什麼</h1>
    <div class="rule a d1"></div>
    <ul class="nots">
      <li class="a d1"><b>不碰會計師和報稅</b>——合規的事維持現在的專業分工</li>
      <li class="a d2"><b>這個階段不裝、也不換 ERP</b>——等流程穩了，陪H 公司帶規格去採購，真腦資料直接接上</li>
      <li class="a d3"><b>薪資和個資鎖在權限裡</b>——不開放亂查</li>
      <li class="a d4"><b>不綁任何一家 AI 品牌</b>——標準插座，引擎隨時換最好的</li>
      <li class="a d5"><b>不承諾消除業主和協力商的等待</b>——只承諾少來回、少重做、少掛電話</li>
    </ul>
    <div class="co note a d6"><b>■ 一句承諾</b>資料從第一天起就是H 公司的：開放格式、隨時可整批帶走。合作若結束，腦和功夫都留在H 公司。</div>
  </div>
  <div class="tblock"><div>工程名稱 <b>H 公司 AI 智慧營運平台</b></div><div>圖名 <b>邊界與承諾</b></div><div>圖號 <b>A-08</b></div><div>日期 2026-07-11</div><div>繪製 Bek</div></div>
  </div>
</section>

<!-- A-09 四問＋下一步 -->
<section class="sheet" id="s9">
  <div class="paper"><div class="inner">
    <div class="eyebrow a">09 ── 不管最後找誰做</div>
    <h1 class="a d1">用四個問題，考所有廠商（包括我們）</h1>
    <div class="rule a d1"></div>
    <div class="qs">
      <div class="q a d1"><div class="qn">1</div><b>「資料放在哪？我隨時要整批帶走，可以嗎？」</b><p>資料是H 公司的，不是廠商的</p></div>
      <div class="q a d2"><div class="qn">2</div><b>「你們綁死哪一家 AI？」</b><p>這行一年換一次龍頭，架構要能換引擎</p></div>
      <div class="q a d3"><div class="qn">3</div><b>「以後改規則，我的人自己能改嗎？」</b><p>避免每次調整都付顧問費</p></div>
      <div class="q a d4"><div class="qn">4</div><b>「90 天內，拿得出看得到數字的成果嗎？」</b><p>只給三年大圖、不給三個月成果的，不要簽</p></div>
    </div>
    <div class="cta a d5">
      <div class="n">→</div>
      <p><b>這是一份真實的客戶提案（人名與公司已去識別化）。</b><br>
      想知道「公司真腦」怎麼幫你的公司先打地基？<a href="https://cal.com/bektsai/30min" style="color:#9BB8FF;font-weight:700">預約 30 分鐘對齊對話</a>　｜　延伸閱讀：<a href="/bek-open-brain" style="color:#9BB8FF;font-weight:700">Bek Open Brain 是什麼</a></p>
    </div>
  </div>
  <div class="tblock"><div>工程名稱 <b>H 公司 AI 智慧營運平台</b></div><div>圖名 <b>下一步</b></div><div>圖號 <b>A-09</b></div><div>日期 2026-07-11</div><div>繪製 Bek</div></div>
  </div>
</section>

</div><!-- /wrap -->

<script>
(function(){
  var sheets=[].slice.call(document.querySelectorAll('.sheet'));
  var isDesktop=window.matchMedia('(min-width:769px)').matches;
  var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(isDesktop){document.body.classList.add('deck');}

  // dots
  var dots=document.getElementById('dots');
  sheets.forEach(function(s,i){
    var a=document.createElement('a');a.href='#'+s.id;a.title='A-0'+i;
    a.addEventListener('click',function(e){e.preventDefault();go(i);});
    dots.appendChild(a);
  });
  var dotEls=[].slice.call(dots.children);
  var cur=0;
  function go(i){
    i=Math.max(0,Math.min(sheets.length-1,i));cur=i;
    sheets[i].scrollIntoView({behavior:reduced?'auto':'smooth'});
  }
  // keyboard (desktop)
  document.addEventListener('keydown',function(e){
    if(!isDesktop)return;
    if(['ArrowRight','ArrowDown','PageDown',' '].indexOf(e.key)>-1){e.preventDefault();go(cur+1);}
    if(['ArrowLeft','ArrowUp','PageUp'].indexOf(e.key)>-1){e.preventDefault();go(cur-1);}
    if(e.key==='Home'){go(0);} if(e.key==='End'){go(sheets.length-1);}
  });

  // count-up
  function countUp(el){
    var n=parseInt(el.getAttribute('data-n'),10);
    var pre=el.getAttribute('data-pre')||'';
    if(reduced){el.textContent=pre+n;return;}
    var t0=null;
    function step(t){
      if(!t0)t0=t;var p=Math.min(1,(t-t0)/900);
      var v=Math.round(n*(1-Math.pow(1-p,3)));
      el.textContent=pre+v;
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // observer: reveal + active dot + count-ups
  var io=new IntersectionObserver(function(es){
    es.forEach(function(en){
      var i=sheets.indexOf(en.target);
      if(en.isIntersecting){
        en.target.classList.add('in');
        en.target.querySelectorAll('.num[data-n]:not(.done)').forEach(function(el){
          el.classList.add('done');countUp(el);
        });
        if(en.intersectionRatio>.5){
          cur=i;dotEls.forEach(function(d,j){d.classList.toggle('on',j===i);});
          var bar=document.getElementById('bar');
          bar.style.width=((i+1)/sheets.length*100)+'%';
        }
      }
    });
  },{threshold:[0.25,0.55]});
  sheets.forEach(function(s){io.observe(s);});

  // deck auto-fit: shrink slide content that exceeds viewport height
  // wrap each slide's content in a fitbox (scaled child inside the fixed clip frame)
  sheets.forEach(function(s){
    var inner=s.querySelector('.inner');
    var box=document.createElement('div');box.className='fitbox';
    box.style.transformOrigin='top center';
    while(inner.firstChild){box.appendChild(inner.firstChild);}
    inner.appendChild(box);
  });
  function fit(){
    sheets.forEach(function(s){
      var inner=s.querySelector('.inner');
      var box=inner.querySelector('.fitbox');
      box.style.transform='';
      if(!document.body.classList.contains('deck'))return;
      var cs=getComputedStyle(inner);
      var avail=inner.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom);
      var need=box.scrollHeight;
      if(need>avail+2){
        var k=Math.max(0.6,(avail/need)*0.995);
        box.style.transform='scale('+k.toFixed(3)+')';
      }
    });
  }
  window.addEventListener('resize',function(){
    var d=window.matchMedia('(min-width:769px)').matches;
    document.body.classList.toggle('deck',d);
    fit();
  });
  window.addEventListener('load',fit);
  setTimeout(fit,350);

  // hint auto-hide
  setTimeout(function(){var h=document.getElementById('hint');h.style.opacity='0';
    setTimeout(function(){h.remove();},600);},5000);
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
