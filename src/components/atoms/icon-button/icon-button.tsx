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
  <button
    className={`rounded-full border border-white-200/75 bg-white-200/90 p-3 text-black-200 hover:bg-white-200 ${className}`}
    onClick={onClick}
    type="button"
  >
    <Icon name={name} />
  </button>
)
