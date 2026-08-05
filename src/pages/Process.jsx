import Reveal from '../components/Reveal'
import BrushDivider from '../components/BrushDivider'
import { Link } from 'react-router-dom'

// TEMPLATE CONTENT — replace the narrative and step copy with a description
// of the real artist's actual commission workflow, pricing, and timeline.
const steps = [
  {
    n: '01',
    title: 'Conversation & Reference',
    color: 'crimson',
    text: 'We start with a call or studio visit to talk through the sitter, the occasion, and the feeling the piece should carry. From there, reference photographs are taken or gathered — lighting is chosen deliberately here, since it shapes everything downstream.',
  },
  {
    n: '02',
    title: 'Composition Study',
    color: 'ochre',
    text: 'A small charcoal or graphite study establishes pose, crop, and value structure before any paint is mixed. This is the stage where the client sees and approves the composition, so changes are cheap.',
  },
  {
    n: '03',
    title: 'Underpainting & Blocking',
    color: 'emerald',
    text: 'A loose monochrome underpainting sets the tonal foundation on canvas or linen. Broad color relationships are blocked in next, working from the background forward so the sitter emerges gradually rather than all at once.',
  },
  {
    n: '04',
    title: 'Glazing & Final Details',
    color: 'royal',
    text: 'Multiple thin glazes build depth in skin and fabric over several sittings, with drying time between layers. The final session is reserved for the smallest, most decisive marks — the corner of an eye, a highlight on a collar.',
  },
]

export default function Process() {
  return (
    <div className="pt-32 pb-24 px-5 sm:px-10 max-w-5xl mx-auto">
      <Reveal>
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-crimson mb-3">How a Commission Comes Together</p>
        <h1 className="font-display italic text-5xl sm:text-6xl mb-8">The Process</h1>
        <p className="text-ink/70 text-lg max-w-2xl leading-relaxed mb-16">
          Every commissioned portrait follows roughly the same arc, though
          timelines flex with size and complexity. A typical 24×30in oil
          portrait takes six to ten weeks from first conversation to varnished,
          delivered canvas — replace this paragraph with your own timeline and
          pricing notes.
        </p>
      </Reveal>

      <div className="relative">
        <div
          className="hidden sm:block absolute left-[27px] top-4 bottom-4 w-px bg-ink/15"
          aria-hidden="true"
        />
        <div className="space-y-14">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="flex gap-6 sm:gap-8 items-start">
                <div
                  className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display italic text-lg border-2 bg-canvas relative z-10`}
                  style={{ borderColor: 'currentColor' }}
                >
                  <span
                    className={
                      step.color === 'crimson'
                        ? 'text-crimson'
                        : step.color === 'ochre'
                        ? 'text-ochre'
                        : step.color === 'emerald'
                        ? 'text-emerald'
                        : 'text-royal'
                    }
                  >
                    {step.n}
                  </span>
                </div>
                <div className="pt-2">
                  <h2 className="font-display italic text-2xl sm:text-3xl mb-2">{step.title}</h2>
                  <p className="text-ink/65 leading-relaxed max-w-2xl">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <BrushDivider color="crimson" className="my-16 opacity-60" />

      <Reveal>
        <div className="bg-canvasDeep rounded-sm p-8 sm:p-12 text-center">
          <h2 className="font-display italic text-3xl sm:text-4xl mb-4">Ready to begin?</h2>
          <p className="text-ink/60 max-w-lg mx-auto mb-8">
            Commissions are accepted on a rolling basis. Reach out with a few
            details about the piece you have in mind.
          </p>
          <Link
            to="/contact"
            data-cursor-hover
            className="inline-block px-8 py-3 bg-ink text-canvas text-sm uppercase tracking-[0.15em] rounded-sm hover:bg-crimson transition-colors"
          >
            Start a Commission
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
