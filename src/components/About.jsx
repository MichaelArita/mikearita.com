import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Text column */}
          <div className="about__text">
            <p className="section-label">About Me</p>
            <h2 className="section-heading about__heading">
              Designing with purpose, building with precision
            </h2>

            <div className="about__body">
              <p>
                I&apos;m Mike Arita, a designer and developer based in San Francisco. I&apos;ve
                spent the last six years working at the intersection of design and engineering —
                helping startups find their visual identity and established companies modernize
                their digital products.
              </p>
              <p>
                My background is a mix of formal design training and self-taught development. That
                combination means I can take an idea from a rough sketch in Figma all the way to a
                shipped, production-ready product — without losing fidelity at any step along the
                way.
              </p>
              <p>
                When I&apos;m not pushing pixels or writing components, I&apos;m obsessing over
                typeface pairings, documenting design systems, or exploring the trails around Marin
                County with a camera in hand.
              </p>
            </div>

            <div className="about__highlights">
              <div className="about__highlight">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3 9l4.5 4.5L15 4.5"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Previously at Stripe, Linear, and Figma (contractor)</span>
              </div>
              <div className="about__highlight">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3 9l4.5 4.5L15 4.5"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>BFA in Graphic Design, California College of the Arts</span>
              </div>
              <div className="about__highlight">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3 9l4.5 4.5L15 4.5"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Currently open to full-time and freelance opportunities</span>
              </div>
            </div>

            <a href="mailto:hello@mikearita.com" className="about__cta">
              Get in touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Image column */}
          <div className="about__visual">
            <div className="about__image-wrap">
              <div className="about__image-placeholder" aria-label="Mike Arita portrait">
                <div className="about__image-bg" aria-hidden="true" />
                <div className="about__image-initials" aria-hidden="true">
                  MA
                </div>
              </div>
              <div className="about__image-decoration" aria-hidden="true" />
            </div>

            <div className="about__cards">
              <div className="about__card">
                <span className="about__card-value">2018</span>
                <span className="about__card-label">Year started</span>
              </div>
              <div className="about__card about__card--accent">
                <span className="about__card-value">SF</span>
                <span className="about__card-label">Based in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
