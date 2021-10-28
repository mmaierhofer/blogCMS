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
      white: '#ffffff'
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
