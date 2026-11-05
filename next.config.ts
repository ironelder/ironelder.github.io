import type { NextConfig } from "next";

// GitHub Pages 는 정적 파일만 서빙 → out/ 로 정적 export
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
