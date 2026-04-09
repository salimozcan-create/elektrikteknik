/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'elektrikteknik.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/tamir',
        destination: '/elektrik-usta',
        permanent: true,
      },
      {
        source: '/malzeme',
        destination: '/elektrik-urun',
        permanent: true,
      },
      {
        source: '/guvenlik-sistemleri',
        destination: '/guvenlik',
        permanent: true,
      },
      {
        source: '/guvenli',
        destination: '/guvenlik',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig