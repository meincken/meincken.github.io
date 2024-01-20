/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nickmeincken.me',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
}
module.exports = nextConfig
