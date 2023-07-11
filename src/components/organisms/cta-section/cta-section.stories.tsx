import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { CTASection } from './index'

const meta: Meta = {
  component: CTASection,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="container mx-auto px-2 lg:px-12">
      <div className="h-screen" />
      <CTASection />
      <div className="h-screen" />
    </div>
  ),
}
