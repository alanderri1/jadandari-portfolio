import { Link } from 'react-router-dom'

// Simple back-to-home arrow, fixed top-right — opposite the wordmark
// (top-left, from the global Nav) on standalone pages (Paintings, Films).
export default function BackButton() {
  return (
    <Link
      to="/"
      aria-label="Back to home"
      data-cursor-hover
      className="fixed top-5 right-5 sm:top-7 sm:right-7 z-[80] w-12 h-12 rounded-full flex items-center justify-center border border-ink/25 bg-canvas/80 backdrop-blur-sm shadow-sm hover:border-accent hover:text-accent transition-colors text-ink"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 12H5" />
        <path d="M11 18l-6-6 6-6" />
      </svg>
    </Link>
  )
}
