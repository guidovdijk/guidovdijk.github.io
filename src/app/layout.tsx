import React from 'react'
import { inter, avantGarde } from './fonts'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} ${avantGarde.variable}`} lang="en">
      <body>
        <div className="container mx-auto px-12">
          {children}
        </div>
      </body>
    </html>
  )
}
