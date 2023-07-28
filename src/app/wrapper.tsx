'use client'

import React from 'react'

import { ModalProvider } from '@/components/molecules/modal'
import { Footer } from '@/components/organisms/footer'
import { Navigation } from '@/components/organisms/navigation'

import { avantGarde, inter } from './fonts'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <body className={`relative ${inter.variable} ${avantGarde.variable}`}>
      <Navigation />
      <div className="relative">
        <ModalProvider>{children}</ModalProvider>
        <Footer />
      </div>
      <div className="absolute -left-[10%] -top-[200px] z-[0] aspect-square w-6/12 rounded-full bg-[#05222F] blur-[750px]" />
    </body>
  )
}
