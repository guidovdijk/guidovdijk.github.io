'use client'

import React from 'react'

import { ModalProvider } from '@/components/molecules/modal'
import { Footer } from '@/components/organisms/footer'
import { Navigation } from '@/components/organisms/navigation'

import { avantGarde, inter } from './fonts'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  // TODO: Figure out if the gradient should be kept, before moving to production
  const gradient =
    'before:z-20 before:bg-body before:fixed before:w-full before:h-48 before:bottom-0 before:pointer-events-none'

  return (
    <body
      className={`relative ${inter.variable} ${avantGarde.variable} ${
        false ? `pb-8 ${gradient}` : ''
      }`}
    >
      <Navigation />
      <div className="relative">
        <ModalProvider>{children}</ModalProvider>
        <Footer />
      </div>
      <div className="absolute -left-[10%] -top-[200px] z-[0] aspect-square w-6/12 rounded-full bg-[#05222F] blur-[750px]" />
    </body>
  )
}
