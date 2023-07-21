import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { ITimeLineItemProps, TimeLineItem } from './index'

const meta: Meta<ITimeLineItemProps> = {
  component: TimeLineItem,
}

export default meta
type Story = StoryObj<ITimeLineItemProps>

export const Default: Story = {
  render: () => (
    <ol className="flex flex-col gap-y-24">
      <TimeLineItem
        company="Nexttail"
        date="1 Dec - 1 Jan | 2016 - 2017"
        title="Graphic designer"
      />
      <TimeLineItem
        company="Nexttail"
        date="1 Dec - 1 Jan | 2016 - 2017"
        title="Graphic designer"
      />
    </ol>
  ),
}
