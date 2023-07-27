import * as React from 'react'

import { workData } from '@/helpers/constants/work-data'

import { Button } from '@/components/atoms/button'
import { List } from '@/components/atoms/list'
import { Card } from '@/components/molecules/card'

interface IWorkSectionProps extends React.HTMLAttributes<HTMLElement> {}

export const WorkSection: React.FC<IWorkSectionProps> = ({ ...props }) => (
  <section {...props}>
    <p className="mb-4 text-subtitle uppercase text-white-500">
      Selected work ({workData.length})
    </p>
    <div className="mb-11 flex flex-col gap-y-4 lg:gap-y-0">
      {workData.map((workItem) => (
        <Card key={`work-section-${workItem.index}`} {...workItem} />
      ))}
    </div>
    <div className="flex flex-col gap-y-2 lg:pl-12">
      <p className="text-body font-normal">Want to see more?</p>
      <List className="flex flex-row md:flex-col">
        <Button
          href="https://github.com/guidovdijk"
          target="_blank"
          variation="secondary"
        >
          Checkout my GitHub
        </Button>
        <Button href="/playground" variation="secondary">
          See the playground
        </Button>
      </List>
    </div>
  </section>
)
