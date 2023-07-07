import type { Meta, StoryObj } from '@storybook/react'
import { NavigationItem, INavigationItemProps } from './index'

const meta: Meta<INavigationItemProps> = {
  component: NavigationItem,
}

export default meta
type Story = StoryObj<INavigationItemProps>

export const Default: Story = {
  args: {
    children: 'Item Text',
    href: '#',
    className: '',
    isActive: true,
  },
}
