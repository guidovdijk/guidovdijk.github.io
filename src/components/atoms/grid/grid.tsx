import * as React from 'react'

export interface IGridProps {
  cols?: number
  className?: string
  gap?: string
  as?: React.ElementType
  children?: React.ReactNode
}

export const Grid: React.FC<IGridProps> = ({
  cols = 12,
  as = 'div',
  gap = 'gap-6',
  children,
  className = '',
  ...props
}) => {
  const Component = as

  return (
    <Component
      className={`grid grid-cols-${cols} ${gap} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
