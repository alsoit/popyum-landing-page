import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Azure Static Web Apps
  output: 'export',
  
  // Add trailing slash to URLs for better static hosting compatibility
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Optional: Configure asset prefix if using a CDN
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-cdn-prefix' : '',
  
  // Optional: Configure base path if deploying to a subdirectory
  // basePath: '/subdirectory',
};

export default nextConfig;
