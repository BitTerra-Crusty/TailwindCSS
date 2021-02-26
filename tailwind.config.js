module.exports = {
  purge: {
    enabled: true,
    content: ['./public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#66ff66',
      },
      fontFamily:{
        header: ['Cabin Sketch']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
