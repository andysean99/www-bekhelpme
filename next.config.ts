import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Turbopack ignores the stray
  // lockfile in the parent "Framer Web builder" folder.
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
};

export default nextConfig;
