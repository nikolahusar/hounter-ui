/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      colors: {
        "green-primary": "#10B981",
        "green-secondary": "#4BE4C9",
        gray: "#626687",
        gold: "#F59E0B",
        blue: "#1B1C57",
      },
    },
  },
  plugins: [],
};
