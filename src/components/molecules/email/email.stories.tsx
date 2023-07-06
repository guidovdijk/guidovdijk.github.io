import type { Meta, StoryObj } from '@storybook/react'
import { Email, IEmailProps } from './index'

const meta: Meta<IEmailProps> = {
  component: Email,
}

export default meta
type Story = StoryObj<IEmailProps>

export const Default: Story = {
  args: {},
}
