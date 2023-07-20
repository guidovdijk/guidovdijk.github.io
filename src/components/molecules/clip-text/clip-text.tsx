import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export interface IClipTextProps {
  offset: number
  className?: string
  isEnd?: boolean
  children: React.ReactNode
}

// TODO: (optional) Create a provider to use the animation for better re-usability
export const ClipText: React.FC<IClipTextProps> = ({
  className = '',
  isEnd = false,
  offset,
  children,
}) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`end ${110 - offset}%`, `center ${110 - offset}%`],
  })
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%'],
  )

  return (
    <div className="relative">
      <motion.span
        ref={ref}
        aria-hidden="true"
        className={`
          inline-block z-10 clip-inset relative
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
          absolute left-0 top-0 text-black-100 
          ${isEnd ? 'after:inline-block after:bg-black-100 after:h-2 after:w-2 after:ml-1' : ''} 
          ${className}
      `}
      >
        {children}
      </span>
    </div>
  )
}
