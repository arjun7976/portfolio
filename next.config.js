/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Enable React Strict Mode
  reactStrictMode: true,
}

module.exports = nextConfig
