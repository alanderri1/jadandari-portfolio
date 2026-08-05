// Fixed, pointer-events-none film-grain texture layered above the whole app
// for an analog gallery-print feel. Styles live in index.css (.grain-overlay).
export default function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />
}
