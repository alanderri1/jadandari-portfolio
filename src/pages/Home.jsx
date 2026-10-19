import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// import SocialLinks from '../components/SocialLinks'
import mainPhoto from '../assets/Images/Main.jpeg'

const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=jad.andari@nyu.edu'

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-5 sm:px-10 py-20">
      {/* Photo on the left, everything else stacked beside it */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10">
        <motion.img
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src={mainPhoto}
          alt="Jad Andari"
          className="w-44 sm:w-56 h-auto rounded-sm shadow-[0_15px_40px_rgba(20,18,16,0.25)] shrink-0"
        />

        <div className="flex-1 flex flex-col items-center sm:items-start gap-8 sm:gap-9">
          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-center sm:text-left text-ink/85 text-base sm:text-lg leading-relaxed"
          >
            Andari is a filmmaker and painter. He was born in Mount Lebanon and
            raised in California. His work explores the relationship between
            art and non dual philosophy (and the science of consciousness). He
            is an alumnus of the University of California, Los Angeles and New
            York University.
          </motion.p>

          {/* Primary nav */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center sm:items-start gap-3"
          >
            <span className="text-sm tracking-[0.15em] text-ink/60">
              selected works:
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
              <Link
                to="/paintings"
                data-cursor-hover
                className="px-10 py-3.5 rounded-full bg-ink text-canvas text-sm tracking-[0.15em] hover:bg-accent transition-colors"
              >
                paintings
              </Link>
              <Link
                to="/films"
                data-cursor-hover
                className="px-10 py-3.5 rounded-full bg-ink text-canvas text-sm tracking-[0.15em] hover:bg-accent transition-colors"
              >
                films
              </Link>
            </div>
          </motion.div>

          {/* Socials — hidden for now (Etsy shop link commented out) */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SocialLinks />
          </motion.div>
          */}

          {/* Email */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="text-sm text-ink/60 hover:text-accent transition-colors"
          >
            jad.andari@nyu.edu
          </motion.a>
        </div>
      </div>
    </div>
  )
}
