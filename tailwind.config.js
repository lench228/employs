/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        mid: "680px",
        lg: "1920px",
        xl: "2560px",
      },
      colors: {
        accent: "#155DA4",
        main: "#292929",
        "main-dark": "#f5f5f5",
        secondary: "#B0B0B0",
        "accent-grey": "#F2F2F2",
        "accent-grey-dark": "#3E3E3E",
      },
      fontFamily: {
        sans: "Raleway",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
