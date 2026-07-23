import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.bekhelpme.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.bekhelpme.com/open-brain-case-01",
      lastModified: new Date("2026-07-11"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.bekhelpme.com/bek-ai-os",
      lastModified: new Date("2026-07-23"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.bekhelpme.com/truth-brain",
      lastModified: new Date("2026-07-23"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}