import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  variant?: 'default' | 'tight' | 'loose'
  className?: string
  id?: string
}

/**
 * Section component with fluid vertical padding
 * Variants:
 * - default: py-[clamp(72px,10vw,160px)]
 * - tight: py-[clamp(56px,8vw,120px)]
 * - loose: py-[clamp(88px,12vw,200px)]
 */
export function Section({ 
  children, 
  variant = 'default', 
  className = '',
  id
}: SectionProps) {
  const paddingClasses = {
    default: 'py-[clamp(72px,10vw,160px)]',
    tight: 'py-[clamp(56px,8vw,120px)]',
    loose: 'py-[clamp(88px,12vw,200px)]',
  }

  return (
    <section id={id} className={`${paddingClasses[variant]} ${className}`}>
      {children}
    </section>
  )
}
