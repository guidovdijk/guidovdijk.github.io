'use client'

import React from 'react'
import Image from 'next/image'
import { WorkHero } from '@/components/molecules/work-hero'
import { WorkHeader } from '@/components/organisms/work-header'
import { Col, Container, Grid } from '@/components/atoms/grid'
import { Button } from '@/components/atoms/button'
import { ImageGrid } from '@/components/molecules/image-grid'
import { Card } from '@/components/molecules/card'
import { getWorkData } from '@/helpers/utils/getWorkData'

export default function CurryCrew() {
  const index = 1
  const { current, prev, next } = getWorkData(index)

  return (
    <main className="relative z-[1] mt-40 mb-12">
      <Container className="px-4 lg:px-12">
        <WorkHeader
          className="mb-14"
          dates={['July - 2020']}
          index={index}
          roles={['Designer', 'Developer']}
          subjects={['JavaScript', 'Vue', 'MongoDB']}
          subtitle="Curry Crew"
          title="Tournament Dashboard"
        />
      </Container>

      <WorkHero
        className="bg-green mb-24 mx-4 lg:mx-10"
      >
        <Image
          alt="Logo of the tournament dashboard"
          height={150}
          src="/images/logos/currycrew.svg"
          width={160}
        />
      </WorkHero>

      <Container className="px-4 lg:px-12">
        <Grid gap="gap-y-20">
          <Col className="col-span-12 md:col-span-7">
            <div className="gap-y-4 flex flex-col">
              <h3
                className="text-heading-s font-semibold"
              >
                The Playground
              </h3>
              <p className="text-body">
                Vestibulum gravida nisl et mauris finibus feugiat.
                Nulla tincidunt convallis libero ut posuere.
                Praesent sed sem sed mi vehicula volutpat.
                Mauris posuere justo non quam ultricies molestie.
                Nunc porta, odio sed consequat auctor, metus ex venenatis
                lorem, eget suscipit dui sem vitae leo.
                Nunc ac sagittis erat. Phasellus velit purus, efficitur
                a tellus id, consequat porta lectus.
                In eu mi gravida urna aliquet gravida eget non justo.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill={false}>
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/tournament/dashboard_home.webp"
              />
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/tournament/dashboard_home.webp"
              />
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/tournament/dashboard_home.webp"
              />
            </ImageGrid>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="gap-y-4 flex flex-col">
              <h3
                className="text-heading-s font-semibold"
              >
                Approach
              </h3>
              <p className="text-body">
                Vestibulum gravida nisl et mauris finibus feugiat.
                Nulla tincidunt convallis libero ut posuere.
                Praesent sed sem sed mi vehicula volutpat.
                Mauris posuere justo non quam ultricies molestie.
                Nunc porta, odio sed consequat auctor, metus ex venenatis
                lorem, eget suscipit dui sem vitae leo.
                Nunc ac sagittis erat. Phasellus velit purus, efficitur
                a tellus id, consequat porta lectus.
                In eu mi gravida urna aliquet gravida eget non justo.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill={false}>
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/tournament/dashboard_home.webp"
              />
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/tournament/dashboard_home.webp"
              />
            </ImageGrid>
          </Col>
        </Grid>
      </Container>

      {
        current.url && (
          <Button
            className="sticky z-50 ml-auto mr-4 mt-6 -mb-6 lg:mr-10 flex bottom-8"
            href={current.url}
            variation="tertiary"
          >
            GitHub Project
          </Button>
        )
      }
      <div className="mx-auto my-32 px-4 lg:px-12">
        <div className="w-full bg-black-300 h-[1px]" />
      </div>

      <Container className="px-4 lg:px-12 mb-28">
        <Grid gap="gap-y-20">
          <Col span={12}>
            <section className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2">
                <p className="text-subtitle uppercase text-white-500">Next project</p>
                <Card {...next} className={`${next.className} border-b-0`} />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-subtitle uppercase text-white-500">Previous project</p>
                <Card {...prev} className={`${prev.className} border-b-0`} />
              </div>
            </section>
          </Col>
        </Grid>
      </Container>
    </main>
  )
}
