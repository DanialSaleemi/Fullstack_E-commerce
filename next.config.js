/** @type {import('next').NextConfig} */
const nextConfig = {
}

module.exports = {
    images: {
        domains: ['cdn.sanity.io']
    }, 
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
}
