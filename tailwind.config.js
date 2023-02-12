/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#985a04',
      secondary: '#c84d06db'
    }
  },
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
      }
    },
  plugins: [

  ],
}
