import * as React from 'react'
import { Fullscreen } from './icons/Fullscreen'

const Components = {
  fullscreen: Fullscreen,
}

export type IconName = 'fullscreen'

export interface IIconProps {
  name: IconName,
  width?: number,
  height?: number,
  className?: string
}

export const Icon: React.FC<IIconProps> = ({
  name,
  width = 16,
  height = 16,
  className = '',
  ...props
}) => {
  if (typeof Components[name] !== 'undefined') {
    return React.createElement(Components[name], {
      width,
      height,
      className,
      ...props,
    })
  }

  return null
}
