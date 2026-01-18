import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-text/12 py-[clamp(48px,6vw,80px)]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="t-small text-text/70">
            © {new Date().getFullYear()} Studio Tuka
          </div>
          <nav className="flex flex-wrap gap-[clamp(16px,3vw,32px)]">
            <a href="/services" className="t-small text-text/70 hover:underline hover:decoration-accent transition-all duration-200">
              Služby
            </a>
            <a href="/case-study/gatu" className="t-small text-text/70 hover:underline hover:decoration-accent transition-all duration-200">
              Case Study
            </a>
            <a href="/contact" className="t-small text-text/70 hover:underline hover:decoration-accent transition-all duration-200">
              Kontakt
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
