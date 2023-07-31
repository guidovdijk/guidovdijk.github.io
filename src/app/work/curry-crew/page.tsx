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

      <WorkHero className="bg-green">
        <Image
          alt="Logo of the tournament dashboard"
          fill
          priority
          src="/images/logos/currycrew.svg"
          style={{ objectFit: 'contain' }}
        />
      </WorkHero>

      <Container className="px-4 lg:px-12">
        <Grid gap="gap-y-12 sm:gap-y-20">
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">Introduction</h3>
              <p className="text-body">
                A few years ago, some friends and I started to organize League
                of Legends tournaments for around 150 to 200 players. We wanted
                to make a fair and automatic way of creating the teams, give
                participants an overview against who they play with / against,
                and be able to join teams that still miss players.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill>
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/tournament/dashboard_home.webp"
              />
            </ImageGrid>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">
                The Design and Needed Functionality
              </h3>
              <p className="text-body">
                The dashboard is created in Vue.js with Buefy as component
                library. The database used is MongoDB, because looking at what
                kind of data I would be working with NoSQL was the best options.
                Mongoose is used to connect to the database and setup the API
                calls. The dashboard design is also in the style of our Discord
                and YouTube branding, with a logo that should resemble a Raptor
                creature from League of Legends (which I made both). I spent my
                summer vacation working on this dashboard, but shamefully I
                could not complete it due to time constraints.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill>
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/tournament/dashboard_home.webp"
              />
            </ImageGrid>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">User Screens</h3>
              <p className="text-body">
                The user screens consist out of a homepage with their win rate,
                match history, and points / experience earned. We wanted the
                homepage to feel like an achievement page, where the user would
                feel proud of his accomplishments, for example: “My win ratio is
                better than half of the other players” or “I am in the top 10 of
                points earned”. In the future we wanted to tie rewards to these
                accomplishments, like creating custom profile images, reduced
                costs for paid tournaments. But we had left those features out,
                because we wanted to focus on the main parts first.
              </p>
              <p className="text-body">
                The user can also navigate to the tournament page where the user
                has an overview of upcoming tournaments with a sign-up deadline
                and start date / time. The user can sign up for a tournament,
                pick his team or get assigned a random team.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill={false}>
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/tournament/dashboard_tournament_empty.webp"
              />
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/tournament/dashboard_tournament_list.webp"
              />
            </ImageGrid>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <p className="text-body">
                If the user is an admin they can also update the tournament
                rules / date, remove users from teams, and change team sizes
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill={false}>
              <Image
                alt="Dashboard where users can check their win ratio and match history"
                fill
                src="/images/work/tournament/dashboard_tournament_with_people.webp"
              />
            </ImageGrid>
          </Col>
        </Grid>
      </Container>

      {current.url && (
        <div className="sticky bottom-6 flex w-full justify-end sm:bottom-8">
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
