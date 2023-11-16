/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        sxx: {
          max: '420px'
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

