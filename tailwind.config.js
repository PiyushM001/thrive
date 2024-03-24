/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/home.js",
    "./src/components/footer.js",
    "./src/components/header.js",
    "./src/components/tournament.js",
    "./src/components/tournament-page.js",
    "./src/components/profile_page.js",
  ],
   theme: {
    extend: {
      fontFamily: {
        'mochiy-pop': ['Mochiy Pop One', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

