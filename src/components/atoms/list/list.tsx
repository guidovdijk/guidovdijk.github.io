import * as React from 'react'

export interface IListProps {
  title?: string
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
    {title && (
      <span className="mb-2 block font-base text-body-s font-normal capitalize text-white-200/70">
        {title}
      </span>
    )}
    <ul className="flex items-center text-white-200" {...props}>
      {items &&
        items.map((item, i) => (
          <li
            key={`card-${title}-${i}`}
            className="inline-flex items-center font-medium capitalize"
          >
            {i > 0 && (
              <span className="mx-4 h-1 w-1 rounded-full bg-white-200" />
            )}
            {item}
          </li>
        ))}
      {children &&
        React.Children.map(children, (child, i) => (
          <li
            key={`card-${title}-${i}`}
            className="inline-flex items-center font-medium capitalize"
          >
            {i > 0 && (
              <span className="mx-4 h-1 w-1 rounded-full bg-white-200" />
            )}
            {child}
          </li>
        ))}
    </ul>
  </div>
)
