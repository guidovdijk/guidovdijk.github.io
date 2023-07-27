import * as React from 'react'
import { useState } from 'react'

import { isAvailableForHire } from '@/helpers/constants/social-data'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { useScroll } from '@/hooks/use-scroll'

import { Email } from '@/components/molecules/email'
import { HeroSocialList } from '@/components/molecules/hero-social-list'

const HeroInfo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useScroll(({ y }) => {
    const hasScrolledDown = y < 150

    const shouldBeVisible = hasScrolledDown
    setIsVisible(shouldBeVisible)
  })

  return (
    <div className="absolute bottom-0 z-[2] flex w-full items-end overflow-hidden px-4 pb-6 lg:px-12 lg:pb-10">
      <LazyMotion features={domAnimation}>
        <m.div
          animate={{
            x: isVisible ? '0px' : '-200px',
            opacity: isVisible ? 1 : 0,
          }}
          className="mr-auto mt-auto flex flex-col gap-y-1.5"
          initial={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.3, type: 'tween' }}
        >
          <p className="text-subtitle uppercase text-white-500">
            {isAvailableForHire ? 'Available for hire' : 'My Email'}
          </p>
          <div className="flex">
            <Email type="small" />
          </div>
        </m.div>
      </LazyMotion>
      <HeroSocialList isVisible={isVisible} />
    </div>
  )
}

export default React.memo(HeroInfo)
