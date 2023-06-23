/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      heading: [
        'AvantGarde',
        'sans-serif'
      ],
      base: [
        'Inter',
        'sans-serif'
      ]
    },
    fontSize: {
      /* Headings */
      'heading-l': ['clamp(1.375rem, 1.1228rem + 0.9747vw, 2rem)', 1.25],
      'heading': ['clamp(1.25rem, 1.1491rem + 0.3899vw, 1.5rem)', 1.25],
      'heading-s': ['clamp(1.125rem, 1.0746rem + 0.1949vw, 1.25rem)', 1.25],

      /* Body */
      'body-l': ['clamp(1.125rem, 1.0746rem + 0.1949vw, 1.25rem)', 1.5],
      'body': ['15px', 1.5],
    },
    screens: {
      'desktop-l': { max: '1440px' },
      'desktop-m': { max: '1280px' },
      'desktop-s': { max: '1120px' },
      'tablet-l': { max: '920px' },
      'tablet-m': { max: '768px' },
      'mobile-m': { max: '375px' }
    },
    colors: {
      white: {
        100: '#FFFFFF',
        200: '#FEFEFE',
        300: '#F1F1F1',
        400: '#CFCFCF',
        500: '#C8C8C8',
      },
      background: {
        100: '#393939',
        200: '#272729',
        300: '#0A0A0A',
      },
      pink: {
        100: '#DD117E',
      },
      purple: {
        100: '#C079FE',
      },
      blue: {
        100: '#9FD9FF',
      },
      gradient: {
        background: 'linear-gradient(180deg, var(--tw-colors-pink-100) 0%, var(--tw-colors-purple-100) 48.96%, var(--tw-colors-blue-100) 100%)',
        red: 'linear-gradient(45deg, #520000 0.11%, #E02C35 100%)',
        green: 'linear-gradient(225deg, #045742 0%, #000219 100%)',
        darkblue: 'linear-gradient(45deg, #021531 19.49%, #093A83 100%)',
        lightblue: 'linear-gradient(45deg, #4160A6 0%, #47A6EB 100%)',
        magenta: 'linear-gradient(45deg, #CA0088 0%, #FF64CC 100%)',
        orange: 'linear-gradient(45deg, #942C00 0.11%, #FF832A 100%)',
      },
    }
  },
  plugins: [],
}
