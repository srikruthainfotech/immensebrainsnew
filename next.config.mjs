/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // Changed to false for better performance
  images: {
    unoptimized: true,
    domains: ['localhost', 'placeholder.svg'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: false, // Changed to false for better code quality
  },
  typescript: {
    ignoreBuildErrors: false, // Changed to false for better type safety
  },
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
