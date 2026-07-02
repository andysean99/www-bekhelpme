import { NextResponse } from "next/server";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Bek Open Brain｜治理優先的 AI 記憶層",
  "description": "整理好的資料夾只是地基。Bek Open Brain 在資料夾之上加一層治理：每條知識帶來源、信心、有效期，想影響決策得先過升級閘門（Promotion Gate）。整理 ≠ 可信任。",
  "url": "https://www.bekhelpme.com/bek-open-brain",
  "inLanguage": "zh-TW",
  "datePublished": "2026-06-19",
  "dateModified": "2026-06-19",
  "author": {
    "@type": "Person",
    "name": "Bek Tsai",
    "alternateName": ["Bek", "蔡奇峯"],
    "url": "https://www.bekhelpme.com"
  },
  "publisher": {
    "@type": "Person",
    "name": "Bek Tsai",
    "url": "https://www.bekhelpme.com"
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "Bekhelpme.com",
    "url": "https://www.bekhelpme.com"
  },
  "about": [
    { "@type": "Thing", "name": "AI 記憶治理（AI memory governance）" },
    { "@type": "Thing", "name": "升級閘門（Promotion Gate）" },
    { "@type": "Thing", "name": "判斷萃取（judgment extraction）" },
    { "@type": "Thing", "name": "知識有效期（knowledge validity lifecycle）" },
    { "@type": "Thing", "name": "Bek OS" }
  ],
  "mentions": [
    { "@type": "SoftwareApplication", "name": "Obsidian" },
    { "@type": "SoftwareApplication", "name": "NotebookLM" },
    { "@type": "Thing", "name": "Google OKF（Open Knowledge Format）" },
    { "@type": "Thing", "name": "PARA method" }
  ],
  "keywords": "Bek Open Brain, AI 記憶層, 治理優先, Promotion Gate, 升級閘門, 判斷萃取, Bek OS, governance-first AI memory"
});

const META_TAGS = `<script type="application/ld+json">${JSON_LD}</script>
  <meta name="description" content="Bek Open Brain：治理優先的 AI 記憶層。整理好的資料夾只是地基，我們在上面加一層可以被信任的判斷——來源、信心、有效期與送出前校準。">
  <meta property="og:title" content="Bek Open Brain｜治理優先的 AI 記憶層">
  <meta property="og:description" content="整理 ≠ 可信任。我們在資料夾地基上，多加一層可以被信任的判斷。">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.bekhelpme.com/bek-open-brain">
  <meta property="og:locale" content="zh_TW">
  <meta property="og:image" content="https://www.bekhelpme.com/api/og/bek-open-brain">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Bek Open Brain｜治理優先的 AI 記憶層">
  <meta name="twitter:description" content="整理 ≠ 可信任。我們在資料夾地基上，多加一層可以被信任的判斷。">
  <meta name="twitter:image" content="https://www.bekhelpme.com/api/og/bek-open-brain">
  <link rel="canonical" href="https://www.bekhelpme.com/bek-open-brain">`;

