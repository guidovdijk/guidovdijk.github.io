import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
    offset: ['center end', 'center start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])

  return (
    <div ref={ref} className={`flex rounded-lg aspect-video items-center justify-center lg:aspect-hero ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
