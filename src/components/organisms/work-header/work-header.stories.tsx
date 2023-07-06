import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { WorkHeader, IWorkHeaderProps } from './index'

const meta: Meta<IWorkHeaderProps> = {
  component: WorkHeader,
}

export default meta
type Story = StoryObj<IWorkHeaderProps>

export const Default: Story = {
  render: () => (
    <WorkHeader
      dates={['July - 2020']}
      index={3}
      roles={['Designer', 'Developer']}
      subjects={['JavaScript', 'Vue', 'MongoDB']}
      subtitle="Curry Crew"
      title="Tournament Dashboard"
    />
  ),
}