// Source: bek-open-brain-comparison.html — do not edit content here directly;
// update the source HTML and re-embed.
const BASE_HTML = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bek Open Brain｜治理優先的 AI 記憶層</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700;900&family=Noto+Sans+TC:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --paper:#E7E8EA;
    --paper-2:#F4F5F6;
    --ink:#14171C;
    --console:#15181E;
    --console-2:#1E232C;
    --seal:#C2402A;
    --seal-soft:rgba(194,64,42,.10);
    --jade:#6FA08C;
    --jade-d:#4E8470;
    --amber:#C99A4B;
    --steel:#5C646F;
    --steel-d:#8E96A2;
    --line:rgba(20,23,28,.14);
    --line-d:rgba(255,255,255,.10);
    --maxw:1080px;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{
    background:var(--paper);
    color:var(--ink);
    font-family:"Noto Sans TC",sans-serif;
    line-height:1.85;
    font-size:17px;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }
  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}
  .mono{font-family:"IBM Plex Mono",monospace;font-weight:500;letter-spacing:.02em}
  .serif{font-family:"Noto Serif TC",serif}

  .eyebrow{
    font-family:"Noto Sans TC",sans-serif;font-weight:700;
    font-size:13px;letter-spacing:.06em;
    color:var(--seal);display:inline-flex;align-items:center;gap:10px;
  }
  .eyebrow::before{content:"";width:26px;height:1px;background:var(--seal)}

  header.bar{
    position:sticky;top:0;z-index:50;
    background:rgba(231,232,234,.82);backdrop-filter:blur(10px);
    border-bottom:1px solid var(--line);
  }
  .bar-in{display:flex;align-items:center;justify-content:space-between;height:62px}
  .brand{display:flex;align-items:center;gap:12px;font-weight:700;letter-spacing:.01em}
  .seal-mark{
    width:30px;height:30px;border-radius:6px;background:var(--seal);
    color:#fff;display:grid;place-items:center;
    font-family:"Noto Serif TC",serif;font-weight:900;font-size:17px;
    box-shadow:inset 0 0 0 1px rgba(255,255,255,.18);
  }
  .brand small{display:block;font-weight:400;font-size:11px;color:var(--steel);letter-spacing:.04em}
  .bar-tag{font-size:13px;color:var(--steel)}
  @media(max-width:640px){.bar-tag{display:none}}

  .hero{padding:84px 0 56px;position:relative}
  .hero h1{
    font-family:"Noto Serif TC",serif;font-weight:900;
    font-size:clamp(34px,6.2vw,62px);line-height:1.18;letter-spacing:-.01em;
    margin:22px 0 0;
  }
  .hero h1 .q{color:var(--seal);position:relative}
  .hero .lede{
    margin-top:26px;max-width:690px;font-size:clamp(16px,2.2vw,19px);
    color:#33373E;line-height:1.95;
  }
  .hero .lede b{font-weight:700;color:var(--ink)}
  .posline{
    margin-top:34px;display:inline-block;
    font-family:"Noto Serif TC",serif;font-weight:700;font-size:clamp(17px,2.6vw,22px);
    padding-bottom:6px;border-bottom:2px solid var(--seal);
  }

  section{padding:64px 0}
  .sec-head{max-width:760px}
  .sec-head h2{
    font-family:"Noto Serif TC",serif;font-weight:700;
    font-size:clamp(25px,4vw,38px);line-height:1.3;margin:16px 0 0;letter-spacing:-.005em;
  }
  .sec-head p{margin-top:18px;color:#3B3F46;max-width:680px}

  .twocol{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:34px}
  @media(max-width:760px){.twocol{grid-template-columns:1fr;gap:18px}}
  .card{
    background:var(--paper-2);border:1px solid var(--line);border-radius:14px;padding:26px 26px 28px;
  }
  .card h3{font-family:"Noto Serif TC",serif;font-weight:700;font-size:19px;margin-bottom:10px}
  .card.bad h3{color:var(--steel)}
  .card.good{border-color:rgba(111,160,140,.5);background:linear-gradient(180deg,#F4F5F6,#EEF3F0)}
  .card.good h3{color:var(--jade-d)}
  .card p{font-size:15.5px;color:#3B3F46;line-height:1.85}

  .profiles{margin-top:34px;display:grid;grid-template-columns:1fr 1fr;gap:16px}
  @media(max-width:760px){.profiles{grid-template-columns:1fr}}
  .prof{background:var(--paper-2);border:1px solid var(--line);border-radius:13px;padding:23px 24px 25px}
  .prof.wide{grid-column:1 / -1}
  .prof.lead{border-color:rgba(20,23,28,.34);background:#fff}
  .prof h3{font-family:"Noto Serif TC",serif;font-weight:700;font-size:18px;line-height:1.4;margin-bottom:3px}
  .prof .p-en{font-family:"IBM Plex Mono",monospace;font-size:11.5px;color:var(--steel);letter-spacing:.02em;margin-bottom:14px}
  .prof .p-tag{display:inline-block;font-size:11px;font-weight:700;color:var(--seal);background:var(--seal-soft);border-radius:999px;padding:2px 11px;margin-bottom:11px}
  .prof .p-row{font-size:14.5px;line-height:1.78;color:#3B3F46}
  .prof .p-row + .p-row{margin-top:11px;padding-top:11px;border-top:1px dashed var(--line)}
  .prof .p-k{font-size:11.5px;font-weight:700;display:block;margin-bottom:3px}
  .prof .good-k{color:var(--jade-d)}
  .prof .stop-k{color:var(--seal)}
  .prof b{color:var(--ink);font-weight:700}

  .console{
    background:var(--console);color:#E7E9EC;border-radius:18px;
    padding:44px clamp(20px,4vw,52px);margin-top:38px;
    border:1px solid var(--line-d);position:relative;overflow:hidden;
  }
  .console .eyebrow{color:#E08E7C}
  .console .eyebrow::before{background:#E08E7C}
  .console h2{font-family:"Noto Serif TC",serif;color:#fff;font-weight:700;font-size:clamp(23px,3.6vw,34px);margin:14px 0 6px;line-height:1.3}
  .console .sub{color:var(--steel-d);max-width:640px;font-size:15.5px}

  .lanes{margin-top:40px;display:flex;flex-direction:column;gap:30px}
  .lane{position:relative}
  .lane-label{
    font-weight:700;font-size:13px;letter-spacing:.04em;
    margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;
  }
  .lane.gov .lane-label{color:var(--jade)}
  .lane.raw .lane-label{color:var(--steel-d)}
  .tag-pill{font-size:12px;letter-spacing:0;padding:2px 9px;border-radius:999px}
  .lane.gov .tag-pill{background:rgba(111,160,140,.18);color:#9FCDBB}
  .lane.raw .tag-pill{background:rgba(194,64,42,.16);color:#E89484}

  .flow{display:flex;align-items:stretch;gap:0;flex-wrap:nowrap;overflow-x:auto;padding-bottom:6px}
  .node{
    flex:1 1 0;min-width:118px;background:var(--console-2);border:1px solid var(--line-d);
    border-radius:11px;padding:17px 14px;text-align:center;position:relative;
    display:flex;align-items:center;justify-content:center;
  }
  .node .n-zh{font-weight:700;font-size:15px;color:#fff;line-height:1.4}
  .arrow{flex:0 0 28px;display:grid;place-items:center;color:var(--steel-d);font-size:18px}
  .lane.raw .node{opacity:.62}
  .gate{
    background:linear-gradient(180deg,#2A1916,#231512);
    border:1.5px solid var(--seal);box-shadow:0 0 0 4px rgba(194,64,42,.12);
    flex-direction:column;
  }
  .gate .n-zh{color:#F4C4B6}
  .gate-checks{margin-top:10px;display:flex;flex-direction:column;gap:4px}
  .gate-checks span{font-size:11px;color:#C98C7E;letter-spacing:.01em;white-space:nowrap}
  .node.trusted{border-color:var(--jade);box-shadow:0 0 0 4px rgba(111,160,140,.12)}
  .node.trusted .n-zh{color:#BFE0D2}

  .pulse-dot{
    position:absolute;top:-6px;left:0;width:9px;height:9px;border-radius:50%;
    background:var(--jade);box-shadow:0 0 12px 2px rgba(111,160,140,.7);
    animation:travel 5.5s linear infinite;
  }
  @keyframes travel{0%{left:0%;opacity:0}6%{opacity:1}94%{opacity:1}100%{left:100%;opacity:0}}

  .console-foot{
    margin-top:34px;padding-top:22px;border-top:1px solid var(--line-d);
    color:var(--steel-d);font-size:14.5px;max-width:700px;
  }
  .console-foot b{color:#fff;font-weight:700}

  .matrix-scroll{margin-top:34px;overflow-x:auto;border:1px solid var(--line);border-radius:14px;background:var(--paper-2)}
  table.matrix{border-collapse:collapse;width:100%;min-width:840px}
  table.matrix th,table.matrix td{padding:16px 12px;text-align:center;border-bottom:1px solid var(--line);vertical-align:middle}
  table.matrix thead th{position:sticky;top:0;background:var(--paper-2);z-index:2}
  table.matrix .rowhead{
    text-align:left;position:sticky;left:0;background:var(--paper-2);z-index:1;
    min-width:200px;border-right:1px solid var(--line);
  }
  .rowhead .r-zh{font-weight:700;font-size:15px;line-height:1.45}
  thead .sys{min-width:120px}
  thead .sys .s-zh{font-weight:700;font-size:14px;line-height:1.35;display:block}
  thead .sys .s-en{font-size:11px;color:var(--steel);display:block;margin-top:5px;font-weight:400}
  thead .sys.bek{background:var(--ink);border-top-right-radius:13px}
  thead .sys.bek .s-zh{color:#fff}
  thead .sys.bek .s-en{color:#E08E7C}
  td.bekcol{background:rgba(20,23,28,.05)}
  tbody tr:last-child td{border-bottom:none}

  .mk{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;font-size:15px;font-weight:700}
  .mk.full{background:rgba(111,160,140,.18);color:var(--jade-d)}
  .mk.part{background:rgba(201,154,75,.18);color:#9A7327}
  .mk.none{background:rgba(20,23,28,.05);color:#AEB3BA}
  td.bekcol .mk.full{background:var(--jade);color:#fff}

  .legend{display:flex;gap:22px;flex-wrap:wrap;margin-top:18px;font-size:13.5px;color:var(--steel)}
  .legend span{display:inline-flex;align-items:center;gap:8px}
  .legend i{width:18px;height:18px;border-radius:50%;display:inline-block}
  .legend .full{background:rgba(111,160,140,.55)}
  .legend .part{background:rgba(201,154,75,.55)}
  .legend .none{background:rgba(20,23,28,.14)}

  .boss{background:var(--paper-2);border-radius:18px;padding:clamp(30px,5vw,56px);margin-top:38px;border:1px solid var(--line)}
  .boss .eyebrow{color:var(--jade-d)}
  .boss .eyebrow::before{background:var(--jade-d)}
  .boss h2{font-family:"Noto Serif TC",serif;font-weight:700;font-size:clamp(23px,3.6vw,34px);margin:14px 0 18px;line-height:1.32}
  .boss p{max-width:680px;color:#33373E}
  .verdict{display:flex;gap:14px;flex-wrap:wrap;margin-top:30px}
  .verdict div{flex:1 1 170px;border:1px solid var(--line);border-radius:12px;padding:18px 20px;background:#fff}
  .verdict .v-key{font-weight:700;font-size:13px;letter-spacing:.02em}
  .verdict .pass .v-key{color:var(--jade-d)}
  .verdict .rev .v-key{color:var(--amber)}
  .verdict .esc .v-key{color:var(--seal)}
  .verdict .v-zh{font-family:"Noto Serif TC",serif;font-weight:700;font-size:18px;margin:8px 0 4px}
  .verdict .v-d{font-size:14px;color:var(--steel)}

  .why{background:var(--paper-2);border:1px solid var(--line);border-radius:18px;padding:clamp(30px,5vw,56px);margin-top:38px}
  .why .eyebrow{color:var(--seal)}
  .why h2{font-family:"Noto Serif TC",serif;font-weight:700;font-size:clamp(23px,3.6vw,34px);margin:14px 0 18px;line-height:1.32}
  .why p{max-width:720px;color:#33373E}
  .why p + p{margin-top:15px}
  .why b{color:var(--ink);font-weight:700}

  .layers{margin-top:34px;display:flex;flex-direction:column;gap:9px}
  .layer{border-radius:13px;padding:20px 24px;border:1px solid var(--line)}
  .layer .l-k{font-size:12px;font-weight:700;letter-spacing:.03em;display:block;margin-bottom:6px;color:var(--steel)}
  .layer .l-zh{font-family:"Noto Serif TC",serif;font-weight:700;font-size:18px;line-height:1.4}
  .layer .l-d{font-size:14px;color:#3B3F46;margin-top:6px;line-height:1.7}
  .layer.render{background:#fff}
  .layer.render .chips{margin-top:11px;display:flex;flex-wrap:wrap;gap:7px}
  .layer.render .chip{font-size:12px;color:var(--steel);border:1px solid var(--line);border-radius:999px;padding:3px 11px;background:var(--paper-2)}
  .layer.mem{background:linear-gradient(180deg,#F4F5F6,#EEF3F0);border-color:rgba(111,160,140,.5)}
  .layer.mem .l-k{color:var(--jade-d)}
  .layer.os{background:var(--console);border-color:var(--line-d)}
  .layer.os .l-k{color:#E08E7C}
  .layer.os .l-zh{color:#fff}
  .layer.os .l-d{color:var(--steel-d)}
  .layer-note{text-align:center;font-size:11.5px;color:var(--steel);letter-spacing:.04em;padding:1px 0}

  .indiv{margin-top:30px;border:1px dashed var(--line);border-radius:14px;padding:26px 28px;background:#fff}
  .indiv .i-k{font-size:12px;font-weight:700;color:var(--jade-d);margin-bottom:10px;display:block}
  .indiv h3{font-family:"Noto Serif TC",serif;font-weight:700;font-size:19px;line-height:1.45;margin-bottom:12px}
  .indiv p{font-size:15px;color:#3B3F46;line-height:1.85;max-width:710px}
  .indiv p + p{margin-top:12px}
  .indiv b{color:var(--ink);font-weight:700}

  .qual{margin-top:30px;background:var(--console);color:#fff;border-radius:14px;padding:30px 32px;border:1px solid var(--line-d)}
  .qual .q-k{font-size:12px;font-weight:700;letter-spacing:.03em;color:#E08E7C}
  .qual .q-q{font-family:"Noto Serif TC",serif;font-weight:700;font-size:clamp(19px,2.8vw,25px);line-height:1.5;margin:12px 0 16px;color:#fff}
  .qual .q-d{color:var(--steel-d);font-size:15px;line-height:1.85;max-width:660px}
  .qual .q-d b{color:#F4C4B6;font-weight:700}

  .status{margin-top:30px;display:grid;grid-template-columns:1fr 1fr;gap:16px}
  @media(max-width:680px){.status{grid-template-columns:1fr}}
  .st{border-radius:13px;padding:24px 26px;border:1px solid var(--line);background:#fff}
  .st .st-k{font-size:12px;font-weight:700;letter-spacing:.02em;margin-bottom:14px;display:block}
  .st.live .st-k{color:var(--jade-d)}
  .st.road .st-k{color:#9A7327}
  .st ul{list-style:none}
  .st li{font-size:14.5px;color:#3B3F46;line-height:1.55;padding:9px 0 9px 24px;position:relative;border-bottom:1px solid var(--line)}
  .st li:last-child{border-bottom:none}
  .st li::before{position:absolute;left:0;top:9px;font-size:13px;line-height:1.55}
  .st.live li::before{content:"●";color:var(--jade)}
  .st.road li::before{content:"○";color:var(--amber)}

  .cases{margin-top:34px;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:var(--paper-2)}
  .case{display:grid;grid-template-columns:118px 1fr;border-bottom:1px solid var(--line)}
  .case:last-child{border-bottom:none}
  .case-rail{background:var(--ink);color:#fff;padding:22px 18px;display:flex;flex-direction:column;gap:9px;justify-content:flex-start}
  .case-id{font-size:12px;font-weight:700;letter-spacing:.04em;color:#E08E7C}
  .case-sys{font-size:12.5px;color:var(--steel-d);line-height:1.55}
  .case-body{padding:24px 28px}
  .case-scn{font-family:"Noto Serif TC",serif;font-weight:700;font-size:17.5px;line-height:1.6;color:var(--ink)}
  .case-scn .hl{color:var(--seal)}
  .case-exp{margin-top:11px;font-size:15px;color:#3B3F46;line-height:1.82}
  .case-foot{margin-top:16px;padding-top:14px;border-top:1px dashed var(--line);font-size:13.5px;line-height:1.7}
  .case-foot .gap{color:var(--steel)}
  .case-foot .fix{color:var(--jade-d);font-weight:700}
  .case-foot b{font-weight:700;color:var(--ink)}
  .case.agree .case-rail{background:var(--jade-d)}
  .case.agree .case-id{color:#DDF0E8}
  @media(max-width:620px){
    .case{grid-template-columns:1fr}
    .case-rail{flex-direction:row;align-items:center;gap:14px;padding:14px 18px}
    .case-body{padding:20px 20px 24px}
  }

  .benefits{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:34px}
  @media(max-width:760px){.benefits{grid-template-columns:1fr}}
  .ben{background:var(--paper-2);border:1px solid var(--line);border-radius:14px;padding:26px 26px 28px;position:relative}
  .ben.wide{grid-column:1 / -1}
  .ben-key{font-size:12px;font-weight:700;letter-spacing:.03em;color:var(--seal)}
  .ben-zh{font-family:"Noto Serif TC",serif;font-weight:700;font-size:20px;margin:12px 0 10px;line-height:1.4}
  .ben-p{font-size:15px;color:#3B3F46;line-height:1.84}
  .ben-p b{color:var(--ink);font-weight:700}
  .ben-flag{position:absolute;top:22px;right:22px;font-size:11px;font-weight:700;color:#9A7327;background:rgba(201,154,75,.16);border-radius:999px;padding:3px 11px}
  .tline{position:relative;margin-top:24px;display:flex;justify-content:space-between;gap:8px;max-width:560px}
  .tline::before{content:"";position:absolute;top:5px;left:8%;right:8%;height:1px;background:var(--line)}
  .tstep{position:relative;text-align:center;flex:1}
  .tstep .dot{width:11px;height:11px;border-radius:50%;background:var(--jade);margin:0 auto 9px;position:relative;z-index:1;box-shadow:0 0 0 4px var(--paper-2)}
  .tstep.todo .dot{background:var(--amber)}
  .tstep .d{font-size:11.5px;font-weight:700;color:var(--seal);display:block}
  .tstep .l{font-size:12.5px;color:#3B3F46;line-height:1.45;display:block;margin-top:3px}

  .okf{margin-top:40px;border-left:3px solid var(--seal);background:var(--seal-soft);padding:28px 30px;border-radius:0 12px 12px 0}
  .okf .tag{font-size:12px;font-weight:700;letter-spacing:.03em;color:var(--seal)}
  .okf h3{font-family:"Noto Serif TC",serif;font-weight:700;font-size:20px;margin:10px 0 10px}
  .okf p{font-size:15.5px;color:#33373E;max-width:710px}
  .okf p b{color:var(--ink)}

  .close{background:var(--console);color:#fff;text-align:center;padding:80px 24px}
  .close .posline{border-bottom-color:#E08E7C;color:#fff;font-size:clamp(20px,3.5vw,30px)}
  .close .sub{color:var(--steel-d);margin-top:22px;font-size:15px}
  footer{background:var(--console);color:var(--steel-d);padding:0 24px 50px;text-align:center;font-size:13px}
  footer .brand-f{font-family:"Noto Serif TC",serif;color:#fff;font-weight:700;font-size:16px;margin-bottom:6px}

  .reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}
  .reveal.in{opacity:1;transform:none}
  @media(prefers-reduced-motion:reduce){
    .reveal{opacity:1;transform:none;transition:none}
    .pulse-dot{display:none}
    html{scroll-behavior:auto}
  }
  :focus-visible{outline:2px solid var(--seal);outline-offset:3px}
</style>
</head>
<body>

<header class="bar">
  <div class="wrap bar-in">
    <div class="brand">
      <span class="seal-mark">腦</span>
      <span>Bek Open Brain<small>治理優先的 AI 記憶層</small></span>
    </div>
    <div class="bar-tag"><a href="/open_brain_demo1" style="color:var(--seal);text-decoration:none;font-weight:700">看營運掃描實錄 &rarr;</a></div>
  </div>
</header>

<div class="hero wrap">
  <span class="eyebrow">「資料夾優先」這派，說對了一半</span>
  <h1>整理好的資料夾，是最好的地基。<br>但地基，還不是<span class="q">可以信任的大腦</span>。</h1>
  <p class="lede">把思考整理成乾淨的資料夾與純文字（markdown），是現在最耐久、CP 最高、跨平台、又不被任何平台綁架的做法——這點我們完全同意，<b>Bek Open Brain 自己就建在資料夾之上</b>。但整理得再整齊，也只是「找得到」。它不會告訴 AI：這一條還算不算數、出自誰的判斷、能不能拿來下決策。<b>整理 ≠ 可信任。</b>我們補的，正是那一層。</p>
  <div class="posline">同樣的資料夾地基，差在有沒有治理那一層。</div>
  <p style="margin-top:14px;color:#3B3F46;font-size:15px">治理，說白了就是三個問題：這條是誰說的？多可信？還算不算數？</p>
  <p style="margin-top:22px"><a href="/open_brain_demo1" style="color:var(--seal);font-weight:700;font-size:16px;text-decoration:none;border-bottom:2px solid var(--seal);padding-bottom:4px">&rarr; 先別聽我們說。看它替一家八人公司跑一次雙週營運掃描（已匿名，3 分鐘）</a></p>
</div>

<section class="wrap reveal">
  <div class="sec-head">
    <span class="eyebrow">問題</span>
    <h2>「整理得很乾淨」為什麼還是不等於「可信任」</h2>
    <p>「資料夾優先於 agent」這派（業界叫 folders over agents），把「組織」這件事解得很漂亮——三層資料夾、有意義的連結、更省 token、跨模型、還能比團隊活得更久。但它們全部停在同一個地方：沒有一道關卡決定哪一條記憶可以被信任。在乾淨的資料夾裡，一份過期報價跟一份定案政策，看起來一模一樣。</p>
  </div>
  <div class="twocol">
    <div class="card bad">
      <h3>整理式 DIY 資料夾大腦</h3>
      <p>把想法整理成乾淨、互相連結的資料夾與筆記。組織一流、可攜、省 token，這些都是真本事。但每一條都被一視同仁——沒有來源信心、沒有有效期、沒有送出前的把關。整理是為了「人找得到」；可信任是為了「決策敢用」。兩件事不一樣。</p>
    </div>
    <div class="card good">
      <h3>Bek Open Brain（建在同一個資料夾之上）</h3>
      <p>同一套資料夾與純文字，多加一層治理：每條知識帶來源、信心、有效期，想影響決策得先過一道閘門。我們不換你的地基，也不跟資料夾作對——我們是在你信任的地基上，再加一層<b>可以被信任的判斷</b>。</p>
    </div>
  </div>
</section>

<section class="wrap reveal">
  <div class="sec-head">
    <span class="eyebrow">先說公道話</span>
    <h2>每一種做法都有它真正強的地方</h2>
    <p>這裡不挑封裝好的工具來比，而是把你自己堆得出來的那些耐久做法攤開。它們大多很好，重點只在於——它們各自停在哪一層。把那一層攤開，就看得到那塊沒人補的空白。</p>
  </div>

  <div class="profiles">
    <div class="prof lead">
      <span class="p-tag">最耐久 · 我們也建在這上面</span>
      <h3>整理式資料夾大腦</h3>
      <div class="p-en">Obsidian · PARA · ICM 等做法</div>
      <div class="p-row"><span class="p-k good-k">真正強在哪</span>現在最耐久、最中性的做法。純文字＋資料夾任何模型都讀得懂，省 token、跨平台、不綁廠商，連 Anthropic 的 Skills 都是這個形態。組織的問題，它解得漂亮。</div>
      <div class="p-row"><span class="p-k stop-k">它停在哪一層</span>它解的是「組織」，不是「治理」。整齊不代表可信——一份作廢的舊檔靜靜躺在命名良好的資料夾裡，<b>AI 照樣撈出來當現值用</b>。</div>
    </div>

    <div class="prof lead">
      <span class="p-tag">最接近我們 · 最該誠實面對</span>
      <h3>知識圖譜大腦</h3>
      <div class="p-en">關聯式知識圖 · infinite brain · Open Brain</div>
      <div class="p-row"><span class="p-k good-k">真正強在哪</span>比基本資料夾更進一步：有意義的連結能往回追「決策 → 理念 → 來源」，標得出是誰寫的，新人讀得到「為什麼」，還能比團隊活得更久。這是目前自己動手（DIY）能到的最高點。</div>
      <div class="p-row"><span class="p-k stop-k">它停在哪一層</span>它能存「為什麼」，卻沒有「還算不算數」。只標誰寫的，不標狀態與信心；沒有閘門、沒有作廢標記、沒有送出前校準。<b>它把判斷記下來，沒有把判斷治理起來。</b></div>
    </div>

    <div class="prof">
      <h3>原生 AI 記憶</h3>
      <div class="p-en">ChatGPT · Claude · Gemini 的記憶</div>
      <div class="p-row"><span class="p-k good-k">真正強在哪</span>零設定，跟著對話自然累積，個人助理體驗最順手。</div>
      <div class="p-row"><span class="p-k stop-k">它停在哪一層</span>綁死單一廠商、換工具就歸零、草稿閒聊定案不分——<b>連資料夾那種可攜與中性都沒有</b>。</div>
    </div>

    <div class="prof">
      <h3>NotebookLM／Gemini Notebooks</h3>
      <div class="p-en">研究工具 · 2026 加上 agent 能力</div>
      <div class="p-row"><span class="p-k good-k">真正強在哪</span>很強的研究與生成引擎，2026 升級後能推理、跑程式碼、直接生出簡報與報表，答案可追回原文出處。</div>
      <div class="p-row"><span class="p-k stop-k">它停在哪一層</span>封裝在 Google 一家的工具裡，連資料夾那種可攜與中性都放棄了。它是很好用的工具，<b>但不是你能擁有的地基，更不是會替你把關的大腦</b>。</div>
    </div>

    <div class="prof">
      <h3>Notion · Tana</h3>
      <div class="p-en">團隊知識庫</div>
      <div class="p-row"><span class="p-k good-k">真正強在哪</span>結構化、跨團隊、跨工具，當文件與專案中樞非常成熟。</div>
      <div class="p-row"><span class="p-k stop-k">它停在哪一層</span>存的是「資料」與「做什麼」，不是<b>「為什麼老闆會這樣判斷」</b>，也沒有治理。新人照樣天天來問你。</div>
    </div>

    <div class="prof wide">
      <h3>Google OKF（開放知識格式）</h3>
      <div class="p-en">Open Knowledge Format · 2026</div>
      <div class="p-row"><span class="p-k good-k">真正強在哪</span>把知識整理成 AI 看得懂、可交換的開放格式，解決「格式與互通」這個真問題，很有價值。</div>
      <div class="p-row"><span class="p-k stop-k">它停在哪一層</span>它和資料夾一樣是基材——刻意只管格式，不管治理。哪一條可信、由誰背書、現在還算不算數，它一律不處理。<b>那一層，它留白了。</b></div>
    </div>
  </div>
</section>

<section class="wrap reveal">
  <div class="console">
    <span class="pulse-dot" aria-hidden="true"></span>
    <span class="eyebrow">核心機制</span>
    <h2>一條記憶要能影響決策，必須先通過閘門</h2>
    <p class="sub">這道升級閘門（Promotion Gate），是 Bek Open Brain 與「乾淨資料夾」最根本的差別。原始證據不會因為被放進整齊的資料夾，就變成可信任的記憶——它得先被檢查、標記、核可。</p>
    <p class="sub" style="margin-top:14px">白話版：升級閘門就像公司的簽核章。一條資訊進來，先被問三個問題——誰說的？多可信？還算不算數？——蓋了章，才准拿去影響決策。沒蓋章的，AI 看得到，但不敢替你用。</p>

    <div class="lanes">
      <div class="lane gov">
        <div class="lane-label">治理路徑 <span class="tag-pill">Bek Open Brain</span></div>
        <div class="flow">
          <div class="node"><div class="n-zh">原始證據</div></div>
          <div class="arrow" aria-hidden="true">→</div>
          <div class="node"><div class="n-zh">候選記憶</div></div>
          <div class="arrow" aria-hidden="true">→</div>
          <div class="node gate">
            <div class="n-zh">升級閘門</div>
            <div class="gate-checks">
              <span>· 有來源嗎？</span>
              <span>· 信心多高？</span>
              <span>· 還算不算數？</span>
            </div>
          </div>
          <div class="arrow" aria-hidden="true">→</div>
          <div class="node trusted"><div class="n-zh">可信賴判斷記憶</div></div>
          <div class="arrow" aria-hidden="true">→</div>
          <div class="node trusted"><div class="n-zh">影響決策</div></div>
        </div>
      </div>

      <div class="lane raw">
        <div class="lane-label">無閘門路徑 <span class="tag-pill">乾淨資料夾／DIY 大腦</span></div>
        <div class="flow">
          <div class="node"><div class="n-zh">原始證據</div></div>
          <div class="arrow" aria-hidden="true">→</div>
          <div class="node"><div class="n-zh">整理進資料夾</div></div>
          <div class="arrow" aria-hidden="true">→</div>
          <div class="node"><div class="n-zh">影響決策</div></div>
        </div>
      </div>
    </div>

    <p class="console-foot">差別不在「整理得多乾淨」，而在 <b>哪一條源頭、出自誰的判斷、是否仍然有效、信心多高、要不要升級</b>。整齊的資料夾解決了「找得到」；這道閘門解決的是「敢不敢拿來下決策」——也是自己動手的做法沒有處理的那一層。</p>
  </div>
</section>

<section class="wrap reveal">
  <div class="sec-head">
    <span class="eyebrow">七個面向 · 同一張表</span>
    <h2>有治理，跟沒治理的差別在哪</h2>
    <p>把真正該比的對手放上來——不是封裝好的工具，而是你自己堆得出來的那些耐久做法。它們在「跨平台、記錄為什麼」這些面向上其實很強，我們誠實標出來；只有一種，是在「組織」之上又多加了「治理」。</p>
  </div>

  <div class="matrix-scroll">
    <table class="matrix">
      <thead>
        <tr>
          <th class="rowhead">面向</th>
          <th class="sys"><span class="s-zh">原生 AI 記憶</span><span class="s-en">ChatGPT · Claude · Gemini</span></th>
          <th class="sys"><span class="s-zh">整理式資料夾大腦</span><span class="s-en">Obsidian · PARA · ICM</span></th>
          <th class="sys"><span class="s-zh">知識圖譜大腦</span><span class="s-en">關聯式知識圖 · infinite brain</span></th>
          <th class="sys"><span class="s-zh">NotebookLM・Gemini</span><span class="s-en">研究 · 2026 加 agent</span></th>
          <th class="sys"><span class="s-zh">Google OKF</span><span class="s-en">開放知識格式</span></th>
          <th class="sys bek"><span class="s-zh">Bek Open Brain</span><span class="s-en">治理＋萃取＋校準</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="rowhead"><div class="r-zh">跨模型、不綁單一廠商</div></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk full" title="有">●</span></td>
          <td><span class="mk full" title="有">●</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk full" title="有">●</span></td>
          <td class="bekcol"><span class="mk full" title="有">●</span></td>
        </tr>
        <tr>
          <td class="rowhead"><div class="r-zh">記錄「為什麼」、可追溯</div></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk part" title="部分">◐</span></td>
          <td><span class="mk full" title="有">●</span></td>
          <td><span class="mk part" title="部分">◐</span></td>
          <td><span class="mk part" title="部分">◐</span></td>
          <td class="bekcol"><span class="mk full" title="有">●</span></td>
        </tr>
        <tr>
          <td class="rowhead"><div class="r-zh">來源信心標記</div></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk part" title="部分">◐</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk part" title="部分">◐</span></td>
          <td class="bekcol"><span class="mk full" title="有">●</span></td>
        </tr>
        <tr>
          <td class="rowhead"><div class="r-zh">升級閘門・真值生命週期</div></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td class="bekcol"><span class="mk full" title="有">●</span></td>
        </tr>
        <tr>
          <td class="rowhead"><div class="r-zh">萃取老闆與關鍵人的判斷</div></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk part" title="部分">◐</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td class="bekcol"><span class="mk full" content="有">●</span></td>
        </tr>
        <tr>
          <td class="rowhead"><div class="r-zh">送出前自動預審</div></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td class="bekcol"><span class="mk full" title="有">●</span></td>
        </tr>
        <tr>
          <td class="rowhead"><div class="r-zh">代維護・不必你自己扛</div></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td><span class="mk none" title="無">○</span></td>
          <td class="bekcol"><span class="mk full" title="有">●</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <p style="margin-top:6px;font-size:13.5px;color:var(--steel);max-width:760px">說句公道話：表上這些工具沒有一個做錯——它們的目標本來就不是治理。筆記工具負責記、AI 負責答，都做得很好；公司雲腦補的是中間那一段：確保 AI 拿到的每一條，是還算數、有人負責的知識。</p>
  <div class="legend">
    <span><i class="full"></i> ● 完整支援</span>
    <span><i class="part"></i> ◐ 部分支援</span>
    <span><i class="none"></i> ○ 未處理</span>
  </div>
</section>

<section class="wrap reveal">
  <div class="sec-head">
    <span class="eyebrow">真實情境</span>
    <h2>就算資料夾整理得再漂亮，沒治理還是會出這些事</h2>
    <p>這些不是假設，而是「整理乾淨就以為夠了」之後遲早會發生的事。每一個狀況，都剛好對應到一個被跳過的關卡——而其中一個，正好是我們和資料夾流派完全一致的地方。</p>
  </div>

  <div class="cases">
    <div class="case">
      <div class="case-rail"><span class="case-id">狀況 01</span><span class="case-sys">知識圖譜大腦</span></div>
      <div class="case-body">
        <div class="case-scn">一個節點靜靜躺在你漂亮的知識圖裡，AI 撈出來生成報價——它是<span class="hl">去年作廢的舊價</span>。圖上每條連結都在，就是沒有一條說它已經作廢。</div>
        <div class="case-exp">連結記得「它關聯到誰」，卻不記得「它現在還算不算數」。新舊一視同仁，AI 只是把「連得到的」當成「對的」。</div>
        <div class="case-foot"><span class="gap">缺口：真值生命週期</span><br><span class="fix">Bek：</span>每條知識帶狀態，舊價自動標為作廢，不會被當成現價撈出。</div>
      </div>
    </div>

    <div class="case">
      <div class="case-rail"><span class="case-id">狀況 02</span><span class="case-sys">整理式資料夾大腦</span></div>
      <div class="case-body">
        <div class="case-scn">腦力激盪時的一則草稿筆記，被連結得像一條定案決策；三個月後，AI 把它當成<span class="hl">公司既定政策</span>引用。</div>
        <div class="case-exp">草稿、假設、定案被整理進同一層，沒有一道關卡決定「這一條到底能不能被信任」。整齊，不等於有效。</div>
        <div class="case-foot"><span class="gap">缺口：升級閘門</span><br><span class="fix">Bek：</span>只有通過閘門核可的才進入可信賴記憶；草稿停在候選層，不影響決策。</div>
      </div>
    </div>

    <div class="case agree">
      <div class="case-rail"><span class="case-id">狀況 03</span><span class="case-sys">原生 AI 記憶／封裝工具</span></div>
      <div class="case-body">
        <div class="case-scn">團隊用某家 AI 累積了半年脈絡，公司決定換工具、或多接一個模型——<span class="hl">記憶全部歸零</span>，一切從頭。</div>
        <div class="case-exp">這一題，可攜的純文字本來就不會中招——這也正是我們把記憶層直接建在資料夾上的原因。會歸零的，是綁死單一廠商的原生記憶與封裝工具。</div>
        <div class="case-foot"><span class="gap">面向：跨模型不綁廠商</span><br><span class="fix">Bek：</span>記憶層就是可攜的資料夾，獨立於任何 AI，Claude、ChatGPT、Gemini、地端模型共用同一顆。</div>
      </div>
    </div>

    <div class="case">
      <div class="case-rail"><span class="case-id">狀況 04</span><span class="case-sys">知識圖譜大腦</span></div>
      <div class="case-body">
        <div class="case-scn">新人拿到整座知識圖，卻還是天天來問你——因為圖上記的是<span class="hl">「有人寫下的為什麼」，沒有人系統性萃取老闆腦裡的隱性判斷</span>，也沒人標那條為什麼現在還算不算數。</div>
        <div class="case-exp">能存「為什麼」，不等於萃取了判斷。判斷常常沒寫下來；寫下來的，也沒人保證還是現在的標準。</div>
        <div class="case-foot"><span class="gap">缺口：判斷萃取 ＋ 時效</span><br><span class="fix">Bek：</span>用引導式訪談把關鍵人的判斷標準萃取成可查詢的決策模型，並帶上有效期。</div>
      </div>
    </div>

    <div class="case">
      <div class="case-rail"><span class="case-id">狀況 05</span><span class="case-sys">任何資料夾大腦<br>＋ AI agent</span></div>
      <div class="case-body">
        <div class="case-scn">AI agent 自己跑了程式碼、直接生出一份投資人簡報——數字卻出自一份<span class="hl">作廢的舊來源</span>。每個數字都標了出處，卻沒有一個欄位說它失效了。</div>
        <div class="case-exp">標註告訴你答案「出自哪」，不會告訴你那份來源「是否還有效」。AI 越能自己動手生交付物，拿錯一條記憶的代價就越高——能力變強，把關沒跟上。</div>
        <div class="case-foot"><span class="gap">缺口：升級閘門 ＋ 真值生命週期</span><br><span class="fix">Bek：</span>作廢來源自動標記，AI 拿不到，也就生不出錯的交付物。</div>
      </div>
    </div>
  </div>
</section>

<section class="wrap reveal">
  <div class="boss">
    <span class="eyebrow">對老闆的意義</span>
    <h2>讓員工在打擾你之前，AI 先幫你校準一次</h2>
    <p>這套系統最直接的用途，不是「幫公司整理更多資料夾」，而是一道送到你桌上之前的預審關卡。員工要把報價、提案、客戶回覆、交付物送出前，AI 先依你的判斷標準檢查一次，給出三種結果——你被打擾的次數變少，送到你面前的東西品質變高。</p>
    <p style="margin-top:20px;color:#33373E">這不是想像圖。我們把一場真實的雙週營運掃描原樣放上來（人名、公司已代稱，金額已模糊）：老闆打一句白話，AI 調出 65 筆有日期、有出處的紀錄，回一張 11 項、可逐項拍板的待決定清單——連兩位創辦人自己是瓶頸，都被紀錄標了出來。 <a href="/open_brain_demo1" style="color:var(--seal);font-weight:700;text-decoration:none">&rarr; 看實錄</a></p>
    <div class="verdict">
      <div class="pass">
        <div class="v-key">通過</div>
        <div class="v-zh">直接放行</div>
        <div class="v-d">符合你的標準，直接執行，不需要你出手。</div>
      </div>
      <div class="rev">
        <div class="v-key">需修改</div>
        <div class="v-zh">退回重修</div>
        <div class="v-d">指出哪裡不到位，退回讓員工自己修。</div>
      </div>
      <div class="esc">
        <div class="v-key">升級</div>
        <div class="v-zh">交給你決定</div>
        <div class="v-d">超出可自動判斷的範圍，才真正需要你出手。</div>
      </div>
    </div>
  </div>
</section>

<section class="wrap reveal">
  <div class="why">
    <span class="eyebrow">真正的問題</span>
    <h2>真正要回答的不是「該用哪個工具」，是「整理好之後，誰來治理」</h2>
    <p>你大概已經想到了——既然資料夾、純文字、知識圖我自己都堆得出來，而且那確實是最耐久、CP 最高、跨平台又不綁平台的做法，為什麼還要找你？</p>
    <p>答案很簡單：你能堆的，我們也是這樣堆的。Bek Open Brain 一樣建在資料夾與純文字上、一樣跨平台、不綁任何一家，而且本來就是為了「整間公司一起用、交給 AI 去跑」而設計的。對我們來說，<b>資料夾是起點，不是終點</b>。</p>
    <p>我們多做的，正是「自己動手堆的人」也公開承認還沒補上的那一層：把老闆腦裡「怎麼判斷」整理成 AI 查得到的標準、替每一條記憶標清楚現在還能不能信、在東西送出去之前先照你的標準檢查一次。而且這一層是我們幫你顧的，不是丟一套工具叫你自己維護。</p>
    <p>工具會換、格式會換；<b>這層判斷，才是真正留在你手上的資產。</b></p>

    <div class="layers" role="img" aria-label="三層架構：最上層是可替換的基材（資料夾、純文字、知識圖、開放格式），中層是被治理的記憶層 Open Brain，最底層是治理、萃取、校準、維護的 Bek OS">
      <div class="layer render">
        <span class="l-k">基材 · 我們也用這個</span>
        <span class="l-zh">資料夾／純文字／知識圖／開放格式</span>
        <div class="l-d">耐久、中性、跨平台。挑哪個、之後換哪個，都不影響底下兩層。</div>
        <div class="chips">
          <span class="chip">資料夾</span><span class="chip">純文字 markdown</span><span class="chip">Obsidian</span>
          <span class="chip">知識圖</span><span class="chip">OKF 開放格式</span><span class="chip">Claude · ChatGPT · Gemini 皆可</span>
        </div>
      </div>
      <div class="layer-note" aria-hidden="true">▲ 就存成資料夾與純文字，但每條被治理</div>
      <div class="layer mem">
        <span class="l-k">Open Brain · 被治理的記憶層</span>
        <span class="l-zh">帶來源、信心、有效期的可信賴記憶</span>
        <div class="l-d">耐久性照收，治理另外加。每一條都查得到憑什麼被信任，跨模型共用同一顆。</div>
      </div>
      <div class="layer-note" aria-hidden="true">▲ 由下面這層定義規則</div>
      <div class="layer os">
        <span class="l-k">Bek OS · 不可被取代的那一層</span>
        <span class="l-zh">判斷萃取 · 治理 · 校準 · 代維護</span>
        <div class="l-d">同一個資料夾地基，多了一層可以被信任的判斷。工具與格式會換，這一層不換。</div>
      </div>
    </div>

    <div class="indiv">
      <span class="i-k">如果你是個人工作者，老實說</span>
      <h3>Karpathy 的做法、second brain、資料夾那一套，真的很好用，多數情況也很夠用。</h3>
      <p>個人用，你不一定需要我們，我們不會假裝你需要。一個人、低風險、自己記得來龍去脈的場景，自己堆一個乾淨的資料夾大腦，就很到位了。</p>
      <p>就算如此，<b>對個人，Bek Open Brain 還是多給三件事</b>：第一，連你自己的筆記都會過期——狀態與有效期讓你不會拿自己三個月前的舊判斷，當成今天的決定。第二，送交給客戶前，先依你自己訂的標準自動校準一次，少出包。第三，換模型、換工具時不用重教，判斷資產跟著你走。但要誠實——這三件事的價值，會隨著<b>多人協同、AI 自己動手、以及「賠不起的決策」</b>而放大；純個人、低風險，自己動手真的就夠。</p>
    </div>

    <div class="qual">
      <span class="q-k">合格問題 · 誠實剎車</span>
      <div class="q-q">「你的 AI 如果報錯一個過期的價格給客戶，你賠得起嗎？」</div>
      <p class="q-d">說實話，<b>Bek Open Brain 不是每一家都需要</b>。如果你自己整理資料夾就夠、也賠得起 AI 拿錯一條記憶的代價，那自己堆一個乾淨的資料夾大腦很好，不用找我們。它是為了那種客戶設計的——<b>AI 拿錯、拿舊、拿沒核可的記憶去行動，代價很高</b>。如果你是後者，你要的從來不是更整齊的資料夾，而是治理。</p>
    </div>

    <div class="status">
      <div class="st live">
        <span class="st-k">● 已在跑 · 已實證</span>
        <ul>
          <li>建在可攜資料夾上、跨平台不綁廠商的記憶層</li>
          <li>公司脈絡清單，AI 一接上就懂你公司</li>
          <li>老闆與關鍵人的判斷萃取訪談</li>
        </ul>
      </div>
      <div class="st road">
        <span class="st-k">○ 方法已定 · 案例量產中</span>
        <ul>
          <li>送出前自動預審的標準化交付案例</li>
          <li>月度決策記憶稽核與季度策略洞察</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="wrap reveal">
  <div class="sec-head">
    <span class="eyebrow">不只是防錯</span>
    <h2>治理做對了，它會開始長出價值</h2>
    <p>防止出錯只是底線。當每一條記憶都有來源、信心與有效期之後，這顆建在資料夾上的大腦，就不只是「不會害你」，而是會隨時間越來越值錢。</p>
  </div>

  <div class="benefits">
    <div class="ben">
      <span class="ben-key">複利累積</span>
      <div class="ben-zh">越用越聰明，不是越用越亂</div>
      <p class="ben-p">每一個決策、每一次校準，都加回這顆大腦。它不是一堆越疊越亂的資料夾，而是一份<b>會複利的判斷資產</b>——今天做的校準，明年還在替你工作。</p>
    </div>

    <div class="ben">
      <span class="ben-key">AI 直接可讀</span>
      <div class="ben-zh">不只是存著，是 AI 能直接拿來用</div>
      <p class="ben-p">知識被整理成 AI 看得懂、能查詢、能據以行動的格式（公司脈絡清單）。AI 助理一接上，就懂你公司的身分、目標、判斷標準與紅線——<b>不用每次重新交代</b>。</p>
    </div>

    <div class="ben">
      <span class="ben-key">跨平台</span>
      <div class="ben-zh">換 AI、加模型，大腦都還在</div>
      <p class="ben-p">因為建在可攜的資料夾上，這顆大腦接得上 Claude、ChatGPT、Gemini、地端模型，也跨得了網頁、終端機與桌面工具。AI 工具會一直換，<b>你的判斷資產不該跟著重來</b>。</p>
    </div>

    <div class="ben wide">
      <span class="ben-flag">藍圖 · 規劃中</span>
      <span class="ben-key">定期洞察</span>
      <div class="ben-zh">一個月、三個月，把捕捉變成洞察</div>
      <p class="ben-p">治理層備齊之後，下一步是讓系統定期回顧：每月做一次決策記憶稽核，每季把累積的判斷整理成策略洞察——把日常零碎的捕捉，變成<b>看得懂趨勢、能拿來開會的決策素材</b>。這一塊方法已經定好，案例正在做出來，我們不會把它說成已經交付。</p>
      <div class="tline">
        <div class="tstep"><span class="dot"></span><span class="d">每日</span><span class="l">隨手捕捉</span></div>
        <div class="tstep todo"><span class="dot"></span><span class="d">第 30 天</span><span class="l">月度決策<br>記憶稽核</span></div>
        <div class="tstep todo"><span class="dot"></span><span class="d">第 90 天</span><span class="l">季度<br>策略洞察</span></div>
      </div>
    </div>
  </div>
</section>

<section class="wrap reveal">
  <div class="okf">
    <span class="tag">時事佐證 · 2026.06</span>
    <h3>資料夾、開放格式，都是基材。我們做的是它們上面那一層。</h3>
    <p>不管是「資料夾優先」這個流派，還是 Google 在 2026 年發表的開放知識格式（OKF），解的都是<b>「組織與交換」</b>——都很有價值，也都是我們樂於站上去的地基。但它們刻意不處理同一件事：哪一條知識可以被信任、由誰的判斷背書、現在是否還有效。<b>那一層，正是 Bek Open Brain 的核心。</b>不管你用哪一種基材，我們都站得上去；治理過的知識，要存成資料夾、要輸出成開放格式，都可以。基材會換，治理不變。</p>
  </div>
</section>

<section class="wrap reveal">
  <div class="sec-head">
    <span class="eyebrow">三種狀態</span>
    <h2>你的公司現在是哪一種？</h2>
    <p>導入 AI 不是「有」或「沒有」的問題，是「AI 拿到的東西能不能信」的問題。三種狀態，誠實講。</p>
  </div>
  <div class="twocol" style="grid-template-columns:1fr;gap:16px">
    <div class="card bad"><h3>狀態一：還沒用 AI，也沒有第二腦 — 知識都在人身上</h3><p>公司靠問人運作。報價怎麼抓、這個客戶要怎麼應對、出事先找誰——答案在老闆和幾個老兵的腦裡。新人上手慢、同一個問題被問第五次、老闆變成全公司的瓶頸：你不在，判斷就停擺。這不是誰的錯，是知識從來沒有離開過人的腦袋。<br><span style="color:var(--steel)">（誠實說：一人公司、或三五個人同桌喊一聲就有答案——你可能還不需要雲腦。先把這頁存起來，等長大再回來。）</span></p></div>
    <div class="card bad"><h3>狀態二：用了 AI、也建了第二腦，但沒有治理 — 整理得很整齊，卻沒人保證還算數</h3><p>表面上升級了：文件進了 Notion 或 RAG，AI 答得又快又有自信。新的痛也跟著來——AI 撈到去年的報價，照樣自信地報給客戶；資料越存越多，沒人知道哪條過期、哪條只是草稿；而最值錢的老闆判斷，根本不在裡面，因為從來沒人萃取。哪天換工具，整套重建。你不是沒有記憶，你是有一大堆<b>沒人負責的記憶</b>。</p></div>
    <div class="card good"><h3>狀態三：有 Bek Open Brain — 同一個資料夾地基，多一層治理</h3><p>地基還是資料夾＋純文字：你看得懂、帶得走、不綁任何一家模型。差別在上面那一層——老闆的判斷被萃取進去；每條知識過升級閘門，帶來源、信心、有效期，才算可信；AI 送出前先預審：通過、需修改、或升級給人裁決。狀態一的痛（判斷離不開老闆），萃取解掉；狀態二的痛（記憶沒人負責），閘門解掉。剩下的校準與維護，我們代勞——這是服務，不是丟給你一套軟體。</p></div>
  </div>
</section>
<section class="wrap reveal">
  <div class="sec-head">
    <span class="eyebrow">FAQ</span>
    <h2>老闆真正想問的</h2>
    <p>這些問題我們被問過很多次。照實答，包括「你可能不需要」的部分。</p>
  </div>
  <div class="twocol" style="grid-template-columns:1fr;gap:14px">
    <div class="card"><h3>我自己用 Obsidian、Notion，ChatGPT 也有記憶了，為什麼還要你？</h3><p>如果只有你一個人用、資料量不大、你自己記得哪些還算數——真的可以，不用買。這些工具解的是「個人記得住」；公司雲腦解的是「多人共用時，誰保證這條還算數」。多的那一層是治理：每條知識帶來源、信心、有效期，AI 用之前先過預審。一人用不到，一群人就差很多。</p></div>
    <div class="card"><h3>這是不是又一個我得自己維護的系統？</h3><p>不是，這是我們最不一樣的地方之一。含代維護：約每 2–3 個月清理一次、判斷萃取前三個月每月、之後每兩個月，另含有效期複審、信心校準、去重、把你的翻案餵回校準器、版本紀律稽核。地基是可攜資料夾＋純文字——哪天你不續了，整包還是你的。</p></div>
    <div class="card"><h3>把公司判斷、老闆的腦交出去，安全嗎？會不會外洩？</h3><p>資料在雲端與你的客戶端都有；雙方簽 NDA；我們不會拿你的資料訓練任何模型。至於你接上的 AI（ChatGPT／Claude 等）是否留存或訓練，取決於各家政策，我們會協助你選對設定（例如企業版／關閉訓練）。地基是你看得懂、刪得掉的純文字，不綁單一廠商。</p></div>
    <div class="card"><h3>要多久看得到效果？我和員工要花多少力氣？</h3><p>導入約一個月。老闆的判斷萃取訪談約 2–3 小時；員工也約 2–3 小時，再加每天用語音記錄工作日誌、持續一到兩週。另外第一個月每週一次、每次一小時的訓練帶你們上手（未來可能做成錄播＋AI 訓練，更省時間）。前期最花的是老闆的時間，因為判斷只有你能給——但那正是這套東西值錢的地方。</p></div>
    <div class="card"><h3>這是要取代我的員工嗎？</h3><p>不是。它取代的是「同一件事重複教第五次」的時間，不是人。判斷還是人下的——AI 只是把已核可的判斷帶到現場。連員工上報，都是老闆親自處置：存進雲腦、歸檔、或刪除。人一直在迴路裡，而且在上面。</p></div>
    <div class="card"><h3>跟 RAG、知識圖譜、second brain 到底差在哪？</h3><p>RAG 解「找得到」，不解「還算不算數」——檢索是搜尋問題，治理是信任問題。差在三件事：升級閘門（帶來源、信心、有效期才進可信記憶，RAG 預設「進了就用」）；送出前預審（通過／需修改／升級給人裁決）；判斷萃取（主動挖出老闆沒寫成文件的取捨）。Second brain 是個人的；公司雲腦是公司的、每條有人負責。地基一樣純文字、跨模型——這不是換掉你的 RAG，是給它一層它本來沒有的東西。</p></div>
    <div class="card"><h3>多少錢？</h3><p>價格先聊再報——適不適合、規模對不對，得先看過才知道。誠實剎車也適用報價：聊完發現你還不需要，我們會直說，這筆錢你留著。</p></div>
    <div class="card"><h3>公司很小、才幾個人，適合嗎？我不懂技術，能用嗎？</h3><p>不懂技術完全沒問題——地基就是資料夾和純文字，打開像看文件；維護由我們代勞。公司規模才是真正的門檻：如果知識還在幾個人腦裡轉得動、問一聲就有答案，你可能還不需要。開始痛的訊號通常是：新人變多、老闆開始重複回答、或你不在時事情會卡住。</p></div>
    <div class="card"><h3>AI 會不會亂講、幻覺？你怎麼確保它不亂用資料？</h3><p>不跟你保證 AI 永不亂講——任何人這樣保證都是在騙你。我們能控制的是它拿到什麼、送出什麼：只有過了閘門的知識才進可信記憶；送出前預審會擋下過期、未核可的；答案帶來源，你隨時回查那條是誰核可、什麼時候到期。幻覺沒辦法歸零，但「自信地用錯資料」，是治理管得住的。</p></div>
    <div class="card"><h3>跟我現在的工具會衝突嗎？要全部搬家嗎？</h3><p>不用搬家。公司 wiki 用 Google Drive 搭 Obsidian vault、上報直接走 LINE——你現在的工具照用。真正進雲腦的只有通過閘門、值得信的知識。</p></div>
    <div class="card"><h3>哪天你不做了、或我不想續了，怎麼辦？</h3><p>整包帶走。可攜資料夾＋純文字就是為這一天設計的：沒有專屬格式、不綁我們、不綁任何模型廠商。你失去的是代維護與校準這個服務，不是你的腦。老實說，這條該是你挑任何 AI 記憶方案的第一個問題。</p></div>
    <div class="card"><h3>有沒有保證？</h3><p>沒有花俏的保證，只有一條：裝好、判斷萃取完成、跑出第一份營運掃描後，30 天內你若判斷它對決策沒幫助，退 50%。不用「滿意」這種主觀字眼——用你看得到的交付里程碑。</p></div>
    <div class="card"><h3>我的產業很特殊，你懂嗎？</h3><p>不假裝懂。你的產業判斷本來就該從你腦裡萃取，不是套模板——我們目前實際做過建築師事務所、陶藝品牌這類設計與專業服務型公司。我們的專業，是把「你的懂」變成 AI 用得動、有人負責的形狀。</p></div>
  </div>
</section>
<section class="close">
  <div class="posline">讓 AI 升級判斷力，讓判斷力升級事業。</div>
  <p class="sub">Bek Open Brain｜建在資料夾之上、為 SME 老闆打造的決策校準與營運脈絡系統</p>
  <div style="margin-top:30px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
    <a href="/open_brain_demo1" style="background:#E08E7C;color:#15181E;font-weight:700;padding:13px 22px;border-radius:24px;text-decoration:none">看營運掃描實錄</a>
    <a href="https://cal.com/bektsai/30min" target="_blank" rel="noopener" style="border:1px solid #E08E7C;color:#fff;font-weight:700;padding:13px 22px;border-radius:24px;text-decoration:none">預約 30 分鐘對齊</a>
  </div>
</section>

<footer>
  <div class="brand-f">Bekhelpme</div>
  <div>治理優先的 AI 記憶與決策校準｜蔡奇峯 Bek Tsai</div>
</footer>

<script>
  const io=new IntersectionObserver((es)=>{
    es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
</script>
</body>
</html>`;

const GA_SNIPPET = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-NLVESXBBMR"></script>
  <script>
    window.dataLayer=window.dataLayer||[];
    function gtag(){dataLayer.push(arguments);}
    gtag('js',new Date());
    gtag('config','G-NLVESXBBMR');
  </script>`;

const HTML = BASE_HTML
  .replace("</head>", `\n  ${META_TAGS}\n</head>`)
  .replace("</body>", `\n${GA_SNIPPET}\n</body>`);

export async function GET() {
  return new NextResponse(HTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
