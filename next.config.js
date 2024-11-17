const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/i,
            use: {
                loader: "file-loader",
                options: {
                    publicPath: "/_next/static/videos/",
                    outputPath: "static/videos/",
                    name: "[name].[hash].[ext]",
                },
            },
        });

        // Add alias configuration
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.join(__dirname, "src"),
        };

        return config;
    },
};

module.exports = nextConfig;
