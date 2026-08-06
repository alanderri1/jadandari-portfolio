// ---------------------------------------------------------------------------
// FILM DATA — single source of truth for the Films page and the "Films"
// section on the Home page.
//
// This list mirrors every public upload on the channel at
// youtube.com/@jadandari (verified via yt-dlp).
//
// HOW TO REPLACE / EXTEND:
//   1. youtubeId — the 11-character id from the video's YouTube URL
//      (https://www.youtube.com/watch?v=THIS_PART). Videos are embedded
//      directly via youtube-nocookie.com so they're playable in place,
//      exactly like on YouTube.
//   2. title, year, role, description — plain strings, edit freely.
//   3. featured — set true to have a video appear in the Home page
//      "Films" section. Keep this to 2 items for that section's
//      two-column layout.
//   4. embeddable — omit (defaults to true) for normal inline playback.
//      Set to false only if YouTube's own iframe shows "video unavailable —
//      playback on other websites has been disabled by the video owner"
//      (a per-video setting controlled by the uploader, not fixable from
//      here). VideoCard then renders a thumbnail card that opens the video
//      on YouTube in a new tab instead of a broken embed. The full-length
//      "Stove وجاق (HD with English subtitles)" cut below is the one
//      example of this on the channel today.
//   5. To add a new upload from the channel, copy an entry below and swap
//      in the new video's id/title/etc. Channel: youtube.com/@jadandari
// ---------------------------------------------------------------------------

export const films = [
  {
    id: 'middle-state-trailer',
    title: 'Middle State البَيْن (Trailer)',
    year: '2025',
    role: 'Writer, Director',
    youtubeId: 'nmNamS3CEpU',
    featured: false,
    description:
      'A trip through China during the Spring Festival season, filmed shortly after returning to Lebanon during the 2024 war. The voiceovers and music are composed entirely of WhatsApp messages from friends and family.',
  },
  {
    id: 'middle-state-full',
    title: 'Middle State البَيْن (Full Film, English Subtitles)',
    year: '2025',
    role: 'Writer, Director',
    youtubeId: 'IMwylRW5bGk',
    featured: false,
    description:
      'The full-length version of Middle State, journeying through China in the weeks after a ceasefire — a visual essay built from borrowed voices and unfamiliar scenery.',
  },
  {
    id: 'tadur-trailer',
    title: 'Tadur تدور (Trailer)',
    year: '2024',
    role: 'Writer, Director, Producer',
    youtubeId: 'Jqt7PKs7he8',
    featured: true,
    description:
      'A pastoral escapade depicting an imaginary world deep in Mount Lebanon, where criminals, impoverished farmers, and monastic sages are immersed in both beauty and brutality. The Arabic word "tadur" means to spin, orbit, turn, revolve, or circle.',
  },
  {
    id: 'tadur-full',
    title: 'Tadur تدور (Full Film, English Subtitles)',
    year: '2024',
    role: 'Writer, Director, Producer',
    youtubeId: 'WhCHsNgF_bA',
    featured: false,
    description:
      'The full-length cut of Tadur, immersed in the beauty and brutality of an imagined Mount Lebanon where criminals, farmers, and monastic sages share the same ground.',
  },
  {
    id: 'stove-trailer',
    title: 'Stove وجاق (Trailer)',
    year: '2019',
    role: 'Director, Producer',
    youtubeId: 'KEzb26KiCyk',
    featured: true,
    description:
      'An intimate exploration of life in Bzebdine, a small rural village in Mount Lebanon — a visual poem journeying through rural Mount Lebanon and the people who live there.',
  },
  {
    id: 'stove-full',
    title: 'Stove وجاق (Full Film, English Subtitles)',
    year: '2019',
    role: 'Director, Producer',
    youtubeId: 'aprBN84Lh1k',
    featured: false,
    embeddable: false,
    description:
      'The full-length documentary: a Lebanese expatriate returns to Bzebdine to rediscover images from his childhood, journeying through the spirit of rural Mount Lebanon and the people who live there.',
  },
]

export default films
