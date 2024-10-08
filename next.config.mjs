/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com',
      'succ.ssgcdn.com',
      'simg.ssgcdn.com',
      'sitem.ssgcdn.com',
      'sui.ssgcdn.com',
      't3-starbucksbucket.s3.ap-northeast-2.amazonaws.com',
      'https://prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
