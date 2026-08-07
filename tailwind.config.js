/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#081207',
        canvasDeep: '#142013',
        ink: '#e8d574',
        accent: '#67a5db',
        accentDeep: '#4a84b8',
        accentSoft: '#9dc3e6',
      },
      fontFamily: {
        display: ['"Jost"', 'sans-serif'],
        sans: ['"Jost"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
