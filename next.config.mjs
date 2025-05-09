/**
 * @type {import('next').NextConfig}
 */
const BASE_PATH = '/research-portfolio-template';

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? BASE_PATH : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' ? BASE_PATH : undefined,
  images: {
    unoptimized: true,
  },
  // Make sure to include locales in trailingSlash to support GitHub Pages
  trailingSlash: true,
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig; 
