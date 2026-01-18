import { ReactNode } from 'react'

interface GridProps {
  children: ReactNode
  className?: string
}

/**
 * Grid component with responsive columns
 * - Mobile: 4 columns
 * - Tablet (md): 8 columns
 * - Desktop (lg): 12 columns
 * - Gap: 24px (gap-6)
 */
export function Grid({ children, className = '' }: GridProps) {
  return (
    <div 
      className={`
        grid grid-cols-4 
        md:grid-cols-8 
        lg:grid-cols-12 
        gap-6
        ${className}
      `}
    >
      {children}
    </div>
  )
}

/**
 * Grid column span helper
 * Usage: Use Tailwind classes directly:
 * - Mobile: col-span-1 to col-span-4
 * - Tablet (md): md:col-span-1 to md:col-span-8
 * - Desktop (lg): lg:col-span-1 to lg:col-span-12
 * 
 * Example: <div className="col-span-4 md:col-span-4 lg:col-span-6">
 */
