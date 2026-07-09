import './Skills.css'

const skills = [
  {
    name: 'Figma',
    description: 'Component libraries, auto layout, design systems, interactive prototypes.',
    icon: (
      <svg viewBox="0 0 38 57" fill="none" aria-hidden="true">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0Z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19Z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: 'React',
    description: 'Component architecture, hooks, context, performance optimization, testing.',
    icon: (
      <svg viewBox="-11.5 -10.23 23 20.46" fill="none" aria-hidden="true">
        <circle r="2.05" fill="#61dafb" />
        <ellipse rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1" />
        <ellipse rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1" transform="rotate(120)" />
      </svg>
    ),
  },
  {
    name: 'UI/UX Design',
    description: 'User research, journey mapping, wireframing, usability testing, accessibility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="var(--color-accent)" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill="var(--color-accent)" opacity="0.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill="var(--color-accent)" opacity="0.5" />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          fill="var(--color-accent)"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    name: 'Motion Design',
    description: 'Micro-interactions, page transitions, Lottie animations, After Effects.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="var(--color-accent)" strokeWidth="1.5" />
        <path
          d="M12 3C12 3 16 7 16 12C16 17 12 21 12 21"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M3 12H21" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M12 3C12 3 8 7 8 12C8 17 12 21 12 21"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    name: 'Typography',
    description: 'Type system design, custom typefaces, variable fonts, legibility at scale.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 6h16M4 12h10M4 18h7"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Branding',
    description: 'Visual identity, logo design, brand guidelines, positioning, tone of voice.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2L14.4 9.6H22.4L16 14.4L18.4 22L12 17.2L5.6 22L8 14.4L1.6 9.6H9.6L12 2Z"
          fill="var(--color-accent)"
          opacity="0.8"
        />
      </svg>
    ),
  },
  {
    name: 'CSS / Sass',
    description: 'CSS architecture, design tokens, animations, responsive layout, Sass modules.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          fill="#CC6699"
          opacity="0.9"
        />
        <path
          d="M17.6 13.6c-.4.2-.8.3-1.2.4-.1-.4-.3-.7-.6-1 .8-.6 1.4-1.4 1.4-2.4 0-1.8-1.5-2.6-3-2.6H8.8l-.4 1.8h3.2l-.2 1H8l-.4 1.8h3.2l-.6 2.8H8l-.4 1.8h4.6c1.6 0 3.4-.6 3.4-2.6z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: 'Webflow',
    description: 'No-code development, CMS collections, interactions, SEO-optimised builds.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M17.8 6H6.2L2 12l4.2 6h11.6L22 12l-4.2-6z"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M8 12c1.5-2 3-3 4-3s2 1 2 2c0 1-1 2-2 2H9l4 4"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <header className="skills__header">
          <p className="section-label">Toolkit</p>
          <h2 className="section-heading">Skills & tools</h2>
        </header>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card__icon">{skill.icon}</div>
              <div className="skill-card__content">
                <h3 className="skill-card__name">{skill.name}</h3>
                <p className="skill-card__description">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
