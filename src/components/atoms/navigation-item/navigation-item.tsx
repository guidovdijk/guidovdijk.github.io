import * as React from 'react'

import Link from 'next/link'

export interface INavigationItemProps {
  className?: string
  children: string
  href: string
  isActive: boolean
}

export const NavigationItem: React.FC<INavigationItemProps> = ({
  children,
  href,
  isActive = false,
  className = '',
  ...props
}) => (
  <Link
    className={`
      relative
      text-white-200
      hover:before:absolute hover:before:-bottom-[6px] hover:before:h-[1px] hover:before:w-full hover:before:bg-background
      ${
        isActive &&
        'before:absolute before:-bottom-[6px] before:h-[1px] before:w-full before:bg-background'
      }
      ${className}
    `}
    href={href}
    style={{ textDecoration: 'none' }}
    {...props}
  >
    {children}
  </Link>
)
