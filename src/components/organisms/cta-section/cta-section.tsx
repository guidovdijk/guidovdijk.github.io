import * as React from 'react'

import { Col, Grid } from '@/components/atoms/grid'
import { ClipText } from '@/components/molecules/clip-text'
import { CompanyRow } from '@/components/molecules/company-row'

interface ICTASectionProps extends React.HTMLAttributes<HTMLElement> {}

const CTASection: React.FC<ICTASectionProps> = ({ className, ...props }) => (
  <Grid
    {...props}
    as="section"
    className={`flex items-center gap-y-12 lg:gap-y-24 ${className}`}
  >
    <Col className="col-span-12">
      <h2
        aria-label="My love for front-end stems from translating great designs into websites and apps that people enjoy to use."
        className="text-heading-xl font-semibold"
      >
        <ClipText offset={20}>My love for front-end stems from</ClipText>
        <ClipText offset={20}>translating great designs into</ClipText>
        <ClipText offset={20}>websites / apps that people</ClipText>
        <ClipText isEnd offset={20}>
          enjoy to use
        </ClipText>
      </h2>
    </Col>
    <Col className="col-span-12">
      <CompanyRow />
    </Col>
  </Grid>
)

export default React.memo(CTASection)
