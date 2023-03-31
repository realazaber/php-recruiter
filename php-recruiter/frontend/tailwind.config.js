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
      },
      screens: {
        'phone': '640px',
        'tablet': '768px',
        'desktop': '1024px',
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
