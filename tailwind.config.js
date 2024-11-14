/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      md: "850px",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        "green-light": "#B9FF66",
      },
    },
  },
  plugins: [],
};
