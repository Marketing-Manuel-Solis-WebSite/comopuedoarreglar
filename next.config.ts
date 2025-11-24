import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'manuelsolis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.manuelsolis.com', // Cubre subdominios como www.
      },
      {
        protocol: 'https',
        hostname: 'solispullzone.b-cdn.net',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com', // Agregado por seguridad si usas avatares
      },
    ],
  },
  // Optimizaciones
  reactStrictMode: true,
}

export default nextConfig