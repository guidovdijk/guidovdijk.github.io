import * as React from 'react'
import { HTMLProps } from 'react'

export interface IColProps extends HTMLProps<HTMLDivElement> {
  start?: number,
  span?: number,
  children: React.ReactNode
}

export const Col: React.FC<IColProps> = ({
  start,
  span,
  children,
  className = '',
  ...props
}) => (
  <div
    className={`
      ${start ? `col-start-${start}` : ''}
      ${span ? `col-span-${span}` : 'col-span-12'}
      ${className}
    `}
    {...props}
  >{children}
  </div>
)
