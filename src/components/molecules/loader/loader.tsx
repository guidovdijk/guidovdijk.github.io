import * as React from 'react'

const LoaderSvg: React.FC<any> = ({ className }) => (
  <svg className="absolute" fill="none" viewBox="0 0 518 294" xmlns="http://www.w3.org/2000/svg">
    <ellipse className="-rotate-90 origin-center absolute" cx="259" cy="147" rx="145" ry="257" stroke="#393939" />
    <ellipse className={`-rotate-90 origin-center absolute z-10 ${className}`} cx="259" cy="147" rx="145" ry="257" stroke="#f1f1f1" strokeDasharray={1287.0380859375} strokeDashoffset={1287.0380859375} />
  </svg>
)

export interface ILoaderProps {
  children: React.ReactNode
  isFinished?: boolean
}

export const Loader: React.FC<ILoaderProps> = ({
  children,
  isFinished,
}) => {
  console.log(isFinished)
  return (
    <div className="flex items-center justify-center relative w-[514px] h-[290px]">
      <p className="text-callout text-center font-extralight">{children}</p>
      <LoaderSvg className="animation-dash" />
    </div>
  )
}
