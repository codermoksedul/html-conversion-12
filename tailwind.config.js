/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'p-color' : '#F48C06',
        's-color' : '#2CBCF7',
        'bg-color' : '#FFFFFF',
        'heading-color' : '#2F327D',
        'txt-color' : '#696984',
      },
    },
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl' : '1400px',

    },
  },
  plugins: [],
}