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
      objectPosition: {
        'center-top': '50% calc(50% + 80px)',
        'center-bottom': '50% calc(50% - 80px)'
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'silkscreen' : ['Silkscreen', 'monospace']
      },
    },
  },
  plugins: [],
}
