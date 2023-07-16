import * as React from 'react'
import { Tooltip } from '@/components/atoms/tooltip'

export interface IEmailProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'small' | 'large'
}

export const Email: React.FC<IEmailProps> = ({
  type = 'large',
  ...props
}) => {
  const [tooltipText, setTooltipText] = React.useState('click to copy')

  const handleClick = () => {
    navigator.clipboard.writeText('van.guido@hotmail.com')
    setTooltipText('Copied!')
  }

  return (
    <Tooltip
      animationEndHandler={() => { setTooltipText('click to copy') }}
      text={tooltipText}
    >
      <button
        {...props}
        className="flex flex-col group"
        onClick={handleClick}
        type="button"
      >
        <span className={`${type === 'small' ? 'text-body-s font-medium mb-1.5' : 'text-heading-xl font-semibold font-heading mb-3'}`}>van.guido@hotmail.com</span>
        <span className={`${type === 'small' ? 'h-[1px] before:h-[1px]' : 'h-[5px] before:h-[10px]'} transform-gpu w-full overflow-hidden flex bg-white-100 relative before:scale-x-0 group-hover:before:scale-x-100 before:transition before:origin-left before:w-full before:absolute before:bg-background`} />
      </button>
    </Tooltip>
  )
}
