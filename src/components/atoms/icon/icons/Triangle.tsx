import * as React from 'react'

import { IIconSvgProps } from '../types'

export const Triangle: React.FC<IIconSvgProps> = ({
  width,
  height,
  className,
}) => (
  <svg
    className={className}
    fill="none"
    height={height}
    viewBox="0 0 16 16"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 8L0.499999 15.7942L0.5 0.205771L14 8Z"
      fill="url(#paint0_linear_297_417)"
    />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_297_417"
        x1="14"
        x2="-4"
        y1="8"
        y2="8"
      >
        <stop stopColor="#DD117E" />
        <stop offset="0.489583" stopColor="#C079FE" />
        <stop offset="1" stopColor="#9FD9FF" />
      </linearGradient>
    </defs>
  </svg>
)
