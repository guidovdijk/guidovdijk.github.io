import { Icon } from '@/components/atoms/icon'
import * as React from 'react'

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
  <li className="pl-8 relative flex flex-col">
    <div className="flex items-center">
      <Icon className="drop-shadow-icon inline-flex absolute left-0" name="triangle" />
      <span className="text-body-s text-white-300">{date}</span>
    </div>
    <span className="text-body font-medium mb-1">{title}</span>
    <span className="text-body-s">{company}</span>
  </li>
)
