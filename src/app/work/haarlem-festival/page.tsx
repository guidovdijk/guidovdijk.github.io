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

export default function HaarlemFestival() {
  const index = 3
  const { current, prev, next } = getWorkData(index)

  return (
    <main className="relative z-[1] mb-12 mt-40">
      <Container className="px-4 lg:px-12">
        <WorkHeader
          className="mb-14"
          dates={['April - 2021']}
          index={index}
          roles={['Designer', 'Developer']}
          subjects={['PHP', 'Figma', 'ScSS']}
          subtitle="A Festival for Haarlem"
          title="Haarlem Festival"
        />
      </Container>

      <WorkHero className="mx-4 mb-24 bg-darkblue lg:mx-10">
        <Image
          alt="Logo of the Haarlem Festival"
          height={150}
          src="/images/logos/haarlem_festival.svg"
          width={200}
        />
      </WorkHero>

      <Container className="px-4 lg:px-12">
        <Grid gap="gap-y-20">
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">Introduction</h3>
              <p className="text-body">
                The Haarlem Festival was a second year school project where we
                promoted the city of Haarlem as an equal counter-part to
                Amsterdam with the use of a festival. The festival had 4
                different activities that needed to be promoted: The Cuisine,
                History, Dance and Jazz event. For these events you should also
                be able to pay a ticket. All the data for these events need to
                come from a CMS, which also needed to be designed and created.
                My part in this project was designing the CMS, Homepage, and the
                reusable components throughout the design (E.g., footer,
                navigation) and for the development I set up the project files,
                like Gulp and Webpack, created the base .SCSS files and created
                the CMS and payment system.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill>
              <Image
                alt="Dashboard of the Jazz section of the Haarlem Festival CMS website"
                fill
                src="/images/work/haarlem_festival/jazz_artists_overview_performance.webp"
              />
            </ImageGrid>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">CMS Dashboard</h3>
              <p className="text-body">
                The dashboard (just like the website itself) is made with PHP in
                combination with the MVC-pattern and the SCSS is written with
                BEM notations. Components that can be re-used are created in the
                components folder.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill>
              <Image
                alt="Dashboard where users can check and change the Jazz artist details"
                fill
                src="/images/work/haarlem_festival/jazz_artists_detail.webp"
              />
              <Image
                alt="Dashboard where users can create new performances for the Jazz artists"
                fill
                src="/images/work/haarlem_festival/jazz_artists_new_performance.webp"
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

      <NextPrevProject next={next} prev={prev} />
    </main>
  )
}
