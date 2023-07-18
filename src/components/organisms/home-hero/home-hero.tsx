import * as React from 'react'

import { HeroInfo } from '@/components/molecules/hero-info'

export interface IHomeHero {
  children?: React.ReactNode
  className?: string
}

export const HomeHero: React.FC<IHomeHero> = ({
  children,
  className = '',
  ...props
}) => (
  <>
    <div className="h-screen w-full absolute">
      <HeroInfo />
    </div>
    <section {...props} className={`z-[1] px-4 sm:px-10 flex relative pt-20 ${className}`}>
      {children}
    </section>
  </>
)
