/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'image.tmdb.org',
      'tmdbproxy.herokuapp.com',
      'image-tmdbproxy.herokuapp.com',
    ],
  },
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
  },
  serverRuntimeConfig: {
    API_KEY: process.env.API_KEY,
  },
}

module.exports = nextConfig
