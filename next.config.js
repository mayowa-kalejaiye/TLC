/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ytimg.com', 'img.youtube.com'], // YouTube thumbnails
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
