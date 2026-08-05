import Reveal from '../components/Reveal'
import BrushDivider from '../components/BrushDivider'

// TEMPLATE CONTENT — replace the bio copy, influences list, and portrait
// image below with the real artist's biography and a photo of them at work.
const influences = ['John Singer Sargent', 'Alice Neel', 'Kehinde Wiley', 'Jenny Saville']

export default function About() {
  return (
    <div className="pt-32 pb-24 px-5 sm:px-10 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-crimson mb-3">The Artist</p>
        <h1 className="font-display italic text-5xl sm:text-6xl mb-10">About Jad Andari</h1>
      </Reveal>

      <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-start">
        <Reveal delay={0.1}>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/jadandari-artist/700/850"
              alt="The artist in their studio"
              className="w-full h-[420px] sm:h-[520px] object-cover rounded-sm shadow-xl"
            />
            <span className="absolute -bottom-4 -right-4 bg-crimson text-canvas text-xs px-4 py-2 uppercase tracking-widest rounded-sm">
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
              replace it with your own story. Jad Andari is a figurative
              painter working primarily in oil, drawn to the quiet moments
              between a sitter's public face and their private one. Trained
              first in academic drawing, the practice has since loosened into
              something more intuitive, favoring visible brushwork and
              unresolved edges over photographic polish.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Early influences came from portrait painting's long tradition —
              the confident, economical brushwork of Sargent, the psychological
              directness of Alice Neel — but the current body of work is just
              as shaped by contemporary painters reworking who gets to be the
              subject of a formal portrait, and why.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p>
              Today the studio splits its time between personal work and
              commissioned portraits, usually no more than a handful running
              at once. Each commission begins with a conversation, not a
              questionnaire — replace this paragraph with a description of
              your own studio rhythm, location, and availability.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="pt-6">
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

      <BrushDivider color="plum" className="my-16 sm:my-20 opacity-60" />

      <Reveal>
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="font-script italic text-3xl sm:text-4xl text-ink/80 leading-snug">
            &ldquo;A portrait should hold a little bit of the sitting itself —
            the light that afternoon, the conversation, the fidgeting. That's
            what I'm after more than likeness.&rdquo;
          </p>
          <cite className="block mt-6 text-sm uppercase tracking-[0.2em] text-ink/40 not-italic">
            — Artist statement, template quote
          </cite>
        </blockquote>
      </Reveal>
    </div>
  )
}
