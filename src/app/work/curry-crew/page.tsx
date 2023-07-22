'use client'

import React from 'react'

import Image from 'next/image'

import { getWorkData } from '@/helpers/utils/getWorkData'

import { Button } from '@/components/atoms/button'
import { Col, Container, Grid } from '@/components/atoms/grid'
import { ImageGrid } from '@/components/molecules/image-grid'
import { WorkHero } from '@/components/molecules/work-hero'
import { NextPrevProject } from '@/components/organisms/next-prev-project'
import { WorkHeader } from '@/components/organisms/work-header'

export default function CurryCrew() {
  const index = 1
  const { current, prev, next } = getWorkData(index)

  return (
    <main className="relative z-[1] mb-12 mt-40">
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

      <WorkHero className="mx-4 mb-24 bg-green lg:mx-10">
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
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">The Playground</h3>
              <p className="text-body">
                Vestibulum gravida nisl et mauris finibus feugiat. Nulla
                tincidunt convallis libero ut posuere. Praesent sed sem sed mi
                vehicula volutpat. Mauris posuere justo non quam ultricies
                molestie. Nunc porta, odio sed consequat auctor, metus ex
                venenatis lorem, eget suscipit dui sem vitae leo. Nunc ac
                sagittis erat. Phasellus velit purus, efficitur a tellus id,
                consequat porta lectus. In eu mi gravida urna aliquet gravida
                eget non justo.
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
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">Approach</h3>
              <p className="text-body">
                Vestibulum gravida nisl et mauris finibus feugiat. Nulla
                tincidunt convallis libero ut posuere. Praesent sed sem sed mi
                vehicula volutpat. Mauris posuere justo non quam ultricies
                molestie. Nunc porta, odio sed consequat auctor, metus ex
                venenatis lorem, eget suscipit dui sem vitae leo. Nunc ac
                sagittis erat. Phasellus velit purus, efficitur a tellus id,
                consequat porta lectus. In eu mi gravida urna aliquet gravida
                eget non justo.
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

      {current.url && (
        <div className="sticky bottom-8 flex w-full justify-end">
          <Button
            className="sticky z-50 ml-auto mr-4 mt-6 flex lg:mr-10"
            href={current.url}
            target="_blank"
            variation="tertiary"
          >
            GitHub Project
          </Button>
        </div>
      )}
      <div className="mx-auto my-32 px-4 lg:px-12">
        <div className="h-[1px] w-full bg-black-300" />
      </div>

      <NextPrevProject next={next} prev={prev} />
    </main>
  )
}
