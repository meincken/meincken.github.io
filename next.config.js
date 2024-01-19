/** @type {import('next').NextConfig} */

module.exports = {
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

// const nextConfig = {}
// module.exports = nextConfig
