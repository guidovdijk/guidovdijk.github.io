import { NavigationItem } from '@/components/atoms/navigation-item'
import * as React from 'react'

export const Navigation: React.FC = () => (
  <nav className="flex">
    <ul className="backdrop-blur-lg bg-black-500/[.01] py-4 px-4 sm:py-8 sm:px-12 mx-auto sm:mr-0 sm:ml-auto justify-center sm:justify-end flex gap-x-11">
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
  </nav>
)
