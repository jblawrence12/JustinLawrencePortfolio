// next.config.js  (or next.config.mjs / next.config.ts – whatever you’re using)
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* — your existing options — */
  reactStrictMode: true,
  swcMinify: true,

  // --- GitHub Pages static export settings ---
  output: "export",                 // tells Next to emit a static site into /out
  basePath: "/JustinLawrencePortfolio",         // prefix for every route
  assetPrefix: "/JustinLawrencePortfolio",      // where static assets will load from
};

export default nextConfig;
