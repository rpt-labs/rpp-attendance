module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F79020',
        secondary: '#F8F8F8',
        greyBackground: '#F4F4F4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
