import * as React from 'react'
import { HTMLProps } from 'react'

export interface IGridProps extends HTMLProps<HTMLDivElement> {
  cols?: number,
  children?: React.ReactNode
}

export const Grid: React.FC<IGridProps> = ({
  cols = 12,
  children,
  ...props
}) => (
  <div className={`container mx-auto px-12 grid auto-rows-max grid-cols-${cols} gap-6`} {...props}>{children}</div>
)
