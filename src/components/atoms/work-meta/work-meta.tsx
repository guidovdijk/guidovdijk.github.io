import * as React from 'react'

export interface IWorkMetaProps {
  title: string,
  items: string[]
}

export const WorkMeta: React.FC<IWorkMetaProps> = ({
  title,
  items,
}) => (
  <ul className="flex flex-wrap">
    <span className="text-white-200/70 mb-2 w-full capitalize">{title}</span>
    {
      items.map((item, index) => <li key={`work-meta-${title}-${index}`} className="inline-block text-white-200 font-medium capitalize">{index > 0 && ', '}{item}</li>)
    }
  </ul>
)
