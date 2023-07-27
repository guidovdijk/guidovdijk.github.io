import * as React from 'react'

export interface IWorkMetaProps {
  title: string
  items: string[]
}

export const WorkMeta: React.FC<IWorkMetaProps> = ({ title, items }) => (
  <ul className="flex flex-wrap">
    <span className="mb-2 w-full capitalize text-white-200/70">{title}</span>
    {items.map((item, index) => (
      <li
        key={`work-meta-${title}-${index}`}
        className="inline-block font-medium capitalize text-white-200"
      >
        {index > 0 && ', '}
        {item}
      </li>
    ))}
  </ul>
)
