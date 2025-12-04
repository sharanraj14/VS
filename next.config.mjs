/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: true, // enables /app directory routing
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow external images from any host
      },
    ],
  },
};

export default nextConfig;
