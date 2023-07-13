import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Blob } from './index'

const meta: Meta = {
  component: Blob,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <>
      <div className="h-screen">
        <h2 className="text-heading-xl font-semibold">
          Start
        </h2>
      </div>
      <Blob />
      <div className="h-screen">
        <h2 className="text-heading-xl font-semibold">
          End
        </h2>
      </div>
    </>
  ),
}
