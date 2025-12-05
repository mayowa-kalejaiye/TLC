const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ytimg.com', 'img.youtube.com'], // YouTube thumbnails
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = withPWA(nextConfig)
