import type { Meta, StoryObj } from '@storybook/react'
import { FooterItem, IFooterItemProps } from './index'

const meta: Meta<IFooterItemProps> = {
  component: FooterItem,
}

export default meta
type Story = StoryObj<IFooterItemProps>

export const Default: Story = {
  args: {
    title: 'socials:',
    items: [
      {
        text: 'LinkedIn',
        icon: 'linkedin',
        href: '#',
      },
      {
        text: 'GitHub',
        icon: 'github',
        href: '#',
      },
      {
        text: 'Email',
        icon: 'email',
        href: '#',
      },
      {
        text: 'Instagram',
        icon: 'instagram',
        href: '#',
      },
    ],
  },
}
