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
      <CTASection className="mb-28" />
      <Divider className="mb-24" />
      <WorkSection className="mb-44" />
      <AboutMe className="mb-28" />
    </main>
  )
}
