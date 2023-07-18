import { IconName } from '@/components/atoms/icon'

export const isAvailableForHire = true

export interface ISocialItemProps {
  text: string
  icon: IconName
  href: string
}

export const socialData: ISocialItemProps[] = [
  {
    text: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/guido-van-dijk-ma/',
  },
  {
    text: 'GitHub',
    icon: 'github',
    href: 'https://github.com/guidovdijk',
  },
  {
    text: 'Email',
    icon: 'email',
    href: 'mailto:van.guido@hotmail.com',
  },
  {
    text: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/dv_guido/',
  },
]
