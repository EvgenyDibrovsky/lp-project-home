/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.js", "./src/**/*.html"],
  content: ["./dist/*.html"],

  theme: {
    screens: {
      lg: "768px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
      screens: {
        lg: "768px",
        xl: "1170px",
      },
    },
    fontSize: {
      base: ["16px", "25px"],
      navMenu: ["12px", "12px"],
      textBtn: ["12px", "12px"],
    },
    extend: {
      colors: {
        bgHeader: "#00183C",
        bgHeaderFixed: "#F9F9F9",
        navHeader: "#333",
        bgFooter: "#2C2C2C",
        colorTextBtn: "#333",
        bgHoverBtn: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
