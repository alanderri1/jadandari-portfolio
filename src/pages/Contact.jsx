import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import BrushDivider from '../components/BrushDivider'

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Email', href: 'mailto:studio@jadandari.art' },
]

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'That email address doesn’t look right.'
  }
  if (!values.message.trim()) {
    errors.message = 'Tell me a little about the piece you have in mind.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'A few more details would help — at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    if (Object.keys(validation).length === 0) {
      // NOTE: no backend wiring — this is a visual-only success state.
      // Replace this block with a real submit (fetch/EmailJS/Formspree/etc).
      setSubmitted(true)
    }
  }

  const resetForm = () => {
    setValues({ name: '', email: '', message: '' })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <div className="pt-32 pb-24 px-5 sm:px-10 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-crimson mb-3">Get in Touch</p>
        <h1 className="font-display italic text-5xl sm:text-6xl mb-6">Contact</h1>
      </Reveal>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 mt-10">
        <Reveal delay={0.05}>
          <p className="text-ink/70 text-lg leading-relaxed max-w-sm">
            Whether you're commissioning a portrait, inquiring about an
            existing piece, or just want to talk painting — reach out. This
            is placeholder copy; edit it to match your own tone.
          </p>

          <BrushDivider color="ochre" className="my-8 max-w-[160px] opacity-70" />

          <div className="space-y-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                data-cursor-hover
                className="flex items-center gap-3 text-ink/70 hover:text-crimson transition-colors group w-fit"
              >
                <span className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center text-xs group-hover:border-crimson transition-colors">
                  {s.label[0]}
                </span>
                <span className="text-sm uppercase tracking-[0.15em]">{s.label}</span>
              </a>
            ))}
          </div>

          <p className="mt-10 text-sm text-ink/40 max-w-xs">
            Studio based in — replace with city/region. Commissioned pieces
            typically ship insured, worldwide.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative bg-canvasDeep rounded-sm p-6 sm:p-10 shadow-[0_15px_45px_rgba(27,20,15,0.12)]">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-16 px-4"
                >
                  <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-6">
                    <circle cx="40" cy="40" r="38" fill="none" stroke="#1f5c4a" strokeWidth="3" />
                    <motion.path
                      d="M22 41 L34 53 L58 27"
                      fill="none"
                      stroke="#1f5c4a"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                    />
                  </svg>
                  <h2 className="font-display italic text-3xl mb-3">Message sent</h2>
                  <p className="text-ink/60 max-w-xs mx-auto mb-8">
                    Thank you — this is a template success state. In a live
                    site this would be replaced by a real form submission.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    data-cursor-hover
                    className="text-sm uppercase tracking-[0.15em] text-crimson hover:text-crimsonDeep transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-ink/50 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b-2 py-2 focus:outline-none transition-colors ${
                        errors.name ? 'border-crimson' : 'border-ink/25 focus:border-ink'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-crimson">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-ink/50 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b-2 py-2 focus:outline-none transition-colors ${
                        errors.email ? 'border-crimson' : 'border-ink/25 focus:border-ink'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-crimson">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-ink/50 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      className={`w-full bg-transparent border-b-2 py-2 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-crimson' : 'border-ink/25 focus:border-ink'
                      }`}
                      placeholder="Tell me about the piece you have in mind..."
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-crimson">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    data-cursor-hover
                    className="w-full sm:w-auto px-9 py-3 bg-ink text-canvas text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-crimson transition-colors"
                  >
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
