/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pb_hantea",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig