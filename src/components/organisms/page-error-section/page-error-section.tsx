import * as React from 'react'

import { LazyMotion, domAnimation, m } from 'framer-motion'

import { useMousePosition } from '@/hooks/use-mouse-position'

import { Button } from '@/components/atoms/button'

export interface IPageErrorSectionProps {
  title: React.ReactNode
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
  const perc = y * 100
  const skewCalc = 0.3 * perc - maxSkew

  return (
    <div>
      <LazyMotion features={domAnimation}>
        <m.div className="relative transform-gpu">
          <m.h1
            {...props}
            animate={{ skewX: skewCalc, maxWidth: `${x * 110}%` }}
            aria-label={children}
            className="mb-4 transform-gpu overflow-hidden font-base text-heading-4-xl"
            transition={{
              type: 'tween',
              duration: 0.3,
            }}
          >
            {children}
          </m.h1>
          <m.span
            animate={{ skewX: skewCalc }}
            aria-hidden
            className="text-stroke absolute top-0 z-[-1] block font-base text-heading-4-xl text-black-100"
            transition={{
              type: 'tween',
              duration: 0.3,
            }}
          >
            {children}
          </m.span>
        </m.div>
      </LazyMotion>
    </div>
  )
}

// TODO: Remove HomeHero component
export const PageErrorSection: React.FC<IPageErrorSectionProps> = ({
  title,
  error,
  ...props
}) => (
  <div
    {...props}
    className="mt-24 flex h-full w-full flex-col items-center text-center"
  >
    <h2 className="mb-2 text-heading-s">{title}</h2>
    <PageErrorTitle>{error}</PageErrorTitle>
    <Button href="/" variation="secondary">
      Return to home
    </Button>
  </div>
)
