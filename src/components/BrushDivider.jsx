const PALETTE = {
  crimson: '#9c2b2b',
  ochre: '#c9862c',
  emerald: '#1f5c4a',
  royal: '#2b3a67',
  plum: '#5c2a54',
  ink: '#1b140f',
}

// Hand-painted-looking horizontal divider built from a rough SVG stroke path.
// `flip` mirrors it vertically for visual variety between sections.
export default function BrushDivider({ color = 'crimson', className = '', flip = false }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 24"
        preserveAspectRatio="none"
        className={`w-full h-4 sm:h-6 ${flip ? 'scale-y-[-1]' : ''}`}
      >
        <path
          d="M0 14 C 60 4, 100 20, 160 12 S 260 2, 320 14 S 440 22, 500 10 S 580 4, 600 12"
          fill="none"
          stroke={PALETTE[color] || PALETTE.crimson}
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  )
}
