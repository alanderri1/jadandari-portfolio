// ---------------------------------------------------------------------------
// FILM DATA — single source of truth for the Films page.
//
// This mirrors every public upload on the channel at youtube.com/@jadandari
// (verified via yt-dlp).
//
// Display order: Stove, Tadur, and Middle State trailers lead as the first
// row (left to right); each project's full-length cut follows directly
// beneath its trailer in the second row, in the same left-to-right order.
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
      'an intimate exploration of life in bzebdine, a small rural village in mount lebanon — a visual poem journeying through rural mount lebanon and the people who live there.',
  },
  {
    id: 'tadur-trailer',
    title: 'tadur تدور (trailer)',
    year: '2024',
    role: 'writer, director, producer',
    youtubeId: 'Jqt7PKs7he8',
    description:
      'a pastoral escapade depicting an imaginary world deep in mount lebanon, where criminals, impoverished farmers, and monastic sages are immersed in both beauty and brutality. the arabic word "tadur" means to spin, orbit, turn, revolve, or circle.',
  },
  {
    id: 'middle-state-trailer',
    title: 'middle state البَيْن (trailer)',
    year: '2025',
    role: 'writer, director',
    youtubeId: 'nmNamS3CEpU',
    description:
      'a trip through china during the spring festival season, filmed shortly after returning to lebanon during the 2024 war. the voiceovers and music are composed entirely of whatsapp messages from friends and family.',
  },
  {
    id: 'stove-full',
    title: 'stove وجاق (full film, english subtitles)',
    year: '2019',
    role: 'director, producer',
    youtubeId: 'aprBN84Lh1k',
    description:
      'the full-length documentary: a lebanese expatriate returns to bzebdine to rediscover images from his childhood, journeying through the spirit of rural mount lebanon and the people who live there.',
  },
  {
    id: 'tadur-full',
    title: 'tadur تدور (full film, english subtitles)',
    year: '2024',
    role: 'writer, director, producer',
    youtubeId: 'WhCHsNgF_bA',
    description:
      'the full-length cut of tadur, immersed in the beauty and brutality of an imagined mount lebanon where criminals, farmers, and monastic sages share the same ground.',
  },
  {
    id: 'middle-state-full',
    title: 'middle state البَيْن (full film, english subtitles)',
    year: '2025',
    role: 'writer, director',
    youtubeId: 'IMwylRW5bGk',
    description:
      'the full-length version of middle state, journeying through china in the weeks after a ceasefire — a visual essay built from borrowed voices and unfamiliar scenery.',
  },
]

export default films
