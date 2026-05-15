import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#080b14",
          800: "#0d111c",
          700: "#131826",
          600: "#1a2030",
          500: "#222a3d",
        },
        gold: {
          50: "#fbf6e6",
          100: "#f5ecc8",
          200: "#ecdd9c",
          300: "#e0c97a",
          400: "#d4af37",
          500: "#c39a2a",
          600: "#a07d21",
          700: "#7a601a",
        },
        parchment: {
          50: "#fbf7ec",
          100: "#f4ecd8",
          200: "#e8dcb8",
          300: "#d9c894",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-gold":
          "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.15), transparent 60%)",
        "subtle-grid":
          "linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(212,175,55,0.25)",
        "glow-lg": "0 0 80px -20px rgba(212,175,55,0.35)",
      },
      letterSpacing: {
        wider2: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
