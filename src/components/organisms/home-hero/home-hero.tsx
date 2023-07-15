import * as React from 'react'

import { isAvailableForHire, socialData } from '@/helpers/constants/social-data'
import { Button } from '@/components/atoms/button'
import { HeroSocialLink } from '@/components/atoms/hero-social-link'
import { Tooltip } from '@/components/atoms/tooltip'

// TODO: Fadeout the email and social media links when scrolling
// TODO: Add the Tooltip functionality
export const HomeHero: React.FC = () => (
  <section className="h-screen relative px-4 sm:px-12 flex items-end pt-20 pb-6 sm:pb-14">
    <div className="flex flex-col gap-y-1.5 mr-auto">
      <p className="text-subtitle uppercase text-white-500">{isAvailableForHire ? 'Available for hire' : 'My Email'}</p>
      <div className="flex">
        <Tooltip
          className=""
          isVisible={false}
          text="Email copied"
        >
          <Button onClick={() => { }} variation="secondary">
            van.guido@hotmail.com
          </Button>
        </Tooltip>
      </div>
    </div>
    <div className="flex ml-auto">
      <div className="flex flex-col items-end gap-y-4">
        {
          socialData.map((item, index) => (
            <HeroSocialLink
              key={`hero-social-${index}`}
              href={item.href}
              iconName={item.icon}
            >
              {item.text}
            </HeroSocialLink>
          ))
        }
      </div>
    </div>
  </section>
)
