const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Xuất HTML tĩnh thay vì SSR
  basePath: "/github-portfolio", // Đổi theo tên repository của bạn
  images: {
    unoptimized: true, // Vì GitHub Pages không hỗ trợ Image Optimization
    domains: [
      "media.dev.to",
      "avatars.githubusercontent.com",
      "github-readme-stats.vercel.app",
      "github-readme-streak-stats.herokuapp.com",
      "stardev.io",
      "github-profile-summary-cards.vercel.app",
      "github-profile-trophy.vercel.app",
    ],
    dangerouslyAllowSVG: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
