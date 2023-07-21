import * as React from 'react'

export interface ILocationInfoProps {
  className?: string
  children: string
}

export const LocationInfo: React.FC<ILocationInfoProps> = ({
  children,
  className = '',
  ...props
}) => (
  <div {...props} className={`flex flex-row gap-x-3 ${className}`}>
    <div className="mt-1.5 h-[1px] w-full bg-white-200" />
    <p className="w-32 shrink-0 text-subtitle uppercase text-white-500">
      {children}
    </p>
  </div>
)
