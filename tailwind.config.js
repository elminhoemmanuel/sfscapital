module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      
      backgroundImage: theme => ({
        'hero-bg': "url('/images/farmhero.jpg')",
       }),
      colors: {
        sfsblue:"#152144",
        sfsyellow:"#FFD873",
        sfstext:"#002058",
        inputtext:"#B2B7BC",
        inputbg:"#F5F5F5",
        sfsgreen:"#10C06D",
        featurestext:"#B3B3B3",
        footeryellow:"#F9A825",
        dashtext:"#7E8598"
      }
    },

    screens: {
      'xs': '330px',
      // => @media (min-width: 330px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
