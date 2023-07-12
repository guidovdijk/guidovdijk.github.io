import * as React from 'react'

export interface IGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number
  className?: string
  as?: React.ElementType
  children?: React.ReactNode
}

export const Grid: React.FC<IGridProps> = ({
  cols = 12,
  as = 'div',
  children,
  className,
  ...props
}) => {
  const Component = as

  return (
    <Component className={`grid grid-cols-${cols} gap-6 ${className}`} {...props}>{children}</Component>
  )
}
