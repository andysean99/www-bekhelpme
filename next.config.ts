import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/Bek_AI_OS",
        destination: "/bek-ai-os",
        permanent: true,
      },
      {
        source: "/bek_ai_os",
        destination: "/bek-ai-os",
        permanent: true,
      },
      {
        source: "/Truth_Brain",
        destination: "/truth-brain",
        permanent: true,
      },
      {
        source: "/truth_brain",
        destination: "/truth-brain",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;