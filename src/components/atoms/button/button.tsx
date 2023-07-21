/* eslint-disable react/button-has-type */
import * as React from 'react'

import Link, { LinkProps } from 'next/link'

export interface IButtonProps extends Omit<LinkProps, 'href' | 'as'> {
  children: string
  variation: 'primary' | 'secondary' | 'tertiary'
  onClick?: () => void
  className?: string
  href?: string
  target?: string
  type?: HTMLButtonElement['type']
}

const styles = {
  primary:
    'relative border-gradient-background text-white-200 border border-solid py-4 px-12',
  secondary: 'relative text-white-200 divider-gradient-background',
  tertiary:
    'bg-white-200/90 hover:bg-white-200 text-black-500 border border-white-200/75 py-3 px-12',
}

export const Button: React.FC<IButtonProps> = ({
  variation = 'primary',
  className,
  children,
  onClick,
  href,
  target = '_self',
  type = 'button',
  ...props
}) => (
  href ? (
    <Link
      {...props}
      className={`${styles[variation]} rounded text-body-s font-medium ${className}`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${styles[variation]} rounded text-body-s font-medium ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
)
