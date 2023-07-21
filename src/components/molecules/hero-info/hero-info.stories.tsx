import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { HeroInfo } from './index'

const meta: Meta = {
  component: HeroInfo,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <>
      <HeroInfo />
      <div className="h-screen" />
    </>
  ),
}
