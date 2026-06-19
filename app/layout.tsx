import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-NLVESXBBMR";
const SITE_URL = "https://www.bekhelpme.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Bek（蔡奇峯）｜把你公司的判斷，編譯進 AI",
  description:
    "模型大家共用，脈絡只屬於你一家。當「擁有 AI」變得不值錢，真正值錢的，是你公司專屬的判斷、數據、流程、客戶脈絡。Bek 做的事，是把那個東西編譯進 AI——透過 Bek OS 與前進部署（Forward Deployed Engineer, FDE）。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Bekhelpme.com",
    locale: "zh_TW",
    title: "Bek（蔡奇峯）｜把你公司的判斷，編譯進 AI",
    description:
      "模型大家共用，脈絡只屬於你一家。Bek 把你公司專屬的判斷、數據、流程、客戶脈絡編譯進 AI——透過 Bek OS 與前進部署（FDE）。",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Bek Tsai — 模型大家共用，脈絡只屬於你一家。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bek（蔡奇峯）｜把你公司的判斷，編譯進 AI",
    description:
      "模型大家共用，脈絡只屬於你一家。Bek 把你公司專屬的判斷編譯進 AI——透過 Bek OS 與前進部署（FDE）。",
    images: ["/api/og"],
  },
  robots: { index: true, follow: true },
};

// --- 結構化資料：給 AI 搜尋 / 知識圖譜讀的 Person + Service ---
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bek Tsai",
  alternateName: ["Bek", "蔡奇峯", "Andy Tsai"],
  jobTitle: "前進部署工程師 / 行銷與 AI 脈絡顧問（Forward Deployed Engineer）",
  url: SITE_URL,
  email: "mailto:bek8278278@gmail.com",
  telephone: "+886-908-278-094",
  description:
    "Bek（蔡奇峯）把公司的判斷、數據、流程與客戶脈絡編譯進 AI。十五年向 17 位行銷大師學習直效行銷、文案、漏斗與發售，並以前進部署工程師（FDE）模式交付 Bek OS。",
  knowsAbout: [
    "行銷漏斗（marketing funnel）",
    "直效行銷（direct-response marketing）",
    "文案（copywriting）",
    "發售（product launch）",
    "廣告投放與投資報酬率（ROAS）",
    "AI 脈絡工程（AI context engineering）",
    "前進部署工程（Forward Deployed Engineering）",
    "Bek OS（公司操作系統）",
  ],
  sameAs: [
    "https://4days.bekhelpme.com",
    "https://articles.bekhelpme.com",
  ],
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bek OS · FDE 前進部署",
  serviceType: "AI 脈絡編譯與前進部署（Forward Deployed Engineer）",
  provider: { "@type": "Person", name: "Bek Tsai", url: SITE_URL },
  areaServed: "TW",
  description:
    "把老闆的決策標準、關鍵人的防錯智慧、公司的流程與紅線，編譯成 AI 與人都讀得懂、查得到、會隨公司演化的經營脈絡。交付的是會為結果負責的系統，不是對某一個人的依賴。",
  url: SITE_URL,
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bekhelpme.com",
  alternateName: "Bek（蔡奇峯）個人品牌主站",
  url: SITE_URL,
  inLanguage: "zh-TW",
  publisher: { "@type": "Person", name: "Bek Tsai", url: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Noto+Serif+TC:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className="min-h-full">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
