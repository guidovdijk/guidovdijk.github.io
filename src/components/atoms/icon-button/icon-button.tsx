import * as React from 'react'
import { Icon, IconName } from '../icon'

export interface IIconButtonProps {
  name: IconName
  className?: string
  onClick: () => void
}

export const IconButton: React.FC<IIconButtonProps> = ({
  name,
  className = '',
  onClick,
}) => (
  <button className={`p-3 rounded-full bg-white-200/90 hover:bg-white-200 border border-white-200/75 text-black-200 ${className}`} onClick={onClick} type="button">
    <Icon name={name} />
  </button>
)
