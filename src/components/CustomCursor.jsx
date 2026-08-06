import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// A near-normal cursor for desktop pointer devices: a small precise dot at
// the exact pointer tip, with a slim ring trailing just behind it that
// grows and tints green over interactive elements. Fully inert on touch
// devices. Rendered above every other layer (nav, lightbox) so it never
// disappears while hovering fixed UI.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hoveringLink, setHoveringLink] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 })
  const ringY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 })

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
      <motion.div
        className="fixed top-0 left-0 rounded-full"
        animate={{
          width: hoveringLink ? 6 : 5,
          height: hoveringLink ? 6 : 5,
          backgroundColor: hoveringLink ? '#3f6b4c' : '#141210',
        }}
        transition={{ duration: 0.15 }}
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border"
        animate={{
          width: hoveringLink ? 34 : 22,
          height: hoveringLink ? 34 : 22,
          borderColor: hoveringLink ? '#3f6b4c' : '#141210',
          opacity: hoveringLink ? 0.9 : 0.45,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </div>
  )
}
