// ---------------------------------------------------------------------------
// PAINTING DATA — this is the single source of truth for the Paintings page.
// Sourced directly from src/assets/paintings/Pantings Description.xlsx —
// title and description are copied verbatim from the sheet.
//
// HOW TO EXTEND:
//   1. image — import a new file from src/assets/paintings/ and add an
//      entry below, same as the entries here. Order in this list does not
//      matter — the exported list is always sorted by image file number.
//   2. title, description — plain strings, edit freely. Update the
//      spreadsheet too if you want it to stay the source of truth.
//
// NOTE: The spreadsheet still lists paintings 8-10, but their image files
// are missing from src/assets/paintings/, so those entries are omitted here.
// ---------------------------------------------------------------------------

import img1 from '../assets/paintings/1.jpg'
import img2 from '../assets/paintings/2.jpg'
import img3 from '../assets/paintings/3.jpg'
import img4 from '../assets/paintings/4.jpg'
import img5 from '../assets/paintings/5.jpg'
import img6 from '../assets/paintings/6.jpg'
import img7 from '../assets/paintings/7.jpg'

const paintingsData = [
  { id: 'painting-01', number: 1, title: 'untitled', image: img1, description: 'oil on canvas, 90 x 90 cm' },
  { id: 'painting-02', number: 2, title: 'untitled', image: img2, description: 'oil on wood, 123 x 58 cm' },
  { id: 'painting-03', number: 3, title: 'untitled', image: img3, description: 'oil on canvas, 45 x 45 cm' },
  { id: 'painting-04', number: 4, title: 'untitled', image: img4, description: 'oil on canvas, 45 x 45 cm' },
  { id: 'painting-05', number: 5, title: 'untitled', image: img5, description: 'oil on canvas, 120 x 60 cm' },
  { id: 'painting-06', number: 6, title: 'stove', image: img6, description: 'oil on canvas, 70 x 90 cm' },
  { id: 'painting-07', number: 7, title: 'untitled', image: img7, description: 'oil on paper, 42 x 30 cm' },
]

// Ordered by image file number, not title, so the gallery order matches the
// numbering in src/assets/paintings/.
export const paintings = [...paintingsData].sort((a, b) => a.number - b.number)

export default paintings
