/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fc5c65",
        secondary: "#4ecdc4",
        terciary: "#ffe66d",
        darker: "#1a1919",
        dark: "#1d1c1c",
        lightDark: "#333232",
        black: "#000",
        danger: "#FF5252",
        red: "#FF0000",
        white: "#fff",
        medium: "#6e6969",
        lightMedium: "#7c7878",
        light: "#f8f4f4",
      },
    },
  },

  plugins: [],
};
