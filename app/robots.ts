import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/bek-open-brain", "/open_brain_demo1", "/open_brain_demo1.html"],
    },
    sitemap: "https://www.bekhelpme.com/sitemap.xml",
    host: "https://www.bekhelpme.com",
  };
}