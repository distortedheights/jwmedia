/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/jwmedia' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jwmedia/' : '',
};

module.exports = nextConfig;
