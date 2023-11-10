/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('path')

module.exports = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.vercel.com',
          port: '',
          pathname: '/image/upload/**',
        },
      ],
    },
}

module.exports = nextConfig
