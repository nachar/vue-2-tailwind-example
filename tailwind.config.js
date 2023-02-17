/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      black: '#2c2c24',
      primary: '#ec3534',
      secondary: '#255886',
      tertiary: '#9c2c2c',
      success: '#00b67a',
      gray: '#f7f7f7',
      'dark-gray': '#7b7b7b',
      'dark-opacity': 'rgba(0, 0, 0, .4)',
    },
  },
  plugins: [],
};
