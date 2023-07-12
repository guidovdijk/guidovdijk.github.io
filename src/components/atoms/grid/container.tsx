import * as React from 'react'

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  as?: React.ElementType
  children?: React.ReactNode
}

export const Container: React.FC<IContainerProps> = ({
  as = 'div',
  children,
  className,
  ...props
}) => {
  const Component = as

  return (
    <Component className={`container mx-auto ${className}`} {...props}>
      {children}
    </Component>
  )
}
