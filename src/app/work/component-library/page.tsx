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

export default function ComponentLibrary() {
  const index = 2
  const { current, prev, next } = getWorkData(index)

  return (
    <main className="relative z-[1] mb-12 mt-40">
      <Container className="px-4 lg:px-12">
        <WorkHeader
          className="mb-14"
          dates={['December - 2021']}
          index={index}
          roles={['Designer', 'Developer']}
          subjects={['JavaScript', 'Gulp']}
          subtitle="Component Block Library"
          title="Component Library"
        />
      </Container>

      <WorkHero className="mx-4 mb-24 bg-orange lg:mx-10">
        <Image
          alt="Logo of the component library"
          height={150}
          src="/images/logos/cbl.svg"
          width={160}
        />
      </WorkHero>

      <Container className="px-4 lg:px-12">
        <Grid gap="gap-y-20">
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">Introduction</h3>
              <p className="text-body">
                With constant development and expansion of both The Valley their
                websites and respective components, a mismatch can occur in
                functionality between these components. This component library
                is to provide a proof-of-concept that: prevents/minimize
                functionality mismatches, by creating a centralized component
                registry. It describes how these components should be setup and
                has a demo environment with documentation and demonstration for
                these components.
                <br />
                <br />
                <span className="font-bold">Disclaimer</span>: Due to the fact I
                made this project for a company I am not comfortable by making
                the GitHub repository public. I did however add a few code
                snippets on this page.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill>
              <Image
                alt="Dashboard homepage showing the documentation and list of components in the library"
                fill
                src="/images/work/component_library/homepage_library.webp"
              />
            </ImageGrid>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">
                The Component Library
              </h3>
              <p className="text-body">
                With the library I wanted to make sure that the development
                cycle and the usage of Git is the same as that of the websites,
                while also be able to have a centralized development platform
                where these components can be made. After researching different
                repository-structures, a decision had been made to use a
                “Poly-as-Mono” repository structure. This allows all components
                to be in a separated Git repository and have a separate
                node_modules folder, but still be able to be loaded into the
                same development platform. By using this we do not need multiple
                copies of Webpack, Gulp, and NPM development packages per
                component, which reduces the amount of data on your hard drive.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill>
              <Image
                alt="Code files overview of the component package"
                fill
                src="/images/work/component_library/package_structure_example.webp"
              />
              <Image
                alt="Code files overview of the entire project"
                fill
                src="/images/work/component_library/project_overview.webp"
              />
            </ImageGrid>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">
                Component Structure / Documentation
              </h3>
              <p className="text-body">
                JSDoc, SCSS Doc, and, for the HTML, inline markdown syntax in
                combination with a separate Gulp task are used to document the
                code and make sure it can be written in the files itself. This
                kind of documentation will also be converted to HTML and put
                into the demo page. This way developers can check how the code
                work in the demo environment, without the need to navigate to
                the separate files. Also, the comments get converted to Markdown
                and saved in a separate file, so it can be easily read in the
                DevOps environment or GitHub repository.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill={false}>
              <Image
                alt="Code in the component file that creates the documentation"
                fill
                src="/images/work/component_library/code_documentation.webp"
              />
              <Image
                alt="Dashboard of the showing a specific component its documentation and demo"
                fill
                src="/images/work/component_library/gulp_task.webp"
              />
            </ImageGrid>
          </Col>
          <Col className="col-span-12 md:col-span-7">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-heading-s font-semibold">Demo Environment</h3>
              <p className="text-body">
                The demo environment shows three parts. A demo showing the
                functionality of the code, the documentation of the code, and
                the documentation of the README.md file. The demo environment
                has been designed to look (almost) identical to The Valley their
                component documentation of the websites.
                <br />
                <br />
                The documentation shown on the page is taken form inline
                comments in the component their JavaScript, SCSS, HTML files,
                and the ReadMe which is then formatted with gulp tasks.
              </p>
            </div>
          </Col>
          <Col span={12}>
            <ImageGrid autoFill={false}>
              <Image
                alt="Dashboard of the showing a specific component its documentation and demo"
                fill
                src="/images/work/component_library/demo_environment.webp"
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
