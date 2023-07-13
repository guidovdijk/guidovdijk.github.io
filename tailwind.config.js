/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /grid-cols-/
    },
    {
      pattern: /col-span-/
    },
    {
      pattern: /col-start-/
    },
    {
      pattern: /col-end-/
    },
    {
      pattern: /fill-/
    },
    // TODO: Remove in production. This is only used to ensure storybook demo works without having to specify multiple heights
    {
      pattern: /row-span-/
    },
  ],
  theme: {
    extend: {
      blur: {
        '4xl': '240px',
      },
      aspectRatio: {
        'hero': '2.26 / 1',
      },
      borderWidth: {
        16: '16px'
      },
      dropShadow: {
        icon: '0px 2px 7px rgba(192, 121, 254, 0.31)',
      }
    },
    fontFamily: {
      heading: ['AvantGarde', 'sans-serif'],
      base: ['Inter', 'sans-serif'],
    },
    fontSize: {
      /* Headings */
      // 65px
      'heading-2-xl': ['clamp(2.5rem, 0.7679rem + 3.6607vw, 4.0625rem)', 1.25], // Not used yet
      'heading-xl': ['clamp(1.5rem, 0.7679rem + 3.6607vw, 4.0625rem)', 1.2], // Not used yet
      // 56px
      'heading-l': ['clamp(3rem, 2.734rem + 0.8511vw, 3.5rem)'],
      'heading': ['clamp(2.5rem, 2.1443298969072164rem + 1.5463917525773196vw, 4rem)', {
        lineHeight: 1.2,
        fontWeight: '600'
      }],
      // 28px
      'heading-s': ['clamp(1.5rem, 1.440721649484536rem + 0.25773195876288657vw, 1.75rem)', {
        lineHeight: 1,
        fontWeight: '600'
      }],

      /* Subtitle */
      // 15px
      'subtitle': ['0.9rem', {
        lineHeight: 1,
        fontWeight: '600',
        letterSpacing: '0.025em'
      }],

      /* Callout */
      // 18px
      'callout': ['clamp(1.125rem, 1.0746rem + 0.1949vw, 1.25rem)', {
        lineHeight: 1.5,
        fontWeight: '500'
      }],

      /* Body */
      // 21px
      'body': ['1.3125rem', {
        lineHeight: 1.2,
        fontWeight: '300'
      }],
      // 16px
      'body-s': ['1rem', 1.5],
    },
    // screens: {
    //   'desktop-l': { max: '1440px' },
    //   'desktop-m': { max: '1280px' },
    //   'desktop-s': { max: '1120px' },
    //   'tablet-l': { max: '920px' },
    //   'tablet-m': { max: '768px' },
    //   'mobile-m': { max: '375px' }
    // },
    colors: {
      white: {
        100: '#FFFFFF',
        200: '#FEFEFE',
        300: '#F1F1F1',
        400: '#CFCFCF',
        500: '#C8C8C8',
      },
      black: {
        100: '#393939',
        200: '#2E2E2E',
        300: '#272729',
        400: '#0D0D0D',
        500: '#0A0A0A',
      },
      pink: {
        100: '#DD117E',
      },
      purple: {
        100: '#C079FE',
      },
      blue: {
        100: '#9FD9FF',
        200: '#6CE5FF',
        300: '#000833',
      },
    },
    backgroundImage: {
      body: 'linear-gradient(0deg, #0d0d0d, transparent)',
      background: 'linear-gradient(-90deg, #DD117E 0%, #C079FE 48.96%, #9FD9FF 100%)',
      red: 'linear-gradient(15deg, #520000 0.11%, #E02C35 115%)',
      green: 'linear-gradient(225deg, #045742 0%, #000219 100%)',
      darkblue: 'linear-gradient(45deg, #021531 19.49%, #093A83 100%)',
      lightblue: 'linear-gradient(45deg, #4160A6 0%, #47A6EB 100%)',
      magenta: 'linear-gradient(45deg, #CA0088 0%, #FF64CC 100%)',
      orange: 'linear-gradient(45deg, #942C00 0.11%, #FF832A 100%)',
      black: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #0D0D0D 100%)',
    }
  },
  plugins: [
  ],
}
