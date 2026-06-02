import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#5B8A72",
          light: "#EAF3EE"
        },
        cream: "#FAF8F5",
        dark: "#1A1A1A",
        "gray-mid": "#6B7280"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        base: "8px",
        large: "16px"
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
