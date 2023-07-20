'use client'

// Fonts
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// Style
import './assets/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const avantGarde = localFont({
  variable: '--font-avant',
  display: 'swap',
  src: [
    {
      path: './assets/fonts/avant-garde/avant-garde-normal.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/avant-garde/avant-garde-book.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './assets/fonts/avant-garde/avant-garde-book-oblique.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './assets/fonts/avant-garde/avant-garde-demi.ttf',
      weight: '500',
      style: 'bold',
    },
  ],
})

export { inter, avantGarde }
