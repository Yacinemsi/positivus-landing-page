/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      md: "850px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        "green-light": "#B9FF66",
        "gray-dark": "#1A1A1A",
      },
      rotate: {
        30: "30deg",
      },
      borderRadius: {
        "4xl": "28px",
      },
      backgroundColor: {
        dark: "#191A23",
      },
      before: ["open"],
      boxShadow: {
        box: "0px 4px 0px 0px #000000",
        boxWhite: "0px 4px 0px 0px #FFFFFF",
        boxGreen: "0px 4px 0px 0px #B9FF66",
      },
    },
  },
  plugins: [],
};
