/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["flowbite.com","fiverr-res.cloudinary.com"],
  },
};

module.exports = nextConfig;
