import { motion } from 'framer-motion'

// Scroll-triggered reveal wrapper. Wraps children in a motion.div that
// animates in once when it enters the viewport.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  as = 'div',
}) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  )
}
