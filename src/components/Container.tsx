import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/**
 * Container component with fluid horizontal padding
 * max-width: 1200px
 * horizontal padding: clamp(24px, 6vw, 120px)
 */
export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1200px] mx-auto px-[clamp(24px,6vw,120px)] ${className}`}>
      {children}
    </div>
  )
}
