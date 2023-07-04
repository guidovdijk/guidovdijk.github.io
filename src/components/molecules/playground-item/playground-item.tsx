import { IconButton } from '@/components/atoms/icon-button'
import Image, { ImageProps } from 'next/image'
import * as React from 'react'

export interface IPlaygroundItemProps {
  image: ImageProps
  description: string
  onClick: () => void
}

export const PlaygroundItem: React.FC<IPlaygroundItemProps> = ({
  image,
  description,
  onClick,
  ...props
}) => (
  <article className="col-span-4 flex relative aspect-[9/14] overflow-hidden rounded border-16 transition-all group hover:border-none border-black-200" {...props}>
    <Image
      {...image}
    />
    <div className="bg-black group-hover:opacity-100 transition-all flex z-10 gap-x-6 p-6 items-end opacity-0">
      <p className="text-body-s">{description}</p>
      <IconButton className="shrink-0" name="fullscreen" onClick={onClick} />
    </div>
  </article>
)
