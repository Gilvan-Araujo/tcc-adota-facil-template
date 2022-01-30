/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['placedog.net']
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
  }
})
