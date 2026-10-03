import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Security: hide X-Powered-By
  images: {
    // Photos are static imports (content-hashed, cached for a year). WebP only: our sources are
    // already WebP, and it encodes far faster than AVIF on the first request for each size.
    deviceSizes: [640, 768, 1024, 1280],
    imageSizes: [128, 256, 384, 512],
  },
  async redirects() {
    // The old group-class pages (dance, clay workshop, yoga) were retired in the October 2026
    // redesign; keep any ad, Google or shared links landing on the programmes page.
    return [
      { source: "/programs/:slug", destination: "/programs", permanent: true },
      { source: "/programmes", destination: "/programs", permanent: true },
      { source: "/book", destination: "/consultation", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
