import * as React from 'react'

export interface IButtonProps {
  children: string,
  variation: 'primary' | 'secondary' | 'tertiary'
  onClick: () => void,
  className?: string
}

const styles = {
  primary: 'border-gradient-background text-white-200 border border-solid py-4 px-12',
  secondary: 'text-white-200 divider-gradient-background',
  tertiary: 'bg-white-200/90 hover:bg-white-200 border border-white-200/75 py-3 px-12',
}

export const Button: React.FC<IButtonProps> = ({
  variation = 'primary',
  className,
  children,
  ...props
}) => (
  <button {...props} className={`${styles[variation]} rounded text-body-s font-medium relative ${className}`} type="button">
    {children}
  </button>
)
