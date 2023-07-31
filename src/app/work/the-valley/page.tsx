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

export default function TheValley() {
  const index = 4
  const { current, prev, next } = getWorkData(index)

  return (
    <main className="relative z-[1] mb-12 mt-40">
      <Container className="px-4 lg:px-12">
        <WorkHeader
          className="mb-14"
          dates={['April - 2022']}
          index={index}
          roles={['Developer']}
          subjects={['SwiftUI']}
          subtitle="Work Throughout my 4 years"
          title="The Valley"
        />
      </Container>

      <WorkHero className="mx-4 mb-24 bg-red lg:mx-10">
        <Image
          alt="Logo of The Valley"
          height={150}
          src="/images/logos/thevalley.svg"
          width={200}
        />
      </WorkHero>

      <Container className="px-4 lg:px-12">
        <Grid gap="gap-y-12 sm:gap-y-20">
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">Introduction</h3>
              <p className="text-body">
                The work I have done at The Valley can be categorized into three
                kinds of projects, because the front-end code base of all three
                differ from each other.
              </p>
              <p className="text-body">
                Client websites, which are made in Vue.js in combination with
                Handlebars. The Customer Data Platform (dashboard), which is
                entirely written in Vue.js, And campaigns websites, which are
                entirely written in Handlebars.
              </p>
            </div>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">Client websites</h3>
              <p className="text-body">
                I worked together with multiple departments in scrum teams to
                translated designs for Nike, FC Utrecht, Fokker, Quin, Pameijer,
                Daiken into re-usable front-end components with Vue.js or
                Handlebars and have it work with their C# back-end.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill>
              <Image
                alt="Page that explains information of the current pokemon"
                fill
                src="/images/work/the_valley/fcutrecht_webshop_overivew.webp"
              />
              <Image
                alt="Page that describes the stats of the pokemon"
                fill
                src="/images/work/the_valley/fcutrecht_webshop.webp"
              />
              <Image
                alt="Page that describes the evolutions of the pokemon"
                fill
                src="/images/work/the_valley/quinmd_homepage.webp"
              />
            </ImageGrid>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">
                Customer Data Platform (Dashboard)
              </h3>
              <p className="text-body">
                I worked on The Valley their Customer Data Platform Dashboard
                “Nominow”. Nominow is an open system and streams customer
                profiles to the systems in the customer's marketing and sales
                stack, such as email applications and marketing automation
                platforms. Nominow is built as an open and adaptable system that
                enriches the existing marketing stack. (Nominow, 2022) Find more
                information about it
              </p>
              <p className="text-body">
                The front-end of the dashboard was created by me and 2 other
                developers. It was created in Vue.js and we used Bulma as SCSS
                library.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill>
              <Image
                alt="Page of the Customer Data Platform Nominow"
                fill
                quality={100}
                src="/images/work/the_valley/nominow_flowbuilder.webp"
              />
            </ImageGrid>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">
                Campaign Websites
              </h3>
              <p className="text-body">
                The campaign websites were created for Postcode-, Buurt, and
                Vriendeloterij. These websites are only needed for a small
                period. But the development cycle of these websites is around 3
                weeks to create and 1-2 weeks for client feedback. The websites
                make use of the same Handlebars.js components, but differ in
                styling.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill>
              <Image
                alt="Website of the Postcode Loterij"
                fill
                quality={100}
                src="/images/work/the_valley/postcodeloterij_page.webp"
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
