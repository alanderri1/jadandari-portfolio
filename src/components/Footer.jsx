import Wordmark from './Wordmark'
import BrushDivider from './BrushDivider'

export default function Footer() {
  return (
    <footer className="relative bg-canvasDeep text-ink/80 pt-10 pb-10 px-5 sm:px-10">
      <BrushDivider color="green" className="mb-10 opacity-60" />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
        <div>
          <Wordmark size="sm" />
          <p className="mt-3 text-sm max-w-xs text-ink/50">
            Portraits in oil, and short films. Commissions and collaborations
            considered year-round.
          </p>
        </div>
        <div className="flex gap-6 text-xs tracking-[0.2em] uppercase text-ink/60">
          <a href="#" data-cursor-hover className="hover:text-green transition-colors">Instagram</a>
          <a href="#" data-cursor-hover className="hover:text-green transition-colors">Pinterest</a>
          <a href="mailto:studio@jadandari.art" data-cursor-hover className="hover:text-green transition-colors">Email</a>
        </div>
      </div>
      <p className="max-w-6xl mx-auto mt-8 text-[11px] text-ink/40 tracking-wide">
        © {new Date().getFullYear()} Jad Andari Studio. Template portfolio — replace with your own copyright line.
      </p>
    </footer>
  )
}
