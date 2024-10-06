/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "back-footer": "#001a4b", // Replace with your hex color
        "back-button-padrao": "#001a4b", // Replace with your hex color
      },
    },
  },
  plugins: [],
}

