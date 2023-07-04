import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Card, ICardProps } from './index'

const meta: Meta<ICardProps> = {
  component: Card,
}

export default meta
type Story = StoryObj<ICardProps>

export const Default: Story = {
  render: () => (
    <Card
      className="hover:bg-red"
      description="Some of the work I have done during my four years as a front-end developer."
      image={{
        src: '/images/thevalley.svg',
        alt: 'The valley',
        width: 175,
        height: 68,
      }}
      index={0}
      subjects={['UX', 'Front-end Dev']}
      url="https://github.com/guidovdijk"
    />
  ),
}
