// ---------------------------------------------------------------------------
// PORTRAIT DATA — this is the single source of truth for the Gallery page.
//
// HOW TO REPLACE WITH YOUR OWN WORK:
//   1. image  — swap the picsum.photos URL for your own artwork file.
//               Drop real images in /src/assets/portraits/ and import them,
//               e.g. `import blueWoman from "../assets/portraits/blue-woman.jpg"`
//               then set `image: blueWoman` below. Keep photos reasonably
//               sized (under ~2000px on the long edge) for fast loading.
//   2. title, medium, dimensions, year — edit freely, plain strings.
//   3. category — must be one of "Commissioned", "Personal Work", or
//                 "Studies" for the Gallery filter buttons to pick it up.
//                 Add a new category string here AND to the `categories`
//                 array below if you want an additional filter tab.
//   4. description — 2-3 sentences of artist's-statement-style text shown
//                     in the lightbox when a piece is opened.
//   5. featured — set true on any pieces you want pulled onto the Home page.
// ---------------------------------------------------------------------------

export const categories = ['All', 'Commissioned', 'Personal Work', 'Studies']

export const portraits = [
  {
    id: 'portrait-woman-in-blue',
    title: 'Portrait of a Woman in Blue',
    medium: 'Oil on canvas',
    dimensions: '24 × 30 in',
    year: '2023',
    category: 'Commissioned',
    featured: true,
    image: 'https://picsum.photos/seed/jadandari-01/900/1200',
    description:
      "Commissioned as an anniversary gift, this piece leans into cool ultramarine shadow to let the sitter's gaze carry the warmth. The blue is built in six thin glazes, allowing the canvas weave to breathe through the final layer.",
  },
  {
    id: 'the-weight-of-quiet',
    title: 'The Weight of Quiet',
    medium: 'Oil on linen',
    dimensions: '20 × 24 in',
    year: '2022',
    category: 'Personal Work',
    featured: true,
    image: 'https://picsum.photos/seed/jadandari-02/1000/800',
    description:
      'A study in stillness, painted over three sittings with a single north-facing light source. The palette knife work in the background is deliberately unresolved, a counterweight to the tightly rendered face.',
  },
  {
    id: 'study-of-hands-no-3',
    title: 'Study of Hands, No. 3',
    medium: 'Charcoal and oil on paper',
    dimensions: '11 × 14 in',
    year: '2024',
    category: 'Studies',
    featured: false,
    image: 'https://picsum.photos/seed/jadandari-03/800/1000',
    description:
      'Part of an ongoing series of preparatory hand studies. This one explores the tension of clasped fingers, a recurring motif the artist returns to before beginning any full commissioned portrait.',
  },
  {
    id: 'elder-in-amber-light',
    title: 'Elder in Amber Light',
    medium: 'Oil on canvas',
    dimensions: '30 × 36 in',
    year: '2021',
    category: 'Commissioned',
    featured: true,
    image: 'https://picsum.photos/seed/jadandari-04/1000/1300',
    description:
      "Painted for a family archive, the sitter's decades of expression are compressed into the folds around the eyes. Warm ochre and burnt sienna dominate, a deliberate departure from the cooler palette of earlier work.",
  },
  {
    id: 'self-portrait-unfinished',
    title: "Self-Portrait, Unfinished",
    medium: 'Oil on canvas board',
    dimensions: '18 × 24 in',
    year: '2024',
    category: 'Personal Work',
    featured: false,
    image: 'https://picsum.photos/seed/jadandari-05/900/1100',
    description:
      "Left intentionally incomplete, the raw board shows through the lower third. A meditation on process itself — what a portrait looks like mid-thought, before the sitter's likeness fully arrives.",
  },
  {
    id: 'study-for-weight-of-quiet',
    title: "Study for 'The Weight of Quiet'",
    medium: 'Graphite on paper',
    dimensions: '9 × 12 in',
    year: '2022',
    category: 'Studies',
    featured: false,
    image: 'https://picsum.photos/seed/jadandari-06/800/650',
    description:
      'The compositional groundwork for the finished oil piece. Rough hatching establishes value structure long before color enters the process, a habit carried over from the artist’s early academic training.',
  },
  {
    id: 'portrait-of-a-young-dancer',
    title: 'Portrait of a Young Dancer',
    medium: 'Oil on canvas',
    dimensions: '22 × 28 in',
    year: '2023',
    category: 'Commissioned',
    featured: false,
    image: 'https://picsum.photos/seed/jadandari-07/950/1250',
    description:
      'Commissioned by a dance academy, this portrait captures a rehearsal-break stillness rather than a performance pose. Loose, energetic brushwork in the costume contrasts with careful modeling in the face.',
  },
  {
    id: 'vigil',
    title: 'Vigil',
    medium: 'Oil on canvas',
    dimensions: '26 × 34 in',
    year: '2020',
    category: 'Personal Work',
    featured: true,
    image: 'https://picsum.photos/seed/jadandari-08/1000/1200',
    description:
      'Painted during a period of prolonged stillness, this piece uses a near-monochrome palette broken only by a single vein of crimson at the collar. Among the most quietly personal works in the collection.',
  },
]

export default portraits
