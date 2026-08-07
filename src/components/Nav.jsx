import { Link } from 'react-router-dom'
import Wordmark from './Wordmark'

// Transparent header showing just the wordmark — no menu, no toggle.
// Home/Paintings/Films are reachable from the buttons on the home page
// itself, and Paintings/Films carry their own back-to-home arrow
// (see BackButton) opposite this logo.
export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[80] px-5 sm:px-10 py-5 sm:py-7 pointer-events-none">
      <Link to="/" className="pointer-events-auto inline-block" data-cursor-hover>
        <Wordmark size="sm" />
      </Link>
    </header>
  )
}
