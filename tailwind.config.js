/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f3e9d7',
        canvasDeep: '#e9dcc0',
        ink: '#1b140f',
        crimson: '#9c2b2b',
        crimsonDeep: '#6e1f1f',
        ochre: '#c9862c',
        ochreDeep: '#a3661c',
        emerald: '#1f5c4a',
        emeraldDeep: '#123b2f',
        royal: '#2b3a67',
        plum: '#5c2a54',
        plumDeep: '#3d1a38',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
      },
      backgroundImage: {
        'oil-1': 'radial-gradient(circle at 20% 20%, rgba(156,43,43,0.35), transparent 55%), radial-gradient(circle at 80% 30%, rgba(201,134,44,0.3), transparent 50%), radial-gradient(circle at 50% 80%, rgba(31,92,74,0.35), transparent 55%)',
        'oil-2': 'radial-gradient(circle at 70% 20%, rgba(43,58,103,0.4), transparent 50%), radial-gradient(circle at 20% 80%, rgba(92,42,84,0.35), transparent 55%)',
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
