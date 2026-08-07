// Custom typographic wordmark used in place of a logo image, set in the
// same sans font as the rest of the site (matching the bio paragraph).
export default function Wordmark({ className = '', size = 'md' }) {
  const sizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-5xl sm:text-7xl',
    xl: 'text-6xl sm:text-8xl md:text-9xl',
  }

  return (
    <span
      className={`inline-block font-display font-semibold tracking-tight text-ink ${sizes[size]} ${className}`}
    >
      jad andari
    </span>
  )
}
