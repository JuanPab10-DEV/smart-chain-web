import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'originui.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
