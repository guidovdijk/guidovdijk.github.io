import * as React from 'react'

import Image from 'next/image'

import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from 'framer-motion'
import GradientImage from 'public/images/gradient-hero.webp'

import { Col, Container, Grid } from '@/components/atoms/grid'
import { LocationInfo } from '@/components/atoms/location-info'
import { Blob } from '@/components/molecules/blob'
import { HeroInfo } from '@/components/molecules/hero-info'

export interface IHomeHero {
  className?: string
}

const HomeHero: React.FC<IHomeHero> = ({ className = '' }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <div className="relative overflow-x-clip overflow-y-visible">
      <div className="absolute h-screen w-full">
        <HeroInfo />
      </div>
      <Container
        as="section"
        className={`relative z-[1] flex min-h-screen flex-col overflow-hidden px-4 pt-36 sm:pt-20 lg:px-12 xl:min-h-0 ${className}`}
      >
        <Grid className="relative mt-8 lg:mt-16 xl:mt-28" gap="gap-0">
          <Col span={12}>
            <p className="pl-1 text-body font-normal sm:pl-2 md:pl-4">
              Hello There! I am...
            </p>
          </Col>
          <Col span={12}>
            <h1 className="col-span-12 mb-4 flex flex-col font-heading text-heading-3-xl font-bold uppercase lg:mb-14">
              <Grid as="span" gap="gap-0">
                <Col as="span" className="col-span-12 mb-2 block sm:mb-0">
                  Guido
                </Col>
                <Col as="span" className="col-span-12 mb-2 block sm:mb-0">
                  van Dijk
                </Col>
                <Col
                  as="span"
                  className="col-span-11 mb-2 block sm:mb-0 lg:col-start-2 xl:col-span-10 xl:col-start-3"
                >
                  Developer
                </Col>
                <Col
                  as="span"
                  className="col-span-11 mb-2 block sm:mb-0 lg:col-start-4 xl:col-span-10 xl:col-start-3"
                >
                  Designer
                </Col>
              </Grid>
            </h1>
          </Col>
          <Col className="absolute z-[-1] col-start-7 sm:col-span-6 sm:col-start-6 xl:col-span-4 xl:col-start-7">
            <LazyMotion features={domAnimation}>
              <m.div className="transform-gpu" style={{ y }}>
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
      <Blob />
    </div>
  )
}

export default React.memo(HomeHero)
