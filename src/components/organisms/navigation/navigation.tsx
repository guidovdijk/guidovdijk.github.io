import * as React from 'react'
import { useState } from 'react'
import { NavigationItem } from '@/components/atoms/navigation-item'
import { useScroll } from '@/hooks/use-scroll'
import { motion } from 'framer-motion'

export const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useScroll(({ lastY, y }) => {
    const isWithinOffsetLimit = y < 100
    const hasScrolledUp = lastY > y

    const shouldBeVisible = hasScrolledUp || isWithinOffsetLimit
    setIsVisible(shouldBeVisible)
  })

  return (
    <motion.nav
      animate={{
        y: isVisible ? '0px' : '-55px',
        opacity: isVisible ? 1 : 0,
      }}
      className="flex z-30 fixed w-full items-center top-0 h-20"
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3, type: 'tween' }}
    >
      <ul className="h-full w-full items-center backdrop-blur-md bg-black-500/[.01] px-4 sm:px-12 mx-auto sm:ml-auto justify-center sm:justify-end flex gap-x-11">
        <li>
          <NavigationItem
            href="/home"
            isActive
          >
            Home
          </NavigationItem>
        </li>
        <li>
          <NavigationItem
            href="/playground"
            isActive={false}
          >
            Playground
          </NavigationItem>
        </li>
      </ul>
    </motion.nav>
  )
}
