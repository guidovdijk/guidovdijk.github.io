import * as React from 'react'

const LoaderSvg: React.FC<any> = ({
  color,
  animation,
  strokeOffsetArray,
  ...props
}) => (
  <svg {...props} fill="none" viewBox="0 0 514 290" xmlns="http://www.w3.org/2000/svg">
    <ellipse className={`-rotate-90 origin-center ${animation}`} cx="257" cy="145" rx="145" ry="257" stroke={color} strokeDasharray={1287.0380859375} strokeDashoffset={strokeOffsetArray} />
  </svg>
)

export interface ILoaderProps {
  children: React.ReactNode
  isFinished: boolean
}

export const Loader: React.FC<ILoaderProps> = ({
  children,
  isFinished,
}) => (
  <div className="flex items-center justify-center relative  w-[514px] h-[290px]">
    <p className="text-callout text-center font-extralight">{children}</p>
    <LoaderSvg animation="animation-dash" className="absolute z-10" color="#f1f1f1" strokeOffsetArray={1287.0380859375} />
    <LoaderSvg className="absolute" color="#393939" />
  </div>
)
