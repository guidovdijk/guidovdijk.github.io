import * as React from 'react'

import Image, { ImageProps } from 'next/image'

import { IconButton } from '@/components/atoms/icon-button'

export interface IPlaygroundItemProps {
  image: ImageProps
  description: string
  className?: string
  onClick: () => void
}

export const PlaygroundItem: React.FC<IPlaygroundItemProps> = ({
  image,
  description,
  className = '',
  onClick,
  ...props
}) => (
  <article
    className={`group relative col-span-12 flex aspect-[9/14] w-full overflow-hidden rounded md:col-span-6 lg:col-span-4 ${className}`}
    {...props}
  >
    <Image {...image} className="transition-all group-hover:scale-110" />
    <div className="z-10 flex items-end gap-x-6 bg-black p-6 opacity-0 transition-all group-hover:opacity-100">
      <p className="text-body-s">{description}</p>
      <IconButton className="shrink-0" name="fullscreen" onClick={onClick} />
    </div>
  </article>
)
