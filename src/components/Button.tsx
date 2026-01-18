import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'outline'
  className?: string
}

/**
 * Button component with standard styling
 * Padding: px-4 py-3
 * Radius: rounded-lg
 * Border: 1px
 * Hover: invert / underline
 * Transition: 200ms ease-out
 */
export function Button({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'px-4 py-3 rounded-lg border transition-all duration-200 ease-out'
  
  const variantClasses = {
    default: 'bg-accent text-bg border-accent hover:opacity-90',
    outline: 'bg-transparent text-text border-text/12 hover:underline hover:decoration-accent',
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
