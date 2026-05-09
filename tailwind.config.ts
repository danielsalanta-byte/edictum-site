import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Oxblood / academic burgundy — drawn from the official seal background
        ink: {
          DEFAULT: "#7E1A1A",
          deep: "#5C1414",
          soft: "#9A2828",
          mute: "#6B2E2E",
        },
        // Ivory / warm parchment — drawn from the seal foreground
        parchment: {
          DEFAULT: "#F6F0DD",
          warm: "#EFE6CD",
          deep: "#E2D6B5",
        },
        // Subtle gold/bronze accents (use sparingly)
        gold: {
          DEFAULT: "#A8854A",
          deep: "#8B6B36",
          light: "#C9A972",
        },
        // Charcoal text for body on light backgrounds
        graphite: {
          DEFAULT: "#2A1A1A",
          soft: "#4A3030",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"EB Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Cinzel"', '"Trajan Pro"', "Georgia", "serif"],
      },
      backgroundImage: {
        marble:
          "radial-gradient(at 20% 10%, rgba(168,133,74,0.08), transparent 40%), radial-gradient(at 80% 90%, rgba(126,26,26,0.06), transparent 50%), linear-gradient(180deg, #F6F0DD 0%, #EFE6CD 100%)",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(92,20,20,0.22)",
        column:
          "0 1px 0 rgba(92,20,20,0.06), 0 12px 40px -20px rgba(92,20,20,0.30)",
      },
      letterSpacing: {
        wider2: "0.18em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 1.2s ease-out both",
        "spin-slow": "spin 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
