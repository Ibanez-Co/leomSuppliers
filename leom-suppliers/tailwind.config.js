/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A005F",
        button: "#510040",
      },
      fontFamily: {
        main: ['Montserrat'],
        headline: ['Poppins'],
        bold: ['Poppins-bold'],
      }
    },
  },
  plugins: [],
}
