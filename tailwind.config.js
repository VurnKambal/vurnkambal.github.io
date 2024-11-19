const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    darkMode: "class",

    theme: {
        extend: {
            fontFamily: {
                mont: ["var(--font-mont)", ...fontFamily.sans],
            },
            colors: {
                dark: "#0A192F",
                light: "#F8FAFF",
                primary: "#4A90E2",
                primaryDark: "#64FFDA",
            },
            animation: {
                "spin-slow": "spin 8s linear infinite",
            },
            backgroundImage: {
                circularLight:
                    "repeating-radial-gradient(rgba(74,144,226,0.2) 2px, #F8FAFF 5px, #F8FAFF 100px);",

                circularDark:
                    "repeating-radial-gradient(rgba(100,255,218,0.3) 2px, #0A192F 8px, #0A192F 100px);",

                circularLightLg:
                    "repeating-radial-gradient(rgba(74,144,226,0.2) 2px, #F8FAFF 5px, #F8FAFF 80px);",

                circularDarkLg:
                    "repeating-radial-gradient(rgba(100,255,218,0.3) 2px, #0A192F 8px, #0A192F 80px);",

                circularLightMd:
                    "repeating-radial-gradient(rgba(74,144,226,0.2) 2px,#F8FAFF 5px,#F8FAFF 60px)",

                circularDarkMd:
                    "repeating-radial-gradient(rgba(100,255,218,0.3) 2px,#0A192F 6px,#0A192F 60px)",

                circularLightSm:
                    "repeating-radial-gradient(rgba(74,144,226,0.2) 2px,#F8FAFF 5px,#F8FAFF 40px)",

                circularDarkSm:
                    "repeating-radial-gradient(rgba(100,255,218,0.3) 2px,#0A192F 4px,#0A192F 40px)",
            },
        },

        screens: {
            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }

            xs: { max: "479px" },
            // => @media (max-width: 479px) { ... }
        },
    },

    plugins: [],
};
