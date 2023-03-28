/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'header-bg': '#1C2B35',
      'white': '#FFFFFF',
      'order-bg':'#FF9900',
      'green': '#8bc34a'
    },
    extend: {},
  },
  plugins: [],
}
