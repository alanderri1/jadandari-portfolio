import { Link } from 'react-router-dom'

// Simple back-to-home arrow, fixed top-right — opposite the wordmark
// (top-left, from the global Nav) on standalone pages (Paintings, Films).
export default function BackButton() {
  return (
    <Link
      to="/"
      aria-label="Back to home"
      data-cursor-hover
      className="fixed top-5 right-5 sm:top-7 sm:right-7 z-[80] w-12 h-12 rounded-full flex items-center justify-center border border-ink/25 bg-canvas/80 backdrop-blur-sm shadow-sm hover:border-accent hover:text-accent transition-colors text-ink text-lg"
    >
      &#8592;
    </Link>
  )
}
