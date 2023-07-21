import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { WorkSection } from './index'

const meta: Meta = {
  component: WorkSection,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <WorkSection />,
}
