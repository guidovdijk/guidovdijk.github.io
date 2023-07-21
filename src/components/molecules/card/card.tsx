import * as React from 'react'

import Image, { ImageProps } from 'next/image'
import NLink from 'next/link'

import { Link } from '@/components/atoms/link'

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
  <article
    {...props}
    className={`group/card flex flex-col rounded border-b border-black-200 px-4 pb-4 transition-all lg:flex-row lg:items-center lg:pb-0 lg:pl-14 lg:pr-10 ${className}`}
  >
    <NLink
      className="flex flex-grow flex-col transition-all lg:h-[118px] lg:flex-row lg:items-center lg:group-hover/card:h-[148px]"
      href={href}
    >
      <div className="mb-6 shrink-0 gap-x-4 lg:mb-0 lg:flex">
        <span className="font-normal lg:group-hover/card:mr-4 lg:group-hover/card:text-heading-l xl:group-hover/card:mr-14">
          {`0${index}`}
        </span>
        <h3 className="lg:group-hover/card:hidden">
          <Image {...image} />
        </h3>
      </div>
      <p className="mb-8 max-w-md group-hover/card:block lg:mb-0 lg:hidden">
        {description}
      </p>
      <ul className="ml-auto flex shrink-0 items-center">
        {subjects.map((subject, i) => (
          <li
            key={`card-${index}-${i}`}
            className="inline-flex items-center font-medium capitalize text-white-200"
          >
            {i > 0 && (
              <span className="mx-4 h-1 w-1 rounded-full bg-white-200" />
            )}
            {subject}
          </li>
        ))}
      </ul>
    </NLink>
    <div className="h-full lg:h-[118px]">
      <div className="h-full w-[0.5px] bg-black-200 md:mx-10 lg:group-hover/card:bg-white-200/20" />
    </div>
    {url ? (
      <Link
        className="-mt-6 w-full max-w-[50px] flex-row-reverse self-start lg:mt-0 lg:self-center"
        href={url}
      >
        GitHub
      </Link>
    ) : (
      <span className="-mt-6 w-full max-w-[50px] self-start text-center lg:mt-0 lg:self-center">
        -
      </span>
    )}
  </article>
)
