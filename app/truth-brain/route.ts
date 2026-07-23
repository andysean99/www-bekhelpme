export const dynamic = "force-static";

const html = String.raw`<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>真腦 Truth Brain｜技術概要（去敏版 v1.0）</title>
<!-- added:seo -->
<meta name="description" content="每個答案都有出處的企業知識系統——部署架構、資料流、備份復原、權限資安、隨時拿得走的東西，一頁講清楚。真腦 Truth Brain 技術概要（去敏版）。">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.bekhelpme.com/truth-brain">
<meta property="og:title" content="真腦 Truth Brain｜技術概要（去敏版）">
<meta property="og:description" content="每個答案都有出處的企業知識系統——部署架構、資料流、備份復原、權限資安、隨時拿得走的東西，一頁講清楚。">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.bekhelpme.com/truth-brain">
<meta property="og:locale" content="zh_TW">
<meta property="og:image" content="https://www.bekhelpme.com/api/og/truth-brain">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="真腦 Truth Brain｜技術概要（去敏版）">
<meta name="twitter:description" content="每個答案都有出處的企業知識系統——架構、資料流、備份復原、可攜性，一頁講清楚。">
<meta name="twitter:image" content="https://www.bekhelpme.com/api/og/truth-brain">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"真腦 Truth Brain｜技術概要（去敏版）","description":"每個答案都有出處的企業知識系統——部署架構、資料流、備份復原、權限資安、隨時拿得走的東西，一頁講清楚。","url":"https://www.bekhelpme.com/truth-brain","inLanguage":"zh-Hant","publisher":{"@type":"Person","name":"Bek Tsai","url":"https://www.bekhelpme.com"}}</script>
<!-- /added:seo -->
<!-- added:ga4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NLVESXBBMR"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-NLVESXBBMR');</script>
<!-- /added:ga4 -->
<style>
  :root{
    --navy:#051C2C; --navy-2:#0B2A40; --navy-3:#123B57;
    --ink:#16232E; --ink-2:#4A5B68; --ink-3:#7A8894;
    --paper:#F7F5F0; --card:#FFFFFF; --line:#E4E0D6;
    --accent:#C9A45C; --accent-deep:#A5813C;
    --good:#2E7D4F; --good-bg:#EAF3ED;
    --blue:#2F6FA7; --blue-bg:#EBF2F8;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{
    font-family:"Noto Sans TC","PingFang TC","Microsoft JhengHei",-apple-system,sans-serif;
    background:var(--paper); color:var(--ink);
    -webkit-font-smoothing:antialiased; line-height:1.6;
  }
  .page{max-width:1080px;margin:0 auto;padding:0 0 64px;}

  /* ---------- HERO ---------- */
  .hero{
    background:linear-gradient(135deg,#041623 0%,var(--navy) 45%,#0E3049 100%);
    color:#F4EFE4; padding:56px 64px 48px; position:relative; overflow:hidden;
  }
  .hero::after{
    content:""; position:absolute; right:-120px; top:-120px; width:420px; height:420px;
    border-radius:50%; border:1px solid rgba(201,164,92,.25);
    box-shadow:0 0 0 60px rgba(201,164,92,.05), 0 0 0 130px rgba(201,164,92,.03);
  }
  .hero .kicker{
    display:inline-flex; align-items:center; gap:8px;
    font-size:12px; letter-spacing:.22em; color:var(--accent);
    text-transform:uppercase; margin-bottom:18px; font-weight:700;
  }
  .hero .kicker::before{content:""; width:28px; height:1px; background:var(--accent);}
  .hero h1{font-size:40px; font-weight:900; letter-spacing:.02em; line-height:1.25;}
  .hero h1 .en{font-weight:300; color:rgba(244,239,228,.55); font-size:26px; margin-left:10px;}
  .hero .sub{margin-top:10px; font-size:15px; color:rgba(244,239,228,.75);}
  .hero .chips{display:flex; gap:10px; margin-top:28px; flex-wrap:wrap; position:relative; z-index:1;}
  .chip{
    background:rgba(255,255,255,.07); border:1px solid rgba(244,239,228,.18);
    border-radius:999px; padding:7px 16px; font-size:13.5px; color:#F4EFE4;
    backdrop-filter:blur(4px);
  }
  .chip b{color:var(--accent); font-weight:700; margin-right:6px;}
  .hero .meta{margin-top:26px; font-size:11.5px; color:rgba(244,239,228,.45); letter-spacing:.04em;}

  /* ---------- SECTIONS ---------- */
  section{padding:40px 64px 8px;}
  .sec-head{display:flex; align-items:baseline; gap:14px; margin-bottom:20px;}
  .sec-num{
    font-size:13px; font-weight:800; color:var(--accent-deep);
    border:1.5px solid var(--accent); border-radius:6px; padding:2px 9px; letter-spacing:.08em;
    background:#fff;
  }
  .sec-head h2{font-size:21px; font-weight:800; color:var(--navy); letter-spacing:.01em;}
  .sec-head .note{font-size:13px; color:var(--ink-3); margin-left:auto;}

  /* ---------- 架構分層 ---------- */
  .arch{display:grid; grid-template-columns:1fr 300px; gap:20px; align-items:stretch;}
  .layers{display:flex; flex-direction:column; gap:10px;}
  .layer{
    background:var(--card); border:1px solid var(--line); border-radius:14px;
    padding:18px 22px; display:flex; align-items:center; gap:18px;
    box-shadow:0 1px 3px rgba(5,28,44,.05);
  }
  .layer .tag{
    min-width:86px; text-align:center; font-size:13px; font-weight:800;
    border-radius:8px; padding:8px 0; letter-spacing:.06em;
  }
  .layer.app .tag{background:var(--navy); color:#F4EFE4;}
  .layer.gov .tag{background:var(--accent); color:#3B2D10;}
  .layer.data .tag{background:var(--blue-bg); color:var(--blue); border:1px solid #C7DAEA;}
  .layer h3{font-size:15.5px; font-weight:700; color:var(--navy);}
  .layer p{font-size:13px; color:var(--ink-2); margin-top:2px;}
  .iso{
    background:var(--navy); border-radius:14px; color:#F4EFE4; padding:24px;
    display:flex; flex-direction:column; justify-content:center; gap:8px; position:relative; overflow:hidden;
  }
  .iso::before{content:"◈"; position:absolute; right:16px; bottom:8px; font-size:64px; color:rgba(201,164,92,.15);}
  .iso .t{font-size:12px; letter-spacing:.18em; color:var(--accent); font-weight:700;}
  .iso h3{font-size:19px; font-weight:800; line-height:1.4;}
  .iso p{font-size:12.5px; color:rgba(244,239,228,.65);}

  /* ---------- 資料流 ---------- */
  .flow{
    background:var(--card); border:1px solid var(--line); border-radius:16px;
    padding:28px 24px 22px; box-shadow:0 1px 3px rgba(5,28,44,.05);
  }
  .flow-track{display:flex; align-items:stretch; gap:0;}
  .fnode{flex:1; text-align:center; position:relative; padding:0 4px;}
  .fnode .dot{
    width:44px; height:44px; border-radius:12px; margin:0 auto 10px;
    display:flex; align-items:center; justify-content:center; font-size:19px;
    background:var(--blue-bg); color:var(--blue); border:1px solid #C7DAEA;
  }
  .fnode.key .dot{background:var(--navy); color:var(--accent); border-color:var(--navy);}
  .fnode h4{font-size:13.5px; font-weight:800; color:var(--navy);}
  .fnode p{font-size:11px; color:var(--ink-3); line-height:1.45; margin-top:3px;}
  .fnode:not(:last-child)::after{
    content:"→"; position:absolute; right:-9px; top:12px; font-size:16px; color:var(--accent-deep); font-weight:700;
  }
  .flow-note{
    margin-top:18px; border-top:1px dashed var(--line); padding-top:12px;
    display:flex; gap:24px; font-size:12.5px; color:var(--ink-2); flex-wrap:wrap;
  }
  .flow-note span b{color:var(--navy);}

  /* ---------- STAT TILES ---------- */
  .tiles{display:grid; grid-template-columns:repeat(6,1fr); gap:12px;}
  .tile{
    background:var(--card); border:1px solid var(--line); border-radius:14px;
    padding:18px 14px 14px; text-align:center; box-shadow:0 1px 3px rgba(5,28,44,.05);
    position:relative;
  }
  .tile::before{content:""; position:absolute; top:0; left:18%; right:18%; height:3px; border-radius:0 0 4px 4px; background:var(--accent);}
  .tile .v{font-size:25px; font-weight:900; color:var(--navy); letter-spacing:-.01em; line-height:1.1;}
  .tile .v small{font-size:13px; font-weight:700; color:var(--ink-2);}
  .tile .k{font-size:12px; color:var(--ink-2); margin-top:6px; font-weight:500;}
  .tile.zero::before{background:var(--good);}
  .tile.zero .v{color:var(--good);}

  /* ---------- 第三方卡 ---------- */
  .vendors{display:grid; grid-template-columns:repeat(3,1fr); gap:14px;}
  .vendor{
    background:var(--card); border:1px solid var(--line); border-radius:14px; padding:20px;
    box-shadow:0 1px 3px rgba(5,28,44,.05); display:flex; flex-direction:column; gap:8px;
  }
  .vendor h3{font-size:16px; font-weight:800; color:var(--navy);}
  .vendor .role{font-size:13px; color:var(--ink-2);}
  .vendor .policy{
    margin-top:auto; font-size:12px; font-weight:700; color:var(--good);
    background:var(--good-bg); border-radius:8px; padding:7px 10px; display:flex; gap:6px; align-items:flex-start;
  }
  .vendor .policy::before{content:"✓"; font-weight:900;}

  /* ---------- 資安 ---------- */
  .sec-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:12px;}
  .sg{
    background:var(--card); border:1px solid var(--line); border-radius:14px; padding:18px;
    box-shadow:0 1px 3px rgba(5,28,44,.05);
  }
  .sg .ic{font-size:20px; margin-bottom:8px;}
  .sg h4{font-size:14px; font-weight:800; color:var(--navy); line-height:1.4;}
  .sg p{font-size:12px; color:var(--ink-2); margin-top:4px;}
  .demo-badge{
    display:inline-flex; align-items:center; gap:8px; margin-top:14px;
    background:var(--navy); color:#F4EFE4; font-size:12.5px; font-weight:700;
    border-radius:999px; padding:8px 18px;
  }
  .demo-badge b{color:var(--accent);}

  /* ---------- 拿得走 / 不交付 ---------- */
  .exit{display:grid; grid-template-columns:1.4fr 1fr; gap:14px;}
  .exit .take{
    background:var(--card); border:1px solid var(--line); border-radius:14px; padding:22px 24px;
    box-shadow:0 1px 3px rgba(5,28,44,.05);
  }
  .exit .take h3, .exit .seal h3{font-size:15.5px; font-weight:800; margin-bottom:12px;}
  .exit .take h3{color:var(--good);}
  .exit ul{list-style:none;}
  .exit .take li{
    font-size:13.5px; color:var(--ink); padding:7px 0 7px 26px; position:relative;
    border-bottom:1px dashed var(--line);
  }
  .exit .take li:last-child{border-bottom:none;}
  .exit .take li::before{content:"✓"; position:absolute; left:2px; color:var(--good); font-weight:900;}
  .exit .take li b{font-weight:700;}
  .exit .take li span{color:var(--ink-3); font-size:12px;}
  .exit .seal{
    background:linear-gradient(160deg,var(--navy) 0%,var(--navy-2) 100%);
    border-radius:14px; padding:22px 24px; color:#F4EFE4;
  }
  .exit .seal h3{color:var(--accent);}
  .exit .seal li{font-size:13.5px; padding:7px 0 7px 26px; position:relative; color:rgba(244,239,228,.85); border-bottom:1px dashed rgba(244,239,228,.15);}
  .exit .seal li:last-child{border-bottom:none;}
  .exit .seal li::before{content:"↻"; position:absolute; left:2px; color:var(--accent); font-weight:900;}
  .exit .seal .why{
    margin-top:14px; font-size:12.5px; color:rgba(244,239,228,.65);
    border-left:2px solid var(--accent); padding-left:12px; line-height:1.7;
  }
  .exit .seal .why b{color:var(--accent);}

  /* ---------- FOOTER ---------- */
  footer{
    margin:44px 64px 0; padding-top:18px; border-top:1px solid var(--line);
    display:flex; justify-content:space-between; font-size:11.5px; color:var(--ink-3); flex-wrap:wrap; gap:8px;
  }
  footer b{color:var(--navy);}

  @media (max-width:860px){
    .hero{padding:40px 28px;}
    section{padding:32px 28px 4px;}
    footer{margin:36px 28px 0;}
    .arch{grid-template-columns:1fr;}
    .tiles{grid-template-columns:repeat(3,1fr);}
    .vendors,.sec-grid{grid-template-columns:1fr 1fr;}
    .exit{grid-template-columns:1fr;}
    .flow-track{flex-wrap:wrap; gap:14px;}
    .fnode{flex:1 1 30%;}
    .fnode:not(:last-child)::after{display:none;}
  }
</style>
</head>
<body>
<div class="page">

  <div class="hero">
    <div class="kicker">Technical Overview · 去敏版 v1.0</div>
    <h1>真腦<span class="en">Truth Brain</span> 技術概要</h1>
    <div class="sub">每個答案都有出處的企業知識系統——這一頁講清楚四件事。</div>
    <div class="chips">
      <div class="chip"><b>01</b>系統長什麼樣</div>
      <div class="chip"><b>02</b>資料怎麼流</div>
      <div class="chip"><b>03</b>壞掉了怎麼辦</div>
      <div class="chip"><b>04</b>哪些東西隨時拿得走</div>
    </div>
    <div class="meta">2026-07｜本文件為說明文件，不構成合約條款；規格細節以規格書為準｜可轉用於終端客戶</div>
  </div>

  <section>
    <div class="sec-head"><span class="sec-num">01</span><h2>部署架構</h2><span class="note">三層分工，權責清楚</span></div>
    <div class="arch">
      <div class="layers">
        <div class="layer app">
          <div class="tag">應用層</div>
          <div><h3>AI 查詢介面</h3><p>用日常語言發問，每個回答附資料出處——答案可驗證，不是黑箱。</p></div>
        </div>
        <div class="layer gov">
          <div class="tag">治理層</div>
          <div><h3>權限・稽核・範圍</h3><p>角色權限、資料列層級隔離、操作留痕——誰能看什麼、誰問過什麼，都有紀錄。</p></div>
        </div>
        <div class="layer data">
          <div class="tag">資料層</div>
          <div><h3>企業級資料庫＋向量檢索</h3><p>結構化資料與語意索引並存，答得出數字，也答得出脈絡。</p></div>
        </div>
      </div>
      <div class="iso">
        <div class="t">SINGLE-TENANT</div>
        <h3>每個客戶<br>一套獨立實例</h3>
        <p>資料庫、知識庫、權限設定完全獨立，不與任何其他客戶共用。語言模型以 API 呼叫，不儲存、不訓練客戶資料。</p>
      </div>
    </div>
  </section>

  <section>
    <div class="sec-head"><span class="sec-num">02</span><h2>資料流</h2><span class="note">權限管住答案——每一句都帶出處</span></div>
    <div class="flow">
      <div class="flow-track">
        <div class="fnode"><div class="dot">📁</div><h4>原始資料</h4><p>依題本界定範圍</p></div>
        <div class="fnode"><div class="dot">⚙️</div><h4>匯入標準化</h4><p>單向匯入・不回寫</p></div>
        <div class="fnode"><div class="dot">🗄️</div><h4>知識庫</h4><p>結構化＋向量索引</p></div>
        <div class="fnode key"><div class="dot">🛡️</div><h4>權限把關</h4><p>無權限的資料<br>進不了答案</p></div>
        <div class="fnode"><div class="dot">🤖</div><h4>生成答案</h4><p>標注資料出處</p></div>
        <div class="fnode"><div class="dot">💬</div><h4>回覆使用者</h4><p>可追溯・可驗證</p></div>
      </div>
      <div class="flow-note">
        <span><b>全程稽核：</b>查詢與管理操作留紀錄，僅增不改</span>
        <span><b>來源系統零風險：</b>ERP 等既有系統只讀不寫</span>
      </div>
    </div>
  </section>

  <section>
    <div class="sec-head"><span class="sec-num">03</span><h2>備份・復原・穩定</h2><span class="note">不是口頭承諾——驗收當場演示還原</span></div>
    <div class="tiles">
      <div class="tile"><div class="v">每日</div><div class="k">自動備份</div></div>
      <div class="tile"><div class="v">≤24<small>小時</small></div><div class="k">資料遺失容忍上限 RPO</div></div>
      <div class="tile"><div class="v">≤1<small>工作天</small></div><div class="k">還原時間 RTO</div></div>
      <div class="tile"><div class="v">24<small>小時</small></div><div class="k">事故知悉後通知</div></div>
      <div class="tile"><div class="v">30<small>日</small></div><div class="k">驗收後穩定觀察期</div></div>
      <div class="tile zero"><div class="v">0</div><div class="k">權限洩漏容忍</div></div>
    </div>
  </section>

  <section>
    <div class="sec-head"><span class="sec-num">04</span><h2>第三方元件</h2><span class="note">用了什麼、資料政策是什麼，全部攤開</span></div>
    <div class="vendors">
      <div class="vendor">
        <h3>AI 語言模型（可替換）</h3>
        <div class="role">經開放的 MCP 標準介面呼叫，不綁定單一模型——現行採用 Anthropic Claude；OpenAI、Google Gemini、xAI 等主流模型已原生支援 MCP，可依需求評估替換。</div>
        <div class="policy">模型選用以「API 資料不用於訓練」之企業條款為前提</div>
      </div>
      <div class="vendor">
        <h3>PostgreSQL</h3>
        <div class="role">企業級開源資料庫——資料儲存、權限（資料列層級隔離）、每日備份。</div>
        <div class="policy">客戶資料歸客戶所有</div>
      </div>
      <div class="vendor">
        <h3>客戶既有系統（ERP 等）</h3>
        <div class="role">以匯出檔或連接器單向匯入。</div>
        <div class="policy">只讀取，不回寫來源系統</div>
      </div>
    </div>
  </section>

  <section>
    <div class="sec-head"><span class="sec-num">05</span><h2>權限與資安</h2><span class="note">說到做到的部分，驗收當天做給你看</span></div>
    <div class="sec-grid">
      <div class="sg"><div class="ic">🔐</div><h4>角色權限＋資料列隔離</h4><p>主管限定的資料，一般帳號查不到。</p></div>
      <div class="sg"><div class="ic">👥</div><h4>兩帳號互測</h4><p>不同權限帳號互查對方資料，洩漏數必須是 0。</p></div>
      <div class="sg"><div class="ic">🧪</div><h4>惡意文件抽測</h4><p>上傳含指令的文件 3–5 例，不得改變系統行為。</p></div>
      <div class="sg"><div class="ic">📜</div><h4>稽核紀錄</h4><p>查詢與管理操作全留痕，僅增不改。</p></div>
    </div>
    <div class="demo-badge">▶ 以上第 2、3 項＋備份還原，<b>驗收當場演示</b>，不是紙上聲明</div>
  </section>

  <section>
    <div class="sec-head"><span class="sec-num">06</span><h2>你隨時拿得走的東西</h2><span class="note">自驗收通過日即可行使，無前提條件</span></div>
    <div class="exit">
      <div class="take">
        <h3>✓ 永久可匯出（CSV／JSON 通用格式）</h3>
        <ul>
          <li><b>營運資料</b>　<span>你的資料，本來就是你的</span></li>
          <li><b>資料模型（Ontology）與設定</b>　<span>永久使用權</span></li>
          <li><b>欄位對應</b>　<span>接手方看得懂</span></li>
          <li><b>稽核紀錄</b>　<span>誰查過什麼，帶得走</span></li>
        </ul>
      </div>
      <div class="seal">
        <h3>持續調校（訂閱內含）</h3>
        <ul>
          <li class="plus">每月複診：使用紀錄檢視、答案品質校準</li>
          <li class="plus">決策引擎隨貴司實際裁示持續更新</li>
        </ul>
        <div class="why"><b>這是系統越用越準的原因</b>——也是一次性買斷交付做不到的部分。</div>
      </div>
    </div>
  </section>

  <!-- added:cross-link -->
  <style>
    .xlink-wrap{padding:40px 64px 8px;}
    .xlink-card{
      background:var(--card); border:1.5px solid var(--accent); border-radius:16px;
      padding:24px 28px; box-shadow:0 1px 3px rgba(5,28,44,.05);
      display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap;
    }
    .xlink-card h3{font-size:17px; font-weight:800; color:var(--navy);}
    .xlink-card a{
      font-size:14px; font-weight:700; color:var(--accent-deep);
      text-decoration:none; border-bottom:1.5px solid var(--accent-deep); padding-bottom:2px;
    }
    @media (max-width:860px){
      .xlink-wrap{padding:32px 28px 4px;}
    }
  </style>
  <div class="xlink-wrap">
    <div class="xlink-card">
      <h3>這套系統能幫公司做到什麼？</h3>
      <a href="/bek-ai-os">Bek AI OS 好處總覽——問了就有答案、每句附出處、判斷不下班 →</a>
    </div>
  </div>
  <!-- /added:cross-link -->
  <footer>
    <span><b>真腦 Truth Brain</b>｜技術概要 去敏版 v1.0</span>
    <span>本文件不構成合約條款，規格細節以規格書為準</span>
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
