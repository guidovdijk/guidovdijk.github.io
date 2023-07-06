import type { Meta, StoryObj } from '@storybook/react'
import { List, IListProps } from './index'

const meta: Meta<IListProps> = {
  component: List,
}

export default meta
type Story = StoryObj<IListProps>

export const Primary: Story = {
  args: {
    title: 'made with:',
    items: [
      'JavaScript',
      'Vue',
      'MongoDB',
    ],
  },
}
