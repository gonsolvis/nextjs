/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.pravatar.cc",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.github.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
