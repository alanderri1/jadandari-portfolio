/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#c9b78d',
        canvasDeep: '#b5a179',
        canvasDeeper: '#9e8b64',
        ink: '#141210',
        green: '#3f6b4c',
        greenDeep: '#2b4a35',
        greenSoft: '#7c9c86',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
      },
      backgroundImage: {
        'oil-1': 'radial-gradient(circle at 20% 20%, rgba(63,107,76,0.3), transparent 55%), radial-gradient(circle at 80% 30%, rgba(157,139,100,0.35), transparent 50%), radial-gradient(circle at 50% 80%, rgba(43,74,53,0.3), transparent 55%)',
        'oil-2': 'radial-gradient(circle at 70% 20%, rgba(43,74,53,0.4), transparent 50%), radial-gradient(circle at 20% 80%, rgba(63,107,76,0.3), transparent 55%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(2%, -3%) scale(1.05)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        blink: 'blink 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
