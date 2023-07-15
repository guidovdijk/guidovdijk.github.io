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
  const [isVisible, setIsVisible] = React.useState(false)

  const handleState = () => {
    setIsVisible(true)

    setTimeout(() => {
      console.log('clicked')
      setIsVisible(false)
    }, 5000)
  }
  return (
    <div className="p-8 flex">
      <Tooltip
        className="lg:hover:bg-red"
        isVisible={isVisible}
        text="Tooltip text"
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
