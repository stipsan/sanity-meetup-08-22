// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  experimental: { urlImports: ['https://themer.sanity.build/'] },
}

module.exports = nextConfig
