import * as React from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon, IconName } from '../icon'

export interface IHeroSocialLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  iconName?: IconName,
  children: string
}

export const HeroSocialLink: React.FC<IHeroSocialLinkProps> = ({
  iconName,
  children,
  className = '',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <a
      className={`relative overflow-hidden inline-flex leading-none align-middle text-white-400 hover:text-white-200 text-body-s font-medium items-center gap-x-2 group hover:cursor-pointer ${className}`}
      {...props}
      aria-label={children}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {
          isHovered && (
            <motion.span
              animate={{ opacity: 1, x: '0%' }}
              exit={{ opacity: 0, x: '100%' }}
              initial={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, type: 'linear' }}
            >
              {children}
            </motion.span>
          )
        }
      </AnimatePresence>
      {iconName && <Icon className="relative z-10 bg-black-500" height={17} name={iconName} width={17} />}
    </a>
  )
}
