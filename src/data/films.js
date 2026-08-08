// ---------------------------------------------------------------------------
// FILM DATA — single source of truth for the Films page.
//
// This mirrors every public upload on the channel at youtube.com/@jadandari
// (verified via yt-dlp).
//
// Display order: Stove, Tadur, and Middle State trailers, left to right.
// Full-length cuts are intentionally omitted — trailers only.
//
// HOW TO REPLACE / EXTEND:
//   1. youtubeId — the 11-character id from the video's YouTube URL
//      (https://www.youtube.com/watch?v=THIS_PART). Videos are embedded
//      directly via youtube-nocookie.com so they're playable in place,
//      exactly like on YouTube.
//   2. title, year, role, description — plain strings, edit freely. Site
//      copy is all-lowercase by design; keep new entries lowercase too
//      (Arabic text is unaffected either way).
//   3. embeddable — omit (defaults to true) for normal inline playback.
//      Set to false only if YouTube's own iframe shows "video unavailable —
//      playback on other websites has been disabled by the video owner".
//      This is controlled per-video in YouTube Studio, NOT here: open the
//      video → Details → Show more → Distribution → toggle "Allow
//      embedding" on, then remove `embeddable: false` below and it'll play
//      inline like the rest.
// ---------------------------------------------------------------------------

export const films = [
  {
    id: 'stove-trailer',
    title: 'stove وجاق (trailer)',
    year: '2019',
    role: 'director, producer',
    youtubeId: 'KEzb26KiCyk',
    description:
      'An intimate exploration of life in Bzebdine, a small rural village in Mount Lebanon.',
  },
  {
    id: 'tadur-trailer',
    title: 'tadur تدور (trailer)',
    year: '2024',
    role: 'writer, director, producer',
    youtubeId: 'Jqt7PKs7he8',
    description:
      'Tadur is a pastoral escapade. It depicts an imaginary world deep in Mount Lebanon, where criminals, impoverished farmers, and monastic sages are immersed in both beauty and brutality. The Arabic word "tadur" encapsulates the essence of this world, meaning to spin, orbit, turn, revolve, rotate, cycle, or circle.',
  },
  {
    id: 'middle-state-trailer',
    title: 'middle state البَيْن (trailer)',
    year: '2025',
    role: 'writer, director',
    youtubeId: 'nmNamS3CEpU',
    description:
      'This film follows my trip through China during the Spring Festival season. The voice overs and music are entirely composed of Whatsapp messages from friends and family. For context: I moved back to Lebanon (from California) to be with my parents during the 2024 war. As soon as a ceasefire was declared, I flew to China for a month to take in new scenery. While I was captivated by the beauty and rhythm of life there, I still found myself deeply missing both Lebanon and California.',
  },
]

export default films
