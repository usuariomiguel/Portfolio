module.exports = {
  content: [
    './src/**/*.{html,js}', // Busca clases en todos los archivos HTML y JS dentro de "src"
    './*.html', // Opcional: Incluye archivos HTML en la raíz del proyecto
  ],
  theme: {
    fontSize: {
      movil_text: '18px',
      movil_text_table: '15px',
      movil_text_Big: '20px',
      movil_text_Big2: '24px',
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
    fontFamily: {
      Title: ["Inter", 'serif'],
      Text: [ "Anonymous Pro", 'serif'],
    },
    colors: {
      bg_primary: '#161616',
      bg_container: '#1B1B1B',
      bg_container2: '#181C19',
      border_container: '#2B2B2B',
      text: '#EEEEEE',
      icons: '#7b7b7b',
      text_secundary: 'rgb(255 243 91)',
      text_secundary2: '#40B66B',
    },

  },
  plugins: [],
};
