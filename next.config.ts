import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sms-quiz/sms-special-day",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/sms-quiz/sms-special-day",
  },
};

export default nextConfig;
