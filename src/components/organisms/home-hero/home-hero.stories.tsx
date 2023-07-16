import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { HomeHero } from './index'

const meta: Meta = {
  component: HomeHero,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <>
      <HomeHero>test</HomeHero>
      <div className="h-screen" />
    </>
  ),
}
