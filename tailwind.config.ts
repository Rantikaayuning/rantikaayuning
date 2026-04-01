import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec4899",
        secondary: "#8b5cf6",
        tertiary: "#3b82f6",
        dark: "#0f172a",
        "dark-secondary": "#1e293b",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
        "gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(236, 72, 153, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(236, 72, 153, 0.8)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
