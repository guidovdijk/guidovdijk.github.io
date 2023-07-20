import * as React from 'react'
import {
  useTransform,
  useScroll,
  LazyMotion,
  domAnimation,
  m,
} from 'framer-motion'
import { ImageProps } from 'next/image'

export interface IWorkHeroProps {
  children: React.ReactElement<ImageProps>
  className: string
}

export const WorkHero: React.FC<IWorkHeroProps> = ({
  children,
  className,
}) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])

  return (
    <LazyMotion features={domAnimation}>
      <div ref={ref} className={`flex rounded-lg aspect-video items-center justify-center lg:aspect-hero ${className}`}>
        <m.div style={{ y }}>
          {children}
        </m.div>
      </div>
    </LazyMotion>
  )
}
