import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { PageErrorSection } from './index'

const meta: Meta = {
  component: PageErrorSection,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <PageErrorSection error="404" title="Page not found" />
  ),
}
