import * as React from 'react'
import { Icon, IconName } from '../icon'

export interface ILinkProps extends React.HTMLProps<HTMLAnchorElement> {
  iconName: IconName,
  children: string
}

export const Link: React.FC<ILinkProps> = ({
  iconName,
  children,
  ...props
}) => (
  <a
    className="text-white-400 hover:text-white-200 text-body-s font-medium flex items-center gap-x-2 group hover:cursor-pointer"
    {...props}
  >
    <Icon name={iconName} />
    <span className="group-hover:underline">{children}</span>
  </a>
)
