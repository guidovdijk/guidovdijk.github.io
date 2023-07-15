import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { HeroSocialLink, IHeroSocialLinkProps } from './index'

const meta: Meta<IHeroSocialLinkProps> = {
  component: HeroSocialLink,
}

export default meta
type Story = StoryObj<IHeroSocialLinkProps>

export const Default: Story = {
  render: () => (
    <div className="flex justify-end">
      <HeroSocialLink iconName="linkedin">LinkedIn</HeroSocialLink>
    </div>
  ),
}
