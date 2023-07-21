import * as React from 'react'
import NLink, { LinkProps } from 'next/link'
import { Icon, IconName } from '../icon'

export interface ILinkProps extends LinkProps {
  iconName?: IconName
  children: React.ReactNode
  className?: string
  target?: string
}

export const Link: React.FC<ILinkProps> = ({
  iconName,
  children,
  className = '',
  ...props
}) => (
  <NLink
    className={`inline-flex align-middle text-white-200 text-body-s font-medium items-center gap-x-2 group hover:cursor-pointer ${className}`}
    {...props}
  >
    {iconName && <Icon name={iconName} />}
    <span className="group-hover:underline">{children}</span>
  </NLink>
)
