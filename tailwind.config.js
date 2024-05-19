/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultConfig'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens:{
        'xs':'475px',
        'xxs':'200px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
}

