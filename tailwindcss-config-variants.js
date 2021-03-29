module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#0033A1',
        'primary-100': '#D7DEFB',
        'primary-200': '#AEBFFA',
        'primary-400': '#879EFB',
        'primary-600': '#607EFA',
        'primary-800': '#395DF9',
        // 'secondary': '#F8BE00',
        // 'secondary-600': '#FFE091',
        // 'secondary-800': '#FFD364',
        // gray: {
        //   '100': '#FAFAFA',
        //   '200': '#3F3E3E',
        //   '800': '#847B81'
        // },
        // red: '#E74F48',
        // 'red-100': '#FFDEDE',
        // green: '#34EEAE',
        // black: '#52575C'
      },
      // fontFamily: {
      //   brand: ['Campton', 'sans-serif'],
      //   sans: ['Graphik', 'sans-serif']
      // },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};