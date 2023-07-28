import * as React from 'react'

import { IIconSvgProps } from '../types'

const Back: React.FC<IIconSvgProps> = ({ width, height, className }) => (
  <svg
    className={className}
    height={height}
    viewBox="0 0 17 17"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 1L1 9L9 17"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default React.memo(Back)
