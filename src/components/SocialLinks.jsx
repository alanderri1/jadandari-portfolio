// Small, uniform row of icon-only external links. Each icon is a hand-drawn
// minimal glyph (no icon library) sized to sit inside the same circular
// button, stroke="currentColor" so it inherits the ink/accent color states.

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'w-[18px] h-[18px]',
}

const icons = {
  instagram: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg {...iconProps}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="M10 9.3l5.5 2.7-5.5 2.7V9.3z" fill="currentColor" stroke="none" />
    </svg>
  ),
  letterboxd: (
    <svg {...iconProps}>
      <circle cx="7.5" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="16.5" cy="12" r="4.5" />
    </svg>
  ),
  filmfreeway: (
    <svg {...iconProps}>
      <rect x="3" y="10" width="18" height="9.5" rx="1" />
      <path d="M3.5 10l2-5h3.5l-2 5h-3.5z" />
      <path d="M9.5 10l2-5H15l-2 5H9.5z" />
      <path d="M15.5 10l2-5H20l-1.5 5h-3z" />
    </svg>
  ),
  press: (
    <svg {...iconProps}>
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <line x1="7.2" y1="9" x2="16.8" y2="9" />
      <line x1="7.2" y1="12" x2="16.8" y2="12" />
      <line x1="7.2" y1="15" x2="13" y2="15" />
    </svg>
  ),
  store: (
    <svg {...iconProps}>
      <path d="M6.5 8l1-4.2h9l1 4.2" />
      <rect x="4" y="8" width="16" height="11.5" rx="1.8" />
      <path d="M9 11.2a3 3 0 006 0" />
    </svg>
  ),
}

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/jad_al3ndari', icon: icons.instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@jadandari', icon: icons.youtube },
  { label: 'Letterboxd', href: 'https://letterboxd.com/director/jad-andari/', icon: icons.letterboxd },
  { label: 'IMDb', href: 'https://www.imdb.com/name/nm9230848/', text: 'IMDb' },
  { label: 'FilmFreeway', href: 'https://filmfreeway.com/JadAndari', icon: icons.filmfreeway },
  {
    label: "L'Orient-Le Jour",
    href: 'https://today.lorientlejour.com/article/1295988/making-movies-in-lebanons-season-of-crises.html',
    icon: icons.press,
  },
  { label: 'Shop (Etsy)', href: 'https://ajadpaintingprint.etsy.com', icon: icons.store },
]

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
          data-cursor-hover
          className="w-9 h-9 rounded-full border border-ink/20 text-ink/70 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
        >
          {s.icon || <span className="text-[9px] font-bold tracking-tight">{s.text}</span>}
        </a>
      ))}
    </div>
  )
}
