/** @type {import('next').NextConfig} */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { i18n } = require('./next-i18next.config');
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com'
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      }
    ]
  },
  webpack: (config, options) => {
    const { isServer } = options;
    // Do not run type checking twice:
    if (isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return config;
  },
}

module.exports = nextConfig
