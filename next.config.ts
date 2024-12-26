import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ooners.valureach.com',
          port: '',
          pathname: '/storage/**',
          search: '',
        },
        {
          protocol: 'https',
          hostname: 'ooners.valureach.com',
          port: '',
          pathname: '/defaults/**',
          search: '',
        },
      ],
    },
};

export default nextConfig;
