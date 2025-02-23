module.exports = {
  content: [
    './src/**/*.{html,js}', // Busca clases en todos los archivos HTML y JS dentro de "src"
    './*.html', // Opcional: Incluye archivos HTML en la raíz del proyecto
  ],
  theme: {
    fontSize: {
      movil_text: '18px',
      Pc_text: '22px',
      movil_text_table: '15px',
      movil_text_Big: '20px',
      movil_text_Big2: '24px',
      Pc_text_Big: '24px',
      Pc_text_Big2: '26px',
      Pc_text_table: '18px',
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
      xl: '1500px',
    },
    fontFamily: {
      Title: ["Inter", 'serif'],
      Text: [ "Roboto Flex", 'serif'],
    },
    colors: {
      bg_primary: '#161616',
      bg_primary_500: 'rgb(22 22 22 / 70%)',
      bg_primaryL: '#fff',
      bg_container: 'rgb(30 30 30)',
      bg_containerL: '#ebf2ff',
      bg_container_inicial: '#40a6b6',
      bg_container_deposito: '#6d40b6',
      bg_container_interes: '#40B66B',
      // bg_container_total: '#40a6b6',
      border_container: '#656565',
      border_containerL: '#7b7b7b5c',
      text: '#EEEEEE',
      text_500: 'rgb(238 238 238 / 70%)',
      text_soft: '#bfbfbf',
      textL: '#000',
      textL_soft: '#696969',
      icons: '#7b7b7b',
      iconsL: '#rgb(174 174 176)',
      text_secundary: 'rgb(255 243 91)',
      text_secundary_500: 'rgb(255 243 91 / 70%)',
    },
    extend: {
      width: {
        md: "425px" // Aquí defines el valor que quieres para "lg"
      }
    }
  },
  plugins: [],
};
