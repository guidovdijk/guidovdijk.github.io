import * as React from 'react'

export interface IEmailProps {
  onClick: () => void
}

export const Email: React.FC<IEmailProps> = ({
  onClick,
}) => (
  <button className="flex flex-col group gap-y-3" onClick={onClick} type="button">
    <span className="text-heading-xl font-semibold font-heading">van.guido@hotmail.com</span>
    <span className="transform-gpu w-full h-[5px] flex bg-white-100 relative before:scale-x-0 group-hover:before:scale-x-100 before:transition before:origin-left before:h-full before:w-full before:absolute before:bg-background" />
  </button>
)
