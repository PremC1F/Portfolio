import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/premxai",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/premxai/",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/premxai",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://x.com/premxai",
        permanent: true,
      },
      {
        source: "/medium",
        destination: "https://premxai.medium.com/",
        permanent: true,
      },
      {
        source: "/scholar",
        destination: "https://scholar.google.com/citations?user=yIWQSykAAAAAJ&hl=en",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
