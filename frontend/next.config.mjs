/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kjs-blog-backend-851c8f97ab2c.herokuapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
