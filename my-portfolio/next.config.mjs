/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.esgi.fr" },
      { protocol: "https", hostname: "asset.brandfetch.io" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "mpp.football" },
    ],
  },
};

export default nextConfig;
