/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,css,js}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.052rem',
      '7xl': '5.052rem',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'dark': '#171717',
      'containerdark': '#060606',
      'inputdark': '#060606',
      'darkfont': '#fff',
      'light': '#405D72',
      'containerlight': '#1e293b',
      'lightfont': '#000',
    },
    fontFamily: {
      sans: ["Anybody", 'sans-serif'],
      serif: ['Merriweather Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

