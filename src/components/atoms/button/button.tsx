import * as React from 'react'

export interface IButtonProps {
  children: string,
  variation: 'primary' | 'secondary' | 'teritary'
  onClick: () => void
}

export const Button: React.FC<IButtonProps> = ({
  variation = 'primary',
  ...props
}) => {
  const styles = {
    primary: 'border-gradient-background border border-solid py-4 px-12 text-white-200',
    secondary: 'text-white-200 divider-gradient-background',
    teritary: '',
  }
  return (
    <button className={`${styles[variation]} rounded text-body-s font-medium relative`} type="button">
      {props.children}
    </button>
  )
}
