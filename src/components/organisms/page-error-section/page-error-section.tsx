import * as React from 'react'

import { Button } from '@/components/atoms/button'
import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks/use-mouse-position'
import { HomeHero } from '../home-hero'

export interface IPageErrorSectionProps {
  title: React.ReactNode,
  error: string
}

// TODO: try putting the mask on the text, so the span tag can be below it
const PageErrorTitle: React.FC<{ children: string }> = ({
  children,
  ...props
}) => {
  const { x, y } = useMousePosition()

  /**
   * when cursor at top of screen:
   *  - skewCalc == -15
   *  - cursor == 0%
   *
   * when cursor at center of screen:
   *  - skewCalc == 0
   *  - cursor == 50%
  *
  * when cursor at bottom of screen skew == 15
   *  - skewCalc == 15
   *  - cursor == 100%
  */
  const maxSkew = 15
  const perc = (y * 100)
  const skewCalc = 0.3 * perc - maxSkew

  return (
    <div>
      <motion.div
        className="relative transform-gpu"
      >
        <motion.h1
          {...props}
          aria-label={children}
          className="transform-gpu font-base text-heading-3-xl mb-4 overflow-hidden max-w-[var(--width)] skew-x-[var(--skew)]"
          style={{ '--width': `${x * 110}%`, '--skew': `${skewCalc}deg` } as any}
          transition={{ delay: 300, type: 'tween' }}
        >
          {children}
        </motion.h1>
        <motion.span
          aria-hidden
          className="text-stroke block top-0 absolute z-[-1] font-base text-heading-3-xl text-black-100 skew-x-[var(--skew)]"
          style={{ '--skew': `${skewCalc}deg` } as any}
          transition={{ delay: 300, type: 'tween' }}
        >
          {children}
        </motion.span>
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
    <div className="flex flex-col w-full items-center text-center mt-24">
      <h2 className="text-heading-s mb-2">{title}</h2>
      <PageErrorTitle>{error}</PageErrorTitle>
      <Button onClick={() => { }} variation="secondary">Return to home</Button>
    </div>
  </HomeHero>
)
