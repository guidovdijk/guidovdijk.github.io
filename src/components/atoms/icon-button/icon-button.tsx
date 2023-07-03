import * as React from 'react'
import { Icon, IconName } from '../icon'

export interface IIconButtonProps {
  name: IconName
}

export const IconButton: React.FC<IIconButtonProps> = ({
  name,
}) => (
  <button className="p-3 rounded-full bg-white-200 bg-gradient hover:text-white-200" type="button">
    <Icon name={name} />
  </button>
)
