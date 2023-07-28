import React, { useRef } from 'react'

import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from 'framer-motion'

export interface IClipTextProps {
  offset: number
  className?: string
  isEnd?: boolean
  children: React.ReactNode
}

const ClipText: React.FC<IClipTextProps> = ({
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
  const clip = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="relative">
      <LazyMotion features={domAnimation}>
        <m.span
          ref={ref}
          aria-hidden="true"
          className={`
            clip-inset relative z-10 inline-block
            ${
              isEnd
                ? 'after:ml-1 after:inline-block after:h-2 after:w-2 after:bg-background'
                : ''
            }
            ${className}
        `}
          style={{ '--clip': clip } as any}
        >
          {children}
        </m.span>
      </LazyMotion>
      <span
        aria-hidden="true"
        className={`
          absolute left-0 top-0 text-black-100
          ${
            isEnd
              ? 'after:ml-1 after:inline-block after:h-2 after:w-2 after:bg-black-100'
              : ''
          }
          ${className}
      `}
      >
        {children}
      </span>
    </div>
  )
}

export default React.memo(ClipText)
