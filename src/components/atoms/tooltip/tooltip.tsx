import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

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
    <motion.div
      {...props}
      aria-label="click to copy the email address to your clipboard"
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTap={onClick}
    >
      <motion.span
        animate={{ opacity: isHovered || isActive ? 1 : 0 }}
        className="absolute pointer-events-none text-[12px] bg-black-300 py-1 px-2 rounded uppercase -top-10 w-max -translate-x-2/4 left-1/2"
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.2, delay: isActive ? 3 : 0, type: 'linear', transitionEnd: { display: 'none' },
        }}
      >
        {text}
      </motion.span>
      {children}
    </motion.div>
  )
}
