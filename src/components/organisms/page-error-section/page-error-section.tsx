import * as React from 'react'

import { Button } from '@/components/atoms/button'
import { HomeHero } from '../home-hero'

export interface IPageErrorSectionProps {
  title: React.ReactNode,
  error: string
}

export const PageErrorSection: React.FC<IPageErrorSectionProps> = ({
  title,
  error,
  ...props
}) => (
  <HomeHero {...props}>
    <div className="flex flex-col w-full items-center text-center">
      <h2 className="text-heading-s">{title}</h2>
      <h1 className="text-heading-3-xl">{error}</h1>
      <Button onClick={() => { }} variation="secondary">Return to home</Button>
    </div>
  </HomeHero>
)
