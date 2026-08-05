import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Wordmark from './Wordmark'

const LINKS = [
  { to: '/', label: 'Home', num: '01' },
  { to: '/gallery', label: 'Gallery', num: '02' },
  { to: '/about', label: 'About', num: '03' },
  { to: '/process', label: 'Process', num: '04' },
  { to: '/contact', label: 'Contact', num: '05' },
]

const overlayVariants = {
  closed: { clipPath: 'circle(2% at calc(100% - 3rem) 3rem)', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
  open: { clipPath: 'circle(150% at calc(100% - 3rem) 3rem)', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
}

const listVariants = {
  closed: {},
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
}

const itemVariants = {
  closed: { opacity: 0, y: 30 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[80] flex items-center justify-between px-5 sm:px-10 py-5 sm:py-7 pointer-events-none">
        <Link to="/" className="pointer-events-auto" data-cursor-hover>
          <Wordmark size="sm" light={open} blend={!open} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          data-cursor-hover
          className="pointer-events-auto relative w-14 h-14 rounded-full flex items-center justify-center border border-ink/20 bg-canvas/70 backdrop-blur-sm shadow-sm hover:border-crimson/60 transition-colors"
        >
          <span className="relative w-6 h-4 block">
            <span
              className={`absolute left-0 top-0 w-full h-[2px] rounded-full transition-all duration-300 ${
                open ? 'bg-canvas rotate-45 top-1/2 -translate-y-1/2' : 'bg-ink'
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 w-full h-[2px] rounded-full transition-all duration-300 ${
                open ? 'bg-canvas -rotate-45 bottom-1/2 translate-y-1/2' : 'bg-ink'
              }`}
            />
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 z-[75] bg-ink text-canvas bg-oil-2"
            aria-label="Primary"
          >
            <div className="absolute inset-0 canvas-texture opacity-30" aria-hidden="true" />
            <motion.ul
              variants={listVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative h-full w-full flex flex-col items-center justify-center gap-2 sm:gap-4"
            >
              {LINKS.map((link) => (
                <motion.li key={link.to} variants={itemVariants} className="overflow-hidden">
                  <Link
                    to={link.to}
                    data-cursor-hover
                    className="group flex items-baseline gap-4 sm:gap-6 font-display italic text-4xl sm:text-6xl md:text-7xl font-semibold text-canvas/90 hover:text-ochre transition-colors"
                  >
                    <span className="font-sans not-italic text-xs sm:text-sm text-ochre/80 tracking-[0.2em] self-center">
                      {link.num}
                    </span>
                    <span className="relative">
                      {link.label}
                      <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[3px] bg-crimson transition-all duration-300" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
              className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 text-xs tracking-[0.25em] uppercase text-canvas/50"
            >
              <span>Instagram</span>
              <span>·</span>
              <span>Pinterest</span>
              <span>·</span>
              <span>Email</span>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
