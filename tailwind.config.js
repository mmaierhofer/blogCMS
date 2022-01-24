module.exports = {
  corePlugins: {
    // ...
    scale: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "98/100": "97%",
      },
      boxShadow: {
        innerHover: "inset 0px 6px 6px 0px rgba(0, 0, 0, 0.2)",
      },
      padding: {
        "1/3": "33.33%",
        full: "100%",
      },
    },
    colors: {
      primary: "#262b49",
      lightPrimary: "#1c2039",
      secondary: "#8bd1d3",
      ternary: "#DEB992",
      widget: "#262b49",
      white: "#ffffff",
      black: "#000000",
      red: "#7F0000",
      green: "#28713e",
      greenHover: "#205a32",
      gray: "#a9a9a9",
      darkGray: "#898989",
      lightGray: "#d3d3d3",
      background: "#1c2039",
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover"],
      scale: ["active", "group-hover"],
    },
  },
  plugins: [],
};
