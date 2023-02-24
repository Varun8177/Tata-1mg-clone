/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["onemg.gumlet.io", "e7.pngegg.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
