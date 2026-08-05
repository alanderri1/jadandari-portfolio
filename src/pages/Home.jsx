import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Wordmark from '../components/Wordmark'
import Reveal from '../components/Reveal'
import BrushDivider from '../components/BrushDivider'
import { portraits } from '../data/portraits'

const featured = portraits.filter((p) => p.featured).slice(0, 3)
const hero = portraits[7] // "Vigil" — swap for whichever piece should headline the hero

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden canvas-texture">
        <div className="absolute inset-0 bg-oil-1 opacity-70 animate-drift" aria-hidden="true" />

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-10 pt-28 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 order-2 md:order-1"
          >
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-crimson mb-4">
              Oil Portraits &amp; Commissions
            </p>
            <h1 className="leading-[0.95]">
              <Wordmark size="xl" />
            </h1>
            <p className="mt-6 max-w-md text-ink/70 text-base sm:text-lg leading-relaxed">
              Figurative painter working primarily in oil, focused on
              portraiture that lingers between likeness and mood. This is a
              template homepage — swap this paragraph for your own artist
              statement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/gallery"
                data-cursor-hover
                className="px-7 py-3 bg-ink text-canvas text-sm tracking-[0.15em] uppercase hover:bg-crimson transition-colors rounded-sm"
              >
                View Gallery
              </Link>
              <Link
                to="/contact"
                data-cursor-hover
                className="px-7 py-3 border border-ink/30 text-ink text-sm tracking-[0.15em] uppercase hover:border-crimson hover:text-crimson transition-colors rounded-sm"
              >
                Commission a Piece
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative order-1 md:order-2 z-0"
          >
            <div className="relative mx-auto max-w-sm md:max-w-md">
              <div className="absolute -inset-4 border border-ochre/50 rounded-sm" aria-hidden="true" />
              <img
                src={hero.image}
                alt={hero.title}
                className="relative w-full h-[60vh] md:h-[70vh] object-cover shadow-[0_25px_60px_rgba(27,20,15,0.35)] rounded-sm"
              />
              <span className="absolute -bottom-5 left-4 sm:-left-6 bg-canvas px-4 py-2 shadow-md text-xs sm:text-sm">
                <span className="font-display italic text-ink">{hero.title}</span>
                <span className="block text-ink/50 mt-0.5">
                  {hero.medium}, {hero.year}
                </span>
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink/40 text-[10px] uppercase tracking-[0.3em]"
        >
          <span>Scroll</span>
          <span className="w-px h-8 bg-ink/30" />
        </motion.div>
      </section>

      <BrushDivider color="crimson" />

      {/* SELECTED WORKS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <h2 className="font-display italic text-4xl sm:text-5xl">Selected Works</h2>
            <Link
              to="/gallery"
              data-cursor-hover
              className="text-sm uppercase tracking-[0.2em] text-crimson hover:text-crimsonDeep transition-colors"
            >
              Full Gallery &rarr;
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <Link to="/gallery" data-cursor-hover className="group block relative overflow-hidden rounded-sm shadow-lg">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-canvas">
                  <h3 className="font-display italic text-2xl">{p.title}</h3>
                  <p className="text-xs mt-1 text-canvas/70 uppercase tracking-widest">
                    {p.medium} &middot; {p.year}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <BrushDivider color="emerald" flip />

      {/* CTA */}
      <section className="relative bg-ink text-canvas py-24 sm:py-32 px-5 sm:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-oil-2 opacity-60" aria-hidden="true" />
        <Reveal className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display italic text-4xl sm:text-6xl leading-tight">
            Commissioning a portrait is a collaboration.
          </h2>
          <p className="mt-6 text-canvas/60 max-w-xl mx-auto">
            From reference sitting to final glaze, every commissioned piece
            follows a considered process. Read how it works, or reach out to
            start a conversation about your piece.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/process"
              data-cursor-hover
              className="px-7 py-3 border border-canvas/30 text-sm tracking-[0.15em] uppercase hover:border-ochre hover:text-ochre transition-colors rounded-sm"
            >
              See the Process
            </Link>
            <Link
              to="/contact"
              data-cursor-hover
              className="px-7 py-3 bg-crimson text-canvas text-sm tracking-[0.15em] uppercase hover:bg-crimsonDeep transition-colors rounded-sm"
            >
              Start a Commission
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
