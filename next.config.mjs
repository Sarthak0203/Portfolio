/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
    images: {
      loader: 'akamai',
      path: '',
    },
    trailingSlash: true,
    output: 'export',
  };
  
  export default nextConfig;
  