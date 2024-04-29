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
      },
      {
        protocol: "https",
        hostname: '*.googleapis.com'
      }
    ]
  },
  webpack: (config, options) => {
    const { isServer } = options;
    // Do not run type checking twice:
    if (isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    config.module.rules.push({
      test: /\.svg$/i,
      oneOf: [
        {
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/raw/, /img/] },
          use: '@svgr/webpack',
        },
        {
          resourceQuery: /img/,
          type: 'asset/resource',
        }
      ],
    });

    return config;
  },
}

module.exports = nextConfig
