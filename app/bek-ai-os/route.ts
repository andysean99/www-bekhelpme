export const dynamic = "force-static";

const html = String.raw`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bek AI OS｜把公司的資料和判斷，變成問得到的答案</title>
<!-- added:seo -->
<meta name="description" content="ERP 記得每一筆帳，但「為什麼」只有人記得。Bek AI OS 把公司的資料和判斷變成問得到的答案——每句附出處、不會亂編、不用換 ERP。">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.bekhelpme.com/bek-ai-os">
<meta property="og:title" content="Bek AI OS｜把公司的資料和判斷，變成問得到的答案">
<meta property="og:description" content="ERP 記得每一筆帳，但「為什麼」只有人記得。Bek AI OS 把公司的資料和判斷變成問得到的答案——每句附出處、不會亂編、不用換 ERP。">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.bekhelpme.com/bek-ai-os">
<meta property="og:locale" content="zh_TW">
<meta property="og:image" content="https://www.bekhelpme.com/api/og/bek-ai-os">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Bek AI OS｜把公司的資料和判斷，變成問得到的答案">
<meta name="twitter:description" content="每句附出處、不會亂編、不用換 ERP——把公司的資料和判斷，變成問得到的答案。">
<meta name="twitter:image" content="https://www.bekhelpme.com/api/og/bek-ai-os">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Bek AI OS｜把公司的資料和判斷，變成問得到的答案","description":"ERP 記得每一筆帳，但「為什麼」只有人記得。Bek AI OS 把公司的資料和判斷變成問得到的答案——每句附出處、不會亂編、不用換 ERP。","url":"https://www.bekhelpme.com/bek-ai-os","inLanguage":"zh-Hant","publisher":{"@type":"Person","name":"Bek Tsai","url":"https://www.bekhelpme.com"}}</script>
<!-- /added:seo -->
<!-- added:ga4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NLVESXBBMR"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NLVESXBBMR');</script>
<!-- /added:ga4 -->
<style>
  :root{
    --navy:#051C2C; --navy-2:#0B2A40;
    --ink:#16232E; --ink-2:#4A5B68; --ink-3:#7A8894;
    --paper:#F7F5F0; --card:#FFFFFF; --line:#E4E0D6;
    --accent:#C9A45C; --accent-deep:#A5813C;
    --good:#2E7D4F; --good-bg:#EAF3ED;
    --pain:#A8462F; --pain-bg:#F7ECE8;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:"Noto Sans TC","PingFang TC","Microsoft JhengHei",-apple-system,sans-serif;
    background:var(--paper); color:var(--ink); line-height:1.65; -webkit-font-smoothing:antialiased;}
  .page{max-width:1080px;margin:0 auto;padding-bottom:56px;}

  .hero{background:linear-gradient(135deg,#041623 0%,var(--navy) 45%,#0E3049 100%);
    color:#F4EFE4; padding:60px 64px 52px; position:relative; overflow:hidden;}
  .hero::after{content:""; position:absolute; right:-140px; top:-140px; width:460px; height:460px; border-radius:50%;
    border:1px solid rgba(201,164,92,.25); box-shadow:0 0 0 70px rgba(201,164,92,.05),0 0 0 150px rgba(201,164,92,.03);}
  .hero .kicker{display:inline-flex; align-items:center; gap:8px; font-size:12px; letter-spacing:.22em;
    color:var(--accent); font-weight:700; margin-bottom:20px;}
  .hero .kicker::before{content:""; width:28px; height:1px; background:var(--accent);}
  .hero .q{font-size:19px; color:rgba(244,239,228,.8); margin-bottom:10px;}
  .hero h1{font-size:38px; font-weight:900; line-height:1.4;}
  .hero h1 em{font-style:normal; color:var(--accent);}
  .hero .a{margin-top:22px; font-size:16.5px; color:rgba(244,239,228,.85); line-height:1.8; max-width:640px; position:relative; z-index:1;}
  .hero .a b{color:#fff;}

  section{padding:44px 64px 6px;}
  .sec-head{display:flex; align-items:baseline; gap:14px; margin-bottom:8px;}
  .sec-num{font-size:13px; font-weight:800; color:var(--accent-deep); border:1.5px solid var(--accent);
    border-radius:6px; padding:2px 9px; background:#fff;}
  .sec-head h2{font-size:22px; font-weight:800; color:var(--navy);}
  .sec-lead{font-size:14.5px; color:var(--ink-2); margin-bottom:22px; max-width:720px;}

  /* 三張臉 */
  .faces{display:grid; grid-template-columns:repeat(3,1fr); gap:14px;}
  .face{background:var(--card); border:1px solid var(--line); border-radius:16px; padding:22px;
    box-shadow:0 1px 3px rgba(5,28,44,.05); display:flex; flex-direction:column;}
  .face .who{display:flex; align-items:center; gap:10px; margin-bottom:14px;}
  .face .who .em{font-size:26px;}
  .face .who h3{font-size:15.5px; font-weight:800; color:var(--navy); line-height:1.4;}
  .face .say{background:var(--pain-bg); border-radius:12px 12px 12px 2px; padding:12px 14px;
    font-size:13px; color:var(--pain); font-weight:600; margin-bottom:12px; line-height:1.6;}
  .face ul{list-style:none;}
  .face li{font-size:13px; color:var(--ink-2); padding:6px 0 6px 18px; position:relative; line-height:1.55;}
  .face li::before{content:"—"; position:absolute; left:0; color:var(--pain); font-weight:700;}
  .face .punch{margin-top:auto; padding-top:14px; border-top:1px dashed var(--line);
    font-size:14px; font-weight:800; color:var(--navy); line-height:1.6;}

  /* 85% 轉折帶 */
  .knife{margin:52px 64px 0; text-align:center;}
  .knife p{font-size:17px; color:var(--ink-2);}
  .knife h2{font-size:30px; font-weight:900; color:var(--navy); margin-top:6px; letter-spacing:.02em;}
  .stat-band{margin:24px 64px 0; background:linear-gradient(120deg,var(--navy) 0%,var(--navy-2) 100%);
    border-radius:18px; padding:34px 40px; color:#F4EFE4; display:flex; align-items:center; gap:36px; flex-wrap:wrap;}
  .stat-band .big{font-size:64px; font-weight:900; color:var(--accent); line-height:1; letter-spacing:-.02em;}
  .stat-band .big small{font-size:22px; color:rgba(244,239,228,.6); font-weight:700;}
  .stat-band .txt{flex:1; min-width:300px;}
  .stat-band .txt h3{font-size:19px; font-weight:800; line-height:1.5;}
  .stat-band .txt p{font-size:14px; color:rgba(244,239,228,.75); margin-top:8px; line-height:1.7;}
  .stat-band .txt p b{color:var(--accent);}

  /* 好處 8 卡 */
  .bene{display:grid; grid-template-columns:repeat(4,1fr); gap:12px;}
  .b{background:var(--card); border:1px solid var(--line); border-radius:14px; padding:20px 18px;
    box-shadow:0 1px 3px rgba(5,28,44,.05); position:relative;}
  .b::before{content:""; position:absolute; top:0; left:18px; width:34px; height:3px; border-radius:0 0 4px 4px; background:var(--accent);}
  .b .ic{font-size:22px; margin-bottom:10px;}
  .b h3{font-size:16px; font-weight:900; color:var(--navy); margin-bottom:6px;}
  .b p{font-size:12.5px; color:var(--ink-2); line-height:1.6;}
  .b p b{color:var(--navy);}

  /* 安心條款帶 */
  .trust{margin:18px 0 0; display:grid; grid-template-columns:repeat(4,1fr); gap:12px;}
  .t{background:var(--good-bg); border-radius:12px; padding:14px 16px; font-size:12.5px; color:var(--ink);
    display:flex; gap:8px; align-items:flex-start; line-height:1.55;}
  .t::before{content:"✓"; color:var(--good); font-weight:900;}
  .t b{color:var(--good);}

  /* 實錄問答 */
  .qa{max-width:820px; margin:0 auto;}
  .qa .q{background:linear-gradient(120deg,var(--navy) 0%,var(--navy-2) 100%); color:#F4EFE4;
    border-radius:14px 14px 2px 14px; padding:14px 18px; font-size:14.5px; font-weight:600;
    margin:14px 0 10px 18%; line-height:1.7;}
  .qa .q .tag{display:block; font-size:11px; letter-spacing:.14em; color:var(--accent); font-weight:800; margin-bottom:4px;}
  .qa .a{background:var(--card); border:1px solid var(--line); border-left:4px solid var(--good);
    border-radius:2px 14px 14px 14px; padding:14px 18px; font-size:13.5px; color:var(--ink);
    margin:0 18% 6px 0; line-height:1.75; box-shadow:0 1px 3px rgba(5,28,44,.05);}
  .qa .a .tag{display:block; font-size:11px; letter-spacing:.14em; color:var(--good); font-weight:800; margin-bottom:4px;}
  .qa .cap{font-size:12px; color:var(--ink-3); margin:2px 18% 18px 0;}

  /* Demo 2 精華帶 */
  .demo-band{margin:26px 0 0; background:linear-gradient(120deg,var(--navy) 0%,var(--navy-2) 100%);
    border-radius:18px; padding:30px 36px; color:#F4EFE4;}
  .demo-band .dh{font-size:18px; font-weight:800; line-height:1.5;}
  .demo-band .dh em{font-style:normal; color:var(--accent);}
  .demo-nums{display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin:20px 0 16px;}
  .dn{background:rgba(244,239,228,.06); border:1px solid rgba(201,164,92,.35); border-radius:12px; padding:14px 16px;}
  .dn .n{font-size:34px; font-weight:900; color:var(--accent); line-height:1.15;}
  .dn .d{font-size:12px; color:rgba(244,239,228,.75); margin-top:2px; line-height:1.5;}
  .demo-band .dp{font-size:13.5px; color:rgba(244,239,228,.85); line-height:1.8;}
  .demo-band .dp b{color:var(--accent);}
  .demo-band .anon{font-size:11.5px; color:rgba(244,239,228,.5); margin-top:12px;}
  @media (max-width:860px){ .qa .q{margin-left:6%;} .qa .a{margin-right:6%;} .demo-nums{grid-template-columns:1fr;} }

  /* 驗收帶 */
  .accept{margin:40px 64px 0; background:var(--card); border:1.5px solid var(--accent); border-radius:18px;
    padding:28px 36px; display:flex; gap:24px; align-items:center; flex-wrap:wrap;}
  .accept .badge{background:var(--accent); color:#3B2D10; font-weight:900; font-size:14px;
    border-radius:10px; padding:12px 18px; white-space:nowrap;}
  .accept .txt h3{font-size:17px; font-weight:800; color:var(--navy);}
  .accept .txt p{font-size:13.5px; color:var(--ink-2); margin-top:4px; line-height:1.7;}

  /* CTA 留白區 */
  .closer{margin:44px 64px 0; text-align:center;}
  .closer p{font-size:16px; color:var(--ink-2);}
  .closer h2{font-size:28px; font-weight:900; color:var(--accent-deep); margin-top:6px;}
  .cta{margin:24px 64px 0; border:2px dashed #C9C2B2; border-radius:18px; padding:30px 36px; text-align:center;}
  .cta .ph{font-size:13px; color:var(--ink-3); letter-spacing:.06em;}
  .cta .ph b{color:var(--ink-2);}
  .cta-live{border:none; background:linear-gradient(120deg,var(--navy) 0%,var(--navy-2) 100%); color:#F4EFE4;}
  .cta-live .brand{font-size:20px; font-weight:900;}
  .cta-live .brand span{color:var(--accent); font-weight:700; margin-left:6px;}
  .cta-live .line{margin-top:6px; font-size:14px; color:rgba(244,239,228,.75);}
  .cta-live .url{display:inline-block; margin-top:14px; background:var(--accent); color:#3B2D10;
    font-weight:900; font-size:15px; text-decoration:none; border-radius:999px; padding:10px 28px; letter-spacing:.04em;}

  footer{margin:40px 64px 0; padding-top:16px; border-top:1px solid var(--line);
    display:flex; justify-content:space-between; font-size:11.5px; color:var(--ink-3); flex-wrap:wrap; gap:6px;}

  @media (max-width:860px){
    .hero{padding:44px 28px;} section{padding:36px 28px 4px;}
    .stat-band,.accept,.cta,footer{margin-left:28px; margin-right:28px;}
    .faces{grid-template-columns:1fr;} .bene,.trust{grid-template-columns:1fr 1fr;}
  }
</style>
</head>
<body>
<div class="page">

  <div class="hero">
    <div class="kicker">Bek AI OS · bekhelpme.com</div>
    <div class="q">問你一個問題——</div>
    <h1>你公司最值錢的答案，<br>現在存在<em>誰的腦袋</em>裡？</h1>
    <div class="a">ERP 裡？報表裡？還是某幾個資深員工的腦袋裡——他們一請假，全公司就開始用猜的。<br>你花三十年練出來的直覺，全公司只有一份，而且沒有備份。<br><b>Bek AI OS，把公司的資料和判斷，變成問得到的答案。</b></div>
  </div>

  <section>
    <div class="sec-head"><span class="sec-num">01</span><h2>這三種老闆，我們每週都遇到</h2></div>
    <div class="sec-lead">也許你是其中一種。也許，三種都是。</div>
    <div class="faces">
      <div class="face">
        <div class="who"><span class="em">🗄️</span><h3>ERP 用了十年的老闆</h3></div>
        <div class="say">「系統裡什麼都有，但我要一個數字，還是得等專員撈報表。」</div>
        <ul>
          <li>ERP 記得每一筆帳，但「為什麼這樣做」，只有那幾個人記得</li>
          <li>「這案子毛利差在哪」——要業務、採購、財務三個人對半天</li>
          <li>導入花了上百萬，員工回頭還是用 Excel 加 LINE 傳檔案</li>
          <li>小孩不是不想接，是接不到你腦子裡那套沒寫下來的東西</li>
        </ul>
        <div class="punch">老師傅退休那天，帶走的不是茶杯，<br>是公司三十年的判斷。</div>
      </div>
      <div class="face">
        <div class="who"><span class="em">🌊</span><h3>知道 AI 是浪潮、不知道從哪開始的老闆</h3></div>
        <div class="say">「每個工具都說自己是答案，我越看越不敢動。」</div>
        <ul>
          <li>員工早就在用 ChatGPT，只是把公司資料貼出去前，沒人問過你</li>
          <li>開了三次會、聽了兩場演講，公司還在原地。那叫關心，不叫開始</li>
          <li>你說再等等看，可是同業已經開始把老師傅的經驗變成系統了</li>
        </ul>
        <div class="punch">不懂不敢問，是面子；<br>三年後還不懂，就是裡子的問題了。</div>
      </div>
      <div class="face">
        <div class="who"><span class="em">💸</span><h3>已經花了錢、還沒看到效益的老闆</h3></div>
        <div class="say">「demo 那天大家都說驚豔，三個月後，系統安靜得像沒買過。」</div>
        <ul>
          <li>AI 答得頭頭是道，就是答不出你們公司自己的事</li>
          <li>知識庫答錯過一次，就再也沒人敢信</li>
          <li>顧問的報告很厚，落地的部分很薄。你付的是重量的錢</li>
        </ul>
        <div class="punch">你不是沒花錢，<br>是花的錢都還沒變成答案。</div>
      </div>
    </div>
  </section>

  <div class="knife">
    <p>半夜想的那句「哪天我不在，公司還轉得動嗎」——</p>
    <h2>你其實已經知道答案。</h2>
  </div>

  <div class="stat-band">
    <div class="big">85<small>%</small></div>
    <div class="txt">
      <h3>85% 的企業自建 AI 知識庫，上不了線。</h3>
      <p>不是工具不好，是沒有人對答案的品質負責。 Bek AI OS 賣的不是軟體——是<b>有人對每一個答案負責</b>。</p>
    </div>
  </div>

  <section>
    <div class="sec-head"><span class="sec-num">02</span><h2>Bek AI OS 做的事，一句話：讓公司自己會回答</h2></div>
    <div class="sec-lead">問題從來不在你買過的工具，在它答的永遠是網路的事，不是你的事。 Bek AI OS 答的，只有你公司的事——</div>
    <div class="bene">
      <div class="b"><div class="ic">⚡</div><h3>問了就有答案</h3><p>「協力商○○去年追加幾次、金額多少？」泡杯茶的時間答案就到——<b>不用等人撈報表，不用開會對數字。</b></p></div>
      <div class="b"><div class="ic">📎</div><h3>每句附出處</h3><p>答案旁邊就是資料來源——敢信、可查證，錯了也知道去哪修。</p></div>
      <div class="b"><div class="ic">🤐</div><h3>不會亂編</h3><p>資料裡沒有的，它老實說「查無資料」。<b>這是跟一般 AI 最大的差別。</b></p></div>
      <div class="b"><div class="ic">🔌</div><h3>不用換 ERP</h3><p>接在你的 ERP 上面，只讀不寫——把你<b>已經付過錢的資料</b>，變成問得到的答案。</p></div>
      <div class="b"><div class="ic">🧠</div><h3>判斷不下班</h3><p>老闆和關鍵人員的判斷邏輯數位化——<b>人可以休假，判斷不下班。</b></p></div>
      <div class="b"><div class="ic">🤝</div><h3>交接不崩潰</h3><p>新人接案，背景、進度、文件、對接窗口，一次問齊——不用再翻三年的信。</p></div>
      <div class="b"><div class="ic">📌</div><h3>裁示有痕</h3><p>上週會議裁了什麼、誰負責、期限何時——隨時查，不用再「我記得好像是…」。</p></div>
      <div class="b"><div class="ic">🔐</div><h3>權限分得清</h3><p>主管看的和同仁看的不一樣，資料列層級隔離——<b>敏感數字，敢放進來了。</b></p></div>
    </div>
    <div class="trust">
      <div class="t"><span><b>驗收先講好</b>——20 題專挑你問 ERP、CRM 都拿不到答案的問題； Bek AI OS 答得出、答得準，過了才算數</span></div>
      <div class="t"><span><b>越用越準</b>——每月複診校準，系統跟著公司長大</span></div>
      <div class="t"><span><b>資料是你的</b>——永久可匯出，不用於任何模型訓練</span></div>
      <div class="t"><span><b>不綁單一 AI 模型</b>——開放標準，AI 進步你跟著升級</span></div>
    </div>
  </section>

  <section>
    <div class="sec-head"><span class="sec-num">03</span><h2>真的用起來的樣子——不是想像，是實錄</h2></div>
    <div class="sec-lead">下面每一段都取自真實紀錄（人名、公司、金額已代稱與模糊化）。你在讀的時候可以一直問：「這句話，AI 憑什麼敢講？」答案永遠是——因為查得到。</div>

    <div class="qa">
      <div class="q"><span class="tag">老闆問</span>這批產品為什麼改用 B 家的原料？（ERP 沒有這個欄位——答案在資深採購腦裡）</div>
      <div class="a"><span class="tag">Bek AI OS 答</span>2025 年 3 月，A 家的原料品質不穩、連續兩批返工，王主任裁示改用 B 家——附當時的紀錄。</div>
      <div class="cap">老闆問「上個月毛利多少？」ERP 馬上給數字；這種「為什麼」的問題，是 Bek AI OS 的事。</div>
      <div class="q"><span class="tag">品保問</span>這批檢驗不合格，怎麼辦？（ERP 只能列出這批的檢驗數字）</div>
      <div class="a"><span class="tag">Bek AI OS 答</span>過去五年類似狀況有三次——兩次是製程參數異常、一次是原料受潮，當時的處理方式是……每一句都附出處。</div>
      <div class="cap">新進同仁第一天就問得到——不必等到隔天堵到資深主管，才敢下判斷。</div>
    </div>

    <div class="demo-band">
      <div class="dh">某家公司的老闆，打了<em>三句白話</em>——</div>
      <div class="demo-nums">
        <div class="dn"><div class="n">65</div><div class="d">筆有日期、有出處的紀錄，14 天、8 位成員——沒有人為了報告多做任何事</div></div>
        <div class="dn"><div class="n">3</div><div class="d">句話：第一句換到統計表、第二句換到深度分析、第三句換到待決清單</div></div>
        <div class="dn"><div class="n">11</div><div class="d">件待決定，一頁看完——每件寫清楚誰決定、建議選哪個</div></div>
      </div>
      <div class="dp">掃描還抓出了真正的瓶頸：員工用了 AI 之後做事快了好幾倍，公司的瓶頸從「事情做太慢」變成<b>「在等老闆決定」</b>——每件等待都附上報日期、已等幾天。三個「新功能」當場誕生，中間<b>沒有任何開發案</b>。</div>
      <div class="anon">真實營運掃描實錄，約 8 人規模設計整合企業；人名、公司、金額已代稱與模糊化。完整 12 頁實錄，索取請洽下方。</div>
    </div>
  </section>

  <div class="accept">
    <div class="badge">導入前，先定驗收</div>
    <div class="txt">
      <h3>不是我們說好才算好——是你們出題。</h3>
      <p>導入前，由你們各部門出 20 題——專挑那些問 ERP、CRM 都拿不到答案、但答出來就能幫公司做得更好的問題；驗收當天還可以當場加考沒看過的題目。答對、附出處、不亂編——三關都過，才叫上線。</p>
    </div>
  </div>

  <div class="closer">
    <p>你不是不想動，是怕又繳一次學費。</p>
    <h2>可是觀望，本身最貴。</h2>
  </div>

  <!-- added:cross-link -->
  <style>
    .xlink-band{margin:32px 64px 0; background:var(--card); border:1.5px solid var(--accent); border-radius:18px;
      padding:24px 36px; text-align:center;}
    .xlink-title{font-size:15px; font-weight:800; color:var(--navy); margin-bottom:8px;}
    .xlink-link{font-size:14px; color:var(--ink-2); text-decoration:none; border-bottom:1px solid var(--line); padding-bottom:2px;}
    .xlink-link:hover{color:var(--accent-deep);}
    @media (max-width:860px){ .xlink-band{margin-left:28px; margin-right:28px;} }
  </style>
  <div class="xlink-band">
    <div class="xlink-title">想看系統骨架？</div>
    <a class="xlink-link" href="/truth-brain">真腦 Truth Brain 技術概要（去敏版）——架構、資料流、備份復原、拿得走的東西，一頁講清楚 →</a>
  </div>
  <!-- /added:cross-link -->

  <div class="cta cta-live">
    <div class="brand">Bek AI OS <span>模型大家共用，脈絡只屬於你一家</span></div>
    <div class="line">免費 30 分鐘諮詢：cal.com/bektsai/30min</div>
    <div class="line">想看你們公司自己資料的 demo？</div>
    <a class="url" href="https://www.bekhelpme.com/">www.bekhelpme.com</a>
  </div>

  <footer>
    <span><b>Bek AI OS</b>｜把公司的資料和判斷，變成問得到的答案</span>
    <span>本文件為說明資料，服務內容以正式報價與合約為準</span>
  </footer>

</div>
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
