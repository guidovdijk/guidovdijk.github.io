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
]
