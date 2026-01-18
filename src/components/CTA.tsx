import { ReactNode } from 'react'
import { Container } from './Container'
import { Button } from './Button'
import { Link } from 'react-router-dom'

interface CTAProps {
  title: string
  description?: ReactNode
  buttonText?: string
  buttonLink?: string
}

export function CTA({ 
  title, 
  description,
  buttonText = 'Začít projekt',
  buttonLink = '/start-project'
}: CTAProps) {
  return (
    <Container>
      <div className="text-center max-w-[64ch] mx-auto">
        <h2 className="t-h2 mb-[clamp(16px,2.5vw,24px)]">{title}</h2>
        {description && (
          <p className="t-body mb-[clamp(24px,4vw,48px)] opacity-72">
            {description}
          </p>
        )}
        <Link to={buttonLink}>
          <Button>{buttonText}</Button>
        </Link>
      </div>
    </Container>
  )
}
