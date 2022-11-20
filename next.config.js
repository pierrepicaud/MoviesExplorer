/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized: true,
    domains:['image.tmdb.org', 'tmdbproxy.herokuapp.com','image-tmdbproxy.herokuapp.com']
  }
}

module.exports = nextConfig
