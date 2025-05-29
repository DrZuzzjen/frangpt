/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  env: {
    KLUSTER_API_KEY: process.env.api_key,
    KLUSTER_BASE_URL: process.env.base_url,
  },
}

export default nextConfig