/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradients: {
        'gradient-to-br': 'to bottom right, #fff1eb, #ace0f9',
        'gradient-to-tr': 'to top right, #FFEDBC, #ED4264',
      },
      margin: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
      },
      
    },
  },
  plugins: [],
}
