/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Desativa as rotas tipadas que estão causando erro na Vercel
    typedRoutes: false,
  },
};

export default nextConfig;
