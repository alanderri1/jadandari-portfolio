// Custom typographic wordmark used in place of a logo image.
// "Jad Andari" is set in italic Playfair Display with a hand-inked
// underline stroke drawn as an SVG path.
export default function Wordmark({ className = '', size = 'md' }) {
  const sizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-5xl sm:text-7xl',
    xl: 'text-6xl sm:text-8xl md:text-9xl',
  }

  return (
    <span
      className={`relative inline-block font-display italic font-semibold tracking-tight text-ink ${sizes[size]} ${className}`}
    >
      Jad Andari
      <svg
        viewBox="0 0 220 20"
        className="absolute left-0 -bottom-1 w-full h-3 sm:h-4"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M2 12 C 40 4, 80 18, 120 9 S 200 3, 218 11"
          fill="none"
          stroke="#3f6b4c"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
