import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Wordmark from '../components/Wordmark'
import Reveal from '../components/Reveal'
import BrushDivider from '../components/BrushDivider'
import VideoCard from '../components/VideoCard'
import { portraits } from '../data/portraits'
import { films } from '../data/films'

const featuredPortraits = portraits.filter((p) => p.featured).slice(0, 3)
const featuredFilms = films.filter((f) => f.featured)
const hero = portraits[7] // "Vigil" — swap for whichever piece should headline the hero

// TEMPLATE CONTENT — replace the bio copy and influences below with the
// real artist's biography and a photo of them at work.
const influences = ['John Singer Sargent', 'Alice Neel', 'Kehinde Wiley', 'Jenny Saville']

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Email', href: 'mailto:studio@jadandari.art' },
]

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
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-green mb-4">
              Oil Portraits &amp; Films
            </p>
            <h1 className="leading-[0.95]">
              <Wordmark size="xl" />
            </h1>
            <p className="mt-6 max-w-md text-ink/70 text-base sm:text-lg leading-relaxed">
              Figurative painter and filmmaker working between portraiture and
              short-form film. This is a template homepage — swap this
              paragraph for your own artist statement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/portraits"
                data-cursor-hover
                className="px-7 py-3 bg-ink text-canvas text-sm tracking-[0.15em] uppercase hover:bg-green transition-colors rounded-sm"
              >
                View Portraits
              </Link>
              <a
                href="#contact"
                data-cursor-hover
                className="px-7 py-3 border border-ink/30 text-ink text-sm tracking-[0.15em] uppercase hover:border-green hover:text-green transition-colors rounded-sm"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative order-1 md:order-2 z-0"
          >
            <div className="relative mx-auto max-w-sm md:max-w-md">
              <div className="absolute -inset-4 border border-green/50 rounded-sm" aria-hidden="true" />
              <img
                src={hero.image}
                alt={hero.title}
                className="relative w-full h-[60vh] md:h-[70vh] object-cover shadow-[0_25px_60px_rgba(20,18,16,0.35)] rounded-sm"
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

      <BrushDivider color="green" />

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-green mb-3">The Artist</p>
          <h2 className="font-display italic text-4xl sm:text-5xl mb-10">About Jad Andari</h2>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-start">
          <Reveal delay={0.1}>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/jadandari-artist/700/850"
                alt="The artist in their studio"
                className="w-full h-[420px] sm:h-[480px] object-cover rounded-sm shadow-xl"
              />
              <span className="absolute -bottom-4 -right-4 bg-green text-canvas text-xs px-4 py-2 uppercase tracking-widest rounded-sm">
                Studio, 2024
              </span>
            </div>
          </Reveal>

          <div className="space-y-6 text-ink/75 text-base sm:text-lg leading-relaxed">
            <Reveal delay={0.15}>
              <p>
                <span className="font-display italic text-2xl text-ink">
                  This is placeholder biography copy —
                </span>{' '}
                replace it with your own story. Jad Andari works between
                painting and film, drawn to the quiet moments between a
                subject's public face and their private one — whether on
                canvas or on camera.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Trained first in academic drawing, the painting practice has
                loosened into something more intuitive, favoring visible
                brushwork over photographic polish. That same instinct for
                unresolved, honest moments carries into the short films and
                documentary work.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="pt-4">
                <p className="text-xs uppercase tracking-[0.25em] text-ink/40 mb-3">Influences</p>
                <div className="flex flex-wrap gap-2">
                  {influences.map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1.5 border border-ink/15 rounded-full text-sm text-ink/70"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <BrushDivider color="deep" flip />

      {/* SELECTED WORK */}
      <section className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <Reveal>
          <h2 className="font-display italic text-4xl sm:text-5xl mb-4">Selected Work</h2>
          <p className="text-ink/60 max-w-xl mb-14">
            A pairing of recent portraits and film projects — the full body
            of work lives on the Portraits and Films pages.
          </p>
        </Reveal>

        {/* Portraits */}
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <h3 className="font-display italic text-2xl sm:text-3xl">Portraits</h3>
            <Link
              to="/portraits"
              data-cursor-hover
              className="text-sm uppercase tracking-[0.2em] text-green hover:text-greenDeep transition-colors"
            >
              All Portraits &rarr;
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredPortraits.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <Link to="/portraits" data-cursor-hover className="group block relative overflow-hidden rounded-sm shadow-lg">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-canvas">
                  <h4 className="font-display italic text-2xl">{p.title}</h4>
                  <p className="text-xs mt-1 text-canvas/70 uppercase tracking-widest">
                    {p.medium} &middot; {p.year}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Films */}
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8 mt-20">
            <h3 className="font-display italic text-2xl sm:text-3xl">Films</h3>
            <Link
              to="/films"
              data-cursor-hover
              className="text-sm uppercase tracking-[0.2em] text-green hover:text-greenDeep transition-colors"
            >
              All Films &rarr;
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {featuredFilms.map((f, i) => (
            <VideoCard key={f.id} film={f} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <BrushDivider color="green" />

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto px-5 sm:px-10 py-20 sm:py-28 text-center scroll-mt-24">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-green mb-3">Get in Touch</p>
          <h2 className="font-display italic text-4xl sm:text-5xl mb-6">Let's Talk</h2>
          <p className="text-ink/70 max-w-lg mx-auto leading-relaxed mb-10">
            Whether it's a commissioned portrait or a film project — reach
            out through any of the channels below. This is placeholder copy;
            edit it to match your own tone.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                data-cursor-hover
                className="flex items-center gap-3 px-5 py-2.5 border border-ink/20 rounded-full text-ink/75 hover:border-green hover:text-green transition-colors"
              >
                <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[10px]">
                  {s.label[0]}
                </span>
                <span className="text-sm uppercase tracking-[0.15em]">{s.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  )
}
