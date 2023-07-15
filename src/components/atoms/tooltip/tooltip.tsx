import * as React from 'react'
import { useEffect, useState } from 'react'

export interface ITooltipProps {
  children?: React.ReactNode
  text?: string
  className?: string
  isVisible: boolean
}

export const Tooltip: React.FC<ITooltipProps> = ({
  className = '',
  text = '',
  children = '',
  isVisible,
  ...props
}) => (
  <div {...props} className={`relative ${className}`}>
    <span className={`${isVisible ? 'block' : 'hidden'} absolute text-[12px] bg-black-300 py-1 px-2 rounded uppercase -top-10 w-max -translate-x-2/4 left-1/2`}>
      {text}
    </span>
    {children}
  </div>
)
