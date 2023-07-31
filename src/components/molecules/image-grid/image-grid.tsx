import React, { Children } from 'react'

import { ImageProps } from 'next/image'

export interface IImageGridProps {
  children: React.ReactElement<ImageProps>[] | React.ReactElement<ImageProps>
  autoFill?: boolean
}

const ImageGrid: React.FC<IImageGridProps> = ({
  children,
  autoFill = true,
}) => {
  const childArr = Children.toArray(children)
  const colSize = autoFill ? 12 / childArr.length - 1 : 12 / childArr.length

  return (
    <div className="image-grid relative flex grid-cols-12 flex-col justify-center gap-y-6 rounded bg-black-400 p-4 sm:grid sm:flex-none sm:gap-10 lg:p-6">
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child
        const fullColNr = `${
          index === childArr.length - 1 && index % 2 === 0 ? '12' : '6'
        }`
        const fullWidthCol = autoFill
          ? `lg:col-span-${fullColNr}`
          : `lg:col-span-${colSize}`

        return React.cloneElement(child, {
          ...child.props,
          className: `${fullWidthCol} col-span-12`,
        })
      })}
    </div>
  )
}

export default React.memo(ImageGrid)
