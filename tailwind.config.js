/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.html ", "./**/*.{js,jsx,ts,tsx,vue}"],
  content: [],
  theme: {
    extend: {
      spacing: {
        '35' : '35px'
      },
      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  plugins: [],
}

