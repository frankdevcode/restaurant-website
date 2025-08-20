import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1a1a',
        'secondary': '#4a4a4a',
        'accent': '#c09a59',
        'background': '#fdfaf6',
        'surface': '#ffffff',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [
    forms,
  ],
}