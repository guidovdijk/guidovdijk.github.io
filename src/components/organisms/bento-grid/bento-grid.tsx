import * as React from 'react'

import { Grid } from '@/components/atoms/grid'

const BentoGrid: React.FC<{
  className?: string
  children: React.ReactNode
}> = ({ className = '', children }) => (
  <Grid
    as="section"
    className={`grid-flow-dense grid-rows-[repeat(9,120px)] gap-y-6 ${className}`}
  >
    {children}
  </Grid>
)

export default React.memo(BentoGrid)
