import './Work.css'

const projects = [
  {
    id: 1,
    name: 'Horizon Banking App',
    category: 'UI/UX Design',
    year: '2024',
    description:
      'A next-generation mobile banking experience focused on financial clarity and trust.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accent: '#667eea',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    id: 2,
    name: 'Flux Design System',
    category: 'Design Systems',
    year: '2024',
    description: 'A scalable, component-driven design system built for product teams moving fast.',
    gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
    accent: '#f97316',
    tags: ['Figma', 'React', 'Storybook'],
  },
  {
    id: 3,
    name: 'Mono Typeface',
    category: 'Typography',
    year: '2023',
    description:
      'An original monospaced typeface designed for developers who care about their tools.',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    accent: '#06b6d4',
    tags: ['Glyphs', 'Type Design', 'OpenType'],
  },
  {
    id: 4,
    name: 'Orbit Dashboard',
    category: 'UI/UX Design',
    year: '2023',
    description: 'A data-rich analytics dashboard that makes complex metrics feel intuitive.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    accent: '#10b981',
    tags: ['Figma', 'Data Viz', 'React'],
  },
  {
    id: 5,
    name: 'Terra Brand Identity',
    category: 'Branding',
    year: '2023',
    description: 'Full brand identity for a sustainable materials startup, from logo to launch.',
    gradient: 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)',
    accent: '#84cc16',
    tags: ['Brand Strategy', 'Illustrator', 'Print'],
  },
  {
    id: 6,
    name: 'Wave Music Player',
    category: 'UI/UX Design',
    year: '2022',
    description: 'A reimagined music player that puts the listening experience front and center.',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
    accent: '#ec4899',
    tags: ['Figma', 'Motion', 'iOS'],
  },
]

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="container">
        <header className="work__header">
          <p className="section-label">Selected Work</p>
          <div className="work__header-row">
            <h2 className="section-heading">Projects I&apos;m proud of</h2>
            <p className="work__header-sub">
              A curated selection of recent design and development work spanning products, systems,
              and brand identities.
            </p>
          </div>
        </header>

        <div className="work__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div
                className="project-card__image"
                style={{ background: project.gradient }}
                aria-hidden="true"
              >
                <div className="project-card__image-overlay" />
                <div className="project-card__image-grid" aria-hidden="true">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="project-card__image-cell"
                      style={{ '--delay': `${i * 0.05}s` }}
                    />
                  ))}
                </div>
                <div className="project-card__hover-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7v10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__category">{project.category}</span>
                  <span className="project-card__year">{project.year}</span>
                </div>
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
