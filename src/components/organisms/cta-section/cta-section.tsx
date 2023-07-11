import { Col, Grid } from '@/components/atoms/grid'
import { CompanyRow } from '@/components/molecules/company-row'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as React from 'react'

const useClipAnimation = (ref: React.RefObject<HTMLElement>, index: number) => {
  const offset = 100 * index
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${offset}px end`, '-500px'],
  })
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ['100%', '0%'],
  )

  return clip
}

// TODO: Create a section text section with a darker color which is used as background
// TODO: Use clip-path inset to mask the white text
// TODO: Animate the clip-path on scroll to show the white text by letter by line
// TODO: Ensure screen-readers will be able to read the text
// TODO: Ensure SEO is valid and 1 heading tag will be used
// TODO: Change style background rotation of the "."
// TODO: Also style the custom "." the same way as the text
// TODO: (optional) Create a provider to use the animation for better re-usability
export const CTASection: React.FC = () => {
  const ref = React.useRef(null)
  const clip1 = useClipAnimation(ref, 1)

  return (
    <Grid
      as="section"
      className="items-center flex gap-y-12 md:gap-y-24"
    >
      <Col className="col-span-12">
        <h2
          aria-label="My love for front-end stems from translating great designs into websites and apps that people enjoy to use."
          className="text-heading-xl font-semibold"
        >
          <motion.span
            ref={ref}
            className="block clip-inset"
            style={{ '--clip': clip1 } as any}
          >
            My love for front-end stems from
          </motion.span>
          <motion.span className="block" style={{ clipPath: 'inset(0 100 0 0)' }}>
            translating great designs into
          </motion.span>
          <motion.span className="block" style={{ clipPath: 'inset(0 100 0 0)' }}>
            websites / apps that people
          </motion.span>
          <motion.span className="block" style={{ clipPath: 'inset(0 100 0 0)' }}>
            enjoy to use
            <div className="inline-block bg-background h-2 w-2 ml-1" />
          </motion.span>
        </h2>
      </Col>
      <Col className="col-span-12">
        <CompanyRow />
      </Col>
    </Grid>
  )
}
