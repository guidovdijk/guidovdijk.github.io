'use client'

import React from 'react'

import { Divider } from '@/components/molecules/divider'
import { AboutMe } from '@/components/organisms/about-me'
import { CTASection } from '@/components/organisms/cta-section'
import { WorkSection } from '@/components/organisms/work-section'
import { Container } from '@/components/atoms/grid'
import { HomeHero } from '@/components/organisms/home-hero'

export default function Home() {
  return (
    <>
      <HomeHero className="sm:mb-48" />
      <Container as="main" className="px-4 lg:px-12">
        <CTASection className="mb-28" />
        <Divider className="mb-24" />
        <WorkSection className="mb-44" />
        <AboutMe className="mb-28" />
      </Container>
    </>
  )
}
