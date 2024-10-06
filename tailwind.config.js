/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "back-footer": "#002a7a", // Replace with your hex color
        "back-button-padrao": "#002a7a", // Replace with your hex color
        "back-button-orange": "#ed0d28",
        "back-dark":"#18181b", // Replace with your hex color
        "back-light":"#fff", // Replace with your hex color
        "color-dark":"#fff", // Replace with your hex color
        "color-light":"#000", // Replace with your hex color
        "border-dark":"#71717a", // Replace with your hex color
        "components-dark":"#27272a", // Replace with your hex color
      },
    },
  },
  plugins: [],
}

