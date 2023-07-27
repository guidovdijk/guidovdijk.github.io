import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Email, IEmailProps } from './index'

const meta: Meta<IEmailProps> = {
  component: Email,
}

export default meta
type Story = StoryObj<IEmailProps>

export const Large: Story = {
  render: () => (
    <div className="flex p-12">
      <Email />
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <div className="flex p-12">
      <Email type="small" />
    </div>
  ),
}
