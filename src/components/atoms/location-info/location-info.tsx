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
  <div {...props} className={`flex gap-x-3 flex-row ${className}`}>
    <div className="w-full mt-1.5 h-[1px] bg-white-200" />
    <p className="shrink-0 w-32 text-subtitle uppercase text-white-500">
      {children}
    </p>
  </div>
)
