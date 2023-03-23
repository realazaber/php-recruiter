/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*",
  ],
  theme: {
    extend: {
      colors: {
        "pri": '#ef482a',
        "accent": '#565454'
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
