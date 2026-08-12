/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#faf8f5',
          100: '#f5f0ea',
          200: '#ebe3d9',
          300: '#ddd2c3',
          400: '#c9b8a4',
          500: '#b49e85',
        },
        rose: {
          50: '#fdf2f4',
          100: '#fce4e8',
          200: '#faccd4',
          300: '#f7a3b3',
          400: '#f07089',
          500: '#e54d6d',
          600: '#d12d54',
          700: '#af2145',
          800: '#931f3f',
          900: '#7e1e3a',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e4ece4',
          200: '#ccdacc',
          300: '#a8bfa8',
          400: '#7d9e7d',
          500: '#5f825f',
          600: '#4b694b',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
