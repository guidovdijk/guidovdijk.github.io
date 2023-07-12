import { Button } from '@/components/atoms/button'
import { Col, Grid } from '@/components/atoms/grid'
import Image from 'next/image'
import * as React from 'react'

const AboutMeSvg: React.FC = () => (
  <svg fill="none" viewBox="0 0 81 78" xmlns="http://www.w3.org/2000/svg">
    <path d="M81 1H1V78" stroke="url(#paint0_linear_402_909)" />
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_402_909" x1="41" x2="41" y1="1" y2="78">
        <stop stopColor="#DD117E" />
        <stop offset="0.489583" stopColor="#C079FE" />
        <stop offset="1" stopColor="#9FD9FF" />
      </linearGradient>
    </defs>
  </svg>
)

interface IAboutMeProps extends React.HTMLAttributes<HTMLElement> { }

export const AboutMe: React.FC<IAboutMeProps> = ({
  className,
  ...props
}) => (
  <Grid
    {...props}
    as="section"
    className={`items-center flex ${className}`}
  >
    <Col className="lg:-order-1 order-1 col-span-12 lg:col-span-6 lg:col-start-2">
      <span className="text-subtitle uppercase text-white-500 mb-2">about me</span>
      <h2 className="text-heading-s mb-4">Hello! My name is Guido van Dijk.</h2>
      <div className="flex flex-col gap-y-8">
        <p>
          I am a Dutch Front-end developer with five years of
          work experience in design and web development.
          I specialize in Vue.js and JavaScript ES-Next,
          which I use to create optimized, accessible websites and applications,
          in a short amount of time.
        </p>
        <div className="flex sm:flex-row flex-col items-center gap-6">
          <Button className="sm:w-auto w-full" onClick={() => { }} variation="primary">My resume</Button>
          <Button onClick={() => { }} variation="secondary">My GitHub profile</Button>
        </div>
      </div>
    </Col>
    <Col className="col-span-12 relative gradient-shadow sm:col-span-10 lg:col-span-4">
      <Image
        alt="Image of Guido van Dijk, the developer of this portfolio"
        className="image-relative max-h-[660px] object-cover lg:object-fill"
        fill
        src="/images/profile.webp"
        style={{ objectPosition: 'top' }}
      />
      <div className="absolute w-20 h-20 -top-3 -left-3">
        <AboutMeSvg />
      </div>
    </Col>
  </Grid>
)
