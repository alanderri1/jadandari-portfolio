import { useState } from 'react'
import { motion } from 'framer-motion'
import PortraitCard from '../components/PortraitCard'
import Lightbox from '../components/Lightbox'
import BackButton from '../components/BackButton'
import { portraits } from '../data/portraits'

export default function Portraits() {
  const [selected, setSelected] = useState(null)

  const currentIndex = selected ? portraits.findIndex((p) => p.id === selected.id) : -1

  const goNext = () => {
    if (currentIndex === -1) return
    setSelected(portraits[(currentIndex + 1) % portraits.length])
  }
  const goPrev = () => {
    if (currentIndex === -1) return
    setSelected(portraits[(currentIndex - 1 + portraits.length) % portraits.length])
  }

  return (
    <div className="pt-28 pb-24 px-5 sm:px-10 max-w-7xl mx-auto">
      <BackButton />

      <h1 className="font-display text-4xl sm:text-5xl mb-10 sm:mb-12">paintings</h1>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {portraits.map((portrait, i) => (
          <PortraitCard key={portrait.id} portrait={portrait} index={i} onOpen={setSelected} />
        ))}
      </motion.div>

      <Lightbox portrait={selected} onClose={() => setSelected(null)} onNext={goNext} onPrev={goPrev} />
    </div>
  )
}
