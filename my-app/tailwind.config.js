/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tailus/themer/dist/components/**/*.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
