import * as React from 'react'

import { Email } from './icons/Email'
import { Exitscreen } from './icons/Exitscreen'
import { Fullscreen } from './icons/Fullscreen'
import { Github } from './icons/Github'
import { Instagram } from './icons/Instagram'
import { LinkedIn } from './icons/LinkedIn'
import { Triangle } from './icons/Triangle'

const Components = {
  fullscreen: Fullscreen,
  exitscreen: Exitscreen,
  linkedin: LinkedIn,
  triangle: Triangle,
  instagram: Instagram,
  email: Email,
  github: Github,
}

export type IconName = keyof typeof Components

export interface IIconProps {
  name: IconName
  width?: number
  height?: number
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
