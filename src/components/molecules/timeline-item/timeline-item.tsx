import * as React from 'react'

import { Icon } from '@/components/atoms/icon'

export interface ITimeLineItemProps {
  date: string
  company: string
  title: string
}

export const TimeLineItem: React.FC<ITimeLineItemProps> = ({
  date,
  company,
  title,
}) => (
  <li className="relative flex flex-col pl-8">
    <div className="flex items-center">
      <Icon
        className="absolute left-0 inline-flex drop-shadow-icon"
        name="triangle"
      />
      <span className="text-body-s text-white-300">{date}</span>
    </div>
    <span className="mb-1 text-body font-medium">{title}</span>
    <span className="text-body-s">{company}</span>
  </li>
)
