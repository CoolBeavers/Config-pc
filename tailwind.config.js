/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '-40px 40px 40px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}