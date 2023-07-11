import { Col, Grid } from '@/components/atoms/grid'
import * as React from 'react'

// TODO: Create a section text section with a darker color which is used as background
// TODO: Use clip-path inset to mask the white text
// TODO: Animate the clip-path on scroll to show the white text by letter by line
// TODO: Ensure screen-readers will be able to read the text
// TODO: Ensure SEO is valid and 1 heading tag will be used
// TODO: Also style the custom "." the same way as the text
// TODO: (optional) Create a provider to use the animation for better re-usability
export const CTASection: React.FC = () => (
  <Grid
    as="section"
    className="items-center flex"
  >
    <Col className="col-span-12">
      <h2 className="text-heading-xl font-semibold">
        My love for front-end stems from<br />
        translating great designs into<br />
        websites / apps that people<br />
        enjoy to use <div className="inline-flex bg-background h-2 w-2 -ml-3" />
      </h2>
    </Col>
  </Grid>
)
