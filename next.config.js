/** @type {import('next').NextConfig} */
const withYaml = require('next-plugin-yaml');

module.exports = withYaml({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cryptologos.cc'],
  },
});

