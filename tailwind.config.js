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
      lg2: '1100px',
      xl: '1440px',
    },
    colors: {
      'gray': '#8492a6',
      'bg-dark': '#090F12',
      'gray-light': '#f8fbff',
      'border-light': '#cccccc',
      'border-dark': '#cccccc',
      'dark': '#000',
      'toolcolor': '#808080',
      'light': '#fff',
      'yellow': '#fcd561',
      'blue': '#6366f1',
    },
    fontFamily: {
      sans: ["Anybody", 'sans-serif'],
      serif: ['Merriweather Sans', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'dxl': '0 20px 25px -5px #ffffff12, 0 8px 10px -6px #ffffff12;',
        'dmd': '0 4px 6px -1px #ffffff12, 0 2px 4px -2px #ffffff12;',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      }
    }
  },
  plugins: [],
}

