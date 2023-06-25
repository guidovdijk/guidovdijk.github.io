import * as React from 'react'

export interface IButtonProps {
  children: string,
  variation: 'primary' | 'secondary' | 'teritary'
  onClick: () => void
}

export const Button: React.FC<IButtonProps> = ({ ...props }) => (
  <button className="rounded border-gradient-background border border-solid py-4 px-12 text-white-200 text-body-s font-medium" type="button">
    {props.children}
  </button>
)
