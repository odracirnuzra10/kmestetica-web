import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/clinera-reclamos",
        destination: "/clinera-opiniones",
        permanent: true,
      },
      {
        source: "/clinera-estafa",
        destination: "/clinera-opiniones",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
