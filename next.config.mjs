/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_COMING_SOON: process.env.NEXT_PUBLIC_COMING_SOON,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

export default nextConfig;
