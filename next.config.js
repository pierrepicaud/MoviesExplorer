/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['image.tmdb.org','image-tmdbproxy.herokuapp.com', 'tmdbproxy.herokuapp.com']
  }
}

module.exports = nextConfig
