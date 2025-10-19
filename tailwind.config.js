/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-custom': 'radial-gradient(circle at top, #FECB96, white)',
  },
fontFamily: {
  poppins: ['Poppins', 'sans-serif'],
  montserrat: ['Montserrat', 'sans-serif'],
},


    },
  },
  plugins: [],
}

