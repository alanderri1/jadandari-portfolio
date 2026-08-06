const PALETTE = {
  green: '#3f6b4c',
  deep: '#2b4a35',
  ink: '#141210',
}

// Hand-painted-looking horizontal divider built from a rough SVG stroke path.
// `flip` mirrors it vertically for visual variety between sections.
export default function BrushDivider({ color = 'green', className = '', flip = false }) {
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
          stroke={PALETTE[color] || PALETTE.green}
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  )
}
