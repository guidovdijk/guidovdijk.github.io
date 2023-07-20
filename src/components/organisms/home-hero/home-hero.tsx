import * as React from 'react'

import Image from 'next/image'
import {
  useTransform,
  useScroll,
  LazyMotion,
  domAnimation,
  m,
} from 'framer-motion'
import { HeroInfo } from '@/components/molecules/hero-info'
import { Col, Container, Grid } from '@/components/atoms/grid'
import { LocationInfo } from '@/components/atoms/location-info'

import GradientImage from 'public/images/gradient-hero.webp'

export interface IHomeHero {
  className?: string
}

export const HomeHero: React.FC<IHomeHero> = ({
  className = '',
}) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <>
      <div className="h-screen w-full absolute">
        <HeroInfo />
      </div>
      <Container as="section" className={`px-4 lg:px-12 flex flex-col z-[1] min-h-screen overflow-hidden relative pt-20 ${className}`}>
        <Grid className="mt-8 lg:mt-16 xl:mt-28 relative" gap="gap-0">
          <Col span={12}>
            <p className="pl-4 text-body">Hello There! I am...</p>
          </Col>
          <Col span={12}>
            <h1 className="mb-4 lg:mb-14 font-heading font-bold uppercase text-heading-3-xl flex flex-col col-span-12">
              <Grid as="span" gap="gap-0">
                <Col as="span" className="block col-span-12">Guido</Col>
                <Col as="span" className="block col-span-12">van Dijk</Col>
                <Col as="span" className="block col-span-11 xl:col-span-10 lg:col-start-2 xl:col-start-3">Developer</Col>
                <Col as="span" className="block col-span-11 xl:col-span-10 lg:col-start-4 xl:col-start-3">Designer</Col>
              </Grid>
            </h1>
          </Col>
          <Col className="absolute z-[-1] col-start-7 sm:col-span-6 sm:col-start-6 xl:col-start-7 xl:col-span-4">
            <LazyMotion features={domAnimation}>
              <m.div
                className="transform-gpu"
                style={{ y }}
              >
                <Image
                  alt="Gradient image"
                  className="top-0 max-h-[660px] w-full object-cover lg:object-fill"
                  placeholder="blur"
                  src={GradientImage}
                />
              </m.div>
            </LazyMotion>
          </Col>
          <Col className="col-span-10 lg:col-span-12">
            <LocationInfo>located in the netherlands</LocationInfo>
          </Col>
        </Grid>
      </Container>
    </>
  )
}
