module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        blue200: '#7eb3e3',
        blue300: '#466ba7',
        blue400: '#37507f',
        blue500: '#172e69',
        blue600: '#08103e',
        teal: '#548ca4',
        gray: '#646584',
        deepgray: '#34344c',
        black: '#040416',
      },
    },
  },
  variants: {},
  plugins: [],
};
