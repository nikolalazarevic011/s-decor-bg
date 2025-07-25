/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // For static export
  },
  trailingSlash: true,
  output: 'export', // For static hosting
  distDir: 'out',
}

module.exports = nextConfig
