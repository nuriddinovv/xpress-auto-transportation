/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Exo 2"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '946px',
          xl: '1024px',
          '2xl': '1250px',
        },
      },
      colors: {
        main: '#FF4E00',
        second: '#244567',
        mainDark: '#151716',
        lightGray: '#5C6670',
      },
    },
  },
  plugins: [],
}