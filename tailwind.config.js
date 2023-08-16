/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "#008080",
      grey: "#3a3a3a",
      footer: "#001A1A",
      white: "#ffffff",
      black: "#000000",
      teal: "#0d9488",
    },
    screens: {
      'sm': {'min': '320px', 'max': '600px'},
      'md': {'min': '601px', 'max': '800px'},
      'lg': {'min': '801px', 'max': '1800px'},
    },
    fontFamily: {},
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     },
      zIndex: {
        '100': '100',
      },
      maxWidth: {
        '990': '990px',
      },
    },
  },
  plugins: [],
};