/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  }, images: {
    domains: ["acutewoof.is-a.dev"]
  }
};

module.exports = nextConfig;
