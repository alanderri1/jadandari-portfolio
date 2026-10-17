import BackButton from '../components/BackButton'
import VideoCard from '../components/VideoCard'
import { films } from '../data/films'

export default function Films() {
  return (
    <div className="pt-28 pb-24 px-5 sm:px-10 max-w-7xl mx-auto">
      <BackButton />

      <h1 className="font-display text-4xl sm:text-5xl mb-10 sm:mb-12">films</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {films.map((film, i) => (
          <VideoCard key={film.id} film={film} delay={i * 0.1} />
        ))}
      </div>
    </div>
  )
}
