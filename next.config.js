/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    ssr: true,
    styledComponents: true,
    // swcMinify: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
