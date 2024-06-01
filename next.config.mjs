/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/your-repo-name',
    assetPrefix: '/your-repo-name/',
    images: {
      loader: 'akamai',
      path: '',
    },
    trailingSlash: true,
  };
  
  module.exports = nextConfig;