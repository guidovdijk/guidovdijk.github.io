import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './index'
import { Button } from '../button'

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
    <div className="p-8 flex">
      <Tooltip
        animationEndHandler={() => { setTooltipText('click to copy') }}
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
