/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lora: ['Lora', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        sourceSans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
