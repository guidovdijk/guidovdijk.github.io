import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import { WorkHero, IWorkHeroProps } from './index'

const meta: Meta<IWorkHeroProps> = {
  component: WorkHero,
}

export default meta
type Story = StoryObj<IWorkHeroProps>

export const Default: Story = {
  render: () => (
    <>
      <div className="h-screen" />

      <WorkHero
        className="bg-green"
      >
        <Image
          alt="Logo of the tournament dashboard"
          height={150}
          src="images/logos/currycrew.svg"
          width={160}
        />
      </WorkHero>

      <div className="h-screen" />
    </>
  ),
}
