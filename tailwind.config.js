/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
      mono: ['"IBM Plex Mono"', "monospace"],
    },
    extend: {
      colors: {
        strong: "#000626E3",
        weak: "#000933A3",
        "stroke-strong": "rgba(0, 13, 77, 0.45)",
        "stroke-weak": "#00116619",
        error: "#C73A3A",
      },
    },
  },
  plugins: [],
};
