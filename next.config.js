const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enable static exports
    basePath:
        process.env.NODE_ENV === "production" ? "/vurnkamb    .github.io" : "", // Replace with your repository name
    images: {
        unoptimized: true, // Required for static export
    },
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
        return config;
    },
};

module.exports = nextConfig;
