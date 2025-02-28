/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xxs: { min: '390px', }, // Add the xxs resolution for screens smaller than 350px
      },
      colors: {
        green: '#00FF06',         // Main Green
        lighterBlack: '#1D1D1B',  // Lighter Black
        navbarBlack: '#0A0A0A',   // Navbar Black
        lighterGreen: '#00FF9C',
        serviceBlack: '#1B1B1B'  // Hero text green
      },
    },
  },
  plugins: [],
};
