/** @type {import('next').NextConfig} */
// const withYaml = require('next-plugin-yaml');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cryptologos.cc'],
  },
  env: {
    API_KEY: 'mZSDM3NoM7LY6XHSpSeEurLBIWiPletO',
  },
}

