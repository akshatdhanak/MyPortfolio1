/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'Space Grotesk'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#050505",
          card: "#111111",
          light: "#1a1a1a",
        },
        accent: {
          primary: "#e5ff00", // Cyber Yellow
          secondary: "#ffffff",
        },
        muted: "#666666",
        border: "rgba(255, 255, 255, 0.1)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
