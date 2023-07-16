import * as React from 'react'

import { Button } from '@/components/atoms/button'
import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/use-mouse-position'
import { HomeHero } from '../home-hero'

export interface IPageErrorSectionProps {
  title: React.ReactNode,
  error: string
}

const PageErrorTitle: React.FC<{ children: string }> = ({
  children,
  ...props
}) => {
  const { x, y } = useMousePosition()
  const maxSkew = 30
  const skewCalc = (maxSkew / 2) - (((y * 100) / maxSkew) * 10)

  return (
    <div>
      <motion.div
        className="transform-gpu overflow-hidden transition-all duration-100 max-w-[var(--width)] skew-x-[var(--skew)]"
        style={{ '--width': `${x * 120}%`, '--skew': `${skewCalc}deg` } as any}
        transition={{ type: 'tween', duration: 3, delay: 2 }}
      >
        <div className="relative">
          <motion.h1
            {...props}
            aria-label={children}
            className="transform-gpu font-base text-heading-3-xl mb-4 transition-all duration-100 skew-x-[var(--skew)]"
            style={{ '--skew': `${skewCalc * -1}deg` } as any}
          >
            <span>
              {children}
            </span>
          </motion.h1>
          <span className="font-base text-heading-3-xl text-black-100">
            {children}
          </span>
        </div>
      </motion.div>
    </div>
  )
}
export const PageErrorSection: React.FC<IPageErrorSectionProps> = ({
  title,
  error,
  ...props
}) => (
  <HomeHero {...props}>
    <div className="flex flex-col w-full items-center text-center">
      <h2 className="text-heading-s mb-2">{title}</h2>
      <PageErrorTitle>{error}</PageErrorTitle>
      <Button onClick={() => { }} variation="secondary">Return to home</Button>
    </div>
  </HomeHero>
)
