import * as React from 'react'
import { useState } from 'react'

import { usePathname } from 'next/navigation'

import { LazyMotion, domAnimation, m } from 'framer-motion'

import { useScroll } from '@/hooks/use-scroll'

import { NavigationItem } from '@/components/atoms/navigation-item'

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()

  useScroll(({ lastY, y }) => {
    const isWithinOffsetLimit = y < 100
    const hasScrolledUp = lastY > y

    const shouldBeVisible = hasScrolledUp || isWithinOffsetLimit
    setIsVisible(shouldBeVisible)
  })

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        animate={{
          y: isVisible ? '0px' : '-55px',
          opacity: isVisible ? 1 : 0,
        }}
        className="fixed top-0 z-[100] flex h-20 w-full items-center bg-black-500/[.01] px-4 backdrop-blur-md sm:px-12"
        initial={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3, type: 'tween' }}
      >
        <ul className="ml-auto flex h-full items-center justify-center gap-x-11 sm:justify-end">
          <li>
            <NavigationItem href="/" isActive={pathname === '/'}>
              Home
            </NavigationItem>
          </li>
          <li>
            <NavigationItem
              href="/playground"
              isActive={pathname === '/playground'}
            >
              Playground
            </NavigationItem>
          </li>
        </ul>
      </m.nav>
    </LazyMotion>
  )
}

export default React.memo(Navigation)
