/* @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        chicle: ["Chicle", "cursive"],
        merienda: ["Merienda", "cursive"],
      },
      colors: {
        primary: "#854d3d",
        secondary: "#737373",
        brandDark: "#270c03",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
}