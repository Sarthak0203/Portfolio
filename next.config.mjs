/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/your-repo-name',
    assetPrefix: '/your-repo-name/',
    images: {
      loader: 'akamai',
      path: '',
    },
    trailingSlash: true,
    output: 'export',
  };
  
  export default nextConfig;
  