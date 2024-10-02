/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-footer': '#001a4b', // Replace with your hex color
        'bg-button-padrao': '#001a4b', // Replace with your hex color
      },
    },
  },
  plugins: [],
}

