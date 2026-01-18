import { Link } from 'react-router-dom'
import { Container } from './Container'
import { Button } from './Button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-text/12">
      <Container className="h-[80px] flex items-center justify-between">
        <Link to="/" className="t-h3 text-text">
          Studio Tuka
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[clamp(16px,3vw,32px)]">
          <Link 
            to="/services" 
            className="text-[clamp(16px,1.1vw,18px)] leading-[1.65] text-text hover:underline hover:decoration-accent transition-all duration-200"
          >
            Služby
          </Link>
          <Link 
            to="/case-study/gatu" 
            className="text-[clamp(16px,1.1vw,18px)] leading-[1.65] text-text hover:underline hover:decoration-accent transition-all duration-200"
          >
            Case Study
          </Link>
          <Link 
            to="/contact" 
            className="text-[clamp(16px,1.1vw,18px)] leading-[1.65] text-text hover:underline hover:decoration-accent transition-all duration-200"
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/start-project">
            <Button variant="outline" className="text-sm">
              Začít
            </Button>
          </Link>
          <button 
            className="p-2 text-text"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/start-project">
            <Button variant="outline">
              Začít projekt
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  )
}
