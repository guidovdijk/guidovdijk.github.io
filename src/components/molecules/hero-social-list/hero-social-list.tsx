import * as React from 'react'

import { socialData } from '@/helpers/constants/social-data'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { HeroSocialLink } from '@/components/atoms/hero-social-link'

export interface IHeroSocialListProps {
  isVisible: boolean
}

export const HeroSocialList: React.FC<IHeroSocialListProps> = ({
  isVisible,
}) => (
  <LazyMotion features={domAnimation}>
    <m.div
      animate={{
        x: isVisible ? '0px' : '200px',
        opacity: isVisible ? 1 : 0,
      }}
      className="ml-auto flex"
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3, type: 'tween' }}
    >
      <div className="flex flex-col items-end gap-y-4">
        {socialData.map((item, index) => (
          <HeroSocialLink
            key={`hero-social-${index}`}
            href={item.href}
            iconName={item.icon}
            target="_blank"
          >
            {item.text}
          </HeroSocialLink>
        ))}
      </div>
    </m.div>
  </LazyMotion>
)
