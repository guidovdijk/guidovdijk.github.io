import { Link } from '@/components/atoms/link'
import Image, { ImageProps } from 'next/image'
import * as React from 'react'

export interface ICardProps {
  index: number
  image: ImageProps
  description: string
  subjects: string[]
  url?: string
  className?: string
}

export const Card: React.FC<ICardProps> = ({
  index,
  image,
  description,
  subjects,
  url,
  className = '',
  ...props
}) => (
  <article {...props} className={`rounded border-b border-black-200 h-[118px] gap-x-14 hover:h-[148px] pl-14 pr-10 group/card flex items-center ${className}`}>
    <div className="flex shrink-0 gap-x-4">
      <span className="font-normal group-hover/card:text-heading-l group-hover/card:-translate-y-1">0{index}</span>
      <h3 className="group-hover/card:hidden"><Image {...image} /></h3>
    </div>
    <p className="max-w-md hidden group-hover/card:block">{description}</p>
    <div className="ml-auto flex shrink-0 items-center gap-x-10">
      <ul className="flex items-center">
        {
          subjects.map((subject, i) => (
            <li key={`card-${index}-${i}`} className="inline-flex items-center text-white-200 font-medium capitalize">
              {i > 0 && <span className="w-1 h-1 mx-4 bg-white-200 rounded-full" />}{subject}
            </li>
          ))
        }
      </ul>
      <div className="bg-black-200 w-[1px]" />
      <Link href={url}>GitHub</Link>
    </div>
  </article>
)
