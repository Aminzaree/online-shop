const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: "vazir",
        lale: "lalezar",
      },
      colors: {
        customBg: 'rgb(241, 241, 241)',
        'customBg-dark': 'rgba(39, 39, 42, 1)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

