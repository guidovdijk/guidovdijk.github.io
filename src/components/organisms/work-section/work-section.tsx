import * as React from 'react'

import { Card, ICardProps } from '@/components/molecules/card'
import { List } from '@/components/atoms/list'
import { Button } from '@/components/atoms/button'

const work: Omit<ICardProps, 'index'>[] = [
  {
    className: 'lg:hover:bg-red',
    description: 'Some of the work I have done during my four years as a front-end developer.',
    image: {
      src: '/images/logos/thevalley.svg',
      alt: 'The valley',
      width: 175,
      height: 68,
    },
    subjects: ['UX', 'Front-end Dev'],
    url: 'https://github.com/guidovdijk',
  },
  {
    className: 'lg:hover:bg-green',
    description: 'A Dashboard to schedule tournaments, create teams, and show statistics for 150 to 200 players.',
    image: {
      src: '/images/logos/currycrew_white.svg',
      alt: 'Logo of the tournament dashboard',
      width: 175,
      height: 68,
    },
    subjects: ['UI', 'UX', 'Vue.js'],
    url: 'https://github.com/guidovdijk',
  },
  {
    className: 'lg:hover:bg-orange',
    description: 'A custom Poly-as-Mono, Front-end, component library created for The Valley.',
    image: {
      src: '/images/logos/cbl.svg',
      alt: 'Logo of the custom component library',
      width: 175,
      height: 68,
    },
    subjects: ['UI', 'Front-end'],
    url: 'https://github.com/guidovdijk',
  },
  {
    className: 'lg:hover:bg-darkblue',
    description: 'A school project where I designed and developed a festival website for the city of Haarlem.',
    image: {
      src: '/images/logos/haarlem_festival_white.svg',
      alt: 'Logo of the Haarlem Festival',
      width: 175,
      height: 68,
    },
    subjects: ['UI', 'UX', 'Front-end'],
    url: 'https://github.com/guidovdijk',
  },
  {
    className: 'lg:hover:bg-lightblue',
    description: 'A pokemon app for iOS created which I created with the PokemonAPI and Swift UI.',
    image: {
      src: '/images/logos/pokemon.svg',
      alt: 'Logo of the company and application',
      width: 175,
      height: 68,
    },
    subjects: ['UI', 'Swift'],
    url: 'https://github.com/guidovdijk',
  },
  {
    className: 'lg:hover:bg-magenta',
    description: 'A new reader app for Android created with the API from InHolland and Kotlin Composable.',
    image: {
      src: '/images/logos/inholland.svg',
      alt: 'Logo of the school InHolland',
      width: 175,
      height: 68,
    },
    subjects: ['UI', 'Kotlin'],
    url: 'https://github.com/guidovdijk',
  },
]

interface IWorkSectionProps extends React.HTMLAttributes<HTMLElement> { }

export const WorkSection: React.FC<IWorkSectionProps> = ({ ...props }) => (
  <section {...props}>
    <p className="text-subtitle uppercase text-white-500 mb-4">Selected work ({work.length})</p>
    <div className="flex flex-col gap-y-4 lg:gap-y-0 mb-11">
      {
        work.map((workItem, index) => (
          <Card
            key={`work-section-${index}`}
            index={index}
            {...workItem}
          />
        ))
      }
    </div>
    <div className="lg:pl-12 flex flex-col gap-y-2">
      <p className="text-body">Want so see more?</p>
      <List className="flex flex-row md:flex-col">
        <Button onClick={() => { }} variation="secondary">Checkout my GitHub</Button>
        <Button onClick={() => { }} variation="secondary">See the playground</Button>
      </List>
    </div>
  </section>
)
