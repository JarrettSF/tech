/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensures Tailwind is scanning JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

