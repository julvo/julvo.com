module.exports = {
  purge: [
    './routes/**/*.html',
    './routes/**/*.md',
    './partials/**/*.html',
    './templates/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
