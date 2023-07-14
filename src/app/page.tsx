'use client'

import React from 'react'

import { Divider } from '@/components/molecules/divider'
import { AboutMe } from '@/components/organisms/about-me'
import { CTASection } from '@/components/organisms/cta-section'
import { WorkSection } from '@/components/organisms/work-section'
import { Container } from '@/components/atoms/grid'

export default function Home() {
  return (
    <Container as="main" className="px-4 lg:px-12">
      <div className="h-screen relative" />
      <CTASection className="mb-28" />
      <Divider className="mb-24" />
      <WorkSection className="mb-44" />
      <AboutMe className="mb-28" />
    </Container>
  )
}
