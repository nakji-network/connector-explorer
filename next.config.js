/** @type {import('next').NextConfig} */
// const withYaml = require('next-plugin-yaml');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cryptologos.cc'],
  },
  env: {
    API_KEY: 'tanSJGXqY3XAPZhVJ76gk8KaFVDnmi8u',
  },
}

