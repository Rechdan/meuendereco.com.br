/** @type {import('next').NextConfig} */

const nextConfig = {
  cleanDistDir: true,
  compiler: { styledComponents: true },
  devIndicators: { buildActivity: true, buildActivityPosition: "top-right" },
  i18n: { defaultLocale: "pt", locales: ["pt", "en"] },
  output: "standalone",
  reactStrictMode: true,
};

module.exports = nextConfig;
