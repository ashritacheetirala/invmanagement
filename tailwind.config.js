module.exports = {
  purge: ["./src/**/*.{js, jsx, ts, tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,

        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  variants: {
    extend: { tableLayout: ["hover", "focus"] },
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
