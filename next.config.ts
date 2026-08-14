import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Thêm dòng này để build ra HTML tĩnh
  images: {
    unoptimized: true, // Tắt tối ưu ảnh vì Hostinger shared hosting không hỗ trợ Next.js Image Optimization API
  },
  trailingSlash: true, // Đảm bảo các route hoạt động đúng trên server tĩnh (tạo ra folder/index.html thay vì file.html)
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
