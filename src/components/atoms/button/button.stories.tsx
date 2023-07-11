import type { Meta, StoryObj } from '@storybook/react'
import { Button, IButtonProps } from './index'

const meta: Meta<IButtonProps> = {
  component: Button,
}

export default meta
type Story = StoryObj<IButtonProps>

export const Primary: Story = {
  args: {
    children: 'Button Title',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variation: 'secondary',
  },
}

export const Teritairy: Story = {
  args: {
    ...Primary.args,
    variation: 'tertiary',
  },
}
