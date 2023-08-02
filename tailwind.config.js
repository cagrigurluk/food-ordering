const { Open_Sans } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: { 
      container:{
        screens:{
          xs:"375px",
          sm:"640px",
          md:"768px",
          lg:"1024px",
          xl:"1140px",
        }

      },
      colors: {
        primary: "#ffbe33",
        secondary:"#343a40",
      },
      fontFamily:{
        dancing: ["Dancing Script", "cursive"],
        sans: ["open-sans","sans-serif"]
      }
    },
  },
  plugins: [],
};