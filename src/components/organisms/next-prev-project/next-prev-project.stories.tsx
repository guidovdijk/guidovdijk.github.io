import * as React from 'react'

import { workData } from '@/helpers/constants/work-data'
import type { Meta, StoryObj } from '@storybook/react'

import { INextPrevProjectProps, NextPrevProject } from './index'

const meta: Meta<INextPrevProjectProps> = {
  component: NextPrevProject,
}

export default meta
type Story = StoryObj<INextPrevProjectProps>

const next = workData[1]
const prev = workData[0]

export const Default: Story = {
  render: () => <NextPrevProject next={next} prev={prev} />,
}
