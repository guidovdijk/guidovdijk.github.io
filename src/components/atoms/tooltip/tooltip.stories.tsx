import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Tooltip } from './index'

const meta: Meta = {
  component: Tooltip,
}

export default meta
type Story = StoryObj

const Component: React.FC = () => {
  const [tooltipText, setTooltipText] = React.useState('click to copy')

  const handleState = () => {
    setTooltipText('Copied!')
  }

  return (
    <div className="flex p-8">
      <Tooltip
        animationEndHandler={() => {
          setTooltipText('click to copy')
        }}
        text={tooltipText}
      >
        <Button onClick={handleState} variation="secondary">
          Button Text
        </Button>
      </Tooltip>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <div>
      <Component />
    </div>
  ),
}
