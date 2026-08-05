import Wordmark from './Wordmark'
import BrushDivider from './BrushDivider'

export default function Footer() {
  return (
    <footer className="relative bg-ink text-canvas/80 pt-10 pb-10 px-5 sm:px-10">
      <BrushDivider color="ochre" className="mb-10 opacity-60" />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
        <div>
          <Wordmark size="sm" light />
          <p className="mt-3 text-sm max-w-xs text-canvas/50">
            Original portraits in oil. Commissions considered year-round from
            a small studio practice.
          </p>
        </div>
        <div className="flex gap-6 text-xs tracking-[0.2em] uppercase text-canvas/60">
          <a href="#" data-cursor-hover className="hover:text-ochre transition-colors">Instagram</a>
          <a href="#" data-cursor-hover className="hover:text-ochre transition-colors">Pinterest</a>
          <a href="mailto:studio@jadandari.art" data-cursor-hover className="hover:text-ochre transition-colors">Email</a>
        </div>
      </div>
      <p className="max-w-6xl mx-auto mt-8 text-[11px] text-canvas/30 tracking-wide">
        © {new Date().getFullYear()} Jad Andari Studio. Template portfolio — replace with your own copyright line.
      </p>
    </footer>
  )
}
