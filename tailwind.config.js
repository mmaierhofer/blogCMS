module.exports = {
  corePlugins: {
    // ...
   scale: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#051622',
      lightPrimary: '#0a2c44',
      secondary: '#1BA098',
      ternary: '#DEB992',
      white: '#ffffff',
      black: '#000000',
      red: '#7F0000',
      green: '#28713e',
      greenHover: '#205a32',
      gray: '#a9a9a9',
      lightGray: '#f3f3f3'
    }
  },
  variants: {
    extend: {
      borderRadius: ['hover'],
      scale: ['active', 'group-hover']
    },
  },
  plugins: [
  ],
}
