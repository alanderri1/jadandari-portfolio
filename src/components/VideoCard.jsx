import Reveal from './Reveal'

// Playable YouTube embed card — same visual language as PortraitCard
// (rounded-sm panel, canvasDeep background) but holding a live iframe
// instead of a static image, so films are watchable in place.
//
// A handful of uploads have embedding disabled by the uploader at the
// platform level (a per-video YouTube setting, not something fixable from
// here) — set `embeddable: false` on those entries in films.js and this
// renders a clean thumbnail card that opens the video on YouTube instead
// of showing YouTube's own broken-looking "video unavailable" iframe.
export default function VideoCard({ film, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-sm overflow-hidden bg-canvasDeep shadow-[0_8px_30px_rgba(20,18,16,0.2)]">
        <div className="aspect-video w-full bg-ink">
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
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/55 transition-colors flex flex-col items-center justify-center gap-3 text-canvas">
                <span className="w-14 h-14 rounded-full bg-canvas/90 text-ink flex items-center justify-center text-xl">
                  &#9654;
                </span>
                <span className="text-xs uppercase tracking-[0.2em]">Watch on YouTube</span>
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
          <h3 className="font-display italic text-xl sm:text-2xl text-ink leading-snug">{film.title}</h3>
          <p className="mt-1 text-sm text-ink/60">
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
