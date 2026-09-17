import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // https://i.ibb.co.com/JjGpPttd/masud-github-readme-banner.png
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "/JjGpPttd/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
