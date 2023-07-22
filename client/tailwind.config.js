/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-color':'#0b0b0b',
      },
      boxShadow: {
        'card-shadow': '0 2px 15px 0px rgba(255, 255, 255, 0.22)',
      }

    },
  },
  plugins: [],
}