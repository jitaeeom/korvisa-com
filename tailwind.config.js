/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        ink: {
          50: "#f4f6f8",
          100: "#e8ecf1",
          200: "#cfd8e6",
          300: "#a6b4c8",
          400: "#7a8cab",
          500: "#5c6f8f",
          600: "#4a5a78",
          700: "#3d4a62",
          800: "#343f53",
          900: "#222a38",
          950: "#121820",
        },
        accent: {
          DEFAULT: "#0369a1",
          light: "#0ea5e9",
          muted: "#0284c7",
          soft: "#e0f2fe",
          glow: "rgba(14, 165, 233, 0.35)",
        },
        warm: { DEFAULT: "#ea580c", soft: "#ffedd5", glow: "rgba(234, 88, 12, 0.2)" },
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgb(0 0 0 / 0.08), 0 2px 8px -4px rgb(0 0 0 / 0.06)",
        lift: "0 24px 48px -12px rgb(0 0 0 / 0.18), 0 12px 24px -8px rgb(0 0 0 / 0.1)",
        glow: "0 0 0 1px rgb(14 165 233 / 0.12), 0 16px 48px -8px rgb(14 165 233 / 0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeUpSlow: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.12s forwards",
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        marquee: "marquee 42s linear infinite",
      },
      backgroundSize: {
        "300%": "300% 100%",
      },
    },
  },
  plugins: [],
};
