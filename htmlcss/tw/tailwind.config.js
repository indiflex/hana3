/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        'my-color': '#0000ff',
      },
    },
  },
  plugins: [],
};
