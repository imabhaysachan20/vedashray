/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images: {
    unoptimized: true, // <--- ADD THIS LINE
  },
    trailingSlash:true
};

export default nextConfig;
