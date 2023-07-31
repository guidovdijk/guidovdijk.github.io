import * as React from 'react'

import { ImageProps } from 'next/image'

import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from 'framer-motion'

export interface IWorkHeroProps {
  children: React.ReactElement<ImageProps>
  className: string
}

const WorkHero: React.FC<IWorkHeroProps> = ({ children, className }) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['95%', '-25%'])

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={ref}
        className={`mx-4 mb-12 flex aspect-square items-center justify-center rounded-lg sm:mb-24 sm:aspect-video lg:mx-10 lg:aspect-hero ${className}`}
      >
        <m.div
          className="h-full max-h-[8rem] w-full max-w-[12rem]"
          style={{ y }}
        >
          {children}
        </m.div>
      </div>
    </LazyMotion>
  )
}

export default React.memo(WorkHero)
