import { Email } from '@/components/molecules/email'
import { FooterItem } from '@/components/molecules/footer-item'
import * as React from 'react'

export const Footer: React.FC = () => (
  <footer
    className="border-black-100 border-t"
  >
    <div className="flex flex-col gap-y-16 pt-16 pb-14 px-4 lg:px-24">
      <div className="block">
        <p className="text-subtitle uppercase text-white-500 block">
          Need a helping hand? I got two!
        </p>
        <Email onClick={() => { }} />
      </div>

      <div className="flex flex-row">
        <FooterItem
          items={[
            {
              text: 'LinkedIn',
              icon: 'linkedin',
              href: '#',
            },
            {
              text: 'GitHub',
              icon: 'github',
              href: '#',
            },
            {
              text: 'Email',
              icon: 'email',
              href: '#',
            },
            {
              text: 'Instagram',
              icon: 'instagram',
              href: '#',
            },
          ]}
          title="socials:"
        />
        <p className="flex items-end justify-end flex-grow">@Guido van Dijk - 2023</p>
      </div>
    </div>
  </footer>
)
