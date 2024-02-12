/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.shopify.com", "shop.thrashermagazine.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
