import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Loader, ILoaderProps } from './index'

const meta: Meta<ILoaderProps> = {
  component: Loader,
}

export default meta
type Story = StoryObj<ILoaderProps>

export const Default: Story = {
  render: () => (
    <Loader isFinished>
      What are you looking for in<br />
      a front-end developer?
    </Loader>
  ),
}
