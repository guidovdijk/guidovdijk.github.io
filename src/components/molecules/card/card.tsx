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
  <article {...props} className={`rounded border-b border-black-200 lg:h-[118px] gap-x-14 lg:hover:h-[148px] lg:pl-14 lg:pr-10 px-4 lg:pb-0 pb-4 group/card flex flex-col lg:flex-row lg:items-center ${className}`}>
    <div className="lg:flex shrink-0 gap-x-4 mb-4 lg:mb-0">
      <span className="font-normal lg:group-hover/card:text-heading-l lg:group-hover/card:-translate-y-1">0{index}</span>
      <h3 className="lg:group-hover/card:hidden"><Image {...image} /></h3>
    </div>
    <p className="max-w-md lg:hidden group-hover/card:block mb-8 lg:mb-0">{description}</p>
    <div className="lg:ml-auto h-full lg:group-hover/card:py-5 justify-between flex shrink-0 items-center md:gap-x-10">
      <ul className="flex items-center">
        {
          subjects.map((subject, i) => (
            <li key={`card-${index}-${i}`} className="inline-flex items-center text-white-200 font-medium capitalize">
              {i > 0 && <span className="w-1 h-1 mx-4 bg-white-200 rounded-full" />}{subject}
            </li>
          ))
        }
      </ul>
      <div className="bg-black-200 lg:group-hover/card:bg-white-200/20 w-[1px] h-full" />
      <Link href={url}>GitHub</Link>
    </div>
  </article>
)
