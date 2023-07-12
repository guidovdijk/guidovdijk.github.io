'use client'

import { Divider } from '@/components/molecules/divider'
import { AboutMe } from '@/components/organisms/about-me'
import { CTASection } from '@/components/organisms/cta-section'
import { WorkSection } from '@/components/organisms/work-section'
import React from 'react'

export default function Home() {
  return (
    <main>
      <div className="h-screen" />
      <CTASection />
      <Divider />
      <WorkSection />
      <AboutMe />
    </main>
  )
}
