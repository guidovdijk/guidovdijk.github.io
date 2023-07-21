import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from './index'

const meta: Meta = {
  component: Divider,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <>
      <div className="h-screen" />
      <Divider />
      <div className="h-screen" />
    </>
  ),
}
