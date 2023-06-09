/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      dark: '#1C1E26',
      white: '#E1E2E7',
      soft_blue: '#6A9EA7',
      text_area: '#262D3A',
      red: '#FE6262',
      check_box: {
        bg: '#272626',
        border: '#494949'
      }
    }
  },
  plugins: []
}
