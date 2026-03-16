import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: "#0A0A0A",
        charcoal: "#111317",
        graphite: "#1A1F26",
        softwhite: "#F5F5F2",
        muted: "#B7BCC5",
        gold: "#C8A96B",
        deepgold: "#A8843E",
        goldlight: "#DEC28A",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Barlow'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C8A96B 0%, #A8843E 100%)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0A 0%, #111317 100%)",
        "card-gradient": "linear-gradient(145deg, #1A1F26 0%, #111317 100%)",
      },
      boxShadow: {
        gold: "0 0 30px rgba(200, 169, 107, 0.15)",
        "gold-hover": "0 0 50px rgba(200, 169, 107, 0.25)",
        card: "0 4px 40px rgba(0,0,0,0.5)",
        "card-hover": "0 8px 60px rgba(0,0,0,0.7)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
