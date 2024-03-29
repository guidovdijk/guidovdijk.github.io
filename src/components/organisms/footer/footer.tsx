import * as React from 'react'

import { socialData } from '@/helpers/constants/social-data'

import { Container } from '@/components/atoms/grid'
import { Email } from '@/components/molecules/email'
import { FooterItem } from '@/components/molecules/footer-item'

const Footer: React.FC = () => (
  <footer>
    <div className="mx-auto px-4 lg:px-12">
      <div className="h-[1px] w-full bg-black-300" />
    </div>
    <Container className="px-4 lg:px-12">
      <div className="flex flex-col gap-y-8 pb-7 pt-8 sm:gap-y-16 sm:pb-14 sm:pt-16">
        <div className="block">
          <p className="block text-subtitle uppercase text-white-500">
            Need a helping hand? I got two!
          </p>
          <Email />
        </div>

        <div className="flex flex-row">
          <FooterItem items={socialData} title="socials:" />
          <p className="flex flex-grow items-end justify-end">
            @Guido van Dijk - 2023
          </p>
        </div>
      </div>
    </Container>
  </footer>
)

export default React.memo(Footer)
