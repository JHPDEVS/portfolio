/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.shields.io'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
