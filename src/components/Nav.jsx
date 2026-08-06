import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Wordmark from './Wordmark'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/portraits', label: 'Portraits' },
  { to: '/films', label: 'Films' },
]

const panelVariants = {
  closed: { opacity: 0, scale: 0.92, y: -8, transition: { duration: 0.18, ease: [0.4, 0, 1, 1] } },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const itemVariants = {
  closed: { opacity: 0, x: 10 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const panelRef = useRef(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-[80] flex items-center justify-between px-5 sm:px-10 py-5 sm:py-6">
      <Link to="/" data-cursor-hover>
        <Wordmark size="sm" />
      </Link>

      <div ref={panelRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          data-cursor-hover
          className="relative w-12 h-12 rounded-full flex items-center justify-center border border-ink/25 bg-canvas/80 backdrop-blur-sm shadow-sm hover:border-green transition-colors"
        >
          <span className="relative w-5 h-3.5 block">
            <span
              className={`absolute left-0 top-0 w-full h-[2px] rounded-full bg-ink transition-all duration-300 ${
                open ? 'rotate-45 top-1/2 -translate-y-1/2' : ''
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] rounded-full bg-ink transition-all duration-300 ${
                open ? '-rotate-45 bottom-1/2 translate-y-1/2' : ''
              }`}
            />
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.nav
              key="panel"
              initial="closed"
              animate="open"
              exit="closed"
              variants={panelVariants}
              style={{ transformOrigin: 'top right' }}
              className="absolute right-0 mt-3 w-52 rounded-sm bg-canvasDeep/95 backdrop-blur-sm border border-ink/15 shadow-[0_15px_40px_rgba(20,18,16,0.25)] overflow-hidden"
              aria-label="Primary"
            >
              <ul className="py-3">
                {LINKS.map((link) => (
                  <motion.li key={link.to} variants={itemVariants}>
                    <Link
                      to={link.to}
                      data-cursor-hover
                      className={`group flex items-center justify-between px-5 py-2.5 font-display italic text-xl transition-colors ${
                        location.pathname === link.to ? 'text-green' : 'text-ink hover:text-green'
                      }`}
                    >
                      {link.label}
                      <span className="w-1.5 h-1.5 rounded-full bg-green opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="px-5 pb-4">
                <svg viewBox="0 0 200 12" className="w-full h-2" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M0 6 C 30 1, 60 11, 100 6 S 170 1, 200 6"
                    fill="none"
                    stroke="#3f6b4c"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
