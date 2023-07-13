import * as React from 'react'
import {
  MotionProps,
  motion, useScroll, useTransform,
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
    <motion.div
      {...props}
      className={`from-blue-300 to-transparent bg-gradient-radial blur-4xl absolute bottom-0 right-0 w-full h-full max-h-[468px] max-w-[468px] ${className}`}
      style={{ y }}
    />
  )
}
