import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { CompanyRow } from './index'

const meta: Meta = {
  component: CompanyRow,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <CompanyRow />,
}
