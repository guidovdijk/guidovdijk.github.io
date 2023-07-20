import { Link } from '@/components/atoms/link'
import NLink from 'next/link'
import Image, { ImageProps } from 'next/image'
import * as React from 'react'

export interface ICardProps {
  index: number
  image: ImageProps
  description: string
  subjects: string[]
  href: string
  url?: string
  className?: string
}

export const Card: React.FC<ICardProps> = ({
  index,
  image,
  description,
  subjects,
  url,
  href,
  className = '',
  ...props
}) => (
  <article {...props} className={`rounded transition-all border-b border-black-200 lg:h-[118px] lg:hover:h-[148px] lg:pl-14 lg:pr-10 px-4 lg:pb-0 pb-4 group/card flex flex-col lg:flex-row lg:items-center ${className}`}>
    <NLink className="flex flex-col lg:flex-row flex-grow lg:items-center" href={href}>
      <div className="lg:flex shrink-0 gap-x-4 mb-6 lg:mb-0">
        <span className="xl:group-hover/card:mr-14 lg:group-hover/card:mr-4 font-normal transition-all lg:group-hover/card:text-heading-l">
          {`0${index}`}
        </span>
        <h3 className="lg:group-hover/card:hidden"><Image {...image} /></h3>
      </div>
      <p className="max-w-md lg:hidden group-hover/card:block mb-8 lg:mb-0">{description}</p>
      <ul className="flex shrink-0 items-center ml-auto">
        {
          subjects.map((subject, i) => (
            <li key={`card-${index}-${i}`} className="inline-flex items-center text-white-200 font-medium capitalize">
              {i > 0 && <span className="w-1 h-1 mx-4 bg-white-200 rounded-full" />}{subject}
            </li>
          ))
        }
      </ul>
    </NLink>
    <div className="lg:group-hover/card:py-5 h-full">
      <div className="bg-black-200 lg:group-hover/card:bg-white-200/20 md:mx-10 w-[1px] h-full" />
    </div>
    {
      url
        ? (
          <Link
            className="flex-row-reverse max-w-[50px] w-full -mt-6 lg:mt-0 self-start lg:self-center"
            href={url}
          >
            GitHub
          </Link>
        )
        : <span className="max-w-[50px] w-full text-center -mt-6 lg:mt-0 self-start lg:self-center">-</span>
    }
  </article>
)
