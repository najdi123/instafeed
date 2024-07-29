/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a202c',
        'dark-text': '#a0aec0',
      },
    },
  },
  plugins: [],
}