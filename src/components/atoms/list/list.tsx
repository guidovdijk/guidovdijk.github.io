import * as React from 'react'

export interface IListProps {
  title?: string,
  items?: string[]
  className?: string
  children?: any
}

export const List: React.FC<IListProps> = ({
  title,
  items = null,
  children = null,
  className = '',
  ...props
}) => (
  <div className={className}>
    {
      title
      && (
        <span className="text-body-s font-base capitalize font-normal mb-2 text-white-200/70 block">
          {title}
        </span>
      )
    }
    <ul className="items-center flex text-white-200" {...props}>
      {
        items && items.map((item, i) => (
          <li key={`card-${title}-${i}`} className="inline-flex items-center font-medium capitalize">
            {i > 0 && <span className="w-1 h-1 mx-4 bg-white-200 rounded-full" />}{item}
          </li>
        ))
      }
      {
        children && React.Children.map(children, (child, i) => (
          <li key={`card-${title}-${i}`} className="inline-flex items-center font-medium capitalize">
            {i > 0 && <span className="w-1 h-1 mx-4 bg-white-200 rounded-full" />}{child}
          </li>
        ))
      }
    </ul>
  </div>
)
