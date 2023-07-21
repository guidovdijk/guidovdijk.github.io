import * as React from 'react'
import { useState } from 'react'

import { LazyMotion, domAnimation, m } from 'framer-motion'

export interface ITooltipProps {
  children?: React.ReactNode
  text?: string
  className?: string
  animationEndHandler: () => void
  isVisible?: boolean
}

// TODO: If time left, use callbacks instead of timeouts to keep the tooltip open
export const Tooltip: React.FC<ITooltipProps> = ({
  className = '',
  text = '',
  children = '',
  isVisible,
  animationEndHandler,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const onClick = () => {
    setIsActive(true)

    setTimeout(() => {
      setIsActive(false)
      setIsHovered(false)
    }, 2000)

    setTimeout(() => {
      animationEndHandler()
    }, 2500)
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        {...props}
        aria-label="click to copy the email address to your clipboard"
        className={`relative inline-flex ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTap={onClick}
      >
        <m.span
          animate={{ opacity: isHovered || isActive ? 1 : 0 }}
          className="pointer-events-none absolute -top-10 left-1/2 w-max -translate-x-2/4 rounded bg-black-300 px-2 py-1 text-[12px] uppercase"
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            delay: isActive ? 3 : 0,
            type: 'linear',
            transitionEnd: { display: 'none' },
          }}
        >
          {text}
        </m.span>
        {children}
      </m.div>
    </LazyMotion>
  )
}
