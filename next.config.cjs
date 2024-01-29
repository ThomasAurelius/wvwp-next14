/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'images.unsplash.com'
         },
         {
            protocol: 'https',
            hostname: 'www.paypal.com'
         }
      ]
   }
}

module.exports = nextConfig
