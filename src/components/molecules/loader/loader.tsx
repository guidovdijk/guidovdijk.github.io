import * as React from 'react'

const LoaderSvg: React.FC<any> = ({ className }) => (
  <svg
    className="absolute"
    fill="none"
    viewBox="0 0 518 294"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      className="absolute origin-center -rotate-90"
      cx="259"
      cy="147"
      rx="145"
      ry="257"
      stroke="#393939"
    />
    <ellipse
      className={`absolute z-10 origin-center -rotate-90 ${className}`}
      cx="259"
      cy="147"
      rx="145"
      ry="257"
      stroke="#f1f1f1"
      strokeDasharray={1287.0380859375}
      strokeDashoffset={1287.0380859375}
    />
  </svg>
)

export interface ILoaderProps {
  children: React.ReactNode
  isFinished?: boolean
}

export const Loader: React.FC<ILoaderProps> = ({ children, isFinished }) => {
  console.log(isFinished)
  return (
    <div className="relative flex h-[290px] w-[514px] items-center justify-center">
      <p className="text-center text-callout font-extralight">{children}</p>
      <LoaderSvg className="animation-dash" />
    </div>
  )
}
