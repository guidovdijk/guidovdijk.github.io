import * as React from 'react'

import { ISocialItemProps } from '@/helpers/constants/social-data'

import { Link } from '@/components/atoms/link'

export interface IFooterItemProps {
  title: string
  items: ISocialItemProps[]
}

export const FooterItem: React.FC<IFooterItemProps> = ({ title, items }) => (
  <ul className="flex flex-col gap-y-6">
    <span className="-mb-2 block text-subtitle uppercase text-white-500">
      {title}
    </span>
    {items.map((item, index) => (
      <li key={`footer-item-${index}`}>
        <Link
          key={`footer-item-${item.text}`}
          className="capitalize"
          href={item.href}
          iconName={item.icon}
          target="_blank"
        >
          {item.text}
        </Link>
      </li>
    ))}
  </ul>
)
