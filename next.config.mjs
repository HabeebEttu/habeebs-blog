/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  env: {
    NEXT_PUBLIC_PUSHER_KEY: process.env.PUSHER_KEY,
    NEXT_PUBLIC_PUSHER_CLUSTER: process.env.PUSHER_CLUSTER,
  },
};

export default nextConfig;
