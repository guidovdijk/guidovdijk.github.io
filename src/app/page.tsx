'use client'

import React from 'react'

import { Container } from '@/components/atoms/grid'
import { Divider } from '@/components/molecules/divider'
import { AboutMe } from '@/components/organisms/about-me'
import { CTASection } from '@/components/organisms/cta-section'
import { HomeHero } from '@/components/organisms/home-hero'
import { WorkSection } from '@/components/organisms/work-section'

export default function Home() {
  return (
    <>
      <HomeHero className="mb-0 sm:mb-48" />
      <Container as="main" className="px-4 lg:px-12">
        <CTASection className="mb-16 sm:mb-28" />
        <Divider className="mb-14 sm:mb-24" />
        <WorkSection className="mb-24 sm:mb-44" />
        <AboutMe className="mb-16 sm:mb-28" />
      </Container>
    </>
  )
}
