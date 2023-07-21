import * as React from 'react'

import type { MotionProps } from 'framer-motion'
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from 'framer-motion'

interface IBlobProps extends MotionProps {
  className?: string
}

export const Blob: React.FC<IBlobProps> = ({ className = '', ...props }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        {...props}
        className={`absolute -bottom-44 -right-[10%] h-full max-h-[468px] w-full max-w-[468px] bg-blue-300/60 blur-4xl ${className}`}
        style={{ y }}
      />
    </LazyMotion>
  )
}
