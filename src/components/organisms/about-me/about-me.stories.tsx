import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { AboutMe } from './index'

const meta: Meta = {
  component: AboutMe,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="container mx-auto px-2 md:px-12">
      <AboutMe />
    </div>
  ),
}
