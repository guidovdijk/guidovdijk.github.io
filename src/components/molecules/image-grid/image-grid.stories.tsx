import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import { ImageGrid } from './index'

const meta: Meta = {
  component: ImageGrid,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ImageGrid autoFill={false}>
      <Image
        alt="Dashboard where users can check their win ratio and match history"
        fill
        src="images/work/tournament/dashboard_home.webp"
      />
      <Image
        alt="Dashboard where users can check their win ratio and match history"
        fill
        src="images/work/tournament/dashboard_home.webp"
      />
      <Image
        alt="Dashboard where users can check their win ratio and match history"
        fill
        src="images/work/tournament/dashboard_home.webp"
      />
    </ImageGrid>
  ),
}
