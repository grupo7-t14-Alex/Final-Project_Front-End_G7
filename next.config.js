/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.assobrav.com.br', 'img2.gratispng.com'],
        formats: ["image/webp"]
    }
}

module.exports = nextConfig
