module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sideNav: '#272c33',
        background: '#f1f2f7',
        navText: '#c8c9ce'
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
