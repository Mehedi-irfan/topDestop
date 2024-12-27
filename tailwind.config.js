/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        md: "990px",
      },
      colors: {
        primary: "#3238f2",
      },
      fontFamily: {
        popins: ["Poppins", "serif"],
        lobster: ["Lobster", "serif"],
      },
    },
  },
  plugins: [],
};
