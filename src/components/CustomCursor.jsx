import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Paintbrush-dab cursor for desktop pointer devices. A tight dot tracks the
// pointer exactly; a looser ring trails behind it with spring lag, mimicking
// a loaded brush dragging paint. Fully inert on touch devices.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hoveringLink, setHoveringLink] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { damping: 22, stiffness: 260, mass: 0.6 })
  const ringY = useSpring(y, { damping: 22, stiffness: 260, mass: 0.6 })

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
      className="pointer-events-none fixed inset-0 z-[70]"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
      aria-hidden="true"
    >
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-crimson mix-blend-multiply"
        style={{ x, y, width: 8, height: 8, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-ochre mix-blend-multiply"
        animate={{
          width: hoveringLink ? 56 : 34,
          height: hoveringLink ? 56 : 34,
          opacity: hoveringLink ? 0.85 : 0.55,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </div>
  )
}
