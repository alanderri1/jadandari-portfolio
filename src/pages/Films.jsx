import Reveal from '../components/Reveal'
import BrushDivider from '../components/BrushDivider'
import VideoCard from '../components/VideoCard'
import { films } from '../data/films'

export default function Films() {
  return (
    <div className="pt-32 pb-24 px-5 sm:px-10 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-green mb-3">Direction &amp; Film</p>
        <h1 className="font-display italic text-5xl sm:text-6xl mb-4">Films</h1>
        <p className="text-ink/60 max-w-xl mb-10">
          Short films and documentary work, embedded here straight from the{' '}
          <a
            href="https://www.youtube.com/@jadandari"
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="underline decoration-green underline-offset-4 hover:text-green transition-colors"
          >
            YouTube channel
          </a>
          .
        </p>
      </Reveal>

      <BrushDivider color="green" className="mb-12 opacity-70" />

      <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
        {films.map((film, i) => (
          <VideoCard key={film.id} film={film} delay={i * 0.1} />
        ))}
      </div>
    </div>
  )
}
