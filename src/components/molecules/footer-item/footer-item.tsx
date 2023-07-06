import { IconName } from '@/components/atoms/icon'
import { Link } from '@/components/atoms/link'
import * as React from 'react'

interface IFooterListItemProps {
  text: string
  icon: IconName
  href: string
}

export interface IFooterItemProps {
  title: string,
  items: IFooterListItemProps[]
}

export const FooterItem: React.FC<IFooterItemProps> = ({
  title,
  items,
}) => (
  <ul>
    <span className="text-subtitle uppercase text-white-500 block mb-4">{title}</span>
    {
      items.map((item) => (
        <li
          className="mb-6"
        >
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
      ))
    }
  </ul>
)
