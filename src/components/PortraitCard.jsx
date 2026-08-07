import { motion } from 'framer-motion'

export default function PortraitCard({ portrait, onOpen, index = 0 }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(portrait)}
      data-cursor-hover
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block w-full text-left rounded-sm overflow-hidden bg-transparent shadow-[0_8px_30px_rgba(20,18,16,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="relative overflow-hidden">
        <img
          src={portrait.image}
          alt={portrait.title}
          loading="lazy"
          className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl text-ink leading-snug">{portrait.title}</h3>
        {portrait.description && (
          <p className="mt-1 text-sm text-ink/60">{portrait.description}</p>
        )}
      </div>
    </motion.button>
  )
}
