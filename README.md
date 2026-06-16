# www-bekhelpme

Bek（蔡奇峯）個人品牌主站 — `www.bekhelpme.com`。單頁，Next.js（App Router）+ TypeScript + Tailwind v4 + framer-motion，沿用 4days 的奶油紙主題與 GA4 埋碼，三站一個品牌感。

## 開發

```bash
npm install
npm run dev      # http://localhost:3002
npm run build    # 上線前務必先 build 過
npm start
```

## 重點

- 語言 `zh-TW`，主題色票／`.prose-letter`／`Reveal`／`CTAButton` 取自 `4days`（`C:\dev\framer-site`）。
- GA4：`G-NLVESXBBMR`，於 `app/layout.tsx` 以 `next/script` `afterInteractive` 載入（與 4days 同）。
- AI / GEO 層：`app/layout.tsx` 內的 Person + Service JSON-LD、`app/robots.ts`、`app/sitemap.ts`、`public/llms.txt`、完整 metadata / Open Graph。
- 主 CTA：`mailto:bek8278278@gmail.com`。
- 「給 AI 讀（後設資料）」區塊用 `<details>` 收合，內容存在於 DOM 供 AI 引用，預設不干擾人的閱讀。

## 待辦（v1 之後）

- og:image 設計（目前 OG 無圖）。
- 主 CTA 可換成自製表單（Resend）或 Cal.com。
- 半天課正式定價／文案、見證版本由 Bek 最終核定。
- 跨站一致性：4days 頁尾信箱為 `bek8278728@gmail.com`，本站用 `bek8278278@gmail.com`，待統一。
