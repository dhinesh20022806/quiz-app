/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens:{
        'xs':'475px',
        'xxs':'360px',
        ...defaultTheme.screens,
      },
      fontFamily:{
        lato:['"Lato"',...defaultTheme.fontFamily.sans],
        abrilFatface:['"Abril Fatface"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

