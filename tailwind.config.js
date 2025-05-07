/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': {'min': '375px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1024px'},
      'lg': {'min': '1025px', 'max': '1280px'},
      'xl': {'min': '1281px', 'max': '1440px'},
      '2xl': {'min':'1441px'}
    },
  },
  plugins: [],
}

