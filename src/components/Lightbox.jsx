import { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Lightbox({ painting, onClose, onNext, onPrev }) {
  const handleKey = useCallback(
    (e) => {
      if (!painting) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    },
    [painting, onClose, onNext, onPrev]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = painting ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey, painting])

  return (
    <AnimatePresence>
      {painting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[90] bg-canvas/95 backdrop-blur-sm flex items-center justify-center px-4 py-10 sm:p-10"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            data-cursor-hover
            className="absolute top-5 right-5 sm:top-8 sm:right-8 w-12 h-12 rounded-full border border-ink/30 text-ink flex items-center justify-center hover:border-accent hover:text-accent transition-colors z-10"
          >
            <span className="relative block w-4 h-4">
              <span className="absolute inset-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-current rotate-45" />
              <span className="absolute inset-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-current -rotate-45" />
            </span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label="Previous artwork"
            data-cursor-hover
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-ink/30 text-ink flex items-center justify-center hover:border-accent hover:text-accent transition-colors z-10"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="Next artwork"
            data-cursor-hover
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-ink/30 text-ink flex items-center justify-center hover:border-accent hover:text-accent transition-colors z-10"
          >
            &#8594;
          </button>

          <motion.div
            key={painting.id}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-full grid md:grid-cols-[1.3fr_1fr] gap-0 md:gap-8 items-center"
          >
            <div className="relative max-h-[55vh] md:max-h-[80vh] flex items-center justify-center rounded-sm shadow-2xl">
              <img
                src={painting.image}
                alt={painting.title}
                className="max-w-full max-h-[55vh] md:max-h-[80vh] w-auto h-auto object-contain"
              />
            </div>
            <div className="mt-6 md:mt-0 text-ink">
              <h2 className="font-display text-3xl sm:text-4xl leading-tight">
                {painting.title}
              </h2>
              {painting.description && (
                <p className="mt-3 text-ink/70 leading-relaxed">{painting.description}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
