import * as React from 'react'

export interface IListProps {
  title: string,
  items: string[]
  className?: string
}

export const List: React.FC<IListProps> = ({
  title,
  items,
  className = '',
  ...props
}) => (
  <div>
    {
      title
      && (
        <span className="text-body-s font-base capitalize font-normal mb-2 text-white-200/70 block">
          {title}
        </span>
      )
    }
    <ul className={`items-center flex text-white-200 ${className}`} {...props}>
      {
        items.map((item, i) => (
          <li key={`card-${title}-${i}`} className="inline-flex items-center font-medium capitalize">
            {i > 0 && <span className="w-1 h-1 mx-4 bg-white-200 rounded-full" />}{item}
          </li>
        ))
      }
    </ul>
  </div>
)
