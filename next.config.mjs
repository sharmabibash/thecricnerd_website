/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*', // Catch all paths
        has: [
          {
            type: 'host',
            value: 'thecricnerd.com', // Matches non-www domain
          },
        ],
        destination: 'https://www.thecricnerd.com/:path*', // Redirect to www
        permanent: true, // Permanent 301 redirect
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto', // Check if the protocol is HTTP
            value: 'http',
          },
        ],
        destination: 'https://www.thecricnerd.com/:path*', // Redirect to HTTPS
        permanent: true, // Permanent 301 redirect
      },
    ];
  },
};

export default nextConfig;
