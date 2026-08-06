import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PortraitCard from '../components/PortraitCard'
import Lightbox from '../components/Lightbox'
import Reveal from '../components/Reveal'
import BrushDivider from '../components/BrushDivider'
import { portraits, categories } from '../data/portraits'

export default function Portraits() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? portraits
        : portraits.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  const currentIndex = selected ? filtered.findIndex((p) => p.id === selected.id) : -1

  const goNext = () => {
    if (currentIndex === -1) return
    setSelected(filtered[(currentIndex + 1) % filtered.length])
  }
  const goPrev = () => {
    if (currentIndex === -1) return
    setSelected(filtered[(currentIndex - 1 + filtered.length) % filtered.length])
  }

  return (
    <div className="pt-32 pb-24 px-5 sm:px-10 max-w-7xl mx-auto">
      <Reveal>
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-green mb-3">Portfolio</p>
        <h1 className="font-display italic text-5xl sm:text-6xl mb-4">Portraits</h1>
        <p className="text-ink/60 max-w-xl mb-10">
          A collection of commissioned portraits, personal work, and studies —
          spanning oil on canvas, charcoal, and graphite. Click any piece to
          view it in detail.
        </p>
      </Reveal>

      <BrushDivider color="green" className="mb-10 opacity-70" />

      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            data-cursor-hover
            className={`relative px-5 py-2 text-sm uppercase tracking-[0.15em] rounded-full border transition-colors ${
              activeCategory === cat
                ? 'bg-ink text-canvas border-ink'
                : 'border-ink/25 text-ink/60 hover:border-green hover:text-green'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="masonry">
        {filtered.map((portrait, i) => (
          <PortraitCard key={portrait.id} portrait={portrait} index={i} onOpen={setSelected} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-ink/50 py-20">No pieces in this category yet.</p>
      )}

      <Lightbox portrait={selected} onClose={() => setSelected(null)} onNext={goNext} onPrev={goPrev} />
    </div>
  )
}
