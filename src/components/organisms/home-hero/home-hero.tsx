import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { useScroll } from '@/hooks/use-scroll'
import { isAvailableForHire, socialData } from '@/helpers/constants/social-data'
import { HeroSocialLink } from '@/components/atoms/hero-social-link'
import { Email } from '@/components/molecules/email'

export const HomeHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useScroll(({ y }) => {
    const hasScrolledDown = y < 100

    const shouldBeVisible = hasScrolledDown
    setIsVisible(shouldBeVisible)
  })

  return (
    <section className="h-screen overflow-hidden relative px-4 sm:px-12 flex items-end pt-20 pb-6 sm:pb-14">
      <motion.div
        animate={{
          x: isVisible ? '0px' : '-200px',
          opacity: isVisible ? 1 : 0,
        }}
        className="flex flex-col gap-y-1.5 mr-auto"
        initial={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3, type: 'tween' }}
      >
        <p className="text-subtitle uppercase text-white-500">{isAvailableForHire ? 'Available for hire' : 'My Email'}</p>
        <div className="flex">
          <Email type="small" />
        </div>
      </motion.div>
      <motion.div
        animate={{
          x: isVisible ? '0px' : '200px',
          opacity: isVisible ? 1 : 0,
        }}
        className="flex ml-auto"
        initial={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3, type: 'tween' }}
      >
        <div className="flex flex-col items-end gap-y-4">
          {
            socialData.map((item, index) => (
              <HeroSocialLink
                key={`hero-social-${index}`}
                href={item.href}
                iconName={item.icon}
              >
                {item.text}
              </HeroSocialLink>
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}
