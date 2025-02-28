/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

module.exports = {
  // Merge your custom nextConfig with other configurations
  ...nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  // Add more configurations as needed
};
