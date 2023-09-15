/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60a5fa',
        primaryRed: '#F5385D',
       
      },
    },
  },
  plugins: [],
}
