import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old logo test page, kept working for previously shared links.
  async redirects() {
    return [{ source: "/2.1", destination: "/", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
