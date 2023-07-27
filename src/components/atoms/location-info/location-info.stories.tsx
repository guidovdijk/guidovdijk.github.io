import type { Meta, StoryObj } from '@storybook/react'

import { ILocationInfoProps, LocationInfo } from './index'

const meta: Meta<ILocationInfoProps> = {
  component: LocationInfo,
}

export default meta
type Story = StoryObj<ILocationInfoProps>

export const Primary: Story = {
  args: {
    children: 'located in the netherlands',
  },
}
