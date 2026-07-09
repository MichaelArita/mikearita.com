import { useState, useEffect } from 'react'
import './Nav.css'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 72
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="banner">
      <div className="nav__inner container">
        <a href="#" className="nav__logo" onClick={(e) => handleLinkClick(e, '#')}>
          <span className="nav__logo-mark">MA</span>
          <span className="nav__logo-name">Mike Arita</span>
        </a>

        <nav className="nav__links" aria-label="Primary navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav__link"
              onClick={(e) => handleLinkClick(e, href)}
            >
              {label}
            </a>
          ))}
          <a href="mailto:hello@mikearita.com" className="nav__cta">
            Say Hello
          </a>
        </nav>

        <button
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="nav__mobile-link"
            onClick={(e) => handleLinkClick(e, href)}
          >
            {label}
          </a>
        ))}
        <a href="mailto:hello@mikearita.com" className="nav__mobile-link nav__mobile-link--cta">
          Say Hello
        </a>
      </div>
    </header>
  )
}
