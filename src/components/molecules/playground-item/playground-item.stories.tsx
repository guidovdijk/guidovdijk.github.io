import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Col, Grid } from '@/components/atoms/grid'

import { IPlaygroundItemProps, PlaygroundItem } from './index'

const meta: Meta<IPlaygroundItemProps> = {
  component: PlaygroundItem,
}

export default meta
type Story = StoryObj<IPlaygroundItemProps>

export const Default: Story = {
  render: () => (
    <Grid>
      <Col span={12}>
        <PlaygroundItem
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
      </Col>
    </Grid>
  ),
}
