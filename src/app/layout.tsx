import React from 'react'

import { Metadata } from 'next'

import Wrapper from './wrapper'

export const metadata: Metadata = {
  title: 'Guido van Dijk | Portfolio',
  description: 'Front-end developer portfolio created by Guido van Dijk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Wrapper>{children}</Wrapper>
    </html>
  )
}
