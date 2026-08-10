// ---------------------------------------------------------------------------
// PAINTING DATA — this is the single source of truth for the Paintings page.
// Sourced directly from src/assets/paintings/Pantings Description.xlsx —
// title and description are copied verbatim from the sheet.
//
// HOW TO EXTEND:
//   1. image — import a new file from src/assets/paintings/ and reference
//      it below, same as the entries here.
//   2. title, description — plain strings, edit freely. Update the
//      spreadsheet too if you want it to stay the source of truth.
// ---------------------------------------------------------------------------

import img1 from '../assets/paintings/1.jpg'
import img2 from '../assets/paintings/2.jpg'
import img3 from '../assets/paintings/3.jpg'
import img4 from '../assets/paintings/4.jpg'
import img5 from '../assets/paintings/5.jpg'
import img6 from '../assets/paintings/6.jpg'
import img7 from '../assets/paintings/7.jpg'
import img8 from '../assets/paintings/8.jpg'
import img9 from '../assets/paintings/9.jpg'
import img10 from '../assets/paintings/10.jpg'

// Display order: 8 (stove), 10 (tadur), 6 (middle state) lead the page —
// matching the Films page order — then the rest continue in their original
// numbering. Grid fills left-to-right, top-to-bottom.
export const paintings = [
  { id: 'painting-08', title: 'stove', image: img8, description: 'oil on canvas, 70 x 90 cm' },
  { id: 'painting-10', title: 'tadur', image: img10, description: 'oil on canvas, 100 x 50 cm' },
  { id: 'painting-06', title: 'middle state', image: img6, description: 'oil on canvas, 100 x 70 cm' },
  { id: 'painting-01', title: 'untitled', image: img1, description: 'oil on canvas, 90 x 90 cm' },
  { id: 'painting-02', title: 'untitled', image: img2, description: 'oil on canvas, 120 x 60 cm' },
  { id: 'painting-03', title: 'untitled', image: img3, description: 'oil on canvas, 45 x 45 cm' },
  { id: 'painting-04', title: 'untitled', image: img4, description: 'oil on canvas, 45 x 45 cm' },
  { id: 'painting-05', title: 'untitled', image: img5, description: 'oil on canvas, 69 x 51 cm' },
  { id: 'painting-07', title: 'untitled', image: img7, description: 'oil on paper, 42 x 30 cm' },
  { id: 'painting-09', title: 'untitled', image: img9, description: 'oil on wood, 123 x 58 cm' },
]

export default paintings
