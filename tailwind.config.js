/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
    extend: {
      colors: {
        strong: "#000626E3",
        weak: "#000933A3",
      },
    },
  },
  plugins: [],
};
