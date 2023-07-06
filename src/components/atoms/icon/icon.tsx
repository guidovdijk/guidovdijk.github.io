import * as React from 'react'
import { Fullscreen } from './icons/Fullscreen'
import { LinkedIn } from './icons/LinkedIn'
import { Triangle } from './icons/Triangle'
import { Instagram } from './icons/Instagram'
import { Email } from './icons/Email'
import { Github } from './icons/Github'

const Components = {
  fullscreen: Fullscreen,
  linkedin: LinkedIn,
  triangle: Triangle,
  instagram: Instagram,
  email: Email,
  github: Github,
}

export type IconName = keyof typeof Components

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
