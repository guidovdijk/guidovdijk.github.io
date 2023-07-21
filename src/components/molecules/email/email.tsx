import * as React from 'react'

import { Tooltip } from '@/components/atoms/tooltip'

export interface IEmailProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'small' | 'large'
}

const Email: React.FC<IEmailProps> = ({ type = 'large', ...props }) => {
  const [tooltipText, setTooltipText] = React.useState('click to copy')

  const handleClick = () => {
    navigator.clipboard.writeText('van.guido@hotmail.com')
    setTooltipText('Copied!')
  }

  return (
    <Tooltip
      animationEndHandler={() => {
        setTooltipText('click to copy')
      }}
      text={tooltipText}
    >
      <button
        {...props}
        className="group flex flex-col"
        onClick={handleClick}
        type="button"
      >
        <span
          className={`${
            type === 'small'
              ? 'mb-1.5 text-body-s font-medium'
              : 'mb-3 font-heading text-heading-xl font-semibold'
          }`}
        >
          van.guido@hotmail.com
        </span>
        <span
          className={`${
            type === 'small'
              ? 'h-[1px] before:h-[1px]'
              : 'h-[5px] before:h-[10px]'
          } relative flex w-full transform-gpu overflow-hidden bg-white-100 before:absolute before:w-full before:origin-left before:scale-x-0 before:bg-background before:transition group-hover:before:scale-x-100`}
        />
      </button>
    </Tooltip>
  )
}

export default React.memo(Email)
