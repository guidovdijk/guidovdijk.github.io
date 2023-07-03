import type { Meta, StoryObj } from '@storybook/react'
import { Icon, IIconProps } from './index'

const meta: Meta<IIconProps> = {
  component: Icon,
}

export default meta
type Story = StoryObj<IIconProps>

export const Primary: Story = {
  args: {
    name: 'fullscreen',
    className: 'text-white-200',
  },
}
