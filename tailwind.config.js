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
          DEFAULT: "#05050f",
          card: "#0a0a1a",
          light: "#0f0f24",
        },
        accent: {
          orange: "#ff6b35",
          amber: "#ff9a3c",
          blue: "#3d9cf5",
          cyan: "#00d4ff",
          purple: "#a855f7",
        },
        muted: "#5a5a7a",
        border: "rgba(255,255,255,0.06)",
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "float-delay": "float 10s ease-in-out infinite 3s",
        "spin-slow": "spin 40s linear infinite",
        "spin-reverse": "spin 30s linear infinite reverse",
        "pulse-ring": "pulseRing 3s ease-in-out infinite",
        "slide-right": "slideRight 40s linear infinite",
        "scanline": "scanlineMove 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        pulseRing: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scanlineMove: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
