import * as React from 'react'
import { HTMLProps } from 'react'

export interface IColProps extends HTMLProps<HTMLDivElement> {
  start?: number,
  span?: number,
  as?: React.ElementType
  children: React.ReactNode
}

export const Col: React.FC<IColProps> = ({
  start,
  span,
  as = 'div',
  children,
  className = '',
  ...props
}) => {
  const Component = as

  return (
    <Component
      className={`
      ${start ? `col-start-${start}` : ''}
      ${span ? `col-span-${span}` : ''}
      ${className}
    `}
      {...props}
    >
      {children}
    </Component>
  )
}
