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

export default function NewsApp() {
  const index = 5
  const { current, prev, next } = getWorkData(index)

  return (
    <main className="relative z-[1] mb-12 mt-40">
      <Container className="px-4 lg:px-12">
        <WorkHeader
          className="mb-14"
          dates={['October - 2022']}
          index={index}
          roles={['Developer']}
          subjects={['Kotlin', 'Java']}
          subtitle="InHolland News for Android"
          title="News App"
        />
      </Container>

      <WorkHero className="mx-4 mb-24 bg-magenta lg:mx-10">
        <Image
          alt="Logo of InHolland"
          height={150}
          src="/images/logos/inholland.svg"
          width={200}
        />
      </WorkHero>

      <Container className="px-4 lg:px-12">
        <Grid gap="gap-y-12 sm:gap-y-20">
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">Introduction</h3>
              <p className="text-body">
                In our introduction course for our fourth year Mobile
                Application minor we created a news reader application in Kotlin
                with composables.
              </p>
            </div>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">
                Functionality and screens
              </h3>
              <p className="text-body">
                There were multiple requirements for the application. To name a
                few we needed to:
                <ol className="list-decimal pl-8 pt-2 sm:pl-12">
                  <li>Add infinite scrolling to the news overview page.</li>
                  <li>Login and register an return an AuthToken.</li>
                  <li>
                    Save liked articles and showcase them on a seperate page.
                  </li>
                </ol>
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill={false}>
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/news_app/login.webp"
              />
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/news_app/articles_overview.webp"
              />
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/news_app/articles_detail.webp"
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
