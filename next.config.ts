import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  env: {
    SITE_DOMAIN: process.env.SITE_DOMAIN || 'nullptr.party',
  },
};

export default nextConfig;
