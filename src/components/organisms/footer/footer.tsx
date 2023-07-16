import { Container } from '@/components/atoms/grid'
import { Email } from '@/components/molecules/email'
import { FooterItem } from '@/components/molecules/footer-item'
import { socialData } from '@/helpers/constants/social-data'
import * as React from 'react'

export const Footer: React.FC = () => (
  <footer>
    <div className="mx-auto px-4 lg:px-12">
      <div className="w-full bg-black-300 h-[1px]" />
    </div>
    <Container className="px-12">
      <div className="flex flex-col gap-y-16 pt-16 pb-14">
        <div className="block">
          <p className="text-subtitle uppercase text-white-500 block">
            Need a helping hand? I got two!
          </p>
          <Email />
        </div>

        <div className="flex flex-row">
          <FooterItem
            items={socialData}
            title="socials:"
          />
          <p className="flex items-end justify-end flex-grow">@Guido van Dijk - 2023</p>
        </div>
      </div>
    </Container>
  </footer>
)
