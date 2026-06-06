/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        muted: "#666666",
        dim: "#999999",
        acid: "#D4FF00",
        "acid-hover": "#c2eb00",
        paper: "#FAFAFA",
        silver: "#F0F0F0",
        line: "#E5E5E5",
        "line-light": "#EEEEEE",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        acid: "4px 4px 0 #111111",
        panel: "inset 0 1px 0 #FFFFFF, 0 24px 80px rgba(17,17,17,0.06)",
      },
    },
  },
  plugins: [],
};
