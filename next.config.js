/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig:{
    apiKey: process.env.API_KEY,
  },
  publicRuntimeConfig:{
    apiKey: process.env.API_KEY,
  },
  env:{
    apiKey: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig
