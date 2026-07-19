import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const NAMES = ['Mike', 'Michael']

export default function Hero() {
  const canvasRef = useRef(null)
  const [nameIndex, setNameIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % NAMES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animFrame
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.clearRect(0, 0, w, h)

      // Draw subtle grid of dots
      const dotSpacing = 48
      const dotRadius = 1

      for (let x = 0; x < w; x += dotSpacing) {
        for (let y = 0; y < h; y += dotSpacing) {
          const dist = Math.sqrt((x - w * 0.5) ** 2 + (y - h * 0.45) ** 2)
          const maxDist = Math.sqrt((w * 0.5) ** 2 + (h * 0.45) ** 2)
          const proximity = 1 - Math.min(dist / (maxDist * 0.7), 1)

          const pulse = Math.sin(time * 0.8 + x * 0.015 + y * 0.015) * 0.5 + 0.5
          const alpha = proximity * 0.25 * (0.4 + pulse * 0.6)

          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`
          ctx.fill()
        }
      }

      // Glowing orb
      const orbX = w * 0.7 + Math.sin(time * 0.3) * 40
      const orbY = h * 0.35 + Math.cos(time * 0.2) * 30
      const orbRadius = 280

      const radialGrad = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbRadius)
      radialGrad.addColorStop(0, 'rgba(99, 102, 241, 0.12)')
      radialGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.05)')
      radialGrad.addColorStop(1, 'rgba(99, 102, 241, 0)')

      ctx.beginPath()
      ctx.arc(orbX, orbY, orbRadius, 0, Math.PI * 2)
      ctx.fillStyle = radialGrad
      ctx.fill()

      time += 0.016
      animFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleScrollToWork = (e) => {
    e.preventDefault()
    const target = document.querySelector('#work')
    if (target) {
      const navHeight = 72
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__text">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Available for new projects
          </p>

          <h1 className="hero__heading">
            <span className="hero__heading-name">
              <span className="hero__name-flip" key={nameIndex}>
                {NAMES[nameIndex]}
              </span>
              {' '}Arita
            </span>
            <br />
            <span className="hero__heading-role">Design &</span>
            <br />
            <span className="hero__heading-role hero__heading-role--accent">Development</span>
          </h1>

          <p className="hero__description">
            I craft digital products that live at the intersection of thoughtful design and clean
            code. From design systems to interactive experiences — built with intention.
          </p>

          <div className="hero__actions">
            <a href="#work" className="hero__btn hero__btn--primary" onClick={handleScrollToWork}>
              View My Work
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
            <a
              href="#about"
              className="hero__btn hero__btn--secondary"
              onClick={(e) => {
                e.preventDefault()
                const t = document.querySelector('#about')
                if (t)
                  window.scrollTo({
                    top: t.getBoundingClientRect().top + window.scrollY - 72,
                    behavior: 'smooth',
                  })
              }}
            >
              About Me
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">6+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-value">40+</span>
              <span className="hero__stat-label">Projects Shipped</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-value">15+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">scroll</span>
      </div>
    </section>
  )
}
