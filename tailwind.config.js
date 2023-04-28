/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:["Roboto","sans-serif"],
      },
      colors:{
        primary:"#e6005c",
        secondary:"#6600ff",
      }
    },
  },
  plugins: [],
}