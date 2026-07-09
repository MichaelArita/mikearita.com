import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__left">
          <a href="#" className="footer__logo">
            <span className="footer__logo-mark" aria-hidden="true">
              MA
            </span>
            <span className="footer__logo-name">Mike Arita</span>
          </a>
          <p className="footer__tagline">Design &amp; Development</p>
        </div>

        <div className="footer__right">
          <p className="footer__copy">&copy; {year} Mike Arita. All rights reserved.</p>
          <p className="footer__made">Made with care in San Francisco.</p>
        </div>
      </div>
    </footer>
  )
}
