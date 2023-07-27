import * as React from 'react'

import NLink, { LinkProps } from 'next/link'

import { Icon, IconName } from '../icon'

export interface ILinkProps extends LinkProps {
  iconName?: IconName
  children: React.ReactNode
  className?: string
  target?: string
}

const Link: React.FC<ILinkProps> = ({
  iconName,
  children,
  className = '',
  ...props
}) => (
  <NLink
    className={`group inline-flex items-center gap-x-2 align-middle text-body-s font-medium text-white-200 hover:cursor-pointer ${className}`}
    {...props}
  >
    {iconName && <Icon name={iconName} />}
    <span className="group-hover:underline">{children}</span>
  </NLink>
)

export default React.memo(Link)
