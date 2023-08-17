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
      gray: "#9ca3af",
      footer: "#001A1A",
      white: "#ffffff",
      black: "#000000",
      teal: "#0d9488",
      red: '#E86441',
      orange: '#f97316',
      blue:'#3b82f6',
      yellow:'#eab308',
      navyBlue:'#2563eb',
      skyBlue:'#38bdf8',

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