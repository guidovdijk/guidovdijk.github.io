import { ICardProps } from '@/components/molecules/card'

export const workData: ICardProps[] = [
  {
    index: 0,
    className: 'lg:hover:bg-red',
    description:
      'Some of the work I have done during my four years as a front-end developer.',
    image: {
      src: '/images/logos/thevalley.svg',
      alt: 'The valley',
      width: 175,
      height: 68,
    },
    href: '/work/the-valley',
    subjects: ['UX', 'Front-end Dev'],
    url: undefined,
  },
  {
    index: 1,
    className: 'lg:hover:bg-green',
    description:
      'A Dashboard to schedule tournaments, create teams, and show statistics for 150 to 200 players.',
    image: {
      src: '/images/logos/currycrew_white.svg',
      alt: 'Logo of the tournament dashboard',
      width: 175,
      height: 68,
    },
    href: '/work/curry-crew',
    subjects: ['UI', 'UX', 'Vue.js'],
    url: 'https://github.com/guidovdijk/Tournament-Dashboard',
  },
  {
    index: 2,
    className: 'lg:hover:bg-orange',
    description:
      'A custom Poly-as-Mono, Front-end, component library created for The Valley.',
    image: {
      src: '/images/logos/cbl.svg',
      alt: 'Logo of the custom component library',
      width: 175,
      height: 68,
    },
    subjects: ['UI', 'Front-end'],
    href: '/work/component-library',
    url: undefined,
  },
  {
    index: 3,
    className: 'lg:hover:bg-darkblue',
    description:
      'A school project where I designed and developed a festival website for the city of Haarlem.',
    image: {
      src: '/images/logos/haarlem_festival_white.svg',
      alt: 'Logo of the Haarlem Festival',
      width: 175,
      height: 68,
    },
    href: '/work/haarlem-festival',
    subjects: ['UI', 'UX', 'Front-end'],
    url: 'https://github.com/guidovdijk/Haarlem-Festival',
  },
  {
    index: 4,
    className: 'lg:hover:bg-lightblue',
    description:
      'A pokemon app for iOS created which I created with the PokemonAPI and Swift UI.',
    image: {
      src: '/images/logos/pokemon.svg',
      alt: 'Logo of the company and application',
      width: 175,
      height: 68,
    },
    href: '/work/pokemon-api',
    subjects: ['UI', 'Swift'],
    url: 'https://github.com/guidovdijk/swift-pokemonapi',
  },
  {
    index: 5,
    className: 'lg:hover:bg-magenta',
    description:
      'A new reader app for Android created with the API from InHolland and Kotlin Composable.',
    image: {
      src: '/images/logos/inholland.svg',
      alt: 'Logo of the school InHolland',
      width: 175,
      height: 68,
    },
    href: '/work/news-app',
    subjects: ['UI', 'Kotlin'],
    url: 'https://github.com/guidovdijk/kotlin-newsapp',
  },
]
