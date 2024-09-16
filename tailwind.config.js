/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#FFFFFF',
        'isActive': '#A07A2B',

      },
    },
  },
  plugins: [],
}