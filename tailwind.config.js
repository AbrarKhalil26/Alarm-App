/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spin: 'spin 3s linear infinite',
      },
      height: {
        'calc-90': 'calc(100vh - 90px)', // Add a comma here
      },
      boxShadow: {
        'inner-lg': 'inset 0px 0px 10px 7px rgba(63, 63, 70, 0.2)',
      },
    },
  },
  plugins: [],
}

