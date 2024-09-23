/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main/maps",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
