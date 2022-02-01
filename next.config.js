/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['placedog.net', 'i.ibb.co']
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: prod ? false : true
  }
})
