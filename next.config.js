/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/hanji-teacher-website",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig