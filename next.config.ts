import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Bỏ output: 'export' vì Hostinger đang chạy server Next.js chứ không phải static web
  output: 'standalone', 
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

export default nextConfig
