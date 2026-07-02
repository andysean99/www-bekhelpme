import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/Bek_Open_Brain",
        destination: "/bek-open-brain",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/open_brain_demo1",
        destination: "/open_brain_demo1.html",
      },
    ];
  },
};

export default nextConfig;
