import type { Meta, StoryObj } from '@storybook/react'

import { IIconButtonProps, IconButton } from './index'

const meta: Meta<IIconButtonProps> = {
  component: IconButton,
}

export default meta
type Story = StoryObj<IIconButtonProps>

export const Primary: Story = {
  args: {
    name: 'fullscreen',
  },
}
