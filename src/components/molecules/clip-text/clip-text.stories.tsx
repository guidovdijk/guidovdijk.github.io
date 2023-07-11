import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { ClipText, IClipTextProps } from './index'

const meta: Meta<IClipTextProps> = {
  component: ClipText,
}

export default meta
type Story = StoryObj<IClipTextProps>

export const Default: Story = {
  render: () => (
    <div className="text-heading-xl font-semibold">
      <div className="h-screen" />
      <ClipText>This is the ClipText text</ClipText>
      <div className="h-screen" />
    </div>
  ),
}
