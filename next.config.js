/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/",
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
