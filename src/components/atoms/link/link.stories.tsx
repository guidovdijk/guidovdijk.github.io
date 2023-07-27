import type { Meta, StoryObj } from '@storybook/react'

import { ILinkProps, Link } from './index'

const meta: Meta<ILinkProps> = {
  component: Link,
}

export default meta
type Story = StoryObj<ILinkProps>

export const Primary: Story = {
  args: {
    children: 'Link Title',
    iconName: 'linkedin',
  },
}
