import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

export interface IClipTextProps {
  className?: string
  isEnd?: boolean
  children: React.ReactNode
}

// TODO: (optional) Create a provider to use the animation for better re-usability
export const ClipText: React.FC<IClipTextProps> = ({
  className = '',
  isEnd = false,
  children,
}) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center center', `center ${window.innerHeight / 2 - 105}px`],
  })
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ['100%', '0%'],
  )

  return (
    <div className="relative">
      <motion.span
        ref={ref}
        aria-hidden="true"
        className={`
          block z-10 clip-inset relative
          ${isEnd ? 'after:inline-block after:bg-background after:h-2 after:w-2 after:ml-1' : ''} 
          ${className}
        `}
        style={{ '--clip': clip } as any}
      >
        {children}
      </motion.span>
      <span
        aria-hidden="true"
        className={`
          absolute top-0 text-black-100 
          ${isEnd ? 'after:inline-block after:bg-black-100 after:h-2 after:w-2 after:ml-1' : ''} 
          ${className}
        `}
      >
        {children}
      </span>
    </div>
  )
}
