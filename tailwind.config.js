/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./dist/*html"],
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'font-awesome': ['Font Awesome 5 Free'],
      },
    },
  },
  plugins: [],
}

