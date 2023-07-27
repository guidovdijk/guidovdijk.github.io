import * as React from 'react'
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { useScroll } from '@/hooks/use-scroll'

import { HeroSocialList, IHeroSocialListProps } from './index'

const meta: Meta<IHeroSocialListProps> = {
  component: HeroSocialList,
}

export default meta
type Story = StoryObj<IHeroSocialListProps>

const Component: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useScroll(({ y }) => {
    const hasScrolledDown = y < 100

    const shouldBeVisible = hasScrolledDown
    setIsVisible(shouldBeVisible)
  })

  return <HeroSocialList isVisible={isVisible} />
}

export const Default: Story = {
  render: () => (
    <>
      <div className="relative flex h-screen items-end overflow-hidden px-4 pb-6 pt-20 sm:px-12 sm:pb-14">
        <Component />
      </div>
      <div className="h-screen" />
    </>
  ),
}
