/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ef482a',
        'secondary': '#fdf9f9',
        'txt-pri': '#000000',
        'txt-sec': '#686666'
      }
    },
  },
  plugins: [],
}