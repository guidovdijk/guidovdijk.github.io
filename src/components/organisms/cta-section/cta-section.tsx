import * as React from 'react'
import { Col, Grid } from '@/components/atoms/grid'
import { ClipText } from '@/components/molecules/clip-text'
import { CompanyRow } from '@/components/molecules/company-row'

export const CTASection: React.FC = () => (
  <Grid
    as="section"
    className="items-center flex gap-y-12 md:gap-y-24"
  >
    <Col className="col-span-12">
      <h2
        aria-label="My love for front-end stems from translating great designs into websites and apps that people enjoy to use."
        className="text-heading-xl font-semibold"
      >
        <ClipText index={1}>
          My love for front-end stems from
        </ClipText>
        <ClipText index={2}>
          translating great designs into
        </ClipText>
        <ClipText index={3}>
          websites / apps that people
        </ClipText>
        <ClipText index={4} isEnd>
          enjoy to use
        </ClipText>
      </h2>
    </Col>
    <Col className="col-span-12">
      <CompanyRow />
    </Col>
  </Grid>
)
