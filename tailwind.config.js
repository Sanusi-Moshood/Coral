/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'off-blue': '#083955',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      caudex: ['Caudex', 'serif'],
    },
  },
  plugins: [],
};
