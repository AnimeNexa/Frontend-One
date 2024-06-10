/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '4rem': '4rem',
        '70rem': '70rem',
      },
      maxWidth: {
        'custom-max': 'min(100% - 4rem, 70rem)',
      }
    },
  },
  plugins: [],
}

