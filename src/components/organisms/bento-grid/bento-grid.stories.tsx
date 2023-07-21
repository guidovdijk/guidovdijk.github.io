import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { PlaygroundItem } from '@/components/molecules/playground-item'

import { BentoGrid } from './bento-grid'

const meta: Meta = {
  component: BentoGrid,
}

export default meta
type Story = StoryObj

const Item: React.FC<any> = ({ className }) => (
  <PlaygroundItem
    className={className}
    description="Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
    image={{
      src: '/images/playground/stad-als-spel-stonithe.webp',
      alt: 'A brown rock monster with glowing eyes',
      fill: true,
      style: {
        objectFit: 'cover',
      },
    }}
    onClick={() => console.log('clicked')}
  />
)

export const Default: Story = {
  render: () => (
    <div className="container mx-auto px-2 md:px-12">
      <BentoGrid>
        {[4, 3, 4, 3, 4, 3, 3, 2].map((height, index) => (
          <Item key={index} className={`h-full row-span-${height}`} />
        ))}
      </BentoGrid>
    </div>
  ),
}
