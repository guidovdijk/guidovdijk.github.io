import React, { Children } from 'react'
import { ImageProps } from 'next/image'

export interface IImageGridProps {
  children: React.ReactElement<ImageProps>[]
  autoFill?: boolean
}

export const ImageGrid: React.FC<IImageGridProps> = ({
  children,
  autoFill = true,
}) => {
  const childArr = Children.toArray(children)
  const colSize = 12 / childArr.length

  return (
    <div className="image-grid rounded bg-black-300 p-4 lg:p-6 relative justify-center grid grid-cols-12 gap-10">
      {
        React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child
          const fullColNr = `${index === childArr.length - 1 && index % 2 === 0 ? '12' : '6'}`
          const fullWidthCol = autoFill ? `lg:col-span-${fullColNr}` : 'lg:col-span-6'

          return React.cloneElement(child, {
            ...child.props,
            className: `xl:col-span-${colSize} ${fullWidthCol} col-span-12`,
          })
        })
      }
    </div>
  )
}
