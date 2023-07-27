import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Navigation } from './index'

const meta: Meta = {
  component: Navigation,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <>
      <Navigation />
      <div className="h-screen" />
      <div className="h-screen" />
    </>
  ),
}
