import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from './index'

const meta: Meta = {
  component: Footer,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <Footer />,
}
