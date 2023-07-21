import * as React from 'react'
import { useState } from 'react'
import { NavigationItem } from '@/components/atoms/navigation-item'
import {
  LazyMotion,
  domAnimation,
  m,
} from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useScroll } from '@/hooks/use-scroll'

export const Navigation: React.FC = () => {
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
        className="flex z-[100] fixed w-full items-center top-0 h-20 px-4 sm:px-12 backdrop-blur-md bg-black-500/[.01]"
        initial={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3, type: 'tween' }}
      >
        <ul className="h-full items-center ml-auto justify-center sm:justify-end flex gap-x-11">
          <li>
            <NavigationItem
              href="/"
              isActive={pathname === '/'}
            >
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
