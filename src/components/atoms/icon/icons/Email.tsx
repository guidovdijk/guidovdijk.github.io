import * as React from 'react'

import { IIconSvgProps } from '../types'

const Email: React.FC<IIconSvgProps> = ({ width, height, className }) => (
  <svg
    className={className}
    height={height}
    viewBox="0 0 17 17"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 4.07051C0 3.52138 0.223883 2.99474 0.622398 2.60644C1.02091 2.21814 1.56141 2 2.125 2H14.875C15.4386 2 15.9791 2.21814 16.3776 2.60644C16.7761 2.99474 17 3.52138 17 4.07051V12.3526C17 12.9017 16.7761 13.4283 16.3776 13.8166C15.9791 14.2049 15.4386 14.4231 14.875 14.4231H2.125C1.56141 14.4231 1.02091 14.2049 0.622398 13.8166C0.223883 13.4283 0 12.9017 0 12.3526V4.07051ZM2.125 3.03526C1.84321 3.03526 1.57296 3.14433 1.3737 3.33848C1.17444 3.53262 1.0625 3.79595 1.0625 4.07051V4.29516L8.5 8.64324L15.9375 4.29516V4.07051C15.9375 3.79595 15.8256 3.53262 15.6263 3.33848C15.427 3.14433 15.1568 3.03526 14.875 3.03526H2.125ZM15.9375 5.50227L10.9352 8.42687L15.9375 11.426V5.50227ZM15.9014 12.6207L9.90888 9.02732L8.5 9.85035L7.09112 9.02732L1.09863 12.6197C1.159 12.84 1.29234 13.0347 1.47793 13.1736C1.66352 13.3125 1.89098 13.3878 2.125 13.3878H14.875C15.1089 13.3878 15.3362 13.3127 15.5218 13.174C15.7074 13.0353 15.8408 12.8408 15.9014 12.6207ZM1.0625 11.426L6.06475 8.42687L1.0625 5.50227V11.426Z"
      fill="currentColor"
    />
  </svg>
)

export default React.memo(Email)
