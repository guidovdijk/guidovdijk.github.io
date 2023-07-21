import * as React from 'react'

import { workData } from '@/helpers/constants/work-data'

import { Card } from '@/components/molecules/card'
import { List } from '@/components/atoms/list'
import { Button } from '@/components/atoms/button'

interface IWorkSectionProps extends React.HTMLAttributes<HTMLElement> { }

export const WorkSection: React.FC<IWorkSectionProps> = ({ ...props }) => (
  <section {...props}>
    <p className="text-subtitle uppercase text-white-500 mb-4">Selected work ({workData.length})</p>
    <div className="flex flex-col gap-y-4 lg:gap-y-0 mb-11">
      {
        workData.map((workItem) => (
          <Card
            key={`work-section-${workItem.index}`}
            {...workItem}
          />
        ))
      }
    </div>
    <div className="lg:pl-12 flex flex-col gap-y-2">
      <p className="text-body">Want to see more?</p>
      <List className="flex flex-row md:flex-col">
        <Button href="https://github.com/guidovdijk" target="_blank" variation="secondary">Checkout my GitHub</Button>
        <Button href="/playground" variation="secondary">See the playground</Button>
      </List>
    </div>
  </section>
)
