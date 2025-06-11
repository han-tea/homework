/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/homework",
  assetPrefix: "/homework/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig