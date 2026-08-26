import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

// A near-default arrow cursor for desktop pointer devices — recognizable as
// a normal pointer, with a slight tint/scale reaction on hover over
// interactive elements. Fully inert on touch devices. Rendered above every
// other layer (nav, lightbox) so it never disappears while hovering fixed
// UI.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hoveringLink, setHoveringLink] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setEnabled(isFinePointer)
    if (!isFinePointer) return

    document.body.classList.add('has-custom-cursor')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
    }
    const over = (e) => {
      const target = e.target.closest('a, button, [data-cursor-hover]')
      setHoveringLink(Boolean(target))
    }
    const leave = () => setVisible(false)

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    document.addEventListener('mouseleave', leave)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      document.removeEventListener('mouseleave', leave)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!enabled) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
      aria-hidden="true"
    >
      {/* Arrow — a normal pointer silhouette, tip pinned exactly to the cursor position */}
      <motion.svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        animate={{
          scale: hoveringLink ? 1.15 : 1,
          rotate: hoveringLink ? -4 : 0,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        style={{ x, y, translateX: '-4px', translateY: '-2px' }}
        className="fixed top-0 left-0"
      >
        <path
          d="M3 2.5 L3 18.5 L7.3 14.7 L10 20.5 L12.7 19.2 L10 13.4 L16 13.4 Z"
          fill={hoveringLink ? '#67a5db' : '#e8d574'}
          stroke="#450101"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  )
}
