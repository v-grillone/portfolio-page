/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '15vh': '15vh',
        '85vh': '85vh'
      },
    },
  },
  plugins: [],
}
