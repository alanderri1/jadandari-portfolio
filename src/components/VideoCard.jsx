import Reveal from './Reveal'

// Playable YouTube embed card — same visual language as PortraitCard
// (transparent panel, no frame) but holding a live iframe instead of a
// static image, so films are watchable in place.
//
// A handful of uploads have embedding disabled by the uploader in YouTube
// Studio (Video details → Show more → Distribution → "Allow embedding").
// That's an account-level setting, not something fixable from this code —
// set `embeddable: false` on those entries in films.js and this renders a
// clean thumbnail card that opens the video on YouTube instead of showing
// YouTube's own broken-looking "video unavailable" iframe. Once the
// uploader flips that setting on, just drop the flag and it'll embed and
// play inline like everything else.
export default function VideoCard({ film, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-sm overflow-hidden bg-transparent shadow-[0_8px_30px_rgba(20,18,16,0.2)]">
        <div className="aspect-video w-full bg-canvas">
          {film.embeddable === false ? (
            <a
              href={`https://www.youtube.com/watch?v=${film.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="group relative block w-full h-full overflow-hidden"
            >
              <img
                src={`https://i.ytimg.com/vi/${film.youtubeId}/hqdefault.jpg`}
                alt={film.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-canvas/40 group-hover:bg-canvas/55 transition-colors flex flex-col items-center justify-center gap-3 text-ink">
                <span className="w-14 h-14 rounded-full bg-ink/90 text-canvas flex items-center justify-center text-xl">
                  &#9654;
                </span>
                <span className="text-xs tracking-[0.2em]">watch on youtube</span>
              </div>
            </a>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}`}
              title={film.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-sm text-ink/60">
            {film.role} &middot; {film.year}
          </p>
          {film.description && (
            <p className="mt-3 text-sm text-ink/70 leading-relaxed">{film.description}</p>
          )}
        </div>
      </div>
    </Reveal>
  )
}
