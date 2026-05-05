/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      colors: {
        bg: { DEFAULT: "#06060e", card: "#0c0c1a", light: "#12122a" },
        accent: { blue: "#4f7df5", purple: "#8b5cf6", cyan: "#22d3ee", pink: "#ec4899" },
        muted: "#6b7280",
        border: "rgba(255,255,255,0.06)",
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "float-delay": "float 10s ease-in-out infinite 3s",
        "spin-slow": "spin 30s linear infinite",
        "spin-reverse": "spin 25s linear infinite reverse",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "slide-right": "slideRight 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-30px) rotate(5deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
