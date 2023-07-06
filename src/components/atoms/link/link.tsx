import * as React from 'react'
import { Icon, IconName } from '../icon'

export interface ILinkProps extends React.HTMLProps<HTMLAnchorElement> {
  iconName?: IconName,
  children: string
}

export const Link: React.FC<ILinkProps> = ({
  iconName,
  children,
  className = '',
  ...props
}) => (
  <a
    className={`inline-flex align-middle text-white-200 text-body-s font-medium flex items-center gap-x-2 group hover:cursor-pointer ${className}`}
    {...props}
  >
    {iconName && <Icon name={iconName} />}
    <span className="group-hover:underline">{children}</span>
  </a>
)
