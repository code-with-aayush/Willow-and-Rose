import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#5B8A72",
          deep: "#3F6351",
          sage: "#A8C3B0",
          light: "#EAF3EE"
        },
        cream: "#FAF8F5",
        "cream-warm": "#F4F0E8",
        dark: "#1A1A1A",
        "dark-warm": "#15181A",
        "gray-mid": "#6B7280",
        gold: "#C9A961",
        "gold-soft": "#E6D9B5"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        base: "8px",
        large: "16px",
        xl: "24px"
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.06)",
        lift: "0 24px 60px -20px rgba(26,26,26,0.18)",
        soft: "0 8px 30px -10px rgba(26,26,26,0.10)"
      },
      letterSpacing: {
        eyebrow: "0.22em",
        wider2: "0.16em"
      },
      fontSize: {
        eyebrow: ["11px", { lineHeight: "1", letterSpacing: "0.22em" }],
        "display-xl": ["80px", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-2xl": ["104px", { lineHeight: "0.95", letterSpacing: "-0.025em" }]
      },
      maxWidth: {
        prose: "62ch"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "80%, 100%": { transform: "scale(1.5)", opacity: "0" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" }
        }
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        "pulse-ring": "pulse-ring 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "bounce-soft": "bounce-soft 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
