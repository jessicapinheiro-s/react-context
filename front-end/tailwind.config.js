/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "back-footer": "#3b82f6", // Replace with your hex color
        "back-button-padrao": "#3b82f6", // Replace with your hex color
        "back-button-padrao-hover": "#294f99", // Replace with your hex color
        "back-button-orange": "#ed0d28",
        "back-dark":"#18181b", // Replace with your hex color
        "back-light":"#fff", // Replace with your hex color
        "color-dark":"#fff", // Replace with your hex color
        "color-light":"#000", // Replace with your hex color
        "border-dark":"#2c2c2c", // Replace with your hex color
        "border-light":"#dedede", // Replace with your hex color
        "components-dark":"#27272a", // Replace with your hex color
      },
    },
  },
  plugins: [],
}

