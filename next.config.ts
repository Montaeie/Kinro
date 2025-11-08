import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  serverExternalPackages: ['payload', 'sharp'],
  async headers() {
    return [
      {
        source: '/:path((?!admin).*)*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' http://localhost:3001 http://localhost:3002 http://localhost:3000 https://localhost:3001 https://localhost:3002 https://localhost:3000",
          },
        ],
      },
    ]
  },
  /* config options here */
};

export default withPayload(nextConfig);
