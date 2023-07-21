import type { Meta, StoryObj } from '@storybook/react'

import { IWorkMetaProps, WorkMeta } from './index'

const meta: Meta<IWorkMetaProps> = {
  component: WorkMeta,
}

export default meta
type Story = StoryObj<IWorkMetaProps>

export const Primary: Story = {
  args: {
    title: 'Made With',
    items: ['JavaScript', 'Vue', 'MongoDB'],
  },
}
