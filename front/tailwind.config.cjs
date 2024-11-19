/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },

      colors: {
        morado: "#374BFF",
        moradobajo: "#4D5FFF",
        primary: {
          100: "#3A00B0",
          300: "#29007D",
          900: "#120037",

        },
      },
    },
  },
  plugins: [],
};
