import * as React from 'react'
import type { MotionProps } from 'framer-motion'
import {
  LazyMotion,
  useScroll,
  useTransform,
  domAnimation,
  m,
} from 'framer-motion'

interface IBlobProps extends MotionProps {
  className?: string
}

export const Blob: React.FC<IBlobProps> = ({
  className = '',
  ...props
}) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        {...props}
        className={`bg-blue-300/60 top-0 blur-4xl absolute bottom-0 -right-[10%] w-full h-full max-h-[468px] max-w-[468px] ${className}`}
        style={{ y }}
      />
    </LazyMotion>
  )
}
