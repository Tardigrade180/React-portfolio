/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ["Space Grotesk", "sans-serif"],
        'audiowide': ["Audiowide", "cursive"],
      },
    },
  },
  plugins: [],
};
